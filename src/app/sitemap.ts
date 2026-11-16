import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services/paid-ads", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/meta-ads", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/seo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/local-seo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/website-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/ui-ux", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/process", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...STATIC_ROUTES.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...BLOG_POSTS.map((p) => {
      const d = new Date(p.publishDate);
      return {
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: Number.isNaN(d.getTime()) ? now : d,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    }),
  ];
}
