"use client";

import { useState } from "react";
import { motion } from "motion/react";
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
    <div className="border-t border-line-strong">
      {jsonLd && <JsonLd data={faqPageJsonLd(items)} />}
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <div key={item.q} className="border-b border-line-strong">
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-[18px] py-[22px] text-left font-sans text-[18px] font-semibold leading-[1.35] text-ink"
            >
              {item.q}
              <motion.span
                aria-hidden="true"
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[26px] leading-none text-yellow"
              >
                +
              </motion.span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[70ch] pb-6 font-serif text-[18px] leading-[1.6] text-muted-2">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
