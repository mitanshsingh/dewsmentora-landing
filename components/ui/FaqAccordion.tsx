"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd } from "@/lib/structured-data";

export type FaqItem = { q: string; a: string };

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
                  <p className="m-0 -mt-1 pb-[18px] font-text text-[15px] leading-[1.62] text-ink-muted nav:mt-0 nav:max-w-[70ch] nav:pb-6 nav:font-serif nav:text-[18px] nav:leading-[1.6] nav:text-muted-2">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
