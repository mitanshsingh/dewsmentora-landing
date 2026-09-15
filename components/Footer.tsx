import Image from "next/image";
import FooterGroup from "@/components/ui/FooterGroup";
import { PRODUCTS, productHref } from "@/lib/products";
import { COUNTRIES } from "@/lib/study-destinations";

const FOOTER_COLS = [
  {
    id: "products",
    title: "Products",
    links: PRODUCTS.map((p) => ({ label: p.name, href: productHref(p) })),
  },
  {
    id: "study-abroad",
    title: "Study Abroad",
    links: [
      { label: "Study Abroad Guide", href: "/study-abroad" },
      ...COUNTRIES.map((c) => ({ label: `Study in ${c.flagLabel}`, href: `/study-abroad/${c.slug}` })),
    ],
  },
  {
    id: "explore",
    title: "Explore",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "For Students", href: "/for-students" },
      { label: "Resources", href: "/resources" },
      { label: "About", href: "/about" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    // The extra phone bottom padding clears the landing page's sticky CTA bar.
    <footer className="mt-[52px] bg-night-deep px-5 pb-[76px] pt-9 text-night-body nav:mt-0 nav:bg-ink nav:px-6 nav:pb-9 nav:pt-[72px] nav:text-white">
      <div
        className="mx-auto w-full max-w-[560px] nav:grid nav:max-w-[1280px] nav:gap-11"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))" }}
      >
        <div>
          <div className="mb-2.5 flex items-center gap-3 nav:mb-3.5">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={36}
              height={36}
              className="hidden h-9 w-9 flex-none rounded-full nav:block"
            />
            <p className="m-0 font-sans text-[14px] font-bold uppercase tracking-[0.14em] text-night-fg nav:font-display nav:text-[26px] nav:font-normal nav:leading-none nav:tracking-normal nav:text-white">
              DEWS Mentora
            </p>
          </div>
          <p className="m-0 mb-[22px] max-nav:text-pretty font-text text-[14.5px] leading-[1.6] text-night-muted nav:max-w-[34ch] nav:font-serif nav:text-[17px] nav:leading-[1.55] nav:text-[#BDBDBD]">
            Structured evaluation for high-stakes education and career decisions. Four Maps, one question at a
            time.
          </p>
          <span
            className="mb-[26px] flex h-[52px] cursor-not-allowed items-center justify-center gap-2.5 bg-gold font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-night opacity-50 grayscale nav:mb-0 nav:inline-flex nav:h-auto nav:rounded-full nav:bg-yellow nav:px-[26px] nav:py-[15px] nav:text-sm nav:font-bold nav:normal-case nav:tracking-normal nav:text-ink"
            aria-disabled="true"
            role="button"
          >
            Coming Soon
          </span>
        </div>
        {FOOTER_COLS.map((col) => (
          <FooterGroup key={col.id} id={col.id} title={col.title} links={col.links} />
        ))}
      </div>
      <div className="mx-auto mt-[26px] w-full max-w-[560px] nav:mt-[52px] nav:flex nav:max-w-[1280px] nav:flex-wrap nav:justify-between nav:gap-4 nav:border-t nav:border-[#2A2A2A] nav:pt-6">
        <p className="m-0 font-text text-[12.5px] text-night-faint nav:font-sans nav:text-sm nav:text-[#8A8A8A]">
          © 2026 DEWS Mentora. All rights reserved.
        </p>
        <p className="m-0 mt-1.5 font-text text-[12.5px] text-night-faint nav:mt-0 nav:font-sans nav:text-sm nav:text-[#8A8A8A]">
          Application: coming soon
        </p>
      </div>
    </footer>
  );
}
