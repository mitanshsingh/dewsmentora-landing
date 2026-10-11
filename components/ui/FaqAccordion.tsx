"use client";

import { useState } from "react";
import { motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, type FaqItem } from "@/lib/structured-data";

function FaqAnswer({ a }: { a: FaqItem["a"] }) {
  if (typeof a === "string") return <p>{a}</p>;
  return (
    <>
      {a.map((block, i) =>
        typeof block === "string" ? (
          <p key={i}>{block}</p>
        ) : (
          <ul key={i} className="list-disc pl-5 marker:text-ochre">
            {block.list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

/**
 * Closed answers stay in the HTML, collapsed and inert, so they are indexed and
 * not only present in the FAQPage structured data.
 *
 * By default one answer is open at a time. `expandAll` lets each question open
 * on its own and adds an Expand all / Collapse all control.
 */
export default function FaqAccordion({
  items,
  idPrefix,
  jsonLd = true,
  expandAll = false,
}: {
  items: FaqItem[];
  idPrefix: string;
  jsonLd?: boolean;
  expandAll?: boolean;
}) {
  const [openSet, setOpenSet] = useState<ReadonlySet<number>>(new Set());
  const allOpen = openSet.size === items.length;

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      if (!expandAll) return prev.has(i) ? new Set() : new Set([i]);
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <>
      {expandAll && (
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setOpenSet(allOpen ? new Set() : new Set(items.map((_, i) => i)))}
            className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-ink underline decoration-yellow decoration-2 underline-offset-[6px] hover:decoration-ink"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
      )}
      <div className="border-t border-line-strong">
        {jsonLd && <JsonLd data={faqPageJsonLd(items)} />}
        {items.map((item, i) => {
          const open = openSet.has(i);
          const panelId = `${idPrefix}-panel-${i}`;
          const buttonId = `${idPrefix}-button-${i}`;
          return (
            <div key={item.q} className="border-b border-line-strong">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex min-h-[56px] w-full items-center justify-between gap-3.5 py-4 text-left font-text text-[16px] font-medium leading-snug text-ink nav:min-h-0 nav:gap-[18px] nav:py-[22px] nav:font-sans nav:text-[18px] nav:font-semibold nav:leading-[1.35]"
              >
                {item.q}
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-none font-display text-[23px] leading-none text-yellow nav:text-[26px]"
                >
                  +
                </motion.span>
              </button>
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!open}
                initial={false}
                animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="-mt-1 space-y-3 pb-[18px] font-text text-[15px] leading-[1.62] text-muted-2 nav:mt-0 nav:max-w-[70ch] nav:pb-6 nav:font-serif nav:text-[18px] nav:leading-[1.6]">
                  <FaqAnswer a={item.a} />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}
