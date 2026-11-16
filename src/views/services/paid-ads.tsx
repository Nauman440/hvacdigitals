"use client";
import React, { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Target,
  Sparkles,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Zap,
  Phone,
  ChevronDown,
  DollarSign,
  Users,
  XCircle,
  MousePointerClick,
  Megaphone,
  RefreshCw,
  Shield,
  Star,
  Flame,
  AlertTriangle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Navbar, Footer } from "@/views/home";
import { PricingSection } from "@/components/PricingSection";

// =============================================================================
// HERO LEAD FORM (2-step)
// =============================================================================
type PpcFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  monthlyBudget: string;
  challenge: string;
};

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState<PpcFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    monthlyBudget: "",
    challenge: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof PpcFormData, string>>>({});

  const update = (k: keyof PpcFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const updateSelect = (k: keyof PpcFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof PpcFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof PpcFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.monthlyBudget) e.monthlyBudget = "Required";
    if (!data.challenge.trim()) e.challenge = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Monthly Budget: ${data.monthlyBudget}\nWebsite: ${data.website}\nChallenge: ${data.challenge}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "Google / Facebook Ads", message }),
    });
    setSubmitted(true);
    toast({
      title: "PPC audit request received",
      description: "We'll analyse your ad account and reach out within 1 business hour.",
    });
  };

  const inputCls = "h-11 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary";

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-2">You're In.</h3>
        <p className="text-sm text-white/70">
          Your free PPC audit is on the way. We reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Free PPC Audit · Worth $1,200
          </div>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
            Get Your Free <span className="text-primary">Ads Audit</span> Now
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <div className="flex-1 flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>1</div>
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 1 ? "text-white" : "text-white/40"}`}>Contact</span>
        </div>
        <div className={`h-px flex-1 ${step >= 2 ? "bg-primary" : "bg-white/10"}`} />
        <div className="flex-1 flex items-center gap-2 justify-end">
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 2 ? "text-white" : "text-white/40"}`}>Business</span>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>2</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Full Name</label>
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-ppc-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-ppc-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-ppc-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-ppc-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-ppc-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Website</label>
                <Input value={data.website} onChange={update("website")} placeholder="yourhvac.com" className={inputCls} data-testid="input-ppc-website" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Current Monthly Ad Budget</label>
              <Select value={data.monthlyBudget} onValueChange={updateSelect("monthlyBudget")}>
                <SelectTrigger className={inputCls} data-testid="select-ppc-budget">
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Not running ads yet</SelectItem>
                  <SelectItem value="0-1000">Under $1,000 / month</SelectItem>
                  <SelectItem value="1000-3000">$1,000 – $3,000 / month</SelectItem>
                  <SelectItem value="3000-7000">$3,000 – $7,000 / month</SelectItem>
                  <SelectItem value="7000+">$7,000+ / month</SelectItem>
                </SelectContent>
              </Select>
              {errors.monthlyBudget && <p className="text-xs text-red-400 mt-1">{errors.monthlyBudget}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest Paid Ads Challenge</label>
              <Textarea
                value={data.challenge}
                onChange={update("challenge")}
                placeholder="e.g. High cost per lead, ads not converting, running out of budget by noon…"
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-ppc-challenge"
              />
              {errors.challenge && <p className="text-xs text-red-400 mt-1">{errors.challenge}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-ppc-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-ppc-submit">
                Get My Free Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </form>

      <p className="text-[11px] text-white/40 text-center mt-4 leading-snug">
        100% free. No credit card. We'll never spam you or share your info.
      </p>
    </div>
  );
};

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => {
  const stats = [
    { value: "6.2×", label: "Average ROAS for our clients" },
    { value: "24 hrs", label: "To first leads after launch" },
    { value: "89%", label: "Lead-to-call show rate" },
  ];

  const trust = [
    "No long-term contracts",
    "1 company per market",
    "Calls tracked & recorded",
  ];

  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/12 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-400">Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-bold">Google Ads for HVAC</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Target className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                HVAC Pay-Per-Click & Paid Media
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              Stop Burning<br />
              Ad Spend.<br />
              <span className="text-primary">Start Booking Jobs.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              We run Google Ads, Local Service Ads, and Facebook campaigns built specifically for Texas HVAC companies — targeting homeowners who need AC repair, installation, and maintenance right now.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 mb-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center">
                  <div className="font-display text-2xl md:text-3xl text-primary leading-none mb-1">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold leading-snug">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HeroLeadForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// THE PROBLEM
// =============================================================================
const TheProblem = () => {
  const mistakes = [
    {
      icon: DollarSign,
      title: "Bidding on the wrong keywords",
      body: "Generic agencies bid on broad terms like \u201cair conditioning\u201d \u2014 attracting DIYers, renters, and out-of-area clicks. Every dollar spent on these is a dollar not reaching a homeowner ready to book.",
    },
    {
      icon: MousePointerClick,
      title: "Sending traffic to a homepage",
      body: "A homepage is not a landing page. Sending paid traffic there destroys your Quality Score, drives up your cost per click, and gives visitors zero reason to call you right now.",
    },
    {
      icon: Target,
      title: "No HVAC seasonality strategy",
      body: "Texas HVAC demand spikes in May and surges again in September. Generic agencies run flat budgets year-round — missing the weeks where a single job covers a month of ad spend.",
    },
    {
      icon: BarChart3,
      title: "Optimising for clicks instead of calls",
      body: "High click-through rate means nothing if your phone isn't ringing. Most agencies report clicks and impressions — we track every booked call and every dispatched tech.",
    },
    {
      icon: RefreshCw,
      title: "No negative keyword hygiene",
      body: "Without aggressive negative keyword lists, your ads appear for searches like \u201cHVAC certification courses\u201d or \u201cDIY AC fix.\u201d Texas HVAC searches are full of intent-killers that drain budgets daily.",
    },
    {
      icon: Users,
      title: "Missing Local Service Ads entirely",
      body: "Google's Local Service Ads (LSAs) show above everything else in the search results and charge per lead, not per click. Most Texas HVAC companies ignore them — and hand those leads to competitors.",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-5">
            <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-500">
              Why Most HVAC Ads Fail
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Your ads are running.<br />
            <span className="text-primary">Your leads aren't.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Texas HVAC is one of the most competitive paid media markets in the US. These six mistakes explain why most HVAC companies waste 40–60% of their ad budget every month.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mistakes.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-red-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                <m.icon className="w-5 h-5 text-red-400" />
              </div>
              <h4 className="font-bold text-zinc-900 text-lg mb-2 leading-tight">{m.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// WHAT'S INCLUDED
// =============================================================================
const WhatsIncluded = () => {
  const services = [
    {
      icon: Target,
      title: "Google Search Ads",
      tag: "Core",
      items: [
        "Emergency + intent-focused keyword strategy",
        "Negative keyword lists (1,000+ exclusions)",
        "Ad copy A/B testing (headlines + descriptions)",
        "Quality Score optimisation",
        "Geo-targeting by zip code and service area",
        "Call extensions & location extensions",
      ],
    },
    {
      icon: Shield,
      title: "Local Service Ads (LSAs)",
      tag: "Google Guaranteed",
      items: [
        "Full LSA profile setup & verification",
        "Google Guaranteed badge activation",
        "Lead dispute management (bad leads credited)",
        "Review generation for LSA ranking",
        "Budget optimisation for peak demand windows",
        "Weekly performance review",
      ],
    },
    {
      icon: Megaphone,
      title: "Facebook & Meta Ads",
      tag: "Growth Package",
      items: [
        "Homeowner audience targeting (age, income, home ownership)",
        "Seasonal demand campaigns (summer + post-storm)",
        "Video ad creative for AC repair & installation",
        "Lead form campaigns (instant mobile leads)",
        "Retargeting website visitors (30 / 60 / 90 day windows)",
        "Lookalike audiences from existing customers",
      ],
    },
    {
      icon: RefreshCw,
      title: "Retargeting Campaigns",
      tag: "Growth Package",
      items: [
        "Google Display retargeting",
        "YouTube pre-roll ads for previous visitors",
        "Facebook retargeting pixel setup",
        "Custom audiences by service page visited",
        "Sequential retargeting (message escalation)",
        "Competitor conquesting campaigns",
      ],
    },
    {
      icon: MousePointerClick,
      title: "Landing Page Optimisation",
      tag: "All Packages",
      items: [
        "Dedicated PPC landing pages per campaign",
        "Above-the-fold CTA with click-to-call",
        "Trust signals (reviews, badges, guarantee)",
        "Mobile-first design for 70%+ mobile traffic",
        "A/B split testing (headlines, CTAs, layouts)",
        "Heat mapping & session recording analysis",
      ],
    },
    {
      icon: BarChart3,
      title: "Reporting & Tracking",
      tag: "All Packages",
      items: [
        "Call tracking with recording & attribution",
        "Live dashboard (spend, leads, cost-per-lead)",
        "Monthly strategy video call",
        "ROAS & revenue attribution reporting",
        "Competitor ad intelligence briefing",
        "Budget pacing alerts (never overspend)",
      ],
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
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Full-Service Paid Media
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Every platform.<br />
            <span className="text-primary">Every lead source.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            We manage every paid channel where Texas homeowners search for HVAC services — from emergency search intent to social awareness campaigns that fill your pipeline weeks in advance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-primary/40 hover:bg-white/[0.06] transition-all group"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight text-white mb-4 leading-tight">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
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
// AD CREATIVE SECTION
// =============================================================================
const AdCreativeSection = () => {
  const adTypes = [
    {
      label: "Emergency Search",
      headline: "AC Down? Same-Day HVAC Repair",
      desc: "Fast, friendly repair in Dallas Bay. Licensed & insured. Free diagnosis with repair.",
      cta: "Call Now · (813) 555-0100",
      color: "border-primary/40 bg-primary/5",
      badge: "Google Search",
      badgeColor: "bg-primary/15 text-primary",
    },
    {
      label: "Local Service Ad",
      headline: "Cool Breeze HVAC · Google Guaranteed",
      desc: "⭐⭐⭐⭐⭐ 4.9 · 200+ reviews · AC Repair & Installation",
      cta: "Book Online · Dallas, TX",
      color: "border-green-500/30 bg-green-500/5",
      badge: "LSA",
      badgeColor: "bg-green-500/15 text-green-400",
    },
    {
      label: "Facebook / Meta",
      headline: "Texas AC Repair — $49 Tune-Up This Week Only",
      desc: "Don't get caught in August without AC. Book your summer tune-up before slots fill up.",
      cta: "Claim Offer",
      color: "border-blue-500/30 bg-blue-500/5",
      badge: "Meta Ad",
      badgeColor: "bg-blue-500/15 text-blue-400",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-amber-100/30 blur-[140px]" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  Ad Creative & Copy
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
                Ads that make<br />
                <span className="text-primary">homeowners call.</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                We write, design, and test all ad creative in-house. Every headline targets a specific HVAC intent — emergency repair, seasonal tune-up, new installation — with copy that converts Texas homeowners, not just gets clicks.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "HVAC-specific headline formulas (proven 8%+ CTR)",
                  "Seasonal ad creative rotations (summer surge, storm season)",
                  "Call-only ads for mobile emergency searches",
                  "Responsive search ads with 15+ headline variants",
                  "Continuous A/B testing — best performer auto-wins",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {adTypes.map((ad, i) => (
                <motion.div
                  key={ad.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border-2 rounded-xl p-5 ${ad.color}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{ad.label}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ad.badgeColor}`}>{ad.badge}</span>
                  </div>
                  <p className="font-bold text-zinc-900 text-base mb-1">{ad.headline}</p>
                  <p className="text-sm text-zinc-600 mb-3">{ad.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 text-white text-xs font-bold">
                    {ad.cta}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// OUR PROCESS
// =============================================================================
const OurProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Full Account & Competitor Audit",
      duration: "Day 1–2",
      body: "We audit your existing Google Ads account (or start fresh), analyse every competitor running ads in your market, and identify exactly where your budget is leaking. You'll see the full picture before we spend a dollar.",
      output: "Audit report + competitor ad intelligence briefing",
    },
    {
      step: "02",
      title: "Campaign Strategy & Budget Plan",
      duration: "Day 2–4",
      body: "We map out every campaign: which keywords to bid on, which to exclude, what budgets to assign per campaign type, and how to distribute spend across Google Search, LSAs, and Retargeting based on your service area demand.",
      output: "Campaign strategy doc + keyword map + budget allocation plan",
    },
    {
      step: "03",
      title: "Landing Page Build & Conversion Setup",
      duration: "Week 1",
      body: "We build dedicated PPC landing pages for each campaign type — AC repair, installation, tune-ups — with click-to-call buttons, trust signals, and zero distractions. Generic homepages destroy Quality Score and waste ad spend.",
      output: "Dedicated landing pages + call tracking live",
    },
    {
      step: "04",
      title: "Campaign Build & Ad Copy Launch",
      duration: "Week 1–2",
      body: "All campaigns are built from scratch with HVAC-specific structure: tightly themed ad groups, 15+ headline variants per responsive ad, call extensions, location extensions, and negative keyword lists covering 1,000+ irrelevant searches.",
      output: "All campaigns live + first 24-hour performance data",
    },
    {
      step: "05",
      title: "First 30 Days: Rapid Optimisation",
      duration: "Month 1",
      body: "The first 30 days are intensive. We review performance every 48 hours, pause underperforming keywords, escalate bids on top converters, add new negatives, and A/B test ad copy. Most clients see cost-per-lead drop 30–40% in month one.",
      output: "30-day performance report + optimisation log",
    },
    {
      step: "06",
      title: "Monthly Reporting & Compound Growth",
      duration: "Ongoing",
      body: "Every month you get a full performance video from your account manager: total spend, leads generated, cost per lead, ROAS, and next-month priorities. Campaigns compound — each month of data makes the next month more efficient.",
      output: "Monthly video report + live dashboard updated daily",
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
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Our 6-Step Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            From setup to<br />
            <span className="text-primary">leads in 24 hours.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Unlike SEO, paid ads produce results immediately. Our launch process is designed to get your first HVAC lead within 24 hours of going live — not 24 days.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-[44px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 w-16 h-16 md:w-[88px] md:h-[88px] rounded-full bg-gradient-to-br from-primary to-orange-600 flex flex-col items-center justify-center text-white shadow-lg shadow-primary/30 flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Step</span>
                  <span className="font-display text-2xl md:text-3xl leading-none">{s.step}</span>
                </div>
                <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl p-6 md:p-7 hover:border-primary/40 hover:bg-white/[0.06] transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-xl md:text-2xl text-white uppercase leading-tight">{s.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider flex-shrink-0">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-4">{s.body}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-bold text-zinc-300">Deliverable: {s.output}</span>
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
// RESULTS
// =============================================================================
const Results = () => {
  const cases = [
    {
      company: "Dallas Bay HVAC Co.",
      city: "Dallas, TX",
      stat1: { val: "$18", label: "Cost per lead (down from $94)" },
      stat2: { val: "6.8×", label: "Return on ad spend" },
      result: "Generated 340 qualified leads in 90 days running Google Ads + LSAs. Previous agency was spending $6,000/month with fewer than 20 trackable leads.",
      services: ["Google Search Ads", "Local Service Ads", "Call Tracking"],
    },
    {
      company: "San Antonio Cooling Pros",
      city: "San Antonio, TX",
      stat1: { val: "24 hrs", label: "To first booked job" },
      stat2: { val: "$4.2k", label: "Revenue day one" },
      result: "Launched full campaign setup — landing pages, search ads, and LSAs — in 7 days. First call came in within 24 hours of going live, resulting in a $4,200 AC installation.",
      services: ["Google Search Ads", "LSAs", "Landing Pages"],
    },
    {
      company: "South Texas Air Systems",
      city: "Houston, TX",
      stat1: { val: "5.9×", label: "ROAS across all channels" },
      stat2: { val: "189", label: "Leads in first 60 days" },
      result: "Combined Google Ads + Facebook retargeting campaign during summer surge. Targeted homeowners by zip code and income level — 89% of leads were homeowners with qualifying homes.",
      services: ["Google Ads", "Facebook Retargeting", "LSAs"],
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
              Client Results
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Real numbers.<br />
            <span className="text-primary">Real Texas jobs.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Every case study below is from a Texas HVAC company that had run ads before — and was frustrated. These are the results after switching to HVAC Digitals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 rounded-2xl p-7 border border-zinc-800 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <p className="font-bold text-white text-lg leading-tight">{c.company}</p>
                  <p className="text-sm text-zinc-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" /> {c.city}
                  </p>
                </div>
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
                  <div className="font-display text-3xl text-primary leading-none mb-1">{c.stat1.val}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold leading-snug">{c.stat1.label}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
                  <div className="font-display text-3xl text-primary leading-none mb-1">{c.stat2.val}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold leading-snug">{c.stat2.label}</div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-5">{c.result}</p>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {c.services.map((svc) => (
                  <span key={svc} className="text-[10px] font-bold uppercase tracking-wide text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full">
                    {svc}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-4 gap-4 bg-zinc-900 rounded-2xl p-8"
        >
          {[
            { stat: "6.2×", label: "Average ROAS across all client campaigns" },
            { stat: "$18", label: "Average cost per qualified HVAC lead" },
            { stat: "24 hrs", label: "Typical time to first lead after campaign launch" },
            { stat: "94%", label: "Client retention rate after first 90 days" },
          ].map((s) => (
            <div key={s.stat} className="text-center">
              <div className="font-display text-5xl text-primary leading-none mb-2">{s.stat}</div>
              <p className="text-sm text-zinc-400 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// =============================================================================
// VS COMPARISON
// =============================================================================
const VsComparison = () => {
  const rows = [
    { feature: "HVAC-specific keyword research", them: false },
    { feature: "Negative keyword lists (1,000+ terms)", them: false },
    { feature: "Dedicated HVAC landing pages", them: false },
    { feature: "Local Service Ads (LSA) management", them: true },
    { feature: "Texas seasonal budget strategy", them: false },
    { feature: "Call recording & lead attribution", them: false },
    { feature: "Google Guaranteed badge setup", them: false },
    { feature: "Facebook HVAC retargeting", them: false },
    { feature: "Exclusivity — 1 company per market", them: false },
    { feature: "Monthly strategy video call", them: false },
    { feature: "ROAS & revenue tracking (not just clicks)", them: false },
    { feature: "A/B ad copy testing (weekly)", them: false },
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
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              HVAC Digitals vs. Everyone Else
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Why generic agencies<br />
            <span className="text-primary">bleed your budget.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            General marketing agencies manage hundreds of industries. We manage one — HVAC. Here's what that difference looks like in practice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-12 bg-white/[0.06] border-b border-white/10">
            <div className="col-span-6 p-5 text-sm font-bold uppercase tracking-wider text-zinc-400">Feature</div>
            <div className="col-span-3 p-5 text-center text-sm font-bold uppercase tracking-wider text-primary">HVAC Digitals</div>
            <div className="col-span-3 p-5 text-center text-sm font-bold uppercase tracking-wider text-zinc-500">Generic Agency</div>
          </div>

          {rows.map((r, i) => (
            <motion.div
              key={r.feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`grid grid-cols-12 border-b border-white/5 hover:bg-white/[0.03] transition-colors ${i === rows.length - 1 ? "border-b-0" : ""}`}
            >
              <div className="col-span-6 p-5 text-zinc-300 text-sm">{r.feature}</div>
              <div className="col-span-3 p-5 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="col-span-3 p-5 flex items-center justify-center">
                {r.them ? (
                  <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <XCircle className="w-4 h-4 text-zinc-600" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
      q: "How quickly will I see results from HVAC Google Ads?",
      a: "Most Texas HVAC companies see their first leads within 24–48 hours of campaign launch. Unlike SEO, paid ads generate immediate traffic. The first 30 days focus on rapid optimisation — identifying which keywords and ad variations convert, and cutting what doesn't. By day 30, most clients have a cost-per-lead 30–40% lower than launch day.",
    },
    {
      q: "What is a good cost per lead for HVAC Google Ads?",
      a: "In Texas, a healthy HVAC cost per lead via Google Ads ranges from $15–$45 depending on the service type. AC repair leads typically run $18–$30. Installation leads run $30–$60 due to higher intent and competition. HVAC Digitals clients average $18 cost per lead across all campaign types — well below the Texas market average of $55–$80 with generic agencies.",
    },
    {
      q: "What is a Local Service Ad (LSA) and why does my HVAC company need one?",
      a: "Local Service Ads are Google's premium HVAC ad placement — they appear above all standard Google Ads and organic results, show a Google Guaranteed badge, and charge per lead rather than per click. For Texas HVAC companies, LSAs consistently generate the highest-quality leads at the lowest cost because they only show for high-intent local searches. We handle the full setup, verification, and ongoing management.",
    },
    {
      q: "How much should an HVAC company spend on Google Ads per month?",
      a: "For a single-city Texas HVAC market, a starting budget of $1,500–$3,000/month generates meaningful lead volume. For multi-city campaigns or competitive markets like Houston, Dallas, or San Antonio, $3,000–$8,000/month is more appropriate. We recommend starting with your most profitable service type, proving the ROI, then scaling budget as the numbers justify it.",
    },
    {
      q: "Should I run Facebook Ads for my HVAC company?",
      a: "Facebook Ads work best for HVAC companies as a demand-generation and retargeting tool, not a primary lead source. They're ideal for seasonal promotions (summer tune-up specials, post-storm repair campaigns), building brand awareness in your service area, and retargeting homeowners who visited your website but didn't call. We include Facebook in our Growth package alongside Google Ads for full-funnel coverage.",
    },
    {
      q: "Will you work with my HVAC competitors?",
      a: "No. HVAC Digitals takes only one HVAC company per service area. Your keyword strategy, campaign structure, ad copy, and landing pages are built exclusively for your company and market. If you're in El Paso, no El Paso competitor gets access to your campaigns. This exclusivity is written into every contract.",
    },
    {
      q: "Do I need a new website to run paid ads?",
      a: "Not necessarily — but you do need dedicated landing pages. Sending paid traffic to a generic homepage is one of the most common ways HVAC companies waste budget. We build custom HVAC landing pages as part of our paid ads setup, specifically designed to convert paid traffic with above-the-fold calls-to-action, trust signals, and mobile click-to-call buttons.",
    },
    {
      q: "How do you track whether the ads are generating real leads?",
      a: "We set up call tracking with unique phone numbers per campaign, form submission tracking, and live dashboard access showing spend, leads, cost per lead, and ROAS in real time. Every phone call from ads is recorded (with legal disclosure) and you can listen to any call in your dashboard. You'll never wonder again whether your ads are working.",
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
              Paid Ads FAQ
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-4">
            Your questions.<br />
            <span className="text-primary">Straight answers.</span>
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
                data-testid={`ppc-faq-toggle-${i}`}
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
const FinalCta = () => {
  return (
    <section className="relative bg-background py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
        <div className="bg-gradient-to-br from-zinc-900 to-background border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-6">
                <Flame className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                  Free PPC Audit · 48-Hour Delivery
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
                Find out where<br />your ad budget is<br />
                <span className="text-primary">going to waste.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We'll audit your current Google Ads account (or show you exactly what a new campaign would look like), identify every dollar being wasted, and give you a clear plan for getting to $18 cost-per-lead — all free, in 48 hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Full account waste analysis",
                  "Competitor ad intelligence",
                  "Estimated cost-per-lead projection",
                  "Landing page conversion grade",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.6)]"
                  data-testid="link-ppc-bottom-cta"
                >
                  Get My Free PPC Audit
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

            <div className="lg:col-span-5">
              <div className="space-y-4">
                {[
                  { num: "6.2×", label: "Average ROAS across all client campaigns" },
                  { num: "$18", label: "Average cost per qualified HVAC lead" },
                  { num: "$0", label: "Cost for your initial PPC audit report" },
                ].map((s, i) => (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 bg-white/[0.04] border border-white/10 rounded-2xl p-5"
                  >
                    <div className="font-display text-4xl text-primary leading-none flex-shrink-0 w-20 text-center">{s.num}</div>
                    <p className="text-zinc-400 text-sm leading-snug">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function PaidAdsService() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HVAC Paid Ads & PPC Management",
        "serviceType": "Pay-Per-Click Advertising",
        "description": "Specialized Google Ads, Local Service Ads, and Facebook PPC management for HVAC companies in Texas. We generate qualified HVAC leads at an average cost of $18 per lead with a 6.2× ROAS.",
        "provider": {
          "@type": "Organization",
          "name": "HVAC Digitals",
          "url": "https://hvacdigitals.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "TX",
            "addressCountry": "US",
          },
          "areaServed": {
            "@type": "State",
            "name": "Texas",
          },
        },
        "offers": {
          "@type": "Offer",
          "price": "3300",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "3300",
            "priceCurrency": "USD",
            "unitText": "MONTH",
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly will I see results from HVAC Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Texas HVAC companies see their first leads within 24–48 hours of campaign launch. The first 30 days focus on rapid optimisation — by day 30, most clients have a cost-per-lead 30–40% lower than launch day.",
            },
          },
          {
            "@type": "Question",
            "name": "What is a good cost per lead for HVAC Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Texas, a healthy HVAC cost per lead via Google Ads ranges from $15–$45 depending on the service type. HVAC Digitals clients average $18 cost per lead across all campaign types.",
            },
          },
          {
            "@type": "Question",
            "name": "What is a Local Service Ad (LSA) for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local Service Ads are Google's premium HVAC ad placement — they appear above all standard Google Ads and organic results, show a Google Guaranteed badge, and charge per lead rather than per click.",
            },
          },
          {
            "@type": "Question",
            "name": "How much should an HVAC company spend on Google Ads per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For a single-city Texas HVAC market, a starting budget of $1,500–$3,000/month generates meaningful lead volume. For competitive markets like Houston, Dallas, or San Antonio, $3,000–$8,000/month is more appropriate.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How HVAC Paid Ads Management Works: 6-Step Process",
        "description": "A step-by-step guide to how HVAC Digitals launches and manages paid advertising campaigns for Texas HVAC companies.",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Full Account & Competitor Audit", "text": "Audit existing Google Ads account, analyse competitors, and identify budget waste." },
          { "@type": "HowToStep", "position": 2, "name": "Campaign Strategy & Budget Plan", "text": "Map out keyword strategy, budget allocation, and campaign structure across all platforms." },
          { "@type": "HowToStep", "position": 3, "name": "Landing Page Build & Conversion Setup", "text": "Build dedicated PPC landing pages and set up call tracking." },
          { "@type": "HowToStep", "position": 4, "name": "Campaign Build & Ad Copy Launch", "text": "Launch all campaigns with HVAC-specific structure and ad copy." },
          { "@type": "HowToStep", "position": 5, "name": "First 30 Days: Rapid Optimisation", "text": "Review performance every 48 hours and reduce cost-per-lead through aggressive optimisation." },
          { "@type": "HowToStep", "position": 6, "name": "Monthly Reporting & Compound Growth", "text": "Monthly video reporting with live dashboard access and ongoing campaign refinement." },
        ],
      },
    ];

    const existingScripts = document.querySelectorAll('script[data-ppc-schema]');
    existingScripts.forEach((s) => s.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-ppc-schema", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Texas's #1 HVAC PPC agency. We manage Google Ads, Local Service Ads, and Facebook campaigns for HVAC companies. Average $18 cost per lead and 6.2× ROAS. Free audit.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Texas's #1 HVAC PPC agency. We manage Google Ads, Local Service Ads, and Facebook campaigns for HVAC companies. Average $18 cost per lead and 6.2× ROAS. Free audit.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelectorAll('script[data-ppc-schema]').forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Google Ads Texas | More Calls, Lower Cost-Per-Lead | HVAC Digitals"
        description="Stop wasting ad spend. Our HVAC-specific Google Ads campaigns deliver qualified calls for Texas contractors at a lower cost per lead — guaranteed results."
        canonical="https://hvacdigitals.com/services/paid-ads"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HVAC Google Ads Management",
          "description": "HVAC-specific Google Ads campaigns that deliver qualified calls for Texas contractors at a lower cost per lead.",
          "serviceType": "Pay-Per-Click Advertising",
          "areaServed": { "@type": "State", "name": "Texas" },
          "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
          "url": "https://hvacdigitals.com/services/paid-ads",
        }}
      />
      <Navbar />
      <main>
        <PageHeader />
        <TheProblem />
        <WhatsIncluded />
        <AdCreativeSection />
        <OurProcess />
        <Results />
        <VsComparison />
        <PricingSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
