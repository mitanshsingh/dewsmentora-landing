import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import FrameworkIcon from "@/components/ui/FrameworkIcon";
import HighlightedLine, { MARKER } from "@/components/ui/HighlightedLine";
import type { SignalsBanner as Banner } from "@/lib/frameworks";

/**
 * The owner's product banners ("Good at something doesn't automatically mean
 * built for it", "Your journey. Our execution."), rebuilt as markup so their
 * argument is indexed and stays legible on a phone. The top row is either
 * "this ≠ that" pairs or numbered steps.
 */
export default function SignalsBanner({ banner: b }: { banner: Banner }) {
  const { pairs, steps } = b;
  const [firstLine, markedLine] = b.signals.heading;
  return (
    <div>
      <p className="m-0 mb-4 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-ochre">
        {b.label} <span aria-hidden="true">·</span> {b.kicker}
      </p>
      <h2
        id="signals-banner"
        className="m-0 mb-12 max-w-[24ch] font-display text-[clamp(30px,3.6vw,52px)] uppercase leading-[1]"
      >
        <HighlightedLine line={b.heading} />
      </h2>

      {pairs && (
        <ul
          className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-9 p-0 nav:grid-cols-[repeat(var(--pairs),minmax(0,1fr))] nav:gap-0"
          style={{ "--pairs": pairs.length } as CSSProperties}
        >
          {pairs.map((p) => (
            <li
              key={p.is}
              className="flex flex-col items-center text-center nav:border-l nav:border-line-strong nav:px-5 nav:first:border-l-0"
            >
              <span
                aria-hidden="true"
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-ink"
              >
                <FrameworkIcon name={p.icon} className="h-[26px] w-[26px]" />
              </span>
              <span className="font-sans text-[16px] font-semibold leading-[1.3] text-ink">{p.is}</span>
              <span className="my-1 font-sans text-[26px] leading-none text-ochre">≠</span>
              <span className="font-sans text-[15px] leading-[1.35] text-muted-2">{p.isNot}</span>
            </li>
          ))}
        </ul>
      )}

      {steps && (
        <ol
          className="m-0 grid list-none gap-y-7 p-0 sm:gap-x-6 sm:gap-y-10 sm:max-nav:grid-cols-3 nav:grid-cols-[repeat(var(--steps),minmax(0,1fr))]"
          style={{ "--steps": steps.length } as CSSProperties}
        >
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[56px_minmax(0,1fr)] gap-x-4 sm:flex sm:flex-col sm:items-center sm:text-center"
            >
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-ink"
              >
                <FrameworkIcon name={step.icon} className="h-[26px] w-[26px]" />
              </span>
              <span>
                <span className="block font-sans text-[12px] font-bold tracking-[0.14em] text-ochre sm:mt-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 block font-sans text-[16px] font-semibold leading-[1.3] text-ink">
                  {step.title}
                </span>
                <span className="mt-1 block font-sans text-[14px] leading-[1.45] text-muted-2">{step.body}</span>
              </span>
              {i < steps.length - 1 && (
                <ChevronRight
                  aria-hidden="true"
                  className="absolute right-[-20px] top-5 hidden h-4 w-4 text-ochre nav:block"
                  strokeWidth={2.25}
                />
              )}
            </li>
          ))}
        </ol>
      )}

      <div className="mt-14 bg-[#EFEFEF] p-[28px_22px] sm:p-[40px_44px]">
        <div className="grid gap-x-12 gap-y-7 nav:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <h3 className="m-0 border-l-4 border-yellow pl-5 font-display text-[clamp(22px,2.2vw,30px)] uppercase leading-[1.18]">
            <span className="block">{firstLine}</span>{" "}
            <span className={MARKER}>{markedLine}</span>
          </h3>
          <ul className="m-0 grid list-none gap-x-8 gap-y-3 p-0 sm:grid-flow-col sm:grid-rows-3">
            {b.signals.items.map((item) => (
              <li key={item} className="flex items-start gap-2 font-serif text-[17px] leading-[1.45] text-muted-2">
                <ChevronRight aria-hidden="true" className="mt-[3px] h-4 w-4 shrink-0 text-ochre" strokeWidth={2.25} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
          <p className="m-0 flex max-w-[780px] items-center gap-4 rounded-[36px] border border-line-strong bg-white p-2 pr-7 font-sans text-[16px] leading-[1.4] text-ink sm:text-[18px]">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow text-ink sm:h-14 sm:w-14"
            >
              <FrameworkIcon name={b.summaryIcon} className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            {b.summary}
          </p>
          <figure className="m-0">
            <blockquote className="m-0 flex gap-3 font-serif text-[clamp(20px,1.9vw,24px)] leading-[1.3] text-ink">
              <span aria-hidden="true" className="font-display text-[44px] leading-[0.8] text-yellow">
                “
              </span>
              <p className="m-0 max-w-[26ch]">{b.quote}</p>
            </blockquote>
            <figcaption className="mt-2 pl-[34px] font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
              DEWS Mentora
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
