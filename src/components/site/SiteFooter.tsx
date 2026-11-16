import Link from "next/link";
import { SERVICE_GROUPS, SITE } from "@/lib/site";
import { Logo, MobileActionBar } from "./SiteHeader";

export function SiteFooter() {
  const services = SERVICE_GROUPS.flatMap((g) => g.items);
  return (
    <footer className="bg-ink text-paper/70 font-sans">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="paper" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              A small Dallas team that only does marketing for HVAC contractors in Texas. Google Ads, Meta Ads, SEO,
              and the follow-up that turns leads into booked jobs.
            </p>
            <div className="mt-6 space-y-1.5 text-[15px]">
              <a href={SITE.phoneHref} className="tnum block font-semibold text-paper hover:text-flame">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="block hover:text-paper">
                {SITE.email}
              </a>
              <p>{SITE.hours}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-paper/45">Services</p>
            <ul className="space-y-2.5 text-[15px]">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-paper">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-paper/45">Company</p>
            <ul className="space-y-2.5 text-[15px]">
              {[
                ["About", "/about"],
                ["How we work", "/process"],
                ["Results", "/#results"],
                ["Pricing", "/#pricing"],
                ["FAQ", "/faq"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-paper">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-paper/45">Cities we serve</p>
            <p className="text-[15px] leading-relaxed">
              Dallas · Fort Worth · Houston · San Antonio · Austin · El Paso · Plano · Frisco · Arlington · The
              Woodlands · Round Rock · McKinney
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-flame px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-flame-dark"
            >
              Is my city open?
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-[13px] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} HVAC Digitals. Dallas, Texas.</p>
          <p>You own your ad accounts, your website and your data. Always.</p>
        </div>
      </div>
      <MobileActionBar />
    </footer>
  );
}
