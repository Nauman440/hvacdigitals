import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export type LegalSection = { h: string; body: (string | string[])[] };

export function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <SiteHeader />
      <main className="pt-[100px] md:pt-[140px] pb-20 md:pb-28">
        <article className="mx-auto max-w-[760px] px-4 md:px-6">
          <h1 className="font-head text-[40px] md:text-[56px] font-extrabold leading-[1.02] tracking-[-0.04em]">{title}</h1>
          <p className="mt-4 text-[15px] text-ink-3">Last updated {updated}</p>
          <p className="mt-8 text-[18px] leading-relaxed text-ink-2">{intro}</p>
          <nav aria-label="On this page" className="mt-10 rounded-lg border border-line bg-white p-5">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-3">On this page</p>
            <ol className="grid gap-1.5 text-[15px] sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.h}>
                  <a href={`#s${i + 1}`} className="text-ink-2 hover:text-flame">
                    {i + 1}. {s.h}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-12 space-y-12">
            {sections.map((s, i) => (
              <section key={s.h} id={`s${i + 1}`} className="scroll-mt-32">
                <h2 className="font-head text-[24px] md:text-[28px] font-bold tracking-tight">
                  {i + 1}. {s.h}
                </h2>
                <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-ink-2">
                  {s.body.map((b, j) =>
                    Array.isArray(b) ? (
                      <ul key={j} className="list-disc space-y-2 pl-5">
                        {b.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j}>{b}</p>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
