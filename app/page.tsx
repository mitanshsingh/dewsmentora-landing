import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import StickyCta from "@/components/ui/StickyCta";
import PillarGrid from "@/components/ui/PillarGrid";
import ArtFigure from "@/components/ui/ArtFigure";
import MapFitPanel from "@/components/ui/MapFitPanel";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { WHY_DEWS_PILLARS } from "@/lib/frameworks";
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
      <section className="px-5 pt-5 nav:bg-white nav:px-6 nav:pb-[72px] nav:pt-12">
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
              // Decorative: the poster sets the same words as the <h1> above it,
              // so an alt would make screen readers announce the headline twice.
              alt=""
              width={1122}
              height={1402}
              priority
              sizes="(max-width: 1080px) 320px, 440px"
              className="mx-auto block h-auto w-full max-w-[320px] bg-[#EDEBE5] nav:mr-0 nav:max-w-[440px] nav:bg-transparent"
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
                disabled
                className="h-[54px] w-full justify-center gap-2.5 bg-ink-warm font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-paper-warm nav:h-auto nav:w-auto nav:rounded-full nav:bg-yellow nav:px-[30px] nav:py-[18px] nav:text-[15px] nav:font-bold nav:normal-case nav:leading-none nav:tracking-normal nav:text-ink"
              >
                Coming Soon
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

      <section aria-labelledby="mapfit" className="mt-[52px] bg-black px-5 py-[46px] text-white nav:mt-0 nav:px-6 nav:py-[88px]">
        <div
          className={`${SHELL} flex flex-col gap-8 nav:grid nav:grid-cols-[clamp(280px,27vw,400px)_minmax(0,1fr)] nav:items-center nav:gap-14`}
        >
          <Reveal>
            <Image
              src="/images/mapfit-crossroads.webp"
              alt="A student at a signpost where only one direction is lit"
              width={1122}
              height={1402}
              sizes="(max-width: 1080px) 320px, 400px"
              className="mx-auto block h-auto w-full max-w-[320px] nav:max-w-none"
              // The artwork is painted on pure black, hence bg-black on this
              // section rather than bg-ink. The fade softens where its line-art
              // and the figure run off the edge of the frame.
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent), linear-gradient(to bottom, transparent, #000 8%, #000 90%, transparent)",
                maskComposite: "intersect",
              }}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <MapFitPanel tone="dark" headingId="mapfit" />
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
            <ArtFigure
              src="/images/why-dews.webp"
              alt="A student working at a laptop"
              width={792}
              height={525}
              surface="bg-cream"
              sizes="(max-width: 1080px) 0px, 560px"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="advantage" className="bg-cream px-5 py-[46px] nav:px-6 nav:py-[72px]">
        <div className={SHELL}>
          <Reveal>
            <h2
              id="advantage"
              className="m-0 mb-9 max-w-[22ch] font-headline text-[30px] font-medium leading-[1.14] text-ink nav:font-display nav:text-[clamp(30px,3vw,44px)] nav:font-normal nav:uppercase nav:leading-[0.98]"
            >
              The advantage behind every successful journey
            </h2>
            <PillarGrid items={WHY_DEWS_PILLARS} minColumn={240} maxColumns={3} />
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="homefaq"
        className="px-5 pb-[52px] pt-11 nav:px-6 nav:pb-24 nav:pt-24"
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
