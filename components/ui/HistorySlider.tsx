"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { HISTORY } from "@/lib/history";

/**
 * "History of DEWS" slideshow. The track is a native horizontal scroll with
 * snap points, so it swipes on touch and scrolls on trackpads with no gesture
 * code; the year tabs and arrows just scroll it. No autoplay.
 */
export default function HistorySlider() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  // Slide a button/key is scrolling to. Until the track arrives there, scroll
  // events pass intermediate slides and must not move the active year.
  const target = useRef<number | null>(null);
  const last = HISTORY.length - 1;

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(last, i));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Already there: no scroll event will come to clear the target.
    target.current = Math.abs(el.scrollLeft - next * el.clientWidth) > 2 ? next : null;
    el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
    setIndex(next);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  const arrow =
    "flex h-12 w-12 flex-none items-center justify-center rounded-full bg-yellow font-sans text-[20px] text-ink transition-opacity disabled:cursor-default disabled:opacity-30";

  return (
    <div aria-roledescription="carousel" aria-label="History of DEWS">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <ol className="m-0 flex list-none flex-wrap gap-x-1 gap-y-2 p-0">
          {HISTORY.map((s, i) => (
            <li key={s.year}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === index ? "step" : undefined}
                aria-label={`${s.year}: ${s.title}`}
                className={`rounded-full px-3.5 py-1.5 font-sans text-[14px] font-bold tracking-[0.04em] ${
                  i === index ? "bg-ink text-yellow" : "text-muted hover:text-ink"
                }`}
              >
                {s.year}
              </button>
            </li>
          ))}
        </ol>
        <div className="flex gap-2.5">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous" className={arrow}>
            ←
          </button>
          <button type="button" onClick={() => go(index + 1)} disabled={index === last} aria-label="Next" className={arrow}>
            →
          </button>
        </div>
      </div>

      <div
        ref={track}
        tabIndex={0}
        onKeyDown={onKeyDown}
        // A swipe or wheel takes over from any jump in progress.
        onPointerDown={() => (target.current = null)}
        onWheel={() => (target.current = null)}
        onScroll={(e) => {
          const el = e.currentTarget;
          const at = Math.round(el.scrollLeft / el.clientWidth);
          if (target.current !== null) {
            if (Math.abs(el.scrollLeft - target.current * el.clientWidth) > 2) return;
            target.current = null;
          }
          setIndex(at);
        }}
        aria-label="History slides; use the left and right arrow keys to move between years"
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {HISTORY.map((s, i) => (
          <article
            key={s.year}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${HISTORY.length}: ${s.year}`}
            // Off-screen slides stay readable to search, but not to the tab order.
            inert={i !== index}
            className="w-full flex-none snap-start"
          >
            <div className="grid h-full content-start gap-x-12 gap-y-8 border border-line-strong bg-white p-[28px_22px] nav:grid-cols-[1.1fr_1fr] nav:p-[48px_52px]">
              <div>
                <p className="m-0 mb-3 font-display text-[clamp(56px,8vw,104px)] leading-[0.9] text-yellow">{s.year}</p>
                <div aria-hidden="true" className="mb-5 h-0.5 w-24 bg-ink" />
                <h3 className="m-0 font-display text-[clamp(24px,2.6vw,36px)] uppercase leading-[1.02]">{s.title}</h3>
                {s.subtitle && (
                  <p className="m-0 mt-1.5 font-sans text-[18px] font-semibold leading-[1.3] text-ink">{s.subtitle}</p>
                )}
                <div className="mt-5 grid gap-3">
                  {s.body.map((p) => (
                    <p key={p} className="m-0 font-serif text-[17px] leading-[1.55] text-muted-2">
                      {p}
                    </p>
                  ))}
                </div>
                {s.emphasis && (
                  <p className="m-0 mt-5 border-t border-yellow pt-4 font-sans text-[16px] font-semibold leading-[1.45] text-ink">
                    {s.emphasis}
                  </p>
                )}
              </div>
              <div className="nav:border-l nav:border-line-strong nav:pl-12">
                {/* Short labels sit in a pill; 2025's full-sentence lead-in reads as prose. */}
                {s.listHeading &&
                  (s.listHeading.length <= 40 ? (
                    <p className="m-0 mb-4 inline-block rounded-full bg-yellow px-3.5 py-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-ink">
                      {s.listHeading}
                    </p>
                  ) : (
                    <p className="m-0 mb-3 font-serif text-[17px] leading-[1.5] text-ink">{s.listHeading}:</p>
                  ))}
                <ul className="m-0 grid list-none gap-0 p-0">
                  {s.items.map((it) => (
                    <li key={it.t} className="border-b border-dashed border-line-strong py-3 last:border-b-0">
                      <span className="block font-sans text-[16px] font-semibold leading-[1.3] text-ink">{it.t}</span>
                      {it.d && <span className="mt-0.5 block font-serif text-[15.5px] leading-[1.45] text-muted-2">{it.d}</span>}
                    </li>
                  ))}
                </ul>
                {s.after && <p className="m-0 mt-5 font-serif text-[16.5px] leading-[1.5] text-ink">{s.after}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
