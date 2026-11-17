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
  AlertTriangle,
  XCircle,
  Flame,
  MessageSquare,
  Mail,
  RefreshCw,
  Clock,
  Star,
  Bell,
  Workflow,
  BarChart3,
  Settings2,
  Users,
  Calendar,
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
type AutoFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  crm: string;
  gap: string;
};

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = React.useState<1 | 2>(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState<AutoFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    crm: "",
    gap: "",
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof AutoFormData, string>>>({});

  const update = (k: keyof AutoFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      setErrors((er) => ({ ...er, [k]: undefined }));
    };
  const updateSelect = (k: keyof AutoFormData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validateStep1 = () => {
    const e: Partial<Record<keyof AutoFormData, string>> = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Partial<Record<keyof AutoFormData, string>> = {};
    if (!data.company.trim()) e.company = "Required";
    if (!data.crm) e.crm = "Required";
    if (!data.gap.trim()) e.gap = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) setStep(2); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    const message = `Current CRM: ${data.crm}\nBiggest Gap: ${data.gap}`;
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, company: data.company, service: "Lead Automation", message }),
    });
    setSubmitted(true);
    toast({
      title: "Automation audit request received",
      description: "We will review your lead flow and reach out within 1 business hour.",
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
          We will map your lead flow and reach out within <span className="text-primary font-semibold">1 business hour</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 md:p-7 shadow-2xl">
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3" /> Free Lead Flow Audit · Worth $1,000
        </div>
        <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white leading-tight">
          Get Your Free <span className="text-primary">Lead Automation Audit</span> Now
        </h3>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <div className="flex-1 flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>1</div>
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 1 ? "text-white" : "text-white/40"}`}>Contact</span>
        </div>
        <div className={`h-px flex-1 ${step >= 2 ? "bg-primary" : "bg-white/10"}`} />
        <div className="flex-1 flex items-center gap-2 justify-end">
          <span className={`text-xs font-semibold uppercase tracking-wide ${step >= 2 ? "text-white" : "text-white/40"}`}>Your Setup</span>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>2</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Full Name</label>
              <Input value={data.name} onChange={update("name")} placeholder="John Smith" className={inputCls} data-testid="input-auto-name" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Work Email</label>
              <Input type="email" value={data.email} onChange={update("email")} placeholder="john@yourhvac.com" className={inputCls} data-testid="input-auto-email" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Phone Number</label>
              <Input type="tel" value={data.phone} onChange={update("phone")} placeholder="(555) 123-4567" className={inputCls} data-testid="input-auto-phone" />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
            <Button type="button" onClick={handleNext} className="w-full h-12 font-bold uppercase tracking-wide" data-testid="button-auto-next">
              Continue <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Company</label>
              <Input value={data.company} onChange={update("company")} placeholder="Cool Air HVAC" className={inputCls} data-testid="input-auto-company" />
              {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Current CRM or Field Software</label>
              <Select value={data.crm} onValueChange={updateSelect("crm")}>
                <SelectTrigger className={inputCls} data-testid="select-auto-crm">
                  <SelectValue placeholder="What software do you use?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No CRM — using spreadsheets or nothing</SelectItem>
                  <SelectItem value="servicetitan">ServiceTitan</SelectItem>
                  <SelectItem value="housecallpro">Housecall Pro</SelectItem>
                  <SelectItem value="jobber">Jobber</SelectItem>
                  <SelectItem value="gohighlevel">GoHighLevel</SelectItem>
                  <SelectItem value="other">Other CRM</SelectItem>
                </SelectContent>
              </Select>
              {errors.crm && <p className="text-xs text-red-400 mt-1">{errors.crm}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70 block mb-1.5">Biggest Lead Follow-Up Gap</label>
              <Textarea
                value={data.gap}
                onChange={update("gap")}
                placeholder="e.g. Leads come in and we forget to call back, no review requests being sent, missed calls going unanswered..."
                rows={3}
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-primary resize-none"
                data-testid="textarea-auto-gap"
              />
              {errors.gap && <p className="text-xs text-red-400 mt-1">{errors.gap}</p>}
            </div>
            <div className="flex gap-3 pt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 font-bold uppercase tracking-wide bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white" data-testid="button-auto-back">
                Back
              </Button>
              <Button type="submit" className="flex-1 h-12 font-bold uppercase tracking-wide" data-testid="button-auto-submit">
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
    { value: "78%", label: "Of leads hire the first company to respond" },
    { value: "21×", label: "More conversions when responding within 5 min" },
    { value: "47 hrs", label: "Avg. HVAC response time without automation" },
  ];

  const trust = [
    "Built on GoHighLevel, ServiceTitan, and Housecall Pro",
    "Done-for-you setup — no tech knowledge required",
    "Active in under 14 days",
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
          <span className="text-white font-bold">Lead Generation Automation</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Workflow className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                HVAC Lead Generation Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight text-white mb-6"
            >
              How Much Revenue<br />
              Are You Losing From<br />
              <span className="text-primary">Slow Follow-Up?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-8"
            >
              78% of HVAC leads hire the first company to respond. We build automated follow-up systems that respond to every new lead in under 2 minutes — while you are on a job, in a truck, or asleep — so you stop losing booked jobs to slower competitors.
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
      icon: Clock,
      title: "The average HVAC company takes 47 hours to follow up",
      body: "A homeowner who submits a web form at 9am is calling three companies at the same time. The average HVAC company calls back the next day. The company that called in 4 minutes already has a scheduled appointment. Manual follow-up loses jobs to speed, every single day.",
    },
    {
      icon: Phone,
      title: "Missed calls that go permanently unanswered",
      body: "Between 30 and 40% of inbound HVAC calls go to voicemail. Of those, fewer than half leave a message. The homeowner hangs up and calls the next company. A missed call text-back sent within 60 seconds recovers 35 to 40% of those calls with a single automated message.",
    },
    {
      icon: Mail,
      title: "Estimates sent and then completely forgotten",
      body: "An HVAC company sends 20 estimates per week. Without a follow-up sequence, the ones that do not respond immediately are silently lost. A 3-step estimate follow-up sequence (sent immediately, 3-day nudge, 7-day close) recovers an average of 22% of non-responsive estimates.",
    },
    {
      icon: Star,
      title: "No review requests going out after completed jobs",
      body: "Google reviews are the single most important local ranking and trust signal for HVAC companies. Most HVAC companies ask verbally and hope. An automated SMS review request sent 24 hours after job completion generates 3 to 5 times more reviews than verbal requests — consistently, every job, every time.",
    },
    {
      icon: Repeat,
      title: "Past customers sitting dormant with no re-engagement",
      body: "An HVAC customer who had AC maintenance two years ago is due for another service. They have not thought about you since the last invoice. A seasonal re-engagement campaign sent to your past customer list generates repeat jobs at near-zero acquisition cost — typically $12 to $18 per recovered job.",
    },
    {
      icon: Bell,
      title: "Seasonal demand spikes with zero advance warming",
      body: "Texas HVAC companies experience predictable demand spikes every April and October. Companies with automated seasonal campaigns activate their past customer list 4 weeks before peak season and arrive fully booked. Companies without automation scramble for ad spend when everyone else is already booked out.",
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
              The Automation Gap
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            How Much Revenue Are HVAC<br />
            Companies Losing From<br />
            <span className="text-primary">Slow Lead Follow-Up?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Every HVAC company loses leads daily — not from a lack of marketing, but from a lack of speed and systems. These are the six follow-up gaps costing Texas HVAC companies the most bookings.
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
// AUTOMATION WORKFLOWS
// =============================================================================
const AutomationWorkflows = () => {
  const workflows = [
    {
      icon: Phone,
      name: "Missed Call Text-Back",
      trigger: "Trigger: Call goes unanswered",
      timing: "Response: Within 60 seconds",
      body: "When a homeowner calls and hits voicemail, an automatic SMS fires within 60 seconds: your company name, a brief acknowledgement, and a direct booking link. Recovers 35 to 40% of missed call leads that would otherwise call the next company on Google.",
      steps: [
        "Call goes to voicemail or rings unanswered",
        "Instant SMS: personalised message with your name and a callback option",
        "If no response in 2 hours: second follow-up SMS",
        "Lead logged automatically in your CRM",
      ],
    },
    {
      icon: MessageSquare,
      name: "New Lead Response Sequence",
      trigger: "Trigger: Web form or ad form submission",
      timing: "First touch: Under 2 minutes",
      body: "A homeowner fills in your contact form at 11pm. Without automation, they wait until morning. With automation, an SMS acknowledges their inquiry within 90 seconds, an email confirms receipt, and a 3-step follow-up sequence runs over the next 7 days until they respond or book.",
      steps: [
        "Instant SMS acknowledgement (under 90 seconds)",
        "Instant email confirmation with your service area and hours",
        "Day 2: SMS check-in with a soft call to action",
        "Day 7: Final follow-up with a seasonal offer or urgency hook",
      ],
    },
    {
      icon: Mail,
      name: "Estimate Follow-Up Sequence",
      trigger: "Trigger: Estimate sent, no response",
      timing: "Sequence: Day 0, Day 3, Day 7",
      body: "You send a replacement quote. No response. Most companies send one follow-up call and give up. Our 3-touch sequence runs automatically: an immediate email confirmation, a 3-day value-add nudge, and a 7-day close with a limited-time offer. Recovers an average of 22% of non-responsive estimates.",
      steps: [
        "Immediate: Estimate delivery email with a summary of what is included",
        "Day 3: SMS nudge with a question (do you have any questions about the quote?)",
        "Day 7: Email with a time-limited offer or financing mention",
        "Booked: Sequence stops automatically and booking confirmation fires",
      ],
    },
    {
      icon: Star,
      name: "Post-Job Review Request",
      trigger: "Trigger: Job marked complete in field software",
      timing: "Request: 24 hours post-completion",
      body: "When a technician marks a job complete in ServiceTitan, Housecall Pro, or Jobber, an automated SMS review request fires 24 hours later. The homeowner receives a personalised message with a direct link to your Google Business Profile. Generates 3 to 5 times more reviews than verbal requests.",
      steps: [
        "Job marked complete in your field management software",
        "24-hour delay (homeowner has time to experience the service)",
        "Personalised SMS with a direct Google review link",
        "If no review in 3 days: one polite follow-up email",
      ],
    },
    {
      icon: Repeat,
      name: "Re-Engagement Campaign",
      trigger: "Trigger: Customer inactive for 12 months",
      timing: "Campaign: 3 touches over 30 days",
      body: "Every customer in your database who has not booked in 12 months is a warm re-engagement opportunity. We build seasonal win-back campaigns that run automatically each spring and fall: a reminder that their AC is due for service, a maintenance offer, and a direct booking link.",
      steps: [
        "Filter: Customers with no booking in the last 12 months",
        "Email 1: Seasonal reminder with your logo and a service checklist",
        "SMS: Short personal follow-up (is your AC ready for Texas summer?)",
        "Email 2: Limited-time maintenance offer with a clear booking CTA",
      ],
    },
    {
      icon: Bell,
      name: "Maintenance Reminder Campaign",
      trigger: "Trigger: Annual maintenance interval",
      timing: "Campaign: 4 to 6 weeks before season",
      body: "We import your past customer list and set up recurring annual maintenance reminders timed to Texas seasons: spring AC tune-ups in March, fall heating checks in October. Maintenance reminder campaigns typically generate $8,000 to $15,000 in booked revenue per campaign send from existing customers.",
      steps: [
        "Customer list imported and tagged by last service date",
        "6-week-out email: seasonal reminder with a booking link",
        "3-week-out SMS: short nudge with urgency hook (slots filling up)",
        "1-week-out final SMS: last chance to book before peak season",
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
            <Workflow className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Automation Workflows
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Which Lead Tasks Should<br />
            an HVAC Company<br />
            <span className="text-primary">Automate First?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Not all automation is equal. These are the six workflows we build first for Texas HVAC companies — the ones with the fastest payback and the highest revenue impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflows.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:border-primary/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <w.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl uppercase tracking-tight text-white leading-tight">{w.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary/70">{w.trigger}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{w.timing}</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{w.body}</p>
              <ul className="space-y-2 pt-4 border-t border-white/5">
                {w.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {step}
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
      icon: Settings2,
      title: "Automation Build and Setup",
      tag: "All Plans",
      items: [
        "Full audit of your current lead flow and gaps",
        "All 6 core automation workflows built and tested",
        "CRM and field software integration",
        "Branded SMS and email templates",
        "Trigger mapping and workflow logic configuration",
        "Live testing on real leads before go-live",
      ],
    },
    {
      icon: MessageSquare,
      title: "SMS and Email Sequences",
      tag: "All Plans",
      items: [
        "Missed call text-back (under 60 seconds)",
        "New lead response sequence (under 90 seconds)",
        "Estimate follow-up: Day 0, Day 3, Day 7",
        "Post-job review request (24-hour delay)",
        "Booking confirmation and appointment reminder",
        "All copy written by HVAC marketing specialists",
      ],
    },
    {
      icon: Users,
      title: "CRM and Field Software Integration",
      tag: "All Plans",
      items: [
        "ServiceTitan integration and trigger mapping",
        "Housecall Pro integration and automation setup",
        "Jobber integration for job completion triggers",
        "GoHighLevel CRM build (if no CRM exists)",
        "Zapier or Make.com for custom trigger flows",
        "Lead source tracking and attribution tagging",
      ],
    },
    {
      icon: Repeat,
      title: "Re-Engagement and Retention Campaigns",
      tag: "Accelerator+",
      items: [
        "Past customer list import and segmentation",
        "Annual maintenance reminder campaigns",
        "Seasonal win-back campaigns (spring and fall)",
        "12-month inactive customer re-engagement",
        "Post-campaign revenue attribution report",
        "Campaign performance optimisation monthly",
      ],
    },
    {
      icon: BarChart3,
      title: "Reporting Dashboard",
      tag: "All Plans",
      items: [
        "Live pipeline dashboard: leads, appointments, estimates",
        "Response time tracking per lead source",
        "Conversion rate by automation workflow",
        "Review velocity tracking (new reviews per month)",
        "Monthly automation performance report",
        "Revenue attributed to automation vs. other sources",
      ],
    },
    {
      icon: Calendar,
      title: "Ongoing Optimisation",
      tag: "All Plans",
      items: [
        "Monthly workflow performance review",
        "SMS and email copy A/B testing",
        "New automation workflows added as business grows",
        "Seasonal campaign planning and deployment",
        "24-hour support for automation issues",
        "Quarterly full automation audit and tune-up",
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
              Full Automation Service
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-5">
            What Is Included in Our<br />
            HVAC Lead Generation<br />
            <span className="text-primary">Automation Service?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            From missed call text-back to seasonal re-engagement, we build and manage every automation workflow that turns lost opportunities into booked jobs.
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
      title: "Lead Flow Audit",
      duration: "Day 1–2",
      body: "We map your entire current lead flow: where leads come from, how they are handled, what follow-up exists, how long response takes, and where leads are being lost. Most HVAC companies are shocked by how many leads are falling through the gaps. The audit report includes a specific revenue estimate of what you are losing each month.",
      output: "Lead flow map + gap analysis report + estimated monthly revenue loss",
    },
    {
      step: "02",
      title: "CRM and Software Integration",
      duration: "Day 3–5",
      body: "We connect your existing field management software (ServiceTitan, Housecall Pro, Jobber) to your automation platform. If you have no CRM, we set up GoHighLevel — the most capable platform for HVAC service businesses — with your branding, pipeline stages, and contact database.",
      output: "CRM integrated and tested + lead source tracking active + pipeline configured",
    },
    {
      step: "03",
      title: "Copy, Templates, and Workflow Build",
      duration: "Week 1–2",
      body: "Our HVAC copywriters write every SMS and email in your automation sequences — missed call text-back, new lead response, estimate follow-up, post-job review request, and booking confirmation. All copy is reviewed and approved by you before we build the automation logic.",
      output: "All SMS and email copy approved + automation workflows built in platform",
    },
    {
      step: "04",
      title: "Testing and Quality Assurance",
      duration: "Week 2",
      body: "We run every automation workflow with live test leads to verify that triggers fire correctly, timing delays execute accurately, personalisation tokens populate properly, and all messages reach the intended recipient. Nothing goes live until every sequence passes a full end-to-end test.",
      output: "All workflows tested and verified with real test leads",
    },
    {
      step: "05",
      title: "Go-Live and Team Training",
      duration: "Week 2–3",
      body: "We go live on all automation workflows and run a 60-minute training session with your team: how to monitor incoming leads in the pipeline, how to action DM leads that come through automation, and how to read the reporting dashboard. Your team does not need to touch the automations — but they need to know how to use what they feed into.",
      output: "All automations live + team trained on pipeline management",
    },
    {
      step: "06",
      title: "Monthly Optimisation",
      duration: "Monthly",
      body: "Every month we review the automation performance report: response rates, booking conversion rates, review velocity, and re-engagement campaign results. We A/B test SMS copy, adjust timing delays based on data, add new workflows as your business scales, and deploy seasonal campaigns 4 to 6 weeks before Texas demand peaks.",
      output: "Monthly performance report + optimised sequences + seasonal campaign plan",
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
              Our 6-Step Setup Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            How Do We Set Up Lead<br />
            Automation for an<br />
            <span className="text-primary">HVAC Company?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            From lead flow audit to live automations in 14 days. No technical knowledge required from your team. We build everything, test everything, and train your staff on the pipeline.
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
      company: "El Paso Comfort Solutions",
      city: "El Paso, TX",
      stat1: { val: "38%", label: "Of missed calls recovered with text-back" },
      stat2: { val: "$31K", label: "Revenue from first re-engagement campaign" },
      result: "No follow-up system in place. Calls going to voicemail with no recovery. After implementing missed call text-back and a past customer re-engagement campaign to 1,200 contacts, they recovered 38% of missed calls and booked $31,000 in maintenance jobs from the first campaign send.",
    },
    {
      company: "Clearwater Air & Heat",
      city: "Clearwater, TX",
      stat1: { val: "22%", label: "Estimate recovery rate from follow-up sequence" },
      stat2: { val: "4.7×", label: "More Google reviews vs. verbal-only requests" },
      result: "Sending estimates manually with no follow-up and receiving almost no Google reviews. After deploying the estimate follow-up sequence and post-job review request automation, 22% of previously non-responsive estimates converted and review volume increased 4.7 times within 60 days.",
    },
    {
      company: "Lubbock HVAC Pros",
      city: "Lubbock, TX",
      stat1: { val: "2 min", label: "Average response time to new web leads" },
      stat2: { val: "3.1×", label: "Lead-to-appointment conversion rate" },
      result: "Web leads going unresponded for an average of 19 hours. After implementing the new lead response sequence, average response time dropped to 2 minutes. Lead-to-appointment conversion rate increased 3.1 times against the same lead volume — same traffic, dramatically more bookings.",
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
            <span className="text-primary">Lead Automation?</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Automation results are measured in recovered leads, faster conversions, and re-engagement revenue — not abstract metrics. Here are three recent implementations.
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
                <Workflow className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
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
            { stat: "78%", label: "Of HVAC leads hire the first company to respond to their inquiry" },
            { stat: "2 min", label: "Average response time to new leads after automation goes live" },
            { stat: "38%", label: "Of missed calls recovered by instant SMS text-back automation" },
            { stat: "14 days", label: "From audit to live automations — no technical work required from you" },
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
    { feature: "HVAC-specific automation workflows — not generic templates", them: false },
    { feature: "Missed call text-back firing in under 60 seconds", them: false },
    { feature: "New lead response sequence under 90 seconds", them: false },
    { feature: "ServiceTitan, Housecall Pro, and Jobber integrations", them: false },
    { feature: "Post-job review request automation", them: false },
    { feature: "Seasonal maintenance reminder campaigns", them: false },
    { feature: "Past customer re-engagement campaigns", them: false },
    { feature: "Estimate follow-up sequence (3-touch)", them: false },
    { feature: "Live pipeline reporting dashboard included", them: false },
    { feature: "All SMS and email copy written by HVAC specialists", them: false },
    { feature: "GoHighLevel CRM build included if needed", them: true },
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
              HVAC Digitals vs. Generic Automation Agencies
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            How Is HVAC Digitals<br />
            Different From a Generic<br />
            <span className="text-primary">Automation Agency?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Generic automation agencies set up Zapier flows and call it done. We build revenue-recovery systems specifically for HVAC service businesses — integrated with your field software and tuned for Texas seasonal demand patterns.
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
      q: "How fast can an HVAC company respond to a new lead with automation?",
      a: "With our new lead response automation, the first SMS reaches the homeowner within 90 seconds of form submission — at any time of day or night. This is the single most impactful number in HVAC lead follow-up: companies responding within 5 minutes convert 21 times more leads than companies responding within 30 minutes. The average HVAC company without automation takes 47 hours.",
    },
    {
      q: "What is a missed call text-back and how does it work for HVAC?",
      a: "A missed call text-back is an automatic SMS that fires within 60 seconds when someone calls your number and hangs up or goes to voicemail. The message uses your company name and a brief acknowledgement — something like: this is [Company Name], sorry we missed your call, we will call back shortly — is there anything we can help with in the meantime? This single automation recovers 35 to 40% of calls that would otherwise be permanently lost.",
    },
    {
      q: "Which CRM or field software does your automation work with?",
      a: "We integrate with ServiceTitan, Housecall Pro, and Jobber natively. For companies without a CRM, we set up GoHighLevel — the most capable platform for HVAC service businesses — included in the build. For companies with other CRMs or custom setups, we use Zapier or Make.com to build the necessary trigger flows.",
    },
    {
      q: "How long does it take to set up lead automation for an HVAC company?",
      a: "From lead flow audit to live automations in 14 days. Day 1 to 2: audit and gap analysis. Day 3 to 5: CRM integration and setup. Week 1 to 2: workflow build and copy approval. Week 2: testing and QA. Week 2 to 3: go-live and team training. No technical work is required from you or your team beyond a 60-minute onboarding call and content approvals.",
    },
    {
      q: "How does post-job review request automation work?",
      a: "When a technician marks a job complete in your field software, an automatic SMS fires to the customer 24 hours later with a direct link to your Google Business Profile review page. The 24-hour delay ensures the customer has had time to experience the quality of the work before being asked. This generates 3 to 5 times more reviews than verbal requests and runs completely without any action from your team.",
    },
    {
      q: "Can automation help re-engage past HVAC customers?",
      a: "Yes. Your past customer list is your highest-ROI marketing asset. We build seasonal re-engagement campaigns timed to Texas HVAC demand peaks: spring AC tune-ups in March and fall heating checks in October. A typical past customer re-engagement campaign to 1,000 contacts generates $15,000 to $35,000 in booked maintenance jobs at a cost per recovered job of $12 to $18.",
    },
    {
      q: "Will the automated SMS messages sound robotic to homeowners?",
      a: "No. Every SMS and email in our automation sequences is written by HVAC marketing specialists — conversational, branded with your company name, and personalised with the homeowner's first name and the relevant service context. All copy is approved by you before anything goes live, and we A/B test messages monthly to continuously improve response rates.",
    },
    {
      q: "Do you work with HVAC companies that have no existing CRM or software?",
      a: "Yes. For companies running on spreadsheets or nothing, we set up GoHighLevel as your CRM and pipeline management tool — included in the build on our Accelerator and Growth plans. GoHighLevel gives you a lead pipeline dashboard, two-way SMS from a dedicated local number, email automation, and review management in a single platform.",
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
              Lead Automation FAQ
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-zinc-900 mb-4">
            Frequently Asked Questions<br />
            About HVAC Lead<br />
            <span className="text-primary">Generation Automation.</span>
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
                data-testid={`auto-faq-toggle-${i}`}
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
                Free Lead Flow Audit · 48-Hour Delivery
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.98] text-white mb-5">
              Is Your HVAC Company<br />
              Losing Leads From<br />
              <span className="text-primary">Slow Follow-Up?</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              We will map your entire lead flow — from first contact to booking — identify every gap where leads are slipping through, and deliver a written report with a revenue estimate of what you are losing each month. Delivered in 48 hours. Free.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Full lead flow map and gap analysis",
                "Estimated monthly revenue loss from slow follow-up",
                "Recommended automation priorities",
                "CRM and software integration plan",
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
                data-testid="link-auto-bottom-cta"
              >
                Get My Free Lead Flow Audit
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
                { num: "78%", label: "Of HVAC leads hire the first company to call them back" },
                { num: "14 days", label: "From audit to live automations running on your account" },
                { num: "$0", label: "Cost for your lead flow audit and revenue loss estimate" },
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
export default function AutomationService() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HVAC Lead Generation Automation",
        "serviceType": "Marketing Automation and CRM Setup",
        "description": "Done-for-you lead generation automation for Texas HVAC companies. Missed call text-back, new lead response sequences, estimate follow-up, review requests, and seasonal re-engagement campaigns. Live in 14 days.",
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
            "name": "How fast can an HVAC company respond to a new lead with automation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With our new lead response automation, the first SMS reaches the homeowner within 90 seconds of form submission at any time of day or night. Companies responding within 5 minutes convert 21 times more leads than companies responding within 30 minutes.",
            },
          },
          {
            "@type": "Question",
            "name": "What is a missed call text-back and how does it work for HVAC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A missed call text-back is an automatic SMS that fires within 60 seconds when someone calls and goes to voicemail. It recovers 35 to 40% of calls that would otherwise be permanently lost to competitors.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to set up lead automation for an HVAC company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "From audit to live automations in 14 days. No technical work is required from you beyond a 60-minute onboarding call and approving the SMS and email copy.",
            },
          },
          {
            "@type": "Question",
            "name": "Can automation help re-engage past HVAC customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Seasonal re-engagement campaigns to past customers generate $15,000 to $35,000 in booked maintenance jobs per campaign send at a cost per recovered job of $12 to $18.",
            },
          },
        ],
      },
    ];

    const existingScripts = document.querySelectorAll("script[data-auto-schema]");
    existingScripts.forEach((s) => s.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-auto-schema", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "HVAC lead generation automation for Texas contractors. Missed call text-back, 90-second lead response, estimate follow-up, review requests, and seasonal re-engagement. Live in 14 days."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "HVAC lead generation automation for Texas contractors. Missed call text-back, 90-second lead response, estimate follow-up, review requests, and seasonal re-engagement. Live in 14 days.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelectorAll("script[data-auto-schema]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Marketing Automation Texas | AI-Powered Lead Follow-Up | HVAC Digitals"
        description="Automate your HVAC lead follow-up, booking, and review requests with AI-powered tools. Never lose a lead again. Built for Texas HVAC contractors."
        canonical="https://hvacdigitals.com/services/automation"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HVAC Marketing Automation",
          "description": "AI-powered lead follow-up, booking, and review automation for Texas HVAC contractors.",
          "serviceType": "Marketing Automation",
          "areaServed": { "@type": "State", "name": "Texas" },
          "provider": { "@type": "Organization", "name": "HVAC Digitals", "url": "https://hvacdigitals.com" },
          "url": "https://hvacdigitals.com/services/automation",
        }}
      />
      <Navbar />
      <main>
        <PageHeader />
        <TheProblem />
        <AutomationWorkflows />
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
