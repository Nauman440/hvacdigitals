import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://hvacdigitals.com").replace(/\/$/, "");
export const SITE_NAME = "HVAC Digitals";
export const TWITTER_HANDLE = "@hvacdigitals";
export const DEFAULT_OG_IMAGE = "/opengraph.jpg";

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
    robots: { index: true, follow: true },
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
