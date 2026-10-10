"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";

/**
 * Vertical timeline rail that fills with yellow as the reader scrolls through
 * it. Drop it inside a `relative` list; it spans the list's full height and
 * measures its own position, so the list itself can stay a server component.
 */
export default function ScrollRail({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Fill tracks a reading line 60% down the viewport: a milestone's stretch of
  // rail turns yellow as that milestone reaches the middle of the screen.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });

  return (
    <span ref={ref} aria-hidden="true" className={`absolute w-[2px] bg-line-strong ${className}`}>
      <motion.span className="absolute inset-0 origin-top bg-yellow" style={{ scaleY: scrollYProgress }} />
    </span>
  );
}
