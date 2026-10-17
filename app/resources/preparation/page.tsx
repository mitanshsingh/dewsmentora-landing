import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { formatFileSize } from "@/lib/guide-downloads";
import { getPrepGroups } from "@/lib/prep-material";

// Picks up sections and PDFs changed in the app hourly; keep in step with
// PREP_REVALIDATE_SECONDS (this has to be a literal for Next to read it).
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const groups = await getPrepGroups();
  const hasMaterial = groups.some((g) => g.sections.some((s) => s.materials.length > 0));
  return {
    title: "Preparation",
    description: "Preparation material for IELTS, TOEFL, PTE Academic, GRE, GMAT and SAT.",
    alternates: { canonical: "/resources/preparation" },
    // While every card still reads "coming soon", keep this placeholder out of
    // search results.
    ...(hasMaterial ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function PreparationPage() {
  const groups = await getPrepGroups();

  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Preparation" }]}
            />
            <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">Preparation</h1>
            <p className="m-0 max-w-[60ch] font-serif text-[18px] leading-[1.55]">
              Study material for the English-proficiency and admissions tests most programs ask for. Material for each
              test will appear here as it is published.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-11">
        <div className="mx-auto grid max-w-[1280px] gap-14">
          {groups.map((group) => (
            <div key={group.title}>
              <Reveal>
                <h2 className="m-0 mb-6 font-display text-[clamp(24px,2.4vw,32px)] uppercase leading-none">
                  {group.title}
                </h2>
              </Reveal>
              <StaggerGrid
                className="grid gap-6"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}
              >
                {group.sections.map((s) => (
                  <StaggerItem
                    key={s.slug}
                    id={s.slug}
                    className="grid scroll-mt-24 content-start gap-3 border border-line-card p-[34px_30px]"
                  >
                    <h3 className="m-0 font-display text-[28px] uppercase leading-none">{s.title}</h3>
                    {s.description && <p className="m-0 font-serif text-[17px] leading-[1.5] text-muted-2">{s.description}</p>}
                    {s.materials.length === 0 ? (
                      <span className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ochre">
                        Material coming soon
                      </span>
                    ) : (
                      <>
                        <span className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ochre">
                          {s.materials.length} {s.materials.length === 1 ? "PDF" : "PDFs"}
                        </span>
                        <ul className="m-0 grid list-none border-t border-line-card p-0">
                          {s.materials.map((m) => (
                            <li key={m.slug} className="grid gap-1.5 border-b border-line-card py-4">
                              <span className="font-sans text-[15px] font-semibold leading-snug">{m.title}</span>
                              {m.description && (
                                <span className="font-serif text-[16px] leading-[1.45] text-muted-2">{m.description}</span>
                              )}
                              <span className="font-sans text-xs uppercase tracking-[0.1em] text-muted-2">
                                {m.sizeBytes ? `PDF · ${formatFileSize(m.sizeBytes)}` : "PDF"}
                              </span>
                              <span className="mt-1 flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm font-semibold">
                                <a href={m.downloadHref} className="border-b-[1.5px] border-yellow">
                                  Download
                                </a>
                                <a
                                  href={m.viewHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="border-b-[1.5px] border-yellow"
                                >
                                  Open in browser
                                </a>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          ))}
          <p className="m-0 font-serif text-[17px] leading-[1.5]">
            Preparing for a test not listed here?{" "}
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
