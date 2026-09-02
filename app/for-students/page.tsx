import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { ProductSummaryCard } from "@/components/ui/ProductLinkCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import MapFitPanel from "@/components/ui/MapFitPanel";
import ArtFigure from "@/components/ui/ArtFigure";
import { PRODUCTS } from "@/lib/products";
import { APP_REGISTER_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "For Students",
  description:
    "You are being asked to make decisions worth years of effort and significant money. DEWSMENTORA gives you a structured way to evaluate those decisions before you commit.",
  alternates: { canonical: "/for-students" },
  openGraph: {
    title: "For Students",
    description:
      "You are being asked to make decisions worth years of effort and significant money. Here's a structured way to evaluate them before you commit.",
  },
};

const CHALLENGE_CARDS = [
  {
    t: "The challenge",
    d: "Course, university, country, career, future — five decisions presented as one, usually under time pressure and without a way to compare options honestly.",
  },
  {
    t: "What changes",
    d: "Each Map answers one question with a documented framework, so you can see why an option is suitable — not just that someone recommended it.",
  },
  {
    t: "What you keep",
    d: "Your reports stay in your dashboard. You can revisit them as offers arrive, plans change, or a new decision comes up.",
  },
];

export default function ForStudentsPage() {
  return (
    <>
      <section className="px-6 pb-14 pt-16">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "For Students" }]} />
            <h1 className="m-0 mb-[22px] font-display text-[clamp(38px,5.2vw,76px)] uppercase leading-[0.92]">For students</h1>
            <p className="m-0 mb-[30px] max-w-[56ch] font-serif text-[clamp(18px,1.9vw,22px)] leading-[1.55] text-[#2A2A2A]">
              You are being asked to make decisions worth years of effort and significant money, usually with
              incomplete information and conflicting advice. DEWSMENTORA gives you a structured way to evaluate
              those decisions before you commit.
            </p>
            <Button href={APP_REGISTER_URL} variant="primary">
              Get Started
            </Button>
          </Reveal>
          <Reveal delay={0.15}>
            <ArtFigure
              src="/images/identity-figure.webp"
              alt="A student thinking through her options at a desk"
              width={557}
              height={560}
              priority
              surface="bg-paper-warm nav:bg-paper"
              sizes="(max-width: 1080px) 92vw, 540px"
              className="mx-auto w-full max-w-[540px]"
            />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mapfit" className="px-6 pb-[88px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <MapFitPanel headingId="mapfit" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-[88px]">
        <StaggerGrid className="mx-auto grid max-w-[1280px] gap-7" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {CHALLENGE_CARDS.map((c) => (
            <StaggerItem key={c.t} className="bg-[#EFEFEF] p-[34px_28px]">
              <h2 className="m-0 mb-3.5 font-display text-[22px] uppercase leading-[1.1]">{c.t}</h2>
              <p className="m-0 font-serif text-[17px] leading-[1.55] text-muted-2">{c.d}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="m-0 mb-7 font-display text-[clamp(26px,2.6vw,40px)] uppercase leading-none">
              Pick the Map that matches your moment
            </h2>
          </Reveal>
          <StaggerGrid className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {PRODUCTS.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductSummaryCard product={p} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
