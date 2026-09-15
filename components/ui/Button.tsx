"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";

type Variant = "primary" | "outline-dark" | "outline-light" | "dark" | "custom";

const BASE =
  "inline-flex items-center gap-2.5 rounded-full font-sans text-[15px] font-bold leading-none transition-colors px-[30px] py-[18px]";

// `custom` opts out of the shared shape/size so a caller can style the button
// per breakpoint without fighting BASE for the same properties.
const CUSTOM_BASE = "inline-flex items-center transition-colors";

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
  disabled = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  small?: boolean;
  external?: boolean;
  disabled?: boolean;
}) {
  const sizing = small ? "px-6 py-3.5 text-sm" : "";
  const cls = (
    variant === "custom"
      ? `${CUSTOM_BASE} ${className}`
      : `${BASE} ${VARIANTS[variant]} ${sizing} ${className}`
  ).trim();

  // Not yet live: render inert text in place of a link so nothing is clickable.
  if (disabled) {
    return (
      <span
        className={`${cls} pointer-events-none cursor-not-allowed opacity-50 grayscale`}
        aria-disabled="true"
        role="button"
      >
        {children}
      </span>
    );
  }

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
