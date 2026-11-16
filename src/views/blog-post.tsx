"use client";
import React, { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Clock, ArrowRight, ArrowLeft, Tag, CheckCircle2, Flame } from "lucide-react";
import { Navbar, Footer } from "@/views/home";
import { getPost, BLOG_POSTS, type BlogSection } from "@/data/blog-posts";

// =============================================================================
// CONTENT RENDERER
// =============================================================================
const renderSection = (section: BlogSection, i: number) => {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={i} className="font-display text-3xl md:text-4xl uppercase tracking-tight text-zinc-900 mt-12 mb-5 leading-tight">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-bold text-xl text-zinc-900 mt-8 mb-3 leading-snug">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-zinc-600 leading-[1.85] text-[17px] mb-5">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-3 mb-6 mt-2">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-zinc-600 text-[16px] leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-4 mb-6 mt-2">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-4 text-zinc-600 text-[16px] leading-relaxed">
              <span className="w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                {j + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={i} className="my-8 border-l-4 border-primary bg-orange-50 rounded-r-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary">Key Insight</span>
          </div>
          <p className="text-zinc-700 leading-relaxed font-medium">{section.text}</p>
        </div>
      );
    case "stat-row":
      return (
        <div key={i} className="my-8 grid grid-cols-3 gap-4">
          {section.stats?.map((s, j) => (
            <div key={j} className="text-center bg-zinc-900 rounded-xl p-5">
              <div className="font-display text-4xl text-primary leading-none mb-2">{s.val}</div>
              <p className="text-xs text-zinc-400 uppercase tracking-wider font-bold leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

// =============================================================================
// NOT FOUND
// =============================================================================
const PostNotFound = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <p className="font-display text-8xl text-primary mb-4">404</p>
      <p className="text-white text-2xl font-bold mb-6">Article not found</p>
      <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold uppercase tracking-wide text-sm">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>
    </div>
  </div>
);

// =============================================================================
// RELATED POSTS
// =============================================================================
const RelatedPosts = ({ currentSlug }: { currentSlug: string }) => {
  const related = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (!related.length) return null;

  return (
    <section className="border-t border-zinc-100 pt-16 mt-16">
      <h3 className="font-display text-3xl uppercase tracking-tight text-zinc-900 mb-8">More Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {related.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="border border-zinc-200 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
              <div className={`bg-gradient-to-br ${post.coverGradient} h-32 relative`}>
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider mb-2">{post.publishDate}</p>
                <h4 className="font-display text-lg uppercase tracking-tight text-zinc-900 leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wide">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug ?? "");

  useEffect(() => {
    if (!post) return;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", post.excerpt);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = post.excerpt;
      document.head.appendChild(meta);
    }

    const pageUrl = `https://hvacdigitals.com/blog/${post.slug}`;
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.ogImage,
        "datePublished": post.publishDate,
        "author": {
          "@type": "Person",
          "name": post.author,
          "jobTitle": post.authorRole,
          "url": "https://www.linkedin.com/in/nauman-ai-automation-expert/",
        },
        "publisher": {
          "@type": "Organization",
          "name": "HVAC Digitals",
          "url": "https://hvacdigitals.com",
          "logo": { "@type": "ImageObject", "url": "https://hvacdigitals.com/favicon.svg" },
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
        "url": pageUrl,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hvacdigitals.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://hvacdigitals.com/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": pageUrl },
        ],
      },
    ];

    const existing = document.querySelector('script[data-blog-post-schema]');
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-post-schema", "1");
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.querySelector('script[data-blog-post-schema]')?.remove();
    };
  }, [post]);

  if (!post) return <PostNotFound />;

  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title={`${post.title} | HVAC Digitals Blog`}
        description={post.excerpt}
        canonical={`https://hvacdigitals.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.ogImage}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <div className={`bg-gradient-to-br ${post.coverGradient} relative overflow-hidden pt-32 pb-20`}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/80 truncate max-w-[200px]">{post.category}</span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider mb-6">
              <Tag className="w-3 h-3" />
              {post.category}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.95] mb-6"
            >
              {post.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xs">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">{post.author}</p>
                  <p className="text-white/60 text-xs">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <span>{post.publishDate}</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">
            {/* Main content */}
            <article>
              <p className="text-xl text-zinc-500 leading-relaxed border-l-4 border-primary pl-5 mb-10 font-medium">
                {post.excerpt}
              </p>

              {post.content.map((section, i) => renderSection(section, i))}

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-zinc-100">
                <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide hover:underline">
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </Link>
              </div>

              <RelatedPosts currentSlug={post.slug} />
            </article>

            {/* Sticky sidebar CTA */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="bg-zinc-900 rounded-2xl p-6 border border-white/10">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                    Free for Texas HVAC
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-white leading-tight mb-3">
                    Apply These Tactics to Your Business
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    Get a free written audit showing exactly which strategies from this article apply to your market and how to implement them.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Delivered within 48 hours", "No sales call required", "Texas HVAC only"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-zinc-300 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs transition-all hover:shadow-[0_10px_30px_-5px_rgba(255,107,43,0.5)]"
                  >
                    Get My Free Audit
                  </Link>
                </div>

                {/* Other articles */}
                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold mb-4">Other Articles</p>
                  {BLOG_POSTS.filter((p) => p.slug !== post.slug).map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex items-start gap-3 mb-4 last:mb-0">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.coverGradient} flex-shrink-0`} />
                      <div>
                        <p className="text-zinc-200 text-xs font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">{p.title}</p>
                        <p className="text-zinc-500 text-[11px] mt-1">{p.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
