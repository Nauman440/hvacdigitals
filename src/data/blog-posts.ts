export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  coverGradient: string;
  ogImage: string;
  content: BlogSection[];
};

export type BlogSection = {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "callout" | "stat-row";
  text?: string;
  items?: string[];
  stats?: { val: string; label: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hvac-google-map-pack-texas-2025",
    ogImage: "https://hvacdigitals.com/og-blog-map-pack.jpg",
    title: "How Texas HVAC Companies Can Dominate Google's Map Pack in 2025",
    excerpt:
      "The Map Pack is where 44% of all local search clicks land. If your HVAC company isn't in the top 3, you're invisible to nearly half of all homeowners searching for service in your market.",
    category: "Local SEO",
    readTime: "8 min read",
    publishDate: "May 1, 2026",
    author: "Muhammad Nauman",
    authorRole: "Founder, HVAC Digitals",
    coverGradient: "from-orange-600 to-red-700",
    content: [
      {
        type: "p",
        text: "Open Google on your phone and type 'AC repair Houston.' Before any organic results, before any paid ads below the top three, you will see a block of three local businesses with star ratings, addresses, and phone numbers. That block is the Google Map Pack — and it generates 44% of all clicks on the page.",
      },
      {
        type: "p",
        text: "For a Texas HVAC company running during peak summer season, being absent from the Map Pack during emergency AC repair searches is not a minor inconvenience. It is thousands of dollars of booked jobs going to your competitors every single week.",
      },
      {
        type: "h2",
        text: "What Actually Determines Map Pack Rankings?",
      },
      {
        type: "p",
        text: "Google uses three primary factors to determine which businesses appear in the Map Pack for any given search. Understanding these factors is the difference between a strategy that moves the needle and one that wastes your budget.",
      },
      {
        type: "h3",
        text: "1. Relevance: Does Google Understand What You Do?",
      },
      {
        type: "p",
        text: "Relevance is how well your Google Business Profile matches the search query. A profile that says 'HVAC Services' is less relevant to 'emergency AC repair Houston' than one that says 'Emergency AC Repair, HVAC Installation and Maintenance — Houston, The Woodlands, McKinney.' The specificity of your primary and secondary categories, your service descriptions, and your GBP posts all feed into relevance.",
      },
      {
        type: "ul",
        items: [
          "Select 'Heating, ventilation & air conditioning contractor' as your primary category — not just 'Contractor'",
          "Add secondary categories: 'Air conditioning contractor,' 'Furnace repair service,' 'HVAC contractor'",
          "Write service descriptions using the exact phrases homeowners type (AC repair, central air installation, air handler replacement)",
          "Publish at least two GBP posts per week using location-specific keywords",
        ],
      },
      {
        type: "h3",
        text: "2. Distance: How Close Are You to the Searcher?",
      },
      {
        type: "p",
        text: "Distance is the factor you have the least direct control over — Google gives preference to businesses physically closer to the person searching. However, distance is calculated from your registered business address, not where your technicians are working. This means the location you register on your GBP matters significantly. If your office or warehouse is in Plano but you serve The Woodlands, you will rank better in Plano. Properly configuring your service area in GBP — listing every city and zip code you actively serve — signals to Google that your relevance extends beyond your physical address.",
      },
      {
        type: "h3",
        text: "3. Prominence: Does Google Trust You?",
      },
      {
        type: "p",
        text: "Prominence is the most complex factor and the one where HVAC companies have the most room to improve. It is essentially how well-known and trusted Google considers your business to be. Prominence is built from three signals:",
      },
      {
        type: "ol",
        items: [
          "Review quantity and quality — A business with 400 reviews at 4.8 stars outranks one with 40 reviews at 4.6 stars, all else being equal. Review velocity (how recently and how frequently new reviews are posted) matters as much as the total count.",
          "Citation consistency — Your business name, address, and phone number must be identical across every directory listing on the internet. A single digit difference in your phone number between Yelp and your GBP confuses Google's entity resolution and suppresses rankings.",
          "Website authority — Google's algorithm connects your GBP to your website. A website that ranks well for HVAC keywords amplifies your Map Pack ranking. A weak website suppresses it.",
        ],
      },
      {
        type: "stat-row",
        stats: [
          { val: "44%", label: "of local search clicks go to Map Pack results" },
          { val: "87%", label: "of homeowners read reviews before calling" },
          { val: "3.4x", label: "more clicks for a 4.8-star rating vs 4.2-star" },
        ],
      },
      {
        type: "h2",
        text: "The Review Velocity Strategy That Moves Rankings in 30 Days",
      },
      {
        type: "p",
        text: "The single fastest Map Pack ranking lever available to an HVAC company is review velocity. Google does not just look at your total review count — it looks at how recently you have been getting reviews. A business that earned 300 reviews over five years and stopped generates less local ranking signal than a business that has earned 60 reviews in the last 90 days.",
      },
      {
        type: "callout",
        text: "The fastest way to generate review velocity is post-job SMS automation. When a technician marks a job complete in your field software, an automatic SMS fires 24 hours later with a direct link to your Google Business Profile review page. This single workflow generates 3 to 5 times more reviews than verbal requests at the job site — and requires zero effort from your team after setup.",
      },
      {
        type: "h2",
        text: "Why Citation Inconsistency Is Quietly Destroying Your Local Rankings",
      },
      {
        type: "p",
        text: "We audit approximately 40 HVAC company GBP profiles per year. In 92% of them, we find NAP (Name, Address, Phone) inconsistencies across major directories. The most common culprits are a previous phone number still live on Yelp, a suite number included on some listings and excluded on others, and business name variations ('Cool Air HVAC' vs 'Cool Air HVAC LLC' vs 'Cool Air Heating and Cooling').",
      },
      {
        type: "p",
        text: "Google cross-references your GBP data against hundreds of external directories to verify your business is real and trustworthy. When those directories disagree, Google's confidence in your business decreases — and your Map Pack ranking drops accordingly. Cleaning up citation inconsistency across the top 50 directories is not glamorous work, but it consistently produces ranking improvements within 4 to 6 weeks.",
      },
      {
        type: "h2",
        text: "The Texas-Specific Map Pack Opportunities Most Agencies Miss",
      },
      {
        type: "p",
        text: "Texas HVAC has seasonal demand patterns that most national SEO agencies are completely unaware of. Local Map Pack competition shifts dramatically between June and September (peak emergency AC demand), March through May (tune-up season), and October through December (heating check season in Central and North Texas). A Texas-specific Map Pack strategy targets different keywords at different times of year, adjusts posting frequency to match search volume patterns, and builds review velocity campaigns around the highest-value seasonal windows.",
      },
      {
        type: "ul",
        items: [
          "Emergency AC repair searches peak in June-August — ensure GBP is fully optimized and review velocity is highest entering summer",
          "Tune-up and maintenance searches peak March-May — schedule GBP posts and promotions for spring",
          "Heating repair searches spike October-November in San Antonio, Lubbock, and Amarillo markets",
          "Severe storm season creates unique emergency HVAC search spikes — GBP posts addressing post-storm service build real-time visibility",
        ],
      },
      {
        type: "h2",
        text: "How Long Does Map Pack Optimization Take to Show Results?",
      },
      {
        type: "p",
        text: "With consistent execution — GBP optimization completed in the first week, citation cleanup in weeks two through four, and review velocity campaigns running from day one — Texas HVAC companies typically see measurable Map Pack movement within 30 to 45 days. Full top-3 positioning in competitive markets (Houston, Dallas, San Antonio) takes 90 to 120 days of sustained work. In smaller Texas markets (Corpus Christi, El Paso, McAllen), top-3 positioning is often achievable within 45 to 60 days.",
      },
    ],
  },
  {
    slug: "hvac-google-ads-cost-per-lead-mistake",
    ogImage: "https://hvacdigitals.com/og-blog-google-ads.jpg",
    title: "The $180 Google Ads Mistake Every HVAC Company Makes (And How to Fix It)",
    excerpt:
      "Most HVAC companies paying $150–$200 per Google Ads lead assume they have a budget problem. They don't. They have a campaign structure problem — and it's almost always the same three mistakes.",
    category: "Paid Advertising",
    readTime: "6 min read",
    publishDate: "April 22, 2026",
    author: "Muhammad Nauman",
    authorRole: "Founder, HVAC Digitals",
    coverGradient: "from-blue-700 to-indigo-800",
    content: [
      {
        type: "p",
        text: "A Texas HVAC company called us in March paying $187 per Google Ads lead. They had been running ads for 14 months and assumed they simply needed a bigger market or a lower-cost industry. Within 60 days of restructuring their campaigns, their cost per lead dropped to $44 — with the same monthly budget and the same service area.",
      },
      {
        type: "p",
        text: "This is not an unusual result. The structural problems we encounter in HVAC Google Ads accounts are remarkably consistent, regardless of the agency or marketing coordinator who set them up. Here are the three most common — and how to fix each one.",
      },
      {
        type: "h2",
        text: "Mistake #1: Bidding on Broad Match Keywords Without Negative Keywords",
      },
      {
        type: "p",
        text: "The most expensive mistake in HVAC Google Ads is using broad match or modified broad match keywords without an extensive negative keyword list. Broad match tells Google: 'Show my ad to anyone whose search is roughly related to this topic.' For the keyword 'HVAC repair,' this means your ad will appear for searches like 'HVAC repair manual PDF,' 'HVAC repair school near me,' 'HVAC repair certification course,' and 'how to repair HVAC yourself.'",
      },
      {
        type: "p",
        text: "None of those searchers are homeowners looking to hire you. You are paying for every click. And because homeowners searching 'HVAC repair manual' have zero commercial intent, your landing page conversion rate plummets — meaning Google's algorithm learns that your ads generate low-quality traffic and reduces your Quality Score, which raises your cost per click across the entire account.",
      },
      {
        type: "callout",
        text: "Every HVAC Google Ads account we inherit has the same missing negative keywords: DIY, manual, course, certification, school, training, how to, Reddit, YouTube, free, cheap, used, parts, diagram, troubleshoot. These 14 exclusions alone reduce wasted spend by 20 to 35% in most accounts.",
      },
      {
        type: "h3",
        text: "The Fix: Phrase Match + Comprehensive Negative Keyword List",
      },
      {
        type: "p",
        text: "Switch your primary keywords from broad match to phrase match and exact match. Build a negative keyword list of at least 150 terms covering DIY intent, educational intent, job seeker intent, and out-of-area geographic modifiers. Review your Search Terms report weekly for the first 90 days and add new negatives as they appear.",
      },
      {
        type: "h2",
        text: "Mistake #2: Sending Ad Traffic to Your Homepage",
      },
      {
        type: "p",
        text: "The second most common and most expensive HVAC Google Ads mistake is sending click traffic to your website homepage rather than a dedicated landing page. Your homepage is designed to introduce visitors to your company. It has navigation menus, links to multiple service pages, social proof scattered throughout, and no single clear call to action. When a homeowner clicks an ad for 'emergency AC repair Dallas' and lands on a page that says 'Welcome to Smith HVAC — Serving Dallas Since 1998,' they experience a disconnect between what they searched for and what they found.",
      },
      {
        type: "stat-row",
        stats: [
          { val: "2.1%", label: "Average homepage conversion rate for HVAC ads" },
          { val: "8.4%", label: "Average dedicated landing page conversion rate" },
          { val: "4x", label: "More leads from same ad spend with proper landing pages" },
        ],
      },
      {
        type: "h3",
        text: "The Fix: Build Service-Specific Landing Pages",
      },
      {
        type: "p",
        text: "Every Google Ads campaign needs its own dedicated landing page. The emergency AC repair campaign needs a page that opens with 'Emergency AC Repair — Dallas Bay Area — Same Day Service.' The AC installation campaign needs a page focused on installation. Each page should have one goal (generate a call or form fill), a headline that exactly matches the ad copy, and social proof specific to that service. Remove navigation menus from ad landing pages — they give visitors an exit route that kills conversions.",
      },
      {
        type: "h2",
        text: "Mistake #3: Running Ads 24/7 With No Ad Scheduling",
      },
      {
        type: "p",
        text: "HVAC homeowner searches are not evenly distributed across 24 hours. Emergency AC repair searches spike between 10am and 3pm on weekdays (when people arrive home to a hot house after work and realize the AC failed overnight) and between 8am and noon on weekends. HVAC installation and replacement searches peak between 9am and 6pm on weekdays.",
      },
      {
        type: "p",
        text: "Running ads at 2am generates clicks — from people who cannot reach you, from competitors doing research, and from international traffic that somehow passes geographic targeting. These clicks drain budget that would otherwise fund high-intent 11am clicks from homeowners ready to book. Ad scheduling that concentrates budget in high-intent hours reduces wasted spend and improves lead quality simultaneously.",
      },
      {
        type: "ul",
        items: [
          "Set bid adjustments +20-30% during peak hours (9am-3pm weekdays, 8am-noon weekends)",
          "Set bid adjustments -50% or pause ads entirely between 11pm and 6am",
          "Run emergency campaigns on 24/7 scheduling only if you offer genuine 24/7 emergency service",
          "Review hour-of-day performance data in your account before setting schedules — your market may differ",
        ],
      },
      {
        type: "h2",
        text: "What a Well-Structured HVAC Google Ads Account Looks Like",
      },
      {
        type: "p",
        text: "A properly structured HVAC Google Ads account has separate campaigns for each service type (emergency repair, routine maintenance, AC installation, heating service), each with its own dedicated landing page, keyword list, and negative keyword set. Campaigns targeting different geographic areas (Houston vs Fort Worth vs Frisco) are separated so budget can be allocated to the highest-converting areas. Call ads and responsive search ads run simultaneously to capture both call-preferred and form-preferred homeowners.",
      },
      {
        type: "p",
        text: "At this level of structure, Texas HVAC campaigns consistently achieve cost per lead between $35 and $65 — not $150 to $200. The budget is identical. The difference is entirely in how the account is built.",
      },
    ],
  },
  {
    slug: "hvac-website-mobile-speed-texas",
    ogImage: "https://hvacdigitals.com/og-blog-mobile-speed.jpg",
    title: "Why Your HVAC Website Is Losing 40% of Visitors Before They Call",
    excerpt:
      "If your HVAC website takes more than 3 seconds to load on a mobile phone, you are losing 4 in 10 potential customers before they ever see your phone number. Here's what's causing it and how to fix it.",
    category: "Website Development",
    readTime: "7 min read",
    publishDate: "April 10, 2026",
    author: "Muhammad Nauman",
    authorRole: "Founder, HVAC Digitals",
    coverGradient: "from-emerald-600 to-teal-700",
    content: [
      {
        type: "p",
        text: "A Texas homeowner's AC stops working at 2pm on a Thursday in July. Temperature inside is already 84 degrees. She grabs her phone and Googles 'AC repair near me.' Your Google Ad appears. She taps it. And then she waits. Three seconds. Four seconds. Five seconds. She hits the back button and calls the next result.",
      },
      {
        type: "p",
        text: "This scenario plays out hundreds of times per month for HVAC companies with slow websites. Google's research is unambiguous: 53% of mobile users abandon a website that takes more than 3 seconds to load. In the context of a Texas summer, when emergency AC searches represent your highest-value leads, a 6-second mobile load time is not a technical problem — it is a revenue problem.",
      },
      {
        type: "stat-row",
        stats: [
          { val: "53%", label: "Mobile users who leave if page takes 3+ seconds" },
          { val: "21", label: "Average Google PageSpeed score for Wix-built HVAC sites" },
          { val: "90+", label: "PageSpeed score HVAC Digitals builds achieve at launch" },
        ],
      },
      {
        type: "h2",
        text: "Why Do Most HVAC Websites Load So Slowly?",
      },
      {
        type: "p",
        text: "The answer is almost always the platform the website was built on. Wix, Squarespace, and GoDaddy Website Builder share a common architecture: they prioritize drag-and-drop ease of use over performance. To enable that flexibility, they load dozens of JavaScript files, unoptimized CSS, and generic fonts that have nothing to do with your specific website — just in case you might use those features.",
      },
      {
        type: "p",
        text: "When we audit HVAC websites built on Wix, the average mobile PageSpeed score is between 18 and 28 out of 100. The average total page weight is 4 to 8 megabytes — on a mobile connection where a page should ideally weigh under 1 megabyte. These are not edge cases. They are consistent platform-level limitations that no amount of image compression or optimization plugins will fully overcome.",
      },
      {
        type: "h2",
        text: "What Google PageSpeed Score Actually Measures",
      },
      {
        type: "p",
        text: "Google PageSpeed Insights measures your website on six Core Web Vitals metrics — the technical performance signals Google uses both to evaluate user experience and as a ranking factor in organic search. The three most important for HVAC:",
      },
      {
        type: "ul",
        items: [
          "Largest Contentful Paint (LCP): How long until the main content of your page is visible. Should be under 2.5 seconds. Wix HVAC sites average 6.8 seconds.",
          "First Input Delay (FID) / Interaction to Next Paint (INP): How quickly your page responds when a user taps a button or link. Slow JavaScript is the primary cause of poor scores.",
          "Cumulative Layout Shift (CLS): Whether elements jump around the screen as the page loads. Unstable layouts cause users to accidentally tap the wrong element — a major frustration on mobile.",
        ],
      },
      {
        type: "h2",
        text: "The Real Cost of a Slow HVAC Website in Texas",
      },
      {
        type: "p",
        text: "Let's quantify this. If your Google Ads campaign generates 200 clicks per month at $4 per click, your monthly ad spend is $800. If your website converts at 2% (the average for a slow homepage), you generate 4 leads per month at $200 per lead.",
      },
      {
        type: "p",
        text: "If the same $800 in clicks hit a fast, dedicated landing page converting at 8%, you generate 16 leads per month at $50 per lead. The ad spend is identical. The difference — 12 additional leads per month — is entirely attributable to website performance and landing page structure. At a conservative average job value of $350, that is $4,200 per month in additional revenue from the same budget.",
      },
      {
        type: "callout",
        text: "Every month you run Google Ads to a slow Wix website is a month you are paying for 200 clicks and converting only 4 of them into calls. A fast, purpose-built landing page converts the same traffic at 3 to 4 times the rate — not because of magic, but because the homeowner stays on the page long enough to see your phone number.",
      },
      {
        type: "h2",
        text: "What Makes an HVAC Website Fast?",
      },
      {
        type: "p",
        text: "Speed is not a design choice — it is an architectural choice made when selecting your platform and build approach. The technical characteristics of a fast HVAC website:",
      },
      {
        type: "ul",
        items: [
          "Static HTML delivery — pages served as pre-rendered HTML files, not generated on-demand by a slow PHP server",
          "Image optimization — every image compressed to WebP format, sized correctly for mobile viewport, and lazy-loaded below the fold",
          "Minimal JavaScript — only the scripts required for the page to function, deferred to load after the main content",
          "Edge hosting — your website hosted on a global CDN (Cloudflare or Vercel) so Texas homeowners receive pages from a server within 20 milliseconds of their location",
          "Font preloading — custom fonts loaded before the browser renders text, eliminating the layout shift caused by font swaps",
        ],
      },
      {
        type: "h2",
        text: "How to Check Your HVAC Website's Current Performance",
      },
      {
        type: "p",
        text: "Run your website through Google PageSpeed Insights (pagespeed.web.dev). Select the Mobile tab — this is the score that matters most, since over 70% of emergency HVAC searches are conducted on mobile devices. If your score is below 50, you are losing a significant portion of your paid and organic traffic before they ever interact with your page. If it is below 30, your current platform is not fixable with optimization — a rebuild on a performance-first platform is the only path to a fast website.",
      },
      {
        type: "h3",
        text: "Quick Wins if a Full Rebuild Is Not Immediately Possible",
      },
      {
        type: "p",
        text: "If a full rebuild is not feasible in the short term, these optimizations can improve a slow website without a platform change: compress all images and convert to WebP format using a tool like Squoosh, remove unused plugins and tracking scripts, enable browser caching, reduce the number of fonts loaded, and remove autoplay video backgrounds from the homepage.",
      },
      {
        type: "p",
        text: "These measures typically improve a PageSpeed score from 20 to 35 — not to the 90+ that a purpose-built site achieves, but enough to recover some of the lost traffic. For a platform that can achieve and sustain a 90+ score, you need a custom build on React with Next.js or a clean WordPress build on fast hosting — not a Wix or Squarespace template.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
