import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { GUIDES } from "@/lib/guides";
import { formatFileSize, formatUpdated, getGuideDownloads } from "@/lib/guide-downloads";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "In-depth guides on choosing a university, applying for a master's abroad, choosing a career, and the paperwork required to study in the USA.",
  alternates: { canonical: "/resources/guides" },
};

// Refreshed on demand when a guide changes (see app/api/revalidate/guides), and
// hourly as a fallback; keep in step with GUIDES_REVALIDATE_SECONDS (this has
// to be a literal for Next to read it).
export const revalidate = 3600;

export default async function GuidesPage() {
  const downloads = await getGuideDownloads();

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
      {downloads.length > 0 && (
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <h2 className="m-0 mb-3 font-display text-[clamp(26px,2.6vw,36px)] uppercase leading-[1.05]">
                Downloadable guides
              </h2>
              <p className="m-0 mb-8 max-w-[60ch] font-serif text-[18px] leading-[1.55]">
                PDFs you can read in the browser or save to work through offline.
              </p>
            </Reveal>
            <StaggerGrid className="grid gap-0.5">
              {downloads.map((g) => {
                const meta = [
                  g.category,
                  g.sizeBytes ? `PDF · ${formatFileSize(g.sizeBytes)}` : "PDF",
                  formatUpdated(g.updatedISO),
                ].filter(Boolean);
                return (
                  <StaggerItem key={g.slug} className="grid gap-2.5 bg-[#EFEFEF] p-[32px_30px]">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ochre">
                      {meta.join(" · ")}
                    </span>
                    <h3 className="m-0 font-display text-2xl uppercase leading-[1.1]">{g.title}</h3>
                    {g.description && (
                      <p className="m-0 max-w-[70ch] font-serif text-[17px] leading-[1.55] text-muted-2">
                        {g.description}
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-3">
                      <Button href={g.downloadHref} small>
                        Download PDF
                      </Button>
                      <Button href={g.viewHref} variant="outline-dark" small arrow={false} newTab>
                        Open in browser
                      </Button>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGrid>
          </div>
        </section>
      )}
    </>
  );
}
