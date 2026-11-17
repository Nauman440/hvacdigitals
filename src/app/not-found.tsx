import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SITE } from "@/lib/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <SiteHeader />
      <main className="pt-[140px] pb-28 md:pt-[180px]">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <p className="tnum font-head text-[120px] md:text-[160px] font-extrabold leading-none tracking-[-0.06em] text-flame">404</p>
          <h1 className="mt-4 font-head text-[36px] md:text-[48px] font-extrabold tracking-[-0.03em]">This page blew a fuse.</h1>
          <p className="mt-4 text-[18px] text-ink-2">It doesn&apos;t exist or it moved. Let&apos;s get you back to booking more HVAC jobs.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-flame px-7 text-[17px] font-semibold text-white hover:bg-flame-dark">
              Back to home <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-ink/20 px-7 text-[17px] font-semibold text-ink hover:border-ink">
              <Phone className="h-4 w-4" /> <span className="tnum">{SITE.phone}</span>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
