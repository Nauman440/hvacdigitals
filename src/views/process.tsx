"use client";
import React, { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Zap,
  Phone,
  ChevronDown,
  Sparkles,
  Shield,
  Flame,
  BarChart3,
  Users,
  Clock,
  MessageSquare,
  FileText,
  Search,
  Target,
  Rocket,
  RefreshCw,
  Eye,
  Lock,
  Award,
  Workflow,
  TrendingUp,
  Calendar,
  Settings2,
  Globe,
} from "lucide-react";
import { Navbar, Footer } from "@/views/home";

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => (
  <section className="relative pt-36 pb-24 overflow-hidden bg-background">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/12 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl text-center">
      <nav className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-10">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white font-bold">Our Process</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
      >
        <Workflow className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          How HVAC Digitals Works
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] tracking-tight text-white mb-6"
      >
        What Happens After<br />
        You Sign With<br />
        <span className="text-primary">HVAC Digitals?</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-10"
      >
        No mystery, no black box. We have a documented onboarding sequence, a defined monthly rhythm, and clear milestones at every stage. Here is exactly what working with us looks like from day one through month twelve.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.6)]"
          data-testid="link-process-hero-cta"
        >
          Start With a Free Audit
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="tel:8885554822"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md border-2 border-white/20 text-white hover:border-primary hover:text-primary font-bold uppercase tracking-wider text-sm transition-all"
        >
          <Phone className="w-4 h-4" />
          (888) 555-4822
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
      >
        {[
          { value: "48 hrs", label: "Free audit delivered" },
          { value: "14 days", label: "First results live" },
          { value: "90 days", label: "Full campaign rhythm" },
          { value: "1 client", label: "Per service area" },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
            <div className="font-display text-3xl text-primary leading-none mb-1">{s.value}</div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold leading-snug">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

// =============================================================================
// PHILOSOPHY
// =============================================================================
const Philosophy = () => {
  const pillars = [
    {
      icon: Target,
      title: "One industry. Full depth.",
      body: "We work exclusively with HVAC companies. That means every piece of strategy, content, and code we produce is built on years of accumulated HVAC-specific knowledge. We know your seasonality, your customer intent patterns, your local competition dynamics, and what converts in your market.",
    },
    {
      icon: Lock,
      title: "One client per service area.",
      body: "We never work with two HVAC companies competing in the same geographic area. Your market intelligence, your keyword strategy, your audience data, and your creative work are exclusive to you. If a competitor in your area enquires, we decline.",
    },
    {
      icon: Eye,
      title: "Full transparency, always.",
      body: "You have live access to your Google Ads account, Analytics, and Search Console from day one. You can see every campaign, every keyword, every spend. We report monthly on what we did, what it achieved, and what we are doing next. No black box.",
    },
    {
      icon: Clock,
      title: "Speed without shortcuts.",
      body: "We move fast — automation live in 14 days, websites delivered in 30, campaigns running in the first week. But speed never means cutting corners on technical quality, content accuracy, or campaign logic. Every deliverable is built to the same standard regardless of timeline.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-[160px]" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Our Operating Principles
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            What Is the HVAC Digitals<br />
            Approach to<br />
            <span className="text-primary">HVAC Marketing?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Four non-negotiable principles that shape every client relationship and every deliverable we produce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-zinc-900 mb-3 leading-tight">{p.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// ONBOARDING TIMELINE
// =============================================================================
const OnboardingTimeline = () => {
  const phases = [
    {
      phase: "Phase 0",
      title: "Free Audit",
      timing: "Before you sign anything",
      color: "from-zinc-600 to-zinc-700",
      glow: "shadow-zinc-900/30",
      icon: Search,
      description: "Every relationship starts with a free audit — not a sales pitch. We audit your website, Google Business Profile, ad accounts, social presence, and top 3 local competitors. You receive a written report within 48 hours with specific findings, prioritised recommendations, and an honest assessment of what is working and what is not.",
      deliverables: [
        "Website PageSpeed and Core Web Vitals audit",
        "GBP completeness and review velocity analysis",
        "Ad account waste and quality score review",
        "Competitor keyword and content gap analysis",
        "Prioritised recommendation report with revenue impact estimates",
      ],
    },
    {
      phase: "Phase 1",
      title: "Strategy Call",
      timing: "Day 1–2 after signing",
      color: "from-primary to-orange-600",
      glow: "shadow-primary/30",
      icon: Target,
      description: "A 60-minute strategy session with your Account Strategist. We present the full audit findings, agree on the primary growth objectives for the first 90 days, select the services that will drive the fastest ROI, and set measurable KPIs. You leave the call knowing exactly what we are building, when it launches, and what success looks like.",
      deliverables: [
        "Custom 90-day growth roadmap document",
        "Agreed KPIs for each active service",
        "Service priority and launch sequence",
        "Access credentials and account permissions requested",
        "Dedicated Slack channel opened for direct communication",
      ],
    },
    {
      phase: "Phase 2",
      title: "Onboarding",
      timing: "Day 3–7",
      color: "from-primary to-orange-600",
      glow: "shadow-primary/30",
      icon: Settings2,
      description: "Your full team is assigned: Account Strategist, SEO Specialist, Paid Ads Manager, Web Developer (if applicable), Social Media Manager (if applicable), and Automation Engineer (if applicable). All platform access is granted, tracking is installed, and the technical setup is validated. Your dedicated team begins building on day three.",
      deliverables: [
        "Full team assigned and introduced",
        "Google Analytics 4, Search Console, and GTM configured",
        "Call tracking numbers installed and tested",
        "CRM and field software integrations connected",
        "All accounts audited and baseline metrics documented",
      ],
    },
    {
      phase: "Phase 3",
      title: "Build Phase",
      timing: "Week 2–4",
      color: "from-primary to-orange-600",
      glow: "shadow-primary/30",
      icon: Rocket,
      description: "Everything is built during weeks 2 to 4: ad campaigns structured and written, landing pages designed and coded, automation sequences built and tested, social content calendars planned and designed. Nothing goes live without your approval. You review and sign off on all campaign copy, design, and strategy before the launch switch is flipped.",
      deliverables: [
        "Ad campaigns built, written, and reviewed",
        "Landing pages or website sections designed and developed",
        "Automation workflows built and end-to-end tested",
        "First 30-day social content calendar approved",
        "All tracking and conversion goals verified in staging",
      ],
    },
    {
      phase: "Phase 4",
      title: "Go-Live",
      timing: "Week 4",
      color: "from-primary to-orange-600",
      glow: "shadow-primary/30",
      icon: Zap,
      description: "Everything activates in week four. Ads begin spending, automations start firing on live leads, new pages go live, and social content begins publishing. Your Account Strategist runs daily performance checks in the first week post-launch — catching any algorithm anomalies, conversion tracking issues, or campaign delivery problems before they impact results.",
      deliverables: [
        "All campaigns, automations, and content live",
        "Daily performance monitoring in launch week",
        "Real-time alert setup for anomalous spend or conversion drops",
        "First lead pipeline data populating your CRM",
        "72-hour launch check-in call with your Account Strategist",
      ],
    },
    {
      phase: "Phase 5",
      title: "Monthly Rhythm",
      timing: "Month 2 onwards",
      color: "from-primary to-orange-600",
      glow: "shadow-primary/30",
      icon: RefreshCw,
      description: "After go-live, we enter the monthly operating rhythm that compounds results over time. Every month includes continuous campaign optimisation, new content, automation performance review, and a formal reporting call. At 90 days we run a full strategic review — assessing what is working, scaling what is performing, and adjusting anything that is underperforming.",
      deliverables: [
        "Monthly performance report delivered before the call",
        "60-minute monthly reporting and strategy call",
        "Campaign optimisations, A/B tests, and bid adjustments",
        "New content published on schedule across all active channels",
        "90-day full strategic review with updated 90-day roadmap",
      ],
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-900/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Rocket className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              From Audit to Full Growth Mode
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            What Happens After You<br />
            Sign With<br />
            <span className="text-primary">HVAC Digitals?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Six distinct phases take you from free audit to fully operational HVAC growth engine. Here is every milestone, every deliverable, and every timeline — in writing.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-[44px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-600 via-primary to-primary/20" />

          <div className="space-y-8">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className={`relative z-10 w-16 h-16 md:w-[88px] md:h-[88px] rounded-full bg-gradient-to-br ${p.color} flex flex-col items-center justify-center text-white shadow-lg ${p.glow} flex-shrink-0`}>
                  <p.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:bg-white/[0.06] transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 block mb-0.5">{p.phase}</span>
                      <h3 className="font-display text-2xl md:text-3xl text-white uppercase leading-tight">{p.title}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider flex-shrink-0">
                      {p.timing}
                    </span>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-5 mt-3">{p.description}</p>

                  <div className="pt-5 border-t border-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
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
// FIRST 90 DAYS
// =============================================================================
const FirstNinetyDays = () => {
  const months = [
    {
      label: "Month 1",
      title: "Foundation",
      color: "border-zinc-600 text-zinc-400",
      accent: "bg-zinc-600/20 text-zinc-300",
      outcomes: [
        "Full audit completed and documented",
        "All tracking and integrations live",
        "Campaigns and automations launched",
        "First social content published",
        "Baseline metrics established across all channels",
      ],
      note: "Month one is about building the right foundation, not chasing vanity metrics. The decisions made here determine how fast everything compounds.",
    },
    {
      label: "Month 2",
      title: "Acceleration",
      color: "border-primary/60 text-primary",
      accent: "bg-primary/15 text-primary",
      outcomes: [
        "Ad campaigns optimised based on first 30 days of data",
        "Automation response rates tracked and copy A/B tested",
        "SEO content published and indexed",
        "Social engagement increasing and community management active",
        "First organic keyword ranking movements visible",
      ],
      note: "Month two is when the data starts talking. Campaign adjustments based on real conversion data — not assumptions — begin compounding results.",
    },
    {
      label: "Month 3",
      title: "Full Operation",
      color: "border-primary text-primary",
      accent: "bg-primary/20 text-primary",
      outcomes: [
        "Full campaign rhythm operating consistently",
        "Leads flowing from multiple channels simultaneously",
        "Review velocity accelerating from automation",
        "Local keyword rankings improving measurably",
        "90-day strategic review with updated roadmap",
      ],
      note: "Month three is the full-operation state. Campaigns are dialled, automation is recovering leads, rankings are moving, and the monthly rhythm is delivering consistent results.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-[160px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Month-by-Month Milestones
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            What Results Should You<br />
            Expect in the<br />
            <span className="text-primary">First 90 Days?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            We set clear expectations at the start of every engagement. Here is what the first three months look like — with honest milestones, not inflated promises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {months.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border-t-4 ${m.color.split(" ")[0]} bg-zinc-50 border border-zinc-200 rounded-2xl p-7 relative`}
            >
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 ${m.accent}`}>
                {m.label}
              </div>
              <h3 className="font-display text-3xl uppercase tracking-tight text-zinc-900 mb-5">{m.title}</h3>
              <ul className="space-y-2.5 mb-6">
                {m.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {o}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-500 italic leading-relaxed border-t border-zinc-200 pt-5">{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// YOUR TEAM
// =============================================================================
const YourTeam = () => {
  const roles = [
    {
      icon: Users,
      role: "Account Strategist",
      description: "Your primary contact for everything. Owns your 90-day roadmap, runs your monthly reporting call, coordinates your full team, and is reachable via Slack within 4 business hours.",
    },
    {
      icon: Search,
      role: "SEO Specialist",
      description: "Owns your keyword strategy, technical SEO foundation, content publishing schedule, and local ranking performance. Monitors your GBP, citation profile, and competitor movements monthly.",
    },
    {
      icon: Target,
      role: "Paid Ads Manager",
      description: "Builds, manages, and optimises every Google and Meta campaign. Responsible for cost per lead, ad quality scores, audience targeting, and bid strategy. Never hands a campaign to a junior after setup.",
    },
    {
      icon: Globe,
      role: "Web Developer",
      description: "Builds and maintains your HVAC website with mobile-first code, sub-2-second load times, and SEO architecture baked in. Handles all content update requests within 24 hours.",
    },
    {
      icon: MessageSquare,
      role: "Social Media Manager",
      description: "Plans, creates, and publishes your content calendar. Manages community responses on all active platforms within a 4-business-hour window. Runs Facebook and Instagram ad creative.",
    },
    {
      icon: Workflow,
      role: "Automation Engineer",
      description: "Builds, maintains, and optimises all automation workflows. Integrates your field management software, CRM, and communication tools. Reviews automation performance monthly and adjusts logic based on data.",
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-900/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Users className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Your Dedicated Team
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Who Works on Your<br />
            HVAC Marketing<br />
            <span className="text-primary">Account?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Not a junior account manager handing work to freelancers. Every client gets a named team of HVAC specialists — one per discipline — from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-primary/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight text-white mb-3 leading-tight">{r.role}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto text-center"
        >
          <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-display text-3xl uppercase text-white tracking-tight mb-3">
            No Junior Handoffs. Ever.
          </h3>
          <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Every specialist assigned to your account owns their discipline from strategy to execution. We do not use onboarding teams that hand work off to junior staff after month one. The person who builds your campaign is the person who optimises it every month.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// =============================================================================
// REPORTING
// =============================================================================
const Reporting = () => {
  const elements = [
    {
      icon: BarChart3,
      title: "Monthly Performance Report",
      body: "Delivered 48 hours before your monthly call. Covers every active service: keyword rankings, ad spend and cost per lead, call volume, review velocity, automation conversion rates, and social reach. Written in plain language — no jargon, no hiding.",
    },
    {
      icon: Eye,
      title: "Live Account Access",
      body: "You have read access to your Google Ads account, Google Analytics 4, Google Search Console, and Meta Ads Manager from day one. At any point you can verify spend, review keyword data, or check conversion tracking. Your data belongs to you.",
    },
    {
      icon: MessageSquare,
      title: "Dedicated Slack Channel",
      body: "Every client gets a shared Slack channel with their full team. Use it for quick questions, content approvals, urgent requests, and status updates. We respond within 4 business hours. No email chains, no ticketing systems.",
    },
    {
      icon: Calendar,
      title: "Monthly Reporting Call",
      body: "60-minute video call with your Account Strategist every month. We walk through the report, discuss what we are optimising, present the next 30-day plan, and answer every question. No auto-generated reports with no context.",
    },
    {
      icon: TrendingUp,
      title: "90-Day Strategic Review",
      body: "Every 90 days we run a full strategic review: reassessing your growth objectives, reviewing competitor movements, analysing what is performing and what is not, and delivering an updated 90-day roadmap. The plan evolves as the results do.",
    },
    {
      icon: FileText,
      title: "Annual Audit and Benchmark",
      body: "Every 12 months we run a full account audit against year-one baselines: keyword ranking movement, cost per lead trend, review count change, lead volume year-over-year, and channel attribution. A complete picture of growth from month one to month twelve.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/30 blur-[160px]" />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Reporting and Communication
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            How Does HVAC Digitals<br />
            Report Results<br />
            <span className="text-primary">to Clients?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Reporting is not an afterthought — it is a core part of the service. You always know what is being done, what it is producing, and what is planned next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {elements.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <e.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight text-zinc-900 mb-3 leading-tight">{e.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{e.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// TOOLS
// =============================================================================
const Tools = () => {
  const categories = [
    {
      cat: "SEO and Search",
      tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush", "Google Business Profile", "BrightLocal (Citations)"],
    },
    {
      cat: "Paid Advertising",
      tools: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "CallRail (Call Tracking)", "Microsoft Advertising", "Local Services Ads"],
    },
    {
      cat: "Automation and CRM",
      tools: ["GoHighLevel", "ServiceTitan", "Housecall Pro", "Jobber", "Make.com", "Zapier"],
    },
    {
      cat: "Design and Development",
      tools: ["Figma", "React / Next.js", "Vercel / Cloudflare", "Sanity CMS", "Hotjar (CRO)", "PageSpeed Insights"],
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Settings2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Technology Stack
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            What Tools Does<br />
            HVAC Digitals<br />
            <span className="text-primary">Use for Your Account?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Best-in-class platforms across every discipline. No proprietary black boxes — every tool we use gives you full data access and portability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {categories.map((c, i) => (
            <motion.div
              key={c.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-primary/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">{c.cat}</div>
              <ul className="space-y-2.5">
                {c.tools.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// FAQ
// =============================================================================
const Faq = () => {
  const [open, setOpen] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take to see results after starting with HVAC Digitals?",
      a: "Automation results — missed call text-back, lead response sequences — are live within 14 days and start recovering leads immediately. Paid search results typically begin generating calls within 3 to 5 days of campaign launch. SEO results take longer: keyword ranking movements become measurable between weeks 8 and 12, with significant traffic impact typically building from month 3 onwards. We are transparent about this timeline from day one and never oversell short-term SEO outcomes.",
    },
    {
      q: "What is the minimum contract term for HVAC Digitals?",
      a: "We ask for a 6-month initial commitment. Marketing compound results — particularly SEO and social — require consistent execution over time to generate meaningful returns. A month-to-month agreement incentivises short-term thinking on both sides. After the initial 6 months, agreements renew month-to-month. Our retention rate after 6 months is over 94%, which is the most honest signal of client satisfaction we can offer.",
    },
    {
      q: "Do I need to provide content or creative materials?",
      a: "For most services, minimal input is required from your team. Paid ads and social media content are written by our team. For social media, real job photos and video from your technicians dramatically improve performance — we provide a simple monthly photo brief to guide what to capture. For website development, we need your logo, service descriptions, and testimonials. For SEO content, we research and write all copy in-house with your approval before publishing.",
    },
    {
      q: "What access do I need to give HVAC Digitals to my accounts?",
      a: "We request access to Google Ads (manager-level access to your account), Google Analytics 4 (editor access), Google Search Console (owner or full access), Meta Business Manager (partner access), and your field management software (integration credentials). You always retain full ownership and admin control of every platform. We operate as a trusted partner on your accounts, not as the account owner.",
    },
    {
      q: "How do I communicate with my team at HVAC Digitals?",
      a: "Every client gets a dedicated Slack channel with their full team from day one. For most day-to-day requests, questions, and approvals, Slack is the fastest channel — we respond within 4 business hours. For complex strategic questions or account changes, we schedule video calls. You also have a direct phone number for your Account Strategist for urgent situations.",
    },
    {
      q: "What happens if I am not satisfied with the results?",
      a: "First, dissatisfaction rarely appears without warning — monthly reporting calls are specifically designed to surface performance concerns before they become serious issues. If performance is underperforming against agreed KPIs after a documented optimisation period, we will present a revised strategy at no additional cost. We do not hide behind attribution debates or industry benchmarks. If results are not meeting agreed targets, we own the gap and fix it.",
    },
    {
      q: "Can I add services after the initial engagement starts?",
      a: "Yes. Many clients start with one or two services — commonly paid search and automation — and add website development, social media, or SEO as results build confidence. Services can be added at any point during the engagement. We build the monthly plan around what is most likely to drive ROI at each stage of your growth, and that changes as the business scales.",
    },
    {
      q: "Does HVAC Digitals work with HVAC companies outside Texas?",
      a: "Our active client base is Texas-focused. We know the Texas HVAC market — its seasonal demand patterns, its competitive dynamics, the local search behaviour across different metro areas, and the specific platforms that perform for Texas homeowners. If you are outside Texas, contact us and we will give you an honest assessment of whether we can serve your market with the same depth.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-[160px]" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Working With Us FAQ
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-4">
            Frequently Asked Questions<br />
            About Working With<br />
            <span className="text-primary">HVAC Digitals.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border border-zinc-200 rounded-xl overflow-hidden hover:border-primary/40 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                data-testid={`process-faq-toggle-${i}`}
              >
                <span className="font-bold text-zinc-900 text-lg leading-tight">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-zinc-600 leading-relaxed text-[15px]">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// FINAL CTA
// =============================================================================
const FinalCta = () => (
  <section className="relative bg-background py-24 md:py-32 overflow-hidden border-t border-white/5">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[180px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl text-center">
      <div className="bg-gradient-to-br from-zinc-900 to-background border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-6">
            <Flame className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Start with a Free Audit · 48-Hour Delivery
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95] text-white mb-5">
            Ready to See Exactly<br />
            Where You Are<br />
            <span className="text-primary">Losing Leads?</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We start every relationship with a free, no-obligation audit of your website, Google Business Profile, ad accounts, and competitors. Delivered in writing within 48 hours. No sales call required to receive the report.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { num: "48 hrs", label: "Free audit delivered in writing" },
              { num: "$0", label: "Cost to start — no credit card required" },
              { num: "1 client", label: "Per service area — check availability" },
            ].map((s) => (
              <div key={s.num} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                <div className="font-display text-4xl text-primary leading-none mb-1">{s.num}</div>
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-bold">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.6)]"
              data-testid="link-process-bottom-cta"
            >
              Get My Free Audit Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:8885554822"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border-2 border-white/20 text-white hover:border-primary hover:text-primary font-bold uppercase tracking-wider text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              (888) 555-4822
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function ProcessPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "HVAC Digitals Process — How We Work",
      "description": "How HVAC Digitals onboards and manages Texas HVAC marketing clients. From free audit to full growth operation in 30 days. Dedicated team, transparent reporting, no black boxes.",
      "url": "https://hvacdigitals.com/process",
      "publisher": {
        "@type": "Organization",
        "name": "HVAC Digitals",
        "url": "https://hvacdigitals.com",
        "areaServed": { "@type": "State", "name": "Texas" },
      },
    };

    const existing = document.querySelector("script[data-process-schema]");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-process-schema", "0");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "See exactly how HVAC Digitals onboards and grows Texas HVAC companies. Free audit in 48 hours, campaigns live in 14 days, monthly reporting with full account access."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "See exactly how HVAC Digitals onboards and grows Texas HVAC companies. Free audit in 48 hours, campaigns live in 14 days, monthly reporting with full account access.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelector("script[data-process-schema]")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="Our HVAC Marketing Process | How We Grow Your Business | HVAC Digitals"
        description="A transparent look at how HVAC Digitals grows Texas HVAC companies — from free audit to full growth operation in 30 days. No black boxes."
        canonical="https://hvacdigitals.com/process"
      />
      <Navbar />
      <main>
        <PageHeader />
        <Philosophy />
        <OnboardingTimeline />
        <FirstNinetyDays />
        <YourTeam />
        <Reporting />
        <Tools />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
