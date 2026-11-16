import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas", display: "swap" });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "HVAC Digitals | Texas's #1 HVAC Marketing Agency", template: "%s | HVAC Digitals" },
  description:
    "Grow your HVAC business in Texas with full-stack digital marketing — Google Ads, Meta Ads, local SEO, AEO, and websites built exclusively for HVAC contractors.",
  applicationName: SITE_NAME,
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description:
        "Texas's #1 HVAC-exclusive digital marketing agency. We help HVAC contractors generate leads with Google Ads, Meta Ads, local SEO and AI search.",
      foundingDate: "2021",
      founder: {
        "@type": "Person",
        name: "Muhammad Nauman",
        sameAs: "https://www.linkedin.com/in/nauman-ai-automation-expert/",
      },
      areaServed: { "@type": "State", name: "Texas" },
      address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
      telephone: "+18885554822",
      email: "hello@hvacdigitals.com",
      sameAs: ["https://www.linkedin.com/in/nauman-ai-automation-expert/"],
      knowsAbout: [
        "HVAC Marketing",
        "Google Ads",
        "Meta Ads",
        "Local SEO",
        "Answer Engine Optimization",
        "HVAC Website Design",
        "Marketing Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${bebas.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
        {GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
