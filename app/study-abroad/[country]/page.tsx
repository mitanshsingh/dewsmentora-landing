import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionCta from "@/components/ui/SectionCta";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { COUNTRIES, getCountry } from "@/lib/study-destinations";
import { articleJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/study-abroad/${c.slug}` },
    keywords: [
      `study in ${c.shortName}`,
      `best university for masters in ${c.shortName}`,
      `${c.shortName} student visa`,
      `paperwork required to study in ${c.shortName}`,
      "study abroad",
    ],
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

const OTHER_PRODUCT: Record<string, { href: string; label: string }> = {
  usa: { href: "/products/execution-mapping", label: "Execution Mapping" },
  uk: { href: "/products/university-intelligence-mapping", label: "University Intelligence Mapping" },
  germany: { href: "/products/university-intelligence-mapping", label: "University Intelligence Mapping" },
  ireland: { href: "/products/university-intelligence-mapping", label: "University Intelligence Mapping" },
};

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) notFound();

  const otherCountries = COUNTRIES.filter((x) => x.slug !== c.slug);
  const product = OTHER_PRODUCT[c.slug];

  return (
    <article>
      <JsonLd
        data={articleJsonLd({
          headline: c.metaTitle,
          description: c.metaDescription,
          path: `/study-abroad/${c.slug}`,
          datePublished: "2026-01-01",
          dateModified: "2026-08-24",
        })}
      />

      <section className="bg-[#EFEFEF] px-6 pb-14 pt-16">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Study Abroad", href: "/study-abroad" },
                { label: c.heroTitle },
              ]}
            />
            <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">
              {c.heroEyebrow}
            </p>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(38px,5vw,74px)] uppercase leading-[0.92]">
              {c.heroTitle}
            </h1>
            <p className="m-0 mb-[30px] max-w-[68ch] font-serif text-[clamp(18px,1.9vw,22px)] leading-[1.55] text-[#2A2A2A]">
              {c.heroBlurb}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button href="/products/university-intelligence-mapping" variant="primary">
                Evaluate my fit
              </Button>
              <Button href="/study-abroad" variant="outline-dark">
                Compare destinations
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="why" className="px-6 py-[88px]">
        <div className="mx-auto grid max-w-[1280px] gap-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <Reveal>
            <h2 id="why" className="m-0 mb-5 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">
              Why study in {c.shortName}
            </h2>
            <ul className="m-0 grid list-none gap-4 p-0">
              {c.whyStudyHere.map((w) => (
                <li key={w} className="border-l-2 border-yellow pl-5 font-serif text-[18px] leading-[1.55]">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 mb-5 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">
              Popular fields
            </h2>
            <ul className="m-0 grid list-none gap-3.5 p-0">
              {c.popularFields.map((f) => (
                <li key={f} className="border-l-2 border-line-strong pl-5 font-serif text-[18px] leading-[1.55]">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="universities" className="bg-ink px-6 py-[88px] text-white">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="universities" className="m-0 mb-5 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              Best universities for a master&apos;s in {c.shortName}
            </h2>
            <p className="m-0 mb-10 max-w-[72ch] font-serif text-[18px] leading-[1.6] text-[#D9D9D9]">
              {c.universityIntro}
            </p>
          </Reveal>
          <StaggerGrid className="mb-8 grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {c.universityExamples.map((u) => (
              <StaggerItem key={u} className="border-t-2 border-yellow pt-5">
                <p className="m-0 font-serif text-[17px] leading-[1.5] text-[#EDEDED]">{u}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Reveal>
            <p className="m-0 max-w-[72ch] font-sans text-sm leading-[1.6] text-[#9A9A9A]">{c.universityNote}</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="costs" className="px-6 py-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="costs" className="m-0 mb-8 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              What it costs
            </h2>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {c.costOverview.map((item) => (
              <StaggerItem key={item.label} className="bg-cream p-[30px_26px]">
                <h3 className="m-0 mb-2.5 font-sans text-[18px] font-semibold leading-[1.25]">{item.label}</h3>
                <p className="m-0 font-serif text-[17px] leading-[1.5] text-muted-2">{item.detail}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section aria-labelledby="visa" className="bg-[#EFEFEF] px-6 py-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="visa" className="m-0 mb-3 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              The {c.visaName}: what it requires
            </h2>
            <p className="m-0 mb-10 max-w-[70ch] font-serif text-[18px] leading-[1.55] text-[#2A2A2A]">
              These are the core pieces of the process — always confirm current requirements and fees on the
              relevant embassy or immigration website before you apply, since exact figures and forms are updated
              periodically.
            </p>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {c.visaOverview.map((v) => (
              <StaggerItem key={v.name} className="border border-line-card bg-white p-[28px_24px]">
                <h3 className="m-0 mb-2.5 font-sans text-[17px] font-semibold leading-[1.3]">{v.name}</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.5] text-muted-2">{v.description}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section aria-labelledby="steps" className="px-6 py-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 id="steps" className="m-0 mb-10 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              The application process, step by step
            </h2>
          </Reveal>
          <StaggerGrid className="grid list-none gap-6 p-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {c.applicationSteps.map((s) => (
              <StaggerItem key={s.n} className="border-t-[3px] border-yellow pt-[22px]">
                <p className="m-0 mb-3.5 font-display text-[36px] leading-none text-yellow">{s.n}</p>
                <h3 className="m-0 mb-2.5 font-sans text-[18px] font-semibold leading-[1.2]">{s.t}</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.5] text-[#4A4A4A]">{s.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Reveal delay={0.1} className="mt-10">
            <p className="m-0 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-muted">
              Intake timing: <span className="font-normal normal-case tracking-normal text-ink">{c.intakeInfo}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="paperwork" className="bg-cream px-6 py-[88px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <h2 id="paperwork" className="m-0 mb-3 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              Paperwork checklist
            </h2>
            <p className="m-0 mb-8 font-serif text-[18px] leading-[1.55] text-[#2A2A2A]">
              What most applicants for {c.shortName} need to have ready before their visa application:
            </p>
            <ul className="m-0 grid list-none gap-3.5 p-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {c.paperwork.map((item) => (
                <li key={item} className="flex gap-3 font-serif text-[17px] leading-[1.5]">
                  <span aria-hidden="true" className="text-ochre">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {c.slug === "usa" && (
              <p className="m-0 mt-8 font-serif text-[17px] leading-[1.5]">
                For a step-by-step walkthrough of each document, read the full{" "}
                <Link href="/resources/guides/usa-study-visa-paperwork-checklist" className="border-b-[1.5px] border-yellow">
                  USA study visa paperwork checklist
                </Link>
                .
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="country-faq" className="px-6 py-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <h2 id="country-faq" className="m-0 mb-[30px] font-display text-[clamp(30px,3vw,44px)] uppercase leading-[0.98]">
              Common questions
            </h2>
            <FaqAccordion items={c.faqs} idPrefix={`${c.slug}-faq`} />
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <SectionCta heading={`Ready to evaluate ${c.shortName} against other options?`} tone="dark" secondary={{ label: product.label, href: product.href }} />
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="m-0 mb-6 font-sans text-[15px] font-semibold uppercase tracking-[0.16em] text-muted">
            Other destinations
          </h2>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {otherCountries.map((oc) => (
              <Link
                key={oc.slug}
                href={`/study-abroad/${oc.slug}`}
                className="border border-line-card p-[26px_22px] transition-colors hover:bg-cream"
              >
                <span className="block font-display text-[13px] uppercase tracking-[0.14em] text-ochre">
                  Study in {oc.flagLabel}
                </span>
                <span className="mt-1.5 block font-display text-[22px] uppercase leading-[1.05]">{oc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
