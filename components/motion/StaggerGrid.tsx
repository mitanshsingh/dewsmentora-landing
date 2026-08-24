"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerGrid({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div className={className} style={style} variants={item}>
      {children}
    </motion.div>
  );
}
