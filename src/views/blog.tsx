import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BLOG_POSTS } from "@/data/blog-posts";

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <SiteHeader />
      <main className="pt-[100px] md:pt-[140px] pb-20 md:pb-28">
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-3">
            <span className="h-px w-8 bg-flame" aria-hidden="true" />
            Blog
          </p>
          <h1 className="mt-6 max-w-3xl font-head text-[44px] leading-[1.02] md:text-[64px] font-extrabold tracking-[-0.04em]">
            HVAC marketing, explained without the jargon.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-ink-2">
            Practical guides on Google Ads, Local Services Ads, the Map Pack and websites, written for Texas HVAC owners.
          </p>

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-14 grid overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(20,26,33,0.35)] lg:grid-cols-2"
            >
              <div className="relative flex min-h-[220px] items-end bg-ink p-8">
                <div className="vent-lines absolute inset-0" aria-hidden="true" />
                <span className="relative rounded bg-flame px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.06em] text-white">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-[14px] text-ink-3">{featured.publishDate} · {featured.readTime}</p>
                <h2 className="mt-2 font-head text-[28px] md:text-[34px] font-extrabold leading-[1.1] tracking-tight group-hover:text-flame">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-ink">
                  Read the guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-xl border border-line bg-white p-7 transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(20,26,33,0.35)]"
              >
                <span className="w-fit rounded bg-paper-2 px-2 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-2">{p.category}</span>
                <h2 className="mt-4 font-head text-[24px] font-extrabold leading-tight tracking-tight group-hover:text-flame">{p.title}</h2>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed text-ink-2">{p.excerpt}</p>
                <p className="mt-6 text-[14px] text-ink-3">{p.publishDate} · {p.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
