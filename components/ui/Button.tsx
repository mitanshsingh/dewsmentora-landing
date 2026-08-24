"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";

type Variant = "primary" | "outline-dark" | "outline-light" | "dark" | "custom";

const BASE =
  "inline-flex items-center gap-2.5 rounded-full font-sans text-[15px] font-bold leading-none transition-colors px-[30px] py-[18px]";

const VARIANTS: Record<Exclude<Variant, "custom">, string> = {
  primary: "bg-yellow text-ink hover:bg-yellow-hover",
  "outline-dark": "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border-[1.5px] border-white text-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-white hover:bg-black",
};

const MotionLink = motion.create(Link);

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
  small = false,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  small?: boolean;
  external?: boolean;
}) {
  const sizing = small ? "px-6 py-3.5 text-sm" : "";
  const cls = `${BASE} ${variant === "custom" ? "" : VARIANTS[variant]} ${sizing} ${className}`.trim();
  const isExternal = external ?? href.startsWith("http");
  const tap = { scale: 0.97 };
  const hover = { scale: 1.03 };

  if (isExternal) {
    return (
      <motion.a href={href} className={cls} whileHover={hover} whileTap={tap}>
        {children}
        {arrow && <span aria-hidden="true">→</span>}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={cls} whileHover={hover} whileTap={tap}>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </MotionLink>
  );
}
