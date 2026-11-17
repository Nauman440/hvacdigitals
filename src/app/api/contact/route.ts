import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE } from "@/lib/site";

/**
 * Lead capture endpoint. Every form on the site POSTs here.
 *
 * Delivery (configure in .env — see .env.example):
 *   LEAD_WEBHOOK_URL  → JSON POST to Zapier / Make / GoHighLevel / n8n / Slack, etc.
 *   RESEND_API_KEY + LEAD_NOTIFY_EMAIL → email notification via Resend.
 * If neither is set, leads are written to the server log so nothing is lost in development.
 */

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(160).optional().default(""),
  website: z.string().trim().max(300).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  budget: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().max(5000).optional().default(""),
  // Honeypot: real visitors never fill this in.
  website_url: z.string().optional(),
});

type Lead = z.infer<typeof leadSchema>;

/** Where lead notifications go. Server-only: never rendered on the site. */
const LEAD_INBOX = process.env.LEAD_NOTIFY_EMAIL || "muhammadnauman475@gmail.com";

// Basic in-memory rate limit (per server instance): 5 submissions / 10 min / IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function sendWebhook(lead: Omit<Lead, "website_url">, meta: Record<string, string>) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, ...meta }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return true;
}

async function sendEmail(lead: Omit<Lead, "website_url">, meta: Record<string, string>) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const to = LEAD_INBOX;
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Website", lead.website],
    ["Service", lead.service],
    ["Budget", lead.budget],
    ["Page", meta.page],
    ["Submitted", meta.submittedAt],
  ];
  const html = `
    <h2 style="font-family:sans-serif">New HVAC lead: ${escapeHtml(lead.service || "General Inquiry")}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><b>${escapeHtml(v)}</b></td></tr>`)
        .join("")}
    </table>
    ${lead.message ? `<p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(lead.message)}</p>` : ""}`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || "HVAC Digitals <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: lead.email,
      subject: `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""} · ${lead.service || "General Inquiry"}`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return true;
}

/** Quick health check: which delivery channels are configured (never reveals secrets). */
export async function GET() {
  return NextResponse.json({
    email: Boolean(process.env.RESEND_API_KEY),
    emailTo: process.env.RESEND_API_KEY ? LEAD_INBOX.replace(/^(.{2}).*(@.*)$/, "$1…$2") : null,
    webhook: Boolean(process.env.LEAD_WEBHOOK_URL),
  });
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ success: false, error: "Too many submissions. Please call us instead." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Please check the form and try again." },
      { status: 400 },
    );
  }

  const { website_url, ...lead } = parsed.data;
  // Bots fill the honeypot — pretend success, drop the lead.
  if (website_url) return NextResponse.json({ success: true });

  const meta = {
    page: req.headers.get("referer") ?? "",
    submittedAt: new Date().toISOString(),
    source: "hvacdigitals.com",
  };

  const results = await Promise.allSettled([sendWebhook(lead, meta), sendEmail(lead, meta)]);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value === true);
  const failures = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  failures.forEach((f) => console.error("[lead] delivery failed:", f.reason));

  if (!delivered) {
    if (failures.length > 0) {
      return NextResponse.json(
        { success: false, error: `We couldn't submit your request. Please call ${SITE.phone}.` },
        { status: 502 },
      );
    }
    // No delivery channel configured. Log it so it isn't lost, and on the live site tell the
    // visitor to call instead of pretending the lead went somewhere.
    console.error("[lead] NOT DELIVERED: set RESEND_API_KEY or LEAD_WEBHOOK_URL", JSON.stringify({ ...lead, ...meta }));
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { success: false, error: `Our form is temporarily unavailable. Please call ${SITE.phone}.` },
        { status: 503 },
      );
    }
  }

  return NextResponse.json({ success: true });
}
