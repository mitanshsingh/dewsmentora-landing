import { CircleCheck } from "lucide-react";
import FrameworkIcon from "@/components/ui/FrameworkIcon";
import HighlightedLine from "@/components/ui/HighlightedLine";
import type { DirectionStakes as Stakes } from "@/lib/frameworks";

/**
 * "The cost of a wrong direction isn't only money." The owner's Identity
 * Mapping banner, rebuilt as markup.
 */
export default function DirectionStakes({ stakes: s }: { stakes: Stakes }) {
  return (
    <div>
      <h2
        id="direction-stakes"
        className="m-0 mb-10 max-w-[24ch] font-display text-[clamp(30px,3.6vw,52px)] uppercase leading-[1]"
      >
        <HighlightedLine line={s.heading} />
      </h2>

      <ul className="m-0 flex list-none flex-wrap gap-y-6 p-0">
        {s.costs.map((c) => (
          <li
            key={c.label}
            className="flex w-1/3 flex-col items-center gap-2.5 sm:w-auto sm:border-l sm:border-line-strong sm:px-8 sm:first:border-l-0 sm:first:pl-0"
          >
            <FrameworkIcon name={c.icon} className="h-8 w-8 text-ochre" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-ink sm:text-[12px] sm:tracking-[0.14em]">
              {c.label}
            </span>
          </li>
        ))}
      </ul>

      <ul className="m-0 mt-10 grid list-none gap-2.5 border-l-2 border-yellow p-0 pl-5">
        {s.limits.map((l) => (
          <li key={l} className="flex items-start gap-2.5 font-serif text-[17px] leading-[1.45] text-muted-2">
            <CircleCheck aria-hidden="true" className="mt-[3px] h-[18px] w-[18px] shrink-0 text-ochre" strokeWidth={1.75} />
            {l}
          </li>
        ))}
      </ul>

      <p className="m-0 mt-10 font-serif text-[clamp(18px,1.8vw,21px)] leading-[1.4] text-ink">{s.lead}</p>
      <p className="m-0 mt-2 max-w-[30ch] font-display text-[clamp(26px,3vw,44px)] uppercase leading-[1.02]">
        <HighlightedLine line={s.close} />
      </p>
    </div>
  );
}
