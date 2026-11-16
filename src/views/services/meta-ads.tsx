"use client";
import React from "react";
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
type MetaFormData = {
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
  const [data, setData] = React.useState<MetaFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    monthlyBudget: "",
    challenge: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof MetaFormData, string>>>({});

  const update = (k: keyof MetaFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const updateSelect = (k: keyof MetaFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof MetaFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof MetaFormData, string>> = {};
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
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "Meta (Facebook & Instagram) Ads", message }),
    });
    setSubmitted(true);
    toast({
      title: "Meta Ads audit request received",
      description: "We'll review your Meta ad account and reach out within 1 business hour.",
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
          Your free Meta Ads audit is on the way. We reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Free Meta Ads Audit · Worth $1,200
          </div>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
            Get Your Free <span className="text-primary">Meta Audit</span> Now
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
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-meta-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-meta-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-meta-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-meta-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-meta-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Website</label>
                <Input value={data.website} onChange={update("website")} placeholder="yourhvac.com" className={inputCls} data-testid="input-meta-website" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Current Monthly Meta Budget</label>
              <Select value={data.monthlyBudget} onValueChange={updateSelect("monthlyBudget")}>
                <SelectTrigger className={inputCls} data-testid="select-meta-budget">
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Not running Meta ads yet</SelectItem>
                  <SelectItem value="0-1000">Under $1,000 / month</SelectItem>
                  <SelectItem value="1000-3000">$1,000 – $3,000 / month</SelectItem>
                  <SelectItem value="3000-7000">$3,000 – $7,000 / month</SelectItem>
                  <SelectItem value="7000+">$7,000+ / month</SelectItem>
                </SelectContent>
              </Select>
              {errors.monthlyBudget && <p className="text-xs text-red-400 mt-1">{errors.monthlyBudget}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest Facebook / Instagram Ads Challenge</label>
              <Textarea
                value={data.challenge}
                onChange={update("challenge")}
                placeholder="e.g. Cheap leads that never answer, boosted posts with no calls, ad account restricted…"
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-meta-challenge"
              />
              {errors.challenge && <p className="text-xs text-red-400 mt-1">{errors.challenge}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-meta-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-meta-submit">
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
    { value: "$22", label: "Average cost per Meta lead" },
    { value: "72 hrs", label: "From kickoff to live ads" },
    { value: "63%", label: "Leads reached by phone in 5 min" },
  ];

  const trust = [
    "No long-term contracts",
    "1 company per market",
    "Instant speed-to-lead follow-up",
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
          <span className="text-white font-bold">Meta Ads for HVAC</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Megaphone className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Facebook & Instagram Ads for HVAC
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              Reach Homeowners<br />
              Before They Search.<br />
              <span className="text-primary">Fill Your Schedule.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              Google catches homeowners who are already searching. Meta finds them first. We run Facebook and Instagram lead campaigns for Texas HVAC companies — tune-up offers, system replacement financing, and maintenance plans — and follow up with every lead within minutes so they turn into booked jobs, not dead contacts.
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
      title: "Boosting posts and calling it advertising",
      body: "The blue \u201cBoost\u201d button optimises for likes, not leads. It shows your post to people who engage with everything and book nothing. Real Meta campaigns run through Ads Manager with a lead or conversion objective.",
    },
    {
      icon: Users,
      title: "Targeting \u201ceveryone in Dallas\u201d",
      body: "Renters, apartment dwellers, and people 200 miles outside your service area all click on HVAC ads. Without homeowner, radius, and zip-code targeting, half your budget reaches people who can't hire you.",
    },
    {
      icon: Phone,
      title: "Letting leads sit for hours",
      body: "Meta leads are warm, not hot: they raised their hand while scrolling. If nobody calls them back within 5 minutes, contact rates collapse. Most HVAC shops call back the next morning, and by then the lead has forgotten the ad.",
    },
    {
      icon: Megaphone,
      title: "Stock photos and generic copy",
      body: "A stock photo of a smiling technician gets scrolled past. Real trucks, real techs, a clear offer and a local hook (\u201cDFW homeowners: $79 AC tune-up\u201d) are what stop the thumb.",
    },
    {
      icon: AlertTriangle,
      title: "Ignoring Meta's special ad rules",
      body: "Financing offers can fall under Meta's special ad categories, which limit targeting. Get it wrong and your ads are rejected or your account is restricted. We build campaigns that stay compliant and still reach the right homeowners.",
    },
    {
      icon: BarChart3,
      title: "No pixel, no Conversions API",
      body: "Without the Meta Pixel and Conversions API sending booked-job data back, Meta optimises for anyone who fills a form, including fake names and wrong numbers. Feed it real outcomes and lead quality climbs.",
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
              Why Most HVAC Facebook Ads Fail
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Lots of likes.<br />
            <span className="text-primary">No booked jobs.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Most HVAC contractors who say \u201cFacebook doesn't work\u201d made one of these six mistakes. Fix them, and Meta becomes your most predictable source of tune-ups, maintenance members and replacement estimates.
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
      title: "Lead Form Campaigns",
      tag: "Core",
      items: [
        "Instant forms with qualifying questions",
        "Higher-intent form settings to filter junk",
        "Homeowner + service-area radius targeting",
        "Zip-code exclusions for out-of-area leads",
        "Leads pushed to your CRM and phone in real time",
        "Weekly lead-quality review with your team",
      ],
    },
    {
      icon: Flame,
      title: "Seasonal Offer Campaigns",
      tag: "Core",
      items: [
        "Spring & fall tune-up specials",
        "Heat-wave and cold-snap surge campaigns",
        "Maintenance-plan membership drives",
        "System replacement & financing offers",
        "Indoor air quality and duct cleaning promos",
        "Offer testing to find your best converter",
      ],
    },
    {
      icon: Megaphone,
      title: "Creative & Video Production",
      tag: "All Packages",
      items: [
        "Scroll-stopping static, carousel & Reels ads",
        "Short-form video scripts for your techs",
        "Before/after and customer testimonial ads",
        "Hooks written for Texas homeowners",
        "Fresh creative every 2–3 weeks to beat fatigue",
        "Feed, Stories and Reels placements",
      ],
    },
    {
      icon: RefreshCw,
      title: "Retargeting & Lookalikes",
      tag: "Growth Package",
      items: [
        "Retarget website visitors (30 / 60 / 90 days)",
        "Retarget video viewers and form openers",
        "Lookalikes built from past customers",
        "Customer-list ads for maintenance renewals",
        "Win-back campaigns for old estimates",
        "Sequenced messaging that builds trust",
      ],
    },
    {
      icon: Zap,
      title: "Speed-to-Lead Automation",
      tag: "All Packages",
      items: [
        "Instant SMS + email reply to every lead",
        "Auto-call that connects the lead to your office",
        "Follow-up sequence for leads who don't answer",
        "Online booking link in every reply",
        "Missed-call text-back",
        "Pipeline view of every lead and its status",
      ],
    },
    {
      icon: BarChart3,
      title: "Tracking & Reporting",
      tag: "All Packages",
      items: [
        "Meta Pixel + Conversions API setup",
        "Booked-job and revenue tracking",
        "Live dashboard (spend, leads, cost per lead)",
        "Cost per booked appointment, not just per lead",
        "Monthly strategy video call",
        "Creative performance breakdowns",
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
              Full-Service Meta Advertising
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Facebook. Instagram.<br />
            <span className="text-primary">Booked jobs.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Everything you need to turn Facebook and Instagram into a steady lead source: the offers, the creative, the targeting, and the follow-up that turns a form fill into a truck in the driveway.
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
      label: "Seasonal Offer",
      headline: "DFW Homeowners: $79 AC Tune-Up (Reg. $149)",
      desc: "Beat the July rush. Only 40 spots this month. 21-point inspection, filter included, no surprise upsells.",
      cta: "Get Offer · Instant Form",
      color: "border-primary/40 bg-primary/5",
      badge: "Facebook Lead Ad",
      badgeColor: "bg-primary/15 text-primary",
    },
    {
      label: "Replacement + Financing",
      headline: "Is Your AC Over 12 Years Old?",
      desc: "Get a free replacement estimate and see your options with flexible monthly financing.",
      cta: "Book Free Estimate",
      color: "border-blue-500/30 bg-blue-500/5",
      badge: "Instagram Reel",
      badgeColor: "bg-blue-500/15 text-blue-400",
    },
    {
      label: "Retargeting",
      headline: "Still Thinking About That New System?",
      desc: "⭐⭐⭐⭐⭐ 4.9 from 300+ Texas neighbors. Lock in this month's pricing before it changes.",
      cta: "Message Us",
      color: "border-green-500/30 bg-green-500/5",
      badge: "Retargeting",
      badgeColor: "bg-green-500/15 text-green-400",
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
                Ads that stop<br />
                <span className="text-primary">the scroll.</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                On Meta, the creative does the targeting. We script, design, and test every ad in-house around one clear offer and a local hook, so the right homeowners stop, read, and raise their hand.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Offer-first hooks written for Texas homeowners",
                  "Real photos and video of your trucks and techs",
                  "Reels and Stories formats, not just feed posts",
                  "Fresh creative rotations every 2–3 weeks",
                  "Constant split testing, with budget moved to the winner",
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
      title: "Account, Offer & Market Audit",
      duration: "Day 1–2",
      body: "We review your Business Manager, ad account history, pixel setup, and current offers, then look at what competitors in your area are running on Facebook and Instagram. You'll know exactly what's working and what isn't before we spend a dollar.",
      output: "Audit report + competitor ad library teardown",
    },
    {
      step: "02",
      title: "Offer & Audience Strategy",
      duration: "Day 2–3",
      body: "We pick the offers that fit the season and your margins, such as tune-ups, maintenance plans, or replacements, and map audiences: homeowner radius targeting, customer-list lookalikes, and retargeting pools.",
      output: "Offer plan + audience map + budget split",
    },
    {
      step: "03",
      title: "Pixel, CAPI & Lead Routing",
      duration: "Day 3–5",
      body: "We install the Meta Pixel and Conversions API, connect lead forms to your CRM, and switch on instant SMS, email and call follow-up, so every new lead hears from you in under a minute.",
      output: "Tracking verified + speed-to-lead automation live",
    },
    {
      step: "04",
      title: "Creative Production & Launch",
      duration: "Week 1",
      body: "We produce the first round of static, carousel, and short video ads, write the copy, build the instant forms with qualifying questions, and launch.",
      output: "Campaigns live + first creative batch",
    },
    {
      step: "05",
      title: "First 30 Days: Test & Cut",
      duration: "Month 1",
      body: "We review results every 48 hours, cut losing ads and audiences, move budget to winners, and check lead quality with your office. Bad leads get excluded and feedback goes back into the algorithm.",
      output: "30-day report + creative winners identified",
    },
    {
      step: "06",
      title: "Scale & Refresh",
      duration: "Ongoing",
      body: "Each month brings new creative, new seasonal offers, and budget increases where the numbers support it. You get a monthly video breakdown of spend, leads, booked jobs, and next month's plan.",
      output: "Monthly video report + live dashboard",
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
            From kickoff to<br />
            <span className="text-primary">live ads in 72 hours.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Meta can fill a pipeline fast, but only when tracking, offers, creative, and follow-up are set up properly. Here's how we launch.
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
      company: "Metroplex Comfort Co.",
      city: "Fort Worth, TX",
      stat1: { val: "$19", label: "Cost per lead (down from $61)" },
      stat2: { val: "212", label: "Tune-up leads in 45 days" },
      result: "Replaced boosted posts with a $79 tune-up lead-form campaign and instant SMS follow-up. 38% of tune-ups produced a repair or replacement opportunity.",
      services: ["Facebook Lead Ads", "Speed-to-Lead", "Retargeting"],
    },
    {
      company: "Hill Country Air",
      city: "Austin, TX",
      stat1: { val: "11", label: "System replacements sold" },
      stat2: { val: "9.4×", label: "Return on ad spend" },
      result: "Ran a financing-focused replacement campaign aimed at homeowners with older systems, plus retargeting for website visitors. $4,100 in spend produced $38,500 in closed installs.",
      services: ["Instagram Reels", "Lookalikes", "Conversions API"],
    },
    {
      company: "Gulf Coast Heating & Air",
      city: "Houston, TX",
      stat1: { val: "640", label: "New maintenance members" },
      stat2: { val: "$31", label: "Cost per member" },
      result: "Built a year-round maintenance-plan funnel on Facebook and Instagram, combined with customer-list lookalikes. It created recurring revenue that kept techs busy through the shoulder seasons.",
      services: ["Membership Funnel", "Lookalikes", "Video Ads"],
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
            Real campaigns.<br />
            <span className="text-primary">Real Texas jobs.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Each of these HVAC companies had already tried Facebook ads, either by boosting posts or through a generic agency. These are the results after switching to HVAC Digitals.
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
            { stat: "$22", label: "Average cost per Meta lead across clients" },
            { stat: "< 60s", label: "Average time to first follow-up" },
            { stat: "72 hrs", label: "Kickoff to live campaigns" },
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
    { feature: "Lead-objective campaigns (not boosted posts)", them: true },
    { feature: "Homeowner + service-area targeting", them: false },
    { feature: "HVAC seasonal offer calendar", them: false },
    { feature: "Custom video & Reels creative", them: false },
    { feature: "Creative refresh every 2–3 weeks", them: false },
    { feature: "Meta Pixel + Conversions API", them: false },
    { feature: "Instant SMS / call follow-up on every lead", them: false },
    { feature: "Special ad category compliance", them: false },
    { feature: "Cost per booked job reporting", them: false },
    { feature: "Exclusivity: 1 company per market", them: false },
    { feature: "Monthly strategy video call", them: false },
    { feature: "Works alongside your Google Ads", them: false },
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
      q: "Do Facebook and Instagram ads actually work for HVAC companies?",
      a: "Yes, when they're used for the right job. Meta ads reach homeowners before they search: people who will need a tune-up, a maintenance plan, or a replacement soon. They work best with a clear offer, homeowner targeting, and fast follow-up. They don't replace Google Ads for emergency \u201cAC not working\u201d searches. They add a second, predictable lead source on top of it.",
    },
    {
      q: "What does a Meta lead cost for an HVAC company?",
      a: "In Texas, HVAC lead-form leads usually cost $15–$45 depending on the offer, season, and market. Tune-up offers sit at the low end, and replacement and financing leads at the high end. Our clients average about $22 per lead. More importantly, we report cost per booked appointment, because that's the number that pays your techs.",
    },
    {
      q: "Aren't Facebook leads low quality?",
      a: "They can be, if you only chase the cheapest lead. We use higher-intent form settings, qualifying questions (homeowner? zip code? system age?), service-area targeting, and Conversions API feedback so Meta learns which leads book. The biggest quality fix is speed: we contact every lead within a minute, while they still remember your ad.",
    },
    {
      q: "How much should I spend on Meta ads per month?",
      a: "Most single-market HVAC companies start at $1,500–$3,000 a month in ad spend, and push harder before peak seasons. That's enough to test offers and creative and produce steady lead flow. We scale once cost per booked job is proven.",
    },
    {
      q: "Do I need to film videos?",
      a: "No, but it helps. We give you simple shot lists and scripts your techs can film on a phone in 15 minutes. If you can't film, we produce ads from your photos, reviews, and our own motion graphics. Real footage of your trucks and team almost always beats stock imagery.",
    },
    {
      q: "Should I run Meta ads or Google Ads?",
      a: "Ideally both. Google Ads and Local Services Ads capture people searching right now. Meta creates demand and fills your schedule in slower weeks. Retargeting connects the two: someone who saw your Google ad sees your Facebook offer the next day. We manage both, so they work together instead of competing for budget.",
    },
    {
      q: "Will you run ads for my competitors?",
      a: "No. We work with one HVAC company per service area. Your offers, creative, and audiences are built exclusively for you, and that exclusivity is written into every contract.",
    },
    {
      q: "How fast will I see leads?",
      a: "Campaigns usually launch within 72 hours of kickoff, and most clients see their first leads in the first few days. The first 30 days are for testing. By the end of month one we know which offers, audiences, and creative produce booked jobs, and we scale those.",
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
              Meta Ads FAQ
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
                data-testid={`meta-faq-toggle-${i}`}
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
                  Free Meta Ads Audit · 48-Hour Delivery
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
                Turn scrollers<br />into booked<br />
                <span className="text-primary">HVAC jobs.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We'll review your Facebook and Instagram ad account (or map out a launch plan if you're starting fresh), show you where leads are leaking, and give you a clear offer and audience plan. Free, in 48 hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Ad account & pixel health check",
                  "Competitor ad library teardown",
                  "Seasonal offer recommendations",
                  "Cost-per-lead projection",
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
                  data-testid="link-meta-bottom-cta"
                >
                  Get My Free Meta Audit
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
                  { num: "$22", label: "Average cost per Meta lead across clients" },
                  { num: "<60s", label: "Average time to first follow-up" },
                  { num: "$0", label: "Cost for your Meta Ads audit report" },
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
export default function MetaAdsService() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="Facebook & Instagram Ads for HVAC Texas | Meta Lead Generation | HVAC Digitals"
        description="Meta ads for Texas HVAC contractors: tune-up offers, maintenance plans and replacement campaigns on Facebook and Instagram, with instant lead follow-up. Free audit."
        canonical="https://hvacdigitals.com/services/meta-ads"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "HVAC Facebook & Instagram Ads Management",
              "serviceType": "Social Media Advertising",
              "description": "Meta (Facebook and Instagram) lead generation campaigns for Texas HVAC companies, with creative, targeting, Conversions API tracking and instant follow-up.",
              "areaServed": { "@type": "State", "name": "Texas" },
              "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
              "url": "https://hvacdigitals.com/services/meta-ads",
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Do Facebook and Instagram ads work for HVAC companies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Meta ads reach homeowners before they search, and work best with a clear offer, homeowner targeting and fast lead follow-up, alongside Google Ads." } },
                { "@type": "Question", "name": "What does a Meta lead cost for an HVAC company?", "acceptedAnswer": { "@type": "Answer", "text": "In Texas, HVAC lead-form leads usually cost $15–$45 depending on offer, season and market. HVAC Digitals clients average about $22 per lead." } },
                { "@type": "Question", "name": "How much should an HVAC company spend on Meta ads?", "acceptedAnswer": { "@type": "Answer", "text": "Most single-market HVAC companies start at $1,500–$3,000 per month in ad spend and scale once cost per booked job is proven." } },
              ],
            },
          ],
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
