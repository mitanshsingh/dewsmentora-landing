import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/motion/Reveal";
import { HOME_FAQS } from "@/lib/site-content";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers about DEWS Mentora's four Maps, study abroad decision support, pricing and how to get started.",
  alternates: { canonical: "/resources/faqs" },
};

const ALL_FAQS = [...HOME_FAQS, ...PRODUCTS[1].faqs, ...PRODUCTS[3].faqs];

export default function FaqsPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "FAQs" }]} />
            <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">FAQs</h1>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <FaqAccordion items={ALL_FAQS} idPrefix="all-faqs" />
            <p className="m-0 mt-[30px] font-serif text-[17px] leading-[1.5]">
              Still unanswered?{" "}
              <Link href="/contact" className="border-b-[1.5px] border-yellow">
                Contact us
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
