import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE } from "@/lib/site";

const STEPS = [
  { t: "Within 1 business hour", d: "We check whether your city is open and confirm by text or email." },
  { t: "A 15-minute call", d: "With Muhammad, the founder. About your shop, your season and your numbers. No script." },
  { t: "Within 48 hours", d: "A recorded walkthrough of your ads, Google profile and website, with the 3 fixes we'd make first." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <SiteHeader />
      <main className="pt-[100px] md:pt-[140px] pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 md:px-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-3">
              <span className="h-px w-8 bg-flame" aria-hidden="true" />
              Free audit
            </p>
            <h1 className="mt-6 font-head text-[44px] leading-[1.02] md:text-[64px] font-extrabold tracking-[-0.04em]">
              Let&apos;s look at your numbers.
            </h1>
            <p className="mt-6 max-w-[540px] text-[18px] md:text-[19px] leading-relaxed text-ink-2">
              Tell us where you work and what you want more of. If your city is open, you&apos;ll get a free audit you can
              keep, whether you hire us or not.
            </p>

            <ol className="mt-10 space-y-6">
              {STEPS.map((s, i) => (
                <li key={s.t} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-head text-[15px] font-bold text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-head text-[18px] font-bold tracking-tight">{s.t}</p>
                    <p className="mt-1 text-[16px] leading-relaxed text-ink-2">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex items-center gap-4 rounded-lg border border-line bg-white p-4">
              <Image
                src="/images/founder-real.jpeg"
                alt="Muhammad Nauman"
                width={120}
                height={120}
                className="h-16 w-16 shrink-0 rounded-full object-cover object-top"
              />
              <div className="text-[15px]">
                <p className="font-semibold">Rather just talk?</p>
                <p className="text-ink-2">
                  Call or text{" "}
                  <a href={SITE.phoneHref} className="tnum font-semibold text-flame">
                    {SITE.phone}
                  </a>
                  . You&apos;ll get Muhammad or someone who works with him every day.
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-3 text-[15px] text-ink-2 sm:grid-cols-3">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-ink-3" /> {SITE.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-ink-3" /> {SITE.email}</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-ink-3" /> {SITE.hours}</li>
            </ul>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:sticky lg:top-[130px] self-start" id="form">
            <LeadForm source="contact-page" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
