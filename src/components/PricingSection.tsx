"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Phone,
} from "lucide-react";

// =============================================================================
// TYPES & DATA
// =============================================================================
type PricingFeature = {
  label: string;
  starter: string | boolean;
  accelerator: string | boolean;
  growth: string | boolean;
  category?: string;
};

type PricingTier = {
  id: "starter" | "accelerator" | "growth";
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  badge?: string;
  icon: React.ElementType;
  highlight: boolean;
  cta: string;
  ideal: string;
};

const TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Build your HVAC brand from the ground up — website, logo, identity, and local presence all in one.",
    monthlyPrice: 2200,
    annualPrice: 1760,
    icon: Zap,
    highlight: false,
    cta: "Launch My Brand",
    ideal: "New or rebranding HVAC companies that need a professional foundation",
  },
  {
    id: "accelerator",
    name: "Accelerator",
    tagline: "Layer SEO, Google Ads, AI automation, and content on top of your brand to generate consistent leads on autopilot.",
    monthlyPrice: 3300,
    annualPrice: 2640,
    badge: "Most Popular",
    icon: Sparkles,
    highlight: true,
    cta: "Start Accelerating",
    ideal: "Established HVAC companies ready to scale organic, paid, and automated leads",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Total Texas market dominance — every channel, every city, every lead source, fully automated and managed for you.",
    monthlyPrice: 5000,
    annualPrice: 4000,
    icon: TrendingUp,
    highlight: false,
    cta: "Let's Talk Growth",
    ideal: "High-volume HVAC companies targeting full-state coverage",
  },
];

const FEATURES: PricingFeature[] = [
  // — BRANDING & DESIGN —
  {
    label: "Custom HVAC website (mobile-first)",
    category: "Branding & Design",
    starter: "5 pages",
    accelerator: "10 pages",
    growth: "Unlimited pages",
  },
  {
    label: "Brand logo design",
    starter: "3 concepts",
    accelerator: "3 concepts",
    growth: "3 concepts + brand refresh",
  },
  {
    label: "UI/UX design (conversion-optimised)",
    starter: true,
    accelerator: true,
    growth: true,
  },
  {
    label: "Full brand identity & guidelines",
    starter: true,
    accelerator: true,
    growth: true,
  },
  {
    label: "Call tracking & contact form setup",
    starter: true,
    accelerator: true,
    growth: true,
  },
  {
    label: "Design revision rounds",
    starter: "2 rounds",
    accelerator: "Unlimited",
    growth: "Unlimited",
  },
  // — LOCAL PRESENCE —
  {
    label: "Google My Business (GMB) setup & optimisation",
    category: "Local Presence",
    starter: "Full setup",
    accelerator: "Setup + ongoing",
    growth: "Setup + ongoing + posts",
  },
  {
    label: "Local citation building",
    starter: "20 directories",
    accelerator: "50 directories",
    growth: "100+ directories",
  },
  {
    label: "Review velocity campaign",
    starter: false,
    accelerator: true,
    growth: true,
  },
  // — SEO —
  {
    label: "On-page SEO optimisation",
    category: "Search Engine Optimisation",
    starter: "Homepage + service pages",
    accelerator: "Up to 30 pages",
    growth: "Full site (no limit)",
  },
  {
    label: "Service cities targeted",
    starter: "1 city",
    accelerator: "Up to 3 cities",
    growth: "Unlimited cities",
  },
  {
    label: "City landing pages built",
    starter: false,
    accelerator: "8 pages",
    growth: "Unlimited",
  },
  {
    label: "Keywords tracked (daily)",
    starter: false,
    accelerator: "75 keywords",
    growth: "200+ keywords",
  },
  {
    label: "Link building (quality backlinks)",
    starter: false,
    accelerator: "5 links / mo",
    growth: "15 links / mo",
  },
  {
    label: "AEO & AI search optimisation",
    starter: false,
    accelerator: false,
    growth: true,
  },
  // — AI AUTOMATION —
  {
    label: "AI lead follow-up (SMS + email sequences)",
    category: "AI Automation",
    starter: false,
    accelerator: "3 automated sequences",
    growth: "Unlimited sequences",
  },
  {
    label: "AI website chatbot (24/7 lead capture)",
    starter: false,
    accelerator: true,
    growth: true,
  },
  {
    label: "Missed-call text-back automation",
    starter: false,
    accelerator: true,
    growth: true,
  },
  {
    label: "CRM pipeline & deal automation",
    starter: false,
    accelerator: "Basic pipeline",
    growth: "Full CRM automation",
  },
  {
    label: "Review request automation",
    starter: false,
    accelerator: true,
    growth: true,
  },
  {
    label: "AI appointment booking integration",
    starter: false,
    accelerator: false,
    growth: true,
  },
  // — PAID MEDIA & CONTENT —
  {
    label: "Google Ads (PPC) management",
    category: "Paid Media & Content",
    starter: false,
    accelerator: "Up to $2k ad spend",
    growth: "Up to $5k ad spend",
  },
  {
    label: "Facebook / Meta PPC campaigns",
    starter: false,
    accelerator: false,
    growth: "Up to $2k ad spend",
  },
  {
    label: "Retargeting ad campaigns",
    starter: false,
    accelerator: false,
    growth: true,
  },
  {
    label: "Monthly blog / content posts",
    starter: false,
    accelerator: "2 posts / mo",
    growth: "4 posts / mo",
  },
  {
    label: "Social media management",
    starter: false,
    accelerator: false,
    growth: "2 platforms",
  },
  {
    label: "Monthly video reel content",
    starter: false,
    accelerator: false,
    growth: "1 reel / mo",
  },
  // — REPORTING & SUPPORT —
  {
    label: "Live reporting dashboard",
    category: "Reporting & Support",
    starter: false,
    accelerator: true,
    growth: true,
  },
  {
    label: "Monthly strategy video call",
    starter: false,
    accelerator: true,
    growth: true,
  },
  {
    label: "Dedicated account manager",
    starter: false,
    accelerator: false,
    growth: true,
  },
  {
    label: "Weekly strategy calls",
    starter: false,
    accelerator: false,
    growth: true,
  },
  {
    label: "Support response time",
    starter: "48 hours",
    accelerator: "24 hours",
    growth: "Same day",
  },
];

