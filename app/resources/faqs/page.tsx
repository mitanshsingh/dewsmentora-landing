import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { HOME_FAQS } from "@/lib/site-content";
import { PRODUCTS } from "@/lib/products";
import { faqPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers about DEWS Mentora, each of the four Maps, and how the process works.",
  alternates: { canonical: "/resources/faqs" },
};

const GROUPS = [
  { id: "general", title: "About DEWS Mentora", items: HOME_FAQS },
  ...PRODUCTS.map((p) => ({ id: p.slug, title: `${p.name}™`, items: p.faqs })),
];

export default function FaqsPage() {
  return (
    <>
      {/* One FAQPage for the whole page; the accordions skip their own. */}
      <JsonLd data={faqPageJsonLd(GROUPS.flatMap((g) => g.items))} />
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "FAQs" }]} />
            <h1 className="m-0 mb-6 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">FAQs</h1>
            <nav aria-label="FAQ topics">
              <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                {GROUPS.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="inline-block rounded-full border border-line-strong px-4 py-2 font-sans text-[14px] font-semibold hover:border-ink"
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-10">
        <div className="mx-auto grid max-w-[1000px] gap-16">
          {GROUPS.map((g) => (
            <Reveal key={g.id}>
              <h2
                id={g.id}
                className="m-0 mb-5 scroll-mt-28 font-display text-[clamp(26px,2.8vw,38px)] uppercase leading-[1.02]"
              >
                {g.title}
              </h2>
              <FaqAccordion items={g.items} idPrefix={`faq-${g.id}`} jsonLd={false} />
            </Reveal>
          ))}
          <p className="m-0 font-serif text-[17px] leading-[1.5]">
            Still unanswered?{" "}
            <Link href="/contact" className="border-b-[1.5px] border-yellow">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
