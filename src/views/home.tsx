import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CirclePlay,
  MapPin,
  Phone,
  PhoneIncoming,
  Star,
  ThumbsUp,
  X,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";
import { CityCheck, FaqList, LeadFeed, RoiCalculator, SeasonChart } from "@/components/site/Widgets";
import { SITE } from "@/lib/site";
import { ProofSection } from "@/components/site/Proof";
import { GENERAL_FAQS as FAQS } from "@/data/faqs";

/** Legacy pages import these names; they now render the redesigned header and footer. */
export const Navbar = SiteHeader;
export const Footer = SiteFooter;

/* Shared bits ------------------------------------------------------------- */

const wrap = "mx-auto max-w-[1240px] px-4 md:px-6";

function Kicker({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "paper" }) {
  return (
    <p className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] ${tone === "ink" ? "text-ink-3" : "text-paper/60"}`}>
      <span className="h-px w-8 bg-flame" aria-hidden="true" />
      {children}
    </p>
  );
}

const H2 = ({ children, tone = "ink", className = "" }: { children: React.ReactNode; tone?: "ink" | "paper"; className?: string }) => (
  <h2
    className={`font-head text-[34px] leading-[1.04] md:text-[50px] font-extrabold tracking-[-0.035em] ${tone === "ink" ? "text-ink" : "text-paper"} ${className}`}
  >
    {children}
  </h2>
);

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-[#F5B301]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

/* 1. Hero ----------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[96px] md:pt-[140px] pb-28 md:pb-36">
      <div className="vent-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* Giant temperature watermark */}
      <p
        className="pointer-events-none absolute -right-6 bottom-6 hidden select-none font-head text-[300px] font-extrabold leading-none tracking-[-0.06em] text-paper/[0.035] xl:block"
        aria-hidden="true"
      >
        104°
      </p>

      <div className={`${wrap} relative grid items-start gap-14 lg:grid-cols-12`}>
        <div className="lg:col-span-7 pt-4">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/5 py-1.5 pl-2 pr-4 text-[14px] text-paper/80">
            <span className="rounded-full bg-flame px-2 py-0.5 text-[12px] font-bold text-white">TX</span>
            Marketing for HVAC contractors in Texas, nothing else
          </p>

          <h1 className="mt-8 font-head text-[48px] leading-[0.98] sm:text-[64px] lg:text-[84px] font-extrabold tracking-[-0.045em] text-paper">
            Full trucks in <span className="text-flame">July.</span>
            <br />
            And in <span className="text-ice-light">February.</span>
          </h1>

          <p className="mt-8 max-w-[600px] text-[18px] md:text-[21px] leading-relaxed text-paper/75">
            We run Google Ads, Facebook &amp; Instagram ads and local SEO for HVAC companies, then make sure every lead gets a
            call back in under a minute. We judge ourselves on one number: <span className="font-semibold text-paper">booked jobs</span>.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#check"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-flame px-7 text-[17px] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(232,89,12,0.7)] transition-colors hover:bg-flame-dark lg:hidden"
            >
              Check if my city is open <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-md border border-paper/20 px-6 text-[16px] font-semibold text-paper transition-colors hover:border-paper/50"
            >
              <Phone className="h-4 w-4" /> Talk to a human: <span className="tnum">{SITE.phone}</span>
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/images/founder-real.jpeg"
                alt=""
                width={96}
                height={96}
                className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-flame"
              />
              <p className="text-[14px] leading-snug text-paper/70">
                <span className="block font-semibold text-paper">Talk to Muhammad, the founder</span>
                Not a sales rep. Not a call center.
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[14px] text-paper/70 sm:border-l sm:border-paper/15 sm:pl-5">
              {["Free audit", "No contract", "You own your accounts"].map((x) => (
                <li key={x} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-flame" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative lg:col-span-5" id="check">
          {/* Floating proof chips around the form */}
          <div className="float-y absolute -left-10 -top-7 z-10 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss/10 text-moss">
              <PhoneIncoming className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-ink">New call · AC not cooling</p>
              <p className="text-[12px] text-ink-3">Plano · from Google · just now</p>
            </div>
          </div>
          <div className="float-y absolute -bottom-16 right-6 z-10 hidden items-center gap-3 rounded-lg bg-ink-2 px-4 py-3 text-paper shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] ring-1 ring-paper/10 md:flex [animation-delay:1.2s]">
            <span className="font-head text-[26px] font-extrabold text-flame">104°F</span>
            <div className="text-[12px] leading-tight text-paper/70">
              Dallas, 3:42 PM
              <br />
              <span className="text-paper">AC repair searches spike</span>
            </div>
          </div>
          <div className="rounded-xl ring-8 ring-paper/5">
            <LeadForm source="home-hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2. Stat band, overlapping the hero -------------------------------------- */

function StatBand() {
  const stats = [
    { n: "48 hrs", l: "to your free recorded audit", c: "text-flame" },
    { n: "< 60s", l: "automatic follow-up on every new lead", c: "text-ice" },
    { n: "$0", l: "markup on your ad spend", c: "text-ink" },
    { n: "1", l: "HVAC company per city", c: "text-ink" },
  ];
  return (
    <section className="relative z-10 -mt-16 md:-mt-20">
      <div className={wrap}>
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(20,26,33,0.35)] md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`p-5 md:p-7 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} md:border-r md:last:border-r-0 border-line`}
            >
              <dt className="sr-only">{s.l}</dt>
              <dd className={`tnum font-head text-[34px] md:text-[48px] font-extrabold leading-none tracking-[-0.03em] ${s.c}`}>{s.n}</dd>
              <dd className="mt-2 text-[14px] md:text-[15px] leading-snug text-ink-2">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* 3. Where the money leaks ------------------------------------------------ */

const LEAK = [
  { stage: "People who click your ad", before: 100, after: 100, fix: "Ads written for HVAC search intent, with 1,000+ junk searches blocked." },
  { stage: "Call or fill out a form", before: 22, after: 31, fix: "A landing page per service with tap-to-call up top, not your homepage." },
  { stage: "Reach a human within 5 minutes", before: 9, after: 28, fix: "Instant text-back, an auto-call to your office, and 7 days of follow-up." },
  { stage: "Get booked on the schedule", before: 4, after: 12, fix: "Call scoring and coaching notes, so your CSRs book the jobs they're losing." },
];

function Leak() {
  return (
    <section className="bg-paper pt-24 pb-20 md:pt-32 md:pb-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Kicker>Where the money goes</Kicker>
          <H2 className="mt-5">Most HVAC marketing doesn&apos;t fail at the ad. It fails after.</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
            In a lot of HVAC accounts, only a handful of every 100 ad clicks end up on the schedule. The rest called while your
            office was on another line, got voicemail, or got a call back the next morning after they&apos;d already booked
            someone else.
          </p>
          <p className="mt-4 text-[17px] font-semibold text-ink">So we fix the whole path, not just the ads.</p>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-xl border border-line bg-white p-5 md:p-8">
            <div className="mb-2 flex flex-wrap items-center gap-5 text-[13px] text-ink-2">
              <span className="flex items-center gap-2"><span className="h-2.5 w-5 rounded-sm bg-ink/20" /> A leaky setup</span>
              <span className="flex items-center gap-2"><span className="h-2.5 w-5 rounded-sm bg-flame" /> Same budget, leaks fixed</span>
            </div>
            <ol className="divide-y divide-line">
              {LEAK.map((r, i) => (
                <li key={r.stage} className="grid gap-4 py-6 md:grid-cols-12 md:gap-6">
                  <div className="md:col-span-4">
                    <p className="font-head text-[13px] font-bold text-flame">Step 0{i + 1}</p>
                    <p className="mt-1 font-head text-[19px] font-bold leading-tight tracking-tight text-ink">{r.stage}</p>
                  </div>
                  <div className="space-y-2 md:col-span-4">
                    {([["before", "bg-ink/20"], ["after", "bg-flame"]] as const).map(([k, color]) => (
                      <div key={k} className="flex items-center gap-3">
                        <div className="h-4 flex-1 rounded-sm bg-paper">
                          <div className={`h-full rounded-[4px] ${color}`} style={{ width: `${r[k]}%` }} />
                        </div>
                        <span className={`tnum w-9 text-right text-[15px] ${k === "after" ? "font-bold text-ink" : "text-ink-3"}`}>{r[k]}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink-2 md:col-span-4">{r.fix}</p>
                </li>
              ))}
            </ol>
            <div className="mt-2 flex flex-col gap-3 rounded-lg bg-ink px-5 py-4 text-paper sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[15px]">
                Illustration per 100 ad clicks. <span className="font-semibold">Your audit shows where your own leads drop off.</span>
              </p>
              <a href="#check" className="text-[15px] font-semibold text-paper underline decoration-flame underline-offset-4 hover:text-flame">
                Find my leaks →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4. Channels as visual cards ------------------------------------------- */

function MiniLsa() {
  return (
    <div className="rounded-lg bg-white p-3 text-[12px] text-[#202124] shadow-sm ring-1 ring-black/5">
      <p className="font-semibold text-[#5f6368]">Sponsored · Local services</p>
      <div className="mt-2 rounded-md border-2 border-flame p-2.5">
        <p className="text-[13px] font-semibold">Your Company Heating &amp; Air</p>
        <p className="mt-0.5 flex items-center gap-1 text-[#5f6368]">4.9 <Stars className="h-3 w-3" /> (212)</p>
        <p className="mt-1 flex items-center gap-1 text-[#188038]"><BadgeCheck className="h-3.5 w-3.5" /> Google Verified</p>
      </div>
      <div className="mt-3 border-t border-[#ebebeb] pt-3">
        <p className="text-[11px]"><span className="font-semibold">Sponsored</span> · yourcompany.com/ac-repair</p>
        <p className="mt-0.5 text-[14px] leading-snug text-[#1a0dab]">Same-Day AC Repair in Plano | Techs Out in 2 Hours</p>
        <p className="mt-0.5 leading-snug text-[#4d5156]">Upfront pricing before work starts. 4.9★ from 212 neighbors.</p>
        <p className="mt-1.5 flex items-center gap-1 text-[#1a0dab]"><Phone className="h-3 w-3" /> Call (214) 555-0100</p>
      </div>
    </div>
  );
}

function MiniMeta() {
  return (
    <div className="overflow-hidden rounded-lg bg-white text-[12px] text-[#050505] shadow-sm ring-1 ring-black/5">
      <div className="flex items-center gap-2 p-2.5">
        <span className="h-6 w-6 rounded-full bg-ink" />
        <div>
          <p className="font-semibold leading-tight">Your Company</p>
          <p className="text-[11px] text-[#65676b]">Sponsored</p>
        </div>
      </div>
      <div className="relative flex h-24 items-end bg-[linear-gradient(160deg,#2b3540,#141A21)] p-2.5">
        <span className="absolute right-2.5 top-2.5 rounded bg-flame px-1.5 py-0.5 font-head text-[15px] font-extrabold text-white">$79</span>
        <p className="font-head text-[16px] font-extrabold leading-none text-paper">Spring AC tune-up</p>
      </div>
      <p className="flex items-center gap-1 px-2.5 py-2 text-[11px] text-[#65676b]"><ThumbsUp className="h-3 w-3" /> 184 · Get offer</p>
    </div>
  );
}

function MiniMap() {
  return (
    <div className="relative h-full min-h-[120px] overflow-hidden rounded-lg bg-[#e8eae6] shadow-sm ring-1 ring-black/5">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 140" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 95 C70 80 120 115 190 88 S280 50 300 64" stroke="#fff" strokeWidth="9" fill="none" />
        <path d="M100 0 L135 140" stroke="#fff" strokeWidth="6" />
        <rect x="200" y="92" width="60" height="38" fill="#d5e8d0" />
      </svg>
      <MapPin className="absolute left-[30%] top-[22%] h-8 w-8 fill-flame text-white" />
      <MapPin className="absolute left-[62%] top-[30%] h-6 w-6 fill-[#ea4335] text-white" />
      <MapPin className="absolute left-[78%] top-[52%] h-6 w-6 fill-[#ea4335] text-white" />
      <span className="absolute bottom-2 left-2 rounded bg-white px-2 py-1 text-[11px] font-semibold text-ink shadow-sm">#1 in the map · Plano</span>
    </div>
  );
}

function MiniSpeed() {
  return (
    <div className="space-y-2 text-[12px]">
      <div className="ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-ice px-3 py-2 text-white">
        Hi Brenda, this is Jake from Cool Air. Sorry we missed you! Want us to come out today or tomorrow?
      </div>
      <p className="text-right text-[11px] text-ink-3">Sent 8 seconds after the missed call</p>
      <div className="max-w-[60%] rounded-lg rounded-bl-sm bg-white px-3 py-2 text-ink ring-1 ring-black/5">Today please! After 3?</div>
    </div>
  );
}

function Channels() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Kicker>What we run</Kicker>
            <H2 className="mt-5">Four ways to make the phone ring. We&apos;ll tell you which ones you need.</H2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink-2 lg:col-span-5">
            Most shops need two or three of these, not all four. It depends on your city, your season and what a job is worth to
            you. Your free audit tells you which.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          <Link href="/services/paid-ads" className="group flex flex-col justify-between gap-8 rounded-xl bg-paper p-7 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(20,26,33,0.35)] lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-flame">Leads this week</p>
                <h3 className="mt-2 font-head text-[28px] font-extrabold leading-tight tracking-tight text-ink">Google Ads &amp; Local Services Ads</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
                  Show up first when someone types &ldquo;AC repair near me.&rdquo; Pay per lead with LSAs, and only for search terms that book jobs.
                </p>
              </div>
              <MiniLsa />
            </div>
            <p className="flex items-center justify-between border-t border-line pt-4 text-[15px]">
              <span className="text-ink-2">First calls in <strong className="text-ink">24–48 hours</strong></span>
              <span className="font-semibold text-ink group-hover:text-flame">Learn more →</span>
            </p>
          </Link>

          <Link href="/services/meta-ads" className="group flex flex-col justify-between gap-8 rounded-xl bg-[#EEF4FB] p-7 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(20,26,33,0.35)] lg:col-span-5">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ice">Fill the slow weeks</p>
              <h3 className="mt-2 font-head text-[28px] font-extrabold leading-tight tracking-tight text-ink">Facebook &amp; Instagram Ads</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-2">Tune-ups, maintenance plans and replacement offers, shown to homeowners before they search.</p>
              <div className="mt-6 max-w-[260px]">
                <MiniMeta />
              </div>
            </div>
            <p className="flex items-center justify-between border-t border-ink/10 pt-4 text-[15px]">
              <span className="text-ink-2">Live in <strong className="text-ink">72 hours</strong></span>
              <span className="font-semibold text-ink group-hover:text-flame">Learn more →</span>
            </p>
          </Link>

          <Link href="/services/local-seo" className="group flex flex-col justify-between gap-8 rounded-xl bg-[#EEF3EC] p-7 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(20,26,33,0.35)] lg:col-span-5">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-moss">Free calls, for years</p>
              <h3 className="mt-2 font-head text-[28px] font-extrabold leading-tight tracking-tight text-ink">Local SEO &amp; the Map Pack</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-2">Get into Google&apos;s top three on the map, where most &ldquo;near me&rdquo; calls go.</p>
              <div className="mt-6 h-[130px]">
                <MiniMap />
              </div>
            </div>
            <p className="flex items-center justify-between border-t border-ink/10 pt-4 text-[15px]">
              <span className="text-ink-2">Movement in <strong className="text-ink">60–120 days</strong></span>
              <span className="font-semibold text-ink group-hover:text-flame">Learn more →</span>
            </p>
          </Link>

          <Link href="/services/automation" className="group flex flex-col justify-between gap-8 rounded-xl bg-paper-2 p-7 transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(20,26,33,0.35)] lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-2">Book what you already get</p>
                <h3 className="mt-2 font-head text-[28px] font-extrabold leading-tight tracking-tight text-ink">Speed-to-lead automation</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
                  Missed calls get a text in seconds. Form leads get an auto-call to your office. Nobody goes cold.
                </p>
              </div>
              <MiniSpeed />
            </div>
            <p className="flex items-center justify-between border-t border-ink/10 pt-4 text-[15px]">
              <span className="text-ink-2">Working on <strong className="text-ink">day one</strong></span>
              <span className="font-semibold text-ink group-hover:text-flame">Learn more →</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 5. City band (mid-page CTA) ------------------------------------------- */

function CityBand() {
  return (
    <section className="relative overflow-hidden bg-flame py-14 md:py-16">
      <p
        className="pointer-events-none absolute -right-4 -top-10 select-none font-head text-[200px] font-extrabold leading-none tracking-[-0.06em] text-white/[0.08]"
        aria-hidden="true"
      >
        1/city
      </p>
      <div className={`${wrap} relative grid items-center gap-8 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <h2 className="font-head text-[32px] md:text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
            We take one HVAC company per city. Is yours still open?
          </h2>
          <p className="mt-3 text-[17px] text-white/85">Check in 30 seconds. If your city&apos;s taken, we&apos;ll tell you straight away.</p>
        </div>
        <div className="lg:col-span-6 lg:flex lg:justify-end">
          <CityCheck />
        </div>
      </div>
    </section>
  );
}

