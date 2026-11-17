"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Check, Loader2, Lock } from "lucide-react";
import { SITE } from "@/lib/site";
import { CONSENT_TEXT, ConsentNote } from "./ConsentNote";

type Props = {
  /** Where the form sits, sent with the lead (e.g. "home-hero", "meta-ads"). */
  source: string;
  /** Service the visitor was looking at. */
  defaultService?: string;
  tone?: "light" | "dark";
  heading?: string;
  subheading?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Event other components dispatch to pre-fill the website field and bring the form into view. */
export const PREFILL_EVENT = "leadform:website";

function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").replace(/^1(?=\d{10})/, "").slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function normalizeUrl(v: string) {
  const s = v.trim();
  if (!s) return "";
  return /^https?:\/\//i.test(s) ? s : `https://${s}`;
}

type Errors = Partial<Record<"name" | "phone" | "email" | "website", string>>;

export function LeadForm({
  source,
  defaultService = "",
  tone = "light",
  heading = "Get your free marketing audit",
  subheading = "A recorded walkthrough of your ads, Google profile and website within 48 hours. Free, and yours to keep.",
}: Props) {
  const id = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const w = (e as CustomEvent<string>).detail;
      if (typeof w === "string" && w.trim()) setWebsite(w.trim());
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const dark = tone === "dark";
  const box = dark ? "bg-ink text-paper border-paper/10" : "bg-white text-ink border-line";
  const label = `block text-[14px] font-semibold mb-1.5 ${dark ? "text-paper" : "text-ink"}`;
  const input = (bad?: string) =>
    `w-full h-12 rounded-md border px-3.5 text-[16px] outline-none transition-colors focus:border-flame focus:ring-2 focus:ring-flame/25 ${
      bad ? "border-red-500" : dark ? "border-paper/20" : "border-line"
    } ${dark ? "bg-paper/5 text-paper placeholder:text-paper/40" : "bg-paper/40 text-ink placeholder:text-ink-3/70"}`;
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${id}-${k}-err`} className="mt-1 text-[13px] font-medium text-red-600">
        {errors[k]}
      </p>
    ) : null;

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().split(/\s+/).filter(Boolean).length < 1) e.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length !== 10) e.phone = "Please enter a 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Please enter a valid email.";
    if (website.trim() && !/^(https?:\/\/)?[^\s/$.?#]+\.[^\s]{2,}$/i.test(website.trim())) e.website = "That doesn't look like a website address.";
    return e;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    setFormError("");
    if (Object.keys(v).length) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone,
          website: normalizeUrl(website),
          service: defaultService || "Free audit",
          message: `Form: ${source}\nConsent (calls/texts): agreed on submit to: "${CONSENT_TEXT}"`,
          website_url: trap,
        }),
      });
      const data = (await res.json()) as { success: boolean; error?: string };
      if (!data.success) throw new Error(data.error || "Something went wrong.");
      window.gtag?.("event", "generate_lead", { form_source: source });
      window.fbq?.("track", "Lead", { content_name: source });
      setDone(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : `Something went wrong. Please call ${SITE.phone}.`);
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className={`rounded-lg border p-6 md:p-8 ${box}`} role="status">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-moss text-white">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="font-head text-2xl font-bold tracking-tight">Got it, {name.trim().split(" ")[0]}.</h3>
        <p className={`mt-2 text-[15px] ${dark ? "text-paper/70" : "text-ink-2"}`}>Here&apos;s what happens next:</p>
        <ol className={`mt-4 space-y-3 text-[15px] ${dark ? "text-paper/85" : "text-ink-2"}`}>
          <li className="flex gap-3">
            <span className="font-head font-bold text-flame">1</span>
            We&apos;ll call or text you within one business hour to confirm a few details.
          </li>
          <li className="flex gap-3">
            <span className="font-head font-bold text-flame">2</span>A 15-minute call with Muhammad, the founder. No script, no pressure.
          </li>
          <li className="flex gap-3">
            <span className="font-head font-bold text-flame">3</span>
            Within 48 hours: a recorded walkthrough of your ads, Google profile and website, with the fixes we&apos;d make first.
          </li>
        </ol>
        <p className={`mt-5 text-[14px] ${dark ? "text-paper/55" : "text-ink-3"}`}>
          Can&apos;t wait? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-flame">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className={`relative rounded-lg border p-5 md:p-7 ${box}`} aria-describedby={`${id}-sub`}>
      <h3 className="font-head text-[22px] md:text-2xl font-bold leading-tight tracking-tight">{heading}</h3>
      <p id={`${id}-sub`} className={`mt-1.5 text-[14px] leading-snug ${dark ? "text-paper/65" : "text-ink-3"}`}>
        {subheading}
      </p>

      {/* Honeypot */}
      <input
        type="text"
        name="website_url"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      />

      <div className="mt-5 space-y-3.5">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Full name</label>
          <input
            ref={nameRef}
            id={`${id}-name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={input(errors.name)}
            autoComplete="name"
            placeholder="John Smith"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${id}-name-err` : undefined}
          />
          {err("name")}
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-phone`} className={label}>Phone number</label>
            <input
              id={`${id}-phone`}
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              className={`${input(errors.phone)} tnum`}
              autoComplete="tel-national"
              placeholder="(214) 555-0123"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
            />
            {err("phone")}
          </div>
          <div>
            <label htmlFor={`${id}-email`} className={label}>Email address</label>
            <input
              id={`${id}-email`}
              type="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={input(errors.email)}
              autoComplete="email"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${id}-email-err` : undefined}
            />
            {err("email")}
          </div>
        </div>
        <div>
          <label htmlFor={`${id}-web`} className={label}>
            Website URL <span className={`font-normal ${dark ? "text-paper/50" : "text-ink-3"}`}>(if you have one)</span>
          </label>
          <input
            id={`${id}-web`}
            type="text"
            inputMode="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={input(errors.website)}
            autoComplete="url"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="yourcompany.com"
            aria-invalid={!!errors.website}
            aria-describedby={errors.website ? `${id}-website-err` : undefined}
          />
          {err("website")}
        </div>

        {formError && (
          <p className="text-[14px] font-medium text-red-600" role="alert">
            {formError}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="flex h-[52px] w-full items-center justify-center gap-2 rounded-md bg-flame text-[17px] font-semibold text-white transition-colors hover:bg-flame-dark disabled:opacity-70"
        >
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {sending ? "Sending…" : "Get my free audit"}
          {!sending && <ArrowRight className="h-4 w-4" />}
        </button>
        <ConsentNote tone={dark ? "dark" : "light"} />
      </div>

      <p className={`mt-3 flex items-center gap-1.5 text-[13px] ${dark ? "text-paper/50" : "text-ink-3"}`}>
        <Lock className="h-3.5 w-3.5" /> No contracts. We never sell or share your information.
      </p>
    </form>
  );
}
