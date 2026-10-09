import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PREP_TEST_GROUPS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Preparation",
  description: "Preparation material for IELTS, TOEFL, PTE Academic, GRE, GMAT and SAT.",
  alternates: { canonical: "/resources/preparation" },
  // Every card is still "coming soon", so keep this placeholder out of search
  // results. Once the first material is live, drop this and add the page to
  // app/sitemap.ts.
  robots: { index: false, follow: true },
};

export default function PreparationPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Preparation" }]}
            />
            <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">Preparation</h1>
            <p className="m-0 max-w-[60ch] font-serif text-[18px] leading-[1.55]">
              Study material for the English-proficiency and admissions tests most programs ask for. Material for each
              test will appear here as it is published.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-11">
        <div className="mx-auto grid max-w-[1280px] gap-14">
          {PREP_TEST_GROUPS.map((group) => (
            <div key={group.title}>
              <Reveal>
                <h2 className="m-0 mb-6 font-display text-[clamp(24px,2.4vw,32px)] uppercase leading-none">
                  {group.title}
                </h2>
              </Reveal>
              <StaggerGrid
                className="grid gap-6"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
              >
                {group.tests.map((t) => (
                  <StaggerItem key={t.name} className="grid content-start gap-3 border border-line-card p-[34px_30px]">
                    <h3 className="m-0 font-display text-[28px] uppercase leading-none">{t.name}</h3>
                    <p className="m-0 font-serif text-[17px] leading-[1.5] text-muted-2">{t.d}</p>
                    <span className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ochre">
                      Material coming soon
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          ))}
          <p className="m-0 font-serif text-[17px] leading-[1.5]">
            Preparing for a test not listed here?{" "}
            <Link href="/contact" className="border-b-[1.5px] border-yellow">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
