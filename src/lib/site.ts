// ⚠️ PLACEHOLDER: replace PHONE_DIGITS with your real 10-digit business number.
// Everything on the site (buttons, header, footer, forms, Google structured data) reads from here.
const PHONE_DIGITS = "8885554822";

export const SITE = {
  name: "HVAC Digitals",
  phone: `(${PHONE_DIGITS.slice(0, 3)}) ${PHONE_DIGITS.slice(3, 6)}-${PHONE_DIGITS.slice(6)}`,
  phoneHref: `tel:+1${PHONE_DIGITS}`,
  phoneE164: `+1${PHONE_DIGITS}`,
  email: "hello@hvacdigitals.com",
  hours: "Mon–Fri, 7am–7pm CT",
  city: "Dallas, TX",
  linkedin: "https://www.linkedin.com/in/nauman-ai-automation-expert/",
};

export type NavService = { label: string; href: string; blurb: string };

export const SERVICE_GROUPS: { title: string; items: NavService[] }[] = [
  {
    title: "Leads this month",
    items: [
      { label: "Google Ads & LSA", href: "/services/paid-ads", blurb: "Show up when someone types “AC repair near me”." },
      { label: "Meta Ads", href: "/services/meta-ads", blurb: "Facebook & Instagram offers that fill slow weeks." },
    ],
  },
  {
    title: "Leads every month after",
    items: [
      { label: "Local SEO & Map Pack", href: "/services/local-seo", blurb: "Get into Google's top 3 on the map." },
      { label: "HVAC SEO & AI search", href: "/services/seo", blurb: "Rank for every service and every suburb." },
    ],
  },
  {
    title: "Book more of the leads you get",
    items: [
      { label: "Websites that book jobs", href: "/services/website-development", blurb: "Fast pages built around the phone call." },
      { label: "Speed-to-lead automation", href: "/services/automation", blurb: "Text back missed calls in seconds." },
      { label: "Conversion design", href: "/services/ui-ux", blurb: "Fix the pages that leak calls." },
      { label: "Social media", href: "/services/social-media", blurb: "Stay familiar between breakdowns." },
    ],
  },
];
