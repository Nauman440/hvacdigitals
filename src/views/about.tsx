"use client";
import React from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles, MapPin, Star, Award, Shield, Target, TrendingUp, Users, Zap, CheckCircle2, Quote, Heart, Eye, HandshakeIcon, Flame, Crosshair, Lock, Brain, Rocket, Phone, Mail, Calendar, Building2, Trophy, BadgeCheck, BarChart3 } from "lucide-react";
import { Linkedin, Instagram } from "@/components/brand-icons";
import { Navbar, Footer } from "@/views/home";
const founderImg = "/images/founder-real.jpeg";
const hvacProImg = "/images/hvac-pro.png";

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/8 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8" data-testid="breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-bold">About Us</span>
        </nav>

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Team Behind Texas's #1 HVAC Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-[88px] uppercase leading-[0.95] tracking-tight text-white mb-6"
          >
            Built by HVAC Pros.<br />
            <span className="text-primary">For HVAC Pros.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-10"
          >
            We're not another generalist agency that "also does HVAC." We're a Dallas-headquartered team obsessed with one thing — making Texas HVAC contractors the loudest, fastest, and most-found name in their service area.
          </motion.p>

          {/* Inline Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden max-w-3xl"
          >
            {[
              { value: "5+", label: "Years in HVAC" },
              { value: "200+", label: "TX Contractors" },
              { value: "$14M+", label: "Revenue Tracked" },
              { value: "94%", label: "Client Retention" },
            ].map((s) => (
              <div key={s.label} className="bg-background p-5 text-center">
                <div className="font-display text-3xl md:text-4xl text-primary leading-none mb-2">
                  {s.value}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// FOUNDER STORY
// =============================================================================
const FounderStory = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-orange-100/60 blur-[160px]" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[160px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/10" />

              {/* Headshot card */}
              <div className="relative rounded-2xl overflow-hidden bg-white aspect-[3/4] shadow-2xl">
                {/* Decorative top color bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-orange-500 to-amber-400 z-10" />

                <img
                  src={founderImg}
                  alt="Muhammad Nauman, Founder of HVAC Digitals"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-founder"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent" />

                {/* Founder badge */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-white rounded-xl p-4 shadow-xl border border-zinc-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        Founder & CEO
                      </div>
                    </div>
                    <div className="font-display text-2xl text-zinc-900 leading-tight">
                      Muhammad Nauman
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <MapPin className="w-3 h-3 text-primary" />
                      <div className="text-sm text-zinc-500">
                        Dallas, TX · HVAC Marketing Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-5 -right-5 bg-zinc-900 text-white rounded-xl p-4 shadow-2xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                      Honored
                    </div>
                    <div className="text-sm font-bold">TX Top 40 Under 40</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <Heart className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.02] tracking-tight text-zinc-900 mb-8">
              Why this agency<br />
              even <span className="text-primary">exists.</span>
            </h2>

            <div className="space-y-5 text-zinc-700 text-lg leading-relaxed">
              <p>
                I grew up watching my dad sweat through 95° Texas summers in attics across Hillsborough County, fixing AC units for families who'd just lost theirs. He was the best technician I knew. He was also dead broke half the year.
              </p>
              <p>
                The reason wasn't the work. It was the <span className="font-bold text-zinc-900">marketing</span>. A guy three towns over with half the skill but a slick website and a fat Google Ads budget was eating his lunch — every single summer.
              </p>
              <p>
                In 2021, I started <span className="text-primary font-bold">HVAC Digitals</span> with one mission: arm the real HVAC pros — the ones who actually pick up the phone, show up on time, and fix the unit right — with a marketing engine that beats the slick-talkers at their own game.
              </p>
              <p>
                We don't take generalist clients. We don't work for chains. We work for Texas HVAC contractors. Period.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-zinc-200 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-3xl text-zinc-900 italic" style={{ fontFamily: '"Brush Script MT", cursive' }}>
                  Muhammad Nauman
                </div>
                <div className="text-sm text-zinc-500 mt-1">Founder & CEO · HVAC Digitals</div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/nauman-ai-automation-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-zinc-900 text-zinc-900 font-bold text-sm uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all"
                  data-testid="link-founder-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/hvacdigitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-zinc-900 text-zinc-900 font-bold text-sm uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all"
                  data-testid="link-founder-instagram"
                >
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// MISSION / VISION / PROMISE
// =============================================================================
const MissionVision = () => {
  const cards = [
    {
      icon: Target,
      tag: "Mission",
      title: "Make Texas HVAC contractors unmissable.",
      body: "Whether a homeowner Googles 'AC repair Dallas' at 2am or asks ChatGPT 'who's the best installer in Cape Coral' — our clients show up first. Always.",
    },
    {
      icon: Eye,
      tag: "Vision",
      title: "Rewrite who wins in the AEO Era.",
      body: "By 2027, 60% of local search will run through AI. The HVAC pros who own the answer engines will own the next decade. We're building those engines.",
    },
    {
      icon: HandshakeIcon,
      tag: "Promise",
      title: "Skin in the game on every account.",
      body: "If we don't put more money in your pocket than you pay us by month 4, we work for free until we do. Written into every contract.",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[180px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Flame className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              What Drives Us
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Mission. Vision.<br /><span className="text-primary">Promise.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Three simple commitments that shape every decision we make for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-primary/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="absolute top-0 right-0 font-display text-[120px] leading-none text-white/5 select-none px-6">
                0{i + 1}
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <c.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
                  {c.tag}
                </div>
                <h3 className="font-display text-2xl text-white uppercase leading-tight mb-4">
                  {c.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// WHY HVAC ONLY
// =============================================================================
const WhyHvacOnly = () => {
  const points = [
    "We've sat in 200+ HVAC trucks. We know what a 4-ton install actually costs to deliver.",
    "We speak SEER, AFUE, MERV, and refrigerant law without Googling.",
    "Our writers know the difference between a tune-up and a maintenance plan.",
    "We've watched homeowners' search behavior shift through 4 Texas summers.",
    "We benchmark against ServiceTitan, Housecall Pro, and Jobber data — not generic agency reports.",
    "We get the seasonality. May to September isn't 'optional' — it's the whole year.",
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[160px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/8 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <Crosshair className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Why We Said No to Everyone Else
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-6">
              We could've been a generalist agency.<br />
              <span className="text-primary">We chose HVAC.</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              In 2020 we turned down a $40k/mo dental client. In 2022 we walked away from a national plumbing chain. We don't do "also." We do HVAC, in Texas, exclusively. Here's what that focus actually means in practice:
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.5)]"
              data-testid="link-about-cta-strategy"
            >
              Talk Strategy with Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 aspect-[4/5] shadow-2xl border border-white/10">
              <img
                src={hvacProImg}
                alt="HVAC Pro at work in Texas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Big quote */}
              <div className="absolute bottom-8 left-8 right-8">
                <Quote className="w-10 h-10 text-primary mb-3" />
                <p className="font-display text-2xl md:text-3xl text-white uppercase leading-tight">
                  "If your agency<br />
                  works for everyone,<br />
                  they don't work<br />
                  <span className="text-primary">for you."</span>
                </p>
                <div className="mt-4 text-sm text-zinc-300">
                  — Muhammad Nauman, Founder
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -left-6 bg-primary text-white rounded-xl p-5 shadow-2xl hidden md:block">
              <div className="text-4xl font-display leading-none">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1">
                HVAC Focus
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-zinc-900 rounded-xl p-5 shadow-2xl hidden md:block">
              <div className="text-4xl font-display leading-none text-primary">$0</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 text-zinc-600">
                Non-HVAC Revenue
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// ABOUT AUDIT FORM (wired to API)
// =============================================================================
const AboutAuditForm = () => {
  const [fields, setFields] = React.useState({ name: "", email: "", company: "", city: "" });
  const [status, setStatus] = React.useState<"idle" | "submitting" | "done">("idle");

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name.trim() || !fields.email.trim()) return;
    setStatus("submitting");
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        company: fields.company,
        service: "Free Audit Request",
        message: `Company: ${fields.company}\nCity: ${fields.city}`,
      }),
    });
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="text-center py-4">
        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-6 h-6 text-primary" />
        </div>
        <p className="text-white font-bold text-sm">Audit request received!</p>
        <p className="text-zinc-400 text-xs mt-1">We will reach out within 1 business hour.</p>
      </div>
    );
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit} data-testid="form-audit">
      <input
        type="text"
        required
        value={fields.name}
        onChange={set("name")}
        placeholder="Your full name"
        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors text-sm"
        data-testid="input-audit-name"
      />
      <input
        type="email"
        required
        value={fields.email}
        onChange={set("email")}
        placeholder="Work email address"
        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors text-sm"
        data-testid="input-audit-email"
      />
      <input
        type="text"
        value={fields.company}
        onChange={set("company")}
        placeholder="Company name (e.g. Cool Air Dallas)"
        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors text-sm"
        data-testid="input-audit-company"
      />
      <input
        type="text"
        value={fields.city}
        onChange={set("city")}
        placeholder="Primary service city (e.g. Dallas, Houston)"
        className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors text-sm"
        data-testid="input-audit-city"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_10px_30px_-5px_rgba(255,107,43,0.6)] disabled:opacity-60"
        data-testid="button-audit-submit"
      >
        {status === "submitting" ? "Sending..." : "Send Me My Free Audit Report"}
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

