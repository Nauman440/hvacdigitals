"use client";
import React, { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Sparkles,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Zap,
  Phone,
  ChevronDown,
  Star,
  Shield,
  Search,
  Globe,
  MessageSquare,
  Building2,
  Navigation,
  Award,
  AlertTriangle,
  XCircle,
  Flame,
  Clock,
  Users,
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
type LocalSeoFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  mapPackPosition: string;
  challenge: string;
};

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState<LocalSeoFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    mapPackPosition: "",
    challenge: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof LocalSeoFormData, string>>>({});

  const update = (k: keyof LocalSeoFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const updateSelect = (k: keyof LocalSeoFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof LocalSeoFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof LocalSeoFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.mapPackPosition) e.mapPackPosition = "Required";
    if (!data.challenge.trim()) e.challenge = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Current Map Pack Position: ${data.mapPackPosition}\nWebsite: ${data.website}\nChallenge: ${data.challenge}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "Local SEO & Google Maps", message }),
    });
    setSubmitted(true);
    toast({
      title: "Local SEO audit request received",
      description: "We will analyse your Map Pack presence and reach out within 1 business hour.",
    });
  };

  const inputCls = "h-11 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary";

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-2">You are In.</h3>
        <p className="text-sm text-white/70">
          Your free local SEO audit is on the way. We reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Free Map Pack Audit · Worth $1,000
          </div>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
            Get Your Free <span className="text-primary">Local SEO Audit</span> Now
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
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-localseo-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-localseo-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-localseo-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-localseo-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-localseo-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Website</label>
                <Input value={data.website} onChange={update("website")} placeholder="yourhvac.com" className={inputCls} data-testid="input-localseo-website" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Current Map Pack Position</label>
              <Select value={data.mapPackPosition} onValueChange={updateSelect("mapPackPosition")}>
                <SelectTrigger className={inputCls} data-testid="select-localseo-position">
                  <SelectValue placeholder="Where do you rank today?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top3">Top 3 (Map Pack) — want to hold it</SelectItem>
                  <SelectItem value="4-10">Position 4–10 — almost there</SelectItem>
                  <SelectItem value="11+">Position 11+ — not visible</SelectItem>
                  <SelectItem value="none">Not ranking at all</SelectItem>
                </SelectContent>
              </Select>
              {errors.mapPackPosition && <p className="text-xs text-red-400 mt-1">{errors.mapPackPosition}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest Local SEO Challenge</label>
              <Textarea
                value={data.challenge}
                onChange={update("challenge")}
                placeholder="e.g. Not showing in the Map Pack, competitors outranking me locally, not enough reviews..."
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-localseo-challenge"
              />
              {errors.challenge && <p className="text-xs text-red-400 mt-1">{errors.challenge}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-localseo-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-localseo-submit">
                Get My Free Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </form>

      <p className="text-[11px] text-white/40 text-center mt-4 leading-snug">
        100% free. No credit card. We will never spam you or share your info.
      </p>
    </div>
  );
};

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => {
  const stats = [
    { value: "Top 3", label: "Map Pack in 30–60 days" },
    { value: "78%", label: "Near-me searches call within 24 hrs" },
    { value: "3×", label: "More leads from Map Pack vs. organic" },
  ];

  const trust = [
    "No long-term contracts",
    "1 company per service area",
    "Real-time rank tracking",
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
          <span className="text-white font-bold">Local SEO for HVAC</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                HVAC Local SEO &amp; Map Pack Domination
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              Own the Map.<br />
              Own Your<br />
              <span className="text-primary">Texas Market.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              When a homeowner searches for HVAC repair near them, the top 3 Map Pack results get 44% of all clicks. We put Texas HVAC companies in those three spots — and keep them there.
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
      icon: Building2,
      title: "Incomplete Google Business Profile",
      body: "A half-filled GBP is invisible in the Map Pack. Missing service categories, no photos, no service areas defined, and no posts — Google ranks you lower than a competitor who fills in every field.",
    },
    {
      icon: Star,
      title: "Not enough reviews — or the wrong ones",
      body: "Map Pack rank is directly tied to your review count, recency, and response rate. Most HVAC companies have fewer than 15 reviews. The top Map Pack positions average 85+ with a 4.8+ rating.",
    },
    {
      icon: Globe,
      title: "Inconsistent NAP across the web",
      body: "Name, Address, and Phone inconsistencies across Yelp, Angi, HomeAdvisor, and 50+ directories confuse Google and suppress your local rankings. One wrong suite number kills your Map Pack position.",
    },
    {
      icon: Navigation,
      title: "Not targeting the right service areas",
      body: "Texas HVAC searches are hyper-local. Ranking in Dallas does nothing for a homeowner searching in Brandon or Wesley Chapel. Without proper service area pages, you are invisible in the suburbs where your real customers live.",
    },
    {
      icon: MessageSquare,
      title: "No local content strategy",
      body: "Generic service pages do not rank locally. Google rewards location-specific content — city pages that mention local landmarks, neighborhoods, and seasonal HVAC problems specific to that zip code.",
    },
    {
      icon: Search,
      title: "Missing local schema markup",
      body: "LocalBusiness and Service schema tell Google exactly what you do, where you operate, and when you are open. Without it, you are leaving Map Pack signals on the table that your competitors are already using.",
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
              Why You Are Not in the Map Pack
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Six reasons your<br />
            <span className="text-primary">local rivals outrank you.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            The Map Pack is the highest-converting real estate in local search. These are the six factors keeping most Texas HVAC companies out of it.
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
              className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-red-200 hover:shadow-md transition-all"
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
// MAP PACK SECTION
// =============================================================================
const MapPackSection = () => {
  const factors = [
    {
      icon: MapPin,
      title: "Proximity",
      pct: "~33%",
      body: "How close the searcher is to your registered business address. We ensure your GBP address, service area boundaries, and citation data all align to maximise proximity signals.",
    },
    {
      icon: Award,
      title: "Prominence",
      pct: "~34%",
      body: "Your overall authority — reviews, backlinks, citations, and brand mentions. We build prominence systematically: review campaigns, 100+ citations, and local link building every month.",
    },
    {
      icon: Search,
      title: "Relevance",
      pct: "~33%",
      body: "How closely your GBP matches what the searcher needs. We optimise every category, service, keyword-rich description, and Q&A section to maximise relevance for every HVAC search query.",
    },
  ];

  const tactics = [
    "GBP category optimisation (primary + secondary)",
    "Weekly GBP posts with local keywords",
    "Photo strategy (interior, exterior, team, before/after)",
    "Product and service listings with optimised descriptions",
    "Q&A seeding with HVAC-specific answers",
    "Google Messaging activation and monitoring",
    "Booking button integration (if applicable)",
    "Monthly GBP performance review and updates",
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
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              How the Map Pack Works
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Three signals.<br />
            <span className="text-primary">One Map Pack spot.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Google ranks local businesses in the Map Pack using three core signals. We engineer all three simultaneously — most agencies only touch one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {factors.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:border-primary/40 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-display text-4xl text-primary mb-1">{f.pct}</div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-3">{f.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        {/* GBP deep dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <Building2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  Google Business Profile
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white mb-4 leading-tight">
                Your GBP is your most<br />
                <span className="text-primary">valuable local asset.</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Your Google Business Profile — not your website — is what shows up first when homeowners search for HVAC near them. We treat it like the storefront it is: always updated, always optimised, always generating calls.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tactics.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-xl p-4 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300 leading-snug">{t}</span>
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
// WHAT'S INCLUDED
// =============================================================================
const WhatsIncluded = () => {
  const services = [
    {
      icon: Building2,
      title: "Google Business Profile Optimisation",
      tag: "All Plans",
      items: [
        "Full GBP audit and category optimisation",
        "Service listings with keyword-rich descriptions",
        "Photo strategy and upload schedule",
        "Weekly GBP posts with local HVAC content",
        "Q&A seeding and monitoring",
        "GBP performance report (monthly)",
      ],
    },
    {
      icon: Globe,
      title: "Citation Building & NAP Cleanup",
      tag: "All Plans",
      items: [
        "Full NAP audit across 100+ directories",
        "Correction of inconsistent listings",
        "New citation submissions (Yelp, Angi, BBB, etc.)",
        "Industry-specific HVAC directory placements",
        "Ongoing citation monitoring",
        "Duplicate listing removal",
      ],
    },
    {
      icon: Star,
      title: "Review Velocity Campaign",
      tag: "Accelerator+",
      items: [
        "Post-job SMS review request automation",
        "QR code review cards for technicians",
        "Review response templates and management",
        "Negative review mitigation strategy",
        "Review platform diversification (Google, Yelp, Facebook)",
        "Monthly review performance report",
      ],
    },
    {
      icon: MapPin,
      title: "City & Neighborhood Pages",
      tag: "Accelerator+",
      items: [
        "Unique landing pages per city and suburb",
        "Neighborhood-level keyword targeting",
        "Local landmark and area references",
        "City-specific HVAC content and FAQs",
        "Internal linking from service pages",
        "Monthly page creation based on demand data",
      ],
    },
    {
      icon: Search,
      title: "Local Schema & Technical Setup",
      tag: "All Plans",
      items: [
        "LocalBusiness structured data implementation",
        "Service schema per HVAC service type",
        "GeoCoordinates and opening hours markup",
        "Review and aggregate rating schema",
        "Breadcrumb and site link schema",
        "Schema validation and Google Search Console monitoring",
      ],
    },
    {
      icon: BarChart3,
      title: "Reporting & Rank Tracking",
      tag: "All Plans",
      items: [
        "Daily Map Pack rank tracking per keyword per city",
        "Live reporting dashboard",
        "Monthly local SEO performance video",
        "GBP insights (calls, directions, website clicks)",
        "Competitor rank monitoring",
        "Quarterly strategy review call",
      ],
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
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Full Local SEO Service
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Every local signal.<br />
            <span className="text-primary">Fully managed.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Local SEO is not a single tactic — it is a system of interconnected signals that compound over time. We manage every signal that determines whether you appear in the Map Pack or not.
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
              className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight text-zinc-900 mb-4 leading-tight">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
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
// OUR PROCESS
// =============================================================================
const OurProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Local Presence Audit",
      duration: "Day 1–3",
      body: "We audit your entire local footprint: GBP completeness, citation consistency across 100+ directories, review count and velocity, current Map Pack rankings per keyword and city, and competitor positioning. You get a score for every local signal before we touch anything.",
      output: "Local presence audit report + competitor Map Pack analysis",
    },
    {
      step: "02",
      title: "Google Business Profile Overhaul",
      duration: "Week 1",
      body: "We rebuild your GBP from the ground up: primary and secondary category selection, service listings, keyword-optimised business description, photo upload (minimum 25 images), service area definition, opening hours, and booking integration. Most clients see Map Pack movement within 2 weeks of this step alone.",
      output: "Fully optimised GBP + photo library published",
    },
    {
      step: "03",
      title: "Citation Cleanup & Build",
      duration: "Week 1–2",
      body: "We fix every NAP inconsistency across Yelp, Angi, HomeAdvisor, BBB, Facebook, Apple Maps, and 50+ other directories. Then we build fresh citations in the 100+ directories Google trusts for HVAC authority signals. Consistent NAP = stronger proximity and prominence signals.",
      output: "100+ citations live + inconsistencies resolved",
    },
    {
      step: "04",
      title: "Review Velocity Campaign Launch",
      duration: "Week 2",
      body: "We deploy a systematic review generation campaign: automated post-job SMS requests, printed QR code cards for technicians, and a response workflow for every incoming review. Most clients add 20–30 new reviews in the first 60 days — which alone can move you from position 6 to position 2.",
      output: "Review system live + first wave of new reviews",
    },
    {
      step: "05",
      title: "City & Neighbourhood Pages",
      duration: "Month 1–2",
      body: "We build dedicated landing pages for every city and suburb in your service area — not generic templates, but pages with local content, area-specific HVAC problems, neighbourhood landmarks, and keyword-rich FAQs. Each page targets the exact searches homeowners in that zip code type.",
      output: "City pages live + internal linking structure built",
    },
    {
      step: "06",
      title: "Ongoing Optimisation & Compound Growth",
      duration: "Monthly",
      body: "Every month: GBP posts published weekly, new reviews generated, citations monitored, rankings tracked daily, and one new city page added. Local SEO compounds — the citations, reviews, and content you build in month one make month six dramatically more powerful.",
      output: "Monthly performance report + live dashboard + rank tracking",
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
            Map Pack top 3<br />
            <span className="text-primary">in 30 to 60 days.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Local SEO moves faster than organic SEO. A complete GBP overhaul combined with citation cleanup and a review surge can shift Map Pack positions within 30 days.
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
      company: "Clearwater Comfort HVAC",
      city: "Clearwater, TX",
      before: "Position 11",
      after: "Position 2",
      timeline: "38 days",
      stat1: { val: "4.1×", label: "Increase in GBP calls" },
      stat2: { val: "87", label: "New 5-star reviews in 60 days" },
      result: "Started with an abandoned GBP, 12 reviews, and zero Map Pack visibility. After a full GBP overhaul, 80+ new citations, and a review campaign, they hit position 2 in Clearwater within 38 days.",
    },
    {
      company: "St. Pete Air Solutions",
      city: "St. Petersburg, TX",
      before: "Not ranking",
      after: "Top 3 in 4 cities",
      timeline: "60 days",
      stat1: { val: "220%", label: "Increase in GBP direction requests" },
      stat2: { val: "Top 3", label: "In St. Pete, Pinellas Park, Largo, Seminole" },
      result: "Operating in a competitive market with no GBP strategy. We launched a multi-city campaign covering 4 service areas simultaneously. All four hit top 3 Map Pack within 60 days.",
    },
    {
      company: "El Paso Cool Air",
      city: "El Paso, TX",
      before: "Position 5",
      after: "Position 1",
      timeline: "45 days",
      stat1: { val: "3.8×", label: "More calls from Google Maps" },
      stat2: { val: "94%", label: "5-star review rate (61 new reviews)" },
      result: "Already had a GBP but weak review velocity and citation inconsistencies. After cleanup and a tech-facing review card program, they moved from position 5 to number 1 in 45 days.",
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
              Texas Client Results
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Map Pack moves.<br />
            <span className="text-primary">Real Texas companies.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Every case below shows the before and after Map Pack position, the timeline, and the business impact — tracked and verified.
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
                <div className="text-right flex-shrink-0">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">{c.timeline}</div>
                  <div className="text-[10px] uppercase tracking-wider text-primary font-bold">to results</div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-5 bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="text-center flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Before</div>
                  <div className="font-display text-xl text-zinc-400">{c.before}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-center flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">After</div>
                  <div className="font-display text-xl text-primary">{c.after}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <div className="font-display text-2xl text-primary leading-none mb-1">{c.stat1.val}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold leading-snug">{c.stat1.label}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <div className="font-display text-2xl text-primary leading-none mb-1">{c.stat2.val}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold leading-snug">{c.stat2.label}</div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">{c.result}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-4 gap-4 bg-zinc-900 rounded-2xl p-8"
        >
          {[
            { stat: "44%", label: "Of all local HVAC clicks go to the top 3 Map Pack results" },
            { stat: "30 days", label: "Average time to first Map Pack position movement" },
            { stat: "3×", label: "More calls generated by Map Pack vs. organic listings" },
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
    { feature: "Full GBP audit and category optimisation", them: false },
    { feature: "Weekly GBP posts with local HVAC content", them: false },
    { feature: "Citation cleanup across 100+ directories", them: false },
    { feature: "Review velocity campaign (SMS + QR cards)", them: false },
    { feature: "City and neighbourhood landing pages", them: true },
    { feature: "LocalBusiness and Service schema markup", them: false },
    { feature: "Daily Map Pack rank tracking per city", them: false },
    { feature: "Competitor Map Pack monitoring", them: false },
    { feature: "Exclusivity — 1 company per service area", them: false },
    { feature: "Monthly performance video from account lead", them: false },
    { feature: "GBP photo strategy and upload management", them: false },
    { feature: "Multi-city Map Pack campaign", them: false },
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
            Why generic agencies miss<br />
            <span className="text-primary">local signals entirely.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Most SEO agencies set up a GBP and call it local SEO. Real local dominance requires a dozen interconnected signals managed every single month.
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
      q: "How long does local SEO take for an HVAC company?",
      a: "Map Pack movement is typically faster than organic SEO. Most Texas HVAC companies see their first position changes within 30 days of a full GBP overhaul and citation cleanup. Top 3 Map Pack placement in a single city usually takes 30 to 60 days. Multi-city dominance across your full service area takes 3 to 4 months of consistent work. Review velocity and ongoing content creation compound the results month over month.",
    },
    {
      q: "What is the Google Map Pack and why does it matter for HVAC?",
      a: "The Google Map Pack — also called the Local Pack — is the block of three local business listings that appears at the top of Google search results for queries like HVAC repair near me or AC company in Dallas. These three positions get 44% of all clicks for local HVAC searches. Being outside the top 3 means you are effectively invisible for the highest-intent searches in your market.",
    },
    {
      q: "How does local SEO differ from regular HVAC SEO?",
      a: "Regular SEO targets organic (blue link) rankings on Google. Local SEO targets the Map Pack — the map-based listings that appear above organic results. Both matter, but Map Pack positions typically generate 3x more calls than equivalent organic positions because they show ratings, hours, and a direct call button. We run both as a combined strategy for maximum coverage across all result types.",
    },
    {
      q: "How many reviews does an HVAC company need to rank in the Map Pack?",
      a: "In most Texas markets, the top 3 Map Pack positions average 60 to 120 reviews with a 4.7 or higher rating. The exact threshold depends on your market — smaller cities may only need 30 reviews, while Houston or Dallas can require 150+. We audit the review counts of your current top 3 competitors and build a review generation target specifically for your market.",
    },
    {
      q: "What is NAP consistency and why does it affect my rankings?",
      a: "NAP stands for Name, Address, and Phone number. Google cross-references your business information across hundreds of directories, social profiles, and data aggregators to verify you are a legitimate local business. When your name is spelled differently on Yelp versus Angi, or your old phone number still appears on HomeAdvisor, Google loses confidence in your listing and suppresses your Map Pack position. We clean up every inconsistency.",
    },
    {
      q: "Do I need city landing pages for local SEO?",
      a: "Yes — for any HVAC company serving multiple cities or suburbs. A single page optimised for Dallas cannot rank for HVAC in Brandon, Wesley Chapel, or Temple Terrace. Each suburb is a separate local market with its own search volume and competition. We build unique, keyword-rich landing pages for each service city, properly linked to your GBP service area, so you capture searches across your entire footprint.",
    },
    {
      q: "Can you get my HVAC company into the Map Pack if I have no reviews?",
      a: "Yes. Reviews are one of three Map Pack signals — proximity and relevance matter equally. A fully optimised GBP with correct categories, complete service listings, consistent citations, and keyword-rich content can move you into the Map Pack before you have significant reviews. Once you are visible, our review velocity campaign accelerates your climb. We have taken companies from zero reviews to top 3 within 60 days.",
    },
    {
      q: "Will HVAC Digitals work with my HVAC competitors?",
      a: "No. We take only one HVAC company per service area. Your GBP strategy, citation profile, review campaign, and city page templates are built exclusively for your company. No competitor in your service area can access our local SEO work for you. This exclusivity is written into every contract.",
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
              Local SEO FAQ
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
                data-testid={`localseo-faq-toggle-${i}`}
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
                  Free Map Pack Audit · 48-Hour Delivery
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
                Find out exactly<br />why you are not in<br />
                <span className="text-primary">the top 3.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We will audit your GBP, citations, reviews, and Map Pack rankings across your entire service area — and show you exactly which signals are suppressing your position. All free. All in 48 hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "GBP completeness score",
                  "Citation inconsistency report",
                  "Review gap vs. top 3 competitors",
                  "Map Pack ranking by keyword and city",
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
                  data-testid="link-localseo-bottom-cta"
                >
                  Get My Free Map Pack Audit
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
                  { num: "44%", label: "Of local HVAC clicks go to the top 3 Map Pack results" },
                  { num: "30 days", label: "Average time to first Map Pack position movement" },
                  { num: "$0", label: "Cost for your initial local SEO audit report" },
                ].map((s, i) => (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 bg-white/[0.04] border border-white/10 rounded-2xl p-5"
                  >
                    <div className="font-display text-4xl text-primary leading-none flex-shrink-0 w-24 text-center">{s.num}</div>
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
export default function LocalSeoService() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HVAC Local SEO Services",
        "serviceType": "Local Search Engine Optimization",
        "description": "Specialized local SEO and Google Map Pack optimisation for HVAC companies in Texas. We rank heating and cooling contractors in the top 3 Google Map Pack positions for their service areas.",
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
          "price": "2200",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "2200",
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
            "name": "How long does local SEO take for an HVAC company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Map Pack movement is typically faster than organic SEO. Most Texas HVAC companies see their first position changes within 30 days of a full GBP overhaul and citation cleanup. Top 3 Map Pack placement in a single city usually takes 30 to 60 days.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the Google Map Pack and why does it matter for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Google Map Pack is the block of three local business listings that appears at the top of Google search results for queries like HVAC repair near me. These three positions get 44% of all clicks for local HVAC searches.",
            },
          },
          {
            "@type": "Question",
            "name": "How many reviews does an HVAC company need to rank in the Map Pack?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In most Texas markets, the top 3 Map Pack positions average 60 to 120 reviews with a 4.7 or higher rating. The exact threshold depends on your market.",
            },
          },
          {
            "@type": "Question",
            "name": "What is NAP consistency and why does it affect my rankings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NAP stands for Name, Address, and Phone number. Google cross-references your business information across hundreds of directories to verify you are a legitimate local business. Inconsistencies suppress your Map Pack position.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How HVAC Local SEO Works: 6-Step Process",
        "description": "A step-by-step guide to how HVAC Digitals implements local SEO for Texas HVAC companies to achieve top 3 Map Pack rankings.",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Local Presence Audit", "text": "Audit GBP completeness, citation consistency, review count, and current Map Pack rankings." },
          { "@type": "HowToStep", "position": 2, "name": "Google Business Profile Overhaul", "text": "Rebuild GBP with correct categories, service listings, photos, and service area definition." },
          { "@type": "HowToStep", "position": 3, "name": "Citation Cleanup and Build", "text": "Fix NAP inconsistencies across 100+ directories and build new citations." },
          { "@type": "HowToStep", "position": 4, "name": "Review Velocity Campaign", "text": "Deploy SMS and QR code review generation campaign." },
          { "@type": "HowToStep", "position": 5, "name": "City and Neighbourhood Pages", "text": "Build dedicated landing pages for every city and suburb in the service area." },
          { "@type": "HowToStep", "position": 6, "name": "Ongoing Optimisation and Compound Growth", "text": "Monthly GBP posts, new reviews, citation monitoring, and rank tracking." },
        ],
      },
    ];

    const existingScripts = document.querySelectorAll("script[data-localseo-schema]");
    existingScripts.forEach((s) => s.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-localseo-schema", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Texas HVAC local SEO specialists. We rank HVAC companies in the top 3 Google Map Pack in 30 to 60 days. GBP optimisation, citation building, review campaigns. Free audit.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Texas HVAC local SEO specialists. We rank HVAC companies in the top 3 Google Map Pack in 30 to 60 days. GBP optimisation, citation building, review campaigns. Free audit.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelectorAll("script[data-localseo-schema]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Local SEO Texas | Dominate Google Map Pack | HVAC Digitals"
        description="Get your HVAC company into Google's Map Pack top 3. We specialize in local SEO for Texas HVAC contractors in Houston, Dallas, San Antonio, Austin & Fort Worth."
        canonical="https://hvacdigitals.com/services/local-seo"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HVAC Local SEO Services",
          "description": "Get your HVAC company into Google's Map Pack top 3 in Texas.",
          "serviceType": "Local Search Engine Optimization",
          "areaServed": { "@type": "State", "name": "Texas" },
          "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
          "url": "https://hvacdigitals.com/services/local-seo",
        }}
      />
      <Navbar />
      <main>
        <PageHeader />
        <TheProblem />
        <MapPackSection />
        <WhatsIncluded />
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
