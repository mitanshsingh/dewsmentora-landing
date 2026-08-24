import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import MappingJourneyPanel from "@/components/MappingJourneyPanel";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PRODUCTS, productHref } from "@/lib/products";
import { COUNTRIES } from "@/lib/study-destinations";
import { HOME_FAQS, HOME_STEPS, WHY_POINTS, INTAKE_MILESTONES, APP_REGISTER_URL } from "@/lib/site-content";
import { openGraph } from "@/lib/seo";

const TITLE = "Study Abroad Decision Support for Indian Students | DEWS Mentora";
const DESCRIPTION =
  "Structured study abroad and university decision support for Indian students. Compare countries, evaluate universities, and plan a master's abroad with real data.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: openGraph({ title: TITLE, description: DESCRIPTION, path: "/" }),
};

const COUNTRY_TEASERS: Record<string, { intakeLabel: string; intake: string; cost: string; note: string }> = {
  usa: {
    intakeLabel: "Intake",
    intake: "Fall (Aug–Sep) — the primary intake, widest course and funding availability.",
    cost: "Tuition: $20,000–$60,000/year, plus living costs.",
    note: "OPT: up to 12 months of work authorisation after graduation — 36 months for many STEM majors.",
  },
  uk: {
    intakeLabel: "Intake",
    intake: "September — the primary intake for nearly all programs.",
    cost: "Tuition: £15,000–£35,000 for a one-year master's.",
    note: "Graduate Route: 2 years of post-study work, no job offer required.",
  },
  germany: {
    intakeLabel: "Intake",
    intake: "Two intakes: Winter (October) and Summer (April).",
    cost: "Most public universities charge little to no tuition — budget mainly for living costs.",
    note: "A growing number of master's programs are taught fully in English.",
  },
  ireland: {
    intakeLabel: "Intake",
    intake: "September — the main intake; admissions are largely rolling.",
    cost: "Tuition: €10,000–€25,000/year.",
    note: "Third Level Graduate Programme: up to 2 years to seek work, no job offer required.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="bg-white px-6 pb-[72px] pt-24">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <p className="m-0 mb-[22px] font-sans text-[12.5px] font-semibold uppercase tracking-[0.22em] text-ochre">
              Decision intelligence for aspirants
            </p>
            <h1 className="m-0 mb-4 font-display text-[clamp(46px,6.6vw,92px)] uppercase leading-[0.9] tracking-[-0.005em]">
              Your future deserves more than advice
            </h1>
            <h2 className="m-0 mb-[26px] font-sans text-[clamp(16px,1.6vw,19px)] font-semibold uppercase tracking-[0.04em] text-muted-2">
              Structured study abroad and university decision support for Indian students planning a master&apos;s
              degree
            </h2>
            <p className="m-0 mb-[34px] max-w-[64ch] font-serif text-[clamp(18px,2vw,22px)] leading-[1.55] text-[#2A2A2A]">
              Before choosing a direction, university or application strategy for study abroad, understand what
              you&apos;re committing to. DEWSMENTORA™ helps Indian aspirants and families independently evaluate,
              compare and validate high-stakes education and career decisions — from a first degree to a
              master&apos;s abroad in the{" "}
              <Link href="/study-abroad/usa" className="border-b-[1.5px] border-yellow">
                USA
              </Link>
              ,{" "}
              <Link href="/study-abroad/uk" className="border-b-[1.5px] border-yellow">
                UK
              </Link>
              ,{" "}
              <Link href="/study-abroad/germany" className="border-b-[1.5px] border-yellow">
                Germany
              </Link>{" "}
              or{" "}
              <Link href="/study-abroad/ireland" className="border-b-[1.5px] border-yellow">
                Ireland
              </Link>{" "}
              — before commitment.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button href={APP_REGISTER_URL} variant="primary">
                Get Started
              </Button>
              <Button href="/products" variant="outline-dark">
                Explore Products
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="deciding" className="bg-[#EFEFEF]">
        <div className="mx-auto max-w-[1280px] px-8 pt-14">
          <Reveal>
            <h2 id="deciding" className="m-0 mb-3.5 font-display text-[clamp(34px,3.4vw,52px)] uppercase leading-[0.95]">
              What are you deciding?
            </h2>
            <p className="m-0 max-w-[70ch] font-serif text-[17px] leading-[1.55] text-muted-2">
              Each Map below answers one question in the study abroad and university decision process — from
              clarifying direction, to evaluating universities, to building your application narrative, to
              executing the admission itself.
            </p>
          </Reveal>
        </div>
        <StaggerGrid
          className="mx-auto grid max-w-[1280px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {PRODUCTS.map((p) => (
            <StaggerItem
              key={p.slug}
              className="flex flex-col gap-[18px] p-[56px_30px]"
              style={{ background: p.bg, color: p.fg }}
            >
              <h3 className="m-0 font-display text-[clamp(20px,1.7vw,26px)] uppercase leading-[1.1]">{p.question}</h3>
              <p className="m-0 font-serif text-[17px] leading-[1.2] opacity-85">{p.name}</p>
              <p className="m-0 flex-1 font-serif text-[16px] leading-[1.5]">{p.cardText}</p>
              <Link
                href={productHref(p)}
                className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 font-sans text-sm font-bold"
                style={{ background: p.btnBg, color: p.btnFg }}
              >
                Explore <span aria-hidden="true">→</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section aria-labelledby="destinations" className="px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="destinations" className="m-0 mb-4 font-display text-[clamp(32px,3.4vw,52px)] uppercase leading-[0.95]">
              Where do you want to study?
            </h2>
            <p className="m-0 mb-10 max-w-[70ch] font-serif text-[18px] leading-[1.55] text-[#2A2A2A]">
              A quick comparison across the four destinations aspirants ask about most. Full guides — with visa
              steps, paperwork checklists and university examples — are linked from each card.
            </p>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            {COUNTRIES.map((c) => {
              const teaser = COUNTRY_TEASERS[c.slug];
              return (
                <StaggerItem key={c.slug}>
                  <Link
                    href={`/study-abroad/${c.slug}`}
                    className="grid h-full gap-3 border border-line-card p-[26px_24px] transition-colors hover:bg-cream"
                  >
                    <span className="font-display text-[13px] uppercase tracking-[0.14em] text-ochre">
                      Study in {c.flagLabel}
                    </span>
                    <span className="font-display text-[24px] uppercase leading-[1.05]">{c.name}</span>
                    <dl className="m-0 grid gap-2 pt-1">
                      <div>
                        <dt className="inline font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-muted">
                          {teaser.intakeLabel}:{" "}
                        </dt>
                        <dd className="inline font-serif text-[15px] leading-[1.45] text-muted-2">{teaser.intake}</dd>
                      </div>
                      <div>
                        <dt className="inline font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-muted">
                          Cost:{" "}
                        </dt>
                        <dd className="inline font-serif text-[15px] leading-[1.45] text-muted-2">{teaser.cost}</dd>
                      </div>
                      <div>
                        <dd className="m-0 font-serif text-[15px] leading-[1.45] text-muted-2">{teaser.note}</dd>
                      </div>
                    </dl>
                    <span className="mt-2 inline-flex w-fit items-center gap-2 font-sans text-sm font-bold text-ink">
                      Read the guide <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/study-abroad" className="inline-flex gap-2.5 border-b-[1.5px] border-yellow pb-1.5 font-sans text-[15px] font-bold text-ink">
              Compare all four destinations in detail <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="journey" className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal>
            <MappingJourneyPanel />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="journey" className="m-0 mb-[22px] font-display text-[clamp(34px,3.6vw,56px)] uppercase leading-[0.95]">
              You don&apos;t need every Map
            </h2>
            <p className="m-0 mb-7 font-serif text-[20px] leading-[1.55] text-[#D9D9D9]">
              Each Map addresses a specific decision problem. DEWSMENTORA&apos;s role is not to maximise the
              number of services you purchase. It is to identify where structured evaluation or professional
              support genuinely adds value.
            </p>
            <Link href="/how-it-works" className="inline-flex gap-2.5 border-b-[1.5px] border-yellow pb-1.5 font-sans text-[15px] font-bold text-yellow">
              See how it works <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="steps" className="px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="steps" className="m-0 mb-12 font-display text-[clamp(32px,3.4vw,52px)] uppercase leading-[0.95]">
              How it works
            </h2>
          </Reveal>
          <StaggerGrid
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
          >
            {HOME_STEPS.map((s) => (
              <StaggerItem key={s.n} className="border-t-[3px] border-yellow pt-[22px]">
                <p className="m-0 mb-3.5 font-display text-[40px] leading-none text-yellow">{s.n}</p>
                <h3 className="m-0 mb-2.5 font-sans text-[19px] font-semibold leading-[1.2]">{s.t}</h3>
                <p className="m-0 font-serif text-[17px] leading-[1.5] text-[#4A4A4A]">{s.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section aria-labelledby="timeline" className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="timeline" className="m-0 mb-4 font-display text-[clamp(30px,3vw,46px)] uppercase leading-[0.95]">
              Planning for Fall 2027?
            </h2>
            <p className="m-0 mb-10 max-w-[70ch] font-serif text-[18px] leading-[1.55] text-[#2A2A2A]">
              If you&apos;re aiming for a Fall 2027 intake, here&apos;s roughly where you should be right now.
              Timelines shift by country and program —{" "}
              <Link href="/resources/guides/how-to-apply-for-a-masters-degree-abroad" className="border-b-[1.5px] border-yellow">
                see the full application guide
              </Link>{" "}
              for the complete breakdown.
            </p>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
            {INTAKE_MILESTONES.map((m) => (
              <StaggerItem key={m.window} className="border-t-[3px] border-ink pt-[22px]">
                <p className="m-0 mb-3 font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-ochre">
                  {m.window}
                </p>
                <h3 className="m-0 mb-2.5 font-sans text-[18px] font-semibold leading-[1.25]">{m.t}</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.5] text-muted-2">{m.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section aria-labelledby="why" className="px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="why" className="m-0 mb-3.5 font-display text-[clamp(30px,3vw,44px)] uppercase leading-[0.98]">
              Why DEWS Mentora
            </h2>
            <p className="m-0 mb-10 max-w-[70ch] font-serif text-[18px] leading-[1.55] text-[#2A2A2A]">
              Four principles that shape every Map, from Identity Mapping through Execution Mapping.
            </p>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {WHY_POINTS.map((w) => (
              <StaggerItem key={w.t} className="bg-cream p-[30px_26px]">
                <h3 className="m-0 mb-2.5 font-sans text-[18px] font-semibold leading-[1.25]">{w.t}</h3>
                <p className="m-0 font-serif text-[17px] leading-[1.5] text-muted-2">{w.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section aria-labelledby="homefaq" className="px-6 pb-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <h2 id="homefaq" className="m-0 mb-[30px] font-display text-[clamp(30px,3vw,44px)] uppercase leading-[0.98]">
              Common questions
            </h2>
            <FaqAccordion items={HOME_FAQS} idPrefix="home-faq" />
            <p className="m-0 mt-[26px] font-serif text-[17px] leading-[1.5]">
              <Link href="/resources/faqs" className="border-b-[1.5px] border-yellow">
                All FAQs
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