// =============================================================================
// FREE AUDIT CTA
// =============================================================================
const FreeAuditCTA = () => {
  const perks = [
    { icon: Target, title: "Competitor Gap Analysis", body: "We map every keyword your top 3 local rivals rank for — and show you exactly where to overtake them within 90 days." },
    { icon: TrendingUp, title: "Local SEO Health Score", body: "Your Google Business Profile, citations, map pack position, and review velocity — graded and benchmarked against TX market leaders." },
    { icon: Zap, title: "AEO Readiness Report", body: "See exactly how many times your business (or a competitor's) gets cited by ChatGPT, Gemini, and Perplexity for HVAC queries in your zip codes." },
    { icon: BarChart3, title: "Paid Media Waste Audit", body: "Running Google Ads? We'll analyze your spend and tell you how much you're losing to irrelevant clicks — no strings attached." },
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Completely Free · No Commitment
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
              Get your free<br />
              <span className="text-primary">HVAC marketing</span><br />
              audit report.
            </h2>

            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              In 48 hours, you'll have a full picture of where your Texas HVAC business stands online — and a prioritized roadmap to fix it. No agency speak. No sales pitch. Just the truth.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Delivered within 48 hours",
                "Tailored to your specific service area",
                "Covers SEO, Paid Ads, AEO & Reputation",
                "Honest competitive benchmarking",
                "Zero pressure to become a client",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-zinc-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Form */}
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-2xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Claim Your Free Audit
              </div>
              <AboutAuditForm />
              <p className="text-[11px] text-zinc-500 text-center mt-3">
                Your info is never sold or shared. Texas HVAC contractors only.
              </p>
            </div>
          </motion.div>

          {/* Right: What's inside */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-3">
                What's Inside Your Report
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-zinc-900 uppercase leading-tight">
                4 Sections. Zero Fluff.<br />
                <span className="text-primary">100% Actionable.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="group bg-white border border-zinc-200 rounded-xl p-6 hover:border-primary hover:shadow-[0_15px_40px_-10px_rgba(255,107,43,0.2)] hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-amber-100 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-amber-500 transition-all">
                    <p.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-zinc-900 mb-2 leading-tight">{p.title}</h4>
                  <p className="text-zinc-500 text-[14px] leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Social proof strip */}
            <div className="mt-8 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left">
                <div className="font-display text-5xl text-primary leading-none">340+</div>
                <div className="text-sm text-zinc-400 mt-1 font-bold uppercase tracking-wider">Audits Delivered</div>
              </div>
              <div className="w-px h-14 bg-white/10 hidden sm:block" />
              <div className="text-center sm:text-left">
                <div className="font-display text-5xl text-primary leading-none">92%</div>
                <div className="text-sm text-zinc-400 mt-1 font-bold uppercase tracking-wider">Became Clients</div>
              </div>
              <div className="w-px h-14 bg-white/10 hidden sm:block" />
              <div className="flex-1 sm:pl-2">
                <p className="text-zinc-300 text-sm italic leading-relaxed">
                  "The audit alone was worth more than what I paid my last agency for a full year."
                </p>
                <div className="text-primary text-xs font-bold mt-2 uppercase tracking-wider">— David K., Houston HVAC</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// FLORIDA COVERAGE
// =============================================================================
const TexasCoverage = () => {
  const cities = [
    { name: "Dallas", x: 28, y: 52 },
    { name: "St. Pete", x: 24, y: 56 },
    { name: "San Antonio", x: 50, y: 48 },
    { name: "Austin", x: 60, y: 22 },
    { name: "Houston", x: 76, y: 86 },
    { name: "Fort Worth", x: 78, y: 80 },
    { name: "Cape Coral", x: 38, y: 76 },
    { name: "El Paso", x: 32, y: 64 },
    { name: "Corpus Christi", x: 42, y: 84 },
    { name: "Amarillo", x: 24, y: 16 },
    { name: "Lubbock", x: 46, y: 30 },
    { name: "West Palm", x: 80, y: 70 },
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/5 blur-[200px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Stats / copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Statewide Coverage
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-6">
              From Pensacola<br />
              to <span className="text-primary">Key West.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We serve HVAC contractors in all <span className="text-white font-bold">67 Texas counties</span>. Our deepest concentration is along the I-4 and I-95 corridors, where the heat — and the search demand — never quits.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "67", label: "TX Counties Served" },
                { num: "12", label: "Major Metros" },
                { num: "200+", label: "Active Contractors" },
                { num: "1", label: "Per Service Area" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="font-display text-4xl text-primary leading-none mb-2">
                    {s.num}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Texas map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[5/4] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-8 overflow-hidden">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Texas silhouette via SVG */}
              <svg viewBox="0 0 100 100" className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)]">
                <defs>
                  <linearGradient id="flGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FF6B2B" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                {/* Stylized Texas outline */}
                <path
                  d="M 12,8 L 55,8 L 58,16 L 62,18 L 70,16 L 75,20 L 70,30 L 60,32 L 52,38 L 50,46 L 55,52 L 60,60 L 68,68 L 78,78 L 82,88 L 78,94 L 70,92 L 64,84 L 56,76 L 48,72 L 40,72 L 34,68 L 28,62 L 22,58 L 18,52 L 14,42 L 12,30 L 10,20 Z"
                  fill="url(#flGradient)"
                  stroke="#FF6B2B"
                  strokeWidth="0.4"
                  strokeOpacity="0.6"
                />
              </svg>

              {/* City pins */}
              {cities.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="absolute group"
                  style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-60" />
                    <div className="relative w-3 h-3 rounded-full bg-primary border-2 border-white shadow-lg" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 border border-primary/40 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                      {c.name}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* HQ badge */}
              <div className="absolute bottom-6 left-6 bg-zinc-900/90 backdrop-blur-md border border-primary/40 rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                    Headquarters
                  </div>
                  <div className="text-sm font-bold text-white">Dallas, TX</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// TIMELINE
// =============================================================================
const Timeline = () => {
  const milestones = [
    {
      year: "2021",
      title: "Founded in a Dallas garage",
      body: "Muhammad Nauman signs first 3 HVAC clients with a $2k laptop and a borrowed desk.",
    },
    {
      year: "2022",
      title: "First $1M client revenue milestone",
      body: "A Houston HVAC company crosses $1M in tracked revenue from our campaigns.",
    },
    {
      year: "2023",
      title: "Said no to non-HVAC",
      body: "Turned down a $40k/mo dental client to stay 100% focused on HVAC contractors.",
    },
    {
      year: "2024",
      title: "Built our AEO framework",
      body: "Released the first answer-engine optimization playbook tailored to HVAC search.",
    },
    {
      year: "2025",
      title: "200th Texas HVAC client signed",
      body: "Hit 200 active Texas HVAC contractors. Won 'Top TX Marketing Agency' award.",
    },
    {
      year: "2026",
      title: "$14M+ in tracked client revenue",
      body: "Crossed the $14M mark in attributed revenue across the TX client roster.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-100/40 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Our Journey
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            5 years.<br />
            <span className="text-primary">One mission.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            How we got from a garage in Dallas to Texas's #1 HVAC marketing agency.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-display text-lg shadow-lg shadow-primary/30 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {m.year}
                </div>

                {/* Content */}
                <div className="flex-1 md:max-w-[42%] bg-white border border-zinc-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all">
                  <h3 className="font-display text-xl md:text-2xl text-zinc-900 uppercase leading-tight mb-2">
                    {m.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// AWARDS & RECOGNITION
// =============================================================================
const Awards = () => {
  const awards = [
    { icon: Award, label: "Google Premier Partner", year: "2024" },
    { icon: BadgeCheck, label: "Meta Business Verified", year: "2023" },
    { icon: Trophy, label: "TX Top Marketing Agency", year: "2024" },
    { icon: Star, label: "Clutch Top 1% B2B", year: "2025" },
    { icon: Award, label: "Inc. 5000 Honoree", year: "2024" },
    { icon: BadgeCheck, label: "BBB A+ Accredited", year: "2022" },
  ];

  return (
    <section className="bg-background py-20 md:py-24 relative overflow-hidden border-t border-white/5">
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-3">
            Recognized By
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight">
            Awards, Partnerships & Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {awards.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center hover:border-primary/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                <a.icon className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
              <div className="text-sm font-bold text-white leading-tight mb-1">
                {a.label}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                {a.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// CTA CLOSER
// =============================================================================
const AboutCTA = () => {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-200/40 blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-200/40 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900 rounded-3xl p-10 md:p-16 overflow-hidden text-center"
        >
          {/* Decorative */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#00D4FF]/10 blur-[120px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                Let's Build Something
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.98] text-white mb-6">
              Ready to be our<br />
              next <span className="text-primary">case study?</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Book a free 30-minute strategy call. No pressure, no slides — just a real conversation about your service area, your competitors, and what's possible.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.6)]"
                data-testid="link-about-cta-book"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:8885554822"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md border-2 border-white/20 text-white hover:border-primary hover:text-primary font-bold uppercase tracking-wider text-sm transition-all"
                data-testid="link-about-cta-call"
              >
                <Phone className="w-4 h-4" />
                (888) 555-4822
              </a>
            </div>

            {/* Trust micro-row */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free 30-min audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Tailored to your TX market</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Zero pressure to sign</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// =============================================================================
// MAIN ABOUT PAGE
// =============================================================================
export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="About HVAC Digitals | Built by HVAC Pros, For HVAC Pros"
        description="Meet Muhammad Nauman and the team behind Texas's #1 HVAC marketing agency. Founded in 2021, we work exclusively with HVAC contractors across Texas."
        canonical="https://hvacdigitals.com/about"
      />
      <Navbar />
      <main>
        <PageHeader />
        <FounderStory />
        <MissionVision />
        <WhyHvacOnly />
        <FreeAuditCTA />
        <TexasCoverage />
        <Timeline />
        <Awards />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
