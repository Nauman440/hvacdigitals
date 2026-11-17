import { Star } from "lucide-react";
import { CASE_STUDIES, TESTIMONIALS } from "@/data/proof";

/**
 * Real client proof, from src/data/proof.ts. Renders nothing until that file has entries,
 * so the site never shows placeholder testimonials.
 */
export function ProofSection({ service }: { service?: string }) {
  const quotes = TESTIMONIALS.filter((t) => !service || !t.services || t.services.includes(service));
  const cases = CASE_STUDIES.filter((c) => !service || !c.services || c.services.includes(service));
  if (quotes.length === 0 && cases.length === 0) return null;

  return (
    <section id="results" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-3">
          <span className="h-px w-8 bg-flame" aria-hidden="true" />
          Results
        </p>
        <h2 className="mt-5 font-head text-[34px] md:text-[50px] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink">
          From HVAC owners we work with.
        </h2>

        {cases.length > 0 && (
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {cases.map((c) => (
              <article key={c.company} className="rounded-xl border border-line bg-white p-7">
                <p className="text-[14px] text-ink-3">
                  {c.company} · {c.city}
                </p>
                <h3 className="mt-2 font-head text-[24px] font-extrabold leading-tight tracking-tight text-ink">{c.headline}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{c.summary}</p>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 sm:grid-cols-3">
                  {c.numbers.map(([n, l]) => (
                    <div key={l}>
                      <dd className="tnum font-head text-[30px] font-extrabold leading-none text-ink">{n}</dd>
                      <dt className="mt-1 text-[13px] text-ink-3">{l}</dt>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        )}

        {quotes.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q) => (
              <figure key={q.name + q.company} className="flex flex-col rounded-xl border border-line bg-white p-6">
                <span className="flex gap-0.5 text-[#F5B301]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                <blockquote className="mt-3 flex-1 text-[16px] leading-relaxed text-ink">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 text-[14px]">
                  <span className="block font-semibold text-ink">{q.name}</span>
                  <span className="text-ink-3">
                    {q.company}
                    {q.city ? ` · ${q.city}` : ""}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
