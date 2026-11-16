"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { SERVICE_GROUPS, SITE } from "@/lib/site";

export function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const text = tone === "ink" ? "text-ink" : "text-paper";
  return (
    <span className="flex items-center gap-2.5">
      {/* Mark: a condenser grille */}
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect width="30" height="30" rx="5" fill={tone === "ink" ? "#141A21" : "#F5F1EA"} />
        <rect x="7" y="8" width="16" height="2.6" rx="1.3" fill="#E8590C" />
        <rect x="7" y="13.7" width="16" height="2.6" rx="1.3" fill="#E8590C" />
        <rect x="7" y="19.4" width="10" height="2.6" rx="1.3" fill="#E8590C" />
      </svg>
      <span className={`font-head text-[19px] font-extrabold tracking-[-0.02em] ${text}`}>
        HVAC Digitals
      </span>
    </span>
  );
}

const LINKS = [
  { label: "Results", href: "/#results" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobileSvc, setMobileSvc] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
    setMobileSvc(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const enter = () => {
    if (timer.current) clearTimeout(timer.current);
    setSvcOpen(true);
  };
  const leave = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setSvcOpen(false), 150);
  };

  const linkCls = (href: string) =>
    `text-[15px] transition-colors hover:text-flame ${
      pathname === href ? "text-ink font-semibold" : "text-ink-2"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-sans">
      {/* Utility strip */}
      <div className="hidden md:block bg-ink text-paper/80 text-[13px]">
        <div className="mx-auto flex h-9 max-w-[1240px] items-center justify-between px-6">
          <p>
            Texas HVAC contractors only. <span className="text-paper">One company per city</span>, so we never
            bid against our own clients.
          </p>
          <p className="tnum">{SITE.hours}</p>
        </div>
      </div>

      <div className="border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-6 px-4 md:px-6">
          <Link href="/" aria-label="HVAC Digitals home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
            <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
              <button
                type="button"
                className={`flex items-center gap-1 ${linkCls("/services")} ${pathname.startsWith("/services") ? "text-ink font-semibold" : ""}`}
                aria-expanded={svcOpen}
                aria-haspopup="true"
                onClick={() => setSvcOpen((v) => !v)}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
              </button>
              {svcOpen && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
                  <div className="w-[760px] rounded-lg border border-line bg-paper shadow-[0_24px_48px_-24px_rgba(20,26,33,0.35)]">
                    <div className="grid grid-cols-3 gap-0 divide-x divide-line">
                      {SERVICE_GROUPS.map((g) => (
                        <div key={g.title} className="p-5">
                          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-3">
                            {g.title}
                          </p>
                          <ul className="space-y-1">
                            {g.items.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  className={`block rounded-md px-2 py-2 -mx-2 transition-colors hover:bg-paper-2 ${
                                    pathname === s.href ? "bg-paper-2" : ""
                                  }`}
                                >
                                  <span className="block text-[15px] font-semibold text-ink">{s.label}</span>
                                  <span className="block text-[13px] leading-snug text-ink-3">{s.blurb}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-line bg-paper-2/60 px-5 py-3 text-[14px]">
                      <span className="text-ink-2">Not sure where to start? We&apos;ll tell you, for free.</span>
                      <Link href="/contact" className="font-semibold text-flame hover:underline">
                        Get a free audit →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a href={SITE.phoneHref} className="tnum text-[15px] font-semibold text-ink hover:text-flame">
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-md bg-flame px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-flame-dark"
            >
              Get a free audit
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden -mr-2 p-2 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-paper px-4 pb-28 pt-2">
          <button
            type="button"
            className="flex w-full items-center justify-between border-b border-line py-4 text-lg font-semibold text-ink"
            onClick={() => setMobileSvc((v) => !v)}
            aria-expanded={mobileSvc}
          >
            Services <ChevronDown className={`h-5 w-5 transition-transform ${mobileSvc ? "rotate-180" : ""}`} />
          </button>
          {mobileSvc && (
            <div className="border-b border-line py-2">
              {SERVICE_GROUPS.flatMap((g) => g.items).map((s) => (
                <Link key={s.href} href={s.href} className="block py-2.5 pl-3 text-[16px] text-ink-2">
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          {[...LINKS, { label: "Process", href: "/process" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((l) => (
            <Link key={l.href} href={l.href} className="block border-b border-line py-4 text-lg font-semibold text-ink">
              {l.label}
            </Link>
          ))}
          <p className="mt-6 text-sm text-ink-3">{SITE.hours}</p>
        </div>
      )}
    </header>
  );
}

/** Thumb-reachable call/audit bar on phones. Contractors call; make it one tap. */
export function MobileActionBar() {
  return (
    <>
      <div className="h-[68px] lg:hidden" aria-hidden="true" />
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-2.5 backdrop-blur">
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 rounded-md border border-ink/15 bg-white py-3 text-[15px] font-semibold text-ink"
        >
          <Phone className="h-4 w-4" /> Call us
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center rounded-md bg-flame py-3 text-[15px] font-semibold text-white"
        >
          Free audit
        </Link>
      </div>
    </>
  );
}
