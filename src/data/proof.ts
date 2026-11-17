/**
 * REAL client proof only. Every section that shows testimonials or case studies reads
 * from here and stays hidden while these lists are empty.
 *
 * Add an entry only if the client agreed to be quoted and the numbers are from their
 * accounts (FTC rules prohibit made-up or unrepresentative testimonials).
 */

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  city?: string;
  /** Which service page(s) should also show it, e.g. ["paid-ads", "meta-ads"]. Home shows all. */
  services?: string[];
};

export type CaseStudy = {
  company: string;
  city: string;
  headline: string; // e.g. "Cost per lead from $94 to $31 in 60 days"
  summary: string; // 2–3 sentences: starting point, what we changed, outcome
  numbers: [string, string][]; // e.g. [["$31", "cost per lead"], ["113", "leads per month"]]
  services?: string[];
};

export const TESTIMONIALS: Testimonial[] = [
  // {
  //   quote: "…",
  //   name: "First Last",
  //   company: "Company Name",
  //   city: "Plano, TX",
  //   services: ["paid-ads"],
  // },
];

export const CASE_STUDIES: CaseStudy[] = [];
