import { ArrowDown, ArrowRight, CircleCheck } from "lucide-react";
import type { Contrast } from "@/lib/frameworks";

/** One side of the comparison. The Map's side is the dark card, so it reads as the answer. */
function Card({ side, accent }: { side: Contrast["left"]; accent: boolean }) {
  return (
    <div
      className={`flex flex-col p-[28px_22px] sm:p-[34px_32px] nav:row-span-3 nav:grid nav:grid-rows-subgrid ${
        accent ? "bg-ink text-white" : "border border-line-card bg-white"
      }`}
    >
      <h3
        className={`m-0 mb-6 font-display text-[clamp(21px,2vw,28px)] uppercase leading-[1.05] ${
          accent ? "text-yellow" : "text-ink"
        }`}
      >
        {side.caption}
      </h3>
      {/* A long list runs in two columns so the card doesn't tower over its pair. */}
      <ul
        className={`m-0 grid flex-1 list-none content-start gap-3 p-0 ${
          side.items.length > 10 ? "sm:grid-cols-2 sm:gap-x-6" : ""
        }`}
      >
        {side.items.map((it) => (
          <li
            key={it}
            className={`flex items-start gap-3 font-serif text-[17px] leading-[1.4] ${
              accent ? "text-white/90" : "text-muted-2"
            }`}
          >
            {accent ? (
              <CircleCheck aria-hidden="true" className="mt-[3px] h-[18px] w-[18px] shrink-0 text-yellow" strokeWidth={2} />
            ) : (
              <span aria-hidden="true" className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-ink/25" />
            )}
            {it}
          </li>
        ))}
      </ul>
      {side.note && (
        <p
          className={`m-0 mt-8 border-t pt-6 font-sans text-[17px] font-semibold leading-[1.4] ${
            accent ? "border-white/15 text-white" : "border-line text-ink"
          }`}
        >
          {side.note}
        </p>
      )}
    </div>
  );
}

/**
 * "Why … matters": what students usually weigh, set against what the Map
 * weighs, as a before → after pair of cards. From `nav` both cards share one
 * three-row grid (heading, list, closing line), so their dividers and closing
 * lines line up however the two sides wrap.
 */
export default function ContrastPanels({ contrast: c, headingId }: { contrast: Contrast; headingId?: string }) {
  const { outro } = c;
  return (
    <div>
      <h2
        id={headingId}
        className="m-0 mb-3 max-w-[28ch] font-display text-[clamp(26px,2.8vw,40px)] leading-[1.02] uppercase"
      >
        {c.heading}
      </h2>
      <p className="m-0 mb-11 max-w-[62ch] font-serif text-[18px] leading-[1.55] text-muted-2">{c.intro}</p>

      <div className="grid gap-4 nav:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] nav:grid-rows-[auto_1fr_auto] nav:gap-x-6 nav:gap-y-0">
        <Card side={c.left} accent={false} />
        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center self-center justify-self-center rounded-full bg-yellow text-ink nav:row-span-3"
        >
          <ArrowDown className="h-5 w-5 nav:hidden" strokeWidth={2.25} />
          <ArrowRight className="hidden h-5 w-5 nav:block" strokeWidth={2.25} />
        </span>
        <Card side={c.right} accent />
      </div>

      {outro && (
        <div className="mt-12 text-center">
          {outro.lines.map((line) => (
            <p key={line} className="m-0 font-serif text-[clamp(18px,1.8vw,21px)] leading-[1.5] text-ink">
              {line}
            </p>
          ))}
          <p className="m-0 mt-8 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-ochre">
            {outro.flowLabel}
          </p>
          <ol className="m-0 mt-3.5 flex list-none flex-wrap items-center justify-center gap-2 p-0">
            {outro.flow.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="bg-ink px-3.5 py-2 font-display text-[15px] uppercase tracking-[0.06em] text-yellow">
                  {step}
                </span>
                {i < outro.flow.length - 1 && (
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-ochre" strokeWidth={2.25} />
                )}
              </li>
            ))}
          </ol>
          <p className="m-0 mx-auto mt-8 max-w-[40ch] font-display text-[clamp(20px,2vw,26px)] uppercase leading-[1.15] text-ink">
            {outro.close}
          </p>
        </div>
      )}
    </div>
  );
}
