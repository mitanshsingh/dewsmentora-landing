import FrameworkIcon from "@/components/ui/FrameworkIcon";
import type { FrameworkStage } from "@/lib/frameworks";

/**
 * Vertical stage timeline used in place of the text-in-image product figures.
 *
 * `tone` picks the palette: "dark" for the `bg-ink` product sections, "light"
 * for the default paper background.
 */
export default function StageTimeline({
  stages,
  tone = "dark",
}: {
  stages: FrameworkStage[];
  tone?: "light" | "dark";
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
        return (
          <li
            key={stage.n}
            className="relative grid grid-cols-[52px_1fr] gap-x-5 gap-y-0 pb-11 last:pb-0 sm:grid-cols-[64px_1fr] sm:gap-x-7"
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

            <div className="min-w-0 pt-1.5 sm:pt-3">
              <p
                className={`m-0 mb-1.5 font-sans text-[13px] font-bold tracking-[0.14em] uppercase ${eyebrow}`}
              >
                Stage {stage.n}
              </p>
              <h3
                className={`m-0 mb-4 font-display text-[clamp(20px,2vw,28px)] leading-[1.1] uppercase ${title}`}
              >
                {stage.title}
              </h3>
              <ul
                className="m-0 grid list-none gap-x-8 gap-y-2.5 p-0"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
              >
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className={`flex gap-2.5 font-serif text-[16px] leading-[1.45] ${body}`}
                  >
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
                      <p
                        className={`m-0 mb-1 font-sans text-[16px] font-semibold leading-[1.3] ${title}`}
                      >
                        {opt.title}
                      </p>
                      <p className={`m-0 font-serif text-[15px] leading-[1.45] ${body}`}>
                        {opt.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
