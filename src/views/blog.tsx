"use client";
import React, { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Clock, ArrowRight, BookOpen, Flame, Tag } from "lucide-react";
import { Navbar, Footer } from "@/views/home";
import { BLOG_POSTS } from "@/data/blog-posts";

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => (
  <section className="relative pt-36 pb-16 overflow-hidden bg-background">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/12 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl text-center">
      <nav className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-10">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white font-bold">Blog</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
      >
        <BookOpen className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          HVAC Marketing Intelligence
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] tracking-tight text-white mb-6"
      >
        Strategies That<br />
        Actually Win<br />
        <span className="text-primary">HVAC Clients.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto"
      >
        Field-tested tactics from managing digital marketing for Texas HVAC companies. No generic advice — only what we know works in the trade.
      </motion.p>
    </div>
  </section>
);

// =============================================================================
// FEATURED POST (first article, large card)
// =============================================================================
const FeaturedPost = ({ post }: { post: (typeof BLOG_POSTS)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group"
  >
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all hover:shadow-[0_20px_60px_-15px_rgba(255,107,43,0.2)]">
        {/* Cover visual */}
        <div className={`bg-gradient-to-br ${post.coverGradient} relative overflow-hidden min-h-[280px] lg:min-h-[360px] flex items-end p-8`}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider mb-4">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <p className="text-white/80 text-sm font-medium">{post.publishDate}</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-zinc-900/60 p-8 md:p-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[11px] font-bold uppercase tracking-wider mb-5 w-fit">
            <Flame className="w-3 h-3" />
            Featured Article
          </div>

          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight mb-4 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide">
              Read Article
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

// =============================================================================
// POST CARD
// =============================================================================
const PostCard = ({ post, index }: { post: (typeof BLOG_POSTS)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="group"
  >
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div className="h-full rounded-2xl border border-white/10 overflow-hidden hover:border-primary/40 transition-all hover:shadow-[0_15px_40px_-10px_rgba(255,107,43,0.15)] bg-white/[0.02] flex flex-col">
        {/* Cover */}
        <div className={`bg-gradient-to-br ${post.coverGradient} relative overflow-hidden h-48 flex items-end p-5`}>
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider mb-3">{post.publishDate}</p>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-3">
            {post.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
            <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wide">
              Read More
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

// =============================================================================
// CTA STRIP
// =============================================================================
const CtaStrip = () => (
  <section className="bg-white border-t border-zinc-100 py-20">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-zinc-900 mb-4">
          Want These Strategies Working<br />
          <span className="text-primary">In Your Market?</span>
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Every article on this blog is drawn from active campaigns we manage for Texas HVAC companies. Get a free audit to see exactly which of these apply to your business.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-md bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.5)]"
        >
          Get My Free Audit
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function BlogPage() {
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    const content =
      "Field-tested HVAC marketing strategies from Texas's #1 HVAC digital agency. Google Maps, paid ads, website speed, lead automation, and more.";
    if (metaDesc) {
      metaDesc.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Marketing Blog | Tips, SEO & Growth for Texas Contractors | HVAC Digitals"
        description="Expert HVAC marketing insights — local SEO, Google Ads, AEO, and website strategy for Texas HVAC contractors. Updated regularly."
        canonical="https://hvacdigitals.com/blog"
      />
      <Navbar />
      <main>
        <PageHeader />

        <section className="bg-background pb-24">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="mb-10">
              <FeaturedPost post={featured} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>

        <CtaStrip />
      </main>
      <Footer />
    </div>
  );
}