/* 6. What you see ---------------------------------------------------------- */

function WhatYouSee() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <Kicker tone="paper">No 40-page reports</Kicker>
          <H2 tone="paper" className="mt-5">You see leads, booked jobs and cost per job. That&apos;s it.</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-paper/70">
            Every call is recorded and every form is logged with its source. Leads go into one inbox and straight into your CRM.
            Every Monday you get four numbers and what we&apos;re changing this week.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10">
            {[
              ["Leads", "87", "text-paper"],
              ["Booked jobs", "41", "text-paper"],
              ["Cost per booked job", "$94", "text-ice-light"],
              ["Revenue from ads", "$58,300", "text-flame"],
            ].map(([k, v, c]) => (
              <div key={k} className="bg-ink p-5">
                <dt className="text-[13px] text-paper/55">{k}</dt>
                <dd className={`tnum mt-1 font-head text-3xl md:text-4xl font-extrabold ${c}`}>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[13px] text-paper/40">Example Monday report, 30-day view.</p>
        </div>
        <div className="lg:col-span-6">
          <LeadFeed />
        </div>
      </div>
    </section>
  );
}

/* 7. How it works ------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    { n: "1", t: "Free audit", when: "Within 48 hours", d: "A recorded walkthrough of your ads, Google profile and website, showing where leads leak and what we'd fix first. Yours to keep." },
    { n: "2", t: "Build & launch", when: "Days 3–14", d: "Campaigns, landing pages, call tracking and lead follow-up set up and live. You approve everything before it runs." },
    { n: "3", t: "Weekly tuning", when: "Every week after", d: "We cut what doesn't book, push what does, and plan ahead for the weather. You get the Monday report." },
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className={wrap}>
        <div className="max-w-3xl">
          <Kicker>How it works</Kicker>
          <H2 className="mt-5">From first call to first booked job in about two weeks.</H2>
        </div>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-[27px] hidden h-0.5 bg-[repeating-linear-gradient(90deg,#DCD4C6_0_8px,transparent_8px_14px)] md:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <span
                className={`relative flex h-14 w-14 items-center justify-center rounded-full font-head text-[22px] font-extrabold ${
                  i === 0 ? "bg-flame text-white" : "border-2 border-ink bg-paper text-ink"
                }`}
              >
                {s.n}
              </span>
              <div className="mt-6 rounded-xl border border-line bg-white p-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-flame">{s.when}</p>
                <h3 className="mt-1.5 font-head text-[24px] font-extrabold tracking-tight text-ink">{s.t}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-2">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <a
            href="#check"
            className="inline-flex h-14 items-center gap-2 rounded-md bg-flame px-7 text-[17px] font-semibold text-white transition-colors hover:bg-flame-dark"
          >
            Start with step 1, it&apos;s free <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* 8. Free audit preview + real proof -------------------------------------- */

const AUDIT_COVERS = [
  "Where your ad money goes: search terms, wasted clicks, and missing negative keywords",
  "Your Google Business Profile vs. the top 3 in your area",
  "How your site handles a homeowner on a phone: speed, tap-to-call, trust",
  "What happens to a lead after they call or fill out a form",
  "Which channels make sense for your city and season, with a budget range",
  "The 3 fixes we'd make first, whether you hire us or not",
];

const SAMPLE_FINDINGS: { sev: "High" | "Medium"; t: string; d: string }[] = [
  { sev: "High", t: "Ads showing for job-seeker searches", d: "“hvac jobs near me”, “hvac technician salary” and “hvac school” are getting clicks." },
  { sev: "High", t: "Missed calls get no follow-up", d: "After-hours calls go to voicemail with no text-back." },
  { sev: "Medium", t: "Ads send people to the homepage", d: "No service-specific landing page, and no tap-to-call button on mobile." },
  { sev: "Medium", t: "Google profile missing services", d: "Heat pump and ductless aren't listed, so you don't show for those searches." },
];

function AuditPreview() {
  return (
    <section id="audit" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className={`${wrap} grid items-start gap-14 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <Kicker>Your free audit</Kicker>
          <H2 className="mt-5">A recorded walkthrough of exactly where your leads leak.</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
            Within 48 hours you get a screen-recorded video that goes through your ads, Google profile, website and lead
            follow-up. Plain English, specific to your city, and yours to keep. Hire us, do it yourself, or hand it to your
            current agency.
          </p>
          <ul className="mt-8 space-y-3">
            {AUDIT_COVERS.map((x) => (
              <li key={x} className="flex gap-3 text-[16px] leading-relaxed text-ink">
                <Check className="mt-1 h-4 w-4 shrink-0 text-flame" /> {x}
              </li>
            ))}
          </ul>
          <a
            href="#check"
            className="mt-10 inline-flex h-14 items-center gap-2 rounded-md bg-flame px-7 text-[17px] font-semibold text-white transition-colors hover:bg-flame-dark"
          >
            Get my free audit <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-[0_30px_60px_-30px_rgba(20,26,33,0.35)]">
            <div className="relative flex aspect-[16/8] items-center justify-center bg-ink">
              <div className="vent-lines absolute inset-0" aria-hidden="true" />
              <div className="relative flex items-center gap-4">
                <CirclePlay className="h-14 w-14 text-flame" strokeWidth={1.5} />
                <div>
                  <p className="font-head text-[20px] font-bold text-paper">Your audit walkthrough</p>
                  <p className="tnum text-[14px] text-paper/60">Recorded video · usually 15–20 min</p>
                </div>
              </div>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-semibold text-ink">Sample findings</p>
                <p className="text-[12px] text-ink-3">Example of what we look for</p>
              </div>
              <ul className="mt-4 space-y-3">
                {SAMPLE_FINDINGS.map((f) => (
                  <li key={f.t} className="flex gap-3 rounded-lg bg-white p-4 ring-1 ring-line">
                    <span
                      className={`h-fit shrink-0 rounded px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.04em] ${
                        f.sev === "High" ? "bg-flame/10 text-flame" : "bg-ice/10 text-ice"
                      }`}
                    >
                      {f.sev}
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-ink">{f.t}</p>
                      <p className="mt-0.5 text-[14px] leading-snug text-ink-2">{f.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 9. Us vs typical agency ------------------------------------------------ */

function Compare() {
  const rows: [string, string, string][] = [
    ["Who they work with", "Only HVAC, only Texas", "Dentists, roofers, lawyers, and you"],
    ["What they report", "Booked jobs and cost per job", "Impressions and click-through rate"],
    ["Who owns the ad accounts", "You do, always", "Often the agency"],
    ["How they get paid", "Flat monthly fee", "A percentage of your ad spend"],
    ["Your competitors", "Never in your city", "Often their other clients"],
    ["Speed-to-lead follow-up", "Included, set up on day one", "“That's your office's job”"],
    ["Contract", "No long-term contract", "Long contracts with cancellation fees"],
  ];
  return (
    <section className="bg-paper-2/60 py-20 md:py-28">
      <div className={wrap}>
        <div className="max-w-3xl">
          <Kicker>Why owners switch</Kicker>
          <H2 className="mt-5">If you&apos;ve been burned by an agency before, this is the part that&apos;s different.</H2>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-line bg-white">
          <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1.1fr_1fr_1fr]">
            <div className="hidden md:block border-b border-line p-5" />
            <div className="border-b border-line bg-ink p-5 font-head text-[18px] font-extrabold text-paper">HVAC Digitals</div>
            <div className="border-b border-line p-5 font-head text-[18px] font-bold text-ink-3">What many agencies do</div>
            {rows.map(([k, us, them]) => (
              <div key={k} className="contents">
                <div className="col-span-2 border-b border-line bg-paper/50 px-5 pt-4 pb-1 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-3 md:col-span-1 md:bg-transparent md:py-5 md:text-[15px] md:font-semibold md:normal-case md:tracking-normal md:text-ink">
                  {k}
                </div>
                <div className="flex items-start gap-2.5 border-b border-line bg-ink/[0.03] p-5 text-[15px] font-semibold text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" /> {us}
                </div>
                <div className="flex items-start gap-2.5 border-b border-line p-5 text-[15px] text-ink-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-3/70" /> {them}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 10. Seasons ------------------------------------------------------------- */

function Seasons() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Kicker>Built for Texas weather</Kicker>
          <H2 className="mt-5">Your demand isn&apos;t flat. Your marketing shouldn&apos;t be either.</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
            In July you need every emergency call you can answer. In February you need a reason for homeowners to call at all.
            We plan the whole year around that, so your techs aren&apos;t sitting in the shop in the slow months.
          </p>
        </div>
        <div className="lg:col-span-8">
          <SeasonChart />
          <p className="mt-3 text-[13px] text-ink-3">Relative HVAC search demand across Texas metros, where 100 is the July peak.</p>
        </div>
      </div>
    </section>
  );
}

/* 11. Calculator ---------------------------------------------------------- */

function Calculator() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className={wrap}>
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Kicker tone="paper">Run your own numbers</Kicker>
            <H2 tone="paper" className="mt-5">Do the math before you talk to anyone.</H2>
          </div>
          <p className="text-[17px] leading-relaxed text-paper/65 lg:col-span-5">
            Move the sliders to match your shop. The estimate includes our fee, because a return that leaves out the agency&apos;s fee
            isn&apos;t a real return.
          </p>
        </div>
        <RoiCalculator />
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href="#check" className="inline-flex h-14 items-center gap-2 rounded-md bg-flame px-7 text-[17px] font-semibold text-white hover:bg-flame-dark">
            Get real numbers for my city <ArrowRight className="h-5 w-5" />
          </a>
          <p className="text-[15px] text-paper/55">Free, within 48 hours.</p>
        </div>
      </div>
    </section>
  );
}

/* 12. Founder ------------------------------------------------------------- */

function Founder() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <div className="relative mx-auto max-w-[360px]">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-xl bg-flame" aria-hidden="true" />
            <Image
              src="/images/founder-real.jpeg"
              alt="Muhammad Nauman, founder of HVAC Digitals"
              width={960}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-xl object-cover object-top"
              sizes="(min-width: 1024px) 360px, 80vw"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-lg bg-ink px-4 py-3 text-paper shadow-lg">
              <p className="font-head text-[17px] font-bold">Muhammad Nauman</p>
              <p className="text-[13px] text-paper/60">Founder. Your first call is with him.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Kicker>A note from the founder</Kicker>
          <div className="mt-6 space-y-5 text-[18px] md:text-[20px] leading-relaxed text-ink">
            <p>
              The best HVAC contractors I know are terrible at marketing, and they don&apos;t need to be good at it. They need the
              phone to ring with homeowners in their area, at a cost that makes sense.
            </p>
            <p className="text-ink-2">
              I started HVAC Digitals in 2021 because I kept seeing great shops lose summers to competitors with half the skill and
              a bigger Google budget. So we do one thing, HVAC lead generation, and we only work in Texas. One company per city,
              so we never bid against our own client.
            </p>
            <p className="text-ink-2">
              If you call, you&apos;ll talk to me. If we&apos;re not a fit, I&apos;ll tell you, and I&apos;ll tell you what I&apos;d
              do in your shoes anyway.
            </p>
          </div>
          <p className="mt-8 font-head text-[28px] italic font-semibold tracking-tight text-ink" style={{ fontStretch: "88%" }}>
            Muhammad
          </p>
        </div>
      </div>
    </section>
  );
}

/* 13. Pricing ------------------------------------------------------------- */

const PLANS = [
  {
    name: "Foundation",
    price: 2200,
    who: "Newer shops, or anyone whose website and Google profile need fixing before ads make sense.",
    items: ["Conversion-built website (you own it)", "Google Business Profile rebuild", "Local SEO for up to 5 service areas", "Call tracking + missed-call text-back", "Monday 4-number report"],
  },
  {
    name: "Lead engine",
    price: 3300,
    popular: true,
    who: "Established shops that want predictable leads from Google and Meta, every month.",
    items: ["Everything in Foundation", "Google Search + Local Services Ads", "Facebook & Instagram lead campaigns", "Landing page per service", "Speed-to-lead automation", "Weekly tuning + Monday report"],
  },
  {
    name: "Market leader",
    price: 5000,
    who: "Multi-location or multi-city companies going after a whole metro.",
    items: ["Everything in Lead engine", "Up to 3 cities / locations", "Video ad production for Meta", "Retargeting + customer-list campaigns", "CSR call scoring and coaching", "Monthly strategy call with Muhammad"],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Kicker>Pricing</Kicker>
            <H2 className="mt-5">Flat monthly fee. No percentage of your ad spend.</H2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink-2 lg:col-span-5">
            Ad spend goes straight to Google and Meta on your card, in accounts you own. We don&apos;t mark it up, and we
            don&apos;t earn more when you spend more.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-xl border p-7 ${
                p.popular ? "border-ink bg-ink text-paper shadow-[0_30px_60px_-25px_rgba(20,26,33,0.6)] lg:-my-4 lg:py-11" : "border-line bg-paper/50 text-ink"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-7 rounded-full bg-flame px-3 py-1 text-[12px] font-bold uppercase tracking-[0.06em] text-white">
                  Most shops pick this
                </span>
              )}
              <h3 className="font-head text-xl font-bold tracking-tight">{p.name}</h3>
              <p className="mt-5">
                <span className="tnum font-head text-[48px] font-extrabold tracking-tight">${p.price.toLocaleString()}</span>
                <span className={p.popular ? "text-paper/60" : "text-ink-3"}> /month</span>
              </p>
              <p className={`mt-3 text-[15px] leading-relaxed ${p.popular ? "text-paper/70" : "text-ink-2"}`}>{p.who}</p>
              <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 text-[15px] ${p.popular ? "border-paper/15" : "border-line"}`}>
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#check"
                className={`mt-8 flex h-12 items-center justify-center gap-2 rounded-md text-[16px] font-semibold transition-colors ${
                  p.popular ? "bg-flame text-white hover:bg-flame-dark" : "border border-ink/20 text-ink hover:border-ink"
                }`}
              >
                Check my city <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <ul className="mt-12 grid gap-4 text-[15px] text-ink-2 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "No long-term contract. Stay because it works.",
            "You own every account, page and phone number.",
            "One HVAC company per city.",
            "Your first call is with the founder, not a sales rep.",
          ].map((x) => (
            <li key={x} className="flex gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 14. FAQ ----------------------------------------------------------------- */


function Faq() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Kicker>Questions</Kicker>
          <H2 className="mt-5">What owners ask us on the first call.</H2>
          <div className="mt-8 rounded-xl bg-white p-5 ring-1 ring-line">
            <p className="text-[15px] text-ink-2">Something else? Talk to a real person:</p>
            <a href={SITE.phoneHref} className="tnum mt-2 flex items-center gap-2 font-head text-[22px] font-extrabold text-ink hover:text-flame">
              <Phone className="h-5 w-5 text-flame" /> {SITE.phone}
            </a>
            <p className="mt-1 text-[13px] text-ink-3">{SITE.hours}</p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList items={FAQS} />
        </div>
      </div>
    </section>
  );
}

/* 15. Final CTA ----------------------------------------------------------- */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="vent-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className={`${wrap} relative grid items-center gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <H2 tone="paper" className="!text-[42px] md:!text-[64px]">
            Find out if your city is <span className="text-flame">still open.</span>
          </H2>
          <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/70">
            If it is, you get a free recorded audit of your ads, Google profile and website within 48 hours. Keep it whether you
            hire us or not.
          </p>
          <ul className="mt-8 space-y-3 text-[16px] text-paper/85">
            {["No contract, no pressure", "Talk to the founder, not a sales rep", "You keep the audit either way"].map((x) => (
              <li key={x} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-flame" /> {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <LeadForm source="home-footer" heading="Is your city open?" />
        </div>
      </div>
    </section>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />
      <main>
        <Hero />
        <StatBand />
        <Leak />
        <Channels />
        <CityBand />
        <WhatYouSee />
        <HowItWorks />
        <AuditPreview />
        <ProofSection />
        <Compare />
        <Seasons />
        <Calculator />
        <Founder />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
