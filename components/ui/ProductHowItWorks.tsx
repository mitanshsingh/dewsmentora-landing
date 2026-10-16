import type { CSSProperties } from "react";
import { Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import ReportProcess from "@/components/ui/ReportProcess";
import { getProcess } from "@/lib/frameworks";
import { productHref, type Product } from "@/lib/products";

/**
 * One Map's process as an expandable block on /how-it-works.
 *
 * The summary wears the product's own card colours, as on the home page, so the
 * four closed blocks read as the four Maps at a glance. Opened, each shows the
 * owner's process infographic ("How your … report is created"), which carries
 * its own outputs and final deliverables.
 *
 * A native `<details>` keeps this a server component and leaves the closed
 * content in the HTML, so it is still indexed and still reached by
 * find-in-page.
 */
export default function ProductHowItWorks({ product }: { product: Product }) {
  const process = getProcess(product.slug);
  if (!process) return null;

  const contents = [
    `${process.stages.length} stages`,
    ...(process.services ? [`${process.services.items.length} services`] : []),
    process.final.heading,
  ];

  return (
    <details
      id={product.slug}
      className="disclosure group/map scroll-mt-24 border border-line-card bg-white"
      style={
        {
          "--map-bg": product.bg,
          "--map-fg": product.fg,
          "--map-btn-bg": product.btnBg,
          "--map-btn-fg": product.btnFg,
        } as CSSProperties
      }
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 bg-[var(--map-bg)] p-[20px_18px] text-[var(--map-fg)] sm:max-nav:gap-5 sm:max-nav:p-[26px_28px] nav:gap-8 nav:p-[34px_40px] [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="mb-2 block font-display text-[13px] uppercase tracking-[0.14em] opacity-75">
            {product.question}
          </span>
          <h3 className="m-0 font-display text-[clamp(26px,2.6vw,38px)] uppercase leading-[1.02]">{product.name}</h3>
          {/* The question already names the decision; on a phone the extra
              sentence would double each closed block's height. */}
          <span className="mt-2.5 hidden max-w-[62ch] font-serif text-[16px] leading-[1.5] opacity-85 sm:block nav:text-[18px]">
            {product.summary}
          </span>
          <span className="mt-3 block font-sans text-[12px] font-bold uppercase tracking-[0.14em] opacity-70">
            {contents.join(" · ")}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--map-btn-bg)] text-[var(--map-btn-fg)] transition-transform duration-300 group-open/map:rotate-45 nav:h-14 nav:w-14"
        >
          <Plus className="h-5 w-5 nav:h-6 nav:w-6" strokeWidth={2.25} />
        </span>
      </summary>

      <div className="p-[24px_16px_28px] sm:max-nav:p-[32px_28px_36px] nav:p-[44px_40px_48px]">
        <ReportProcess process={process} />

        <div className="mt-12 flex border-t border-line pt-10 nav:mt-14">
          <Button href={productHref(product)} variant="outline-dark" small>
            Explore {product.name}
          </Button>
        </div>
      </div>
    </details>
  );
}
