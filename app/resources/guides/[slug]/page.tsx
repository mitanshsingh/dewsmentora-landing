import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionCta from "@/components/ui/SectionCta";
import JsonLd from "@/components/JsonLd";
import GuideBody from "@/components/guide/GuideBody";
import Reveal from "@/components/motion/Reveal";
import { GUIDES, getGuide } from "@/lib/guides";
import { articleJsonLd, howToJsonLd } from "@/lib/structured-data";
import { openGraph } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/resources/guides/${guide.slug}` },
    openGraph: openGraph({
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
      path: `/resources/guides/${guide.slug}`,
      publishedTime: guide.publishedISO,
      modifiedTime: guide.updatedISO,
    }),
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const otherGuides = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <article>
      <JsonLd
        data={articleJsonLd({
          headline: guide.title,
          description: guide.metaDescription,
          path: `/resources/guides/${guide.slug}`,
          datePublished: guide.publishedISO,
          dateModified: guide.updatedISO,
        })}
      />
      {guide.howToSteps && (
        <JsonLd
          data={howToJsonLd({
            name: guide.title,
            description: guide.metaDescription,
            steps: guide.howToSteps,
          })}
        />
      )}

      <section className="px-6 pb-10 pt-16">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Guides", href: "/resources/guides" },
                { label: guide.title },
              ]}
            />
            <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">
              {guide.eyebrow}
            </p>
            <h1 className="m-0 mb-[18px] font-display text-[clamp(34px,4.4vw,60px)] uppercase leading-[0.95]">
              {guide.title}
            </h1>
            <p className="m-0 mb-6 max-w-[68ch] font-serif text-[clamp(18px,1.8vw,21px)] leading-[1.55] text-[#2A2A2A]">
              {guide.dek}
            </p>
            <p className="m-0 font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
              {guide.category} · {guide.readTime} · {guide.updatedDisplay}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-[72px]">
        <Reveal className="mx-auto max-w-[820px]">
          <GuideBody sections={guide.sections} />
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h2 className="m-0 mb-[26px] font-display text-[clamp(26px,2.6vw,36px)] uppercase leading-[1.05]">
              Frequently asked questions
            </h2>
            <FaqAccordion items={guide.faqs} idPrefix={`guide-${guide.slug}`} />
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <SectionCta
            heading="Turn this into a structured next step"
            tone="yellow"
            secondary={{ label: guide.relatedProduct.label, href: guide.relatedProduct.href }}
          />
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="m-0 mb-6 font-sans text-[15px] font-semibold uppercase tracking-[0.16em] text-muted">
            More guides
          </h2>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/resources/guides/${g.slug}`}
                className="border border-line-card p-[26px_22px] transition-colors hover:bg-cream"
              >
                <span className="block font-display text-[13px] uppercase tracking-[0.14em] text-ochre">
                  {g.category}
                </span>
                <span className="mt-1.5 block font-display text-[20px] uppercase leading-[1.1]">{g.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
