import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import StickyCta from "@/components/ui/StickyCta";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PRODUCTS, productHref } from "@/lib/products";
import { HOME_FAQS, HOME_STEPS, WHY_POINTS, APP_REGISTER_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// This page is written phone-first from the "DEWS Mentora Mobile Home" design.
// Every `nav:` utility restores the desktop composition unchanged, so the two
// visual systems share one DOM tree and one URL.
const SHELL = "mx-auto w-full max-w-[560px] nav:max-w-[1280px]";
const EYEBROW = "m-0 font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em]";

export default function HomePage() {
  return (
    <>
      <section className="px-5 pt-[34px] nav:bg-white nav:px-6 nav:pb-[72px] nav:pt-24">
        <div
          className={`${SHELL} flex flex-col nav:grid nav:grid-cols-[1.15fr_1fr] nav:grid-rows-[1fr_auto_auto_1fr] nav:gap-x-14 nav:gap-y-0`}
        >
          <Reveal className="nav:col-start-1 nav:row-start-2">
            <p
              className={`${EYEBROW} mb-3.5 text-gold-deep nav:mb-[22px] nav:text-[12.5px] nav:text-ochre`}
            >
              Decision intelligence for aspirants
            </p>
            <h1 className="m-0 mb-[18px] max-nav:text-balance font-headline text-[40px] font-medium leading-[1.06] tracking-[-0.015em] nav:mb-[26px] nav:font-display nav:text-[clamp(46px,6.6vw,92px)] nav:font-normal nav:uppercase nav:leading-[0.9] nav:tracking-[-0.005em]">
              Your future deserves more than advice
            </h1>
          </Reveal>

          <Reveal
            delay={0.15}
            className="nav:col-start-2 nav:row-span-4 nav:row-start-1 nav:self-center"
          >
            <Image
              src="/images/hero-poster.png"
              alt="Paper-cut typographic poster reading: Your future deserves more than advice"
              width={1122}
              height={1402}
              priority
              sizes="(max-width: 1080px) 100vw, 620px"
              className="h-auto w-full bg-[#EDEBE5] nav:bg-transparent"
            />
          </Reveal>

          <Reveal className="nav:col-start-1 nav:row-start-3">
            <p className="m-0 mt-[22px] max-nav:text-pretty font-text text-[15.5px] leading-[1.62] text-ink-soft nav:mb-[34px] nav:mt-0 nav:max-w-[56ch] nav:font-serif nav:text-[clamp(18px,2vw,22px)] nav:leading-[1.55] nav:text-[#2A2A2A]">
              Before choosing a direction, university, or application strategy — understand what you&apos;re
              committing to. DEWSMENTORA™ helps aspirants and families independently evaluate, compare and
              validate high-stakes education and career decisions before commitment.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 nav:mt-0 nav:flex-row nav:flex-wrap nav:gap-3.5">
              <Button
                href={APP_REGISTER_URL}
                variant="custom"
                className="h-[54px] w-full justify-center gap-2.5 bg-ink-warm font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-paper-warm nav:h-auto nav:w-auto nav:rounded-full nav:bg-yellow nav:px-[30px] nav:py-[18px] nav:text-[15px] nav:font-bold nav:normal-case nav:leading-none nav:tracking-normal nav:text-ink nav:hover:bg-yellow-hover"
              >
                Get Started
              </Button>
              <Button
                href="/products"
                variant="custom"
                className="h-[54px] w-full justify-center gap-2.5 border border-warm-line-strong font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-warm nav:h-auto nav:w-auto nav:rounded-full nav:border-[1.5px] nav:border-ink nav:px-[30px] nav:py-[18px] nav:text-[15px] nav:font-bold nav:normal-case nav:leading-none nav:tracking-normal nav:text-ink nav:hover:bg-ink nav:hover:text-white"
              >
                Explore Products
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="deciding" className="px-5 pt-[52px] nav:bg-[#EFEFEF] nav:px-0 nav:pt-0">
        <StaggerGrid
          className={`${SHELL} flex flex-col gap-3 nav:grid nav:gap-0`}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          <StaggerItem className="mb-2 nav:mb-0 nav:flex nav:items-center nav:px-8 nav:py-16">
            <div>
              <p className={`${EYEBROW} mb-2 text-gold-deep nav:hidden`}>Four Maps</p>
              <h2
                id="deciding"
                className="m-0 font-headline text-[32px] font-medium leading-[1.12] tracking-[-0.01em] nav:font-display nav:text-[clamp(34px,3.4vw,52px)] nav:font-normal nav:uppercase nav:leading-[0.95] nav:tracking-normal nav:text-ink"
              >
                What are you deciding?
              </h2>
            </div>
          </StaggerItem>
          {PRODUCTS.map((p) => (
            <StaggerItem
              key={p.slug}
              className="flex flex-col border border-warm-line bg-card-warm p-[20px_18px] nav:gap-[18px] nav:border-0 nav:bg-[var(--card-bg)] nav:p-[56px_30px] nav:text-[var(--card-fg)]"
              style={
                {
                  "--card-bg": p.bg,
                  "--card-fg": p.fg,
                  "--btn-bg": p.btnBg,
                  "--btn-fg": p.btnFg,
                } as CSSProperties
              }
            >
              <h3 className="m-0 mb-2.5 font-headline text-[24px] font-normal leading-[1.2] nav:mb-0 nav:font-display nav:text-[clamp(20px,1.7vw,26px)] nav:uppercase nav:leading-[1.1] nav:text-inherit">
                {p.question}
              </h3>
              <p
                className={`${EYEBROW} mb-2.5 text-gold-deep nav:mb-0 nav:font-serif nav:text-[17px] nav:font-normal nav:normal-case nav:leading-[1.2] nav:tracking-normal nav:text-inherit nav:opacity-85`}
              >
                {p.name}
              </p>
              <p className="m-0 mb-3.5 max-nav:text-pretty font-text text-[14.5px] leading-[1.6] text-ink-muted nav:mb-0 nav:flex-1 nav:font-serif nav:text-[16px] nav:leading-[1.5] nav:text-inherit">
                {p.cardText}
              </p>
              <Link
                href={productHref(p)}
                className="inline-flex w-fit items-center gap-2 font-sans text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-warm nav:rounded-full nav:bg-[var(--btn-bg)] nav:px-6 nav:py-3.5 nav:text-sm nav:font-bold nav:normal-case nav:tracking-normal nav:text-[var(--btn-fg)]"
              >
                Explore <span aria-hidden="true">→</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section
        aria-labelledby="journey"
        className="mt-[52px] nav:mt-0 nav:bg-ink nav:px-6 nav:py-24 nav:text-white"
      >
        <div
          className={`${SHELL} nav:grid nav:items-center nav:gap-12`}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          <Reveal className="bg-night-deep text-night-fg nav:bg-transparent nav:text-inherit">
            <Image
              src="/images/journey.webp"
              alt="A student considering education and career directions"
              width={720}
              height={900}
              sizes="(max-width: 1080px) 100vw, 0px"
              className="h-auto w-full nav:hidden"
            />
            <Image
              src="/images/mapping-journey.png"
              alt="The DEWSMENTORA Mapping Journey: different decisions require different kinds of clarity"
              width={1699}
              height={926}
              sizes="(max-width: 1080px) 0px, 620px"
              className="hidden h-auto w-full border border-[#2A2A2A] nav:block"
            />
            <div className="px-5 pb-[34px] pt-[26px] nav:hidden">
              <p className="m-0 mb-3 font-sans text-[22px] font-bold uppercase leading-[1.18] tracking-[0.01em]">
                The DEWSMENTORA
                <br />
                <span className="text-gold-bright">Mapping Journey</span>™
              </p>
              <div aria-hidden="true" className="mb-[18px] h-0.5 w-11 bg-gold" />
              <p className="m-0 mb-[18px] max-nav:text-pretty font-text text-[15.5px] leading-[1.6] text-night-body">
                DEWSMENTORA uses specialised Maps to evaluate different stages of an aspirant&apos;s education
                and admission journey.
              </p>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                <li className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border-[1.5px] border-[#77746A] text-[13px] text-[#9C998E]"
                  >
                    ✕
                  </span>
                  <p className="m-0 font-text text-[15.5px] font-semibold leading-[1.45]">
                    You don&apos;t need every Map.
                  </p>
                </li>
                <li className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border-[1.5px] border-gold text-[13px] text-gold-bright"
                  >
                    ✓
                  </span>
                  <p className="m-0 font-text text-[15.5px] font-semibold leading-[1.45]">
                    You need the right Map for the decision you&apos;re facing.
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="px-5 pt-11 nav:p-0">
            <h2
              id="journey"
              className="m-0 mb-3.5 font-headline text-[30px] font-medium leading-[1.14] nav:mb-[22px] nav:font-display nav:text-[clamp(34px,3.6vw,56px)] nav:font-normal nav:uppercase nav:leading-[0.95]"
            >
              You don&apos;t need every Map
            </h2>
            <p className="m-0 mb-5 max-nav:text-pretty font-text text-[15.5px] leading-[1.62] text-ink-soft nav:mb-7 nav:font-serif nav:text-[20px] nav:leading-[1.55] nav:text-[#D9D9D9]">
              Each Map addresses a specific decision problem. DEWSMENTORA&apos;s role is not to maximise the
              number of services you purchase. It is to identify where structured evaluation or professional
              support genuinely adds value.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border-b-[1.5px] border-gold pb-1.5 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-warm nav:gap-2.5 nav:border-yellow nav:text-[15px] nav:font-bold nav:normal-case nav:tracking-normal nav:text-yellow"
            >
              See how it works <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="steps" className="px-5 pt-[46px] nav:px-6 nav:py-24">
        <div className={SHELL}>
          <Reveal>
            <p className={`${EYEBROW} mb-2 text-gold-deep nav:hidden`}>Process</p>
            <h2
              id="steps"
              className="m-0 mb-[22px] font-headline text-[30px] font-medium leading-[1.14] nav:mb-12 nav:font-display nav:text-[clamp(32px,3.4vw,52px)] nav:font-normal nav:uppercase nav:leading-[0.95] nav:text-ink"
            >
              How it works
            </h2>
          </Reveal>
          <StaggerGrid
            className="flex flex-col nav:grid nav:gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
          >
            {HOME_STEPS.map((s) => (
              <StaggerItem
                key={s.n}
                className="grid grid-cols-[46px_1fr] gap-3.5 border-t border-warm-line-mid py-[18px] nav:block nav:border-t-[3px] nav:border-yellow nav:pb-0 nav:pt-[22px]"
              >
                <p className="m-0 font-headline text-[26px] leading-none text-ink-faint nav:mb-3.5 nav:font-display nav:text-[40px] nav:text-yellow">
                  {s.n}
                </p>
                <div>
                  <h3 className="m-0 mb-1.5 font-sans text-[15px] font-semibold leading-snug tracking-[0.01em] nav:mb-2.5 nav:text-[19px] nav:leading-[1.2] nav:tracking-normal">
                    {s.t}
                  </h3>
                  <p className="m-0 max-nav:text-pretty font-text text-[14.5px] leading-[1.6] text-ink-muted nav:font-serif nav:text-[17px] nav:leading-[1.5] nav:text-[#4A4A4A]">
                    {s.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section
        aria-labelledby="why"
        className="mt-[46px] bg-night px-5 pb-[38px] pt-[34px] text-night-fg nav:mt-0 nav:bg-transparent nav:px-6 nav:pb-24 nav:pt-0 nav:text-ink"
      >
        <div
          className={`${SHELL} nav:grid nav:items-center nav:gap-10 nav:bg-cream nav:p-[56px_40px]`}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          <Reveal>
            <p className={`${EYEBROW} mb-2 text-gold-bright nav:hidden`}>Why us</p>
            <h2
              id="why"
              className="m-0 mb-[22px] font-headline text-[30px] font-medium leading-[1.14] nav:mb-5 nav:font-display nav:text-[clamp(30px,3vw,44px)] nav:font-normal nav:uppercase nav:leading-[0.98]"
            >
              Why DEWS Mentora
            </h2>
            <ul className="m-0 grid list-none gap-4 p-0">
              {WHY_POINTS.map((w) => (
                <li
                  key={w}
                  className="max-nav:text-pretty border-l-2 border-gold pl-4 font-text text-[15.5px] leading-[1.55] text-[#DEDBD2] nav:border-yellow nav:pl-[22px] nav:font-serif nav:text-[18px] nav:leading-[1.5] nav:text-ink"
                >
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="hidden nav:block">
            <Image
              src="/images/why-dews.png"
              alt="Why choose us: proven expertise, precision in execution, risk mitigation, timely delivery, client-centric approach, results that matter"
              width={1942}
              height={809}
              sizes="(max-width: 1080px) 0px, 560px"
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="homefaq"
        className="px-5 pb-[52px] pt-11 nav:px-6 nav:pb-24 nav:pt-0"
      >
        <div className="mx-auto w-full max-w-[560px] nav:max-w-[900px]">
          <Reveal>
            <h2
              id="homefaq"
              className="m-0 mb-[18px] font-headline text-[30px] font-medium leading-[1.14] nav:mb-[30px] nav:font-display nav:text-[clamp(30px,3vw,44px)] nav:font-normal nav:uppercase nav:leading-[0.98] nav:text-ink"
            >
              Common questions
            </h2>
            <FaqAccordion items={HOME_FAQS} idPrefix="home-faq" />
            <p className="m-0 mt-5 nav:mt-[26px] nav:font-serif nav:text-[17px] nav:leading-[1.5]">
              <Link
                href="/resources/faqs"
                className="inline-flex items-center border-b-[1.5px] border-gold pb-1.5 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-warm nav:inline nav:border-yellow nav:pb-0 nav:font-serif nav:text-[17px] nav:font-normal nav:normal-case nav:tracking-normal nav:text-ink"
              >
                {/* The space lives inside the arrow so desktop's underline does
                    not pick up a trailing space when the arrow is hidden. */}
                All FAQs
                <span aria-hidden="true" className="nav:hidden">
                  {" "}
                  →
                </span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <StickyCta />
    </>
  );
}
