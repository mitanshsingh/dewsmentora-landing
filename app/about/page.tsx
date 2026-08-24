import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PRINCIPLES } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Education decisions are made once and lived with for years. DEWSMENTORA exists to make those decisions evaluable before they are committed to.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About DEWS Mentora",
    description:
      "Education decisions are made once and lived with for years. DEWSMENTORA exists to make those decisions evaluable before they are committed to.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <h1 className="m-0 mb-[22px] font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">
              Why DEWS Mentora?
            </h1>
            <p className="m-0 max-w-[64ch] font-serif text-[clamp(18px,1.9vw,22px)] leading-[1.55]">
              Education decisions are made once and lived with for years. They are usually made with fragmented
              information, competing incentives and advice that cannot be verified. DEWSMENTORA exists to make
              those decisions evaluable before they are committed to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-[88px] pt-14">
        <Reveal className="mx-auto max-w-[1280px] bg-ink p-[56px_44px] text-white">
          <h2 className="m-0 mb-5 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-yellow">
            Our mission
          </h2>
          <p className="m-0 max-w-[44ch] font-serif text-[clamp(22px,2.6vw,36px)] leading-[1.35]">
            To give every aspirant a structured way to understand a high-stakes decision before making it.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="m-0 mb-[30px] font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none">
              Our principles
            </h2>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {PRINCIPLES.map((p) => (
              <StaggerItem key={p.t} className="border-t-[3px] border-yellow pt-[22px]">
                <h3 className="m-0 mb-3 font-display text-2xl uppercase leading-[1.1]">{p.t}</h3>
                <p className="m-0 font-serif text-[17px] leading-[1.55] text-muted-2">{p.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
