"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, PhoneIncoming, FileText, MessageSquare } from "lucide-react";

/* ------------------------------------------------------------------------- */
/* Lead inbox: shows what "working marketing" looks like from the owner's seat */
/* ------------------------------------------------------------------------- */

type Lead = {
  name: string;
  area: string;
  job: string;
  source: "Google LSA" | "Google Search" | "Facebook" | "Instagram" | "Map Pack";
  kind: "call" | "form" | "text";
  status: "Booked" | "Called back" | "New";
};

const POOL: Lead[] = [
  { name: "Brenda K.", area: "Plano", job: "AC not cooling, upstairs unit", source: "Google LSA", kind: "call", status: "Booked" },
  { name: "Marcus T.", area: "Frisco", job: "Replacement quote, 3-ton", source: "Facebook", kind: "form", status: "Called back" },
  { name: "Luis R.", area: "Garland", job: "$79 tune-up offer", source: "Instagram", kind: "form", status: "Booked" },
  { name: "Dana W.", area: "Richardson", job: "Breaker keeps tripping on condenser", source: "Google Search", kind: "call", status: "Booked" },
  { name: "Owen P.", area: "McKinney", job: "Maintenance plan signup", source: "Facebook", kind: "form", status: "Booked" },
  { name: "Priya S.", area: "Allen", job: "Furnace smell, first cold night", source: "Map Pack", kind: "call", status: "Called back" },
  { name: "Jamal H.", area: "Carrollton", job: "Missed call, texted back", source: "Google LSA", kind: "text", status: "Booked" },
  { name: "Tess M.", area: "Wylie", job: "Heat pump estimate + financing", source: "Facebook", kind: "form", status: "New" },
];

const KIND_ICON = { call: PhoneIncoming, form: FileText, text: MessageSquare } as const;

