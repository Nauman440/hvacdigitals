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
  Shield,
  Code2,
  Gauge,
  Globe,
  Lock,
  Layers,
  Smartphone,
  BarChart3,
  AlertTriangle,
  XCircle,
  Flame,
  RefreshCw,
  Server,
  Wrench,
  Calendar,
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
type WebDevFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  currentSite: string;
  platform: string;
  goal: string;
};

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState<WebDevFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    currentSite: "",
    platform: "",
    goal: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof WebDevFormData, string>>>({});

  const update = (k: keyof WebDevFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      setErrors((er) => ({ ...er, [k]: undefined }));
    };
  const updateSelect = (k: keyof WebDevFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof WebDevFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof WebDevFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.platform) e.platform = "Required";
    if (!data.goal.trim()) e.goal = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Current Site: ${data.currentSite}\nPlatform: ${data.platform}\nGoal: ${data.goal}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "Website Development", message }),
    });
    setSubmitted(true);
    toast({
      title: "Website audit request received",
      description: "We will review your project and reach out within 1 business hour.",
    });
  };

  const inputCls = "h-11 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary";

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-2">Request received.</h3>
        <p className="text-sm text-white/70">
          We will review your project and reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3" /> Free Website Audit · Worth $1,200
        </div>
        <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
          Get Your Free <span className="text-primary">HVAC Website Audit</span> Now
        </h3>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <div className="flex-1 flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>1</div>
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 1 ? "text-white" : "text-white/40"}`}>Contact</span>
        </div>
        <div className={`h-px flex-1 ${step >= 2 ? "bg-primary" : "bg-white/10"}`} />
        <div className="flex-1 flex items-center gap-2 justify-end">
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 2 ? "text-white" : "text-white/40"}`}>Project</span>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>2</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Full Name</label>
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-webdev-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-webdev-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-webdev-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-webdev-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-webdev-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Current Website</label>
                <Input value={data.currentSite} onChange={update("currentSite")} placeholder="yourhvac.com (or none)" className={inputCls} data-testid="input-webdev-site" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Current Platform (if any)</label>
              <Select value={data.platform} onValueChange={updateSelect("platform")}>
                <SelectTrigger className={inputCls} data-testid="select-webdev-platform">
                  <SelectValue placeholder="What is your site built on?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No website yet</SelectItem>
                  <SelectItem value="wix">Wix</SelectItem>
                  <SelectItem value="squarespace">Squarespace</SelectItem>
                  <SelectItem value="wordpress">WordPress</SelectItem>
                  <SelectItem value="servicetitan">ServiceTitan / Jobber site</SelectItem>
                  <SelectItem value="custom">Custom-built</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.platform && <p className="text-xs text-red-400 mt-1">{errors.platform}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Main Goal for Your New Site</label>
              <Textarea
                value={data.goal}
                onChange={update("goal")}
                placeholder="e.g. More calls, better mobile experience, rank on Google, replace an outdated site..."
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-webdev-goal"
              />
              {errors.goal && <p className="text-xs text-red-400 mt-1">{errors.goal}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-webdev-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-webdev-submit">
                Get My Free Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </form>

      <p className="text-[11px] text-white/40 text-center mt-4 leading-snug">
        100% free. No obligation. We will never spam you or share your info.
      </p>
    </div>
  );
};

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => {
  const stats = [
    { value: "30 days", label: "From brief to live site" },
    { value: "90+", label: "PageSpeed score on mobile" },
    { value: "3.8×", label: "More calls vs. template sites" },
  ];

  const trust = [
    "HVAC-specific conversion architecture",
    "Full source code ownership — yours forever",
    "Built for SEO from line one",
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
          <span className="text-white font-bold">Website Development for HVAC</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                HVAC Website Development &amp; Custom Builds
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              What Does a<br />
              High-Converting<br />
              <span className="text-primary">HVAC Website Need?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              Speed, mobile-first code, SEO foundations, and conversion architecture built for the way Texas homeowners search and hire HVAC companies. We build every site to rank, load fast, and turn visitors into booked jobs.
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
  const problems = [
    {
      icon: Gauge,
      title: "Slow page loads from bloated builders",
      body: "Wix, Squarespace, and GoDaddy sites load 4 to 8 seconds on mobile because they serve unnecessary JavaScript and unoptimised assets. Google penalises slow sites in rankings and 40% of visitors leave before the page finishes loading.",
    },
    {
      icon: Smartphone,
      title: "Mobile layouts built as an afterthought",
      body: "Builder templates adapt a desktop layout for mobile rather than designing for mobile first. The result is oversized text, broken navigation, and no visible click-to-call button — the exact things Texas homeowners need when searching from a phone.",
    },
    {
      icon: Globe,
      title: "No technical SEO foundation",
      body: "Template sites ship without proper canonical tags, schema markup, sitemap configuration, or crawl-friendly URL structures. You can spend thousands on SEO content and still fail to rank because the technical foundation is broken.",
    },
    {
      icon: Lock,
      title: "You do not own your website",
      body: "Sites built on Wix, Squarespace, or GoDaddy are locked to that platform. If you cancel, your site disappears. The design, code, and content belong to them — not to you. We build sites you own completely, with full source code delivered.",
    },
    {
      icon: RefreshCw,
      title: "Generic templates with no HVAC intent",
      body: "A plumber template is not an HVAC site. HVAC websites need specific conversion flows for emergency AC repair, seasonal maintenance sign-ups, and multi-service area routing. Builder templates serve every trade the same way, which is to say poorly.",
    },
    {
      icon: Server,
      title: "No integrations with HVAC field software",
      body: "ServiceTitan, Housecall Pro, and Jobber all offer booking integrations. Most template sites cannot connect to them natively, forcing you to run a separate booking link that breaks the user experience and loses conversions.",
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
              Why Most HVAC Websites Fail
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Why Do Most HVAC Websites<br />
            <span className="text-primary">Fail to Generate Calls After Launch?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Most HVAC websites are built on platforms designed for restaurants and photographers, not for service businesses competing for emergency HVAC searches in a specific market. These are the six most common development failures we fix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-red-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-red-400" />
              </div>
              <h4 className="font-bold text-zinc-900 text-lg mb-2 leading-tight">{p.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// TECH STACK SECTION
// =============================================================================
const TechStackSection = () => {
  const stack = [
    {
      icon: Code2,
      name: "React + Vite",
      role: "Frontend Framework",
      why: "Sub-second hot reloads in development and lightning-fast production builds. React gives us component-level control over every conversion element — no template constraints.",
    },
    {
      icon: Globe,
      name: "Next.js / Astro",
      role: "When SEO is the Priority",
      why: "For sites where organic ranking is the primary goal, we use server-side rendering or static generation to ensure Google can crawl and index every page fully on first render.",
    },
    {
      icon: Layers,
      name: "Headless CMS",
      role: "Content Management",
      why: "Sanity or Contentful gives your team a clean interface to update service descriptions, testimonials, and blog posts without touching code — while keeping full design control on our end.",
    },
    {
      icon: Server,
      name: "Edge Hosting (Vercel / Cloudflare)",
      role: "Global Speed",
      why: "Your site is served from the edge node closest to each visitor — meaning a homeowner in Fort Worth loads your site from a Houston data centre, not a server across the country.",
    },
    {
      icon: Lock,
      name: "SSL + Security Headers",
      role: "Trust and Protection",
      why: "Full HTTPS with HSTS, CSP headers, and regular dependency audits. Google rewards secure sites in rankings and homeowners trust the padlock before they call.",
    },
    {
      icon: Calendar,
      name: "Booking API Integrations",
      role: "ServiceTitan, Housecall Pro, Jobber",
      why: "We connect your site directly to your field management software so homeowners can book a service call or estimate request without leaving the page — reducing the friction to zero.",
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
            <Code2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Technology We Use
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            What Technology Should<br />
            an HVAC Website<br />
            <span className="text-primary">Be Built On?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            The platform your HVAC site is built on determines its speed, SEO ceiling, and how easy it is to update. We choose the right technology for your specific goals — not the cheapest option.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-primary/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-tight text-white leading-tight">{s.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary/70">{s.role}</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.why}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/[0.04] border border-white/10 rounded-2xl p-8"
        >
          {[
            { stat: "2.1s", label: "Average page load time on every site we build — vs 6.4s industry average" },
            { stat: "100%", label: "Of sites we deliver score 90+ on Google PageSpeed mobile" },
            { stat: "∞", label: "Source code ownership — you keep every file forever, no platform lock-in" },
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
      icon: Code2,
      title: "Custom Website Build",
      tag: "All Plans",
      items: [
        "Up to 15 pages (homepage, services, cities, about, contact)",
        "Custom design — not a template",
        "React or Next.js depending on SEO needs",
        "Headless CMS integration for content updates",
        "Full source code delivered to you",
        "Version-controlled codebase (GitHub repo)",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      tag: "All Plans",
      items: [
        "Built for mobile first, desktop second",
        "Click-to-call buttons on all mobile views",
        "Touch-optimised navigation and menus",
        "Responsive breakpoints from 320px to 1920px",
        "Google PageSpeed 90+ on mobile guaranteed",
        "Core Web Vitals passing (LCP, FID, CLS)",
      ],
    },
    {
      icon: Globe,
      title: "On-Page SEO Foundation",
      tag: "All Plans",
      items: [
        "Keyword-mapped H1 and H2 structure per page",
        "LocalBusiness and Service schema on every page",
        "XML sitemap generated and submitted",
        "robots.txt and canonical tags configured",
        "Open Graph and meta description optimisation",
        "Google Search Console and Analytics setup",
      ],
    },
    {
      icon: Calendar,
      title: "Booking & CRM Integrations",
      tag: "Accelerator+",
      items: [
        "ServiceTitan booking widget integration",
        "Housecall Pro or Jobber form connections",
        "Contact forms with CRM auto-routing",
        "Click-to-call tracking with call recording",
        "Live chat widget installation (optional)",
        "SMS follow-up trigger on form submit",
      ],
    },
    {
      icon: Lock,
      title: "Security & Hosting Setup",
      tag: "All Plans",
      items: [
        "SSL certificate configuration",
        "Security headers (CSP, HSTS, X-Frame)",
        "Edge hosting setup (Vercel or Cloudflare)",
        "Custom domain DNS configuration",
        "Automated daily backups",
        "Uptime monitoring with alert notifications",
      ],
    },
    {
      icon: Wrench,
      title: "Ongoing Maintenance",
      tag: "All Plans",
      items: [
        "Monthly dependency and security updates",
        "Content update requests (up to 4/month)",
        "PageSpeed monitoring and optimisation",
        "Uptime monitoring 24/7",
        "Bug fixes with 24-hour response SLA",
        "Monthly site health report",
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
              Full Development Service
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            What Is Included in Our<br />
            HVAC Website<br />
            <span className="text-primary">Development Service?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            From custom code to booking integrations, SEO foundations to ongoing maintenance — we deliver a complete website product, not just a design file.
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
      title: "Discovery & Technical Audit",
      duration: "Day 1–2",
      body: "We audit your existing site (or start fresh with a brief): PageSpeed scores, Core Web Vitals, current platform limitations, SEO foundation gaps, booking flow friction, and competitor benchmarks. You get a full technical audit report before we write a line of code.",
      output: "Technical audit report + sitemap architecture + project brief",
    },
    {
      step: "02",
      title: "Site Architecture & Wireframes",
      duration: "Day 3–5",
      body: "We define every page, URL structure, and internal link flow before design starts. Service pages, city landing pages, emergency response pages, and the booking flow are all mapped to specific keyword targets and conversion goals.",
      output: "Full site architecture document + low-fidelity wireframes",
    },
    {
      step: "03",
      title: "Design System & Visual Mockups",
      duration: "Week 1–2",
      body: "High-fidelity Figma mockups for every page type — homepage, service page, city page, contact, and about. We include mobile and desktop views. Two full revision rounds are included before development starts.",
      output: "Figma design system + approved mockups for all page types",
    },
    {
      step: "04",
      title: "Development & Integrations",
      duration: "Week 2–3",
      body: "We build mobile-first in React or Next.js, integrate your booking platform, configure schema markup on every page, set up the CMS, and install analytics and call tracking. Core Web Vitals are monitored throughout the build.",
      output: "Fully built site in staging + booking integrations live + analytics configured",
    },
    {
      step: "05",
      title: "QA, Speed Optimisation & Launch",
      duration: "Week 3–4",
      body: "We test every page across 12 device and browser combinations, run PageSpeed audits and fix all issues below 90, validate all schema markup in Google Rich Results Test, submit the sitemap to Search Console, and configure edge hosting for sub-2-second global loads.",
      output: "90+ PageSpeed on mobile + passing Core Web Vitals + live on your domain",
    },
    {
      step: "06",
      title: "Ongoing Maintenance & Growth",
      duration: "Monthly",
      body: "Every month we run dependency updates, handle content change requests (up to 4 per month), monitor uptime, review PageSpeed, and deliver a site health report. As your business grows — new cities, new services, new staff — your site grows with it.",
      output: "Monthly health report + content updates + 24-hour bug response SLA",
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
            How Do We Build an HVAC<br />
            Website That<br />
            <span className="text-primary">Ranks and Converts?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Every HVAC website we build follows a six-step process that combines technical performance, conversion design, and SEO architecture — all delivered in 30 days.
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
      company: "McAllen AC & Heating",
      city: "McAllen, TX",
      stat1: { val: "3.8×", label: "More calls in first 60 days post-launch" },
      stat2: { val: "1.8s", label: "Page load time (down from 7.1s on Wix)" },
      result: "Migrated from a Wix site scoring 21 on mobile PageSpeed. Full custom build with edge hosting, booking integration, and 8 city pages. Phone calls increased 3.8x within 60 days of launch.",
    },
    {
      company: "Palm Beach Cool Air",
      city: "West Palm Beach, TX",
      stat1: { val: "Top 5", label: "Organic rankings for 14 target keywords" },
      stat2: { val: "28 days", label: "From brief to live site" },
      result: "Needed a site built from scratch with SEO architecture for 5 service areas. Delivered in 28 days with a full technical SEO foundation. Ranking in the top 5 for 14 primary keywords within 90 days.",
    },
    {
      company: "Central Texas Comfort",
      city: "San Antonio, TX",
      stat1: { val: "94", label: "Google PageSpeed mobile score" },
      stat2: { val: "61%", label: "Increase in online form submissions" },
      result: "Replaced an outdated WordPress theme causing Core Web Vitals failures. Rebuilt with a lightweight custom theme and ServiceTitan booking integration. Form submissions up 61% with no change in ad spend.",
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
            What Results Do Texas HVAC<br />
            Companies Get From<br />
            <span className="text-primary">a Custom-Built Website?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Every project is measured by what actually matters: calls, form submissions, rankings, and load times. Here are three recent builds.
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
                <Code2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
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
            { stat: "3.8×", label: "Average call volume increase in the first 60 days post-launch" },
            { stat: "30 days", label: "Average delivery time from design brief to live site" },
            { stat: "90+", label: "Google PageSpeed mobile score on every site we deliver" },
            { stat: "100%", label: "Source code ownership — your files, your domain, your site" },
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
    { feature: "Custom code — not a template or page builder", them: false },
    { feature: "Mobile-first build (not mobile-adapted)", them: false },
    { feature: "Google PageSpeed 90+ on mobile guaranteed", them: false },
    { feature: "Full source code delivered to you at launch", them: false },
    { feature: "On-page SEO architecture built in from line one", them: false },
    { feature: "ServiceTitan / Housecall Pro booking integration", them: false },
    { feature: "LocalBusiness schema on every page", them: false },
    { feature: "Edge hosting configuration included", them: false },
    { feature: "Core Web Vitals passing at launch", them: false },
    { feature: "Ongoing maintenance with 24-hour bug SLA", them: true },
    { feature: "Delivered in under 30 days", them: false },
    { feature: "Exclusivity — 1 HVAC company per service area", them: false },
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
              HVAC Digitals vs. Generic Developers
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            How Is HVAC Digitals<br />
            Different From a<br />
            <span className="text-primary">Generic Web Developer?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Generic developers build websites. We build HVAC customer acquisition systems — engineered to rank, load fast, and convert Texas homeowners into booked service calls.
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
            <div className="col-span-3 p-5 text-center text-sm font-bold uppercase tracking-wider text-zinc-500">Generic Dev</div>
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
      q: "How long does it take to build a custom HVAC website?",
      a: "Our full build process takes 30 days from signed brief to live site. This includes discovery and audit (days 1 to 2), wireframes and site architecture (days 3 to 5), visual design with revision rounds (week 2), development and integrations (weeks 2 to 3), and QA, speed optimisation, and launch (week 4). If you need a landing page faster, we offer an accelerated 10-day build for single-page campaigns.",
    },
    {
      q: "What platform should an HVAC website be built on?",
      a: "It depends on your primary goal. For maximum SEO flexibility and speed, we recommend React with Next.js and a headless CMS. For teams who need to update content independently, we configure a clean WordPress setup with a custom theme that avoids the bloat of generic page builders. We do not build on Wix, Squarespace, or GoDaddy — these platforms impose speed and SEO ceilings that directly limit your ranking potential.",
    },
    {
      q: "Will I own my HVAC website after it is built?",
      a: "Yes, completely. We deliver the full source code to your GitHub repository at launch. Your domain, your hosting account, your CMS login, your analytics — all in your name. We have no proprietary lock-in. If you ever leave (though very few do), you take everything with you.",
    },
    {
      q: "Can you integrate my website with ServiceTitan or Housecall Pro?",
      a: "Yes. We integrate your website with ServiceTitan, Housecall Pro, and Jobber on our Accelerator and Growth plans. This means homeowners can request a booking or estimate directly from your site, with the lead automatically routed to your dispatch queue. We also set up call tracking so you know which pages are generating the most inbound calls.",
    },
    {
      q: "What is a Google PageSpeed score and why does it matter for HVAC?",
      a: "Google PageSpeed measures how fast your website loads on mobile, scored from 0 to 100. Sites scoring below 50 are penalised in Google rankings and lose 40% of visitors before the page finishes loading. Every site we build achieves a 90+ score on mobile at launch. The average HVAC site built on a page builder scores between 20 and 40 — meaning most of your ad traffic is leaving before seeing a single word.",
    },
    {
      q: "Do I need a new website or can you improve my existing one?",
      a: "We handle both full rebuilds and targeted improvements. We always start with a technical audit — if your existing site has a recoverable foundation (good content structure, working CMS, clean hosting), we will recommend a targeted improvement plan rather than a full rebuild. If the platform itself is the limitation (Wix, Squarespace, a broken WordPress theme), a full rebuild is almost always the more cost-effective path.",
    },
    {
      q: "What is included in the free website audit?",
      a: "Our free audit covers: Google PageSpeed scores on both mobile and desktop, Core Web Vitals pass or fail, mobile usability issues from Google Search Console, on-page SEO foundation gaps (schema, sitemap, canonical, meta), booking flow analysis, and a comparison against your top 3 local competitors. Delivered in writing within 48 hours with a prioritised fix list.",
    },
    {
      q: "Do you build HVAC websites for companies outside Texas?",
      a: "Currently our active client base is Texas-focused — we know the Texas HVAC market, the seasonal demand patterns, the local search behaviour, and the competitive landscape better than any national agency. If you are outside Texas, contact us and we will let you know whether we can serve your market effectively.",
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
              Website Development FAQ
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-4">
            Frequently Asked Questions<br />
            About HVAC Website<br />
            <span className="text-primary">Development.</span>
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
                data-testid={`webdev-faq-toggle-${i}`}
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

    <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
      <div className="bg-gradient-to-br from-zinc-900 to-background border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <Flame className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                Free Website Audit · 48-Hour Delivery
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
              Is Your HVAC Website<br />
              Built to Rank and Convert?<br />
              <span className="text-primary">Find Out for Free.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              We will audit your current HVAC site for PageSpeed, Core Web Vitals, SEO foundation, mobile usability, and booking flow — and deliver a written report with specific findings in 48 hours. No cost, no obligation.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "PageSpeed score (mobile and desktop)",
                "Core Web Vitals pass or fail",
                "SEO and schema foundation gaps",
                "Booking flow friction analysis",
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
                data-testid="link-webdev-bottom-cta"
              >
                Get My Free Website Audit
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
                { num: "3.8×", label: "Average increase in calls after switching from a template to a custom build" },
                { num: "30 days", label: "Average delivery time from brief to live site" },
                { num: "$0", label: "Cost for your initial technical website audit" },
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

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function WebsiteDevelopmentService() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HVAC Website Development",
        "serviceType": "Custom Website Design and Development",
        "description": "Custom HVAC website development for Texas HVAC companies. Mobile-first, fast-loading, conversion-optimised sites built with React and Next.js. Full source code ownership. Delivered in 30 days.",
        "provider": {
          "@type": "Organization",
          "name": "HVAC Digitals",
          "url": "https://hvacdigitals.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "TX",
            "addressCountry": "US",
          },
          "areaServed": { "@type": "State", "name": "Texas" },
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
            "name": "How long does it take to build a custom HVAC website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our full build process takes 30 days from signed brief to live site, including discovery, wireframes, design, development, QA and launch.",
            },
          },
          {
            "@type": "Question",
            "name": "What platform should an HVAC website be built on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For maximum SEO and speed, we recommend React with Next.js and a headless CMS. We do not build on Wix, Squarespace, or GoDaddy as these impose speed and SEO ceilings that limit ranking potential.",
            },
          },
          {
            "@type": "Question",
            "name": "Will I own my HVAC website after it is built?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, completely. We deliver the full source code to your GitHub repository at launch. Your domain, hosting, CMS, and analytics are all in your name with no proprietary lock-in.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you integrate my website with ServiceTitan or Housecall Pro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate with ServiceTitan, Housecall Pro, and Jobber on our Accelerator and Growth plans, routing booking requests directly to your dispatch queue.",
            },
          },
          {
            "@type": "Question",
            "name": "What is a Google PageSpeed score and why does it matter for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google PageSpeed measures how fast your site loads on mobile, scored 0 to 100. Sites below 50 are penalised in rankings and lose 40% of visitors. Every site we build achieves 90+ on mobile at launch.",
            },
          },
        ],
      },
    ];

    const existingScripts = document.querySelectorAll("script[data-webdev-schema]");
    existingScripts.forEach((s) => s.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-webdev-schema", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Custom HVAC website development for Texas contractors. Mobile-first, PageSpeed 90+, SEO-ready. ServiceTitan integration. Full source code ownership. Delivered in 30 days. Free audit."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Custom HVAC website development for Texas contractors. Mobile-first, PageSpeed 90+, SEO-ready. ServiceTitan integration. Full source code ownership. Delivered in 30 days. Free audit.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelectorAll("script[data-webdev-schema]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Website Design Texas | Fast, AEO-Ready Sites | HVAC Digitals"
        description="Custom HVAC websites built to rank, convert, and load fast. Designed exclusively for Texas HVAC contractors. Full source code ownership, delivered in 30 days."
        canonical="https://hvacdigitals.com/services/website-development"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HVAC Website Design & Development",
          "description": "Custom HVAC websites built to rank, convert, and load fast for Texas contractors.",
          "serviceType": "Web Design and Development",
          "areaServed": { "@type": "State", "name": "Texas" },
          "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
          "url": "https://hvacdigitals.com/services/website-development",
        }}
      />
      <Navbar />
      <main>
        <PageHeader />
        <TheProblem />
        <TechStackSection />
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
