import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles, working guides and answers to the questions aspirants and families ask most.",
  alternates: { canonical: "/resources" },
};

const TILES = [
  { href: "/resources/blog", label: "Blog", d: "Analysis and practical thinking on education decisions." },
  { href: "/resources/guides", label: "Guides", d: "Checklists and worksheets you can work through yourself." },
  { href: "/resources/faqs", label: "FAQs", d: "Answers about the platform, the Maps and the process." },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
            <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">Resources</h1>
            <p className="m-0 max-w-[62ch] font-serif text-[clamp(18px,1.8vw,21px)] leading-[1.55]">
              Articles, working guides and answers to the questions aspirants and families ask most.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-11">
        <StaggerGrid className="mx-auto grid max-w-[1280px] gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {TILES.map((t) => (
            <StaggerItem key={t.href}>
              <Link href={t.href} className="grid h-full gap-3 border border-line-card p-[38px_30px] hover:bg-cream">
                <span className="font-display text-[26px] uppercase leading-[1.05]">{t.label}</span>
                <span className="font-serif text-[17px] leading-[1.5] text-muted-2">{t.d}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>
    </>
  );
}
