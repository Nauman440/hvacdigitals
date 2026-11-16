"use client";
import React, { useEffect, useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2, Flame, AlertCircle, Loader2 } from "lucide-react";
import { Instagram, Facebook, Linkedin, Youtube } from "@/components/brand-icons";
import { Navbar, Footer } from "@/views/home";

// =============================================================================
// TYPES
// =============================================================================
type FormState = "idle" | "submitting" | "success" | "error";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const SERVICES = [
  "HVAC SEO",
  "Local SEO & Google Maps",
  "Google / Facebook Ads",
  "Website Development",
  "UI/UX Design",
  "Social Media Management",
  "Lead Automation",
  "Full-Service Growth Package",
  "Not sure — need guidance",
];

const BUDGETS = [
  "$1,500 – $2,000/mo",
  "$2,000 – $3,000/mo",
  "$3,000 – $5,000/mo",
  "$5,000+/mo",
  "Not sure yet",
];

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => (
  <section className="relative pt-36 pb-16 overflow-hidden bg-background">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/12 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl text-center">
      <nav className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-10">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white font-bold">Contact Us</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
      >
        <Flame className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Let&apos;s Talk HVAC Growth
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] tracking-tight text-white mb-6"
      >
        Ready to Dominate<br />
        Your Market?<br />
        <span className="text-primary">Let&apos;s Start.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto"
      >
        Fill out the form and receive a free written audit of your website, Google Business Profile, and ad accounts within 48 hours. No sales pressure — just actionable data.
      </motion.p>
    </div>
  </section>
);

// =============================================================================
// INFO SIDEBAR
// =============================================================================
const InfoCard = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors">
    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Icon className="w-4.5 h-4.5 text-primary" />
    </div>
    <div>
      <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-white font-semibold hover:text-primary transition-colors text-sm leading-relaxed">
          {value}
        </a>
      ) : (
        <p className="text-white font-semibold text-sm leading-relaxed">{value}</p>
      )}
    </div>
  </div>
);

