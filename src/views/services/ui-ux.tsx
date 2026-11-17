"use client";
import React, { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Zap,
  Phone,
  ChevronDown,
  Star,
  Shield,
  Layers,
  Smartphone,
  MousePointerClick,
  BarChart3,
  Eye,
  Palette,
  Layout,
  Clock,
  AlertTriangle,
  XCircle,
  Flame,
  Gauge,
  Repeat,
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
import { ConsentNote } from "@/components/site/ConsentNote";

// =============================================================================
// HERO LEAD FORM (2-step)
// =============================================================================
type UiUxFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  biggestIssue: string;
  notes: string;
};

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState<UiUxFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    biggestIssue: "",
    notes: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof UiUxFormData, string>>>({});

  const update = (k: keyof UiUxFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const updateSelect = (k: keyof UiUxFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof UiUxFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof UiUxFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.biggestIssue) e.biggestIssue = "Required";
    if (!data.notes.trim()) e.notes = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Biggest Issue: ${data.biggestIssue}\nWebsite: ${data.website}\nNotes: ${data.notes}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "UI/UX Design", message }),
    });
    setSubmitted(true);
    toast({
      title: "Design audit request received",
      description: "We will review your site and reach out within 1 business hour.",
    });
  };

  const inputCls = "h-11 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary";

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-2">Design audit incoming.</h3>
        <p className="text-sm text-white/70">
          We will review your site and reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Free Design Audit · Worth $900
          </div>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
            Get Your Free <span className="text-primary">Website Design Audit</span>
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
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 2 ? "text-white" : "text-white/40"}`}>Your Site</span>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>2</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Full Name</label>
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-uiux-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-uiux-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-uiux-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-uiux-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-uiux-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Website URL</label>
                <Input value={data.website} onChange={update("website")} placeholder="yourhvac.com" className={inputCls} data-testid="input-uiux-website" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest Issue with Your Current Site</label>
              <Select value={data.biggestIssue} onValueChange={updateSelect("biggestIssue")}>
                <SelectTrigger className={inputCls} data-testid="select-uiux-issue">
                  <SelectValue placeholder="What is holding your site back?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-leads">Visitors do not call or fill out forms</SelectItem>
                  <SelectItem value="mobile">Looks bad on mobile</SelectItem>
                  <SelectItem value="slow">Loads too slowly</SelectItem>
                  <SelectItem value="outdated">Outdated design — not professional</SelectItem>
                  <SelectItem value="no-trust">No trust signals or reviews visible</SelectItem>
                  <SelectItem value="no-site">I do not have a website yet</SelectItem>
                </SelectContent>
              </Select>
              {errors.biggestIssue && <p className="text-xs text-red-400 mt-1">{errors.biggestIssue}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Tell Us More</label>
              <Textarea
                value={data.notes}
                onChange={update("notes")}
                placeholder="Anything else about your site or what you want to achieve with a redesign..."
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-uiux-notes"
              />
              {errors.notes && <p className="text-xs text-red-400 mt-1">{errors.notes}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-uiux-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-uiux-submit">
                Get My Free Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </form>

      <p className="text-[11px] text-white/40 text-center mt-4 leading-snug">
        100% free. No obligation.
      </p>
      <ConsentNote tone="dark" className="mt-2 text-center" />
    </div>
  );
};

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => {
  const stats = [
    { value: "40%", label: "Avg. conversion rate increase" },
    { value: "72 hrs", label: "To first design concepts" },
    { value: "70%+", label: "HVAC traffic is mobile" },
  ];

  const trust = [
    "HVAC-specific design templates",
    "Conversion-first — every element earns its place",
    "Delivered in under 30 days",
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
          <span className="text-white font-bold">UI/UX Design for HVAC</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Palette className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                HVAC Website Design &amp; Conversion Optimisation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              Does Your HVAC Site<br />
              Convert Visitors Into<br />
              <span className="text-primary">Booked Service Calls?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              We design HVAC websites that convert Texas homeowners into booked service calls — mobile-first, conversion-optimised, and built to load in under 2 seconds. Every design decision is tied to one goal: more calls.
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
              className="flex flex-col gap-y-2"
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
      icon: Smartphone,
      title: "Built for desktop, broken on mobile",
      body: "Over 70% of HVAC searches happen on a phone. If your site is slow to load or hard to tap on mobile, those visitors leave within 3 seconds and call your competitor instead.",
    },
    {
      icon: MousePointerClick,
      title: "No clear call-to-action above the fold",
      body: "Homeowners searching for HVAC repair are in a hurry. If they cannot see a phone number or a book-now button the instant your page loads, they are gone. Most HVAC sites bury their CTA below two paragraphs of company history.",
    },
    {
      icon: Eye,
      title: "No trust signals on the homepage",
      body: "Texas homeowners need to verify you are licensed, insured, and reviewed before they call. Without visible review counts, certifications, and warranty details, your site creates doubt instead of confidence.",
    },
    {
      icon: Gauge,
      title: "Pages that load in 5+ seconds",
      body: "Google research shows that 40% of visitors abandon a site that takes longer than 3 seconds to load. Slow HVAC sites lose almost half their paid ad traffic before a single word is read.",
    },
    {
      icon: Layout,
      title: "Generic templates that look like everyone else",
      body: "Cheap website builders produce HVAC sites that look identical. When homeowners see the same stock photos and blue-and-white layouts everywhere, they have no reason to choose you over the next result.",
    },
    {
      icon: Repeat,
      title: "No conversion testing — ever",
      body: "Most HVAC websites are set and forgotten. Without A/B testing headlines, CTAs, and layouts, you are guessing at what converts. We test continuously and let data choose the winner.",
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
              Why Your Site is Losing Leads
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Why Is Your HVAC Site<br />
            Getting Traffic<br />
            <span className="text-primary">But No Calls?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Getting visitors to your HVAC site is only half the battle. These six design failures are why most of them leave without ever picking up the phone.
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
// CONVERSION PRINCIPLES SECTION
// =============================================================================
const ConversionSection = () => {
  const principles = [
    {
      number: "01",
      title: "Phone number visible in every scroll position",
      body: "A sticky header with a click-to-call button means every homeowner can reach you from any point on the page — not just the top.",
    },
    {
      number: "02",
      title: "Trust signals above the fold",
      body: "License numbers, insurance badges, star ratings, and years-in-business placed within the first viewport — before the visitor has to scroll.",
    },
    {
      number: "03",
      title: "Service-specific landing pages",
      body: "One page per service type (AC repair, installation, maintenance) with tailored headlines, CTAs, and FAQs — not a generic homepage for all traffic.",
    },
    {
      number: "04",
      title: "Mobile-first form and click-to-call",
      body: "On mobile, the primary CTA is always a one-tap call button. Forms are minimal — name and phone only — to reduce friction for emergency searches.",
    },
    {
      number: "05",
      title: "Real photos of your team and trucks",
      body: "Stock photos erode trust. Real photos of your team, vehicles, and completed jobs create an immediate sense of professionalism and local credibility.",
    },
    {
      number: "06",
      title: "Page speed under 2 seconds",
      body: "Every image is compressed and lazy-loaded. Fonts are system-loaded. Unused scripts are removed. We target a Google PageSpeed score of 90+ on mobile.",
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
            <MousePointerClick className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Conversion-First Design
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            What Design Principles<br />
            Make an HVAC Website<br />
            <span className="text-primary">Convert More Leads?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Every design decision we make is validated against one question: does this help a homeowner become a booked service call? These six principles drive every HVAC site we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-primary/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="font-display text-5xl text-primary/20 leading-none mb-3">{p.number}</div>
              <h3 className="font-bold text-white text-lg mb-2 leading-tight">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/[0.04] border border-white/10 rounded-2xl p-8"
        >
          {[
            { stat: "89%", label: "Increase in calls when a click-to-call button is above the fold on mobile" },
            { stat: "40%", label: "Of visitors abandon a site that takes more than 3 seconds to load" },
            { stat: "34%", label: "Higher conversion rate when trust signals (reviews, licenses) are visible without scrolling" },
          ].map((s) => (
            <div key={s.stat} className="text-center px-4">
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
// WHAT'S INCLUDED
// =============================================================================
const WhatsIncluded = () => {
  const services = [
    {
      icon: Layout,
      title: "UX Research & Wireframing",
      tag: "All Plans",
      items: [
        "Heatmap analysis of current site (if applicable)",
        "Competitor site UX audit",
        "User flow mapping (visitor to booked call)",
        "Low-fidelity wireframes for all key pages",
        "Mobile and desktop layouts defined",
        "Stakeholder review round",
      ],
    },
    {
      icon: Palette,
      title: "Visual & Brand Design",
      tag: "All Plans",
      items: [
        "Custom colour palette tied to your brand",
        "Typography system (display + body + UI fonts)",
        "Iconography and illustration style",
        "Photography direction and stock curation",
        "Logo refinement or integration",
        "Full style guide delivered",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      tag: "All Plans",
      items: [
        "Built mobile-first — desktop second",
        "Click-to-call buttons on all mobile views",
        "Touch-optimised navigation and forms",
        "Responsive breakpoints (320px to 1920px)",
        "Google PageSpeed score 90+ on mobile",
        "Core Web Vitals passing (LCP, FID, CLS)",
      ],
    },
    {
      icon: MousePointerClick,
      title: "Conversion Rate Optimisation (CRO)",
      tag: "Accelerator+",
      items: [
        "Above-the-fold CTA audit and redesign",
        "Trust signal placement (reviews, badges, licence)",
        "Form friction analysis and simplification",
        "A/B testing setup (headlines, CTAs, layouts)",
        "Heat mapping and session recording (ongoing)",
        "Monthly CRO report with test results",
      ],
    },
    {
      icon: Layers,
      title: "Service & Landing Pages",
      tag: "All Plans",
      items: [
        "Dedicated page per HVAC service type",
        "City-specific landing pages for SEO",
        "Emergency service pages with urgent CTAs",
        "Seasonal promotion page templates",
        "Testimonial and review showcase sections",
        "FAQ sections per page for AEO",
      ],
    },
    {
      icon: Gauge,
      title: "Speed & Technical Quality",
      tag: "All Plans",
      items: [
        "Image compression and next-gen formats (WebP)",
        "Lazy loading for all below-fold content",
        "Font loading optimisation",
        "Unused CSS and JS removal",
        "CDN configuration",
        "SSL setup and security headers",
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
              Full UI/UX Service
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            What Is Included<br />
            in Our HVAC Website<br />
            <span className="text-primary">Design Service?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            We handle the entire design journey — research, wireframes, visual design, development, and ongoing conversion testing. You review and approve at every stage.
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
      title: "Discovery & Site Audit",
      duration: "Day 1–2",
      body: "We audit your current site (or brief you on starting from scratch): Google PageSpeed scores, mobile usability, CTA placement, trust signal presence, heatmap patterns, and competitor design benchmarks. You get a design scorecard before we start.",
      output: "Design audit report + competitor benchmark + PageSpeed scores",
    },
    {
      step: "02",
      title: "UX Research & Wireframes",
      duration: "Day 3–7",
      body: "We map the visitor journey from landing to calling — and design the information architecture to guide every user toward a conversion. Wireframes are created for every key page: homepage, service pages, city pages, contact, and about.",
      output: "Full wireframe set (desktop and mobile) approved by you",
    },
    {
      step: "03",
      title: "Visual Design & Style Guide",
      duration: "Week 2",
      body: "We apply your brand identity to the wireframes — colours, typography, photography style, and iconography — and produce high-fidelity mockups in Figma. You review and approve before any code is written. We include 2 full revision rounds.",
      output: "High-fidelity Figma designs + style guide delivered",
    },
    {
      step: "04",
      title: "Development & Speed Optimisation",
      duration: "Week 2–3",
      body: "We build your site mobile-first in clean, fast code. Every image is optimised for WebP format. Fonts are loaded efficiently. Core Web Vitals are monitored throughout. We target Google PageSpeed 90+ on mobile before handoff.",
      output: "Fully developed site with 90+ PageSpeed + passing Core Web Vitals",
    },
    {
      step: "05",
      title: "Conversion Testing Setup",
      duration: "Week 3–4",
      body: "Before launch we install heatmapping, session recording, and A/B testing tools. We define the first three experiments: headline variants, CTA button colour and copy, and form length. These run automatically post-launch and feed into monthly optimisation.",
      output: "Heatmapping live + first A/B tests configured",
    },
    {
      step: "06",
      title: "Launch & Ongoing CRO",
      duration: "Ongoing",
      body: "Launch day is the start of optimisation, not the end. Every month we review test results, update the winning variants, and queue new experiments. Sites built on data compound — month 6 conversion rates are always higher than month 1.",
      output: "Monthly CRO report + winning variant deployed + new tests queued",
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
            How Long Does It Take<br />
            To Build a Converting<br />
            <span className="text-primary">HVAC Website?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Most web agencies take 3 to 6 months. We deliver a fully designed, tested, and launched HVAC site in 4 weeks — with your input at every review stage.
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
      company: "Bradenton Air Experts",
      city: "Bradenton, TX",
      stat1: { val: "3.1×", label: "Increase in form submissions" },
      stat2: { val: "1.4s", label: "Page load time (down from 6.2s)" },
      result: "Site was losing 60% of mobile traffic due to a 6-second load time and no mobile CTA. Full redesign with mobile-first architecture and a sticky click-to-call bar tripled form submissions in 45 days.",
    },
    {
      company: "Corpus Christi Home Comfort",
      city: "Corpus Christi, TX",
      stat1: { val: "+47%", label: "Conversion rate increase" },
      stat2: { val: "91", label: "Google PageSpeed score (mobile)" },
      result: "Homepage had no reviews visible, no licence badge, and a contact form hidden below the fold. After a full UX audit and redesign, conversion rate increased 47% within 30 days of launch.",
    },
    {
      company: "Lubbock Cooling Co.",
      city: "Lubbock, TX",
      stat1: { val: "2.8×", label: "More calls from mobile visitors" },
      stat2: { val: "28 days", label: "From design brief to live site" },
      result: "Needed a full site built from scratch. Delivered in 28 days: 8 service pages, 5 city landing pages, mobile-first design, heatmapping installed, and an A/B test on the homepage CTA running on day 1.",
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
            What Results Do Texas<br />
            HVAC Companies Get<br />
            <span className="text-primary">After a Redesign?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Design without data is decoration. Every case below is tracked with real before-and-after numbers from Google Analytics and call tracking.
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
                  <p className="text-sm text-zinc-500 mt-1">{c.city}</p>
                </div>
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
                  <div className="font-display text-2xl text-primary leading-none mb-1">{c.stat1.val}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold leading-snug">{c.stat1.label}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
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
            { stat: "40%", label: "Average conversion rate increase after redesign" },
            { stat: "28 days", label: "Average time from brief to live site" },
            { stat: "90+", label: "Google PageSpeed mobile score on every site we build" },
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
    { feature: "HVAC-specific conversion research before design", them: false },
    { feature: "Mobile-first design (not mobile-adapted)", them: false },
    { feature: "Built to score 90+ on Google PageSpeed (mobile)", them: false },
    { feature: "Dedicated service page per HVAC service type", them: true },
    { feature: "Above-the-fold CTA and click-to-call on all pages", them: false },
    { feature: "Trust signal placement audit and redesign", them: false },
    { feature: "A/B testing setup from day one", them: false },
    { feature: "Heatmapping and session recording installed", them: false },
    { feature: "Monthly CRO report with test results", them: false },
    { feature: "Delivered in under 30 days", them: false },
    { feature: "Exclusivity — 1 company per service area", them: false },
    { feature: "Full Figma source files delivered to you", them: false },
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
              HVAC Digitals vs. Generic Web Designers
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            How Is HVAC Digitals<br />
            Different From a Generic<br />
            <span className="text-primary">Web Designer?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Any designer can make a site look nice. Building one that turns HVAC visitors into booked service calls requires HVAC-specific CRO knowledge most designers never develop.
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
            <div className="col-span-3 p-5 text-center text-sm font-bold uppercase tracking-wider text-zinc-500">Generic Designer</div>
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
      q: "How long does it take to design and build an HVAC website?",
      a: "Our full design and build process takes 4 weeks from brief to live site. Week 1 covers the audit and wireframes. Week 2 delivers high-fidelity visual designs for your approval. Weeks 3 to 4 are development and testing. If you need a faster turnaround for a seasonal campaign, we offer an accelerated 10-day landing page build.",
    },
    {
      q: "What makes an HVAC website different from a general business website?",
      a: "HVAC websites have unique conversion requirements: emergency intent (homeowners who need help now), strong local trust signals (licence numbers, service area, reviews), and mobile-dominant traffic from people searching on the go. A general website template addresses none of these specifically. We design exclusively for HVAC conversion patterns and Texas homeowner behaviour.",
    },
    {
      q: "Will my site rank on Google after the redesign?",
      a: "A redesign alone will not secure rankings — SEO requires ongoing work. However, our sites are built with a clean technical foundation: fast load times, correct header structure, schema markup, and mobile usability — all of which are positive ranking signals. We recommend pairing a redesign with our SEO or Local SEO service for full organic visibility.",
    },
    {
      q: "What is A/B testing and why does it matter for HVAC?",
      a: "A/B testing means showing two versions of a page element to different visitors and measuring which version generates more calls or form submissions. For HVAC, common tests include the headline on the homepage, the call-to-action button colour and copy, and whether a phone number or a form is the primary CTA on mobile. Sites that test continuously always outperform sites that are set and forgotten.",
    },
    {
      q: "What platform will my HVAC website be built on?",
      a: "We build HVAC sites on platforms that give us full control over speed and conversion elements: typically React with a headless CMS for content management, or WordPress with a custom theme if you need your team to update content independently. We do not use drag-and-drop builders that inflate page weight and hurt PageSpeed scores.",
    },
    {
      q: "Do you redesign existing HVAC websites or only build new ones?",
      a: "Both. We handle full rebuilds from scratch and targeted redesigns of specific problem areas — most often the homepage, mobile layout, and service pages. Our process starts with an audit, so we always know which pages are actively losing leads before we recommend what to change.",
    },
    {
      q: "What is included in the free design audit?",
      a: "Our free design audit covers: Google PageSpeed score on mobile and desktop, Core Web Vitals status, mobile usability issues, CTA placement assessment, trust signal visibility check, and a comparison against your top 3 local competitors. You get a written report delivered within 48 hours with specific findings and a prioritised fix list.",
    },
    {
      q: "Will HVAC Digitals design for my competitors?",
      a: "No. We take one HVAC company per service area. Your design system, conversion research, and A/B test learnings are built exclusively for your company. If you are in McAllen, no McAllen competitor accesses your design work. This exclusivity is written into every contract.",
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
              UI/UX Design FAQ
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-4">
            Frequently Asked Questions<br />
            About HVAC<br />
            <span className="text-primary">Website Design.</span>
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
                data-testid={`uiux-faq-toggle-${i}`}
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
                  Free Design Audit · 48-Hour Delivery
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
                Is Your HVAC Site<br />Losing Calls? Find Out<br />
                <span className="text-primary">For Free.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We will audit your HVAC website for speed, mobile usability, conversion issues, and trust signal placement — and deliver a written report with specific fixes in 48 hours. No cost, no obligation.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "PageSpeed score (mobile and desktop)",
                  "Mobile usability issues",
                  "CTA and trust signal placement grade",
                  "Competitor design benchmark",
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
                  data-testid="link-uiux-bottom-cta"
                >
                  Get My Free Design Audit
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
                  { num: "40%", label: "Average conversion rate increase after redesign" },
                  { num: "28 days", label: "Average time from brief to live site" },
                  { num: "$0", label: "Cost for your initial design audit report" },
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
export default function UiUxService() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HVAC Website UI/UX Design",
        "serviceType": "User Interface and User Experience Design",
        "description": "Conversion-optimised UI/UX design and website development for HVAC companies in Texas. Mobile-first sites built to generate calls and booked service jobs, delivered in under 30 days.",
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
            "name": "How long does it take to design and build an HVAC website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our full design and build process takes 4 weeks from brief to live site. Week 1 covers the audit and wireframes, Week 2 delivers high-fidelity designs, and Weeks 3 to 4 are development and testing.",
            },
          },
          {
            "@type": "Question",
            "name": "What makes an HVAC website different from a general business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVAC websites have unique conversion requirements: emergency intent, strong local trust signals, and mobile-dominant traffic. We design exclusively for HVAC conversion patterns and Texas homeowner behaviour.",
            },
          },
          {
            "@type": "Question",
            "name": "What is A/B testing and why does it matter for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A/B testing means showing two versions of a page element to different visitors and measuring which generates more calls. Sites that test continuously always outperform sites that are set and forgotten.",
            },
          },
          {
            "@type": "Question",
            "name": "What is included in the free design audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our free design audit covers Google PageSpeed scores, Core Web Vitals status, mobile usability issues, CTA placement assessment, trust signal visibility, and competitor benchmarking. Delivered in 48 hours.",
            },
          },
        ],
      },
    ];

    const existingScripts = document.querySelectorAll("script[data-uiux-schema]");
    existingScripts.forEach((s) => s.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-uiux-schema", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Texas HVAC website design specialists. Mobile-first, conversion-optimised sites built to generate calls. 40% avg. conversion increase. Free design audit. Delivered in 30 days.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Texas HVAC website design specialists. Mobile-first, conversion-optimised sites built to generate calls. 40% avg. conversion increase. Free design audit. Delivered in 30 days.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelectorAll("script[data-uiux-schema]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC UI/UX Design Texas | Convert Visitors to Calls | HVAC Digitals"
        description="Conversion-focused UI/UX design for HVAC contractor websites. Turn more Texas homeowners into booked appointments and phone calls."
        canonical="https://hvacdigitals.com/services/ui-ux"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HVAC UI/UX Design",
          "description": "Conversion-focused UI/UX design for HVAC contractor websites in Texas.",
          "serviceType": "User Interface and Experience Design",
          "areaServed": { "@type": "State", "name": "Texas" },
          "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
          "url": "https://hvacdigitals.com/services/ui-ux",
        }}
      />
      <Navbar />
      <main>
        <PageHeader />
        <TheProblem />
        <ConversionSection />
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
