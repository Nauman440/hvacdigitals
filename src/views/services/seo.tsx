"use client";
import React, { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Search,
  Sparkles,
  MapPin,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Target,
  Zap,
  Shield,
  Clock,
  Star,
  Phone,
  ChevronDown,
  Globe,
  FileText,
  Users,
  Award,
  AlertTriangle,
  XCircle,
  Bot,
  MessageSquare,
  BrainCircuit,
  Cpu,
  Quote,
  BookOpen,
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
// HERO LEAD FORM (2-step, same as homepage)
// =============================================================================
type SeoFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  monthlyLeads: string;
  challenge: string;
};

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState<SeoFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    monthlyLeads: "",
    challenge: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof SeoFormData, string>>>({});

  const update = (k: keyof SeoFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const updateSelect = (k: keyof SeoFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof SeoFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof SeoFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.monthlyLeads) e.monthlyLeads = "Required";
    if (!data.challenge.trim()) e.challenge = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Monthly Leads: ${data.monthlyLeads}\nWebsite: ${data.website}\nChallenge: ${data.challenge}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "HVAC SEO", message }),
    });
    setSubmitted(true);
    toast({
      title: "Audit request received",
      description: "We'll reach out within 1 business hour with your free HVAC SEO audit.",
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
          Your free SEO audit is on the way. We reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Free Audit · Worth $1,500
          </div>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
            Get Your Free <span className="text-primary">SEO Audit</span> Now
          </h3>
        </div>
      </div>

      {/* Step indicator */}
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
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-seo-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-seo-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-seo-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-seo-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-seo-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Website</label>
                <Input value={data.website} onChange={update("website")} placeholder="yourhvac.com" className={inputCls} data-testid="input-seo-website" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Monthly Leads Goal</label>
              <Select value={data.monthlyLeads} onValueChange={updateSelect("monthlyLeads")}>
                <SelectTrigger className={inputCls} data-testid="select-seo-leads">
                  <SelectValue placeholder="Select your goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-25">0 – 25 leads / month</SelectItem>
                  <SelectItem value="25-75">25 – 75 leads / month</SelectItem>
                  <SelectItem value="75-200">75 – 200 leads / month</SelectItem>
                  <SelectItem value="200+">200+ leads / month</SelectItem>
                </SelectContent>
              </Select>
              {errors.monthlyLeads && <p className="text-xs text-red-400 mt-1">{errors.monthlyLeads}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest SEO Challenge</label>
              <Textarea
                value={data.challenge}
                onChange={update("challenge")}
                placeholder="e.g. Not ranking in Google, competitors outranking me, no organic leads…"
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-seo-challenge"
              />
              {errors.challenge && <p className="text-xs text-red-400 mt-1">{errors.challenge}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-seo-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-seo-submit">
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
    { value: "312%", label: "Avg. organic lead increase" },
    { value: "90 days", label: "To first-page rankings" },
    { value: "94%", label: "Client retention rate" },
  ];

  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/12 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/8 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-400">Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-bold">SEO for HVAC</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Search className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                HVAC Search Engine Optimization
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              Rank #1 in Texas.<br />
              Get More<br />
              <span className="text-primary">HVAC Calls.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              We engineer Texas HVAC companies to the top of Google — for the keywords homeowners type when their AC dies at 2am. No guesswork, no fluff, no contracts that trap you.
            </motion.p>

            {/* Inline stat strip */}
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
              className="flex flex-wrap gap-3"
            >
              {["No long-term contracts", "1 company per service area", "Results in 60–90 days"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: lead form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-6"
          >
            <HeroLeadForm />
          </motion.div>
        </div>

        {/* AEO Quick Answer Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-14 border border-primary/20 bg-primary/[0.04] rounded-2xl p-6 md:p-8"
          data-aeo-block="true"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Quick Answer · Optimized for AI Search
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                q: "What is HVAC SEO?",
                a: "HVAC SEO is the process of optimizing a heating and cooling company's online presence so it ranks at the top of Google for searches like 'AC repair near me' or 'HVAC installation [city]' — capturing homeowners at the exact moment they need service.",
              },
              {
                q: "How long does HVAC SEO take?",
                a: "Most Texas HVAC companies see first-page movement within 60–90 days. Emergency and long-tail keywords can rank within 30 days. Full service-area dominance typically takes 4–6 months of sustained, specialist-led work.",
              },
              {
                q: "How much does HVAC SEO cost?",
                a: "HVAC SEO retainers typically range from $1,500–$5,000/month depending on market competition and the number of cities targeted. HVAC Digitals' Texas-specific plans start at $1,800/month with no long-term contracts.",
              },
            ].map((item) => (
              <div key={item.q} className="space-y-2">
                <div className="flex items-start gap-2">
                  <Quote className="w-3.5 h-3.5 text-primary/60 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-primary">{item.q}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// =============================================================================
// PROBLEM / PAIN SECTION
// =============================================================================
const TheProblem = () => {
  const pains = [
    {
      icon: AlertTriangle,
      title: "HomeAdvisor & Angi Are Eating Your Leads",
      body: "You pay $50+ per shared lead while directory sites rank above your website for 'AC repair [your city].' Their SEO is funded by your money.",
    },
    {
      icon: Globe,
      title: "National HVAC Chains Outspend You 100:1",
      body: "ARS, One Hour, and others pour millions into SEO. A generalist agency can't match them. A Texas HVAC specialist can out-maneuver them.",
    },
    {
      icon: Clock,
      title: "Seasonal Spikes Punish Slow Rankers",
      body: "When Dallas hits 95° in June, every homeowner Googles 'emergency AC repair.' If you're on page 2 in May, you miss the entire summer.",
    },
    {
      icon: XCircle,
      title: "Your Current SEO Isn't Built for Trades",
      body: "Most SEO agencies don't understand service-area businesses, zip-code targeting, or how homeowners search for HVAC. Ours is built for nothing else.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-100/40 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 mb-5">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
              Why Most HVAC SEO Fails
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            The SEO deck is stacked<br />
            <span className="text-red-500">against you.</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Texas HVAC is one of the most competitive local markets in the country. Here's what you're up against — and why most agencies can't fix it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-zinc-200 rounded-xl p-7 hover:border-red-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-bold text-xl text-zinc-900 mb-3 leading-tight">{p.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-lg text-zinc-700 font-bold">
            The fix isn't just "more SEO." It's SEO engineered <span className="text-primary">specifically for HVAC in Texas.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// =============================================================================
// WHAT'S INCLUDED
// =============================================================================
const WhatsIncluded = () => {
  const features = [
    {
      icon: Target,
      title: "HVAC-Specific Keyword Research",
      body: "We map every high-intent phrase homeowners use — 'AC not cooling,' 'HVAC tune-up near me,' 'emergency AC repair [city]' — and prioritize by search volume × buyer intent × local competition.",
      tags: ["Service keywords", "Location modifiers", "Emergency queries"],
    },
    {
      icon: FileText,
      title: "On-Page Optimization",
      body: "Every page — your homepage, service pages, city pages — is rewritten for technical precision: title tags, H1/H2 hierarchy, schema markup, internal linking architecture, and crawl efficiency.",
      tags: ["Title tags", "Schema markup", "Content structure"],
    },
    {
      icon: Globe,
      title: "Technical SEO Foundation",
      body: "Core Web Vitals, site speed (sub-2s load on mobile), XML sitemaps, canonical tags, and crawl budget management. Google rewards fast, clean HVAC sites. We build them.",
      tags: ["Core Web Vitals", "Mobile speed", "Crawl health"],
    },
    {
      icon: MapPin,
      title: "Service-Area & City Page Strategy",
      body: "One page per city you serve: AC repair Dallas, HVAC installation Houston, heating repair San Antonio. Each page gets unique content, local signals, and a clear conversion path.",
      tags: ["City pages", "ZIP targeting", "Service area maps"],
    },
    {
      icon: Star,
      title: "Google Business Profile Optimization",
      body: "Fully optimized GBP: service categories, Q&A, posts, photo strategy, and review velocity campaigns. Map pack rankings start here.",
      tags: ["Map pack", "Review strategy", "GBP posts"],
    },
    {
      icon: TrendingUp,
      title: "Link Building & Authority Growth",
      body: "Texas-specific backlinks from HVAC trade publications, local business directories, and community mentions. We build domain authority the way Google intended.",
      tags: ["Local citations", "Trade links", "Domain authority"],
    },
    {
      icon: Users,
      title: "Competitor Gap Analysis (Ongoing)",
      body: "Every 30 days we audit your top 3 local competitors. When they rank for something you don't, we build a page to overtake them. Systematic dominance, not one-off fixes.",
      tags: ["Monthly audits", "Content gaps", "Rank tracking"],
    },
    {
      icon: BarChart3,
      title: "Live Reporting Dashboard",
      body: "24/7 access to your keyword rankings, organic traffic, lead volume, and call tracking — all in one dashboard. Monthly video walkthrough from your account lead.",
      tags: ["Real-time data", "Call tracking", "Monthly video"],
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/5 blur-[200px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Everything Inside Our SEO Service
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-4">
              8 Pillars of<br />
              <span className="text-primary">HVAC SEO Dominance.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-lg max-w-sm">
            This isn't a checklist — it's a coordinated system. Every pillar feeds the next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white/[0.03] border border-white/10 rounded-xl p-7 hover:border-primary/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <f.icon className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-white leading-tight">{f.title}</h3>
                    <span className="font-display text-3xl text-white/5 leading-none ml-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-4">{f.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-[11px] font-bold uppercase tracking-wider text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// AEO SECTION
// =============================================================================
const AeoSection = () => {
  const engines = [
    { name: "Google SGE", icon: Search, desc: "AI Overviews now appear above traditional results for 56% of HVAC queries. We structure your content as the cited source." },
    { name: "ChatGPT / GPT-4o", icon: Bot, desc: "Millions of homeowners ask ChatGPT 'which HVAC company should I call in Dallas?' We build the factual entity signals that get you cited." },
    { name: "Perplexity AI", icon: BrainCircuit, desc: "Perplexity crawls and cites real web sources in real time. Our structured content, schema, and E-E-A-T signals make you the default answer." },
    { name: "Bing Copilot", icon: Cpu, desc: "Copilot integrates directly into search. Service-area businesses with strong structured data get surfaced as trusted local recommendations." },
  ];

  const tactics = [
    {
      icon: BookOpen,
      title: "Structured Data & Schema Markup",
      body: "We implement FAQPage, HowTo, LocalBusiness, and Service JSON-LD schemas on every page. This is the single highest-impact AEO signal — it tells AI engines exactly what your content answers.",
    },
    {
      icon: Quote,
      title: "Direct-Answer Content Architecture",
      body: "Every service page leads with a crisp, citable definition. Each section opens with the question, then the answer in ≤60 words. AI engines extract and quote exactly these blocks.",
    },
    {
      icon: MessageSquare,
      title: "Conversational Query Matching",
      body: "We map the exact phrases homeowners type into ChatGPT and Perplexity — 'what HVAC company is best in Houston?' — and create content that directly, factually answers each one.",
    },
    {
      icon: TrendingUp,
      title: "E-E-A-T Authority Signals",
      body: "Experience, Expertise, Authoritativeness, Trustworthiness. We build your HVAC brand as a recognized Texas authority: author bios, license numbers, trade certifications, press mentions.",
    },
    {
      icon: Globe,
      title: "Citation & Entity Building",
      body: "AI engines reference the same sources repeatedly. We get your business mentioned on ACCA, ASHRAE, local Texas news, and 50+ HVAC directories — so you become the default entity.",
    },
    {
      icon: BarChart3,
      title: "AEO Rank Tracking",
      body: "We monitor how often your business appears in AI-generated answers monthly — across Google SGE, Perplexity, and ChatGPT browsing — and report it alongside your traditional keyword rankings.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[160px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-100/30 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Bot className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              AEO · Answer Engine Optimization
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            What does ChatGPT say<br />
            when someone asks{" "}
            <span className="text-primary">"best HVAC in Dallas"?</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
            Traditional SEO gets you on Google page 1. AEO gets you cited inside the AI answers that are replacing page 1. 
            In 2025, 56% of HVAC-related Google searches now trigger an AI Overview above all organic results. 
            If you're not structured for AI extraction, you're invisible to a growing share of your market.
          </p>
        </motion.div>

        {/* AI Engine cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {engines.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white border-2 border-zinc-100 hover:border-primary/30 rounded-xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all">
                <e.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="font-display text-lg text-zinc-900 uppercase mb-2">{e.name}</div>
              <p className="text-sm text-zinc-500 leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What we do for AEO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h3 className="font-display text-3xl md:text-4xl text-zinc-900 uppercase leading-tight mb-4">
                How we optimize for AI answers
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-6">
                AEO isn't a checklist you bolt on. It's a set of structural decisions built into every page we create or optimize — from how content is written to how schemas are coded.
              </p>
              {/* AEO Answer Box — a short, citable fact block */}
              <div
                className="bg-zinc-900 rounded-xl p-5 border-l-4 border-primary"
                data-aeo-answer="true"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3">
                  AEO Definition
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  <strong className="text-white">Answer Engine Optimization (AEO)</strong> is the practice of structuring web content so AI systems — including ChatGPT, Google SGE, and Perplexity — identify it as the most accurate, authoritative answer and cite it in their generated responses.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tactics.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <t.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-zinc-900 text-lg mb-2 leading-tight">{t.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* AEO stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-zinc-900 rounded-2xl p-8"
        >
          {[
            { stat: "56%", label: "of HVAC Google searches now trigger an AI Overview above organic results" },
            { stat: "3×", label: "more cited sources come from pages with complete structured data / schema" },
            { stat: "2027", label: "projected year AI-generated answers surpass click-through to traditional results" },
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
// OUR PROCESS
// =============================================================================
const OurProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Deep Market & Competitor Audit",
      duration: "Week 1",
      body: "We analyze your current rankings, backlink profile, technical health, and map out every keyword your 3 closest local competitors rank for. You'll see exactly where you're losing and why.",
      output: "Full market audit PDF + competitor gap report",
    },
    {
      step: "02",
      title: "Keyword & Architecture Blueprint",
      duration: "Week 1–2",
      body: "We design your site's full keyword architecture — which keywords go on which page, which cities need dedicated landing pages, and what the content hierarchy looks like across your entire service area.",
      output: "Keyword map + content structure blueprint",
    },
    {
      step: "03",
      title: "Technical Foundation Fix",
      duration: "Week 2–3",
      body: "Before writing a word of content, we fix the technical bedrock: site speed, crawlability, schema, canonical issues, and mobile optimization. Weak technical SEO means great content can't rank.",
      output: "Site speed score + technical audit resolved",
    },
    {
      step: "04",
      title: "On-Page Optimization & Content Build",
      duration: "Month 1–2",
      body: "Every service page and city page is rewritten or built from scratch — with HVAC-specific copy, keyword-rich H2s, FAQs, and strong CTAs. We write for homeowners, not bots.",
      output: "Optimized service pages + city landing pages",
    },
    {
      step: "05",
      title: "Google Business Profile & Map Pack Campaign",
      duration: "Month 2",
      body: "Full GBP optimization, photo strategy, review velocity campaign, weekly GBP posts, and citation cleanup across 50+ directories. Map Pack rankings start moving within 30-60 days.",
      output: "GBP optimized + citations published",
    },
    {
      step: "06",
      title: "Link Building & Authority Growth",
      duration: "Ongoing",
      body: "We earn Texas-specific backlinks monthly: HVAC trade publications, local directories, community sponsor links, and press mentions. Authority grows compound — each link makes the next one more powerful.",
      output: "Monthly link report + domain authority growth",
    },
    {
      step: "07",
      title: "Track, Report & Compound",
      duration: "Monthly",
      body: "Live dashboard updated daily. Monthly video from your account lead explaining rankings, traffic, leads, and next-month priorities. No black box. Every dollar traced to a result.",
      output: "Live dashboard + monthly strategy video",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-[160px]" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-amber-100/30 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Our 7-Step Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            How we take you from<br />
            <span className="text-primary">page 3 to #1.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            A systematic, repeatable process built specifically for Texas HVAC companies. No guessing. No waiting six months for a "strategy phase."
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
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
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 md:w-[88px] md:h-[88px] rounded-full bg-gradient-to-br from-primary to-orange-600 flex flex-col items-center justify-center text-white shadow-lg shadow-primary/30 flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Step</span>
                  <span className="font-display text-2xl md:text-3xl leading-none">{s.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border border-zinc-200 rounded-xl p-6 md:p-7 hover:border-primary hover:shadow-lg transition-all group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-xl md:text-2xl text-zinc-900 uppercase leading-tight">
                      {s.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider flex-shrink-0">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-zinc-600 leading-relaxed mb-4">{s.body}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-zinc-100">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-bold text-zinc-700">Deliverable: {s.output}</span>
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
// KEYWORD STRATEGY
// =============================================================================
const KeywordStrategy = () => {
  const keywords = [
    { kw: "AC repair Dallas", vol: "2,400/mo", intent: "Emergency", diff: "Medium", rank: "#1–3" },
    { kw: "HVAC installation Houston", vol: "1,800/mo", intent: "Commercial", diff: "High", rank: "#1–5" },
    { kw: "emergency AC repair San Antonio", vol: "1,200/mo", intent: "Emergency", diff: "Medium", rank: "#1–3" },
    { kw: "air conditioner replacement Austin", vol: "880/mo", intent: "Commercial", diff: "Medium", rank: "#1–4" },
    { kw: "HVAC tune-up Fort Worth", vol: "720/mo", intent: "Maintenance", diff: "Low", rank: "#1–2" },
    { kw: "best AC company near me", vol: "9,900/mo", intent: "Research", diff: "High", rank: "#2–6" },
    { kw: "AC not cooling home Dallas", vol: "590/mo", intent: "Emergency", diff: "Low", rank: "#1–3" },
    { kw: "HVAC contractor Houston TX", vol: "1,100/mo", intent: "Commercial", diff: "Medium", rank: "#1–4" },
  ];

  const intentColors: Record<string, string> = {
    Emergency: "bg-red-100 text-red-700 border-red-200",
    Commercial: "bg-blue-100 text-blue-700 border-blue-200",
    Maintenance: "bg-green-100 text-green-700 border-green-200",
    Research: "bg-purple-100 text-purple-700 border-purple-200",
  };

  const diffColors: Record<string, string> = {
    Low: "text-green-600",
    Medium: "text-amber-600",
    High: "text-red-500",
  };

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[160px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Search className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Texas HVAC Keyword Strategy
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-4">
            We don't guess.<br />
            <span className="text-primary">We rank these exact keywords.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Sample of the keywords we actively rank Texas HVAC clients for. Each is tracked daily and tied to real call and lead volume.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full" data-testid="table-keywords">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 pr-6 text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Keyword</th>
                <th className="text-left py-4 pr-6 text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Monthly Volume</th>
                <th className="text-left py-4 pr-6 text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Search Intent</th>
                <th className="text-left py-4 pr-6 text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Difficulty</th>
                <th className="text-left py-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Avg. Client Rank</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((k, i) => (
                <motion.tr
                  key={k.kw}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group"
                >
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0" />
                      <span className="text-white font-bold">{k.kw}</span>
                    </div>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="text-zinc-300 font-bold">{k.vol}</span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className={`px-2.5 py-1 rounded-md border text-[11px] font-bold uppercase tracking-wider ${intentColors[k.intent]}`}>
                      {k.intent}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className={`font-bold text-sm ${diffColors[k.diff]}`}>{k.diff}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-primary font-bold">{k.rank}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-zinc-600 mt-4"
        >
          * Rankings represent average positions achieved for clients in their specific service areas. Individual results vary by market and competition.
        </motion.p>
      </div>
    </section>
  );
};

// =============================================================================
// RESULTS / MINI CASE STUDIES
// =============================================================================
const Results = () => {
  const cases = [
    {
      company: "Arctic Air Pros",
      city: "Dallas, TX",
      before: { leads: "8/mo", rank: "Page 3", revenue: "$18K/mo" },
      after: { leads: "47/mo", rank: "#1–3", revenue: "$78K/mo" },
      timeline: "60 days",
      quote: "I stopped paying for HomeAdvisor leads the day our organic calls hit 40 a month. Never looked back.",
    },
    {
      company: "South Texas HVAC Co.",
      city: "Houston, TX",
      before: { leads: "12/mo", rank: "Page 2", revenue: "$31K/mo" },
      after: { leads: "68/mo", rank: "#1–4", revenue: "$127K/mo" },
      timeline: "90 days",
      quote: "The bilingual content strategy alone added 22 Spanish-speaking leads per month we were completely missing.",
    },
    {
      company: "Comfort Zone HVAC",
      city: "San Antonio, TX",
      before: { leads: "5/mo", rank: "Page 4+", revenue: "$14K/mo" },
      after: { leads: "39/mo", rank: "#1–5", revenue: "$61K/mo" },
      timeline: "75 days",
      quote: "They built 14 city pages in 3 weeks. Every single one ranks. I can't believe how fast it moved.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-[160px]" />

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
              Real Texas HVAC Results
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Numbers that make<br />
            <span className="text-primary">HVAC owners cry (happy tears).</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_25px_60px_-15px_rgba(255,107,43,0.25)] hover:-translate-y-1 transition-all"
            >
              {/* Header */}
              <div className="bg-zinc-900 p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-xl text-white uppercase">{c.company}</h3>
                  <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary text-[11px] font-bold uppercase tracking-wider">
                    {c.timeline}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-zinc-400 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {c.city}
                </div>
              </div>

              {/* Before / After */}
              <div className="p-6 border-b border-zinc-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-3">Before</div>
                    <div className="space-y-2">
                      {Object.entries(c.before).map(([key, val]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500 capitalize">{key === "rank" ? "Ranking" : key === "leads" ? "Leads/mo" : "Revenue"}</span>
                          <span className="text-sm font-bold text-zinc-400 line-through">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-l border-zinc-100 pl-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3">After</div>
                    <div className="space-y-2">
                      {Object.entries(c.after).map(([key, val]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500 capitalize">{key === "rank" ? "Ranking" : key === "leads" ? "Leads/mo" : "Revenue"}</span>
                          <span className="text-sm font-bold text-primary">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-6">
                <p className="text-zinc-600 text-[14px] italic leading-relaxed mb-3">"{c.quote}"</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// VS COMPARISON
// =============================================================================
const VsComparison = () => {
  const rows = [
    { feature: "HVAC industry knowledge", us: true, them: false },
    { feature: "Texas market specialization", us: true, them: false },
    { feature: "City page strategy (per zip code)", us: true, them: false },
    { feature: "Seasonal keyword planning", us: true, them: false },
    { feature: "Emergency query optimization", us: true, them: false },
    { feature: "Bilingual SEO (EN + ES)", us: true, them: false },
    { feature: "AEO (AI answer engine) optimization", us: true, them: false },
    { feature: "Direct account access (no middle layer)", us: true, them: false },
    { feature: "Exclusive per service area", us: true, them: false },
    { feature: "Live lead tracking dashboard", us: true, them: true },
    { feature: "Monthly reporting", us: true, them: true },
  ];

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[180px]" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Why Not Just Hire Anyone?
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-4">
            HVAC Digitals vs.<br />
            <span className="text-primary">Generic SEO Agency.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.03]">
            <div className="col-span-6 p-5 text-sm font-bold uppercase tracking-wider text-zinc-500">Feature</div>
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
      q: "How long does HVAC SEO take to work?",
      a: "Most Texas HVAC companies see first-page movement within 60–90 days for mid-difficulty keywords. Emergency and long-tail queries often rank within 30 days. Full service-area dominance — owning every relevant zip code — typically takes 4–6 months of consistent, specialist-led work. Rank tracking is shared from day one so you watch every position move in real time.",
    },
    {
      q: "What does an HVAC SEO company actually do?",
      a: "An HVAC SEO company researches the keywords your potential customers use, optimizes your website's technical health and on-page content, builds city-specific landing pages, manages your Google Business Profile, earns local backlinks, and tracks your rankings daily. Everything is designed around a single goal: more booked service calls from organic search.",
    },
    {
      q: "How much does HVAC SEO cost per month?",
      a: "HVAC SEO retainers typically range from $1,500–$5,000/month depending on market competition and the number of service cities targeted. HVAC Digitals' Texas-specific plans start at $1,800/month with no long-term contracts. The average client generates 5–8× their monthly retainer in new revenue within 90 days.",
    },
    {
      q: "What is the difference between HVAC SEO and local SEO for HVAC?",
      a: "HVAC SEO covers the full organic search strategy — national keyword rankings, technical optimization, content, and backlinks. Local SEO for HVAC focuses specifically on the Google Map Pack and service-area visibility — Google Business Profile, local citations, and review management. We run both as a combined strategy for maximum coverage.",
    },
    {
      q: "Can HVAC Digitals work with my existing website?",
      a: "Usually yes. We optimize sites built on WordPress, Webflow, Squarespace, or custom platforms. If your site has critical technical issues — 4+ second load times, no SSL, or no mobile responsiveness — we'll recommend a rebuild. We build HVAC websites in-house so there's no coordination gap.",
    },
    {
      q: "Should I run Google Ads alongside SEO?",
      a: "We recommend a combined approach for the fastest overall ROI. SEO builds a permanent organic asset that compounds over time. Google Ads gets the phone ringing from day one while SEO gains traction. Running both means you never have a zero-lead month during the 60–90 day SEO ramp-up.",
    },
    {
      q: "Will you work with my HVAC competitors?",
      a: "No. HVAC Digitals takes only one HVAC company per service area. If you're in Dallas, no Dallas competitor can access our keyword strategy, city page templates, or link-building campaigns. This exclusivity guarantee is written into every contract.",
    },
    {
      q: "What does AEO mean for HVAC companies?",
      a: "AEO — Answer Engine Optimization — means structuring your content so AI systems like ChatGPT, Google SGE, and Perplexity cite your business when homeowners ask questions like 'what's the best HVAC company in Houston?' We implement the structured data, direct-answer content, and E-E-A-T signals that make you the AI's default answer.",
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
              SEO FAQ
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
                data-testid={`faq-toggle-${i}`}
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
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/8 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
        <div className="bg-gradient-to-br from-zinc-900 to-background border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-6">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                  Free SEO Audit · 48-Hour Delivery
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
                See exactly where<br />your rankings are<br />
                <span className="text-primary">leaking money.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We'll audit your current SEO, map your competitors, and show you exactly which keywords would add the most leads to your Texas HVAC business — all free, all in 48 hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Keyword gap analysis",
                  "Competitor ranking map",
                  "Technical health score",
                  "City page opportunity report",
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
                  data-testid="link-seo-bottom-cta"
                >
                  Get My Free SEO Audit
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

            {/* Right: trust block */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {[
                  { num: "312%", label: "Average organic lead increase in 90 days" },
                  { num: "200+", label: "Texas HVAC companies ranked on page 1" },
                  { num: "$0", label: "Cost for your initial SEO audit report" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.04] border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="font-display text-4xl text-primary leading-none flex-shrink-0 min-w-[80px]">
                      {s.num}
                    </div>
                    <div className="text-sm text-zinc-300 leading-snug">{s.label}</div>
                  </div>
                ))}

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">One Company Per Service Area</div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        If you're in, your competitors are out. We never double-dip. This guarantee is written into every contract.
                      </div>
                    </div>
                  </div>
                </div>
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
export default function SeoService() {
  useEffect(() => {
    // Inject JSON-LD structured data for AEO
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HVAC SEO Services",
        "serviceType": "Search Engine Optimization",
        "description": "Specialized SEO and Answer Engine Optimization (AEO) services for HVAC companies in Texas. We rank heating and cooling contractors at the top of Google, Google Maps, and AI-generated answer engines like ChatGPT, Perplexity, and Google SGE.",
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
          "price": "1800",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1800",
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
            "name": "How long does HVAC SEO take to work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Texas HVAC companies see first-page movement within 60–90 days for mid-difficulty keywords. Emergency and long-tail queries often rank within 30 days. Full service-area dominance typically takes 4–6 months of consistent, specialist-led work.",
            },
          },
          {
            "@type": "Question",
            "name": "What does an HVAC SEO company actually do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An HVAC SEO company researches the keywords your potential customers use, optimizes your website's technical health and on-page content, builds city-specific landing pages, manages your Google Business Profile, earns local backlinks, and tracks your rankings daily.",
            },
          },
          {
            "@type": "Question",
            "name": "How much does HVAC SEO cost per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVAC SEO retainers typically range from $1,500–$5,000/month depending on market competition and the number of service cities targeted. HVAC Digitals' Texas-specific plans start at $1,800/month with no long-term contracts.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the difference between HVAC SEO and local SEO for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVAC SEO covers the full organic search strategy — keyword rankings, technical optimization, content, and backlinks. Local SEO for HVAC focuses specifically on the Google Map Pack — Google Business Profile, local citations, and review management.",
            },
          },
          {
            "@type": "Question",
            "name": "What does AEO mean for HVAC companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEO (Answer Engine Optimization) means structuring your content so AI systems like ChatGPT, Google SGE, and Perplexity cite your business when homeowners ask questions like 'what's the best HVAC company in Houston?' It involves structured data, direct-answer content blocks, and E-E-A-T authority signals.",
            },
          },
          {
            "@type": "Question",
            "name": "Will HVAC Digitals work with my competitors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. HVAC Digitals takes only one HVAC company per service area. This exclusivity guarantee is written into every contract.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How HVAC SEO Works: 7-Step Process",
        "description": "A step-by-step guide to how HVAC Digitals implements SEO for Texas HVAC companies to achieve first-page Google rankings.",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Deep Market & Competitor Audit", "text": "Analyze current rankings, backlink profile, and map every keyword competitors rank for." },
          { "@type": "HowToStep", "position": 2, "name": "Keyword & Architecture Blueprint", "text": "Design the full keyword architecture — which keywords go on which page and which cities need dedicated landing pages." },
          { "@type": "HowToStep", "position": 3, "name": "Technical Foundation Fix", "text": "Fix site speed, crawlability, schema, canonical issues, and mobile optimization." },
          { "@type": "HowToStep", "position": 4, "name": "On-Page Optimization & Content Build", "text": "Rewrite or build every service page and city page with HVAC-specific copy and keyword targeting." },
          { "@type": "HowToStep", "position": 5, "name": "Google Business Profile & Map Pack Campaign", "text": "Full GBP optimization, review velocity campaign, and citation cleanup across 50+ directories." },
          { "@type": "HowToStep", "position": 6, "name": "Link Building & Authority Growth", "text": "Earn Texas-specific backlinks monthly from HVAC trade publications and local directories." },
          { "@type": "HowToStep", "position": 7, "name": "Track, Report & Compound", "text": "Daily rank tracking, monthly video reporting, and continuous optimization based on ranking data." },
        ],
      },
    ];

    const existingScripts = document.querySelectorAll('script[data-seo-schema]');
    existingScripts.forEach((s) => s.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Update page title and meta description for AEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Texas's #1 HVAC SEO agency. We rank HVAC companies at the top of Google, Google Maps, ChatGPT, Perplexity, and AI Overviews. 312% avg. organic lead increase in 90 days. Free audit.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Texas's #1 HVAC SEO agency. We rank HVAC companies at the top of Google, Google Maps, ChatGPT, Perplexity, and AI Overviews. 312% avg. organic lead increase in 90 days. Free audit.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelectorAll('script[data-seo-schema]').forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC SEO Services Texas | Rank #1 on Google | HVAC Digitals"
        description="Dominate Google search for every HVAC keyword in your Texas market. Our SEO strategies are built exclusively for HVAC contractors across Houston, Dallas, San Antonio & beyond."
        canonical="https://hvacdigitals.com/services/seo"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HVAC SEO Services",
          "description": "Dominate Google search for every HVAC keyword in your Texas market.",
          "serviceType": "Search Engine Optimization",
          "areaServed": { "@type": "State", "name": "Texas" },
          "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
          "url": "https://hvacdigitals.com/services/seo",
        }}
      />
      <Navbar />
      <main>
        <PageHeader />
        <TheProblem />
        <WhatsIncluded />
        <AeoSection />
        <OurProcess />
        <KeywordStrategy />
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
