import { ArrowDown, ArrowRight } from "lucide-react";
import FrameworkIcon from "@/components/ui/FrameworkIcon";
import HighlightedLine from "@/components/ui/HighlightedLine";
import type { DecisionFlow as Flow } from "@/lib/frameworks";

function Arrow() {
  return (
    <span aria-hidden="true" className="flex items-center justify-center text-ochre">
      <ArrowDown className="h-7 w-7 nav:hidden" strokeWidth={1.75} />
      <ArrowRight className="hidden h-8 w-8 nav:block" strokeWidth={1.75} />
    </span>
  );
}

/**
 * "From a complex world to a clear decision": the owner's UIM infographic,
 * rebuilt as markup. What goes in, how it is mapped, and what the report
 * holds, left to right from `nav` and top to bottom below it.
 */
export default function DecisionFlow({ flow: f }: { flow: Flow }) {
  return (
    <div>
      <p className="m-0 mb-4 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-ochre">{f.label}</p>
      <h2
        id="decision-flow"
        className="m-0 mb-12 max-w-[20ch] font-display text-[clamp(30px,3.6vw,52px)] uppercase leading-[1]"
      >
        <HighlightedLine line={f.heading} />
      </h2>

      <div className="grid gap-6 nav:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] nav:items-center nav:gap-5">
        <div>
          <h3 className="m-0 mb-4 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            {f.inputs.heading}
          </h3>
          <ul className="m-0 grid list-none gap-2.5 p-0">
            {f.inputs.items.map((it) => (
              <li key={it.title} className="flex items-start gap-3.5 border border-line-card bg-white p-[14px_16px]">
                <FrameworkIcon name={it.icon} className="mt-0.5 h-[22px] w-[22px] shrink-0 text-ochre" />
                <span>
                  <span className="block font-sans text-[16px] font-semibold leading-[1.25] text-ink">{it.title}</span>
                  <span className="block font-sans text-[13px] leading-[1.4] text-muted">{it.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Arrow />

        <div className="text-center">
          <h3 className="m-0 mb-5 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
            {f.mapping.heading}
          </h3>
          <ul className="m-0 mb-6 flex list-none flex-wrap justify-center gap-x-3 gap-y-4 p-0">
            {f.mapping.actions.map((a) => (
              <li key={a.label} className="flex flex-col items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ochre/35 bg-white"
                >
                  <FrameworkIcon name={a.icon} className="h-[22px] w-[22px] text-ochre" />
                </span>
                <span className="whitespace-nowrap font-sans text-[10.5px] font-bold uppercase tracking-[0.06em] text-ink">
                  {a.label}
                </span>
              </li>
            ))}
          </ul>
          {/* Widening bars, as in the artwork's stack of layers. */}
          <ol className="m-0 grid list-none justify-items-center gap-1.5 p-0">
            {f.mapping.layers.map((layer, i) => (
              <li
                key={layer}
                className="bg-[#EFEFEF] py-2.5 font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-ink"
                style={{ width: `${72 + i * 7}%` }}
              >
                {layer}
              </li>
            ))}
          </ol>
        </div>

        <Arrow />

        <div className="bg-ink p-[26px_24px] text-white">
          <h3 className="m-0 font-display text-[clamp(22px,2.2vw,30px)] uppercase leading-[1.05]">{f.output.heading}</h3>
          <p className="m-0 mb-5 mt-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-yellow">
            {f.output.tagline}
          </p>
          <ul className="m-0 grid list-none gap-0 p-0">
            {f.output.items.map((it) => (
              <li
                key={it.title}
                className="flex items-center gap-3 border-t border-white/15 py-2.5 font-sans text-[15px] leading-[1.3]"
              >
                <FrameworkIcon name={it.icon} className="h-5 w-5 shrink-0 text-yellow" />
                {it.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
