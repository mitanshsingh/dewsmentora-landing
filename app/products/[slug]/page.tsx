import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionCta from "@/components/ui/SectionCta";
import { ProductPickerCard } from "@/components/ui/ProductLinkCard";
import JsonLd from "@/components/JsonLd";
import MappingJourneyPanel from "@/components/MappingJourneyPanel";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { PRODUCTS, getProduct } from "@/lib/products";
import { APP_REGISTER_URL } from "@/lib/site-content";
import { productJsonLd } from "@/lib/structured-data";
import { openGraph } from "@/lib/seo";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

const META_DESCRIPTIONS: Record<string, string> = {
  "identity-mapping":
    "Identity Mapping evaluates strengths, thinking patterns and direction before an Indian student commits to a stream, course or career — structured, not another career test.",
  "university-intelligence-mapping":
    "University Intelligence Mapping evaluates course, career, cost, location and outcomes before you choose a university abroad — for Rs. 3,999, not rankings alone.",
  "story-mapping":
    "Story Mapping turns achievements, experience and goals into one coherent application narrative for master's, MBA and undergraduate applications abroad — Rs. 12,999.",
  "execution-mapping":
    "Execution Mapping manages applications, documents, deadlines and visa paperwork for study abroad admissions end to end — from Rs. 2,500.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const description = META_DESCRIPTIONS[product.slug] ?? product.tagline;
  return {
    title: `${product.name}: ${product.question}`,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: openGraph({
      title: `${product.name}: ${product.question}`,
      description,
      path: `/products/${product.slug}`,
    }),
  };
}

const IMAGE_DIMS: Record<string, { hero: [number, number]; figure: [number, number] }> = {
  "identity-mapping": { hero: [1699, 926], figure: [1744, 902] },
  "university-intelligence-mapping": { hero: [1774, 887], figure: [1942, 809] },
  "story-mapping": { hero: [1774, 887], figure: [1942, 809] },
  "execution-mapping": { hero: [1774, 887], figure: [1536, 1024] },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const otherProducts = PRODUCTS.filter((p) => p.slug !== product.slug);
  const dims = IMAGE_DIMS[product.slug];

  return (
    <article>
      <JsonLd data={productJsonLd(product)} />
      <section className="bg-[#EFEFEF] px-6 pb-14 pt-16">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]}
            />
            <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">{product.question}</p>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(38px,5vw,74px)] uppercase leading-[0.92]">{product.name}</h1>
            <p className="m-0 mb-[30px] max-w-[56ch] font-serif text-[clamp(18px,1.9vw,22px)] leading-[1.5] text-[#2A2A2A]">
              {product.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href={APP_REGISTER_URL} variant="primary">
                Get Started
              </Button>
              <span className="font-sans text-[15px] font-semibold text-[#5A5A5A]">{product.price}</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            {product.slug === "identity-mapping" ? (
              <MappingJourneyPanel />
            ) : (
              <Image
                src={product.hero}
                alt={product.heroAlt}
                width={dims.hero[0]}
                height={dims.hero[1]}
                priority
                sizes="(min-width: 1080px) 600px, 100vw"
                className="w-full h-auto bg-white"
              />
            )}
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-[88px]">
        <div className="mx-auto grid max-w-[1280px] gap-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <Reveal>
            <h2 className="m-0 mb-5 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">What it does</h2>
            <ul className="m-0 grid list-none gap-3.5 p-0">
              {product.what.map((w) => (
                <li key={w} className="border-l-2 border-yellow pl-5 font-serif text-[18px] leading-[1.55]">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="m-0 mb-5 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">Who it&apos;s for</h2>
            <ul className="m-0 grid list-none gap-3.5 p-0">
              {product.who.map((w) => (
                <li key={w} className="border-l-2 border-line-strong pl-5 font-serif text-[18px] leading-[1.55]">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="m-0 mb-[34px] font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">Key benefits</h2>
          </Reveal>
          <StaggerGrid className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {product.benefits.map((b) => (
              <StaggerItem key={b.t} className="bg-cream p-[30px_26px]">
                <h3 className="m-0 mb-2.5 font-sans text-[18px] font-semibold leading-[1.25]">{b.t}</h3>
                <p className="m-0 font-serif text-[17px] leading-[1.5] text-muted-2">{b.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-ink px-6 py-[88px] text-white">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="m-0 mb-10 font-display text-[clamp(28px,3vw,44px)] uppercase leading-none">
              How {product.name} works
            </h2>
          </Reveal>
          <StaggerGrid
            className="m-0 mb-12 grid list-none gap-[26px] p-0"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
          >
            {product.steps.map((s) => (
              <StaggerItem key={s.n} className="border-t-2 border-yellow pt-5">
                <p className="m-0 mb-3 font-display text-[34px] leading-none text-yellow">{s.n}</p>
                <h3 className="m-0 mb-2 font-sans text-[17px] font-semibold leading-[1.3]">{s.t}</h3>
                <p className="m-0 font-serif text-[16px] leading-[1.5] text-[#C9C9C9]">{s.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Reveal delay={0.1}>
            <figure className="m-0">
              <Image
                src={product.figure}
                alt={product.figureAlt}
                width={dims.figure[0]}
                height={dims.figure[1]}
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="w-full h-auto bg-white"
              />
              <figcaption className="mt-3.5 font-sans text-sm leading-[1.5] text-[#9A9A9A]">{product.figureAlt}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-[88px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <h2 className="m-0 mb-7 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">What you receive</h2>
            <ul className="m-0 grid list-none gap-3.5 p-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {product.receive.map((r) => (
                <li key={r} className="flex gap-3 font-serif text-[18px] leading-[1.5]">
                  <span aria-hidden="true" className="text-ochre">
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-[88px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <h2 className="m-0 mb-[26px] font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">FAQ</h2>
            <FaqAccordion items={product.faqs} idPrefix={`product-${product.slug}`} />
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <SectionCta heading="Start with the question you need answered" tone="yellow" />
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="m-0 mb-6 font-sans text-[15px] font-semibold uppercase tracking-[0.16em] text-muted">Other Maps</h2>
          <StaggerGrid className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {otherProducts.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductPickerCard product={p} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </article>
  );
}
