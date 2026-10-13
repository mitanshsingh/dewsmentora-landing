import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionCta from "@/components/ui/SectionCta";
import { ProductPickerCard } from "@/components/ui/ProductLinkCard";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import PillarGrid from "@/components/ui/PillarGrid";
import ContrastPanels from "@/components/ui/ContrastPanels";
import SignalsBanner from "@/components/ui/SignalsBanner";
import DecisionFlow from "@/components/ui/DecisionFlow";
import DirectionStakes from "@/components/ui/DirectionStakes";
import ReceiveItem, { receiveKey } from "@/components/ui/ReceiveItem";
import ArtFigure from "@/components/ui/ArtFigure";
import CostNote from "@/components/ui/CostNote";
import { getProductVisual } from "@/lib/frameworks";
import { PRODUCTS, getProduct } from "@/lib/products";
import { APP_REGISTER_URL } from "@/lib/site-content";
import { serviceJsonLd } from "@/lib/structured-data";

// Only the slugs from generateStaticParams exist. Without this, every unknown
// slug (bot probes, typos) is rendered on demand and its 404 is written to the
// Vercel ISR cache, which burned through the plan's ISR write quota.
export const dynamicParams = false;


export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = product.seo?.title ?? `${product.name} — ${product.question}`;
  const description = product.seo?.description ?? product.tagline;
  return {
    title,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title, description },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const otherProducts = PRODUCTS.filter((p) => p.slug !== product.slug);
  const visual = getProductVisual(product.slug);
  // Every block sits in its own band, alternating white and cream, so no two
  // neighbours run together. Below the dark steps block the order is counted
  // back from the cream FAQ: What you receive is white, and when a Map adds a
  // stakes or flow block (cream) the contrast above it moves to white.
  const extraBlock = Boolean(visual?.stakes || visual?.flow);

  return (
    <article>
      <JsonLd
        data={serviceJsonLd({
          name: product.name,
          description: product.seo?.description ?? product.tagline,
          path: `/products/${product.slug}`,
        })}
      />
      <section className="bg-[#EFEFEF] px-6 pb-14 pt-16">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]}
            />
            <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">{product.eyebrow ?? product.question}</p>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(38px,5vw,74px)] uppercase leading-[0.92]">{product.name}</h1>
            <p className="m-0 mb-[30px] max-w-[56ch] font-serif text-[clamp(18px,1.9vw,22px)] leading-[1.5] text-[#2A2A2A]">
              {product.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href={APP_REGISTER_URL} variant="primary" disabled>
                Coming Soon
              </Button>
              <span className="font-sans text-[15px] font-semibold text-[#5A5A5A]">{product.price}</span>
            </div>
          </Reveal>
          {visual?.hero && (
            <Reveal delay={0.15}>
              <ArtFigure
                src={visual.hero.src}
                alt={visual.hero.alt}
                width={visual.hero.width}
                height={visual.hero.height}
                priority
                blend={!visual.hero.dark}
                fade={!visual.hero.dark && visual.hero.fade !== false}
                surface="bg-[#EFEFEF]"
                sizes="(max-width: 1080px) 100vw, 520px"
                className="mx-auto w-full max-w-[520px]"
              />
            </Reveal>
          )}
        </div>
      </section>

      {visual?.signals && (
        <section aria-labelledby="signals-banner" className="px-6 py-[88px]">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <SignalsBanner banner={visual.signals} />
            </Reveal>
          </div>
        </section>
      )}

      {visual?.pillars && (
        <section aria-labelledby="pillars" className="bg-cream px-6 py-[88px]">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              {visual.pillars.heading && (
                <h2
                  id="pillars"
                  className="m-0 mb-9 max-w-[28ch] font-display text-[clamp(26px,2.8vw,40px)] uppercase leading-[1.02]"
                >
                  {visual.pillars.heading}
                </h2>
              )}
              <PillarGrid items={visual.pillars.items} minColumn={230} maxColumns={visual.pillars.maxColumns} />
            </Reveal>
          </div>
        </section>
      )}

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

      <section className="bg-cream px-6 py-[88px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="m-0 mb-[34px] font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">Key benefits</h2>
          </Reveal>
          <StaggerGrid
            className="grid gap-6"
            style={{
              // Six benefits sit as two rows of three rather than four and two:
              // a track can't be narrower than a third of the row (less the 24px
              // gaps), and it still wraps by 240px on narrower screens.
              gridTemplateColumns: `repeat(auto-fit, minmax(${
                product.benefits.length % 3 === 0 ? "max(240px, calc((100% - 48px) / 3))" : "240px"
              }, 1fr))`,
            }}
          >
            {product.benefits.map((b) => (
              <StaggerItem key={b.t} className="bg-white p-[30px_26px]">
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
            className="m-0 grid list-none gap-[26px] p-0"
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
          <Reveal className="mt-12">
            <Button href={`/how-it-works#${product.slug}`} variant="outline-light">
              See how {product.name} works in detail
            </Button>
          </Reveal>
        </div>
      </section>

      {visual?.contrast && (
        <section aria-labelledby="why-it-matters" className={`px-6 py-[88px] ${extraBlock ? "" : "bg-cream"}`}>
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <ContrastPanels contrast={visual.contrast} headingId="why-it-matters" />
            </Reveal>
          </div>
        </section>
      )}

      {visual?.stakes && (
        <section aria-labelledby="direction-stakes" className="bg-cream px-6 py-[88px]">
          <div className="mx-auto max-w-[1000px]">
            <Reveal>
              <DirectionStakes stakes={visual.stakes} />
            </Reveal>
          </div>
        </section>
      )}

      {visual?.flow && (
        <section aria-labelledby="decision-flow" className="bg-cream px-6 py-[88px]">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <DecisionFlow flow={visual.flow} />
            </Reveal>
          </div>
        </section>
      )}

      <section className="px-6 py-[88px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <h2 className="m-0 mb-7 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-none">What you receive</h2>
            <ul
              className="m-0 grid list-none gap-3.5 p-0"
              style={{
                // Named deliverables carry a sentence each, so give them wider columns.
                gridTemplateColumns: `repeat(auto-fit, minmax(${
                  product.receive.some((r) => typeof r !== "string") ? "min(100%, 400px)" : "280px"
                }, 1fr))`,
              }}
            >
              {product.receive.map((r) => (
                <li key={receiveKey(r)} className="flex gap-3 font-serif text-[18px] leading-[1.5]">
                  <span aria-hidden="true" className="text-ochre">
                    ✓
                  </span>
                  <ReceiveItem item={r} />
                </li>
              ))}
            </ul>
            {product.receiveNote && (
              <p className="m-0 mt-9 max-w-[62ch] border-l-2 border-yellow pl-5 font-serif text-[19px] leading-[1.5] text-ink">
                {product.receiveNote}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {product.costNote && (
        <section className="px-6 pb-[88px]">
          <div className="mx-auto max-w-[1000px]">
            <Reveal>
              <CostNote note={product.costNote} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Its own band, so the FAQ reads as a separate part of the page. */}
      <section aria-labelledby="faq" className="bg-cream px-6 py-[88px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <h2
              id="faq"
              className="m-0 mb-[26px] max-w-[30ch] font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-[1.02]"
            >
              {product.faqHeading ?? "FAQ"}
            </h2>
            <FaqAccordion items={product.faqs} idPrefix={`product-${product.slug}`} expandAll />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <Reveal>
          <SectionCta heading="Start with the question you need answered" tone="yellow" />
        </Reveal>
      </section>

      <section className="bg-[#EFEFEF] px-6 py-24">
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