const Sidebar = () => (
  <div className="space-y-6">
    <div>
      <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white mb-2">
        Get in Touch
      </h2>
      <p className="text-zinc-400 text-sm leading-relaxed">
        We respond to every inquiry within one business day. For urgent matters, call us directly.
      </p>
    </div>

    <div className="space-y-3">
      <InfoCard
        icon={Phone}
        label="Phone"
        value="(888) 555-4822"
        href="tel:8885554822"
      />
      <InfoCard
        icon={Mail}
        label="Email"
        value="muhammadnauman475@gmail.com"
        href="mailto:muhammadnauman475@gmail.com"
      />
      <InfoCard
        icon={MapPin}
        label="Location"
        value="Serving all of Texas — Houston, Dallas, San Antonio, Fort Worth & surrounding markets"
      />
      <InfoCard
        icon={Clock}
        label="Response Time"
        value="Within 1 business day. Free audit within 48 hours."
      />
    </div>

    <div>
      <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold mb-3">Follow Us</p>
      <div className="flex gap-3">
        {[
          { icon: Facebook, href: "#", label: "Facebook" },
          { icon: Instagram, href: "https://www.instagram.com/hvacdigitals/", label: "Instagram" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/nauman-ai-automation-expert/", label: "LinkedIn" },
          { icon: Youtube, href: "#", label: "YouTube" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/40 transition-all"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>

    <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-orange-900/10 border border-primary/25 p-6">
      <p className="text-[11px] uppercase tracking-widest text-primary font-bold mb-3">
        Why Act Now?
      </p>
      <ul className="space-y-2.5">
        {[
          "We take 1 client per service area — spots fill fast",
          "Free audit shows exactly where you are losing leads",
          "Summer AC season is Texas's highest-demand period",
          "Competitors are already running ads in your zip codes",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// =============================================================================
// CONTACT FORM
// =============================================================================
const inputCls =
  "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-all";

const labelCls = "block text-[11px] uppercase tracking-widest text-zinc-500 font-bold mb-2";

const ContactForm = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json() as { success: boolean; error?: string };

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-4xl uppercase tracking-tight text-white mb-3">
              Message Sent!
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm mb-4">
              We received your inquiry and will send your free audit to <span className="text-white font-semibold">{form.email || "your inbox"}</span> within 48 hours.
            </p>
            <p className="text-sm text-zinc-500">
              Questions in the meantime?{" "}
              <a href="tel:8885554822" className="text-primary hover:underline font-semibold">
                Call (888) 555-4822
              </a>
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2.5 rounded-lg border border-white/15 text-zinc-400 hover:text-white hover:border-white/30 text-sm font-bold uppercase tracking-wider transition-all"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="mb-6">
              <h2 className="font-display text-3xl uppercase tracking-tight text-white mb-1">
                Request Your Free Audit
              </h2>
              <p className="text-zinc-500 text-sm">
                No obligation. Delivered in writing within 48 hours.
              </p>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Your Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="John Smith"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="john@company.com"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="(305) 555-0100"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Company Name</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={set("company")}
                  placeholder="Texas AC Solutions LLC"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className={labelCls}>What Service Are You Interested In?</label>
              <select
                value={form.service}
                onChange={set("service")}
                className={`${inputCls} appearance-none`}
              >
                <option value="" className="bg-zinc-900">Select a service...</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-zinc-900">{s}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className={labelCls}>Monthly Marketing Budget Range</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                    className={`px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all text-center ${
                      form.budget === b
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                        : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelCls}>Tell Us About Your Business *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={set("message")}
                placeholder="Where are you located? How many technicians? What are your main services? What's your biggest marketing challenge right now?"
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Error */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{errorMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Your Request...
                </>
              ) : (
                <>
                  Request My Free Audit
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-zinc-600">
              By submitting this form you agree to be contacted about HVAC marketing services. No spam, ever.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

// =============================================================================
// TRUST BAR
// =============================================================================
const TrustBar = () => (
  <section className="bg-zinc-950 border-t border-b border-white/5 py-10">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { val: "48 hrs", label: "Free audit delivered" },
          { val: "1 client", label: "Per service area" },
          { val: "94%", label: "Retention after 6 months" },
          { val: "$0", label: "No-obligation audit" },
        ].map((s) => (
          <div key={s.val}>
            <div className="font-display text-4xl text-primary leading-none mb-1">{s.val}</div>
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function ContactPage() {
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    const content =
      "Contact HVAC Digitals — Texas's #1 HVAC marketing agency. Request your free website and ad account audit. Serving Houston, Dallas, San Antonio, Fort Worth, and all Texas markets.";
    if (metaDesc) {
      metaDesc.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="Contact HVAC Digitals | Get Your Free HVAC Marketing Audit"
        description="Ready to grow your Texas HVAC business? Get a free written audit of your website, Google Business Profile, and ad accounts within 48 hours."
        canonical="https://hvacdigitals.com/contact"
      />
      <Navbar />
      <main>
        <PageHeader />
        <TrustBar />

        {/* Two-column layout */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <Sidebar />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map / Texas coverage strip */}
        <section className="bg-zinc-950 border-t border-white/5 py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] uppercase tracking-widest text-primary font-bold mb-4">
                Our Coverage Area
              </p>
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-white mb-6">
                Serving HVAC Companies<br />
                <span className="text-primary">Across All of Texas</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                We actively serve HVAC companies in Houston, Fort Worth, Dallas, San Antonio, Austin, Corpus Christi, El Paso, West Palm Beach, and all surrounding markets. One client per service area — check availability in yours.
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Houston",
                  "Fort Worth",
                  "Dallas",
                  "San Antonio",
                  "Austin",
                  "Corpus Christi",
                  "El Paso",
                  "West Palm Beach",
                  "Frisco",
                  "Lubbock",
                  "Amarillo",
                  "McAllen",
                  "Clearwater",
                  "St. Petersburg",
                  "Daytona Beach",
                  "Pensacola",
                ].map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium hover:border-primary/40 hover:text-white transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
