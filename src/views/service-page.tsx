import Link from "next/link";
import { ArrowRight, Check, ChevronRight, CirclePlay, Heart, MapPin, MessageCircle, MoreHorizontal, Phone, Star, ThumbsUp, X } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";
import { FaqList } from "@/components/site/Widgets";
import type { ServiceData } from "@/data/services";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";
import { ProofSection } from "@/components/site/Proof";

const wrap = "mx-auto max-w-[1240px] px-4 md:px-6";

function Kicker({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "paper" }) {
  return (
    <p className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] ${tone === "ink" ? "text-ink-3" : "text-paper/55"}`}>
      <span className="h-px w-8 bg-flame" aria-hidden="true" />
      {children}
    </p>
  );
}

function Stars({ n = 5, className = "h-3.5 w-3.5" }: { n?: number; className?: string }) {
  return (
    <span className="inline-flex text-[#F4B400]" aria-hidden="true">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

/* Platform mocks: drawn, not screenshots, so they stay crisp and on-brand ---- */

function GoogleMock() {
  return (
    <div className="rounded-lg border border-line bg-white p-5 font-sans text-[#202124] shadow-[0_30px_60px_-30px_rgba(20,26,33,0.3)]">
      <div className="flex items-center gap-3 rounded-full border border-[#dfe1e5] px-4 py-2.5 text-[15px]">
        <span className="text-[#5f6368]">⌕</span> ac repair near me
      </div>
      <p className="mt-4 text-[12px] font-semibold text-[#5f6368]">Sponsored · Local services</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          { n: "Your Company", r: "4.9", c: "212", you: true },
          { n: "Competitor A/C", r: "4.6", c: "88" },
        ].map((b) => (
          <div key={b.n} className={`rounded-md border p-3 ${b.you ? "border-flame ring-2 ring-flame/20" : "border-[#dfe1e5]"}`}>
            <p className="text-[14px] font-semibold">{b.n}</p>
            <p className="mt-0.5 flex items-center gap-1 text-[12px] text-[#5f6368]">
              {b.r} <Stars className="h-3 w-3" /> ({b.c})
            </p>
            <p className="mt-1 flex items-center gap-1 text-[12px] text-[#188038]">
              <Check className="h-3 w-3" /> Google Verified
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-[#ebebeb] pt-4">
        <p className="text-[12px] text-[#202124]"><span className="font-semibold">Sponsored</span> · yourcompany.com/ac-repair</p>
        <p className="mt-1 text-[18px] leading-snug text-[#1a0dab]">Same-Day AC Repair in Plano | Techs Out Within 2 Hours</p>
        <p className="mt-1 text-[14px] leading-snug text-[#4d5156]">Licensed & insured. Upfront pricing before work starts. 4.9★ from 212 neighbors. Call now.</p>
        <p className="mt-2 flex items-center gap-1.5 text-[14px] text-[#1a0dab]"><Phone className="h-3.5 w-3.5" /> (214) 555-0100</p>
      </div>
    </div>
  );
}

function MetaMock() {
  return (
    <div className="mx-auto max-w-[400px] rounded-lg border border-line bg-white font-sans text-[#050505] shadow-[0_30px_60px_-30px_rgba(20,26,33,0.3)]">
      <div className="flex items-center gap-2.5 p-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-head text-[13px] font-bold text-paper">YC</span>
        <div className="flex-1">
          <p className="text-[14px] font-semibold leading-tight">Your Company Heating & Air</p>
          <p className="text-[12px] text-[#65676b]">Sponsored</p>
        </div>
        <MoreHorizontal className="h-5 w-5 text-[#65676b]" />
      </div>
      <p className="px-3.5 pb-3 text-[14px] leading-snug">
        Plano homeowners: we&apos;re booking spring tune-ups now, before the July rush. 21-point check, filter included,
        no upsell pressure. 40 spots this month.
      </p>
      <div className="relative flex aspect-[4/3] items-end bg-[linear-gradient(160deg,#2b3540,#141A21)] p-4">
        <div className="absolute right-4 top-4 rounded bg-flame px-2.5 py-1 font-head text-[22px] font-extrabold text-white">$79</div>
        <div>
          <p className="font-head text-[26px] font-extrabold leading-none tracking-tight text-paper">Spring AC tune-up</p>
          <p className="mt-1.5 text-[13px] text-paper/70">Photo: your tech, your truck, your customer&apos;s yard</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 bg-[#f0f2f5] px-3.5 py-3">
        <div className="min-w-0">
          <p className="text-[12px] uppercase text-[#65676b]">Instant form</p>
          <p className="truncate text-[15px] font-semibold">Book your $79 tune-up</p>
        </div>
        <span className="shrink-0 rounded-md bg-[#e4e6eb] px-3 py-2 text-[14px] font-semibold">Get offer</span>
      </div>
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 text-[13px] text-[#65676b]">
        <ThumbsUp className="h-3.5 w-3.5" /> 184 · 37 comments
      </div>
    </div>
  );
}

function MapMock() {
  const rows = [
    { n: "Your Company Heating & Air", r: "4.9", c: "248", d: "1.2 mi", you: true },
    { n: "Competitor Comfort Co.", r: "4.7", c: "131", d: "2.8 mi" },
    { n: "Another Air Services", r: "4.5", c: "96", d: "3.4 mi" },
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white font-sans text-[#202124] shadow-[0_30px_60px_-30px_rgba(20,26,33,0.3)]">
      <div className="relative h-40 bg-[#e8eae6]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 110 C80 90 140 130 220 100 S340 60 400 80" stroke="#fff" strokeWidth="10" fill="none" />
          <path d="M120 0 L160 160" stroke="#fff" strokeWidth="7" />
          <path d="M290 0 L260 160" stroke="#fff" strokeWidth="5" />
          <rect x="20" y="20" width="70" height="40" fill="#d5e8d0" />
          <rect x="310" y="105" width="70" height="45" fill="#d5e8d0" />
        </svg>
        {[
          [34, 46, true],
          [62, 28, false],
          [76, 62, false],
        ].map(([x, y, you], i) => (
          <MapPin
            key={i}
            className={`absolute h-7 w-7 -translate-x-1/2 -translate-y-full ${you ? "fill-flame text-white" : "fill-[#ea4335] text-white"}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
      </div>
      <ul className="divide-y divide-[#ebebeb]">
        {rows.map((r) => (
          <li key={r.n} className={`flex items-start justify-between gap-3 p-4 ${r.you ? "bg-flame/[0.06]" : ""}`}>
            <div>
              <p className="text-[15px] font-semibold">{r.n}</p>
              <p className="mt-0.5 flex items-center gap-1 text-[13px] text-[#5f6368]">
                {r.r} <Stars className="h-3 w-3" /> ({r.c}) · HVAC contractor · {r.d}
              </p>
              <p className="mt-0.5 text-[13px] text-[#188038]">Open 24 hours</p>
            </div>
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dadce0] text-[#1a73e8]">
              <Phone className="h-4 w-4" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrganicMock() {
  return (
    <div className="rounded-lg border border-line bg-white p-5 font-sans text-[#202124] shadow-[0_30px_60px_-30px_rgba(20,26,33,0.3)]">
      <div className="flex items-center gap-3 rounded-full border border-[#dfe1e5] px-4 py-2.5 text-[15px]">
        <span className="text-[#5f6368]">⌕</span> heat pump replacement cost frisco
      </div>
      <div className="mt-4 rounded-md bg-[#f1f3f4] p-4">
        <p className="text-[12px] font-semibold text-[#5f6368]">AI Overview</p>
        <p className="mt-1.5 text-[14px] leading-relaxed">
          A heat pump replacement in Frisco typically costs between $7,500 and $14,000 depending on size and efficiency.
          Local installers such as <span className="rounded bg-flame/15 px-1 font-semibold">Your Company Heating &amp; Air</span>{" "}
          publish upfront price ranges…
        </p>
      </div>
      <div className="mt-5">
        <p className="flex items-center gap-2 text-[13px]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-paper">YC</span>
          <span>yourcompany.com › heat-pumps › frisco</span>
        </p>
        <p className="mt-1 text-[18px] leading-snug text-[#1a0dab]">Heat Pump Replacement Cost in Frisco (2026 Prices)</p>
        <p className="mt-1 flex items-center gap-1 text-[13px] text-[#70757a]">
          <Stars className="h-3 w-3" /> Rating: 4.9 · 248 reviews
        </p>
        <p className="mt-1 text-[14px] leading-snug text-[#4d5156]">
          Real installed prices from 300+ Frisco jobs, what changes the cost, and rebates you can claim this year…
        </p>
      </div>
    </div>
  );
}

function SiteMock() {
  return (
    <div className="mx-auto w-[300px] rounded-[36px] border-[10px] border-ink bg-white shadow-[0_30px_60px_-30px_rgba(20,26,33,0.45)]">
      <div className="overflow-hidden rounded-[26px] font-sans text-ink">
        <div className="flex items-center justify-between bg-ink px-4 py-3 text-paper">
          <span className="font-head text-[14px] font-bold">Your Company</span>
          <span className="flex items-center gap-1 rounded bg-flame px-2 py-1 text-[11px] font-bold text-white"><Phone className="h-3 w-3" /> Call</span>
        </div>
        <div className="bg-paper p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-3">AC repair · Plano</p>
          <p className="mt-1 font-head text-[22px] font-extrabold leading-[1.05] tracking-tight">AC out? A tech at your door today.</p>
          <p className="mt-2 flex items-center gap-1 text-[12px] text-ink-2">
            <span className="flex text-[#F5B301]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}</span>
            4.9 · 212 Google reviews
          </p>
          <span className="mt-4 flex h-11 items-center justify-center gap-2 rounded-md bg-flame text-[14px] font-semibold text-white"><Phone className="h-4 w-4" /> Call (214) 555-0100</span>
          <span className="mt-2 flex h-10 items-center justify-center rounded-md border border-line bg-white text-[13px] font-semibold">Book online</span>
        </div>
        <ul className="space-y-2 p-4 text-[12px] text-ink-2">
          {["Upfront pricing before work starts", "Licensed & insured", "Serving Plano, Frisco & Allen"].map((x) => (
            <li key={x} className="flex gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-moss" /> {x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SmsMock() {
  return (
    <div className="mx-auto max-w-[380px] rounded-xl border border-line bg-white p-5 font-sans shadow-[0_30px_60px_-30px_rgba(20,26,33,0.3)]">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper-2 text-[12px] font-bold text-ink">BK</span>
        <div>
          <p className="text-[14px] font-semibold text-ink">Brenda K.</p>
          <p className="text-[11px] text-ink-3">Missed call · 6:42 PM</p>
        </div>
      </div>
      <div className="mt-4 space-y-2.5 text-[13px]">
        <div className="ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-ice px-3 py-2 text-white">Hi Brenda, this is Cool Air. Sorry we missed your call! Is your AC not cooling? We can come out tonight or first thing tomorrow.</div>
        <p className="text-right text-[11px] text-ink-3">Sent automatically, 8 seconds after the missed call</p>
        <div className="max-w-[70%] rounded-lg rounded-bl-sm bg-paper-2 px-3 py-2 text-ink">Tomorrow morning works. It&apos;s blowing warm air.</div>
        <div className="ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-ice px-3 py-2 text-white">Got it. You&apos;re booked for 8–10 AM. Jake will text when he&apos;s on the way.</div>
        <p className="flex items-center justify-end gap-1 text-[11px] font-semibold text-moss"><Check className="h-3 w-3" /> Booked</p>
      </div>
    </div>
  );
}

function SocialMock() {
  return (
    <div className="mx-auto max-w-[380px] overflow-hidden rounded-xl border border-line bg-white font-sans text-ink shadow-[0_30px_60px_-30px_rgba(20,26,33,0.3)]">
      <div className="flex items-center gap-2.5 p-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-head text-[12px] font-bold text-paper">YC</span>
        <div className="flex-1">
          <p className="text-[14px] font-semibold leading-tight">yourcompany.hvac</p>
          <p className="text-[12px] text-ink-3">Plano, Texas</p>
        </div>
        <MoreHorizontal className="h-5 w-5 text-ink-3" />
      </div>
      <div className="relative flex aspect-square items-end bg-[linear-gradient(160deg,#2b3540,#141A21)] p-4">
        <CirclePlay className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-paper/80" strokeWidth={1.5} />
        <div>
          <p className="font-head text-[22px] font-extrabold leading-tight text-paper">Changing a filter takes 2 minutes.</p>
          <p className="mt-1 text-[13px] text-paper/70">Jake shows you how · Reel, 0:42</p>
        </div>
      </div>
      <div className="flex items-center gap-4 px-3.5 pt-3 text-ink-2">
        <Heart className="h-5 w-5" /> <MessageCircle className="h-5 w-5" />
      </div>
      <p className="px-3.5 pb-3.5 pt-2 text-[13px]"><span className="font-semibold">yourcompany.hvac</span> Spring tip from our team: swap your filter before the first hot week. Need a tune-up? Link in bio.</p>
    </div>
  );
}

const MOCKS = { google: GoogleMock, meta: MetaMock, map: MapMock, organic: OrganicMock, site: SiteMock, sms: SmsMock, social: SocialMock };

/* Page ------------------------------------------------------------------- */

export default function ServicePage({ service: s }: { service: ServiceData }) {
  const Mock = MOCKS[s.mock];
  const others = Object.values(SERVICES).filter((o) => o.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.name,
        serviceType: s.serviceType,
        description: s.intro,
        url: `${SITE_URL}${s.path}`,
        areaServed: { "@type": "State", name: "Texas" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: s.kicker, item: `${SITE_URL}${s.path}` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-paper pt-[100px] md:pt-[140px] pb-16 md:pb-24">
          <div className={wrap}>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[14px] text-ink-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-ink">{s.kicker}</span>
            </nav>
            <div className="grid items-start gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Kicker>{s.kicker}</Kicker>
                <h1 className="mt-6 font-head text-[42px] leading-[1.02] sm:text-[56px] lg:text-[68px] font-extrabold tracking-[-0.04em]">
                  {s.h1}
                  {s.h1Muted && (
                    <>
                      <br />
                      <span className="text-ink-3">{s.h1Muted}</span>
                    </>
                  )}
                </h1>
                <p className="mt-7 max-w-[600px] text-[18px] md:text-[19px] leading-relaxed text-ink-2">{s.intro}</p>
                <dl className="mt-10 grid max-w-[600px] grid-cols-3 divide-x divide-line border-y border-line">
                  {s.stats.map(([n, l]) => (
                    <div key={l} className="px-3 py-4 first:pl-0 sm:px-5">
                      <dt className="sr-only">{l}</dt>
                      <dd className="tnum font-head text-[26px] sm:text-[32px] font-extrabold tracking-tight">{n}</dd>
                      <dd className="text-[13px] sm:text-[14px] leading-snug text-ink-3">{l}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="lg:col-span-5 lg:sticky lg:top-[130px] scroll-mt-32" id="top-form">
                <LeadForm source={s.slug} defaultService={s.kicker} heading={s.formHeading} subheading="A recorded walkthrough within 48 hours, specific to your business. Free, and yours to keep." />
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="border-y border-line bg-white py-16 md:py-20">
          <div className={`${wrap} grid gap-10 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <Kicker>Honest fit check</Kicker>
              <h2 className="mt-5 font-head text-[30px] md:text-[38px] font-extrabold leading-[1.05] tracking-[-0.03em]">
                This works well for some shops. Not for every shop.
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
              <div>
                <p className="mb-4 font-head text-[17px] font-bold text-moss">A good fit if…</p>
                <ul className="space-y-3">
                  {s.fitYes.map((x) => (
                    <li key={x} className="flex gap-3 text-[16px] leading-relaxed text-ink-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-moss" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 font-head text-[17px] font-bold text-ink-3">Probably not right now if…</p>
                <ul className="space-y-3">
                  {s.fitNo.map((x) => (
                    <li key={x} className="flex gap-3 text-[16px] leading-relaxed text-ink-2">
                      <X className="mt-1 h-4 w-4 shrink-0 text-ink-3" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Work + mock */}
        <section className="bg-paper py-20 md:py-28">
          <div className={`${wrap} grid gap-14 lg:grid-cols-12`}>
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-[130px]">
                <Mock />
                <p className="mt-3 text-[13px] text-ink-3">{s.mockCaption}</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Kicker>The work</Kicker>
              <h2 className="mt-5 font-head text-[34px] md:text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em]">{s.workTitle}</h2>
              <ol className="mt-10 divide-y divide-line border-y border-line">
                {s.work.map((w, i) => (
                  <li key={w.t} className="grid gap-2 py-6 sm:grid-cols-[56px_1fr]">
                    <span className="tnum font-head text-[15px] font-bold text-flame">0{i + 1}</span>
                    <div>
                      <h3 className="font-head text-[20px] font-bold tracking-tight">{w.t}</h3>
                      <p className="mt-1.5 text-[16px] leading-relaxed text-ink-2">{w.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-ink py-20 md:py-24">
          <div className={wrap}>
            <Kicker tone="paper">Your first 90 days</Kicker>
            <h2 className="mt-5 max-w-3xl font-head text-[34px] md:text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-paper">
              What happens after you say yes.
            </h2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-paper/10 bg-paper/10 md:grid-cols-4">
              {s.timeline.map((t, i) => (
                <li key={t.when} className="bg-ink p-6">
                  <p className="flex items-center gap-2 font-head text-[15px] font-bold text-flame">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-flame/50 text-[12px]">{i + 1}</span>
                    {t.when}
                  </p>
                  <p className="mt-3 text-[16px] leading-relaxed text-paper/75">{t.what}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Audit */}
        <section className="bg-white py-20 md:py-28">
          <div className={`${wrap} grid items-start gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-6">
              <Kicker>Your free audit</Kicker>
              <h2 className="mt-5 font-head text-[34px] md:text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em]">
                See what&apos;s working and what isn&apos;t, before you spend a dollar with us.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-2">
                Within 48 hours you get a recorded video walkthrough, specific to your business and your city. It&apos;s yours to
                keep, whether you hire us or not.
              </p>
              <a href="#top-form" className="mt-8 inline-flex h-14 items-center gap-2 rounded-md bg-flame px-7 text-[17px] font-semibold text-white hover:bg-flame-dark">
                Get my free audit <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="rounded-xl border border-line bg-paper p-6 md:p-8 lg:col-span-6">
              <p className="text-[14px] font-semibold text-ink">What the audit covers</p>
              <ul className="mt-5 space-y-4">
                {s.audit.map((a, i) => (
                  <li key={a} className="flex gap-4">
                    <span className="tnum flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-head text-[13px] font-bold text-paper">{i + 1}</span>
                    <span className="pt-0.5 text-[16px] leading-relaxed text-ink">{a}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-[14px] text-ink-3">Plus the 3 fixes we&apos;d make first.</p>
            </div>
          </div>
        </section>

        <ProofSection service={s.slug} />

        {/* FAQ */}
        <section className="bg-paper py-20 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <Kicker>Questions</Kicker>
              <h2 className="mt-5 font-head text-[34px] md:text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em]">Straight answers.</h2>
              <div className="mt-8 hidden lg:block">
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-3">Works well with</p>
                <ul className="space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={o.path} className="text-[16px] font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-flame">
                        {o.kicker}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FaqList items={s.faqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink py-20 md:py-28">
          <div className={`${wrap} grid items-center gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-6">
              <h2 className="font-head text-[38px] md:text-[56px] font-extrabold leading-[1.02] tracking-[-0.035em] text-paper">{s.ctaTitle}</h2>
              <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/70">
                Free recorded audit within 48 hours. You keep it whether you hire us or not.
              </p>
              <p className="mt-8 text-[16px] text-paper/60">
                Or call <a href={SITE.phoneHref} className="tnum font-semibold text-paper hover:text-flame">{SITE.phone}</a> · {SITE.hours}
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <LeadForm source={`${s.slug}-footer`} defaultService={s.kicker} heading={s.formHeading} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
