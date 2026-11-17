export type ServiceData = {
  slug: string;
  path: string;
  name: string;
  serviceType: string;
  kicker: string;
  h1: string;
  h1Muted?: string;
  intro: string;
  /** Facts that are true by how we work: timelines, policies. No client results here. */
  stats: [string, string][];
  mock: "google" | "meta" | "map" | "organic" | "site" | "sms" | "social";
  mockCaption: string;
  fitYes: string[];
  fitNo: string[];
  workTitle: string;
  work: { t: string; d: string }[];
  timeline: { when: string; what: string }[];
  /** What the free audit checks for this service. */
  audit: string[];
  faqs: { q: string; a: string }[];
  formHeading: string;
  ctaTitle: string;
};

export const SERVICES: Record<string, ServiceData> = {
  "paid-ads": {
    slug: "paid-ads",
    path: "/services/paid-ads",
    name: "Google Ads & Local Services Ads for HVAC",
    serviceType: "Pay-Per-Click Advertising",
    kicker: "Google Ads & Local Services Ads",
    h1: "Be the first number they call",
    h1Muted: "when the AC quits.",
    intro:
      "When it's 104° and the AC dies, homeowners don't scroll. They call one of the first few names Google shows them. We get you into those spots with Local Services Ads and Search campaigns built only for HVAC, and we cut the spend that goes to people who were never going to hire you.",
    stats: [
      ["24–48 hrs", "typical time to first calls"],
      ["1,000+", "junk searches blocked per account"],
      ["$0", "markup on your ad spend"],
    ],
    mock: "google",
    mockCaption: "Where your business shows up: the Local Services Ads row, then the top search ad.",
    fitYes: [
      "You can answer the phone (or have someone who can) during business hours",
      "You want emergency repair and replacement calls, not just tune-ups",
      "You can put $1,500+ a month into ad spend",
      "You want to know exactly which calls came from ads",
    ],
    fitNo: [
      "You're already booked out three weeks and can't take more work",
      "You want to spend $300 a month and see what happens",
      "You don't hold the licensing and insurance Google requires for Local Services Ads",
    ],
    workTitle: "What we actually do in your account",
    work: [
      { t: "Local Services Ads setup and disputes", d: "We get you through Google's screening for the Google Verified badge, tune your services and hours, and dispute bad leads so Google credits them back." },
      { t: "Search campaigns split by job type", d: "Repair, replacement, maintenance and heating each get their own campaign and budget, so cheap tune-up clicks don't eat your install budget." },
      { t: "A negative keyword list that keeps growing", d: "We block “HVAC jobs,” “how to,” “DIY,” “school,” rentals and out-of-area searches. It's often the biggest source of wasted spend we find." },
      { t: "Landing pages built for the call", d: "One page per service with your reviews, your trucks and a big tap-to-call button. Never your homepage." },
      { t: "Call tracking and recording", d: "Every call gets a tracking number by campaign. You can listen to any call, and we can see which keywords lead to booked jobs, not just rings." },
      { t: "Budgets that follow the weather", d: "We push spend ahead of heat waves and cold snaps and pull back in dead weeks, instead of running the same daily budget all year." },
    ],
    timeline: [
      { when: "Days 1–3", what: "Audit of your current account and competitors. You see where the money goes before we change anything." },
      { when: "Week 1", what: "Local Services Ads screening started, new campaigns and landing pages built, call tracking live." },
      { when: "Weeks 2–4", what: "Launch, then reviews every 48 hours: cut losing keywords, raise bids on what books jobs." },
      { when: "Month 3", what: "Enough data to scale what works and cut what doesn't, ahead of the next season." },
    ],
    audit: [
      "Search terms report: what people actually typed before clicking your ads",
      "Wasted spend: job seekers, DIYers and out-of-area clicks",
      "Local Services Ads eligibility and profile setup",
      "Your landing pages on a phone: speed, tap-to-call, trust signals",
      "Whether calls are tracked, and what happens to missed ones",
    ],
    faqs: [
      { q: "What's a reasonable cost per lead for HVAC on Google?", a: "It varies a lot by city, season and service. Repair leads are usually cheaper than replacement leads, and big metros cost more than smaller towns. Your audit gives you a realistic range for your market before you spend anything." },
      { q: "Local Services Ads or regular Google Ads?", a: "Usually both. Local Services Ads sit at the very top, you pay per lead instead of per click, and they're great for repair calls. Search ads let you target replacements and specific services where you want more control. We start with whichever gives you the fastest return." },
      { q: "How much should I spend?", a: "For one city, $1,500–$3,000 a month is a reasonable start. For Houston, Dallas or San Antonio, more like $3,000–$8,000. Start with your most profitable service, prove the return, then scale." },
      { q: "Who owns the Google Ads account?", a: "You do. It's created under your business, billed to your card, and stays with you if we part ways. We just get manager access." },
      { q: "Do you also run Facebook ads?", a: "Yes, on our Meta Ads service. It works best alongside Google: Google catches people searching right now, and Meta fills the slow weeks with tune-up and replacement offers." },
    ],
    formHeading: "Get a free Google Ads audit",
    ctaTitle: "Find out where your Google budget is leaking.",
  },

  "meta-ads": {
    slug: "meta-ads",
    path: "/services/meta-ads",
    name: "Facebook & Instagram Ads for HVAC",
    serviceType: "Social Media Advertising",
    kicker: "Facebook & Instagram Ads",
    h1: "Reach homeowners",
    h1Muted: "before they search.",
    intro:
      "Google catches people whose AC already broke. Meta reaches everyone else: the homeowner with a 14-year-old system, the family that skipped last spring's tune-up, the neighbor who'd sign up for a maintenance plan if someone asked. We run offers that fill your slow weeks, and every lead gets an automatic reply within a minute, so it turns into a booking instead of going cold.",
    stats: [
      ["72 hrs", "from kickoff to live ads"],
      ["< 60s", "automatic follow-up on every lead"],
      ["$0", "markup on your ad spend"],
    ],
    mock: "meta",
    mockCaption: "A typical tune-up offer in the Facebook feed. Real techs and a real offer beat stock photos.",
    fitYes: [
      "You have slow weeks in spring and fall you'd like to fill",
      "You sell maintenance plans, or want to start",
      "Someone can call new leads back the same day (we automate the first reply)",
      "You've tried boosting posts and got likes instead of jobs",
    ],
    fitNo: [
      "You only want emergency repair calls. That's Google's job, not Meta's.",
      "Nobody can follow up with leads the same day",
      "You aren't willing to make any offer (tune-up price, financing, or plan)",
    ],
    workTitle: "What we actually run",
    work: [
      { t: "Offers that are worth stopping for", d: "Tune-up specials, maintenance plan drives, replacement and financing campaigns. Each one is tested against the others, and the winner gets the budget." },
      { t: "Creative from your own shop", d: "Short shot lists your techs can film on a phone in 15 minutes, edited into Reels, stories and feed ads. Real trucks and real faces." },
      { t: "Homeowners in your service area, nobody else", d: "Radius and zip targeting, out-of-area exclusions, and lookalikes built from your past customers." },
      { t: "Lead forms that filter junk", d: "Higher-intent form settings plus questions like “Do you own the home?” and “How old is your system?” so your office isn't calling tire-kickers." },
      { t: "Speed-to-lead on autopilot", d: "Every lead gets a text and email within seconds, an auto-call that connects them to your office, and 7 days of follow-up if they don't pick up." },
      { t: "Pixel + Conversions API", d: "We send booked-job data back to Meta, so it learns which people actually book and finds more like them." },
    ],
    timeline: [
      { when: "Days 1–2", what: "Account and pixel check, offer planning, and a look at what competitors in your area are running." },
      { when: "Days 3–5", what: "Tracking, lead routing and automatic follow-up set up. First batch of creative produced." },
      { when: "Weeks 2–4", what: "Ads live. Losing ads and audiences cut every 48 hours; lead quality checked with your office." },
      { when: "Month 3", what: "Proven offers scaled before the next season, with fresh creative every 2–3 weeks." },
    ],
    audit: [
      "Your ad account and pixel: is anything actually being tracked?",
      "What your competitors are running right now in the Meta Ad Library",
      "Which offers fit your margins and the coming season",
      "How fast leads get a reply today, and what that's costing you",
      "A starting budget and audience plan for your service area",
    ],
    faqs: [
      { q: "Do Facebook ads actually work for HVAC?", a: "For tune-ups, maintenance plans and replacements with financing, yes. They're often the cheapest lead source an HVAC company has. For emergency repair, no. People with a broken AC search Google. That's why we treat Meta as the second engine, not the only one." },
      { q: "Aren't Facebook leads low quality?", a: "They can be if you chase the cheapest lead. We use qualifying questions, homeowner targeting and booked-job feedback through the Conversions API. The biggest fix is speed: a lead who hears from you within minutes is far more likely to book than one called the next day." },
      { q: "Do I have to be on camera?", a: "No, but someone from your team on camera almost always beats stock footage. We send a simple shot list. If filming isn't possible, we work from your photos and reviews." },
      { q: "How much should I spend on Meta?", a: "Most single-city shops start at $1,500–$3,000 a month and push harder ahead of spring and fall." },
      { q: "What about financing offers and Meta's ad rules?", a: "Some credit and financing ads fall under Meta's special ad categories, which limit targeting. We set those campaigns up so they stay compliant and still reach the right homeowners." },
    ],
    formHeading: "Get a free Meta ads audit",
    ctaTitle: "Fill the slow weeks before they come.",
  },

  "local-seo": {
    slug: "local-seo",
    path: "/services/local-seo",
    name: "Local SEO & Google Map Pack for HVAC",
    serviceType: "Local Search Engine Optimization",
    kicker: "Local SEO & the Map Pack",
    h1: "Get into the top three",
    h1Muted: "on the map.",
    intro:
      "A big share of “AC repair near me” calls go to the three companies in Google's map box, and you don't pay per click for any of them. Getting there takes a properly built Google Business Profile, a steady flow of reviews, pages for each suburb you serve, and consistent listings across the web. We handle all of it.",
    stats: [
      ["60–120", "days to typical Map Pack movement"],
      ["$0", "per call from the map"],
      ["Every job", "gets an automatic review request"],
    ],
    mock: "map",
    mockCaption: "The map box above the regular results, where most “near me” calls happen.",
    fitYes: [
      "You have (or can get) a real business address in your service area",
      "You're willing to ask every happy customer for a review",
      "You want leads that get cheaper every month instead of more expensive",
      "You can wait 2–4 months for the big gains",
    ],
    fitNo: [
      "You need calls next week. Start with Google Ads and run SEO alongside.",
      "Your profile has suspension problems you're not willing to fix properly",
    ],
    workTitle: "What moves you up the map",
    work: [
      { t: "Google Business Profile rebuild", d: "Correct categories, services, service areas, hours, photos and products, plus weekly posts. Most profiles are missing several of these." },
      { t: "Review engine", d: "An automatic text after every completed job asking for a review, plus replies to every review so Google sees an active, responsive business." },
      { t: "Pages for every suburb you serve", d: "Real pages for Plano, Frisco, Allen and so on, written for each area. No copy-paste pages with the city name swapped." },
      { t: "Citation cleanup", d: "Your name, address and phone made consistent across Yelp, BBB, Angi, Apple Maps, Bing and 40+ directories." },
      { t: "Local links", d: "Sponsorships, supplier pages, local news and chamber listings: the links that actually move local rankings." },
      { t: "Rank tracking by zip code", d: "We track your map position on a grid across your service area, so you can see which neighborhoods you own and which are next." },
    ],
    timeline: [
      { when: "Week 1", what: "Profile audit, grid ranking snapshot across your service area, competitor gap analysis." },
      { when: "Weeks 2–4", what: "Profile rebuild, citation cleanup, review automation turned on." },
      { when: "Months 2–3", what: "Suburb pages published, local links built, first Map Pack movement in nearby zips." },
      { when: "Months 4–6", what: "Expanding coverage outward. Map calls become a steady, free lead source." },
    ],
    audit: [
      "Where you rank on the map, street by street across your service area",
      "Your Google profile vs. the top 3: categories, services, photos, reviews",
      "Name, address and phone consistency across the big directories",
      "Review count and how fast new reviews are coming in, vs. competitors",
      "Which suburbs are realistic to win first",
    ],
    faqs: [
      { q: "How long until I'm in the Map Pack?", a: "Close to your address, often 30–60 days. Further out across your service area, 3–6 months. It depends on your competitors' review counts and how established your profile already is." },
      { q: "Can I rank in cities where I don't have an office?", a: "In the map, it's hard to rank far from your address. Google weighs distance heavily. In regular search results, yes: that's what suburb pages are for. We'll be honest about where each one is realistic." },
      { q: "Do I need to keep paying once I rank?", a: "Rankings fade if your competitors keep working and you stop. Most clients drop to a lighter maintenance plan once they're established." },
      { q: "Will you buy reviews?", a: "Never. Fake reviews get profiles suspended. We make it effortless for real customers to leave real reviews." },
    ],
    formHeading: "Get a free Map Pack audit",
    ctaTitle: "See where you rank, street by street.",
  },

  seo: {
    slug: "seo",
    path: "/services/seo",
    name: "HVAC SEO & AI Search",
    serviceType: "Search Engine Optimization",
    kicker: "SEO & AI search",
    h1: "Rank for every service",
    h1Muted: "in every suburb.",
    intro:
      "Homeowners search “heat pump replacement cost Frisco” and “AC blowing warm air,” and more and more of them ask ChatGPT who the best HVAC company near them is. We build the pages, the technical foundation and the reputation signals that put your company in those answers, so you're not paying per click for every customer.",
    stats: [
      ["24/7", "leads you don't pay per click for"],
      ["1 page", "for every service and suburb you serve"],
      ["100%", "of the content is yours to keep"],
    ],
    mock: "organic",
    mockCaption: "A regular search result with review stars and a phone number, plus the AI answer above it.",
    fitYes: [
      "You want leads that don't stop when the ad budget does",
      "You offer several services (repair, install, heat pumps, IAQ, duct work)",
      "You're planning to be in business here for years, not months",
    ],
    fitNo: [
      "You need calls this week. Run Google Ads while SEO builds.",
      "You're on a website builder we can't touch and won't move off it",
    ],
    workTitle: "What we build",
    work: [
      { t: "A page for every service you sell", d: "AC repair, replacement, heat pumps, furnaces, ductless, IAQ, commercial. Each page targets what people actually search, with real prices and photos where you're comfortable." },
      { t: "Technical cleanup", d: "Speed, mobile layout, crawl errors, schema markup and internal links. The unglamorous fixes that hold most HVAC sites back." },
      { t: "Answers for AI search", d: "Clear, specific answers to the questions homeowners ask, plus structured data, so ChatGPT, Gemini and Google's AI Overviews can cite you." },
      { t: "Content that brings in leads", d: "Cost guides, repair-or-replace guides and local guides that rank and then lead the reader to a call." },
      { t: "Authority links", d: "Real links from suppliers, local organizations and industry sites. No link farms." },
      { t: "Reporting in calls, not rankings", d: "Rankings matter, but we report organic calls and forms so you see what SEO is actually worth to you." },
    ],
    timeline: [
      { when: "Weeks 1–2", what: "Technical audit, keyword map of every service and city, competitor content gaps." },
      { when: "Month 1", what: "Technical fixes shipped, core service pages rewritten or built." },
      { when: "Months 2–4", what: "Suburb and guide pages published monthly, links built, AI-answer content added." },
      { when: "Months 6–12", what: "Organic becomes a major lead source, at a falling cost per lead." },
    ],
    audit: [
      "Technical health: speed, mobile, indexing and crawl errors",
      "Which services and suburbs you have no page for",
      "Where competitors outrank you, and why",
      "Whether AI tools mention your company when asked for a recommendation",
      "The first 10 pages we'd build, in order",
    ],
    faqs: [
      { q: "How long does HVAC SEO take?", a: "Technical fixes and service pages can move rankings in 4–8 weeks. Competitive terms in big metros take 6–12 months. SEO compounds, so month 12 is far better than month 3." },
      { q: "What is AEO / AI search optimization?", a: "Making your business the one AI tools mention when homeowners ask for a recommendation. That means clear answers on your site, consistent reviews and listings, and structured data that machines can read." },
      { q: "Do I need a new website?", a: "Not always. If your current site is fast and editable, we'll work with it. If it's slow or locked into a builder, we'll show you the numbers on rebuilding." },
      { q: "Will you write the content?", a: "Yes. We write it with input from you, so it reflects how you actually work, then you approve it before it goes live." },
    ],
    formHeading: "Get a free SEO audit",
    ctaTitle: "Stop paying per click for every customer.",
  },

  "website-development": {
    slug: "website-development",
    path: "/services/website-development",
    name: "HVAC Website Design & Development",
    serviceType: "Website Design",
    kicker: "Websites that book jobs",
    h1: "A website built",
    h1Muted: "around the phone call.",
    intro:
      "Most HVAC websites are brochures: nice photos, a long About page, and a phone number hidden in the corner. Ours are built for one moment: a homeowner on their phone in a hot house, deciding who to call. Fast, clear, with your reviews and a tap-to-call button always in reach.",
    stats: [
      ["~30 days", "from kickoff to launch"],
      ["90+", "mobile PageSpeed score we build to"],
      ["100%", "yours: code, content and domain"],
    ],
    mock: "site",
    mockCaption: "A service page on a phone: offer, reviews and the call button above the fold.",
    fitYes: [
      "Your site is slow, dated or hard to use on a phone",
      "You're about to run ads and need pages that convert",
      "You want to own your site outright, not rent it from an agency",
    ],
    fitNo: [
      "You just need a one-page placeholder",
      "You want a design showcase more than a lead source",
    ],
    workTitle: "What you get",
    work: [
      { t: "Built for phones first", d: "Most HVAC traffic is mobile. Every page is designed for a thumb first, then scaled up to desktop." },
      { t: "A page per service and city", d: "Repair, install, heat pumps, maintenance plans and each suburb get their own page, so you can rank and run ads to the right one." },
      { t: "Tap-to-call everywhere", d: "A sticky call button, short forms and online booking where your software supports it." },
      { t: "Fast by default", d: "Modern code, optimized images and no page-builder bloat. Speed helps both rankings and conversion." },
      { t: "SEO foundation built in", d: "Clean structure, schema markup, redirects from your old site, and Search Console and Analytics set up." },
      { t: "You own it", d: "Code, content, domain and hosting accounts are in your name. No lock-in." },
    ],
    timeline: [
      { when: "Week 1", what: "Audit of your current site, sitemap and page plan, content gathering." },
      { when: "Weeks 2–3", what: "Design and build. You review the real thing on your phone, not static mockups." },
      { when: "Week 4", what: "Content, redirects, tracking and speed checks. Launch." },
      { when: "After launch", what: "Monitoring rankings and calls through the switch, fixing anything that moved." },
    ],
    audit: [
      "Your current site on a phone: load time, layout and call buttons",
      "Which pages get traffic and which lose it",
      "What's missing: service pages, city pages, trust signals",
      "Technical issues holding back your rankings",
      "What a rebuild would cost and what it should change",
    ],
    faqs: [
      { q: "How long does a new site take?", a: "Usually about 30 days from kickoff, depending on how many pages you need and how quickly we get content and approvals." },
      { q: "Will I lose my Google rankings?", a: "Not if the move is done properly. We map every old URL to its new page with redirects and watch rankings through the launch." },
      { q: "Can I edit the site myself?", a: "Yes. We can set it up so you can change text, photos and offers without calling us." },
      { q: "Do I own the site?", a: "Yes. Code, content, domain and hosting accounts are all in your name." },
    ],
    formHeading: "Get a free website audit",
    ctaTitle: "Find out what your website is costing you.",
  },

  automation: {
    slug: "automation",
    path: "/services/automation",
    name: "Speed-to-Lead Automation for HVAC",
    serviceType: "Marketing Automation",
    kicker: "Speed-to-lead automation",
    h1: "Every lead gets a reply",
    h1Muted: "in under a minute.",
    intro:
      "When a homeowner's AC is out, they call down the list until someone answers. If your office is on another line, that job goes to the next company. We set up automation that texts back missed calls in seconds, calls new form leads, follows up for a week, and asks every happy customer for a review.",
    stats: [
      ["< 60s", "to the first reply on every lead"],
      ["7 days", "of automatic follow-up"],
      ["Day 1", "working from the first day"],
    ],
    mock: "sms",
    mockCaption: "A missed call turned into a booking by text, with no one in the office lifting a finger.",
    fitYes: [
      "You miss calls when the office is busy or after hours",
      "Leads from forms or Facebook sit for hours before anyone calls",
      "You want more Google reviews without asking every customer yourself",
    ],
    fitNo: [
      "You answer every call live, 24/7, and follow up instantly already",
    ],
    workTitle: "What we set up",
    work: [
      { t: "Missed-call text-back", d: "Miss a call and the homeowner gets a text from your business within seconds, so the conversation keeps going instead of moving to a competitor." },
      { t: "Instant lead response", d: "Form, Facebook and Google leads get a text and email right away, plus an auto-call that connects them to your office." },
      { t: "Follow-up sequences", d: "Leads who don't answer get a short series of texts and emails over 7 days, then stop." },
      { t: "Review requests", d: "An automatic, friendly review request after every completed job, with a direct link to your Google profile." },
      { t: "Estimate follow-up", d: "Unsold replacement estimates get a check-in sequence, so big tickets don't slip through the cracks." },
      { t: "Connected to your tools", d: "Works with ServiceTitan, Housecall Pro, Jobber and most CRMs, or as a standalone inbox." },
    ],
    timeline: [
      { when: "Days 1–3", what: "Map your current lead flow and where leads get lost." },
      { when: "Week 1", what: "Text-back, instant response and review requests live." },
      { when: "Weeks 2–3", what: "Follow-up and estimate sequences written in your voice and switched on." },
      { when: "Ongoing", what: "Monthly check of response times, reply rates and reviews." },
    ],
    audit: [
      "How many calls you miss, and when",
      "How long leads wait for a first reply today",
      "What happens to unsold estimates",
      "How you ask for reviews now",
      "Which tools you use, and what can connect",
    ],
    faqs: [
      { q: "Will automated texts feel spammy?", a: "Not if they're written well. We write them in your voice, keep them short, and stop as soon as the person replies or books." },
      { q: "Is texting leads legal?", a: "Yes, with consent. Leads who submit a form agree to be contacted, and every message includes a way to opt out. We set it up to respect that." },
      { q: "Does it work with my software?", a: "Most likely. We work with ServiceTitan, Housecall Pro, Jobber and most CRMs. If yours isn't supported, we run a standalone inbox your team can use." },
      { q: "How fast is it set up?", a: "Missed-call text-back and instant response are usually live within the first week." },
    ],
    formHeading: "Get a free lead-flow audit",
    ctaTitle: "Stop losing the leads you already paid for.",
  },

  "ui-ux": {
    slug: "ui-ux",
    path: "/services/ui-ux",
    name: "Conversion Design for HVAC Websites",
    serviceType: "Conversion Rate Optimization",
    kicker: "Conversion design",
    h1: "Fix the pages",
    h1Muted: "that leak calls.",
    intro:
      "If people visit your site and don't call, more ad spend just means more people who don't call. We find where visitors drop off and redesign those pages around what homeowners need to see before they pick up the phone: price signals, reviews, proof you're local, and a button that's easy to tap.",
    stats: [
      ["2–4 wks", "from audit to redesigned pages"],
      ["Mobile", "first, because most of your traffic is"],
      ["Tested", "changes, not opinions"],
    ],
    mock: "site",
    mockCaption: "What a homeowner should see on their phone before they scroll.",
    fitYes: [
      "You get traffic but not enough calls or form fills",
      "You're running ads to pages you've never tested",
      "Your site looks fine but nobody can say why it doesn't convert",
    ],
    fitNo: [
      "You get very little traffic. Fix traffic first, then conversion.",
    ],
    workTitle: "How we fix conversion",
    work: [
      { t: "Find the leaks", d: "Heatmaps, session recordings and analytics show exactly where visitors hesitate or leave." },
      { t: "Above-the-fold rebuild", d: "Offer, reviews, service area and a tap-to-call button visible before anyone scrolls." },
      { t: "Trust signals", d: "License, insurance, warranty details, real photos of your team, and reviews near every call to action." },
      { t: "Shorter forms", d: "Fewer fields, smarter steps, and instant confirmation so leads know what happens next." },
      { t: "Speed fixes", d: "Every second of load time on a phone costs calls. We cut the weight." },
      { t: "Test and keep the winners", d: "We test changes against the original and keep only the ones that produce more calls." },
    ],
    timeline: [
      { when: "Week 1", what: "Analytics, recordings and heatmaps set up and reviewed." },
      { when: "Week 2", what: "Redesign plan for your highest-traffic pages." },
      { when: "Weeks 3–4", what: "New pages built and tested against the old ones." },
      { when: "Ongoing", what: "Monthly tests on the pages that matter most." },
    ],
    audit: [
      "Your top pages on a phone, screen by screen",
      "Where visitors drop off before calling",
      "Missing trust signals and confusing steps",
      "Form and call-button friction",
      "The 3 changes likely to add the most calls",
    ],
    faqs: [
      { q: "Do I need a whole new website?", a: "Often no. Fixing your top few pages usually matters more than a full rebuild." },
      { q: "How do you know a change works?", a: "We measure calls and form fills before and after, and test changes against the original where traffic allows." },
      { q: "Will this help my ads?", a: "Yes. Better landing pages convert more of the clicks you already pay for, and Google tends to reward relevant, useful pages." },
    ],
    formHeading: "Get a free conversion audit",
    ctaTitle: "Turn more of your visitors into calls.",
  },

  "social-media": {
    slug: "social-media",
    path: "/services/social-media",
    name: "Social Media Management for HVAC",
    serviceType: "Social Media Management",
    kicker: "Social media",
    h1: "Stay the name",
    h1Muted: "they remember.",
    intro:
      "Homeowners don't think about HVAC until something breaks. When it does, they call the company they recognize. We keep your business in front of them with real content from your shop, seasonal tips and offers, and a Google profile that stays active.",
    stats: [
      ["3–4", "posts a week across your channels"],
      ["Real", "photos and video from your team"],
      ["Same day", "replies to comments and messages"],
    ],
    mock: "social",
    mockCaption: "Real jobs, real techs, seasonal reminders: the posts that build familiarity.",
    fitYes: [
      "Your social accounts are quiet or only post when someone remembers",
      "You have a team and jobs worth showing off",
      "You want to stay familiar between breakdowns",
    ],
    fitNo: [
      "You expect organic social alone to replace ads. It builds trust; ads build volume.",
    ],
    workTitle: "What we handle",
    work: [
      { t: "Content calendar", d: "A month of posts planned around the season: tune-up reminders, filter tips, storm prep, and your offers." },
      { t: "Real content from your shop", d: "We turn photos and short videos from your techs into posts. You send the raw material; we do the rest." },
      { t: "Facebook, Instagram, Nextdoor and Google", d: "Posting where Texas homeowners actually look, including your Google Business Profile." },
      { t: "Community management", d: "Replies to comments and messages, and alerts to your team when someone needs service." },
      { t: "Reviews in the feed", d: "Your best reviews turned into posts, so the proof keeps working." },
      { t: "Monthly report", d: "What went out, what got engagement, and which messages turned into calls." },
    ],
    timeline: [
      { when: "Week 1", what: "Account review, brand voice and content plan." },
      { when: "Week 2", what: "First month of posts approved and scheduled." },
      { when: "Ongoing", what: "Posting, replies and monthly planning." },
      { when: "Quarterly", what: "Review of what's working and what to change." },
    ],
    audit: [
      "What your profiles say to a homeowner checking you out",
      "How often you post and how people respond",
      "What competitors in your area are posting",
      "Your Google Business Profile posts and photos",
      "A 30-day content plan for your season",
    ],
    faqs: [
      { q: "Does social media bring in HVAC leads?", a: "Mostly indirectly. It builds recognition and trust, so your ads work better and people pick you when they need service. For direct lead volume, pair it with Meta Ads." },
      { q: "Do I have to create the content?", a: "You send photos and short clips from jobs. We write, edit, design and post everything." },
      { q: "Which platforms?", a: "Usually Facebook, Instagram, Nextdoor and your Google Business Profile. We focus where your customers actually are." },
    ],
    formHeading: "Get a free social media audit",
    ctaTitle: "Be the company they already know.",
  },
};
