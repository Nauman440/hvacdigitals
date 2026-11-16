"use client";
import React from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Shield, TrendingUp, Search, MousePointerClick, Zap, Users, BarChart3, Clock, CheckCircle2, ChevronRight, ChevronDown, MessageSquare, Phone, Mail, Settings, MapPin, Target, Palette, Code2, Share2, Sparkles, Send, Star, Award, ArrowUpRight, Globe, FileText, Headphones, Megaphone } from "lucide-react";
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const hvacProImage = "/images/hvac-pro.png";

// Nav Configuration
type ServiceLink = {
  label: string;
  href: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const SERVICE_LINKS: ServiceLink[] = [
  {
    label: "SEO for HVAC",
    href: "/services/seo",
    desc: "Rank for high-intent HVAC keywords across organic search.",
    Icon: Search,
  },
  {
    label: "Local SEO for HVAC",
    href: "/services/local-seo",
    desc: "Dominate the Google Map Pack and own your service area.",
    Icon: MapPin,
  },
  {
    label: "Google Ads for HVAC",
    href: "/services/paid-ads",
    desc: "LSA, Google Search & PPC built for measurable ROI.",
    Icon: Target,
  },
  {
    label: "Meta Ads for HVAC",
    href: "/services/meta-ads",
    desc: "Facebook & Instagram lead ads that fill your schedule.",
    Icon: Megaphone,
  },
  {
    label: "UI/UX for HVAC",
    href: "/services/ui-ux",
    desc: "Conversion-first design that turns visitors into booked calls.",
    Icon: Palette,
  },
  {
    label: "Website Development",
    href: "/services/website-development",
    desc: "Lightning-fast HVAC sites engineered to capture leads 24/7.",
    Icon: Code2,
  },
  {
    label: "Social Media Management",
    href: "/services/social-media",
    desc: "Stay top-of-mind with seasonal campaigns and local content.",
    Icon: Share2,
  },
  {
    label: "Automation for Lead Generation",
    href: "/services/automation",
    desc: "Missed-call text-back, follow-ups, and AI booking bots.",
    Icon: Zap,
  },
];

const PRIMARY_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blog" },
];

