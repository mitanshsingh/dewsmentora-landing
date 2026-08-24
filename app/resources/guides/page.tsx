import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "In-depth guides on choosing a university, applying for a master's abroad, choosing a career, and the paperwork required to study in the USA.",
  alternates: { canonical: "/resources/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Guides" }]} />
            <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">Guides</h1>
            <p className="m-0 max-w-[60ch] font-serif text-[18px] leading-[1.55]">
              Working documents you can use before, during and after an application cycle.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-11">
        <StaggerGrid className="mx-auto grid max-w-[1280px] gap-0.5">
          {GUIDES.map((g) => (
            <StaggerItem key={g.slug}>
              <Link
                href={`/resources/guides/${g.slug}`}
                className="grid gap-2.5 bg-[#EFEFEF] p-[32px_30px] transition-colors hover:bg-cream"
              >
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ochre">
                  {g.category} · {g.readTime}
                </span>
                <h2 className="m-0 font-display text-2xl uppercase leading-[1.1]">{g.title}</h2>
                <p className="m-0 max-w-[70ch] font-serif text-[17px] leading-[1.55] text-muted-2">{g.dek}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>
    </>
  );
}
