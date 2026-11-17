import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://hvacdigitals.com").replace(/\/$/, "");
export const SITE_NAME = "HVAC Digitals";
export const TWITTER_HANDLE = "@hvacdigitals";
export const DEFAULT_OG_IMAGE = "/opengraph.jpg";

/**
 * Every page is crawlable and indexable. Only an explicit NEXT_PUBLIC_ALLOW_INDEXING=false
 * (e.g. on a staging deploy) switches the whole site to noindex.
 */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";

export const ROBOTS: Metadata["robots"] = ALLOW_INDEXING
  ? { index: true, follow: true }
  : { index: false, follow: true, googleBot: { index: false, follow: true } };

/** Google Analytics 4 measurement ID (from the original site). Override with NEXT_PUBLIC_GA_ID. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-PND6GXQJ17";

/** Search Console "HTML tag" verification code: just the content="…" value. */
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
};

/** Builds full per-page metadata: title, description, canonical, Open Graph and Twitter. */
export function pageMetadata({ title, description, path, ogImage = DEFAULT_OG_IMAGE, type = "website" }: PageSeo): Metadata {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: ROBOTS,
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      title,
      description,
      images: [ogImage],
    },
  };
}
