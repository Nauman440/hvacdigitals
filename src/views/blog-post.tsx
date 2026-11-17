import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";
import { BLOG_POSTS, type BlogPost, type BlogSection } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/seo";

function Block({ b }: { b: BlogSection }) {
  switch (b.type) {
    case "h2":
      return <h2 className="mt-12 font-head text-[28px] md:text-[32px] font-extrabold leading-tight tracking-tight text-ink">{b.text}</h2>;
    case "h3":
      return <h3 className="mt-8 font-head text-[22px] font-bold tracking-tight text-ink">{b.text}</h3>;
    case "p":
      return <p className="mt-5 text-[18px] leading-[1.75] text-ink-2">{b.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-[18px] leading-[1.7] text-ink-2 marker:text-flame">
          {b.items?.map((i) => <li key={i}>{i}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 list-decimal space-y-2 pl-6 text-[18px] leading-[1.7] text-ink-2 marker:font-semibold marker:text-flame">
          {b.items?.map((i) => <li key={i}>{i}</li>)}
        </ol>
      );
    case "callout":
      return <aside className="mt-8 rounded-lg border-l-4 border-flame bg-white p-6 text-[17px] leading-relaxed text-ink">{b.text}</aside>;
    case "stat-row":
      return (
        <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {b.stats?.map((s) => (
            <div key={s.label} className="bg-white p-5">
              <dd className="tnum font-head text-[34px] font-extrabold leading-none text-ink">{s.val}</dd>
              <dt className="mt-2 text-[14px] leading-snug text-ink-3">{s.label}</dt>
            </div>
          ))}
        </dl>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ post }: { post: BlogPost }) {
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.publishDate).toISOString(),
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="pt-[100px] md:pt-[140px]">
        <article className="mx-auto max-w-[760px] px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[14px] text-ink-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-ink">Blog</Link>
          </nav>
          <span className="mt-8 inline-block rounded bg-flame px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.06em] text-white">{post.category}</span>
          <h1 className="mt-5 font-head text-[38px] leading-[1.06] md:text-[52px] font-extrabold tracking-[-0.035em]">{post.title}</h1>
          <p className="mt-5 text-[19px] leading-relaxed text-ink-2">{post.excerpt}</p>
          <div className="mt-8 flex items-center gap-3 border-y border-line py-4">
            <Image src="/images/founder-real.jpeg" alt="" width={80} height={80} className="h-10 w-10 rounded-full object-cover object-top" />
            <p className="text-[14px]">
              <span className="block font-semibold text-ink">{post.author}</span>
              <span className="text-ink-3">{post.publishDate} · {post.readTime}</span>
            </p>
          </div>
          <div className="pb-6">
            {post.content.map((b, i) => <Block key={i} b={b} />)}
          </div>
        </article>

        <section className="relative mt-16 overflow-hidden bg-ink py-20 md:py-24">
          <div className="vent-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:px-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-head text-[36px] md:text-[50px] font-extrabold leading-[1.04] tracking-[-0.035em] text-paper">
                Want us to check this for <span className="text-flame">your</span> business?
              </h2>
              <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/70">
                Free recorded audit of your ads, Google profile and website within 48 hours. Yours to keep.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <LeadForm source={`blog-${post.slug}`} />
            </div>
          </div>
        </section>

        {more.length > 0 && (
          <section className="mx-auto max-w-[1240px] px-4 py-20 md:px-6">
            <h2 className="font-head text-[28px] font-extrabold tracking-tight">Keep reading</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {more.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl border border-line bg-white p-7 hover:shadow-[0_24px_48px_-24px_rgba(20,26,33,0.35)]">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-3">{p.category}</span>
                  <h3 className="mt-2 font-head text-[22px] font-extrabold leading-tight tracking-tight group-hover:text-flame">{p.title}</h3>
                  <p className="mt-3 text-[14px] text-ink-3">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
