import type { CSSProperties } from "react";
import { Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import StageTimeline from "@/components/ui/StageTimeline";
import FrameworkExtras from "@/components/ui/FrameworkExtras";
import AdmissionJourneyMap from "@/components/ui/AdmissionJourneyMap";
import ReportProcess from "@/components/ui/ReportProcess";
import ReceiveItem, { receiveKey } from "@/components/ui/ReceiveItem";
import { ADMISSION_JOURNEY, getFramework, getProcess, type Framework } from "@/lib/frameworks";
import { productHref, type Product } from "@/lib/products";

/**
 * One Map's process as an expandable block on /how-it-works.
 *
 * The summary wears the product's own card colours, as on the home page, so the
 * four closed blocks read as the four Maps at a glance. Opened, a Map with a
 * report process shows that ("How your … report is created"), which carries its
 * own outputs and final deliverables. Execution Mapping has none, so it shows
 * its four steps, the admission journey and what the aspirant receives.
 *
 * A native `<details>` keeps this a server component and leaves the closed
 * content in the HTML, so it is still indexed and still reached by
 * find-in-page. The group is named because StageTimeline's collapsible stages
 * use a plain `group`: an unnamed `group-open:` here would match those too.
 */
export default function ProductHowItWorks({ product }: { product: Product }) {
  const process = getProcess(product.slug);
  const framework = process ? undefined : getFramework(product.slug);
  const isJourney = framework === ADMISSION_JOURNEY;

  const contents = process
    ? [`${process.stages.length} stages`, process.final.heading]
    : [`${product.steps.length} steps`];
  if (framework) {
    contents.push(`${framework.stages.length}-stage ${isJourney ? "admission journey" : "framework"}`);
  }

  return (
    <details
      id={product.slug}
      className="disclosure group/map scroll-mt-24 border border-line-card bg-white"
      style={
        {
          "--map-bg": product.bg,
          "--map-fg": product.fg,
          "--map-btn-bg": product.btnBg,
          "--map-btn-fg": product.btnFg,
        } as CSSProperties
      }
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 bg-[var(--map-bg)] p-[20px_18px] text-[var(--map-fg)] sm:max-nav:gap-5 sm:max-nav:p-[26px_28px] nav:gap-8 nav:p-[34px_40px] [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="mb-2 block font-display text-[13px] uppercase tracking-[0.14em] opacity-75">
            {product.question}
          </span>
          <h3 className="m-0 font-display text-[clamp(26px,2.6vw,38px)] uppercase leading-[1.02]">{product.name}</h3>
          {/* The question already names the decision; on a phone the extra
              sentence would double each closed block's height. */}
          <span className="mt-2.5 hidden max-w-[62ch] font-serif text-[16px] leading-[1.5] opacity-85 sm:block nav:text-[18px]">
            {product.summary}
          </span>
          <span className="mt-3 block font-sans text-[12px] font-bold uppercase tracking-[0.14em] opacity-70">
            {contents.join(" · ")}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--map-btn-bg)] text-[var(--map-btn-fg)] transition-transform duration-300 group-open/map:rotate-45 nav:h-14 nav:w-14"
        >
          <Plus className="h-5 w-5 nav:h-6 nav:w-6" strokeWidth={2.25} />
        </span>
      </summary>

      <div className="p-[24px_16px_28px] sm:max-nav:p-[32px_28px_36px] nav:p-[44px_40px_48px]">
        {process ? (
          <ReportProcess process={process} />
        ) : (
          <>
            <ol
              className="m-0 grid list-none gap-x-[26px] gap-y-5 p-0 sm:gap-y-7"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {product.steps.map((s) => (
                <li
                  key={s.n}
                  className="grid grid-cols-[40px_1fr] content-start border-t-2 border-yellow pt-4 sm:block sm:pt-5"
                >
                  <p className="m-0 row-span-2 font-display text-[26px] leading-none text-yellow sm:mb-3 sm:text-[34px]">
                    {s.n}
                  </p>
                  <h4 className="m-0 mb-2 font-sans text-[17px] font-semibold leading-[1.3]">{s.t}</h4>
                  <p className="m-0 font-serif text-[16px] leading-[1.5] text-muted-2">{s.d}</p>
                </li>
              ))}
            </ol>

            {framework && (
              <div className="mt-12 border-t border-line pt-10 nav:mt-14 nav:pt-12">
                {isJourney ? (
                  <>
                    {/* The serpentine needs all six stages side by side; below
                    `nav` the vertical timeline carries the same content. */}
                    <AdmissionJourneyMap framework={framework} />
                    <div className="max-w-[1000px] nav:hidden">
                      <FrameworkTimeline framework={framework} />
                    </div>
                  </>
                ) : (
                  <div className="max-w-[1000px]">
                    <FrameworkTimeline framework={framework} />
                  </div>
                )}
              </div>
            )}
          </>
        )}

        <div className="mt-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-8 border-t border-line pt-10 nav:mt-14">
          {!process && (
            <div className="min-w-0 flex-[1_1_420px]">
              <h4 className="m-0 mb-4 font-display text-[clamp(19px,2vw,24px)] uppercase leading-[1.1]">
                What you receive
              </h4>
              <ul
                className="m-0 grid list-none gap-x-8 gap-y-2.5 p-0"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                }}
              >
                {product.receive.map((r) => (
                  <li key={receiveKey(r)} className="flex gap-2.5 font-serif text-[16px] leading-[1.45] text-muted-2">
                    <span aria-hidden="true" className="text-ochre">
                      ✓
                    </span>
                    <ReceiveItem item={r} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Button href={productHref(product)} variant="outline-dark" small>
            Explore {product.name}
          </Button>
        </div>
      </div>
    </details>
  );
}

/** The full framework as tap-to-open stages, so seven stages fit one screen. */
function FrameworkTimeline({ framework }: { framework: Framework }) {
  return (
    <>
      <h4 className="m-0 mb-2.5 font-display text-[clamp(22px,2.4vw,32px)] uppercase leading-[1.05]">
        {framework.heading}
      </h4>
      <p className="m-0 mb-7 max-w-[62ch] font-serif text-[17px] leading-[1.55] text-muted-2">{framework.intro}</p>
      <p className="m-0 mb-5 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-ochre">
        {framework.stages.length} stages — open any stage for detail
      </p>
      <StageTimeline stages={framework.stages} tone="light" collapsible headingLevel={5} />
      <FrameworkExtras framework={framework} tone="light" headingLevel={5} />
    </>
  );
}
