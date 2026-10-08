import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import LineText from "@/components/ui/LineText";
import SectionCta from "@/components/ui/SectionCta";
import { ProductPickerCard } from "@/components/ui/ProductLinkCard";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import PillarGrid from "@/components/ui/PillarGrid";
import ArtFigure from "@/components/ui/ArtFigure";
import Methodology from "@/components/ui/Methodology";
import ExecutionCost from "@/components/ui/ExecutionCost";
import { getProductVisual } from "@/lib/frameworks";
import { METHODOLOGY } from "@/lib/methodology";
import { PRODUCTS, getProduct, type ProductStep } from "@/lib/products";
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
  return {
    title: `${product.name} — ${product.question}`,
    description: product.tagline,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — ${product.question}`,
      description: product.tagline,
    },
  };
}

const H2 = "m-0 font-display text-[clamp(28px,2.8vw,40px)] uppercase leading-[1.02]";
const SHELL = "mx-auto max-w-[1280px]";

function Steps({ steps, tone }: { steps: ProductStep[]; tone: "dark" | "yellow" }) {
  const dark = tone === "dark";
  return (
    <StaggerGrid
      className="m-0 grid list-none gap-x-[26px] gap-y-10 p-0"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}
    >
      {steps.map((s) => (
        <StaggerItem key={s.n} className={`border-t-2 pt-5 ${dark ? "border-yellow" : "border-ink"}`}>
          <p className={`m-0 mb-3 font-display text-[34px] leading-none ${dark ? "text-yellow" : "text-ink"}`}>{s.n}</p>
          <h3 className="m-0 mb-3 font-sans text-[18px] font-semibold leading-[1.3]">{s.t}</h3>
          <LineText
            text={s.d}
            gap="gap-2.5"
            marker={dark ? "marker:text-yellow" : "marker:text-ink"}
            className={`font-serif text-[16px] leading-[1.5] ${dark ? "text-[#C9C9C9]" : "text-ink/80"}`}
          />
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
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
  const methodology = METHODOLOGY[product.slug];
  // The headline's last word ("Mapping") is set in ochre, per the page design.
  const nameWords = product.name.split(" ");
  const nameLead = nameWords.slice(0, -1).join(" ");
  const nameTail = nameWords.at(-1);

  return (
    <article>
      <JsonLd
        data={serviceJsonLd({
          name: product.name,
          description: product.tagline,
          path: `/products/${product.slug}`,
        })}
      />

      {/* Column 1 — hero */}
      <section className="bg-[#EFEFEF] px-6 pb-14 pt-16">
        <div className={`${SHELL} grid items-center gap-12`} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]}
            />
            <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">
              {product.eyebrow ?? product.question}
            </p>
            <h1 className="m-0 mb-[22px] font-display text-[clamp(38px,5vw,74px)] uppercase leading-[0.92]">
              {nameLead} <span className="text-ochre">{nameTail}</span>
            </h1>
            <p className="m-0 mb-[30px] max-w-[56ch] font-serif text-[clamp(18px,1.9vw,22px)] leading-[1.5] text-[#2A2A2A]">
              {product.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href={APP_REGISTER_URL} variant="primary" disabled>
                Coming Soon
              </Button>
              <span className="border-l border-line-strong pl-3.5 font-sans text-[15px] font-semibold text-[#5A5A5A]">
                {product.price}
              </span>
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
                fade={!visual.hero.dark}
                surface="bg-[#EFEFEF]"
                sizes="(max-width: 1080px) 100vw, 620px"
                className="mx-auto w-full max-w-[620px]"
              />
            </Reveal>
          )}
        </div>
      </section>

      {visual?.banners && (
        <section aria-label={`${product.name} at a glance`} className="px-6 pt-16">
          <div className={`${SHELL} grid gap-6`}>
            {visual.banners.map((b) => (
              <Reveal key={b.src}>
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={b.width}
                  height={b.height}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="h-auto w-full"
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Column 2 — what it changes */}
      {visual?.pillars && (
        <section aria-labelledby="changes" className="px-6 pt-[88px]">
          <div className={SHELL}>
            <Reveal>
              <h2 id="changes" className={`${H2} mb-10 max-w-[28ch]`}>
                {visual.pillars.heading}
              </h2>
              <PillarGrid items={visual.pillars.items} minColumn={240} maxColumns={3} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Column 3 — what it does / who it's for */}
      <section className="px-6 py-[88px]">
        <div className={`${SHELL} grid gap-14`} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <Reveal>
            <h2 className={`${H2} mb-6`}>What it does</h2>
            <ul className="m-0 grid list-none gap-3.5 p-0">
              {product.what.map((w) => (
                <li key={w} className="border-l-2 border-yellow pl-5 font-serif text-[18px] leading-[1.55]">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`${H2} mb-6`}>Who it&apos;s for</h2>
            <ul className="m-0 grid list-none gap-3.5 p-0">
              {product.who.map((w) => (
                <li key={w} className="border-l-2 border-line-strong pl-5 font-serif text-[18px] leading-[1.55]">
                  {w}
                </li>
              ))}
            </ul>
            {product.whoNote && (
              <p className="m-0 mt-8 bg-cream p-[18px_22px] font-serif text-[18px] leading-[1.5]">{product.whoNote}</p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Column 4 — key benefits */}
      <section className="px-6 pb-[88px]">
        <div className={SHELL}>
          <Reveal>
            <h2 className={`${H2} mb-[34px]`}>Key benefits</h2>
          </Reveal>
          <StaggerGrid
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(max(240px, calc((100% - 3rem) / 3)), 1fr))" }}
          >
            {product.benefits.map((b) => (
              <StaggerItem key={b.t} className="bg-cream p-[30px_26px]">
                <h3 className="m-0 mb-2.5 font-sans text-[18px] font-semibold leading-[1.25]">{b.t}</h3>
                <p className="m-0 font-serif text-[17px] leading-[1.5] text-muted-2">{b.d}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Column 5 — how it works */}
      <section aria-labelledby="how" className="bg-ink px-6 py-[88px] text-white">
        <div className={SHELL}>
          <Reveal>
            <h2 id="how" className="m-0 mb-5 font-display text-[clamp(28px,3vw,44px)] uppercase leading-none">
              How {product.name}™ works
            </h2>
            {product.stepsIntro && (
              <p className="m-0 max-w-[70ch] font-serif text-[18px] leading-[1.55] text-[#C9C9C9]">{product.stepsIntro}</p>
            )}
          </Reveal>
          <div className="mt-12">
            <Steps steps={product.steps} tone="dark" />
          </div>
          {product.stepsOutro && (
            <Reveal>
              <p className="m-0 mt-14 border-t border-white/15 pt-8 font-display text-[clamp(20px,2.2vw,30px)] uppercase leading-[1.1] text-yellow">
                {product.stepsOutro}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* A distinct band for what follows the report, so the two phases read apart. */}
      {product.afterSteps && (
        <section aria-labelledby="after" className="bg-yellow px-6 py-[72px] text-ink">
          <div className={SHELL}>
            <Reveal>
              <h2 id="after" className="m-0 mb-12 font-display text-[clamp(26px,2.8vw,40px)] uppercase leading-none">
                {product.afterSteps.heading}
              </h2>
            </Reveal>
            <Steps steps={product.afterSteps.steps} tone="yellow" />
          </div>
        </section>
      )}

      {/* Column 6 — why it matters */}
      <section aria-labelledby="why" className="bg-cream px-6 py-[88px]">
        <div className={SHELL}>
          <Reveal>
            <h2 id="why" className={`${H2} mb-6`}>
              Why {product.name}™ matters
            </h2>
            <div className="mb-12 grid max-w-[70ch] gap-2">
              {product.why.intro.map((p, i) => (
                <p
                  key={p}
                  className={`m-0 font-serif leading-[1.5] ${i === 0 ? "text-[20px] text-ink" : "text-[18px] text-muted-2"}`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}>
            {[product.why.common, product.why.deeper].map((col, i) => {
              const deeper = i === 1;
              return (
                <Reveal key={col.heading} delay={i * 0.1}>
                  <div className={`h-full p-[28px_26px] ${deeper ? "bg-ink text-white" : "border border-line-strong bg-white"}`}>
                    <h3
                      className={`m-0 mb-5 font-sans text-[13px] font-bold uppercase tracking-[0.16em] ${deeper ? "text-yellow" : "text-muted"}`}
                    >
                      {col.heading}
                    </h3>
                    <ul className="m-0 mb-6 grid list-none gap-2.5 p-0">
                      {col.items.map((it) => (
                        <li
                          key={it}
                          className={`flex gap-2.5 font-serif text-[17px] leading-[1.4] ${deeper ? "text-white" : "text-muted-2"}`}
                        >
                          <span aria-hidden="true" className={`font-sans ${deeper ? "text-yellow" : "text-muted"}`}>
                            {deeper ? "✓" : "•"}
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                    <p
                      className={`m-0 border-t pt-4 font-serif text-[17px] italic leading-[1.45] ${deeper ? "border-white/20 text-[#E5E5E5]" : "border-line-strong text-ink"}`}
                    >
                      {col.note}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {product.why.outro && (
            <Reveal>
              <div className="mt-12 grid gap-3">
                <p className="m-0 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-ochre">
                  {product.why.outro[0]}
                </p>
                <p className="m-0 font-display text-[clamp(18px,2.4vw,32px)] uppercase leading-[1.1]">
                  {product.why.outro[1]}
                </p>
                <p className="m-0 font-serif text-[18px] leading-[1.5] text-muted-2">{product.why.outro[2]}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* How the report is created (Execution: cost, coupon and journey) */}
      {(methodology || product.slug === "execution-mapping") && (
        <section className="px-6 py-[88px]">
          <div className="mx-auto max-w-[1100px]">
            {methodology ? <Methodology data={methodology} process={visual?.process} /> : <ExecutionCost />}
          </div>
        </section>
      )}

      {/* Column 7 — what you receive */}
      <section aria-labelledby="receive" className="bg-[#EFEFEF] px-6 py-[88px]">
        <div className={SHELL}>
          <Reveal>
            <h2 id="receive" className={`${H2} mb-10`}>
              What you receive
            </h2>
          </Reveal>
          <StaggerGrid
            className="m-0 grid list-none gap-x-8 gap-y-7 p-0"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}
          >
            {product.receive.map((r) => (
              <StaggerItem key={r.t} className="flex gap-3">
                <span aria-hidden="true" className="font-sans text-[18px] text-ochre">
                  ✓
                </span>
                <div>
                  <h3 className="m-0 mb-1 font-sans text-[17px] font-semibold leading-[1.3]">{r.t}</h3>
                  <p className="m-0 font-serif text-[16.5px] leading-[1.5] text-muted-2">{r.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Reveal>
            <p className="m-0 mt-12 max-w-[60ch] border-l-[3px] border-yellow pl-5 font-serif text-[clamp(19px,1.9vw,23px)] leading-[1.45] text-ink">
              {product.receiveNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Column 8 — FAQ */}
      <section className="px-6 py-[88px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <h2 className={`${H2} mb-[26px]`}>Frequently asked questions about {product.name}™</h2>
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
        <div className={SHELL}>
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
