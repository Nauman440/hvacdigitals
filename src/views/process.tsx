import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";

const STEPS = [
  {
    when: "Day 0",
    t: "Check your city",
    d: "You tell us where you work and what you want more of. We confirm within one business hour whether your city is open. We take one HVAC company per city.",
    you: ["Fill out a 30-second form"],
    us: ["Check availability", "Book a 15-minute call with Muhammad"],
  },
  {
    when: "Within 48 hours",
    t: "Free recorded audit",
    d: "A screen-recorded walkthrough of your ads, Google profile, website and lead follow-up, with the three fixes we'd make first. Yours to keep, whether you hire us or not.",
    you: ["Share read-only access, or just your website and business name"],
    us: ["Review your accounts and competitors", "Record the walkthrough", "Recommend channels and a budget range"],
  },
  {
    when: "Days 3–14",
    t: "Build and launch",
    d: "If you decide to go ahead, we set up everything in accounts you own: campaigns, landing pages, call tracking and lead follow-up. You approve it before anything goes live.",
    you: ["A kickoff call", "Approve ads, offers and pages", "Send photos or short clips from your team"],
    us: ["Build campaigns and pages", "Set up tracking and automatic follow-up", "Launch"],
  },
  {
    when: "Weeks 2–12",
    t: "Test and tune",
    d: "The first 90 days are about learning what books jobs in your market. We review results every 48 hours early on, cut what doesn't work and move budget to what does.",
    you: ["Answer the phone", "Tell us which leads booked"],
    us: ["Cut losing keywords, ads and audiences", "Check lead quality with your office", "Send the Monday report"],
  },
  {
    when: "Every week after",
    t: "Plan ahead, scale what works",
    d: "Budgets follow the weather and your schedule. We push ahead of heat waves and cold snaps, fill slow weeks with offers, and grow the channels that pay.",
    you: ["A short monthly check-in"],
    us: ["Seasonal planning", "New creative and offers", "Scale proven campaigns"],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-flame/25">
      <SiteHeader />
      <main className="pt-[100px] md:pt-[140px]">
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-3">
            <span className="h-px w-8 bg-flame" aria-hidden="true" />
            How we work
          </p>
          <h1 className="mt-6 max-w-4xl font-head text-[44px] leading-[1.02] md:text-[64px] font-extrabold tracking-[-0.04em]">
            From first call to first booked job in about two weeks.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] md:text-[19px] leading-relaxed text-ink-2">
            No 6-month onboarding and no black box. Here&apos;s exactly what happens, what we do, and the little we need from you.
          </p>

          <ol className="relative mt-16 space-y-6 pb-20 md:pb-28">
            <div className="absolute bottom-24 left-[27px] top-2 hidden w-0.5 bg-[repeating-linear-gradient(180deg,#DCD4C6_0_8px,transparent_8px_14px)] md:block" aria-hidden="true" />
            {STEPS.map((s, i) => (
              <li key={s.t} className="relative grid gap-5 md:grid-cols-[56px_1fr] md:gap-8">
                <span
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-head text-[22px] font-extrabold ${
                    i === 0 ? "bg-flame text-white" : "border-2 border-ink bg-paper text-ink"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="grid gap-6 rounded-xl border border-line bg-white p-6 md:p-8 lg:grid-cols-12">
                  <div className="lg:col-span-6">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-flame">{s.when}</p>
                    <h2 className="mt-1.5 font-head text-[26px] md:text-[30px] font-extrabold tracking-tight">{s.t}</h2>
                    <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{s.d}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
                    <div className="rounded-lg bg-paper p-4">
                      <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink-3">You</p>
                      <ul className="mt-2 space-y-2 text-[15px] text-ink">
                        {s.you.map((x) => (
                          <li key={x} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-ink-3" /> {x}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-ink p-4 text-paper">
                      <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-paper/60">Us</p>
                      <ul className="mt-2 space-y-2 text-[15px]">
                        {s.us.map((x) => (
                          <li key={x} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-flame" /> {x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <section className="relative overflow-hidden bg-ink py-20 md:py-28">
          <div className="vent-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 md:px-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-head text-[40px] md:text-[56px] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
                Step 1 takes <span className="text-flame">30 seconds.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-paper/70">
                Tell us where you work. If your city&apos;s open, your free audit is on its way.
              </p>
              <p className="mt-6 flex items-center gap-2 text-[16px] text-paper/60">
                <ArrowRight className="h-4 w-4 text-flame" /> No contract, no pressure.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <LeadForm source="process" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
