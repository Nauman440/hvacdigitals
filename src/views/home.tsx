import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Minus, Star } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";
import { FaqList, LeadFeed, RoiCalculator, SeasonChart } from "@/components/site/Widgets";
import { SITE } from "@/lib/site";

/** Legacy pages import these names; they now render the redesigned header and footer. */
export const Navbar = SiteHeader;
export const Footer = SiteFooter;

/* Shared bits ------------------------------------------------------------- */

function Kicker({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "paper" }) {
  return (
    <p className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] ${tone === "ink" ? "text-ink-3" : "text-paper/55"}`}>
      <span className="h-px w-8 bg-flame" aria-hidden="true" />
      {children}
    </p>
  );
}

const H2 = ({ children, tone = "ink", className = "" }: { children: React.ReactNode; tone?: "ink" | "paper"; className?: string }) => (
  <h2
    className={`font-head text-[34px] leading-[1.05] md:text-[48px] font-extrabold tracking-[-0.03em] ${tone === "ink" ? "text-ink" : "text-paper"} ${className}`}
  >
    {children}
  </h2>
);

const wrap = "mx-auto max-w-[1240px] px-4 md:px-6";

/* 1. Hero ----------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative bg-paper pt-[104px] md:pt-[150px] pb-16 md:pb-24">
      <div className={`${wrap} grid items-start gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-7 pt-6">
          <Kicker>For HVAC contractors in Texas</Kicker>
          <h1 className="mt-6 font-head text-[44px] leading-[1] sm:text-[58px] lg:text-[76px] font-extrabold tracking-[-0.04em] text-ink">
            Full trucks in July.
            <br />
            <span className="text-ink-3">And in </span>
            <span className="hand-underline">February.</span>
          </h1>
          <p className="mt-7 max-w-[580px] text-[18px] md:text-[20px] leading-relaxed text-ink-2">
            We run Google Ads, Local Services Ads, Facebook &amp; Instagram ads and local SEO for HVAC companies, and we
            judge ourselves on one number: <strong className="font-semibold text-ink">booked jobs</strong>. Not clicks,
            not impressions, not &ldquo;brand awareness.&rdquo;
          </p>

          <dl className="mt-10 grid max-w-[600px] grid-cols-3 divide-x divide-line border-y border-line">
            {[
              ["6.2×", "average return on ad spend"],
              ["< 60s", "follow-up on every new lead"],
              ["1", "HVAC company per city, ever"],
            ].map(([n, l]) => (
              <div key={l} className="px-3 py-4 first:pl-0 sm:px-5">
                <dt className="sr-only">{l}</dt>
                <dd className="tnum font-head text-[28px] sm:text-[34px] font-extrabold tracking-tight text-ink">{n}</dd>
                <dd className="text-[13px] sm:text-[14px] leading-snug text-ink-3">{l}</dd>
              </div>
            ))}
          </dl>

          <figure className="mt-10 flex max-w-[560px] gap-4">
            <div className="flex shrink-0 gap-0.5 pt-1 text-flame" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div>
              <blockquote className="text-[16px] leading-relaxed text-ink">
                &ldquo;LSA ads were bringing in calls inside week one. I&apos;d been burned by three agencies before. These
                guys actually know HVAC.&rdquo;
              </blockquote>
              <figcaption className="mt-1.5 text-[14px] text-ink-3">Sarah Jenkins, GM at Altitude Air</figcaption>
            </div>
          </figure>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-[130px]" id="check">
          <LeadForm source="home-hero" />
        </div>
      </div>
    </section>
  );
}

/* 2. Works-with strip ----------------------------------------------------- */

