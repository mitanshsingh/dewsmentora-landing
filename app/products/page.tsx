import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { ProductListingCard } from "@/components/ui/ProductLinkCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — The four Maps",
  description:
    "DEWSMENTORA uses specialised Maps to evaluate different stages of an aspirant's education and admission journey. Start with the question you need answered.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — The four Maps",
    description:
      "DEWSMENTORA uses specialised Maps to evaluate different stages of an aspirant's education and admission journey.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="px-6 pb-6 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
            <h1 className="m-0 mb-[22px] font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">
              The four Maps
            </h1>
            <p className="m-0 max-w-[62ch] font-serif text-[clamp(18px,1.8vw,21px)] leading-[1.55]">
              DEWSMENTORA uses specialised Maps to evaluate different stages of an aspirant&apos;s education and
              admission journey. Start with the question you need answered.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-10">
        <StaggerGrid className="mx-auto grid max-w-[1280px] gap-7" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.slug}>
              <ProductListingCard product={p} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>
    </>
  );
}
