import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { COUNTRIES } from "@/lib/study-destinations";
import { APP_REGISTER_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Study Abroad: Complete Guide to Studying Overseas",
  description:
    "How to choose a country and university, visa and paperwork basics, costs, and application timelines for studying in the USA, UK, Germany and Ireland.",
  alternates: { canonical: "/study-abroad" },
  keywords: [
    "study abroad",
    "study in usa",
    "study in uk",
    "study in germany",
    "study in ireland",
    "best university for masters",
    "how to choose a university",
  ],
  openGraph: {
    title: "Study Abroad: Complete Guide to Studying Overseas",
    description:
      "How to choose a country and university, visa and paperwork basics, costs, and application timelines — USA, UK, Germany and Ireland.",
  },
};

const HUB_FAQS = [
  {
    q: "How do I decide which country to study in?",
    a: "Start from your field and career goal, not the country. The US offers the widest range of specialisations and strong OPT work rights; the UK offers a faster one-year master's; Germany offers low-cost public tuition for STEM-heavy fields; Ireland pairs English-language teaching with strong tech and pharma employers. From there, weigh cost, program length, and post-study work rules against your own priorities.",
  },
  {
    q: "How far in advance should I start planning to study abroad?",
    a: "Twelve to eighteen months before your intended intake is a comfortable timeline — it gives room for standardised tests, shortlisting programs, application deadlines (often 6–9 months before the intake), and visa processing, which can itself take several weeks to a few months.",
  },
  {
    q: "Do I need a consultant to study abroad?",
    a: "No single path is mandatory. Many students research and apply independently. Structured support tends to help most when you're comparing multiple countries or offers, unsure about the visa process, or want an independent check on a shortlist before committing significant application fees and time.",
  },
  {
    q: "What's the single biggest mistake applicants make?",
    a: "Choosing a country or university based on rankings or word of mouth before clarifying what they actually want from the degree — career outcome, cost ceiling, or specific research interest. That mismatch is expensive to correct after you've already enrolled.",
  },
];

export default function StudyAbroadHubPage() {
  return (
    <>
      <section className="px-6 pb-14 pt-16">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Study Abroad" }]} />
            <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">
              Where should I go?
            </p>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">
              Study abroad
            </h1>
            <p className="m-0 mb-[30px] max-w-[62ch] font-serif text-[clamp(18px,1.9vw,22px)] leading-[1.55] text-[#2A2A2A]">
              Studying abroad is five decisions wearing one trench coat: country, university, program, funding, and
              timeline. This guide breaks each one down for the four destinations aspirants ask about most, so you
              can compare them on the same terms before you commit application fees and months of effort.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button href={APP_REGISTER_URL} variant="primary" disabled>
                Coming Soon
              </Button>
              <Button href="/products/university-intelligence-mapping" variant="outline-dark">
                Explore University Intelligence Mapping
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="destinations" className="px-6 pb-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="destinations" className="m-0 mb-8 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              Choose a destination
            </h2>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {COUNTRIES.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/study-abroad/${c.slug}`}
                  className="grid h-full gap-3 border border-line-card p-[30px_26px] transition-colors hover:bg-cream"
                >
                  <span className="font-display text-[13px] uppercase tracking-[0.14em] text-ochre">
                    Study in {c.flagLabel}
                  </span>
                  <span className="font-display text-[26px] uppercase leading-[1.05]">{c.name}</span>
                  <span className="font-serif text-[16px] leading-[1.5] text-muted-2">
                    {c.whyStudyHere[0]}
                  </span>
                  <span className="mt-2 inline-flex w-fit items-center gap-2 font-sans text-sm font-bold text-ink">
                    Read the guide <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section aria-labelledby="how-to-decide" className="bg-[#EFEFEF] px-6 py-[88px]">
        <div className="mx-auto grid max-w-[1280px] gap-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <Reveal>
            <h2 id="how-to-decide" className="m-0 mb-5 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">
              Five things to compare before you choose
            </h2>
            <p className="m-0 font-serif text-[18px] leading-[1.55] text-[#2A2A2A]">
              Every destination guide on this site is structured around the same five factors, so you can put two
              countries or two universities side by side and compare like for like.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="m-0 grid list-none gap-4 p-0">
              <li className="border-l-2 border-yellow pl-[22px] font-serif text-[18px] leading-[1.5]">
                <strong>Program fit</strong> — does the curriculum and faculty research match what you actually want to do next?
              </li>
              <li className="border-l-2 border-yellow pl-[22px] font-serif text-[18px] leading-[1.5]">
                <strong>Total cost</strong> — tuition plus realistic living costs for the specific city, not the national average.
              </li>
              <li className="border-l-2 border-yellow pl-[22px] font-serif text-[18px] leading-[1.5]">
                <strong>Visa and paperwork complexity</strong> — how much lead time and documentation the process actually needs.
              </li>
              <li className="border-l-2 border-yellow pl-[22px] font-serif text-[18px] leading-[1.5]">
                <strong>Post-study work rights</strong> — how long you can legally stay and work after the degree ends.
              </li>
              <li className="border-l-2 border-yellow pl-[22px] font-serif text-[18px] leading-[1.5]">
                <strong>Timeline</strong> — one-year versus two-year programs change the total cost and opportunity-cost calculation significantly.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="related-guides" className="px-6 py-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="related-guides" className="m-0 mb-8 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              Next: the application itself
            </h2>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <StaggerItem>
              <Link
                href="/resources/guides/how-to-choose-a-university"
                className="grid h-full gap-2.5 border border-line-card p-[28px_24px] hover:bg-cream"
              >
                <span className="font-display text-[20px] uppercase leading-[1.1]">How to choose a university</span>
                <span className="font-serif text-[16px] leading-[1.5] text-muted-2">
                  A decision framework for narrowing a long list down to a shortlist you can actually apply to.
                </span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/resources/guides/how-to-apply-for-a-masters-degree-abroad"
                className="grid h-full gap-2.5 border border-line-card p-[28px_24px] hover:bg-cream"
              >
                <span className="font-display text-[20px] uppercase leading-[1.1]">How to apply for a master&apos;s abroad</span>
                <span className="font-serif text-[16px] leading-[1.5] text-muted-2">
                  The step-by-step process, from shortlisting to enrolment, that applies across almost every country.
                </span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/resources/guides/what-career-should-i-choose"
                className="grid h-full gap-2.5 border border-line-card p-[28px_24px] hover:bg-cream"
              >
                <span className="font-display text-[20px] uppercase leading-[1.1]">What career should I choose?</span>
                <span className="font-serif text-[16px] leading-[1.5] text-muted-2">
                  Work out the destination before you plan the route — a framework for deciding, not guessing.
                </span>
              </Link>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      <section aria-labelledby="hubfaq" className="px-6 pb-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <h2 id="hubfaq" className="m-0 mb-[30px] font-display text-[clamp(30px,3vw,44px)] uppercase leading-[0.98]">
              Common questions
            </h2>
            <FaqAccordion items={HUB_FAQS} idPrefix="study-abroad-faq" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