function WorksWith() {
  return (
    <section className="border-y border-line bg-paper-2/60">
      <div className={`${wrap} flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between`}>
        <p className="text-[14px] font-semibold text-ink-2">New leads land where you already work:</p>
        <ul className="flex flex-wrap gap-x-7 gap-y-2 font-head text-[16px] font-bold tracking-tight text-ink/70">
          {["ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge", "Your cell phone"].map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 3. Where the money leaks ------------------------------------------------ */

const LEAK = [
  { stage: "People who click your ad", before: 100, after: 100, fix: "Ads written for HVAC search intent, with 1,000+ junk searches blocked." },
  { stage: "Call or fill out a form", before: 22, after: 31, fix: "A landing page per service with click-to-call above the fold, not your homepage." },
  { stage: "Reach a human within 5 minutes", before: 9, after: 28, fix: "Instant text-back, an auto-call to your office, and follow-ups for 7 days." },
  { stage: "Get booked on the schedule", before: 4, after: 12, fix: "Call scoring and coaching notes, so your CSRs book the jobs they're currently losing." },
];

function Leak() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Kicker>Where the money goes</Kicker>
          <H2 className="mt-5">Most HVAC marketing doesn&apos;t fail at the ad. It fails after.</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
            Out of 100 people who click a typical HVAC ad, about 4 end up on the schedule. The other 96 aren&apos;t bad leads.
            They called while your office was on another line, or got a voicemail, or got a call back the next morning
            after they&apos;d already booked someone else.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
            So we fix the whole path, not just the ads.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="mb-4 flex items-center gap-5 text-[13px] text-ink-2">
            <span className="flex items-center gap-2"><span className="h-2.5 w-5 rounded-sm bg-ink/25" /> Typical account we audit</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-5 rounded-sm bg-flame" /> After 90 days with us</span>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {LEAK.map((r, i) => (
              <li key={r.stage} className="grid gap-4 py-6 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-4">
                  <p className="font-head text-[13px] font-bold text-ink-3">0{i + 1}</p>
                  <p className="mt-1 font-head text-[19px] font-bold leading-tight tracking-tight text-ink">{r.stage}</p>
                </div>
                <div className="space-y-2 md:col-span-4">
                  {([["before", "bg-ink/25"], ["after", "bg-flame"]] as const).map(([k, color]) => (
                    <div key={k} className="flex items-center gap-3">
                      <div className="h-3.5 flex-1 rounded-sm bg-paper-2">
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
          <p className="mt-4 text-[13px] text-ink-3">
            Per 100 ad clicks. Same budget, 3× the booked jobs.
          </p>
        </div>
      </div>
    </section>
  );
}

/* 4. Channels ------------------------------------------------------------- */

const CHANNELS = [
  { name: "Google Local Services Ads", href: "/services/paid-ads", best: "Emergency repair. The “Google Guaranteed” badge at the very top.", first: "2–7 days", cost: "Pay per lead, not per click" },
  { name: "Google Search Ads", href: "/services/paid-ads", best: "“AC repair near me”, replacements, and high-ticket installs.", first: "24–48 hours", cost: "Pay per click, tightly controlled" },
  { name: "Facebook & Instagram", href: "/services/meta-ads", best: "Tune-ups, maintenance plans, replacement + financing offers.", first: "3–5 days", cost: "Lowest cost per lead of the five" },
  { name: "Local SEO & Map Pack", href: "/services/local-seo", best: "Free calls from the map, every month, for years.", first: "60–120 days", cost: "Cost per lead falls every month" },
  { name: "Speed-to-lead automation", href: "/services/automation", best: "Booking the leads you're already paying for.", first: "Day one", cost: "Usually pays for itself first" },
];

function Channels() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Kicker>What we run</Kicker>
            <H2 className="mt-5">Five ways to make the phone ring, and what each one is actually good for.</H2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink-2 lg:col-span-5">
            Most shops need two or three of these, not all five. Which ones depends on your city, your season, and what
            a job is worth to you. Your free audit tells you which.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-line">
          <div className="hidden grid-cols-12 gap-6 bg-paper-2/60 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-3 md:grid">
            <span className="col-span-3">Channel</span>
            <span className="col-span-5">Best for</span>
            <span className="col-span-2">First leads</span>
            <span className="col-span-2">Cost</span>
          </div>
          <ul className="divide-y divide-line">
            {CHANNELS.map((c) => (
              <li key={c.name}>
                <Link href={c.href} className="group grid gap-2 px-6 py-5 transition-colors hover:bg-paper/60 md:grid-cols-12 md:gap-6 md:items-center">
                  <span className="flex items-center gap-2 font-head text-[19px] font-bold tracking-tight text-ink md:col-span-3">
                    {c.name}
                    <ArrowUpRight className="h-4 w-4 text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-2 md:col-span-5">{c.best}</span>
                  <span className="text-[15px] text-ink md:col-span-2">
                    <span className="text-ink-3 md:hidden">First leads: </span>
                    {c.first}
                  </span>
                  <span className="text-[15px] text-ink-2 md:col-span-2">{c.cost}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* 5. What you see ---------------------------------------------------------- */

function WhatYouSee() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <Kicker tone="paper">No 40-page reports</Kicker>
          <H2 tone="paper" className="mt-5">You see leads, booked jobs and cost per job. That&apos;s it.</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-paper/70">
            Every call is recorded and every form is logged with where it came from. Leads go into one inbox and straight
            into your CRM. Every Monday you get a short report with four numbers and what we&apos;re changing this week.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-paper/10 bg-paper/10">
            {[
              ["Leads", "87"],
              ["Booked jobs", "41"],
              ["Cost per booked job", "$94"],
              ["Revenue from ads", "$58,300"],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink p-5">
                <dt className="text-[13px] text-paper/55">{k}</dt>
                <dd className="tnum mt-1 font-head text-3xl font-extrabold text-paper">{v}</dd>
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

/* 6. Seasons ------------------------------------------------------------- */

function Seasons() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Kicker>Built for Texas weather</Kicker>
          <H2 className="mt-5">Your demand isn&apos;t flat. Your marketing shouldn&apos;t be either.</H2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
            In July you need every emergency call you can answer. In February you need a reason for homeowners to call you
            at all. We plan the whole year around that, so your techs aren&apos;t sitting in the shop in the slow months.
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

/* 7. Results ------------------------------------------------------------- */

function Results() {
  return (
    <section id="results" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className={wrap}>
        <Kicker>Results</Kicker>
        <div className="mt-5 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <H2>Dallas Bay HVAC was spending $6,000 a month on ads and couldn&apos;t trace 20 leads to it.</H2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
              Their old agency sent a monthly PDF full of impressions and click-through rates. Nobody could say which calls
              came from ads. We rebuilt the account around LSAs and tightly focused search campaigns, added call tracking,
              and set up text-back for missed calls.
            </p>
            <ol className="mt-8 space-y-4 border-l-2 border-line pl-6">
              {[
                ["Week 1", "Audit: 41% of spend was going to searches like “HVAC school” and “DIY AC fix.”"],
                ["Week 2", "LSA profile verified, new search campaigns live, every call tracked and recorded."],
                ["Month 2", "Cost per lead down from $94 to $31. Missed-call text-back recovering about 15 jobs a month."],
                ["Month 3", "340 qualified leads in 90 days at $18 each, from the same budget."],
              ].map(([t, d]) => (
                <li key={t} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-flame" aria-hidden="true" />
                  <p className="font-head text-[15px] font-bold text-ink">{t}</p>
                  <p className="text-[15px] leading-relaxed text-ink-2">{d}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-line">
              <div className="grid grid-cols-3 border-b border-line bg-paper-2/60 px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-3">
                <span />
                <span>Before</span>
                <span>After 90 days</span>
              </div>
              {[
                ["Cost per lead", "$94", "$18"],
                ["Trackable leads / mo", "< 20", "113"],
                ["Return on ad spend", "unknown", "6.8×"],
                ["Missed calls followed up", "0%", "100%"],
              ].map(([k, b, a]) => (
                <div key={k} className="grid grid-cols-3 items-center border-b border-line px-5 py-4 last:border-b-0">
                  <span className="text-[14px] text-ink-2">{k}</span>
                  <span className="tnum text-[17px] text-ink-3 line-through decoration-ink-3/40">{b}</span>
                  <span className="tnum font-head text-[22px] font-extrabold text-ink">{a}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { co: "San Antonio Cooling Pros", line: "First call 24 hours after launch. It was a $4,200 install." },
                { co: "South Texas Air Systems, Houston", line: "189 leads in 60 days from Google + Facebook retargeting, at 5.9× return." },
              ].map((c) => (
                <div key={c.co} className="rounded-lg bg-paper p-5">
                  <p className="text-[14px] font-semibold text-ink">{c.co}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{c.line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-line pt-12 md:grid-cols-3">
          {[
            { q: "Within 60 days they had us in the 3-pack for every Dallas zip code we service. Calendar's booked three weeks out.", n: "Marcus Reyes", r: "Owner, Reyes Heating & Cooling" },
            { q: "The missed-call text-back alone saved us about $12k in jobs last month, when we were too busy to answer.", n: "David Chen", r: "Owner, Chen Climate Control" },
            { q: "Every time someone searches AC repair in my zip code, we're the first thing they see. Revenue's up 40% on last year.", n: "Tom Mitchell", r: "Owner, Mitchell Mechanical" },
          ].map((t) => (
            <figure key={t.n}>
              <blockquote className="text-[17px] leading-relaxed text-ink">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="mt-4 text-[14px]">
                <span className="font-semibold text-ink">{t.n}</span>
                <span className="text-ink-3"> · {t.r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. Calculator ---------------------------------------------------------- */

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
            Move the sliders to match your shop. The estimate includes our fee, because a return that leaves out the agency&apos;s
            fee isn&apos;t a real return.
          </p>
        </div>
        <RoiCalculator />
      </div>
    </section>
  );
}

/* 9. Founder ------------------------------------------------------------- */

function Founder() {
  return (
    <section className="bg-paper-2/60 py-20 md:py-28">
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <div className="relative mx-auto max-w-[360px]">
            <Image
              src="/images/founder-real.jpeg"
              alt="Muhammad Nauman, founder of HVAC Digitals"
              width={960}
              height={1280}
              className="aspect-[4/5] w-full rounded-lg object-cover object-top"
              sizes="(min-width: 1024px) 360px, 80vw"
            />
            <div className="absolute -bottom-4 left-4 right-4 rounded-md bg-ink px-4 py-3 text-paper">
              <p className="font-head text-[17px] font-bold">Muhammad Nauman</p>
              <p className="text-[13px] text-paper/60">Founder. You&apos;ll have his cell number.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Kicker>A note from the founder</Kicker>
          <div className="mt-6 space-y-5 text-[18px] md:text-[19px] leading-relaxed text-ink">
            <p>
              The best HVAC contractors I know are terrible at marketing, and they don&apos;t need to be good at it. They
              need the phone to ring with homeowners in their area, at a cost that makes sense.
            </p>
            <p className="text-ink-2">
              I started HVAC Digitals in 2021 because I kept seeing great shops lose summers to competitors with half the
              skill and a bigger Google budget. So we only do one thing, HVAC lead generation, and we only work in Texas.
              We take one company per city, so we never bid against our own client.
            </p>
            <p className="text-ink-2">
              If you call, you&apos;ll talk to me. If we&apos;re not a fit, I&apos;ll tell you, and I&apos;ll tell you
              what I&apos;d do in your shoes anyway.
            </p>
          </div>
          <p className="mt-8 font-head text-[26px] italic font-semibold tracking-tight text-ink" style={{ fontStretch: "88%" }}>
            Muhammad
          </p>
        </div>
      </div>
    </section>
  );
}

/* 10. Pricing ------------------------------------------------------------ */

const PLANS = [
  {
    name: "Foundation",
    price: 2200,
    who: "Newer shops, or anyone whose website and Google profile need fixing before ads make sense.",
    items: ["Conversion-built website (you own it)", "Google Business Profile rebuild", "Local SEO for up to 5 service areas", "Call tracking + missed-call text-back", "Monthly 4-number report"],
  },
  {
    name: "Lead engine",
    price: 3300,
    popular: true,
    who: "Established shops that want predictable leads from Google and Meta, every month.",
    items: ["Everything in Foundation", "Google Search + Local Services Ads", "Facebook & Instagram lead campaigns", "Landing page per service", "Speed-to-lead automation (texts, auto-call, 7-day follow-up)", "Weekly optimization + Monday report"],
  },
  {
    name: "Market leader",
    price: 5000,
    who: "Multi-location or multi-city companies going after a whole metro.",
    items: ["Everything in Lead engine", "Up to 3 cities / locations", "Video ad production for Meta", "Retargeting + customer-list campaigns", "CSR call scoring and coaching notes", "Monthly strategy call with Muhammad"],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-paper py-20 md:py-28">
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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-lg border p-7 ${p.popular ? "border-ink bg-ink text-paper" : "border-line bg-white text-ink"}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-head text-xl font-bold tracking-tight">{p.name}</h3>
                {p.popular && <span className="rounded bg-flame px-2 py-1 text-[12px] font-semibold text-white">Most shops pick this</span>}
              </div>
              <p className="mt-5">
                <span className="tnum font-head text-[44px] font-extrabold tracking-tight">${p.price.toLocaleString()}</span>
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
              <Link
                href="/contact"
                className={`mt-8 flex h-12 items-center justify-center gap-2 rounded-md text-[16px] font-semibold transition-colors ${
                  p.popular ? "bg-flame text-white hover:bg-flame-dark" : "border border-ink/20 text-ink hover:border-ink"
                }`}
              >
                Check my city <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <ul className="mt-10 grid gap-4 text-[15px] text-ink-2 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "No long-term contract. Stay because it works.",
            "You own every account, page and phone number.",
            "One HVAC company per city, written into the agreement.",
            "Your first call is with the founder, not a sales rep.",
          ].map((x) => (
            <li key={x} className="flex gap-3">
              <Minus className="mt-1 h-4 w-4 shrink-0 text-flame" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 11. FAQ ---------------------------------------------------------------- */

const FAQS = [
  {
    q: "How fast will I get leads?",
    a: "Google Search and Local Services Ads usually produce calls within the first week, often the first 48 hours. Meta campaigns take 3–5 days to find their footing. SEO and the Map Pack are the slow, compounding part: expect real movement in 60–120 days.",
  },
  {
    q: "What does it cost all-in?",
    a: "Our flat fee plus your ad spend. Most single-city shops spend $2,000–$5,000 a month on ads. We'll recommend a number for your market in the audit and explain why. We don't take a percentage of spend.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. There's no long-term contract. We ask for 90 days to judge the results fairly, because the first month is mostly setup and testing, but you can leave whenever you want and keep everything we built.",
  },
  {
    q: "Will you work with my competitor?",
    a: "No. One HVAC company per city or service area, in writing. If your city is taken, we'll tell you straight away and won't waste your time.",
  },
  {
    q: "Are Facebook leads any good for HVAC?",
    a: "For emergency repair, no. That's what Google is for. For tune-ups, maintenance plans and replacement offers, Meta is usually your cheapest lead source, as long as someone contacts the lead within minutes. That's why speed-to-lead is part of every plan.",
  },
  {
    q: "I've been burned by an agency before. What's different?",
    a: "You own the accounts, we report booked jobs instead of clicks, and there's no contract keeping you here. If the numbers aren't working, you'll see it in the Monday report before we have to tell you.",
  },
];

function Faq() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <Kicker>Questions</Kicker>
          <H2 className="mt-5">What owners ask us on the first call.</H2>
          <p className="mt-6 text-[17px] text-ink-2">
            Something else?{" "}
            <a href={SITE.phoneHref} className="font-semibold text-flame underline-offset-4 hover:underline">
              Call {SITE.phone}
            </a>
          </p>
        </div>
        <div className="lg:col-span-8">
          <FaqList items={FAQS} />
        </div>
      </div>
    </section>
  );
}

/* 12. Final CTA ---------------------------------------------------------- */

function FinalCta() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <H2 tone="paper" className="!text-[40px] md:!text-[60px]">Find out if your city is still open.</H2>
          <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/70">
            We take one HVAC company per city. If yours is open, you get a free recorded audit of your ads, your Google
            profile and your website within 48 hours. Keep it whether you hire us or not.
          </p>
          <p className="mt-8 text-[16px] text-paper/60">
            Prefer to talk?{" "}
            <a href={SITE.phoneHref} className="tnum font-semibold text-paper hover:text-flame">
              {SITE.phone}
            </a>{" "}
            · {SITE.hours}
          </p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <LeadForm source="home-footer" tone="light" />
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
        <WorksWith />
        <Leak />
        <Channels />
        <WhatYouSee />
        <Seasons />
        <Results />
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
