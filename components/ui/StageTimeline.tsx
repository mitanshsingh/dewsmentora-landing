import { ChevronDown } from "lucide-react";
import FrameworkIcon from "@/components/ui/FrameworkIcon";
import type { FrameworkStage } from "@/lib/frameworks";

/**
 * Vertical stage timeline used in place of the text-in-image product figures.
 *
 * `tone` picks the palette: "dark" for the `bg-ink` product sections, "light"
 * for the default paper background.
 *
 * `collapsible` folds each stage behind a native `<details>`. The admission
 * journey carries 38 checklist items across six stages, which is a 2,240px wall
 * on a phone — long enough that the stages after the second are never seen.
 * Collapsed, the six titles fit one screen and the reader chooses what to open.
 * `<details>` is used rather than state so this stays a server component: no
 * hydration, and it still works with JS unavailable.
 */
export default function StageTimeline({
  stages,
  tone = "dark",
  collapsible = false,
}: {
  stages: FrameworkStage[];
  tone?: "light" | "dark";
  collapsible?: boolean;
}) {
  const dark = tone === "dark";
  const rail = dark ? "bg-white/20" : "bg-line-strong";
  const nodeRing = dark ? "border-yellow bg-ink" : "border-ochre/40 bg-white";
  const nodeIcon = dark ? "text-yellow" : "text-ochre";
  const eyebrow = dark ? "text-yellow" : "text-ochre";
  const title = dark ? "text-white" : "text-ink";
  const body = dark ? "text-[#C9C9C9]" : "text-muted-2";
  const dot = dark ? "bg-yellow/60" : "bg-ochre/50";

  return (
    <ol className="m-0 grid list-none gap-0 p-0">
      {stages.map((stage, i) => {
        const isLast = i === stages.length - 1;

        const heading = (
          <>
            <p className={`m-0 mb-1.5 font-sans text-[13px] font-bold tracking-[0.14em] uppercase ${eyebrow}`}>
              Stage {stage.n}
            </p>
            <h3
              className={`m-0 font-display text-[clamp(20px,2vw,28px)] leading-[1.1] uppercase ${title}`}
            >
              {stage.title}
            </h3>
          </>
        );

        const detail = (
          <>
            <ul
              className="m-0 grid list-none gap-x-8 gap-y-2.5 p-0"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
            >
              {stage.items.map((item) => (
                <li key={item} className={`flex gap-2.5 font-serif text-[16px] leading-[1.45] ${body}`}>
                  <span
                    aria-hidden="true"
                    className={`mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full ${dot}`}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {stage.options && (
              <div
                className="mt-6 grid gap-4"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
              >
                {stage.options.map((opt) => (
                  <div
                    key={opt.label}
                    className={`border-l-2 pl-4 ${dark ? "border-yellow/50" : "border-ochre/40"}`}
                  >
                    <p
                      className={`m-0 mb-1 font-sans text-[12px] font-bold tracking-[0.14em] uppercase ${
                        dark ? "text-yellow/80" : "text-ochre"
                      }`}
                    >
                      {opt.label}
                    </p>
                    <p className={`m-0 mb-1 font-sans text-[16px] font-semibold leading-[1.3] ${title}`}>
                      {opt.title}
                    </p>
                    <p className={`m-0 font-serif text-[15px] leading-[1.45] ${body}`}>{opt.body}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        );

        return (
          <li
            key={stage.n}
            className={`relative grid grid-cols-[52px_1fr] gap-x-5 gap-y-0 sm:grid-cols-[64px_1fr] sm:gap-x-7 ${
              collapsible ? "pb-5 last:pb-0" : "pb-11 last:pb-0"
            }`}
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className={`absolute top-[60px] bottom-0 left-[25px] w-px sm:top-[72px] sm:left-[31px] ${rail}`}
              />
            )}

            <span
              aria-hidden="true"
              className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 sm:h-16 sm:w-16 ${nodeRing}`}
            >
              <FrameworkIcon name={stage.icon} className={`h-6 w-6 sm:h-7 sm:w-7 ${nodeIcon}`} />
            </span>

            {collapsible ? (
              <details className="group min-w-0" open={i === 0}>
                <summary
                  className="flex cursor-pointer list-none items-start gap-3 py-1.5 [&::-webkit-details-marker]:hidden"
                  aria-label={`Stage ${stage.n}: ${stage.title}`}
                >
                  <span className="min-w-0 flex-1">
                    {heading}
                    <span
                      className={`mt-1.5 block font-sans text-[13px] leading-[1.3] group-[[open]]:hidden ${body}`}
                    >
                      {stage.items.length} steps
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`mt-3 h-5 w-5 shrink-0 transition-transform duration-200 group-[[open]]:rotate-180 ${nodeIcon}`}
                  />
                </summary>
                <div className="pt-3 pb-2">{detail}</div>
              </details>
            ) : (
              <div className="min-w-0 pt-1.5 sm:pt-3">
                <div className="mb-4">{heading}</div>
                {detail}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
