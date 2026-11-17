"use client";
import React, { useEffect, useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Phone,
  Flame,
  CheckCircle2,
  Search,
  Workflow,
  BarChart3,
  Globe,
  Share2,
  DollarSign,
  HelpCircle,
  Target,
} from "lucide-react";
import { Navbar, Footer } from "@/views/home";

// =============================================================================
// FAQ DATA
// =============================================================================
type FaqItem = { q: string; a: string };
type FaqCategory = { id: string; label: string; icon: React.ElementType; items: FaqItem[] };

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "working-with-us",
    label: "Working With Us",
    icon: HelpCircle,
    items: [
      {
        q: "Does HVAC Digitals work exclusively with HVAC companies?",
        a: "Yes. HVAC is the only industry we serve. Every strategy, every piece of content, every campaign structure, and every automation workflow we build is informed by years of HVAC-specific experience. We know your seasonal demand patterns, your emergency search intent, your competitive landscape, and what converts Texas homeowners into booked appointments. We do not serve plumbers, roofers, or any other trade.",
      },
      {
        q: "Do you work with HVAC companies outside Texas?",
        a: "Our active client base is Texas-focused. We know the Texas HVAC market deeply — its seasonal patterns (summer AC emergency season, spring tune-up demand, winter heating checks), its competitive dynamics across Houston, Dallas, San Antonio, and Fort Worth, and the specific search behaviours of Texas homeowners. If you are outside Texas, contact us and we will give you an honest assessment of whether we can serve your market with the same depth of knowledge.",
      },
      {
        q: "Do you take on multiple HVAC companies in the same service area?",
        a: "Never. We take one HVAC company per service area — no exceptions. Your keyword strategy, audience data, campaign creative, and market intelligence are built exclusively for your business. If a competitor in your geographic area contacts us, we decline. This exclusivity is written into every contract.",
      },
      {
        q: "What is the minimum contract term?",
        a: "We ask for a 6-month initial commitment. Marketing results — particularly SEO, social trust-building, and automation compound effects — require consistent execution over time. A month-to-month arrangement incentivises short-term thinking that rarely produces meaningful results. After the initial 6 months, agreements renew month-to-month. Our retention rate after 6 months is over 94%.",
      },
      {
        q: "How do I communicate with my team at HVAC Digitals?",
        a: "Every client receives a dedicated Slack channel with their full team from day one: Account Strategist, SEO Specialist, Paid Ads Manager, and whichever specialists are active on your account. We respond within 4 business hours. Your Account Strategist also has a direct phone number for urgent situations. We do not use email ticketing systems or impersonal support queues.",
      },
      {
        q: "How long does it take to get started after signing?",
        a: "Onboarding begins on day one of the contract. Your team is assigned within 24 hours, all platform access requests go out in the first 48 hours, and the technical setup (tracking, integrations, baseline audit) is completed within the first 7 days. Campaigns and automations typically go live in week 3 to 4, after the build phase and your approval of all deliverables.",
      },
      {
        q: "Do I need to provide content, photos, or creative materials?",
        a: "For most services, minimal input is required from your team. Ad copy, SEO content, and social captions are written by our specialists. For social media, real job photos and technician videos from your team significantly improve performance — we provide a simple monthly photo brief to guide what to capture. For website builds, we need your logo, service area list, and any existing testimonials. Everything else is produced in-house.",
      },
      {
        q: "What happens if results are not meeting agreed targets?",
        a: "Monthly reporting calls are designed specifically to surface performance gaps before they become serious. If performance is underperforming against agreed KPIs after a documented optimisation period, we present a revised strategy at no additional cost. We do not hide behind attribution debates or industry benchmarks — if results are not meeting what was agreed, we own the gap and fix it.",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Local Search",
    icon: Search,
    items: [
      {
        q: "How long does HVAC SEO take to show results?",
        a: "Honest answer: meaningful keyword ranking movements typically appear between weeks 8 and 12 after consistent content and technical work begins. Significant organic traffic increases build from month 3 onwards. For local SEO — Google Business Profile optimisation, review velocity, and Map Pack positioning — results often appear faster, sometimes within 4 to 6 weeks of GBP optimisation. We are transparent about this timeline from day one and never overpromise short-term SEO outcomes.",
      },
      {
        q: "What is the Google Map Pack and why does it matter for HVAC?",
        a: "The Map Pack is the block of 3 local business results that appear at the top of Google Search when someone searches for a local service — such as AC repair near me or HVAC company in Fort Worth. Map Pack listings generate 44% of all local search clicks, compared to 29% for organic results below them. For HVAC companies, appearing in the Map Pack for emergency AC repair searches during a Texas summer is worth tens of thousands of dollars in booked jobs.",
      },
      {
        q: "What is the difference between local SEO and regular SEO?",
        a: "Regular SEO targets non-location-specific keywords and competes nationally or globally. Local SEO targets searches with geographic intent — keywords that include a city, neighbourhood, or near me qualifier. For HVAC companies, local SEO is almost exclusively what matters: homeowners search for AC repair in Dallas or HVAC company Fort Worth, not generic HVAC advice. Local SEO focuses on Google Business Profile optimisation, local citation building, review velocity, and city-specific landing pages — all specific to your service area.",
      },
      {
        q: "How important are Google reviews for HVAC SEO?",
        a: "Google reviews are one of the top three ranking factors for local search results (Map Pack). A company with 400 reviews averaging 4.8 stars ranks significantly above a competitor with 40 reviews at 4.6 stars — all else being equal. Beyond rankings, 87% of homeowners read online reviews before contacting a local service company. Review velocity (how frequently new reviews are posted) signals to Google that your business is active and growing, which amplifies the ranking benefit.",
      },
      {
        q: "What is a local citation and why does it matter?",
        a: "A local citation is any mention of your business name, address, and phone number (NAP) on an external website — directories like Yelp, Angi, HomeAdvisor, the BBB, and hundreds of others. Consistent NAP citations across authoritative directories signal trust and legitimacy to Google, which influences local search rankings. Citation inconsistency — your phone number listed differently on different sites — actively harms rankings. We audit and clean all existing citations and build new ones on high-authority directories.",
      },
      {
        q: "Do you write the SEO content or do we?",
        a: "We research and write all SEO content in-house. Every article, service page, and city landing page is produced by our SEO specialists, keyword-mapped before a word is written, and reviewed by you before publishing. We never use AI-generated content without expert editorial review — the quality and accuracy of HVAC content directly affects the trust it builds with homeowners and how well it ranks.",
      },
      {
        q: "How many city pages do HVAC companies need for local SEO?",
        a: "The right number depends on the size of your service area. A company serving a single metro area typically needs 5 to 15 city landing pages — one for each major suburb or city they actively work in. A regional HVAC company covering multiple metros may need 30 to 50. Each page needs to be substantively different, locally relevant, and keyword-targeted to the specific city — not a copy-paste template with the city name swapped.",
      },
    ],
  },
  {
    id: "paid-ads",
    label: "Paid Advertising",
    icon: Target,
    items: [
      {
        q: "How much should an HVAC company spend on Google Ads?",
        a: "For a single-market Texas HVAC company, a monthly Google Ads budget of $2,000 to $5,000 is sufficient to generate a consistent flow of inbound calls and form fills when campaigns are structured correctly. The more important number than total spend is cost per lead — our HVAC campaigns average $38 to $65 per verified lead. If your cost per lead is $180 on a $3,000 budget, the problem is campaign structure, not budget size.",
      },
      {
        q: "What is the difference between Google Search Ads and Google Local Services Ads?",
        a: "Google Search Ads appear above organic results for any keyword you bid on — you write the ad and control the targeting. Google Local Services Ads (LSAs) appear above Search Ads in specific service categories, charged per lead rather than per click, and display a Google Verified badge. For HVAC companies, LSAs typically produce lower cost-per-lead than Search Ads because homeowners trust the verification badge. We recommend running both simultaneously for maximum coverage.",
      },
      {
        q: "How do you target homeowners specifically with Google Ads?",
        a: "Google Ads does not allow direct homeowner targeting, but we use a combination of signals to focus spend on the most valuable audience: geographic targeting to your exact service zip codes, device targeting (mobile-first for emergency searches), ad scheduling to bid higher during high-intent hours, negative keyword exclusions to eliminate non-homeowner search intent, and audience observation layers using in-market segments for home services and home improvement.",
      },
      {
        q: "What is a good cost per lead for HVAC Google Ads?",
        a: "For HVAC in Texas, a well-managed Google Ads campaign should achieve a cost per lead (CPL) of $40 to $80 for inbound calls and form fills combined. Emergency AC repair campaigns during peak summer can produce CPLs as low as $25 due to extremely high commercial intent. Maintenance and replacement campaigns typically run $60 to $100. If you are paying over $150 per lead on Google Ads for HVAC, the campaign has structural issues — overbroad keyword targeting, poor landing page conversion rate, or both.",
      },
      {
        q: "How long does it take for Google Ads to start generating leads for HVAC?",
        a: "Google Ads campaigns typically start generating calls and form fills within 3 to 5 days of launch. The first 30 days are a learning period — the algorithm adjusts targeting based on which searches and audiences are converting. We typically expect a campaign to reach full efficiency (lowest CPL, highest conversion rate) between days 30 and 60 after launch. We do not pause or restructure campaigns during the learning phase unless spend is dramatically misallocated.",
      },
      {
        q: "Do you manage Facebook Ads as well as Google Ads?",
        a: "Yes. Facebook and Instagram ads serve a different function for HVAC than Google Ads. Google captures active intent (someone searching for AC repair right now). Facebook and Instagram build awareness and trust with homeowners before they need service — and re-engage homeowners who have visited your website through retargeting. For maximum HVAC lead volume, we recommend Google Ads as the primary channel and Facebook as a supporting channel for seasonal campaigns and retargeting.",
      },
      {
        q: "Do I own my Google Ads account and campaign data?",
        a: "Yes, always. Your Google Ads account is created under your Google account or transferred to your ownership from day one. All campaign history, keyword data, quality scores, and audience data belong to you. If you ever leave, you take everything — no data is held in a proprietary system we own. The same applies to your Meta Ads account, Analytics, and Search Console.",
      },
    ],
  },
  {
    id: "website",
    label: "Website Development",
    icon: Globe,
    items: [
      {
        q: "How long does it take to build an HVAC website?",
        a: "Our full custom build process takes 30 days from signed brief to live site: discovery and technical audit (days 1 to 2), site architecture and wireframes (days 3 to 5), visual design with revision rounds (weeks 1 to 2), development and integrations (weeks 2 to 3), QA, speed optimisation, and launch (week 4). If you need a single landing page for a specific campaign, we offer an accelerated 10-day build.",
      },
      {
        q: "Why do HVAC websites built on Wix and Squarespace perform worse?",
        a: "Platform builders like Wix and Squarespace impose hard performance ceilings. They generate bloated HTML, serve redundant JavaScript, and do not allow the level of image and asset optimisation required for a 90+ Google PageSpeed score. The average HVAC site built on Wix scores 21 to 35 on mobile PageSpeed. Sites scoring below 50 are penalised in Google rankings and lose 40% of mobile visitors before the page finishes loading. Our custom builds consistently score 90 to 98 on mobile.",
      },
      {
        q: "Will I own my website after it is built?",
        a: "Completely. We deliver the full source code to your GitHub repository at launch. Your domain, your hosting account, your CMS login, your analytics — all in your name with your billing information. We have no proprietary lock-in. If you ever leave, you take your entire website with you, including all code, content, and design files.",
      },
      {
        q: "Can you integrate my HVAC website with ServiceTitan or Housecall Pro?",
        a: "Yes. We integrate your website directly with ServiceTitan, Housecall Pro, and Jobber on our Accelerator and Growth plans. Homeowners can submit booking requests or estimate enquiries directly from your site, with leads automatically routed to your dispatch queue. We also install call tracking so you know exactly which pages are generating the most inbound calls.",
      },
      {
        q: "What is a Google PageSpeed score and why does it matter for HVAC?",
        a: "Google PageSpeed measures how fast your website loads on a mobile device, scored from 0 to 100. Google uses page speed as a direct ranking factor — slow sites rank lower. Beyond rankings, 53% of mobile users leave a website that takes more than 3 seconds to load. When a homeowner is searching for emergency AC repair from their phone on a hot Texas afternoon, a 7-second load time means a lost lead. Every site we build is engineered to score 90+ on mobile at launch.",
      },
      {
        q: "Do you redesign existing HVAC websites or only build new ones?",
        a: "Both. We begin every engagement with a technical audit. If your existing site has a recoverable foundation — good content structure, a functional CMS, clean hosting — we may recommend a targeted improvement plan over a full rebuild. If the platform itself is the limitation (Wix, Squarespace, a broken WordPress installation), a full rebuild is almost always the more cost-effective path. We tell you which is appropriate honestly, not based on which generates more revenue for us.",
      },
      {
        q: "What platform do you build HVAC websites on?",
        a: "We match the platform to your goals. For maximum SEO flexibility and performance, we build in React with Next.js and a headless CMS (Sanity or Contentful). For teams that need simple content updates without code, we build a custom WordPress theme — not a page-builder template. We do not use Elementor, Divi, or any page builder that introduces the same performance issues we are trying to eliminate. Every site is deployed to edge hosting via Vercel or Cloudflare for global sub-2-second load times.",
      },
    ],
  },
  {
    id: "social-media",
    label: "Social Media",
    icon: Share2,
    items: [
      {
        q: "Does social media actually generate leads for HVAC companies?",
        a: "Yes — when the strategy is built for trust and local visibility rather than vanity metrics. Social works for HVAC in two ways: as a trust verification layer (74% of homeowners check a company social profile before calling) and as a direct lead channel via Facebook DMs, call button taps, and ad-generated form fills. Our clients typically see 15 to 30 direct inquiries per month from social within the first 90 days of professionally managed content.",
      },
      {
        q: "Which social media platforms should HVAC companies prioritise?",
        a: "Facebook is the highest-reach platform for HVAC because the 35 to 65 homeowner demographic is its most active user group. Instagram drives brand trust through before-and-after photos and Reels. Nextdoor is the most underutilised platform in HVAC — neighbour recommendations in a local community thread are extremely high-converting leads. Google Business Profile posts are the only social content that directly influences your local search ranking. We manage all four.",
      },
      {
        q: "How often should an HVAC company post on social media?",
        a: "For Facebook and Instagram, 4 to 6 posts per week is the optimal range — enough to earn consistent algorithm distribution without exhausting content quality. Posting daily is counterproductive if the content is generic. We maintain a structured mix of post types rotating each week: one educational tip, one before-and-after feature, one team or technician spotlight, one promotional or seasonal post, and one community content piece.",
      },
      {
        q: "What type of content performs best for HVAC on social media?",
        a: "Real job photos and before-and-after installation content consistently outperform all other post types for HVAC — generating 4 times more engagement than stock photos. Short Reels (30 to 60 seconds) showing maintenance tips, filter changes, or unit installations receive 3 to 5 times more organic reach than static image posts. Technician spotlights and team content build the personal trust that makes homeowners comfortable enough to call. We produce all of this in-house from footage your team provides.",
      },
      {
        q: "How much should an HVAC company spend on Facebook ads?",
        a: "For a local HVAC service area, a monthly Facebook and Instagram ad budget of $500 to $1,500 generates a consistent lead flow when targeting is correct. We target by zip code, homeownership status, and home value — eliminating spend on renters and out-of-area audiences. Our average cost per HVAC lead from Facebook ads with proper homeowner targeting is $14, compared to a typical unmanaged boosted post average of $80 to $120.",
      },
      {
        q: "Do you create the social media content or does our team?",
        a: "We create everything: content planning, graphic design, caption copywriting, photo editing, Reel scripting and editing. Your only involvement is approving the monthly content calendar before anything goes live — typically a 15-minute review. The more real job site photos and technician footage you can send us each month, the better the content performs. We provide a simple monthly photo brief to guide your team on what to capture.",
      },
      {
        q: "What is Nextdoor and why does it matter for HVAC companies?",
        a: "Nextdoor is a neighbourhood social network where verified local residents share recommendations, ask for referrals, and discuss local services. It is the single most organic and trusted referral channel for home service companies — a recommendation from a neighbour carries far more weight than any ad. When someone asks who to call for AC repair in their neighbourhood thread, being the company that gets recommended is worth more than most paid advertising. We manage your Nextdoor Business Page and coach your team on earning recommendations.",
      },
    ],
  },
  {
    id: "automation",
    label: "Lead Automation",
    icon: Workflow,
    items: [
      {
        q: "What is lead generation automation for HVAC?",
        a: "Lead automation is a system of triggered SMS and email sequences that respond to leads, follow up with estimates, request reviews, and re-engage past customers — automatically, without your team having to remember or manually action each step. The most impactful single automation for HVAC is missed call text-back: when a homeowner calls and goes to voicemail, an SMS fires within 60 seconds and recovers 35 to 40% of those calls that would otherwise be permanently lost.",
      },
      {
        q: "How fast can automation respond to a new HVAC lead?",
        a: "Our new lead response sequence sends the first SMS to a homeowner within 90 seconds of a web form submission — at any time of day or night. This matters because 78% of HVAC leads hire the first company to respond, and companies responding within 5 minutes convert 21 times more leads than those responding within 30 minutes. The average HVAC company without automation takes 47 hours to follow up on a web lead.",
      },
      {
        q: "What is a missed call text-back automation?",
        a: "When a homeowner calls your number and hangs up or reaches voicemail, a missed call text-back sends an automatic SMS within 60 seconds: personalised with your company name, acknowledging the missed call, and providing an easy path to respond or book. This single automation recovers 35 to 40% of calls that would otherwise result in the homeowner calling the next HVAC company on Google.",
      },
      {
        q: "What CRM and field software does your automation integrate with?",
        a: "We integrate natively with ServiceTitan, Housecall Pro, and Jobber. These integrations allow job completion triggers to fire post-job review requests automatically and route booking form leads directly to your dispatch queue. For companies without a CRM, we set up GoHighLevel — the most capable platform for HVAC service businesses — included in the build on our Accelerator and Growth plans.",
      },
      {
        q: "How does post-job review automation work?",
        a: "When a technician marks a job complete in your field software, a 24-hour timer starts. After 24 hours, an automatic SMS is sent to the customer with a direct link to your Google Business Profile review page. The delay ensures the customer has experienced the quality of your service before being asked. This generates 3 to 5 times more reviews than verbal requests at the job site, and it runs on every completed job without any action from your team.",
      },
      {
        q: "Can automation help recover revenue from past HVAC customers?",
        a: "Yes. Your existing customer database is your highest-ROI marketing asset. We build seasonal re-engagement campaigns timed to Texas demand peaks: spring AC tune-up campaigns in March and fall heating check campaigns in October. A well-executed re-engagement campaign to 1,000 past customers typically generates $15,000 to $35,000 in booked maintenance and replacement jobs at a cost per recovered booking of $12 to $18.",
      },
      {
        q: "How long does it take to set up HVAC lead automation?",
        a: "From audit to live automations in 14 days. Day 1 to 2: lead flow audit and gap analysis. Day 3 to 5: CRM integration and software setup. Week 1 to 2: all automation workflows built and copy approved by you. Week 2: end-to-end testing with live test leads. Week 2 to 3: go-live and 60-minute team training. No technical work is required from your team beyond approving the SMS and email copy and attending the training session.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Contracts",
    icon: DollarSign,
    items: [
      {
        q: "How much does HVAC digital marketing cost per month?",
        a: "Our plans start at $1,760 per month for the Starter plan, $2,640 per month for the Accelerator plan, and $4,000 per month for the Growth plan. Each plan includes a defined service bundle — the Starter plan covers the core SEO and ad management foundation, while Accelerator and Growth add website development, social media management, automation, and video content. Annual billing reduces the effective monthly rate.",
      },
      {
        q: "What is included in the Starter plan?",
        a: "The Starter plan at $1,760 per month includes local SEO management (GBP optimisation, citation building, review velocity), Google Ads management (campaign build and monthly optimisation), basic content publishing (2 SEO articles per month), monthly performance reporting, and dedicated account management. It is designed for HVAC companies that want to establish a solid organic and paid search foundation before scaling into additional channels.",
      },
      {
        q: "What is included in the Accelerator plan?",
        a: "The Accelerator plan at $2,640 per month includes everything in Starter plus website development or redesign (one-time build included), social media management (Facebook, Instagram, Nextdoor, and GBP posts), lead automation setup (all 6 core workflows), Facebook and Instagram ad management, and expanded SEO content (4 articles per month). It is designed for HVAC companies ready to operate across all digital channels simultaneously.",
      },
      {
        q: "Does the monthly fee include advertising spend?",
        a: "No. The monthly management fee covers our team's strategy, execution, and reporting work. Advertising spend — what you pay Google, Facebook, or Instagram to show your ads — is a separate budget paid directly to those platforms. We provide recommended budget ranges for your market and service area as part of onboarding. Most HVAC clients spend $1,500 to $5,000 per month in ad spend separately from the management fee.",
      },
      {
        q: "Is there a setup or onboarding fee?",
        a: "There is no separate setup fee. Onboarding — account audits, tracking installation, platform access, team assignment, and the initial strategy call — is included in the first month of the plan. The build work (website, automation setup, campaign structure) is also included in the plan pricing. The only additional cost is your advertising spend, which goes directly to the ad platforms.",
      },
      {
        q: "What happens to my accounts and data if I cancel?",
        a: "You keep everything. Your Google Ads account, Google Analytics, Search Console, and Meta Ads Manager accounts are in your name and stay with you. Your website source code is delivered to your GitHub repository. Your CRM data and automation history remain in your account. We do not hold any client data or assets in proprietary systems. Cancellation requires 30 days notice after the initial 6-month term.",
      },
    ],
  },
];

// =============================================================================
// PAGE HEADER
// =============================================================================
const PageHeader = () => (
  <section className="relative pt-36 pb-20 overflow-hidden bg-background">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/12 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl text-center">
      <nav className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-10">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white font-bold">FAQ</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
      >
        <HelpCircle className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Everything You Need to Know
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.92] tracking-tight text-white mb-6"
      >
        Frequently Asked<br />
        Questions About<br />
        <span className="text-primary">HVAC Marketing.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto"
      >
        Straight answers to every common question about HVAC digital marketing — organised by topic so you can find exactly what you need.
      </motion.p>
    </div>
  </section>
);

// =============================================================================
// CATEGORY TABS
// =============================================================================
const CategoryTabs = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (id: string) => void;
}) => (
  <div className="sticky top-0 z-30 bg-background/90 backdrop-blur-lg border-b border-white/10 py-4">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            data-testid={`faq-tab-${cat.id}`}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
              active === cat.id
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-white/5 text-zinc-400 border border-white/10 hover:border-primary/40 hover:text-white"
            }`}
          >
            <cat.icon className="w-3.5 h-3.5" />
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// =============================================================================
// FAQ ACCORDION (single category)
// =============================================================================
const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] hover:border-primary/40 transition-colors"
        >
          <button
            className="w-full flex items-center justify-between gap-4 p-6 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            data-testid={`faq-item-${i}`}
          >
            <span className="font-bold text-white text-lg leading-tight">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-[15px] border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// =============================================================================
// MAIN FAQ SECTION
// =============================================================================
const FaqSection = () => {
  const [activeId, setActiveId] = useState(FAQ_CATEGORIES[0].id);
  const activeCategory = FAQ_CATEGORIES.find((c) => c.id === activeId) ?? FAQ_CATEGORIES[0];

  return (
    <section className="bg-background pb-24">
      <CategoryTabs active={activeId} setActive={setActiveId} />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl pt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                <activeCategory.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight">
                  {activeCategory.label}
                </h2>
                <p className="text-sm text-zinc-500 font-medium mt-0.5">
                  {activeCategory.items.length} questions
                </p>
              </div>
            </div>

            <FaqAccordion items={activeCategory.items} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// =============================================================================
// QUICK LINKS (all services)
// =============================================================================
const QuickLinks = () => {
  const links = [
    { label: "HVAC SEO", href: "/services/seo" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "Google Ads", href: "/services/paid-ads" },
    { label: "Meta Ads", href: "/services/meta-ads" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "UI/UX Design", href: "/services/ui-ux" },
    { label: "Social Media", href: "/services/social-media" },
    { label: "Lead Automation", href: "/services/automation" },
    { label: "Our Process", href: "/process" },
  ];

  return (
    <section className="bg-white py-20 md:py-24 relative overflow-hidden border-t border-zinc-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-zinc-900 mb-3">
            Explore Service Pages for <span className="text-primary">Deeper Detail</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            Each service page has its own dedicated FAQ section with more specific questions and answers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {links.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={l.href}
                className="flex items-center justify-between gap-2 p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                data-testid={`faq-quicklink-${l.href}`}
              >
                <span className="font-bold text-zinc-800 text-sm group-hover:text-primary transition-colors">{l.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-primary transition-colors flex-shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================================================
// STILL HAVE QUESTIONS
// =============================================================================
const StillHaveQuestions = () => (
  <section className="relative bg-background py-24 md:py-32 overflow-hidden border-t border-white/5">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[180px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-[140px]" />
    </div>

    <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl text-center">
      <div className="bg-gradient-to-br from-zinc-900 to-background border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 mb-6">
            <Flame className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Still Have Questions?
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[0.95] text-white mb-5">
            Start With a Free Audit.<br />
            <span className="text-primary">Get All the Answers.</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Every client engagement begins with a free, written audit of your website, Google Business Profile, ad accounts, and competitors — delivered within 48 hours, no sales call required. If you have a specific question not covered here, call us directly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              { val: "48 hrs", label: "Free audit delivered in writing" },
              { val: "$0", label: "No cost, no obligation to start" },
              { val: "1 client", label: "Per service area — check availability" },
            ].map((s) => (
              <div key={s.val} className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
                <div className="font-display text-4xl text-primary leading-none mb-1">{s.val}</div>
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-bold leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_15px_40px_-8px_rgba(255,107,43,0.6)]"
              data-testid="link-faq-cta"
            >
              Get My Free Audit
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
      </div>
    </div>
  </section>
);

// =============================================================================
// MAIN EXPORT
// =============================================================================
export default function FaqPage() {
  useEffect(() => {
    const allFaqs = FAQ_CATEGORIES.flatMap((c) => c.items);

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a,
        },
      })),
    };

    const existing = document.querySelector("script[data-faq-page-schema]");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-page-schema", "0");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Answers to every common question about HVAC digital marketing — SEO, Google Ads, website development, social media, lead automation, and pricing. Texas HVAC specialists."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Answers to every common question about HVAC digital marketing — SEO, Google Ads, website development, social media, lead automation, and pricing. Texas HVAC specialists.";
      document.head.appendChild(meta);
    }

    return () => {
      document.querySelector("script[data-faq-page-schema]")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <SEOHead
        title="HVAC Marketing FAQ | Common Questions Answered | HVAC Digitals"
        description="Answers to the most common questions about HVAC digital marketing, SEO, Google Ads, website design, and working with HVAC Digitals in Texas."
        canonical="https://hvacdigitals.com/faq"
      />
      <Navbar />
      <main>
        <PageHeader />
        <FaqSection />
        <QuickLinks />
        <StillHaveQuestions />
      </main>
      <Footer />
    </div>
  );
}
