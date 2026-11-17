import Link from "next/link";

/**
 * Express-consent disclosure for calls/texts, shown wherever a form collects a phone number.
 * Keep the wording identical everywhere: it's what the lead agreed to.
 */
export const CONSENT_TEXT =
  "By submitting, you agree that HVAC Digitals may call and text you at the number provided, including by automated means, about your request. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.";

export function ConsentNote({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const muted = tone === "dark" ? "text-paper/50" : "text-ink-3";
  const link = tone === "dark" ? "text-paper/80" : "text-ink-2";
  return (
    <p className={`text-[12px] leading-snug ${muted} ${className}`}>
      {CONSENT_TEXT} See our{" "}
      <Link href="/privacy" className={`underline underline-offset-2 ${link}`}>
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link href="/terms" className={`underline underline-offset-2 ${link}`}>
        Terms
      </Link>
      .
    </p>
  );
}