// =============================================================================
// HELPER: render a feature cell value
// =============================================================================
const FeatureCell = ({ value, highlight }: { value: string | boolean; highlight: boolean }) => {
  if (value === true) {
    return (
      <CheckCircle2
        className={`w-5 h-5 mx-auto ${highlight ? "text-primary" : "text-green-500"}`}
      />
    );
  }
  if (value === false) {
    return <XCircle className="w-4 h-4 mx-auto text-zinc-700" />;
  }
  return (
    <span
      className={`text-sm font-semibold ${highlight ? "text-primary" : "text-zinc-300"}`}
    >
      {value}
    </span>
  );
};

// =============================================================================
// MAIN PRICING SECTION
// =============================================================================
export const PricingSection = () => {
  const [annual, setAnnual] = React.useState(false);

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-primary/8 blur-[200px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Transparent Pricing · No Hidden Fees
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.02] text-white mb-5">
            Everything your HVAC<br />
            business needs to <span className="text-primary">dominate.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            From building your brand to owning every Google search in Texas — three bundles, one agency, zero guesswork.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-2 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                !annual ? "bg-primary text-white shadow-md" : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                annual ? "bg-primary text-white shadow-md" : "text-zinc-400 hover:text-white"
              }`}
            >
              Annual
              <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all ${
                tier.highlight
                  ? "border-2 border-primary shadow-[0_30px_80px_-15px_rgba(255,107,43,0.35)] scale-[1.02]"
                  : "border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Popular badge */}
              {tier.badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.22em] px-5 py-1.5 rounded-b-lg">
                    {tier.badge}
                  </div>
                </div>
              )}

              {/* Card header */}
              <div
                className={`p-7 pt-${tier.badge ? "10" : "7"} ${
                  tier.highlight
                    ? "bg-gradient-to-br from-primary/20 via-primary/5 to-background"
                    : "bg-white/[0.03]"
                }`}
              >
                {tier.badge && <div className="h-5 mb-2" />}

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    tier.highlight
                      ? "bg-primary text-white"
                      : "bg-white/8 border border-white/15 text-zinc-300"
                  }`}
                >
                  <tier.icon className="w-5 h-5" />
                </div>

                <h3
                  className={`font-display text-3xl uppercase leading-none mb-1 ${
                    tier.highlight ? "text-white" : "text-zinc-200"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="text-sm text-zinc-500 leading-snug mb-5">{tier.tagline}</p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`font-display text-5xl md:text-6xl leading-none ${
                      tier.highlight ? "text-primary" : "text-white"
                    }`}
                  >
                    ${(annual ? tier.annualPrice : tier.monthlyPrice).toLocaleString()}
                  </span>
                  <span className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-2">/mo</span>
                </div>
                {annual && (
                  <p className="text-xs text-zinc-500 mb-1">
                    Billed annually · <span className="text-green-400 font-bold">Save ${((tier.monthlyPrice - tier.annualPrice) * 12).toLocaleString()}/yr</span>
                  </p>
                )}
                <p className="text-[11px] text-zinc-600 mb-5">Ideal for: {tier.ideal}</p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-bold uppercase tracking-wider text-sm transition-all ${
                    tier.highlight
                      ? "bg-primary hover:bg-primary/90 text-white hover:shadow-[0_12px_35px_-8px_rgba(255,107,43,0.55)]"
                      : "bg-white/8 border border-white/15 text-white hover:bg-white/12 hover:border-white/25"
                  }`}
                  data-testid={`link-pricing-${tier.id}`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Feature list */}
              <div className={`flex-1 p-7 pt-5 ${tier.highlight ? "bg-primary/[0.03]" : "bg-white/[0.02]"} border-t ${tier.highlight ? "border-primary/20" : "border-white/8"}`}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold mb-4">
                  What's included
                </div>
                <ul className="space-y-3">
                  {FEATURES.filter((f) => {
                    const val = f[tier.id];
                    return val !== false;
                  }).map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlight ? "text-primary" : "text-zinc-500"}`}
                      />
                      <span className="text-sm text-zinc-400 leading-snug">
                        <span className="text-zinc-300 font-medium">{f.label}</span>
                        {typeof f[tier.id] === "string" && (
                          <span className={`ml-1 font-bold ${tier.highlight ? "text-primary" : "text-zinc-200"}`}>
                            — {f[tier.id]}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <span className="text-sm font-bold uppercase tracking-wider text-zinc-500">Full Feature Comparison</span>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/8 bg-white/[0.02]">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left p-5 text-sm font-bold uppercase tracking-wider text-zinc-500 w-[40%]">
                    Feature
                  </th>
                  {TIERS.map((t) => (
                    <th
                      key={t.id}
                      className={`p-5 text-center text-sm font-bold uppercase tracking-wider ${
                        t.highlight ? "text-primary" : "text-zinc-400"
                      }`}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((f, i) => (
                  <React.Fragment key={f.label}>
                    {f.category && (
                      <tr className="border-b border-white/5 bg-white/[0.02]">
                        <td colSpan={4} className="px-5 py-2.5">
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary/80">
                            {f.category}
                          </span>
                        </td>
                      </tr>
                    )}
                    <tr
                      className={`border-b border-white/5 hover:bg-white/[0.03] transition-colors ${
                        i === FEATURES.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="p-5 text-sm text-zinc-400">{f.label}</td>
                      <td className="p-5 text-center">
                        <FeatureCell value={f.starter} highlight={false} />
                      </td>
                      <td className="p-5 text-center bg-primary/[0.03]">
                        <FeatureCell value={f.accelerator} highlight={true} />
                      </td>
                      <td className="p-5 text-center">
                        <FeatureCell value={f.growth} highlight={false} />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: Shield, text: "No long-term contracts. Cancel any month." },
            { icon: CheckCircle2, text: "1 HVAC company per service area — guaranteed." },
            { icon: Sparkles, text: "Free $1,500 SEO audit before you commit." },
            { icon: Phone, text: "Talk to a real strategist, not a sales rep." },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-xl p-4"
            >
              <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-400 leading-snug">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
