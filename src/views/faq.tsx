import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";
import { FaqList } from "@/components/site/Widgets";
import { GENERAL_FAQS, WORKING_FAQS } from "@/data/faqs";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";

const GROUPS = [
  { id: "general", title: "Getting started", items: GENERAL_FAQS },
  { id: "working", title: "Working with us", items: WORKING_FAQS },
  ...Object.values(SERVICES).map((s) => ({ id: s.slug, title: s.kicker, items: s.faqs, href: s.path })),
];

export const ALL_FAQS = GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="pt-[100px] md:pt-[140px]">
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-3">
            <span className="h-px w-8 bg-flame" aria-hidden="true" />
            FAQ
          </p>
          <h1 className="mt-6 max-w-3xl font-head text-[44px] leading-[1.02] md:text-[64px] font-extrabold tracking-[-0.04em]">
            Straight answers to what HVAC owners ask us.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-ink-2">
            Don&apos;t see your question? Call{" "}
            <a href={SITE.phoneHref} className="tnum font-semibold text-flame">
              {SITE.phone}
            </a>{" "}
            and ask a real person.
          </p>

          <div className="mt-14 grid gap-12 pb-20 md:pb-28 lg:grid-cols-12">
            <nav aria-label="FAQ topics" className="lg:col-span-3">
              <ul className="space-y-1 lg:sticky lg:top-[130px]">
                {GROUPS.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="block rounded-md px-3 py-2 text-[15px] text-ink-2 hover:bg-paper-2 hover:text-ink">
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-16 lg:col-span-9">
              {GROUPS.map((g) => (
                <section key={g.id} id={g.id} className="scroll-mt-32">
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h2 className="font-head text-[26px] md:text-[32px] font-extrabold tracking-tight">{g.title}</h2>
                    {"href" in g && g.href && (
                      <Link href={g.href} className="shrink-0 text-[15px] font-semibold text-flame hover:underline">
                        Service details →
                      </Link>
                    )}
                  </div>
                  <FaqList items={g.items} />
                </section>
              ))}
            </div>
          </div>
        </div>

        <section className="relative overflow-hidden bg-ink py-20 md:py-28">
          <div className="vent-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:px-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-head text-[40px] md:text-[56px] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
                The fastest answer is your <span className="text-flame">free audit.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/70">
                A recorded walkthrough of your ads, Google profile and website within 48 hours, specific to your city.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <LeadForm source="faq" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
