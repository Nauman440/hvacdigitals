"use client";

import { useEffect, useId, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2, Lock } from "lucide-react";
import { SITE } from "@/lib/site";
import { CONSENT_TEXT, ConsentNote } from "./ConsentNote";

type Props = {
  /** Where the form sits, sent with the lead (e.g. "home-hero", "meta-ads"). */
  source: string;
  /** Pre-selected service interest. */
  defaultService?: string;
  tone?: "light" | "dark";
  heading?: string;
  subheading?: string;
};

const GOALS = ["Repair calls", "Installs & replacements", "Maintenance members", "All of it"];
const BUDGETS = ["Not advertising yet", "Under $2,000/mo", "$2,000–$5,000/mo", "$5,000+/mo"];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export function LeadForm({
  source,
  defaultService = "",
  tone = "light",
  heading = "See if your city is open",
  subheading = "We work with one HVAC company per city. Two quick steps, about 30 seconds.",
}: Props) {
  const id = useId();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [city, setCity] = useState("");
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [trap, setTrap] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const c = (e as CustomEvent<string>).detail;
      if (typeof c === "string" && c.trim()) {
        setCity(c);
        setError("");
        setStep(1);
      }
    };
    window.addEventListener("leadform:city", onPrefill);
    return () => window.removeEventListener("leadform:city", onPrefill);
  }, []);

  const dark = tone === "dark";
  const box = dark ? "bg-ink text-paper border-paper/10" : "bg-white text-ink border-line";
  const label = `block text-[14px] font-semibold mb-1.5 ${dark ? "text-paper" : "text-ink"}`;
  const input = `w-full h-12 rounded-md border px-3.5 text-[16px] outline-none transition-colors focus:border-flame focus:ring-2 focus:ring-flame/25 ${
    dark ? "bg-paper/5 border-paper/20 text-paper placeholder:text-paper/40" : "bg-paper/40 border-line text-ink placeholder:text-ink-3/70"
  }`;
  const chip = (active: boolean) =>
    `rounded-md border px-3 py-2.5 text-[14px] text-left transition-colors ${
      active
        ? "border-flame bg-flame/10 text-flame font-semibold"
        : dark
          ? "border-paper/20 text-paper/80 hover:border-paper/40"
          : "border-line text-ink-2 hover:border-ink/30"
    }`;

  const next = () => {
    if (!city.trim()) return setError("Which city or area do you serve?");
    if (!goal) return setError("Pick what you want more of.");
    setError("");
    setStep(2);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError("What's your name?");
    if (phone.replace(/\D/g, "").length < 10) return setError("Please enter a 10-digit phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email.");
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          service: defaultService || "Free audit",
          budget,
          message: `City/area: ${city}\nWants more: ${goal}\nCurrent ad spend: ${budget || "n/a"}\nForm: ${source}\nConsent (calls/texts): agreed on submit to: "${CONSENT_TEXT}"`,
          website_url: trap,
        }),
      });
      const data = (await res.json()) as { success: boolean; error?: string };
      if (!data.success) throw new Error(data.error || "Something went wrong.");
      window.gtag?.("event", "generate_lead", { form_source: source, city });
      window.fbq?.("track", "Lead", { content_name: source });
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : `Something went wrong. Call us at ${SITE.phone}.`);
    } finally {
      setSending(false);
    }
  };

  if (step === 3) {
    return (
      <div className={`rounded-lg border p-6 md:p-8 ${box}`} role="status">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-moss text-white">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="font-head text-2xl font-bold tracking-tight">Got it, {name.split(" ")[0]}.</h3>
        <p className={`mt-2 text-[15px] ${dark ? "text-paper/70" : "text-ink-2"}`}>Here&apos;s what happens next:</p>
        <ol className={`mt-4 space-y-3 text-[15px] ${dark ? "text-paper/85" : "text-ink-2"}`}>
          <li className="flex gap-3">
            <span className="font-head font-bold text-flame">1</span>
            We check whether {city || "your city"} is open. You&apos;ll hear back within one business hour.
          </li>
          <li className="flex gap-3">
            <span className="font-head font-bold text-flame">2</span>
            Muhammad calls you. Not a call center and not a sales script, just 15 minutes about your shop.
          </li>
          <li className="flex gap-3">
            <span className="font-head font-bold text-flame">3</span>
            Within 48 hours you get a recorded walkthrough of your ads, Google profile and website, with fixes you
            can use whether you hire us or not.
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
    <form onSubmit={submit} noValidate className={`rounded-lg border p-5 md:p-7 ${box}`} aria-describedby={`${id}-sub`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-head text-[22px] md:text-2xl font-bold leading-tight tracking-tight">{heading}</h3>
          <p id={`${id}-sub`} className={`mt-1.5 text-[14px] leading-snug ${dark ? "text-paper/65" : "text-ink-3"}`}>
            {subheading}
          </p>
        </div>
        <span className={`tnum shrink-0 rounded px-2 py-1 text-[12px] font-semibold ${dark ? "bg-paper/10 text-paper/70" : "bg-paper-2 text-ink-2"}`}>
          {step}/2
        </span>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website_url"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label htmlFor={`${id}-city`} className={label}>
              Where do you run trucks?
            </label>
            <input
              id={`${id}-city`}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Plano, or North Dallas"
              className={input}
              autoComplete="address-level2"
            />
          </div>
          <fieldset>
            <legend className={label}>What do you want more of?</legend>
            <div className="grid grid-cols-2 gap-2">
              {GOALS.map((g) => (
                <button type="button" key={g} className={chip(goal === g)} onClick={() => setGoal(g)} aria-pressed={goal === g}>
                  {g}
                </button>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor={`${id}-budget`} className={label}>
              Current monthly ad spend <span className={`font-normal ${dark ? "text-paper/50" : "text-ink-3"}`}>(optional)</span>
            </label>
            <select id={`${id}-budget`} value={budget} onChange={(e) => setBudget(e.target.value)} className={input}>
              <option value="">Choose one</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="text-[14px] font-medium text-red-600" role="alert">{error}</p>}
          <button
            type="button"
            onClick={next}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-flame text-[16px] font-semibold text-white transition-colors hover:bg-flame-dark"
          >
            Check availability <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${id}-name`} className={label}>Your name</label>
              <input id={`${id}-name`} value={name} onChange={(e) => setName(e.target.value)} className={input} autoComplete="name" placeholder="First and last" />
            </div>
            <div>
              <label htmlFor={`${id}-co`} className={label}>Company</label>
              <input id={`${id}-co`} value={company} onChange={(e) => setCompany(e.target.value)} className={input} autoComplete="organization" placeholder="Your HVAC company" />
            </div>
          </div>
          <div>
            <label htmlFor={`${id}-phone`} className={label}>Mobile number</label>
            <input
              id={`${id}-phone`}
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              className={`${input} tnum`}
              autoComplete="tel-national"
              placeholder="(214) 555-0123"
            />
          </div>
          <div>
            <label htmlFor={`${id}-email`} className={label}>Email</label>
            <input id={`${id}-email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} autoComplete="email" placeholder="you@company.com" />
          </div>
          {error && <p className="text-[14px] font-medium text-red-600" role="alert">{error}</p>}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => { setError(""); setStep(1); }}
              className={`flex h-12 items-center justify-center rounded-md border px-4 ${dark ? "border-paper/20 text-paper" : "border-line text-ink"}`}
              aria-label="Back"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="submit"
              disabled={sending}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-flame text-[16px] font-semibold text-white transition-colors hover:bg-flame-dark disabled:opacity-70"
            >
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {sending ? "Sending…" : "Get my free audit"}
            </button>
          </div>
          <ConsentNote tone={dark ? "dark" : "light"} />
        </div>
      )}

      <p className={`mt-4 flex items-center gap-1.5 text-[13px] ${dark ? "text-paper/50" : "text-ink-3"}`}>
        <Lock className="h-3.5 w-3.5" /> No contracts. We never sell or share your information.
      </p>
    </form>
  );
}
