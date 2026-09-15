"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { PRODUCTS, productHref } from "@/lib/products";
import { PHONE_NAV_LINKS } from "@/lib/site-content";

const NAV_LINK = "font-sans text-sm font-semibold uppercase tracking-[0.08em] whitespace-nowrap";

// The phone panel lists each Map by name, then the rest of the site nav.
const PHONE_LINKS = [
  ...PRODUCTS.map((p) => ({ label: p.name, href: productHref(p) })),
  ...PHONE_NAV_LINKS,
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock the page behind the phone menu and let Escape dismiss it.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-100 border-b border-warm-line-soft bg-paper-warm/92 backdrop-blur-[10px] nav:border-line nav:bg-white nav:backdrop-blur-none">
      <div className="mx-auto flex h-[58px] max-w-[1280px] items-center gap-6 px-[18px] nav:h-auto nav:px-6 nav:py-3.5">
        <Link href="/" aria-label="DEWS Mentora home" className="flex flex-none items-center gap-3">
          <span className="flex items-baseline gap-[7px] nav:hidden">
            <span className="font-sans text-[15px] font-bold uppercase tracking-[0.14em] text-ink-warm">
              DEWS
            </span>
            <span className="font-headline text-[15px] tracking-[0.02em] text-[#5E5B4F]">Mentora</span>
          </span>
          <Image
            src="/images/logo-mark.png"
            alt="DEWS Mentora"
            width={52}
            height={52}
            loading="eager"
            className="hidden h-[52px] w-[52px] flex-none rounded-full nav:block"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="ml-auto hidden flex-wrap items-center justify-end gap-x-[clamp(18px,2vw,34px)] gap-y-2 nav:flex"
        >
          <div className="group relative">
            <Link href="/products" aria-haspopup="true" className={NAV_LINK}>
              Products ▾
            </Link>
            <div className="invisible absolute left-[-20px] top-[26px] z-10 grid w-80 gap-0.5 border border-line bg-white p-2.5 opacity-0 shadow-[0_24px_48px_rgba(0,0,0,0.12)] transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {PRODUCTS.map((p) => (
                <Link
                  key={p.slug}
                  href={productHref(p)}
                  className="grid gap-[3px] rounded-md p-[12px_14px] hover:bg-cream"
                >
                  <span className="font-sans text-[14px] font-semibold leading-[1.2]">{p.name}</span>
                  <span className="font-sans text-[12.5px] leading-[1.3] text-muted">{p.question}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/study-abroad" className={NAV_LINK}>
            Study Abroad
          </Link>
          <Link href="/how-it-works" className={NAV_LINK}>
            How It Works
          </Link>
          <Link href="/for-students" className={NAV_LINK}>
            For Students
          </Link>
          <Link href="/resources" className={NAV_LINK}>
            Resources
          </Link>
          <Link href="/about" className={NAV_LINK}>
            About
          </Link>
          <span
            className="inline-flex cursor-not-allowed items-center gap-2.5 whitespace-nowrap rounded-full bg-yellow px-[26px] py-[15px] font-sans text-sm font-bold text-ink opacity-50 grayscale"
            aria-disabled="true"
            role="button"
          >
            Coming Soon
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="phone-menu"
          className="-mr-3 ml-auto flex h-[46px] w-[46px] flex-col items-end justify-center gap-[5px] nav:hidden"
        >
          <span aria-hidden="true" className="block h-[1.5px] w-[22px] bg-ink-warm" />
          <span aria-hidden="true" className="block h-[1.5px] w-4 bg-ink-warm" />
        </button>
      </div>

      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise become
          the containing block for this fixed panel and clip it to 58px. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="phone-menu"
            aria-label="Mobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[110] w-full max-w-[430px] overflow-y-auto bg-night shadow-[-18px_0_40px_rgba(0,0,0,0.28)] nav:hidden"
          >
            <div className="flex h-[58px] items-center justify-between border-b border-night-line px-[18px]">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C88F1E]">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="-mr-3 flex h-[46px] w-[46px] items-center justify-center text-[26px] leading-none text-night-fg"
              >
                ×
              </button>
            </div>
            <div className="px-[18px] pb-7 pt-2.5">
              {PHONE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-night-line-soft py-[17px] font-headline text-[21px] text-[#F4F2EC]"
                >
                  <span>{l.label}</span>
                  <span aria-hidden="true" className="text-[15px] text-[#8C8878]">
                    →
                  </span>
                </Link>
              ))}
              <span
                className="mt-[26px] flex h-[52px] cursor-not-allowed items-center justify-center bg-gold font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-night opacity-50 grayscale"
                aria-disabled="true"
                role="button"
              >
                Coming Soon
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
