import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { ProductSummaryCard } from "@/components/ui/ProductLinkCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PRODUCTS } from "@/lib/products";
import { APP_REGISTER_URL } from "@/lib/site-content";
import { openGraph } from "@/lib/seo";

const DESCRIPTION =
  "For students planning study abroad or university applications: a structured way to evaluate direction, university, application and execution before you commit.";

export const metadata: Metadata = {
  title: "For Students",
  description: DESCRIPTION,
  alternates: { canonical: "/for-students" },
  openGraph: openGraph({ title: "For Students", description: DESCRIPTION, path: "/for-students" }),
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
            <Image
              src="/images/identity-figure.png"
              alt="You don't need everything, and we don't believe in selling everything — each Map addresses a specific decision problem"
              width={1744}
              height={902}
              sizes="(min-width: 1080px) 600px, 100vw"
              className="w-full h-auto"
            />
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
