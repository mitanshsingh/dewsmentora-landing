import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";

// No preparation content exists yet: keep this page out of search results
// (and out of the sitemap) until it does.
export const metadata: Metadata = {
  title: "Preparation",
  description: "Preparation resources for aspirants and families are on the way.",
  alternates: { canonical: "/resources/preparation" },
  robots: { index: false, follow: true },
};

export default function PreparationPage() {
  return (
    <section className="px-6 pb-24 pt-[72px]">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Preparation" }]}
          />
          <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">Coming soon</p>
          <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">Preparation</h1>
          <p className="m-0 mb-8 max-w-[60ch] font-serif text-[clamp(18px,1.8vw,21px)] leading-[1.55]">
            Preparation resources for aspirants and families are on the way. In the meantime, our guides cover the
            decisions and paperwork you can start on now.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-serif text-[18px]">
            <Link href="/resources/guides" className="border-b-[1.5px] border-yellow">
              Browse the guides
            </Link>
            <Link href="/contact" className="border-b-[1.5px] border-yellow">
              Ask us a question
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