export function LeadFeed() {
  const [items, setItems] = useState(() => POOL.slice(0, 5).map((l, i) => ({ ...l, key: i, mins: [2, 9, 17, 26, 41][i] })));
  const cursor = useRef(5);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      const c = cursor.current++;
      const lead = POOL[c % POOL.length];
      setItems((prev) => [{ ...lead, key: c, mins: 0 }, ...prev.map((p) => ({ ...p, mins: p.mins + 3 }))].slice(0, 5));
    }, 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-lg border border-line bg-white shadow-[0_30px_60px_-30px_rgba(20,26,33,0.35)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div>
          <p className="text-[14px] font-semibold text-ink">New leads · Tuesday</p>
          <p className="text-[12px] text-ink-3">Example inbox, names changed</p>
        </div>
        <span className="flex items-center gap-1.5 text-[12px] font-semibold text-moss">
          <span className="h-2 w-2 rounded-full bg-moss" /> Live
        </span>
      </div>
      <ul className="divide-y divide-line" aria-live="off">
        {items.map((l) => {
          const Icon = KIND_ICON[l.kind];
          return (
            <li key={l.key} className={`flex items-start gap-3 px-5 py-3.5 ${l.mins === 0 ? "feed-in bg-flame/[0.04]" : ""}`}>
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-paper-2 text-ink-2">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="truncate text-[14px] font-semibold text-ink">
                    {l.name} <span className="font-normal text-ink-3">· {l.area}</span>
                  </p>
                  <span className="tnum shrink-0 text-[12px] text-ink-3">{l.mins === 0 ? "just now" : `${l.mins}m ago`}</span>
                </div>
                <p className="truncate text-[13px] text-ink-2">{l.job}</p>
                <div className="mt-1.5 flex items-center gap-2 text-[12px]">
                  <span className="rounded bg-paper-2 px-1.5 py-0.5 text-ink-2">{l.source}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 font-semibold ${
                      l.status === "Booked" ? "bg-moss/10 text-moss" : l.status === "New" ? "bg-flame/10 text-flame" : "bg-ink/5 text-ink-2"
                    }`}
                  >
                    {l.status}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* ROI calculator                                                             */
/* ------------------------------------------------------------------------- */

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-[15px]">
        <span className="text-paper/80">{label}</span>
        <span className="tnum font-head text-lg font-bold text-paper">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full accent-[#E8590C]"
        style={{ background: `linear-gradient(to right, #E8590C ${pct}%, rgb(245 241 234 / 0.15) ${pct}%)` }}
      />
    </label>
  );
}

export function RoiCalculator({ fee = 3300 }: { fee?: number }) {
  const [spend, setSpend] = useState(3000);
  const [ticket, setTicket] = useState(1800);
  const [close, setClose] = useState(35);
  const CPL = 45; // conservative blended cost per lead (Google + Meta), Texas

  const r = useMemo(() => {
    const leads = Math.round(spend / CPL);
    const jobs = Math.round(leads * (close / 100));
    const revenue = jobs * ticket;
    const total = spend + fee;
    return { leads, jobs, revenue, total, multiple: revenue / total };
  }, [spend, ticket, close, fee]);

  return (
    <div className="grid overflow-hidden rounded-lg border border-paper/10 md:grid-cols-2">
      <div className="space-y-7 bg-ink p-6 md:p-8">
        <Slider label="Monthly ad budget" value={spend} min={1500} max={15000} step={500} onChange={setSpend} format={usd} />
        <Slider label="Average job value" value={ticket} min={250} max={12000} step={50} onChange={setTicket} format={usd} />
        <Slider label="Leads you turn into jobs" value={close} min={10} max={70} step={1} onChange={setClose} format={(v) => `${v}%`} />
        <p className="text-[13px] leading-relaxed text-paper/50">
          Assumes a blended ${CPL} cost per lead across Google and Meta, which is conservative for most Texas markets.
          Your free audit replaces this with real numbers for your city.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-8 bg-[#1C242D] p-6 md:p-8">
        <dl className="grid grid-cols-2 gap-6">
          <div>
            <dt className="text-[14px] text-paper/60">Leads per month</dt>
            <dd className="tnum font-head text-4xl font-extrabold text-paper">{r.leads}</dd>
          </div>
          <div>
            <dt className="text-[14px] text-paper/60">Booked jobs</dt>
            <dd className="tnum font-head text-4xl font-extrabold text-paper">{r.jobs}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-[14px] text-paper/60">Estimated revenue per month</dt>
            <dd className="tnum font-head text-5xl font-extrabold text-flame">{usd(r.revenue)}</dd>
          </div>
        </dl>
        <div className="border-t border-paper/10 pt-5">
          <p className="text-[15px] text-paper/80">
            Total cost <span className="tnum text-paper">{usd(r.total)}</span>{" "}
            <span className="text-paper/50">(ad spend + {usd(fee)} management)</span>
          </p>
          <p className="mt-1 text-[15px] text-paper/80">
            Every $1 in returns about{" "}
            <span className="tnum font-head text-xl font-bold text-paper">${r.multiple.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Seasonal demand chart: single series, one hue                             */
/* ------------------------------------------------------------------------- */

const SEASON = [
  { m: "Jan", v: 46, play: "Heating repair on Google Search + LSA" },
  { m: "Feb", v: 34, play: "Maintenance plan drive on Meta" },
  { m: "Mar", v: 38, play: "Spring AC tune-up offers on Meta" },
  { m: "Apr", v: 52, play: "Tune-ups + replacement financing" },
  { m: "May", v: 74, play: "Scale Google budgets before the rush" },
  { m: "Jun", v: 92, play: "Emergency AC repair: LSA + Search at full budget" },
  { m: "Jul", v: 100, play: "Peak. Every call answered, overflow to booking links" },
  { m: "Aug", v: 96, play: "Peak + replacement push for dying systems" },
  { m: "Sep", v: 70, play: "Replacement financing on Meta + retargeting" },
  { m: "Oct", v: 44, play: "Furnace safety check offers" },
  { m: "Nov", v: 40, play: "Heating tune-ups, membership renewals" },
  { m: "Dec", v: 50, play: "Cold-snap heating repair on Search + LSA" },
];

export function SeasonChart() {
  const [active, setActive] = useState<number | null>(null);
  const current = new Date().getMonth();
  const shown = active ?? current;

  return (
    <figure>
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-7 flex flex-col justify-between" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-t border-dashed border-line" />
          ))}
        </div>
        <div className="relative flex h-56 items-end gap-[2px] sm:gap-2" role="img" aria-label="Relative HVAC search demand in Texas by month, peaking in July">
          {SEASON.map((d, i) => (
            <button
              key={d.m}
              type="button"
              className="group flex h-full flex-1 flex-col items-center justify-end outline-none"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              aria-label={`${d.m}: demand ${d.v} of 100. ${d.play}`}
            >
              <span
                className={`w-full max-w-[44px] rounded-t-[4px] transition-colors ${
                  i === shown ? "bg-flame" : "bg-ink/80 group-hover:bg-ink"
                }`}
                style={{ height: `calc(${d.v}% - 28px)` }}
              />
              <span className={`mt-2 h-5 text-[12px] ${i === shown ? "font-semibold text-ink" : "text-ink-3"}`}>{d.m}</span>
            </button>
          ))}
        </div>
      </div>
      <figcaption className="mt-5 flex min-h-[56px] items-start gap-4 rounded-md border border-line bg-white px-4 py-3">
        <span className="font-head text-lg font-bold text-ink">{SEASON[shown].m}</span>
        <span className="text-[15px] text-ink-2">
          {SEASON[shown].play}
          {active === null && <span className="text-ink-3"> (this month, hover a bar for others)</span>}
        </span>
      </figcaption>
      <div className="sr-only">
      <table>
        <caption>Texas HVAC demand index and campaign focus by month</caption>
        <thead>
          <tr><th>Month</th><th>Demand (0–100)</th><th>What we run</th></tr>
        </thead>
        <tbody>
          {SEASON.map((d) => (
            <tr key={d.m}><td>{d.m}</td><td>{d.v}</td><td>{d.play}</td></tr>
          ))}
        </tbody>
      </table>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* ------------------------------------------------------------------------- */

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f, i) => (
        <div key={f.q}>
          <button
            type="button"
            className="flex w-full items-start justify-between gap-6 py-5 text-left"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-head text-[18px] md:text-xl font-semibold tracking-tight text-ink">{f.q}</span>
            <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-ink-3 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="max-w-3xl pb-6 text-[16px] leading-relaxed text-ink-2">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* Inline city check: hands the city to the main form and scrolls to it       */
/* ------------------------------------------------------------------------- */

export function CityCheck({ target = "check" }: { target?: string }) {
  const [city, setCity] = useState("");
  const go = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("leadform:city", { detail: city }));
    const el = document.getElementById(target);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => el?.querySelector<HTMLButtonElement>("fieldset button")?.focus({ preventScroll: true }), 600);
  };
  return (
    <form onSubmit={go} className="flex w-full max-w-xl flex-col gap-2 sm:flex-row">
      <label htmlFor="city-check" className="sr-only">
        Your city
      </label>
      <input
        id="city-check"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Your city, e.g. Katy or Round Rock"
        className="h-14 flex-1 rounded-md border-0 bg-white px-4 text-[17px] text-ink shadow-sm outline-none placeholder:text-ink-3 focus:ring-4 focus:ring-ink/20"
        autoComplete="address-level2"
      />
      <button type="submit" className="h-14 rounded-md bg-ink px-6 text-[16px] font-semibold text-paper transition-colors hover:bg-black">
        Check my city →
      </button>
    </form>
  );
}
