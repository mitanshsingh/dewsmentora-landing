import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PRODUCTS, productHref } from "@/lib/products";
import { HOME_FAQS, HOME_STEPS, WHY_POINTS, APP_REGISTER_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="bg-white px-6 pb-[72px] pt-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 nav:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <p className="m-0 mb-[22px] font-sans text-[12.5px] font-semibold uppercase tracking-[0.22em] text-ochre">
              Decision intelligence for aspirants
            </p>
            <h1 className="m-0 mb-[26px] font-display text-[clamp(46px,6.6vw,92px)] uppercase leading-[0.9] tracking-[-0.005em]">
              Your future deserves more than advice
            </h1>
            <p className="m-0 mb-[34px] max-w-[56ch] font-serif text-[clamp(18px,2vw,22px)] leading-[1.55] text-[#2A2A2A]">
              Before choosing a direction, university, or application strategy — understand what you&apos;re
              committing to. DEWSMENTORA™ helps aspirants and families independently evaluate, compare and
              validate high-stakes education and career decisions before commitment.
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
          <Reveal delay={0.15}>
            <Image
              src="/images/hero-poster.png"
              alt="Paper-cut typographic poster reading: Your future deserves more than advice"
              width={1122}
              height={1402}
              priority
              className="w-full h-auto"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="deciding" className="bg-[#EFEFEF]">
        <StaggerGrid
          className="mx-auto grid max-w-[1280px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          <StaggerItem className="flex items-center px-8 py-16">
            <h2 id="deciding" className="m-0 font-display text-[clamp(34px,3.4vw,52px)] uppercase leading-[0.95]">
              What are you deciding?
            </h2>
          </StaggerItem>
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

      <section aria-labelledby="journey" className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal>
            <Image
              src="/images/mapping-journey.png"
              alt="The DEWSMENTORA Mapping Journey: different decisions require different kinds of clarity"
              width={1699}
              height={926}
              className="w-full h-auto border border-[#2A2A2A]"
            />
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

      <section aria-labelledby="why" className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 bg-cream p-[56px_40px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <Reveal>
            <h2 id="why" className="m-0 mb-5 font-display text-[clamp(30px,3vw,44px)] uppercase leading-[0.98]">
              Why DEWS Mentora
            </h2>
            <ul className="m-0 grid list-none gap-4 p-0">
              {WHY_POINTS.map((w) => (
                <li key={w} className="border-l-2 border-yellow pl-[22px] font-serif text-[18px] leading-[1.5]">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <Image
              src="/images/why-dews.png"
              alt="Why choose us: proven expertise, precision in execution, risk mitigation, timely delivery, client-centric approach, results that matter"
              width={1942}
              height={809}
              className="w-full h-auto"
            />
          </Reveal>
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
