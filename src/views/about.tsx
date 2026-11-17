import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";
import { SERVICE_GROUPS, SITE } from "@/lib/site";

const wrap = "mx-auto max-w-[1240px] px-4 md:px-6";

function Kicker({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "paper" }) {
  return (
    <p className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] ${tone === "ink" ? "text-ink-3" : "text-paper/60"}`}>
      <span className="h-px w-8 bg-flame" aria-hidden="true" />
      {children}
    </p>
  );
}

const PRINCIPLES = [
  { t: "One HVAC company per city", d: "We never run ads for two competitors in the same market, so we're never bidding against our own client." },
  { t: "You own everything", d: "Ad accounts, website, Google profile, tracking numbers and data are all in your name. If you leave, it all stays with you." },
  { t: "We report booked jobs", d: "Not impressions or click-through rates. Every Monday: leads, booked jobs, cost per booked job, revenue." },
  { t: "Flat fee, no markup", d: "Ad spend goes straight to Google and Meta on your card. We don't take a percentage, so we never earn more when you spend more." },
  { t: "No long-term contract", d: "We ask for 90 days to judge results fairly. After that, you stay because it's working." },
  { t: "Talk to the founder", d: "Your first call is with Muhammad, and you'll have his number after that too." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pt-[100px] md:pt-[140px] pb-20 md:pb-28">
          <div className="vent-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className={`${wrap} relative grid items-center gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-7">
              <Kicker tone="paper">About HVAC Digitals</Kicker>
              <h1 className="mt-6 font-head text-[44px] leading-[1] sm:text-[58px] lg:text-[72px] font-extrabold tracking-[-0.045em] text-paper">
                We do one thing: fill HVAC schedules in <span className="text-flame">Texas.</span>
              </h1>
              <p className="mt-8 max-w-[600px] text-[18px] md:text-[20px] leading-relaxed text-paper/75">
                HVAC Digitals is a small Dallas team that only does lead generation for HVAC contractors in Texas: Google Ads, Facebook
                &amp; Instagram ads, local SEO and the follow-up that turns leads into booked jobs.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="relative mx-auto max-w-[340px]">
                <div className="absolute -left-3 -top-3 h-full w-full rounded-xl bg-flame" aria-hidden="true" />
                <Image
                  src="/images/founder-real.jpeg"
                  alt="Muhammad Nauman, founder of HVAC Digitals"
                  width={960}
                  height={1280}
                  priority
                  className="relative aspect-[4/5] w-full rounded-xl object-cover object-top"
                  sizes="(min-width: 1024px) 340px, 80vw"
                />
                <div className="absolute -bottom-5 left-5 right-5 rounded-lg bg-white px-4 py-3 shadow-lg">
                  <p className="font-head text-[17px] font-bold text-ink">Muhammad Nauman</p>
                  <p className="text-[13px] text-ink-3">Founder, HVAC Digitals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-paper py-20 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <Kicker>Why we exist</Kicker>
              <h2 className="mt-5 font-head text-[34px] md:text-[46px] font-extrabold leading-[1.05] tracking-[-0.035em]">
                Great techs shouldn&apos;t lose summers to better marketing.
              </h2>
            </div>
            <div className="space-y-5 text-[18px] md:text-[19px] leading-relaxed text-ink-2 lg:col-span-7 lg:col-start-6">
              <p className="text-ink">
                The best HVAC contractors are usually too busy doing good work to become marketers. Meanwhile, the company with
                half the skill and a bigger Google budget books the jobs.
              </p>
              <p>
                I started HVAC Digitals in 2021 to fix that. Generalist agencies treat an HVAC company like a dentist or a law firm,
                with the same playbook, the same reports and the same contract. HVAC doesn&apos;t work like that. Demand follows the
                weather, the best leads come in at the worst times, and a lead that waits until the next morning is usually gone.
              </p>
              <p>
                So we specialize. We only work with HVAC companies, only in Texas, and only one per city. Everything we build, from
                the ads to the landing pages to the follow-up, is judged on whether it puts more jobs on your schedule.
              </p>
              <p className="font-head text-[26px] italic font-semibold tracking-tight text-ink" style={{ fontStretch: "88%" }}>
                Muhammad
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-white py-20 md:py-28">
          <div className={wrap}>
            <div className="max-w-3xl">
              <Kicker>How we work</Kicker>
              <h2 className="mt-5 font-head text-[34px] md:text-[46px] font-extrabold leading-[1.05] tracking-[-0.035em]">
                Six things we won&apos;t compromise on.
              </h2>
            </div>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {PRINCIPLES.map((p, i) => (
                <li key={p.t} className="bg-white p-7">
                  <p className="font-head text-[15px] font-bold text-flame">0{i + 1}</p>
                  <h3 className="mt-2 font-head text-[22px] font-bold tracking-tight">{p.t}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-ink-2">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who we work with + services */}
        <section className="bg-paper py-20 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-5">
              <Kicker>Who we work with</Kicker>
              <h2 className="mt-5 font-head text-[32px] md:text-[42px] font-extrabold leading-[1.05] tracking-[-0.035em]">
                Residential and light-commercial HVAC companies across Texas.
              </h2>
              <ul className="mt-8 space-y-3 text-[16px] text-ink-2">
                {[
                  "Owner-operators ready to grow past word of mouth",
                  "Multi-truck shops that want predictable lead flow",
                  "Companies expanding into a new city or suburb",
                  "Anyone tired of agency reports they can't connect to jobs",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-moss" /> {x}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[15px] text-ink-3">
                Dallas · Fort Worth · Houston · San Antonio · Austin · El Paso and the suburbs around them.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-3">What we do</p>
              <ul className="divide-y divide-line rounded-xl border border-line bg-white">
                {SERVICE_GROUPS.flatMap((g) => g.items).map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-paper/60">
                      <span>
                        <span className="block font-head text-[17px] font-bold tracking-tight">{s.label}</span>
                        <span className="block text-[14px] text-ink-3">{s.blurb}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-3 group-hover:text-flame" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink py-20 md:py-28">
          <div className="vent-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className={`${wrap} relative grid items-center gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-6">
              <h2 className="font-head text-[40px] md:text-[60px] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
                Let&apos;s see if we&apos;re a <span className="text-flame">fit.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/70">
                Tell us where you work. If your city is open, you&apos;ll get a free recorded audit within 48 hours, and a straight
                answer about whether we can help.
              </p>
              <p className="mt-8 text-[16px] text-paper/60">
                Or call <a href={SITE.phoneHref} className="tnum font-semibold text-paper hover:text-flame">{SITE.phone}</a>
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <LeadForm source="about" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
