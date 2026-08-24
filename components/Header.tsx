"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { PRODUCTS, productHref } from "@/lib/products";
import { MOBILE_LINKS, APP_LOGIN_URL, APP_REGISTER_URL } from "@/lib/site-content";

const NAV_LINK = "font-sans text-sm font-semibold uppercase tracking-[0.08em] whitespace-nowrap";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-6 py-3.5">
        <Link href="/" aria-label="DEWS Mentora home" className="flex flex-none items-center gap-3">
          <Image
            src="/images/logo-mark.png"
            alt="DEWS Mentora"
            width={52}
            height={52}
            priority
            className="h-[52px] w-[52px] flex-none rounded-full"
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
          <a href={APP_LOGIN_URL} className={`${NAV_LINK} text-muted`}>
            Login
          </a>
          <a
            href={APP_REGISTER_URL}
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-yellow px-[26px] py-[15px] font-sans text-sm font-bold text-ink hover:bg-yellow-hover"
          >
            Get Started <span aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          className="ml-auto block rounded-full bg-ink px-5 py-[13px] font-sans text-[13px] font-bold tracking-[0.08em] text-white nav:hidden"
        >
          MENU
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white nav:hidden"
          >
            <div className="grid gap-3.5 px-6 pb-[26px] pt-[18px]">
              {MOBILE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[15px] font-semibold uppercase tracking-[0.06em]"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-1.5 flex flex-wrap gap-3">
                <a href={APP_LOGIN_URL} className="rounded-full border-[1.5px] border-ink px-[22px] py-[13px] font-sans text-sm font-bold">
                  Login
                </a>
                <a href={APP_REGISTER_URL} className="rounded-full bg-yellow px-[22px] py-[13px] font-sans text-sm font-bold">
                  Get Started →
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
