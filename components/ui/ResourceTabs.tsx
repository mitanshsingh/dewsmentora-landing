"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const RESOURCE_TABS = [
  { href: "/resources/blog", label: "Blogs" },
  { href: "/resources/guides", label: "Guides" },
  { href: "/resources/preparation", label: "Preparation" },
  { href: "/resources/faqs", label: "FAQs" },
];

/** The second navigation row shown across every /resources page. */
export default function ResourceTabs() {
  const pathname = usePathname();
  return (
    <nav aria-label="Resources" className="border-b border-line bg-white px-6">
      {/* Scrolls sideways on narrow phones rather than wrapping onto two lines. */}
      <ul className="m-0 mx-auto flex max-w-[1280px] list-none gap-7 overflow-x-auto p-0 nav:gap-10">
        {RESOURCE_TABS.map((t) => {
          const active = pathname === t.href || pathname.startsWith(`${t.href}/`);
          return (
            <li key={t.href} className="flex-none">
              <Link
                href={t.href}
                aria-current={active ? "page" : undefined}
                className={`block border-b-[3px] py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap ${
                  active ? "border-yellow text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
