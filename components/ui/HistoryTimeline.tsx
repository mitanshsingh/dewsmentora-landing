import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ScrollRail from "@/components/motion/ScrollRail";
import FrameworkIcon from "@/components/ui/FrameworkIcon";
import type { HistoryMilestone } from "@/lib/site-content";

/**
 * The owner's history slide show, rebuilt from the slide images as one
 * vertical timeline you read by scrolling. Text baked into a 1379px image is
 * about 5px tall on a phone and invisible to search, so the copy lives in
 * `HISTORY` and only the content split follows the slides: the story, then
 * what that period added.
 *
 * Server-rendered; the only client pieces are the rail fill and the per-row
 * reveal. From `lg` up each year is sticky, so a long milestone keeps its year
 * — and the dot on the rail — in view while it is being read.
 */
export default function HistoryTimeline({ milestones }: { milestones: HistoryMilestone[] }) {
  return (
    <ol className="relative m-0 list-none p-0 pl-9 sm:pl-14">
      {/* Centred on the 16px dots: left 7px + 1px half-width = 8px. */}
      <ScrollRail className="top-3 bottom-0 left-[7px]" />
      {milestones.map((m, i) => {
        // Plain service lists collapse to wrapping tags on phones, where one
        // row per item ran the timeline to ~6 screens. Lists whose items carry
        // a description keep their rows, or the description would be lost.
        const tags = !m.items.some((item) => item.d);
        return (
          <li key={m.year} className={i === milestones.length - 1 ? "" : "pb-16 lg:pb-24"}>
            <Reveal className="grid gap-y-4 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-10">
              <div className="relative lg:sticky lg:top-28 lg:self-start">
                <span
                  aria-hidden="true"
                  className="absolute top-[13px] -left-9 h-4 w-4 rounded-full border-[3px] border-ink bg-yellow sm:-left-14 lg:top-[26px]"
                />
                <p className="m-0 font-display text-[48px] leading-[0.9] text-ink lg:text-[76px]">{m.year}</p>
              </div>

              <div className="grid gap-x-14 gap-y-7 lg:pt-2 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div>
                  <h3 className="m-0 font-display text-[clamp(26px,2.6vw,38px)] uppercase leading-[1.04]">{m.title}</h3>
                  {m.subtitle && (
                    <p className="m-0 mt-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ochre">
                      {m.subtitle}
                    </p>
                  )}
                  <div className="mt-4 grid max-w-[62ch] gap-3 font-serif text-[18px] leading-[1.55] text-muted-2">
                    {m.body.map((p) => (
                      <p key={p} className="m-0">
                        {p}
                      </p>
                    ))}
                  </div>
                  {m.note && (
                    <p className="m-0 mt-5 max-w-[58ch] border-l-[3px] border-yellow pl-4 font-serif text-[18px] leading-[1.5] text-ink">
                      {m.note}
                    </p>
                  )}
                </div>

                <div>
                  {m.listLabel && (
                    <p className="m-0 mb-4 inline-block rounded-full bg-yellow px-3.5 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-ink sm:tracking-[0.14em]">
                      {m.listLabel}
                    </p>
                  )}
                  {m.listIntro && (
                    <p className="m-0 mb-4 max-w-[52ch] font-serif text-[17px] leading-[1.5] text-muted-2">{m.listIntro}</p>
                  )}
                  <ul
                    className={`m-0 list-none p-0 ${
                      tags
                        ? "flex flex-wrap gap-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3.5 xl:grid-cols-1"
                        : "grid gap-x-6 gap-y-3.5 sm:grid-cols-2 xl:grid-cols-1"
                    }`}
                  >
                    {m.items.map((item) => (
                      <li
                        key={item.t}
                        className={
                          tags
                            ? "rounded-full border border-line-strong bg-white px-3 py-1.5 sm:flex sm:items-center sm:gap-3.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
                            : "flex items-start gap-3.5"
                        }
                      >
                        <span
                          aria-hidden="true"
                          // A tag has no room for the icon: with it, two tags no longer
                          // fit on a phone line and each takes a row of its own.
                          className={`h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow text-ink ${
                            tags ? "hidden sm:flex" : "flex"
                          }`}
                        >
                          <FrameworkIcon name={item.icon} className="h-[18px] w-[18px]" />
                        </span>
                        <span className="min-w-0">
                          <span
                            className={`block font-sans font-semibold leading-[1.3] text-ink ${
                              tags ? "text-[13px] sm:text-[15px]" : "text-[15px]"
                            }`}
                          >
                            {item.href ? (
                              <Link
                                href={item.href}
                                className="underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-ink"
                              >
                                {item.t}
                              </Link>
                            ) : (
                              item.t
                            )}
                          </span>
                          {item.d && (
                            <span className="mt-1 block font-serif text-[16px] leading-[1.45] text-muted-2">{item.d}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {m.listOutro && (
                    <p className="m-0 mt-5 max-w-[52ch] border-l-[3px] border-yellow pl-4 font-serif text-[17px] leading-[1.5] text-ink">
                      {m.listOutro}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
