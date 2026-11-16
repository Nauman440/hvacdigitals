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
  Camera,
  Heart,
  MessageSquare,
  Share2,
  BarChart3,
  Users,
  AlertTriangle,
  XCircle,
  Flame,
  Calendar,
  Video,
  ThumbsUp,
  MapPin,
  Star,
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
type SocialFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  platforms: string;
  challenge: string;
};

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState<SocialFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    platforms: "",
    challenge: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof SocialFormData, string>>>({});

  const update = (k: keyof SocialFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      setErrors((er) => ({ ...er, [k]: undefined }));
    };
  const updateSelect = (k: keyof SocialFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof SocialFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof SocialFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.platforms) e.platforms = "Required";
    if (!data.challenge.trim()) e.challenge = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Current Platforms: ${data.platforms}\nChallenge: ${data.challenge}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "Social Media Management", message }),
    });
    setSubmitted(true);
    toast({
      title: "Social media audit request received",
      description: "We will review your profiles and reach out within 1 business hour.",
    });
  };

  const inputCls = "h-11 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary";

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-2">Audit request confirmed.</h3>
        <p className="text-sm text-white/70">
          We will review your social presence and reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3" /> Free Social Media Audit · Worth $800
        </div>
        <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
          Get Your Free <span className="text-primary">Social Media Audit</span> Now
        </h3>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <div className="flex-1 flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>1</div>
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 1 ? "text-white" : "text-white/40"}`}>Contact</span>
        </div>
        <div className={`h-px flex-1 ${step >= 2 ? "bg-primary" : "bg-white/10"}`} />
        <div className="flex-1 flex items-center gap-2 justify-end">
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 2 ? "text-white" : "text-white/40"}`}>Profiles</span>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>2</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Full Name</label>
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-social-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-social-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-social-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-social-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-social-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Current Social Media Presence</label>
              <Select value={data.platforms} onValueChange={updateSelect("platforms")}>
                <SelectTrigger className={inputCls} data-testid="select-social-platforms">
                  <SelectValue placeholder="Where are you active right now?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No active profiles</SelectItem>
                  <SelectItem value="facebook">Facebook only</SelectItem>
                  <SelectItem value="facebook-instagram">Facebook and Instagram</SelectItem>
                  <SelectItem value="all">Facebook, Instagram, and others</SelectItem>
                  <SelectItem value="inactive">Have profiles but never post</SelectItem>
                </SelectContent>
              </Select>
              {errors.platforms && <p className="text-xs text-red-400 mt-1">{errors.platforms}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest Social Media Challenge</label>
              <Textarea
                value={data.challenge}
                onChange={update("challenge")}
                placeholder="e.g. No time to post, content gets no engagement, not sure what to post, no leads from social..."
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-social-challenge"
              />
              {errors.challenge && <p className="text-xs text-red-400 mt-1">{errors.challenge}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-social-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-social-submit">
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
    { value: "74%", label: "Check social before calling an HVAC co." },
    { value: "4×", label: "More reach from real job photos vs. stock" },
    { value: "2.3×", label: "More local brand searches for active pages" },
  ];

  const trust = [
    "HVAC-specific content — not recycled templates",
    "Real job photos and video, not stock images",
    "1 company per service area",
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
          <span className="text-white font-bold">Social Media for HVAC</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Share2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                HVAC Social Media Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              Does Social Media<br />
              Actually Generate<br />
              <span className="text-primary">HVAC Leads?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              Yes — when the content is built for trust, not vanity metrics. Texas homeowners check Facebook and Instagram before they call any home service company. We make sure what they find gives them every reason to choose you.
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
      icon: Camera,
      title: "Stock photos that destroy credibility",
      body: "Generic HVAC stock images look identical across every competitor page. Homeowners notice instantly. Real photos of your team, your trucks, and your actual jobs build the visual proof that you are a real, established local company.",
    },
    {
      icon: Calendar,
      title: "Posting randomly with no content strategy",
      body: "Posting a tip on Tuesday, nothing for three weeks, then a promotion — tells the algorithm and your followers that your business is inconsistent. Social reach is earned by consistent posting schedules that the platform rewards with distribution.",
    },
    {
      icon: MessageSquare,
      title: "Ignoring comments and messages",
      body: "A homeowner who comments on your post or sends a DM asking about AC service is a warm lead. Leaving messages unanswered for 48 hours is the social equivalent of not answering the phone. Most HVAC companies lose these leads every week.",
    },
    {
      icon: Users,
      title: "Wrong audience targeting on boosted posts",
      body: "Boosting a post to everyone within 50 miles wastes money on renters, apartment dwellers, and people outside your actual service area. We target homeowners by zip code, home value, and recent home purchase signals.",
    },
    {
      icon: Video,
      title: "No video content in a video-first era",
      body: "Facebook and Instagram algorithmically suppress photo-only pages in favour of Reels and short video. HVAC before-and-after videos, quick maintenance tip clips, and technician walkthrough content generate 5 to 10 times more organic reach than static posts.",
    },
    {
      icon: BarChart3,
      title: "No tracking — just vanity metrics",
      body: "Counting likes and followers tells you nothing about business impact. We track profile visits, website clicks, direct message inquiries, and call button taps — the actions that actually connect to revenue.",
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
              Why Most HVAC Social Media Fails
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            Why Does HVAC Social Media<br />
            Fail to Generate<br />
            <span className="text-primary">Service Calls?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Most HVAC companies either ignore social media entirely or post stock photos twice a month and wonder why it does nothing. These are the six mistakes killing HVAC social ROI.
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
// PLATFORM SECTION
// =============================================================================
const PlatformSection = () => {
  const platforms = [
    {
      icon: ThumbsUp,
      name: "Facebook",
      why: "Highest HVAC reach of any platform",
      body: "72% of US adults use Facebook, and the 35 to 65 age group — the homeowner core — is the most active. Facebook Pages with consistent posting and engaged comments rank in local search results. We manage your page, run targeted local ads, and turn your profile into a trust engine that homeowners find before they call.",
      tactics: [
        "4 to 6 posts per week (mix of content types)",
        "Facebook Local Awareness ads to homeowners by zip code",
        "Review generation prompt posts",
        "Seasonal promotion campaigns",
      ],
    },
    {
      icon: Camera,
      name: "Instagram",
      why: "Before/after content and brand building",
      body: "Instagram is where before-and-after installation photos, technician showcase content, and video Reels live. For Texas HVAC companies, Instagram builds the visual brand that makes homeowners feel confident before the first call. Reels get 3 to 5 times the organic reach of static posts.",
      tactics: [
        "Before and after installation photos",
        "Behind-the-scenes technician content",
        "Short Reels (30 to 60 seconds) with HVAC tips",
        "Story highlights for reviews and services",
      ],
    },
    {
      icon: MapPin,
      name: "Nextdoor",
      why: "Hyper-local neighbour recommendations",
      body: "Nextdoor is the single highest-converting platform for local home service leads. When a homeowner asks their neighbours who they use for AC repair, being the recommended company in that thread is worth more than any ad. We manage your Nextdoor business profile and coach your team on how to drive neighbour recommendations.",
      tactics: [
        "Nextdoor Business Page setup and optimisation",
        "Neighbour recommendation strategy",
        "Local deal promotions to verified homeowners",
        "Service area coverage monitoring",
      ],
    },
    {
      icon: Star,
      name: "Google Business Profile Posts",
      why: "Social content that directly boosts local SEO",
      body: "GBP posts appear directly in Google Search and Maps results — making them the only social content that directly influences your local search ranking. We publish weekly GBP posts with local keywords, seasonal offers, and service announcements to keep your listing active and preferred by Google.",
      tactics: [
        "Weekly GBP posts with local HVAC keywords",
        "Seasonal service offer announcements",
        "Before and after photo posts",
        "Event and promotion posts",
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
            <Share2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Platform Strategy
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Which Social Platforms<br />
            Work Best for<br />
            <span className="text-primary">HVAC Companies?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Not every platform is worth your time. We focus exclusively on the four that drive real results for Texas HVAC companies — and we manage each one differently because each one requires a different content strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:border-primary/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-white leading-tight">{p.name}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary/80">{p.why}</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.body}</p>
              <ul className="space-y-2 pt-4 border-t border-white/5">
                {p.tactics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
// WHAT'S INCLUDED
// =============================================================================
const WhatsIncluded = () => {
  const services = [
    {
      icon: Calendar,
      title: "Monthly Content Calendar",
      tag: "All Plans",
      items: [
        "30-day content calendar planned in advance",
        "Mix of educational, promotional, and trust-building posts",
        "Seasonal HVAC content (summer AC, winter heat, maintenance reminders)",
        "Before-and-after job photo features",
        "Team and technician spotlight posts",
        "Local community content and area shoutouts",
      ],
    },
    {
      icon: Camera,
      title: "Content Creation & Design",
      tag: "All Plans",
      items: [
        "Branded graphic templates for all post types",
        "Real photo editing and optimisation",
        "Reel and short video scripting and editing",
        "Caption copywriting with local keywords",
        "Hashtag research and targeting",
        "Story and highlight cover design",
      ],
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      tag: "All Plans",
      items: [
        "Comment response within 4 business hours",
        "Direct message monitoring and lead routing",
        "Review response on Facebook",
        "Negative comment management protocol",
        "Spam and bot comment removal",
        "Escalation process for urgent service inquiries",
      ],
    },
    {
      icon: Users,
      title: "Targeted Local Ad Campaigns",
      tag: "Accelerator+",
      items: [
        "Facebook and Instagram ad creative",
        "Homeowner audience targeting by zip code",
        "Home value and home ownership data targeting",
        "Seasonal promotion campaigns",
        "Lead generation ad forms",
        "Monthly ad performance report with spend breakdown",
      ],
    },
    {
      icon: Video,
      title: "Video & Reels Production",
      tag: "Accelerator+",
      items: [
        "Monthly short-form video content plan",
        "Reel scripting for HVAC tip videos",
        "Before-and-after video editing from job footage",
        "Technician interview and behind-the-scenes content",
        "Video caption and audio optimisation",
        "Cross-posting across Facebook, Instagram, and GBP",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      tag: "All Plans",
      items: [
        "Monthly performance report (reach, engagement, clicks)",
        "Website traffic attribution from social",
        "Direct message and call button tap tracking",
        "Competitor social audit (quarterly)",
        "Content performance breakdown by post type",
        "Strategy adjustments based on top-performing content",
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
              Full Social Media Service
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            What Is Included in Our<br />
            HVAC Social Media<br />
            <span className="text-primary">Management Service?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            From content calendars to community management, ad campaigns to monthly analytics — we handle everything so you never have to think about what to post next.
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
      title: "Social Presence Audit",
      duration: "Day 1–2",
      body: "We audit every active social profile — Facebook, Instagram, Nextdoor, GBP posts — for completeness, content consistency, engagement rate, follower demographics, and competitor benchmarks. You get a scored audit report with specific findings before we touch anything.",
      output: "Social audit report + competitor content benchmark + platform priority list",
    },
    {
      step: "02",
      title: "Brand Voice & Content System Setup",
      duration: "Week 1",
      body: "We define your brand voice (professional but approachable, Texas-local, trust-first), build a branded visual template library for your posts, and create your content pillar framework: the categories of content that will rotate each month to balance education, promotion, and social proof.",
      output: "Brand voice guide + visual template library + content pillar framework",
    },
    {
      step: "03",
      title: "Month One Content Calendar",
      duration: "Week 1–2",
      body: "We plan and produce the first 30 days of content: captions written, graphics designed, photos sourced or edited from your job footage, and a posting schedule set. All content is reviewed and approved by you before anything goes live. You see everything first.",
      output: "30-day content calendar approved + all posts ready to publish",
    },
    {
      step: "04",
      title: "Community Management Launch",
      duration: "Week 2",
      body: "We go live on all managed platforms and activate community monitoring. Every comment, DM, and review notification routes to our team within a 4-business-hour response window. Warm leads from direct messages are flagged immediately for your team to follow up on.",
      output: "Community monitoring live + response workflow active",
    },
    {
      step: "05",
      title: "Ad Campaign Launch (Accelerator+)",
      duration: "Week 2–3",
      body: "For Accelerator and Growth plan clients, we build and launch your first Facebook and Instagram ad campaign: homeowner-targeted by zip code, with creatives built from your best-performing organic content. We install the Meta Pixel on your website for full conversion tracking.",
      output: "First ad campaign live + Meta Pixel installed + call tracking active",
    },
    {
      step: "06",
      title: "Monthly Review & Optimisation",
      duration: "Monthly",
      body: "Every month we deliver a full performance report, review what content drove the most profile visits and website clicks, adjust the content mix based on data, and plan the next 30-day calendar. Social media compounds — the audience and trust you build in month one makes month six dramatically more effective.",
      output: "Monthly performance report + optimised content calendar + strategy brief",
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
            How Do We Create Social Content<br />
            That Actually<br />
            <span className="text-primary">Books HVAC Jobs?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Content that gets likes is not the same as content that gets calls. Our process builds a social presence engineered for trust and local authority — the two things that make Texas homeowners choose you.
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
      company: "Dallas Bay Comfort Systems",
      city: "Dallas, TX",
      stat1: { val: "340%", label: "Increase in Facebook profile visits" },
      stat2: { val: "28", label: "Direct message inquiries in month one" },
      result: "Had a Facebook page with 87 followers and no posts in 14 months. After a full rebrand and content launch — real job photos, before-and-after Reels, and weekly posting — profile visits increased 340% in 60 days with 28 direct message leads in month one.",
    },
    {
      company: "Lakeland Air Experts",
      city: "Lakeland, TX",
      stat1: { val: "4.1×", label: "More reach with Reel content vs photos" },
      stat2: { val: "$14", label: "Cost per lead from Facebook ads" },
      result: "Running boosted posts with no targeting strategy and seeing no ROI. We rebuilt the ad campaign with homeowner zip code targeting and shifted content to short Reels. Cost per lead dropped to $14 against a previous $91.",
    },
    {
      company: "Ocala Home Comfort",
      city: "Ocala, TX",
      stat1: { val: "#1", label: "Recommended HVAC company on Nextdoor" },
      stat2: { val: "19", label: "Organic referral leads from Nextdoor in 90 days" },
      result: "No Nextdoor presence in a market where neighbours actively recommend home service companies. Set up a managed Business Page, coached their technicians on requesting recommendations, and generated 19 organic referral leads within 90 days — at zero ad spend.",
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
            <span className="text-primary">Social Media Management?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Social media results that matter are measured in leads and calls, not followers. Here are three recent client outcomes tracked from day one.
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
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
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
            { stat: "74%", label: "Of homeowners check a company social profile before making first contact" },
            { stat: "4×", label: "More organic reach from Reel content vs. static photo posts on Facebook" },
            { stat: "$14", label: "Average cost per HVAC lead from Facebook ads with proper homeowner targeting" },
            { stat: "94%", label: "Client retention rate after the first 90 days" },
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
    { feature: "HVAC-specific content strategy — not recycled templates", them: false },
    { feature: "Real job photo sourcing and editing", them: false },
    { feature: "Short-form Reel and video content production", them: false },
    { feature: "Community management with 4-hour response SLA", them: false },
    { feature: "DM lead routing to your sales team", them: false },
    { feature: "Facebook and Instagram homeowner targeting by zip code", them: false },
    { feature: "Nextdoor Business Page management", them: false },
    { feature: "Google Business Profile post management", them: false },
    { feature: "Monthly report tracking leads, not just vanity metrics", them: false },
    { feature: "Seasonal HVAC content calendar (Texas climate)", them: false },
    { feature: "Meta Pixel and call tracking installation", them: true },
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
              HVAC Digitals vs. Generic Social Agencies
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            How Is HVAC Digitals<br />
            Different From a Generic<br />
            <span className="text-primary">Social Media Agency?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Generic agencies post generic content. We know what a homeowner in Dallas is thinking when their AC stops working at 3pm on a Saturday — and we build content that meets that moment.
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
      q: "Does social media actually generate leads for HVAC companies?",
      a: "Yes — when the strategy is built for trust and local visibility rather than vanity metrics. Social media works for HVAC in two ways: as a trust verification layer (homeowners check your Facebook before calling) and as a direct lead channel (DMs, call button taps, and ad-generated form fills). Our clients average 15 to 30 direct inquiries per month from social within the first 90 days of managed content.",
    },
    {
      q: "Which social media platforms are most effective for HVAC?",
      a: "Facebook is the highest-reach platform for HVAC because the 35 to 65 homeowner demographic is its most active user group. Instagram drives brand trust through visual content — before-and-after photos and Reels. Nextdoor is the most underutilised platform in HVAC and can generate neighbour recommendation leads at zero ad cost. Google Business Profile posts are the only social content that directly influences your local search ranking.",
    },
    {
      q: "How many times per week should an HVAC company post on social media?",
      a: "For Facebook and Instagram, 4 to 6 posts per week is the optimal range for HVAC — enough to stay top-of-mind with followers and earn consistent algorithm distribution without exhausting your content quality. Posting daily is counterproductive if the content is generic. We maintain a mix of post types (educational, before-and-after, promotional, team content) to avoid audience fatigue.",
    },
    {
      q: "What type of social media content works best for HVAC?",
      a: "Real job photos and before-and-after content consistently outperform all other post types for HVAC companies — generating 4 times more engagement than stock photos. Short Reels (30 to 60 seconds) showing maintenance tips, filter changes, or unit installations get 3 to 5 times more organic reach than static posts. Team and technician spotlights build personal trust that makes homeowners feel comfortable calling.",
    },
    {
      q: "How much should an HVAC company spend on Facebook ads?",
      a: "For local HVAC service area campaigns, a monthly Facebook and Instagram ad budget of $500 to $1,500 is sufficient to generate a consistent flow of homeowner leads when the targeting is correct. The key variable is targeting precision — we target by zip code, homeownership status, and home value to eliminate wasted spend on renters and out-of-area audiences. Our average cost per HVAC lead from Facebook ads is $14.",
    },
    {
      q: "Do you create the social media content or do we?",
      a: "We create everything: content planning, graphic design, caption copywriting, photo editing, Reel scripting and editing. Your only involvement is approving the monthly content calendar before it goes live (typically a 15-minute review), and optionally sending us job site photos and videos from your technicians for us to produce into content. The more real job footage you can share, the better the content performs.",
    },
    {
      q: "How long does social media management take to show results?",
      a: "Organic reach and engagement typically begin improving in weeks 2 to 4 once consistent posting is established. Direct message leads usually start appearing in month one. Facebook and Instagram ad leads begin generating within 48 to 72 hours of campaign launch. Nextdoor recommendation leads tend to build over 60 to 90 days as your profile becomes established in your service area. Social media compounds — the audience and trust built in month one amplify every month that follows.",
    },
    {
      q: "Will HVAC Digitals manage social media for my HVAC competitors?",
      a: "No. We take one HVAC company per service area. Your content strategy, audience data, ad creative, and community management are built exclusively for your business. No competitor in your service area can access your social media work through us. This exclusivity is written into every contract.",
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
              Social Media FAQ
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-4">
            Frequently Asked Questions<br />
            About HVAC Social<br />
            <span className="text-primary">Media Management.</span>
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
                data-testid={`social-faq-toggle-${i}`}
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
                Free Social Audit · 48-Hour Delivery
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
              Is Your HVAC Company<br />
              Missing Leads From<br />
              <span className="text-primary">Social Media?</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              We will audit your Facebook, Instagram, and Nextdoor presence — profile completeness, content frequency, engagement rate, ad performance, and competitor benchmarks — and deliver a written report with specific findings in 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Profile completeness score",
                "Content frequency and engagement rate",
                "Ad targeting and performance review",
                "Competitor social benchmark",
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
                data-testid="link-social-bottom-cta"
              >
                Get My Free Social Audit
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
                { num: "74%", label: "Of homeowners check social media before contacting an HVAC company" },
                { num: "$14", label: "Average cost per HVAC lead from targeted Facebook and Instagram ads" },
                { num: "$0", label: "Cost for your initial social media audit and profile review" },
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
export default function SocialMediaService() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HVAC Social Media Management",
        "serviceType": "Social Media Marketing and Management",
        "description": "Full-service social media management for HVAC companies in Texas. Facebook, Instagram, Nextdoor, and GBP post management with real content, community management, and targeted ads.",
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
            "name": "Does social media actually generate leads for HVAC companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Social media works for HVAC as a trust verification layer and a direct lead channel. Our clients average 15 to 30 direct inquiries per month from social within the first 90 days of managed content.",
            },
          },
          {
            "@type": "Question",
            "name": "Which social media platforms are most effective for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Facebook has the highest reach for HVAC with the 35 to 65 homeowner demographic. Instagram drives trust through visual content. Nextdoor generates neighbour referral leads at zero ad cost. Google Business Profile posts directly influence local search ranking.",
            },
          },
          {
            "@type": "Question",
            "name": "What type of social media content works best for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Real job photos and before-and-after content outperform all other types, generating 4 times more engagement than stock photos. Short Reels get 3 to 5 times more organic reach than static posts.",
            },
          },
          {
            "@type": "Question",
            "name": "How much should an HVAC company spend on Facebook ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A monthly budget of $500 to $1,500 is sufficient for local HVAC service area campaigns with proper homeowner targeting by zip code, homeownership status, and home value. Our average cost per HVAC lead is $14.",
            },
          },
        ],
      },
    ];

    const existingScripts = document.querySelectorAll("script[data-social-schema]");
    existingScripts.forEach((s) => s.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-social-schema", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Texas HVAC social media management. Facebook, Instagram, Nextdoor, and GBP post management with real content and homeowner-targeted ads. Free social audit. $14 avg. cost per lead."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Texas HVAC social media management. Facebook, Instagram, Nextdoor, and GBP post management with real content and homeowner-targeted ads. Free social audit. $14 avg. cost per lead.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelectorAll("script[data-social-schema]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Social Media Marketing Texas | Build Your Brand | HVAC Digitals"
        description="Full-service social media management for Texas HVAC contractors. Facebook, Instagram, Nextdoor, and Google Business Profile — real content, real results."
        canonical="https://hvacdigitals.com/services/social-media"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HVAC Social Media Marketing",
          "description": "Full-service social media management for Texas HVAC contractors.",
          "serviceType": "Social Media Marketing",
          "areaServed": { "@type": "State", "name": "Texas" },
          "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
          "url": "https://hvacdigitals.com/services/social-media",
        }}
      />
      <Navbar />
      <main>
        <PageHeader />
        <TheProblem />
        <PlatformSection />
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
