import FrameworkIcon from "@/components/ui/FrameworkIcon";
import type { Pillar } from "@/lib/frameworks";

/**
 * Icon + title + body grid. Replaces the feature strips that used to be
 * rendered as pixels along the bottom of the hero composites.
 */
export default function PillarGrid({
  items,
  tone = "light",
  minColumn = 220,
  maxColumns,
  className = "",
}: {
  items: Pillar[];
  tone?: "light" | "dark";
  minColumn?: number;
  /** Cap the column count, e.g. 3 so six items wrap into two even rows. */
  maxColumns?: number;
  className?: string;
}) {
  const dark = tone === "dark";
  // Each column is at least 1/maxColumns of the row (less the 2rem gaps), so
  // auto-fit can never place more than maxColumns side by side.
  const min = maxColumns
    ? `max(${minColumn}px, calc((100% - ${maxColumns - 1} * 2rem) / ${maxColumns}))`
    : `${minColumn}px`;
  return (
    <ul
      className={`m-0 grid list-none gap-x-8 gap-y-7 p-0 ${className}`}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))` }}
    >
      {items.map((p) => (
        <li key={p.title}>
          <span
            aria-hidden="true"
            className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full border ${
              dark ? "border-yellow/60 bg-white/5" : "border-ochre/35 bg-white"
            }`}
          >
            <FrameworkIcon
              name={p.icon}
              className={`h-[22px] w-[22px] ${dark ? "text-yellow" : "text-ochre"}`}
            />
          </span>
          <h3
            className={`m-0 mb-1.5 font-sans text-[17px] font-semibold leading-[1.25] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {p.title}
          </h3>
          <p
            className={`m-0 font-serif text-[16px] leading-[1.5] ${
              dark ? "text-[#C9C9C9]" : "text-muted-2"
            }`}
          >
            {p.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
