"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { APP_REGISTER_URL } from "@/lib/site-content";

// Matches the phone design: the bar slides in once the hero CTAs have scrolled
// away. It is hidden at `nav` and above, where the header keeps a visible CTA.
const SHOW_AFTER = 560;

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-warm-line bg-paper-warm/95 px-3.5 pb-3.5 pt-2.5 backdrop-blur-[10px] nav:hidden"
        >
          <div className="mx-auto flex max-w-[560px] gap-2">
            <a
              href={APP_REGISTER_URL}
              className="flex h-[50px] flex-1 items-center justify-center bg-gold font-sans text-[12.5px] font-semibold uppercase tracking-[0.12em] text-night"
            >
              Get started
            </a>
            <Link
              href="/products"
              className="flex h-[50px] flex-none items-center justify-center border border-warm-line-strong px-[18px] font-sans text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ink-warm"
            >
              Maps
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