// Navbar Component
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false);
  const location = usePathname() ?? "/";
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 140);
  };

  const isServicesActive = location.startsWith("/services");
  const isActive = (href: string) => (href === "/" ? location === "/" : location === href || location.startsWith(href + "/"));

  const navItemClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${active ? "text-zinc-900" : "text-zinc-600 hover:text-primary"}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
        isScrolled ? "border-zinc-200 shadow-sm py-3" : "border-zinc-100 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="link-home-logo">
          <div className="w-9 h-9 rounded bg-primary flex items-center justify-center text-primary-foreground font-display text-xl leading-none shadow-[0_4px_12px_rgba(255,107,43,0.35)]">
            H
          </div>
          <span className="font-display text-2xl tracking-wide text-zinc-900 leading-none">
            HVAC <span className="text-primary">DIGITALS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/" className={navItemClass(isActive("/"))} data-testid="link-nav-home">Home</Link>
          <Link href="/about" className={navItemClass(isActive("/about"))} data-testid="link-nav-about">About Us</Link>

          {/* Services mega menu */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((v) => !v)}
              className={`flex items-center gap-1 ${navItemClass(isServicesActive)}`}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              data-testid="button-nav-services"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-[820px] rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10 overflow-hidden"
                >
                  <div className="grid grid-cols-3">
                    {/* Service grid */}
                    <div className="col-span-2 p-5 grid grid-cols-2 gap-1">
                      {SERVICE_LINKS.map((s) => {
                        const active = isActive(s.href);
                        const Icon = s.Icon;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`group flex items-start gap-3 p-3 rounded-lg transition-colors ${
                              active ? "bg-primary/5" : "hover:bg-zinc-50"
                            }`}
                            data-testid={`link-service-${s.href.split("/").pop()}`}
                          >
                            <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                              active
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                              <div className={`text-sm font-semibold leading-tight ${active ? "text-primary" : "text-zinc-900 group-hover:text-primary"}`}>
                                {s.label}
                              </div>
                              <div className="text-xs text-zinc-500 mt-1 leading-snug line-clamp-2">
                                {s.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Promo card */}
                    <div className="relative bg-gradient-to-br from-zinc-900 via-[#0F1628] to-[#0A0F1E] p-6 flex flex-col text-white">
                      <div className="absolute inset-0 pointer-events-none opacity-30">
                        <div className="absolute -top-12 -right-10 w-40 h-40 bg-primary/40 rounded-full blur-3xl" />
                      </div>
                      <div className="relative flex-1">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">
                          <Sparkles className="w-3 h-3" />
                          Free Audit
                        </div>
                        <h4 className="font-display text-2xl uppercase leading-[1.05] tracking-tight mb-2">
                          Not Sure <span className="text-primary">Where</span> You're Losing Leads?
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                          Get a 20-minute teardown of your HVAC marketing — SEO, ads, site, automation. Zero pitch.
                        </p>
                      </div>
                      <Link href="/contact" className="relative">
                        <Button size="sm" className="w-full font-bold tracking-wide uppercase" data-testid="button-mega-audit">
                          Claim My Audit <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          <Link href="/process" className={navItemClass(isActive("/process"))} data-testid="link-nav-process">Process</Link>
          <Link href="/faq" className={navItemClass(isActive("/faq"))} data-testid="link-nav-faq">FAQ</Link>
          <Link href="/contact" className={navItemClass(isActive("/contact"))} data-testid="link-nav-contact">Contact Us</Link>
          <Link href="/blog" className={navItemClass(isActive("/blog"))} data-testid="link-nav-blogs">Blogs</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="tel:8885554822"
            className="flex items-center gap-2 text-zinc-700 hover:text-primary transition-colors group"
            data-testid="link-nav-phone"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="leading-none">
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Call Us</div>
              <div className="text-sm font-bold text-zinc-800 group-hover:text-primary transition-colors">(888) 555-4822</div>
            </div>
          </a>
          <div className="w-px h-8 bg-zinc-200" />
          <Link href="/contact">
            <Button className="font-bold tracking-wide uppercase" data-testid="button-free-audit">Free Audit <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-zinc-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl py-3 px-4 flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
          <Link href="/" className="text-zinc-900 font-medium py-3 border-b border-zinc-100" data-testid="link-mobile-home">Home</Link>
          <Link href="/about" className="text-zinc-900 font-medium py-3 border-b border-zinc-100" data-testid="link-mobile-about">About Us</Link>

          <div className="border-b border-zinc-100">
            <button
              type="button"
              className="w-full flex items-center justify-between text-zinc-900 font-medium py-3"
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              aria-expanded={isMobileServicesOpen}
              data-testid="button-mobile-services"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isMobileServicesOpen && (
              <div className="pb-3 flex flex-col gap-1">
                {SERVICE_LINKS.map((s) => {
                  const Icon = s.Icon;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-3 px-2 py-2.5 rounded-md hover:bg-zinc-50"
                      data-testid={`link-mobile-service-${s.href.split("/").pop()}`}
                    >
                      <div className="shrink-0 w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-zinc-900 leading-tight">{s.label}</div>
                        <div className="text-xs text-zinc-500 mt-0.5 leading-snug">{s.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {PRIMARY_LINKS.filter((l) => !["Home", "About Us"].includes(l.label)).map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-900 font-medium py-3 border-b border-zinc-100" data-testid={`link-mobile-${l.label.toLowerCase().replace(/\s+/g, "-")}`}>
              {l.label}
            </Link>
          ))}

          <a
            href="tel:8885554822"
            className="flex items-center gap-3 py-3 border-b border-zinc-100 text-zinc-800"
            data-testid="link-mobile-phone"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Call Us</div>
              <div className="text-sm font-bold">(888) 555-4822</div>
            </div>
          </a>

          <Link href="/contact" className="pt-3">
            <Button className="w-full font-bold tracking-wide uppercase" data-testid="button-mobile-free-audit">Free Audit</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

// Counters Component
const AnimatedCounter = ({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <div ref={ref} className="text-3xl md:text-5xl font-display font-bold text-foreground">
      {prefix}{count}{suffix}
    </div>
  );
};

// Hero Lead Form (2-step)
type HeroFormData = {
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
  const [data, setData] = React.useState<HeroFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    monthlyLeads: "",
    challenge: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof HeroFormData, string>>>({});

  const update = (k: keyof HeroFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const updateSelect = (k: keyof HeroFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof HeroFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof HeroFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.monthlyLeads) e.monthlyLeads = "Required";
    if (!data.challenge.trim()) e.challenge = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Monthly Leads: ${data.monthlyLeads}\nWebsite: ${data.website}\nChallenge: ${data.challenge}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "General Inquiry", message }),
    });
    setSubmitted(true);
    toast({
      title: "Audit request received",
      description: "We'll reach out within 1 business hour with your free HVAC marketing audit.",
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
          Your free AEO + HVAC marketing audit is on the way. Check your email — we reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Free Audit · Worth $1,500
          </div>
          <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
            Get Your Free <span className="text-primary">HVAC Growth</span> Plan
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
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Full Name</label>
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-hero-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-hero-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-hero-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-hero-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
                <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-hero-company" />
                {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Website</label>
                <Input value={data.website} onChange={update("website")} placeholder="yourhvac.com" className={inputCls} data-testid="input-hero-website" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Monthly Leads Goal</label>
              <Select value={data.monthlyLeads} onValueChange={updateSelect("monthlyLeads")}>
                <SelectTrigger className={inputCls} data-testid="select-hero-leads">
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
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest Challenge</label>
              <Textarea
                value={data.challenge}
                onChange={update("challenge")}
                placeholder="e.g. Not ranking in Google Map Pack, ad spend not converting…"
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-hero-challenge"
              />
              {errors.challenge && <p className="text-xs text-red-400 mt-1">{errors.challenge}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white"
                data-testid="button-hero-back"
              >
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-hero-submit">
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

// Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] mix-blend-screen" />
      </div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Texas #1 trust badge */}
            <div className="inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-primary/15 to-orange-500/10 border border-primary/30 mb-5 shadow-lg shadow-primary/10 backdrop-blur-sm">
              <div className="flex items-center gap-0.5 px-1.5 py-1 rounded-full bg-zinc-900/60">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 1l2.6 6 6.4.6-4.8 4.4 1.4 6.4L10 15l-5.6 3.4L5.8 12 1 7.6l6.4-.6L10 1z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-foreground">
                Texas's <span className="text-primary">#1</span> HVAC Marketing Agency
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border-l border-primary/30 pl-3">
                <MapPin className="w-3 h-3 text-primary" /> TX
              </span>
            </div>

            {/* AEO secondary tag */}
            <div className="inline-flex items-center gap-2 mb-5 ml-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Built for the AEO Era · Dallas · Houston · San Antonio · Austin
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase leading-[0.95] tracking-tight mb-6">
              HVAC Growth Starts Here. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">Own The AEO Era.</span> <br />
              Get Found. Get Calls. Get Paid.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              <span className="text-foreground font-semibold">Texas's go-to growth partner for HVAC contractors.</span> We pair full-stack websites, local SEO, and Google Ads with <span className="text-foreground font-semibold">Answer Engine Optimization</span> — so when homeowners across Texas ask Google, ChatGPT, Gemini, or Perplexity for an HVAC pro, your phone rings first.
            </p>

            {/* AEO trust pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {[
                { label: "AEO Optimization", href: "/services/seo" },
                { label: "Local SEO", href: "/services/local-seo" },
                { label: "Google Ads", href: "/services/paid-ads" },
                { label: "Meta Ads", href: "/services/meta-ads" },
                { label: "Website Build", href: "/services/website-development" },
                { label: "Lead Automation", href: "/services/automation" },
              ].map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-primary/15 hover:border-primary/40 hover:text-primary transition-colors"
                  data-testid={`link-pill-${p.href.split("/").pop()}`}
                >
                  {p.label}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <AnimatedCounter end={200} suffix="+" />
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">HVAC Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter end={4.2} prefix="$" suffix="M" />
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">Revenue Generated</p>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter end={340} suffix="%" />
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">Avg Traffic Lift</p>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter end={98} suffix="%" />
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">Client Retention</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Lead form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <HeroLeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Pain Points / Solutions Component
const PainPoints = () => {
  const solutions: {
    problem: string;
    title: string;
    desc: string;
    Icon: React.ComponentType<{ className?: string }>;
    href: string;
  }[] = [
    {
      problem: "You're not in the Map Pack",
      title: "Local SEO that puts you at the top",
      desc: "We rebuild your Google Business Profile, clean up the citations no one's touched in years, and chase the keywords your neighbors are actually searching. Most clients see Map Pack movement inside 60–90 days.",
      Icon: MapPin,
      href: "/services/local-seo",
    },
    {
      problem: "Your ads are a money pit",
      title: "Paid ads that book real jobs",
      desc: "We've taken over $40k/month ad accounts producing almost zero tracked installs. We rebuild the whole thing — LSAs, Search, retargeting — and tie every dollar back to a phone call you can answer.",
      Icon: Target,
      href: "/services/paid-ads",
    },
    {
      problem: "Half your callers hang up first",
      title: "Catch every lead, even the ones you miss",
      desc: "If a homeowner calls and no one picks up by ring three, they're already dialing the next guy. Missed-call text-back, an AI that books appointments at 2am, and follow-ups that won't let leads go cold.",
      Icon: Zap,
      href: "/services/automation",
    },
    {
      problem: "Your site looks fine, converts terribly",
      title: "A website built to book jobs",
      desc: "Pretty doesn't pay the bills. We design the whole site around one question: how fast can a homeowner get from \"my AC is out\" to \"truck on the way?\" Usually under 30 seconds.",
      Icon: Code2,
      href: "/services/website-development",
    },
    {
      problem: "ChatGPT has never heard of you",
      title: "Show up when AI answers the question",
      desc: "More homeowners are asking ChatGPT and Gemini for an HVAC company than you'd guess — and they hire faster. We build the content, schema, and signals that get your business cited as the answer.",
      Icon: Sparkles,
      href: "/services/seo",
    },
    {
      problem: "Social and reviews are always last",
      title: "Social and reputation, handled",
      desc: "Posting once a quarter and chasing reviews when you remember isn't a strategy. We run the seasonal promos, post the content, and automate review requests so the 5-stars keep stacking up.",
      Icon: Share2,
      href: "/services/social-media",
    },
  ];

  return (
    <section id="pain-points" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
            <Settings className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">What we actually fix</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight text-zinc-900 mb-5 leading-[1.05]">
            If your phone isn't ringing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">one of these is why.</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Most HVAC shops we sit down with are losing jobs in the same six places. The good news?
            <span className="text-zinc-900 font-semibold"> We've fixed every one of them, dozens of times.</span> Pick the leak you want to plug first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={s.href}
                  className="group relative block h-full p-7 rounded-2xl bg-white border border-zinc-200 hover:border-primary/40 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  data-testid={`link-solution-${s.href.split("/").pop()}`}
                >
                  {/* Hover gradient sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Number tag */}
                  <div className="absolute top-5 right-5 text-5xl font-display text-zinc-100 group-hover:text-primary/15 transition-colors">
                    0{i + 1}
                  </div>

                  <div className="relative">
                    {/* Problem strikethrough pill */}
                    <div className="inline-flex items-center gap-1.5 mb-5">
                      <X className="w-3.5 h-3.5 text-rose-500" strokeWidth={3} />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500 line-through decoration-2 decoration-rose-500/40">
                        {s.problem}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display uppercase tracking-tight text-zinc-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-zinc-600 text-sm leading-relaxed mb-5">{s.desc}</p>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-1.5 text-sm font-bold text-primary uppercase tracking-wide">
                      <span>Solve This</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-[#0F1628] to-[#0A0F1E] p-8 md:p-10 text-white"
        >
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute -top-20 -right-10 w-80 h-80 bg-primary/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-2">
                Not sure which one is <span className="text-primary">hurting you the most?</span>
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                Give us 20 minutes. We'll pull up your numbers, show you exactly where you're leaking jobs, and tell you which fix matters first. No pitch, no contract.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button size="lg" className="h-12 px-7 font-bold uppercase tracking-wide whitespace-nowrap" data-testid="button-pain-cta">
                Get My Free Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    { title: "Brand Identity", desc: "Look like the #1 HVAC company in your city (logo, van wraps, uniforms, flyers)." },
    { title: "Website Design & UI/UX", desc: "High-converting landing pages, mobile-first, lightning-fast, built to book calls." },
    { title: "Local SEO", desc: "Google Business Profile optimization, citation building, local keyword domination." },
    { title: "AEO (Answer Engine Optimization)", desc: "Optimizing for AI search (ChatGPT, Gemini, Perplexity) — the future of search." },
    { title: "SEO (Organic Search)", desc: "On-page, technical SEO, content strategy, long-form HVAC articles, schema markup." },
    { title: "PPC & Google Ads", desc: "Google LSA, search ads, seasonal campaigns, call-only ads, conversion tracking." },
    { title: "Social Media Marketing", desc: "Facebook/Instagram ads, organic content, seasonal promotions." },
    { title: "Reputation Management", desc: "Automated review generation, Google review responses, 5-star systems." },
    { title: "Marketing Automation", desc: "CRM setup, missed call text-back, follow-up sequences, booking bots." },
    { title: "AI Chatbots & Lead Capture", desc: "24/7 website chatbots, lead qualification, instant response systems." }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">30-Day Lead Guarantee</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-4">
            The HVAC Growth Engine — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">Guaranteed.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One team running everything that brings you jobs — from your Google rankings to the bot that books appointments at 2am. Wired together, tracked end-to-end, and backed by a real promise.
          </p>
        </motion.div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-primary/10 to-orange-500/15 p-6 md:p-7 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center gap-5 md:gap-6">
            {/* Shield Seal */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-xl shadow-primary/40">
                <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-zinc-900 border-2 border-primary flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Our Promise To You</div>
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight leading-tight text-foreground mb-1">
                Qualified leads in 30 days — or you don't pay us.
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                We're so sure the engine works, we put our fee on the line. Real leads, tracked in your CRM, in the first 30 days. If they don't show up, neither does our invoice.
              </p>
            </div>

            <div className="shrink-0 hidden md:flex flex-col items-center justify-center px-5 border-l border-primary/30">
              <div className="font-display text-5xl text-primary leading-none">30</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Day Promise</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,107,43,0.3)] flex items-start gap-4"
            >
              <div className="mt-1 text-primary">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Differentiators Component
const WhyUs = () => {
  const points = [
    { title: "We only work with HVAC", desc: "We know the difference between a 3-ton split and a package unit. We've seen what works in your industry — across hundreds of accounts. No generalist guesswork." },
    { title: "Full-funnel, not just ads", desc: "Most agencies hand you traffic and call it a day. We follow the lead from the first Google search all the way to the booked install — and fix what's broken in between." },
    { title: "Built for the AEO era", desc: "Old SEO is fading. Homeowners ask ChatGPT, Gemini, and Perplexity for HVAC help every day. We make sure your business is the answer they get back." },
    { title: "Done-for-you, top to bottom", desc: "You run the company. We run the growth. No homework, no \"can you send us your logo files\" emails six times. Hand it off and get back to the trucks." },
    { title: "Numbers you can actually trust", desc: "Live dashboards, weekly Loom walkthroughs, and a single line on every report: how many booked jobs we generated this week. Nothing vague, nothing fluffy." },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Soft accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Texas's #1 HVAC Marketing Agency</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display uppercase tracking-tight text-zinc-900 leading-[1.05] mb-5">
              Built for Texas HVAC. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">Not another generalist agency.</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-10">
              Most agencies run plumbers, roofers, dentists, and HVAC out of the same playbook. We don't. We live and work in Texas — we know your peak season, the I-4 corridor competition, and the exact words a Dallas or Houston homeowner types the day their AC dies in 95° heat.
            </p>
            <div className="flex flex-col gap-5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center flex-shrink-0 text-white font-display text-sm shadow-md shadow-primary/30 group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">{point.title}</h4>
                    <p className="text-zinc-600 leading-relaxed text-[15px]">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image frame */}
            <div className="relative aspect-[4/5] lg:aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-900/20">
              <img
                src={hvacProImage}
                alt="HVAC technician inspecting modern AC unit"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Soft brand overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating stat card — top left */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -left-4 md:-left-8 bg-white rounded-2xl shadow-2xl border border-zinc-100 p-4 max-w-[220px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-display text-2xl text-zinc-900 leading-none">+342%</div>
                  <div className="text-[11px] text-zinc-500 uppercase tracking-wider mt-1">Avg lead lift</div>
                </div>
              </div>
            </motion.div>

            {/* Floating reviews card — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl shadow-2xl border border-zinc-100 p-4 max-w-[240px]"
            >
              <div className="flex items-center gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 1l2.6 6 6.4.6-4.8 4.4 1.4 6.4L10 15l-5.6 3.4L5.8 12 1 7.6l6.4-.6L10 1z" />
                  </svg>
                ))}
                <span className="text-xs font-bold text-zinc-900 ml-1">4.9</span>
              </div>
              <div className="text-xs text-zinc-600 leading-snug">
                <span className="font-semibold text-zinc-900">"Booked solid in 6 weeks."</span> Across <span className="font-semibold text-primary">200+</span> HVAC clients.
              </div>
            </motion.div>

            {/* Floating live pipeline pill — middle right */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute top-1/2 -right-3 md:-right-6 -translate-y-1/2 bg-zinc-900 text-white rounded-full px-4 py-2 shadow-2xl flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">12 leads today</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Process Component
const Process = () => {
  const steps = [
    {
      title: "Free Texas HVAC Marketing Audit",
      desc: "We pull your numbers, your competitors, your Google Business Profile, your reviews, and your site speed — and show you exactly where leads are leaking. No pitch, no contract.",
      timing: "Day 1 · Free",
      Icon: Search,
    },
    {
      title: "Custom Texas Growth Strategy",
      desc: "A 90-day roadmap built around your service area — Dallas, Houston, San Antonio, Austin, or wherever you run trucks. Channels, budgets, and revenue targets, mapped to the calendar.",
      timing: "Week 1",
      Icon: Target,
    },
    {
      title: "Brand & Digital Foundation",
      desc: "We rebuild your website to convert, refresh your brand identity, fix your local listings, and clean up the basics most agencies skip. Foundation first — then we pour the gas.",
      timing: "Week 2–4",
      Icon: Palette,
    },
    {
      title: "Local SEO & Map Pack Domination",
      desc: "We optimize your Google Business Profile, build location pages for every Texas city you serve, fix citations, and stack the schema so you climb into the 3-pack and stay there.",
      timing: "Week 3+",
      Icon: MapPin,
    },
    {
      title: "Paid Campaigns Launch",
      desc: "Google LSAs, Search Ads, retargeting, and Meta — built around tracked phone calls and booked installs, not vanity clicks. Every dollar tied to a job in your CRM.",
      timing: "Week 4 · Live",
      Icon: MousePointerClick,
    },
    {
      title: "AEO & Content Engine",
      desc: "We feed ChatGPT, Gemini, and Perplexity the answers they're looking for — schema, FAQs, neighborhood pages, and weekly content — so your business is the one AI recommends to Texas homeowners.",
      timing: "Week 4–8",
      Icon: Sparkles,
    },
    {
      title: "Automate, Track & Scale",
      desc: "Missed-call text-back, AI booking bot, automated review requests, and a live dashboard. Every lead caught, every job tracked, and the playbook scaled across your service area.",
      timing: "Ongoing",
      Icon: Settings,
    },
  ];

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">7-Step Texas Growth Blueprint</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display uppercase tracking-tight mb-4 leading-[1.05]">
            The Blueprint to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">Domination.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The exact 7-step system we run for every Texas HVAC contractor we take on. Audit to automation, all under one roof.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const StepIcon = step.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex items-center mb-10 last:mb-0 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} pl-16 md:pl-0`}
              >
                {/* Step number medallion */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-card border-2 border-primary rounded-full flex flex-col items-center justify-center font-display text-foreground -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(255,107,43,0.35)]">
                  <span className="text-[10px] font-bold uppercase text-primary tracking-wider leading-none">Step</span>
                  <span className="text-xl font-bold leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className={`md:w-1/2 ${isLeft ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,107,43,0.08)] transition-all">
                    <div className={`flex items-start gap-4 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-orange-500/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <StepIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`flex items-center gap-2 mb-2 ${isLeft ? '' : 'md:justify-end'}`}>
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                            {step.timing}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">{step.title}</h3>
                        <p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA tail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground mb-5">Want to see what step 1 looks like for your shop?</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-8 py-6 text-base shadow-[0_0_30px_rgba(255,107,43,0.4)]">
            Get My Free Texas Audit <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Case Studies Component
const CaseStudies = () => {
  const studies = [
    {
      name: "Phoenix HVAC Co",
      stats: "0 to 47 leads/mo",
      time: "90 days",
      services: "SEO + Website + LSA",
      desc: "Completely invisible online. We launched a high-converting site and dominated Local Service Ads instantly."
    },
    {
      name: "Dallas Heating & Air",
      stats: "+289% Visibility",
      time: "6 months",
      services: "Full Suite + AEO",
      desc: "Stuck on page 3. We rebuilt their schema, deployed massive localized content, and took over the Map Pack."
    },
    {
      name: "Chicago Climate Pros",
      stats: "15hrs/wk Saved",
      time: "30 days",
      services: "Automation + CRM",
      desc: "Drowning in admin work. We deployed missed-call text-backs, AI booking bots, and automated review requests."
    }
  ];

  return (
    <section id="results" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-4">
            Numbers Don't Lie
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results for real HVAC contractors. We treat your budget like our own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">{study.time}</div>
                <h3 className="text-4xl font-display text-foreground mb-4">{study.stats}</h3>
                <h4 className="text-lg font-bold mb-2">{study.name}</h4>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{study.desc}</p>
                <div className="text-xs font-bold bg-muted/50 inline-block px-3 py-1 rounded-md text-foreground">
                  {study.services}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const featured = {
    name: "Marcus Reyes",
    role: "Owner",
    company: "Reyes Heating & Cooling",
    city: "Dallas, TX",
    initials: "MR",
    quote: "I'd been burned by two agencies before HVAC Digitals. Within 60 days they had my Google Business Profile in the 3-pack for every Dallas zip code I service, and my calendar booked out three weeks in advance with high-ticket installs. I stopped buying HomeAdvisor leads completely.",
    stats: [
      { value: "+312%", label: "Booked installs" },
      { value: "3wks", label: "Booked out" },
      { value: "$0", label: "Spent on shared leads" },
    ],
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "GM",
      company: "Altitude Air",
      city: "San Antonio, TX",
      initials: "SJ",
      quote: "I'd been burned by three 'agencies' before. These guys actually know HVAC. LSA ads were printing inside week one and we haven't looked back.",
      stat: "47 leads / week",
    },
    {
      name: "David Chen",
      role: "Owner",
      company: "Chen Climate Control",
      city: "Houston, TX",
      initials: "DC",
      quote: "The missed-call text-back alone saved me $12k in lost jobs last month when we were too busy to answer the phone. Pays for itself ten times over.",
      stat: "$12k saved / mo",
    },
    {
      name: "Tom Mitchell",
      role: "Owner",
      company: "Mitchell Mechanical",
      city: "Austin, TX",
      initials: "TM",
      quote: "We own the Google Map pack now. Every time someone searches AC repair in my zip code, we're the first thing they see. Revenue up 40% YoY.",
      stat: "+40% YoY revenue",
    },
    {
      name: "Greg Larsen",
      role: "President",
      company: "Larsen & Sons HVAC",
      city: "Fort Worth, TX",
      initials: "GL",
      quote: "Stop wasting money on Angie's List and hire HVAC Digitals. Their team built us a brand that makes us look like the biggest player in South Texas.",
      stat: "#1 in 9 zip codes",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft accent washes */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Real Texas HVAC owners</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display uppercase tracking-tight text-zinc-900 leading-[1.05] mb-4">
            Don't take our word for it. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">Take theirs.</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Texas HVAC owners who fired their last agency and never looked back.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mb-16"
        >
          <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-3xl p-8 md:p-12 lg:p-14 shadow-2xl shadow-zinc-900/30 overflow-hidden">
            {/* Large quote mark */}
            <div className="absolute top-6 right-8 md:top-10 md:right-12 text-primary/15 select-none pointer-events-none">
              <svg className="w-32 h-32 md:w-44 md:h-44" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17h3l2-4V7H2v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z" />
              </svg>
            </div>

            {/* Decorative gradient orb */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 1l2.6 6 6.4.6-4.8 4.4 1.4 6.4L10 15l-5.6 3.4L5.8 12 1 7.6l6.4-.6L10 1z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-xs font-bold uppercase tracking-wider text-amber-400">Verified · Google Review</span>
                </div>

                {/* Quote */}
                <p className="text-white text-xl md:text-2xl lg:text-[1.65rem] leading-snug font-medium mb-8">
                  "{featured.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 bg-gradient-to-br from-primary to-orange-500 border-2 border-primary/40 text-white font-display text-lg">
                    <AvatarFallback className="bg-transparent">{featured.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-white text-base">{featured.name}</h4>
                    <p className="text-sm text-zinc-400">
                      {featured.role}, {featured.company} <span className="text-primary">·</span> {featured.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat panel */}
              <div className="lg:border-l lg:border-white/10 lg:pl-12 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:min-w-[180px]">
                {featured.stats.map((s, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="font-display text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-primary via-orange-400 to-amber-300 leading-none mb-1.5">
                      {s.value}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Smaller testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-16">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white border border-zinc-100 shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 1l2.6 6 6.4.6-4.8 4.4 1.4 6.4L10 15l-5.6 3.4L5.8 12 1 7.6l6.4-.6L10 1z" />
                  </svg>
                ))}
              </div>

              {/* Stat tag */}
              <div className="inline-flex w-fit items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                <TrendingUp className="w-3 h-3 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{test.stat}</span>
              </div>

              {/* Quote */}
              <p className="text-zinc-700 text-[14.5px] leading-relaxed mb-5 flex-1">"{test.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <Avatar className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 border border-primary/30 text-white font-display text-sm">
                  <AvatarFallback className="bg-transparent">{test.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h4 className="font-bold text-zinc-900 text-sm truncate">{test.name}</h4>
                  <p className="text-[11px] text-zinc-500 truncate">{test.company}</p>
                  <p className="text-[11px] text-primary font-semibold flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" /> {test.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-8 py-6 rounded-2xl bg-gradient-to-r from-zinc-50 to-orange-50/50 border border-zinc-100">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 1l2.6 6 6.4.6-4.8 4.4 1.4 6.4L10 15l-5.6 3.4L5.8 12 1 7.6l6.4-.6L10 1z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className="font-display text-xl text-zinc-900 leading-none">5.0</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Avg Google Rating</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-zinc-200" />
            <div className="text-center">
              <div className="font-display text-xl text-zinc-900 leading-none">200+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">Texas HVAC Clients</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-zinc-200" />
            <div className="text-center">
              <div className="font-display text-xl text-zinc-900 leading-none">$14M+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">Revenue Tracked</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-zinc-200" />
            <div className="text-center">
              <div className="font-display text-xl text-zinc-900 leading-none">94%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">Client Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const faqs = [
    { q: "How long does SEO take to see results?", a: "While PPC gets you leads on day one, organic SEO is a marathon, not a sprint. You'll typically see movement in the first 30-60 days, but substantial, business-altering growth usually kicks in around months 3-6 depending on your local competition." },
    { q: "Do you work with my competitors?", a: "No. We enforce strict territorial exclusivity. We only partner with ONE HVAC contractor per service area to ensure our interests align 100% with yours." },
    { q: "What is AEO and why do I need it?", a: "AEO stands for Answer Engine Optimization. Instead of typing into Google, homeowners are asking ChatGPT and Gemini 'Who is the best AC repair near me?' We optimize your business to be the answer those AIs provide." },
    { q: "Do I need a new website?", a: "Usually, yes. Driving traffic to a poorly converting website is burning money. If your site isn't built for speed, mobile usage, and clear lead capture, we'll build you one that is." },
    { q: "Are there long-term contracts?", a: "We operate on 90-day initial sprints to prove our value, transitioning to month-to-month afterward. If we aren't making you money, we don't deserve to keep you trapped in a contract." },
    { q: "What's included in marketing automation?", a: "We set up CRM systems that automatically text back missed calls, send review requests after completed jobs, and follow up with old quotes to close deals you thought were dead." },
    { q: "How do you track ROI?", a: "Every campaign is tracked to the penny. We use dynamic call tracking, form attributions, and CRM integrations so you know exactly which ad or keyword brought in a specific $15k install." },
    { q: "How much should I spend on ads?", a: "It depends on your market and goals. We recommend a minimum ad budget of $1,500/mo (separate from our fee) to generate enough data and leads for a profitable campaign." },
    { q: "How involved do I need to be?", a: "Very little. After our initial onboarding and strategy call, we handle the heavy lifting. You just need to answer the phone and close the deals." },
    { q: "What reporting do I get?", a: "You get a live 24/7 dashboard showing leads, cost per lead, and pipeline value, plus a video breakdown every month explaining exactly what we did and what's next." }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Lead Capture Form Schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  businessName: z.string().min(2, "Business name is required"),
  city: z.string().min(2, "City is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  revenue: z.string().min(1, "Please select an option"),
  challenge: z.string().min(1, "Please select an option"),
});

const LeadCapture = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      city: "",
      phone: "",
      email: "",
      revenue: "",
      challenge: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    const message = `Business: ${values.businessName}\nCity: ${values.city}\nRevenue: ${values.revenue}\nChallenge: ${values.challenge}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: values.name, email: values.email, phone: values.phone, company: values.businessName, service: "General Inquiry", message }),
    });
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Audit Request Received!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  return (
    <section id="audit" className="py-24 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-background rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left info side */}
          <div className="bg-primary p-8 md:p-12 md:w-5/12 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[50px] -mr-20 -mt-20 pointer-events-none" />
             
             <div className="relative z-10">
               <div className="inline-block bg-black/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                 Urgent: 3 Spots Left
               </div>
               <h2 className="text-3xl md:text-4xl font-display text-white uppercase leading-tight mb-4">
                 Ready To Dominate Your Local HVAC Market?
               </h2>
               <p className="text-white/80 mb-8">
                 Claim your free, no-obligation video audit. We'll show you exactly why your competitors are winning and how to steal their lunch.
               </p>
             </div>

             <div className="relative z-10 flex flex-col gap-4 text-white">
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 text-black/50" />
                 <span className="font-medium text-sm">Deep SEO & Ad Analysis</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 text-black/50" />
                 <span className="font-medium text-sm">Competitor Teardown</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 text-black/50" />
                 <span className="font-medium text-sm">Custom 90-Day Roadmap</span>
               </div>
             </div>
          </div>

          {/* Form side */}
          <div className="p-8 md:p-12 md:w-7/12">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Request Received</h3>
                <p className="text-muted-foreground">
                  Our team is reviewing your details. We will reach out within 24 hours to schedule your audit review.
                </p>
                <Button variant="outline" onClick={() => { setIsSuccess(false); form.reset(); }} className="mt-4">
                  Submit Another
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-card border-border" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe HVAC" className="bg-card border-border" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" className="bg-card border-border" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@doehvac.com" className="bg-card border-border" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service City/Area</FormLabel>
                        <FormControl>
                          <Input placeholder="Austin, TX" className="bg-card border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Revenue Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-card border-border">
                              <SelectValue placeholder="Select a range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<50k">Less than $50k</SelectItem>
                            <SelectItem value="50-100k">$50k - $100k</SelectItem>
                            <SelectItem value="100-250k">$100k - $250k</SelectItem>
                            <SelectItem value="250-500k">$250k - $500k</SelectItem>
                            <SelectItem value=">500k">$500k+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Biggest Challenge Right Now</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-card border-border">
                              <SelectValue placeholder="What's holding you back?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="leads">Not enough leads</SelectItem>
                            <SelectItem value="ads">Wasting money on ads</SelectItem>
                            <SelectItem value="website">Bad website / No online presence</SelectItem>
                            <SelectItem value="branding">Need branding / Professional look</SelectItem>
                            <SelectItem value="automation">Want automation / Too much admin</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base font-bold uppercase tracking-wider mt-6" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Claim My Free HVAC Audit"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Email Form (isolated state)
const FooterEmailForm = () => {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Website Visitor", email, service: "Free Audit (Email Capture)", message: "Submitted via footer email form." }),
    });
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 h-14 px-5 rounded-md bg-white/5 border border-primary/30">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="text-sm text-white font-semibold">Audit request received — check your inbox!</span>
      </div>
    );
  }

  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
      <div className="relative flex-1">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          className="w-full h-14 pl-12 pr-4 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
          data-testid="input-footer-email"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-14 px-7 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_10px_30px_-5px_rgba(255,107,43,0.5)] whitespace-nowrap disabled:opacity-60"
        data-testid="button-footer-submit"
      >
        {status === "submitting" ? "Sending..." : "Get My Audit"}
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

// Footer Component
export const Footer = () => {
  const services = [
    { label: "Google Ads & LSA", href: "/services/paid-ads" },
    { label: "Meta (Facebook & Instagram) Ads", href: "/services/meta-ads" },
    { label: "HVAC SEO & AEO", href: "/services/seo" },
    { label: "Local SEO & Map Pack", href: "/services/local-seo" },
    { label: "HVAC Website Design", href: "/services/website-development" },
    { label: "Social Media Management", href: "/services/social-media" },
    { label: "Marketing Automation", href: "/services/automation" },
  ];

  const serviceAreas = [
    "Dallas, TX",
    "Houston, TX",
    "San Antonio, TX",
    "Austin, TX",
    "Fort Worth, TX",
    "St. Petersburg, TX",
    "Cape Coral, TX",
    "El Paso, TX",
    "Corpus Christi, TX",
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Case Studies", href: "/#results" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const resources = [
    { label: "Free Marketing Audit", href: "/contact" },
    { label: "ROI Calculator", href: "#" },
    { label: "HVAC Marketing Guide", href: "#" },
    { label: "AEO Playbook (2026)", href: "#" },
    { label: "Lead Tracking Demo", href: "#" },
  ];

  return (
    <footer className="relative bg-[#06091A] text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/5 blur-[140px]" />
      </div>

      {/* Pre-footer CTA Band */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Free Texas HVAC Audit</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[1.05] mb-3">
                Ready to <span className="text-primary">Dominate</span> Your<br className="hidden md:block" /> Texas Service Area?
              </h3>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl">
                Get a 30-minute strategy session and a no-fluff marketing audit of your business — including your competitors' weak spots.
              </p>
            </div>
            <div className="lg:col-span-5">
              <FooterEmailForm />
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>24-hour response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Texas HVAC only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="relative container mx-auto px-4 md:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5" data-testid="link-footer-logo">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-display text-2xl leading-none shadow-lg shadow-primary/30">
                H
              </div>
              <span className="font-display text-2xl tracking-wide text-white">
                HVAC <span className="text-primary">DIGITALS</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              Texas's #1 marketing agency for HVAC contractors. We build lead-generation machines for AC repair, install, and commercial pros from Dallas to Houston.
            </p>

            <div className="space-y-3 mb-6">
              <a href="tel:8885554822" className="group flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors" data-testid="link-footer-phone">
                <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <Phone className="w-4 h-4 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500">Call us</div>
                  <div className="font-bold">(888) 555-4822</div>
                </div>
              </a>
              <a href="mailto:hello@hvacdigitals.com" className="group flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors" data-testid="link-footer-email">
                <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <Mail className="w-4 h-4 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500">Email us</div>
                  <div className="font-bold">hello@hvacdigitals.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500">HQ</div>
                  <div className="font-bold">400 N Ashley Dr, Dallas, TX 33602</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3">Follow Us</div>
              <div className="flex gap-2">
                {[
                  { Icon: Facebook, label: "Facebook", href: "#" },
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hvacdigitals/" },
                  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nauman-ai-automation-expert/" },
                  { Icon: Youtube, label: "YouTube", href: "#" },
                  { Icon: Twitter, label: "Twitter", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-primary hover:border-primary hover:text-white transition-all hover:-translate-y-0.5"
                    data-testid={`link-social-${label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base uppercase tracking-[0.15em] text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-1 text-sm text-zinc-400 hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 -ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base uppercase tracking-[0.15em] text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              Texas
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((city) => (
                <li key={city}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors">
                    <MapPin className="w-3 h-3 text-primary/60 group-hover:text-primary" />
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base uppercase tracking-[0.15em] text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-1 text-sm text-zinc-400 hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 -ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base uppercase tracking-[0.15em] text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    className="group flex items-start gap-1.5 text-sm text-zinc-400 hover:text-primary transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary mt-0.5 flex-shrink-0" />
                    <span>{r.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust / Awards Strip */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="w-11 h-11 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">Certified</div>
                <div className="text-sm font-bold text-white">Google Partner</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="w-11 h-11 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">Rated</div>
                <div className="text-sm font-bold text-white">5.0 / 5.0 ★ (210+ reviews)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="w-11 h-11 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">Trusted</div>
                <div className="text-sm font-bold text-white">200+ TX HVAC Pros</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="w-11 h-11 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold">Support</div>
                <div className="text-sm font-bold text-white">24/7 Account Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/30">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-zinc-500">
              <p>© {new Date().getFullYear()} HVAC Digitals, LLC. All rights reserved.</p>
              <div className="hidden md:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Now booking Q3 2026</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors">Sitemap</a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors">Accessibility</a>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <p className="text-center md:text-left max-w-2xl">
              HVAC Digitals is a private marketing agency exclusively serving licensed HVAC contractors in Texas. Results vary by market and effort. Not affiliated with Google, Meta, or any state licensing board.
            </p>
            <p className="flex items-center gap-1.5 whitespace-nowrap">
              Engineered for <Zap className="w-3 h-3 text-primary fill-primary" /> Texas growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Digitals | Texas's #1 HVAC Marketing Agency"
        description="Grow your HVAC business in Texas with full-stack digital marketing — local SEO, Google Ads, AEO, and websites built exclusively for HVAC contractors."
        canonical="https://hvacdigitals.com/"
      />
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <WhyUs />
        <Process />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
