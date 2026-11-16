# HVAC Digitals: HVAC Lead Generation Agency Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 marketing site for an HVAC-only agency that generates leads through **Google Ads, Meta (Facebook & Instagram) Ads, SEO/AEO and Local SEO**.
Ported from the original Vite/React build. It keeps the same pages, copy, navy/orange/cyan color scheme, and Bebas Neue + DM Sans typography.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services/paid-ads` | Google Ads & Local Services Ads |
| `/services/meta-ads` | **Meta (Facebook & Instagram) Ads** (new) |
| `/services/seo` | HVAC SEO & AEO |
| `/services/local-seo` | Local SEO / Map Pack |
| `/services/website-development` | Website Development |
| `/services/ui-ux` | UI/UX |
| `/services/social-media` | Social Media Management |
| `/services/automation` | Lead Automation |
| `/about`, `/process`, `/faq`, `/contact` | Company pages |
| `/blog`, `/blog/[slug]` | Blog (posts live in `src/data/blog-posts.ts`) |

## Lead capture

Every form posts to `POST /api/contact` (`src/app/api/contact/route.ts`). It validates input, includes a honeypot field and per-IP rate limiting, and delivers each lead to:

- `LEAD_WEBHOOK_URL`: any webhook (Zapier, Make, GoHighLevel, n8n, Slack…), and/or
- `RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL`: an email notification via Resend.

If neither is set, leads are printed to the server log.

## SEO

- Server-rendered `<title>`, description, canonical, Open Graph and Twitter tags per page (`src/lib/seo.ts` + each `app/**/page.tsx`)
- JSON-LD: Organization/WebSite in the layout, plus Service / FAQPage / HowTo / Article schema per page
- `sitemap.xml` and `robots.txt` generated from `src/app/sitemap.ts` and `src/app/robots.ts`
- GA4 via `NEXT_PUBLIC_GA_ID`

## Structure

```
src/app/          routes, layout, API, sitemap, robots
src/views/        page components (home.tsx also exports Navbar + Footer)
src/components/   PricingSection, SEOHead (JSON-LD), shadcn/ui primitives, brand icons
src/data/         blog posts
public/           images, favicon, OG image
```
