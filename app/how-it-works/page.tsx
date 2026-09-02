import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import StageTimeline from "@/components/ui/StageTimeline";
import FrameworkExtras from "@/components/ui/FrameworkExtras";
import AdmissionJourneyMap from "@/components/ui/AdmissionJourneyMap";
import { ADMISSION_JOURNEY } from "@/lib/frameworks";
import { HOME_STEPS, APP_REGISTER_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Four steps, from profile to result. Everything after registration happens inside the application at app.dewsmentora.com.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works",
    description:
      "Four steps, from profile to result. Everything after registration happens inside the application.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
            <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">How it works</h1>
            <p className="m-0 max-w-[62ch] font-serif text-[clamp(18px,1.8vw,21px)] leading-[1.55]">
              Four steps, from profile to result. Everything after registration happens inside the application at
              app.dewsmentora.com.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-[88px] pt-12">
        <div className="mx-auto max-w-[1280px]">
          <StaggerGrid className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {HOME_STEPS.map((s) => (
              <StaggerItem key={s.n} className="bg-[#EFEFEF] p-[40px_30px]">
                <p className="m-0 mb-[18px] font-display text-[56px] leading-none text-yellow">{s.n}</p>
                <h2 className="m-0 mb-3 font-display text-2xl uppercase leading-[1.05]">{s.t}</h2>
                <p className="m-0 font-serif text-[17px] leading-[1.55] text-muted-2">{s.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="px-6 pb-14 nav:pb-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="m-0 mb-3.5 font-display text-[clamp(28px,2.8vw,42px)] uppercase leading-none nav:mb-6">
              Inside a managed admission journey
            </h2>
            <p className="m-0 mb-7 max-w-[62ch] font-serif text-[17px] leading-[1.55] text-muted nav:mb-11">
              The execution sequence applies when Execution Mapping is part of your journey.
            </p>
            {/* The serpentine needs all six stages side by side; below `nav`
                the vertical timeline carries the same content, with each stage
                folded away so the six titles fit one screen. */}
            <AdmissionJourneyMap framework={ADMISSION_JOURNEY} />
            <div className="max-w-[1000px] nav:hidden">
              <p className="m-0 mb-5 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-ochre">
                Six stages — tap to expand
              </p>
              <StageTimeline stages={ADMISSION_JOURNEY.stages} tone="light" collapsible />
              <FrameworkExtras framework={ADMISSION_JOURNEY} tone="light" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-[26px] bg-ink p-[56px_40px] text-white">
            <h2 className="m-0 max-w-[26ch] font-display text-[clamp(26px,2.8vw,40px)] uppercase leading-[1.02]">
              Start with the question you need answered
            </h2>
            <div className="flex flex-wrap gap-3.5">
              <Button href={APP_REGISTER_URL} variant="primary">
                Get Started
              </Button>
              <Button href="/products" variant="outline-light">
                Explore Products
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
