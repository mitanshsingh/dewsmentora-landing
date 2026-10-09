"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
          <ul key={i} className="list-disc pl-5 marker:text-gold">
            {block.list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

export default function FaqAccordion({
  items,
  idPrefix,
  jsonLd = true,
}: {
  items: FaqItem[];
  idPrefix: string;
  jsonLd?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-warm-line-mid nav:border-line-strong">
      {jsonLd && <JsonLd data={faqPageJsonLd(items)} />}
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <div key={item.q} className="border-b border-warm-line-mid nav:border-line-strong">
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex min-h-[56px] w-full items-center justify-between gap-3.5 py-4 text-left font-text text-[16px] font-medium leading-snug text-ink-warm nav:min-h-0 nav:gap-[18px] nav:py-[22px] nav:font-sans nav:text-[18px] nav:font-semibold nav:leading-[1.35] nav:text-ink"
            >
              {item.q}
              <span
                aria-hidden="true"
                className="flex-none font-sans text-[19px] leading-none text-gold-deep nav:hidden"
              >
                {open ? "−" : "+"}
              </span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="hidden flex-none font-display text-[26px] leading-none text-yellow nav:block"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="-mt-1 space-y-3 pb-[18px] font-text text-[15px] leading-[1.62] text-ink-muted nav:mt-0 nav:max-w-[70ch] nav:pb-6 nav:font-serif nav:text-[18px] nav:leading-[1.6] nav:text-muted-2">
                    <FaqAnswer a={item.a} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
