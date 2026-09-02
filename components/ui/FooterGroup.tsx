"use client";

import { useState } from "react";
import Link from "next/link";

export type FooterLink = { label: string; href: string };

const LINK_CLASS =
  "block py-[9px] font-text text-[15px] text-[#BDBAB0] nav:inline nav:py-0 nav:font-sans nav:leading-[1.3] nav:text-[#D9D9D9] nav:hover:text-white";

function FooterLinkItem({ href, label }: FooterLink) {
  if (href.startsWith("http")) {
    return (
      <a href={href} className={LINK_CLASS}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={LINK_CLASS}>
      {label}
    </Link>
  );
}

// Collapsible on phones per the design; a plain link column from `nav` up,
// where the list is always visible and the toggle is removed.
export default function FooterGroup({
  id,
  title,
  links,
}: {
  id: string;
  title: string;
  links: FooterLink[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = `footer-${id}`;

  return (
    <nav aria-label={title} className="border-t border-night-line nav:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex min-h-[50px] w-full items-center justify-between py-3.5 font-sans text-[11.5px] font-semibold uppercase tracking-[0.18em] text-night-fg nav:hidden"
      >
        <span>{title}</span>
        <span aria-hidden="true" className="text-[18px] leading-none text-gold-bright">
          {open ? "−" : "+"}
        </span>
      </button>
      <p className="m-0 mb-4 hidden font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-yellow nav:block">
        {title}
      </p>
      <ul
        id={panelId}
        className={`m-0 list-none gap-0.5 p-0 pb-4 ${open ? "grid" : "hidden"} nav:grid nav:gap-[11px] nav:pb-0`}
      >
        {links.map((l) => (
          <li key={l.label}>
            <FooterLinkItem href={l.href} label={l.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
