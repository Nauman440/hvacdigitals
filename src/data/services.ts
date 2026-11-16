export type ServiceData = {
  slug: string;
  path: string;
  name: string;
  serviceType: string;
  kicker: string;
  h1: string;
  h1Muted?: string;
  intro: string;
  stats: [string, string][];
  mock: "google" | "meta" | "map" | "organic";
  mockCaption: string;
  fitYes: string[];
  fitNo: string[];
  workTitle: string;
  work: { t: string; d: string }[];
  timeline: { when: string; what: string }[];
  proof: { headline: string; body: string; numbers: [string, string][]; quote: string; who: string };
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
      "When it's 104° and the AC dies, homeowners don't scroll. They call one of the first three names Google shows them. We get you into those spots with Local Services Ads and Search campaigns built only for HVAC, and we cut every dollar that goes to people who won't hire you.",
    stats: [
      ["$18", "avg. cost per lead across clients"],
      ["48 hrs", "typical time to first call"],
      ["1,000+", "junk searches blocked per account"],
    ],
    mock: "google",
    mockCaption: "Where your business shows up: the LSA “Google Guaranteed” row, then the top search ad.",
    fitYes: [
      "You can answer the phone (or have someone who can) during business hours",
      "You want emergency repair and replacement calls, not just tune-ups",
      "You can put $1,500+ a month into ad spend",
      "You want to know exactly which calls came from ads",
    ],
    fitNo: [
      "You're already booked out three weeks and can't take more work",
      "You want to spend $300 a month and see what happens",
      "You don't hold the licensing and insurance Google requires for LSA",
    ],
    workTitle: "What we actually do in your account",
    work: [
      { t: "Local Services Ads setup and disputes", d: "We get you verified for the Google Guaranteed badge, tune your service list and hours, and dispute bad leads so Google credits them back." },
      { t: "Search campaigns split by job type", d: "Repair, replacement, maintenance and heating each get their own campaign and budget, so cheap tune-up clicks don't eat your install budget." },
      { t: "A negative keyword list that keeps growing", d: "We block “HVAC jobs,” “how to,” “DIY,” “school,” rentals and out-of-area searches. That's typically 30–40% of the waste we find in an audit." },
      { t: "Landing pages that are built for the call", d: "One page per service with your reviews, your trucks and a big tap-to-call button. Never your homepage." },
      { t: "Call tracking and recording", d: "Every call gets a tracking number by campaign. You can listen to any call, and we can see which keywords produce booked jobs, not just rings." },
      { t: "Budgets that follow the weather", d: "We push spend ahead of heat waves and cold snaps and pull back in dead weeks, instead of running the same daily budget all year." },
    ],
    timeline: [
      { when: "Days 1–3", what: "Audit of your current account and competitors. You see where the money goes before we change anything." },
      { when: "Week 1", what: "LSA verification started, new campaigns and landing pages built, call tracking live." },
      { when: "Weeks 2–4", what: "Launch, then reviews every 48 hours: cut losing keywords, raise bids on what books jobs." },
      { when: "Month 3", what: "Cost per booked job usually 30–50% below where it started. Scale what's working." },
    ],
    proof: {
      headline: "Dallas Bay HVAC: $94 to $18 per lead on the same budget.",
      body: "Their previous agency spent $6,000 a month with fewer than 20 trackable leads. 41% of that spend was going to searches like “HVAC school” and “DIY AC fix.” We rebuilt around LSAs and job-type campaigns and added call tracking.",
      numbers: [
        ["340", "qualified leads in 90 days"],
        ["$18", "cost per lead, down from $94"],
        ["6.8×", "return on ad spend"],
      ],
      quote: "LSA ads were bringing in calls inside week one. These guys actually know HVAC.",
      who: "Sarah Jenkins, GM at Altitude Air",
    },
    faqs: [
      { q: "What's a good cost per lead for HVAC on Google?", a: "In most Texas metros, $25–$60 for repair calls and $40–$90 for replacement leads is normal. Our clients average $18 a lead because we cut wasted spend aggressively, but your audit will give you a realistic number for your city." },
      { q: "LSA or regular Google Ads?", a: "Usually both. LSAs sit at the very top, you pay per lead instead of per click, and they're great for repair calls. Search ads let you target replacements and specific services, where LSAs give you less control. We start with whichever gives you the fastest return." },
      { q: "How much should I spend?", a: "For one city, $1,500–$3,000 a month is a reasonable start. For Houston, Dallas or San Antonio, $3,000–$8,000. Start with your most profitable service, prove the return, then scale." },
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
      "Google catches people whose AC already broke. Meta reaches everyone else: the homeowner with a 14-year-old system, the family that skipped last spring's tune-up, the neighbor who'd sign up for a maintenance plan if someone asked. We run offers that fill your slow weeks, then contact every lead within a minute so the lead turns into a booking.",
    stats: [
      ["$22", "avg. cost per lead across clients"],
      ["< 60s", "to first contact with every lead"],
      ["72 hrs", "from kickoff to live ads"],
    ],
    mock: "meta",
    mockCaption: "A typical tune-up offer in the Facebook feed. Real techs and a real offer beat stock photos every time.",
    fitYes: [
      "You have slow weeks in spring and fall you'd like to fill",
      "You sell maintenance plans, or want to start",
      "Someone can call new leads back within minutes (we'll automate most of it)",
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
      { t: "Homeowners in your service area, nobody else", d: "Radius and zip targeting, renter and out-of-area exclusions, and lookalikes built from your past customers." },
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
    proof: {
      headline: "Metroplex Comfort Co.: 212 tune-up leads in 45 days.",
      body: "They'd been boosting posts for a year. We replaced that with a $79 tune-up lead campaign and instant SMS follow-up. 38% of those tune-ups turned into a repair or replacement opportunity.",
      numbers: [
        ["212", "tune-up leads in 45 days"],
        ["$19", "cost per lead, down from $61"],
        ["38%", "of tune-ups led to more work"],
      ],
      quote: "The missed-call text-back alone saved us about $12k in jobs last month.",
      who: "David Chen, Owner of Chen Climate Control",
    },
    faqs: [
      { q: "Do Facebook ads actually work for HVAC?", a: "For tune-ups, maintenance plans and replacements with financing, yes. They're usually your cheapest lead source. For emergency repair, no. People with a broken AC search Google. That's why we treat Meta as the second engine, not the only one." },
      { q: "Aren't Facebook leads low quality?", a: "They can be if you chase the cheapest lead. We use qualifying questions, homeowner targeting and booked-job feedback through the Conversions API. The biggest fix is speed: a lead contacted in the first minute books several times more often than one called the next day." },
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
      "Most “AC repair near me” calls go to the three companies in Google's map box. Those calls are free. Getting there takes a properly built Google Business Profile, a steady flow of reviews, location pages for each suburb you serve, and consistent listings across the web. We handle all of it.",
    stats: [
      ["60–120", "days to Map Pack movement"],
      ["$0", "per call once you rank"],
      ["3×", "more reviews with automated asks"],
    ],
    mock: "map",
    mockCaption: "The map box above the organic results, where most “near me” calls happen.",
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
      { t: "Google Business Profile rebuild", d: "Correct categories, services, service areas, hours, photos and products, plus weekly posts. Most profiles we audit are missing half of these." },
      { t: "Review engine", d: "An automatic text after every completed job asking for a review, plus replies to every review so Google sees an active, responsive business." },
      { t: "Pages for every suburb you serve", d: "Real pages for Plano, Frisco, Allen and so on, written for each area, with no copy-paste content swapping in the city name." },
      { t: "Citation cleanup", d: "Your name, address and phone made consistent across Yelp, BBB, Angi, Apple Maps, Bing and 40+ directories." },
      { t: "Local links", d: "Sponsorships, supplier pages, local news and chamber listings: the links that actually move local rankings." },
      { t: "Rank tracking by zip code", d: "We track your map position on a grid across your service area, so you can see exactly which neighborhoods you own and which are next." },
    ],
    timeline: [
      { when: "Week 1", what: "Profile audit, grid ranking snapshot across your service area, competitor gap analysis." },
      { when: "Weeks 2–4", what: "Profile rebuild, citation cleanup, review automation turned on." },
      { when: "Months 2–3", what: "Suburb pages published, local links built, first Map Pack movement in nearby zips." },
      { when: "Months 4–6", what: "Expanding coverage outward. Map calls become a steady, free lead source." },
    ],
    proof: {
      headline: "Reyes Heating & Cooling: in the 3-pack across their Dallas zips in 60 days.",
      body: "They had 31 reviews and a half-filled profile. We rebuilt the profile, turned on review requests after every job, and published pages for each suburb they serve.",
      numbers: [
        ["3-pack", "across their core Dallas zip codes"],
        ["+142", "new Google reviews in 6 months"],
        ["3 wks", "booked out in peak season"],
      ],
      quote: "Within 60 days they had us in the 3-pack for every Dallas zip code we service.",
      who: "Marcus Reyes, Owner of Reyes Heating & Cooling",
    },
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
      "Homeowners search “heat pump replacement cost Frisco,” “AC blowing warm air,” and ask ChatGPT who the best HVAC company near them is. We build the pages, the technical foundation and the reputation signals that put your company in those answers, so you're not paying per click for every one of them.",
    stats: [
      ["340%", "avg. organic traffic lift"],
      ["24/7", "leads you don't pay per click for"],
      ["AI", "answers that cite your company"],
    ],
    mock: "organic",
    mockCaption: "An organic result with review stars and a phone number, plus the AI answer above it.",
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
    proof: {
      headline: "Mitchell Mechanical: revenue up 40% year over year.",
      body: "Their site had one “Services” page and no city pages. We built 38 service and suburb pages, fixed site speed, and added review and FAQ structured data.",
      numbers: [
        ["+40%", "revenue year over year"],
        ["38", "new service + city pages"],
        ["#1", "for AC repair in their home zip"],
      ],
      quote: "Every time someone searches AC repair in my zip code, we're the first thing they see.",
      who: "Tom Mitchell, Owner of Mitchell Mechanical",
    },
    faqs: [
      { q: "How long does HVAC SEO take?", a: "Technical fixes and service pages can move rankings in 4–8 weeks. Competitive terms in big metros take 6–12 months. SEO compounds, so month 12 is far better than month 3." },
      { q: "What is AEO / AI search optimization?", a: "Making your business the one AI tools mention when homeowners ask for a recommendation. That means clear answers on your site, consistent reviews and listings, and structured data that machines can read." },
      { q: "Do I need a new website?", a: "Not always. If your current site is fast and editable, we'll work with it. If it's slow or locked into a builder, we'll show you the numbers on rebuilding." },
      { q: "Will you write the content?", a: "Yes. We write it with input from you, so it reflects how you actually work, then you approve it before it goes live." },
    ],
    formHeading: "Get a free SEO audit",
    ctaTitle: "Stop paying per click for every customer.",
  },
};
