import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { CouponFee, CouponIncludes, Difference, Distinction, Journey } from "@/components/ui/ExecutionCost";
import { EXECUTION_JOURNEY, EXECUTION_OVERVIEW, EXECUTION_STEPS } from "@/lib/execution";
import { APP_REGISTER_URL } from "@/lib/site-content";

const DESCRIPTION =
  "Map, decide, know the cost, then execute: how DEWSMENTORA takes you from University Intelligence Mapping to applications, visa and beyond.";

export const metadata: Metadata = {
  title: "How It Works",
  description: DESCRIPTION,
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How It Works", description: DESCRIPTION },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="px-6 pb-14 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
            <h1 className="m-0 mb-4 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">How it works</h1>
            <p className="m-0 mb-6 font-sans text-[15px] font-bold uppercase tracking-[0.16em] text-ochre">
              {EXECUTION_JOURNEY.flow}
            </p>
            <div className="grid max-w-[64ch] gap-3">
              {EXECUTION_OVERVIEW.intro.map((p, i) => (
                <p
                  key={p}
                  className={`m-0 font-serif leading-[1.55] ${i === 0 ? "text-[clamp(18px,1.8vw,21px)]" : "text-[17px] text-muted-2"}`}
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="m-0 mt-6 font-serif text-[16px] leading-[1.5] text-muted-2">
              Not sure of your direction yet?{" "}
              <Link href="/products/identity-mapping" className="border-b-[1.5px] border-yellow text-ink">
                Start with Identity Mapping
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Steps one to five" className="px-6 pb-[88px]">
        <ol className="m-0 mx-auto grid max-w-[1280px] list-none gap-0 p-0">
          {EXECUTION_STEPS.map((s) => (
            <li key={s.n} className="border-t border-line-strong py-10 last:border-b nav:py-12">
              <Reveal>
                <div className="grid gap-x-12 gap-y-4 nav:grid-cols-[120px_1fr]">
                  <p className="m-0 font-display text-[44px] leading-none text-yellow nav:text-[64px]">{s.n}</p>
                  <div>
                    <h2 className="m-0 mb-4 font-display text-[clamp(24px,2.6vw,36px)] uppercase leading-[1.05]">{s.t}</h2>
                    <div className="grid max-w-[70ch] gap-2.5">
                      {s.body.map((p) => (
                        <p key={p} className="m-0 font-serif text-[18px] leading-[1.55] text-muted-2">
                          {p}
                        </p>
                      ))}
                    </div>

                    {s.lists && (
                      <div
                        className="mt-6 grid gap-6"
                        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}
                      >
                        {s.lists.map((l) => (
                          <div key={l.heading} className="bg-cream p-[22px_24px]">
                            <h3 className="m-0 mb-3 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-ochre">
                              {l.heading}
                            </h3>
                            <ul className="m-0 grid list-disc gap-1.5 pl-5 font-serif text-[16.5px] leading-[1.45] marker:text-gold">
                              {l.items.map((it) => (
                                <li key={it}>{it}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {s.aside && (
                      <div className="mt-6 max-w-[70ch] border-l-[3px] border-yellow pl-5">
                        <h3 className="m-0 mb-2 font-sans text-[15px] font-semibold">{s.aside.heading}</h3>
                        {s.aside.body.map((p) => (
                          <p key={p} className="m-0 font-serif text-[17px] leading-[1.5] text-muted-2">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* The coupon step carries the fee and what it can include. */}
                    {s.n === "05" && (
                      <div
                        className="mt-8 grid items-start gap-8"
                        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}
                      >
                        <CouponFee />
                        <CouponIncludes />
                      </div>
                    )}

                    {s.outcome && (
                      <p className="m-0 mt-6 inline-flex flex-wrap items-baseline gap-2 rounded-md bg-ink px-3.5 py-2 text-white">
                        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-yellow">Outcome</span>
                        <span className="font-sans text-[15px] font-semibold">{s.outcome}</span>
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink px-6 py-[88px] text-white">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Journey tone="dark" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-[88px]">
        <div className="mx-auto grid max-w-[1280px] gap-20">
          <Reveal>
            <Distinction />
          </Reveal>
          <Reveal>
            <Difference />
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-[26px] bg-ink p-[56px_40px] text-white">
            <h2 className="m-0 max-w-[26ch] font-display text-[clamp(26px,2.8vw,40px)] uppercase leading-[1.02]">
              Start with the question you need answered
            </h2>
            <div className="flex flex-wrap gap-3.5">
              <Button href={APP_REGISTER_URL} variant="primary" disabled>
                Coming Soon
              </Button>
              <Button href="/products" variant="outline-light">
                Explore Products
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
