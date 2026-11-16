interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: object;
}

/**
 * Page titles, descriptions, canonicals and Open Graph tags are generated on the
 * server by each route's `metadata` export (see src/lib/seo.ts). This component
 * only renders the page's JSON-LD structured data, so it ships in the initial HTML.
 */
export function SEOHead({ jsonLd }: SEOHeadProps) {
  if (!jsonLd) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
