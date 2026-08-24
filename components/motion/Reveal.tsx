"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const MotionAside = motion.create("aside");

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "aside";
}) {
  const Comp = as === "aside" ? MotionAside : motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
