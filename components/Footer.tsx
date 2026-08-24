import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, productHref } from "@/lib/products";
import { COUNTRIES } from "@/lib/study-destinations";
import { APP_LOGIN_URL, APP_REGISTER_URL } from "@/lib/site-content";

const FOOTER_COLS = [
  {
    title: "Products",
    links: PRODUCTS.map((p) => ({ label: p.name, href: productHref(p) })),
  },
  {
    title: "Study Abroad",
    links: [
      { label: "Study Abroad Guide", href: "/study-abroad" },
      ...COUNTRIES.map((c) => ({ label: `Study in ${c.flagLabel}`, href: `/study-abroad/${c.slug}` })),
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "For Students", href: "/for-students" },
      { label: "Resources", href: "/resources" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Contact", href: "/contact" },
      { label: "Login", href: APP_LOGIN_URL },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const className = "font-sans text-[15px] leading-[1.3] text-[#D9D9D9] hover:text-white";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-9 pt-[72px] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-11" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))" }}>
        <div>
          <div className="mb-3.5 flex items-center gap-3">
            <Image src="/images/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9 flex-none rounded-full" />
            <p className="m-0 font-display text-[26px] uppercase leading-none">DEWS Mentora</p>
          </div>
          <p className="m-0 mb-[22px] max-w-[34ch] font-serif text-[17px] leading-[1.55] text-[#BDBDBD]">
            Structured evaluation for high-stakes education and career decisions. Four Maps, one question at a time.
          </p>
          <a
            href={APP_REGISTER_URL}
            className="inline-flex items-center gap-2.5 rounded-full bg-yellow px-[26px] py-[15px] font-sans text-sm font-bold text-ink hover:bg-yellow-hover"
          >
            Get Started <span aria-hidden="true">→</span>
          </a>
        </div>
        {FOOTER_COLS.map((col) => (
          <nav aria-label={col.title} key={col.title}>
            <p className="m-0 mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-yellow">{col.title}</p>
            <ul className="m-0 grid list-none gap-[11px] p-0">
              {col.links.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href} label={l.label} />
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-[52px] flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-[#2A2A2A] pt-6">
        <p className="m-0 font-sans text-sm text-[#8A8A8A]">© 2026 DEWS Mentora. All rights reserved.</p>
        <p className="m-0 font-sans text-sm text-[#8A8A8A]">
          Application:{" "}
          <a href={APP_LOGIN_URL} className="text-[#D9D9D9]">
            app.dewsmentora.com
          </a>
        </p>
      </div>
    </footer>
  );
}
