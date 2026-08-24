import Link from "next/link";
import type { Product } from "@/lib/products";
import { productHref } from "@/lib/products";
import Button from "./Button";

export function ProductPickerCard({ product }: { product: Product }) {
  return (
    <Link
      href={productHref(product)}
      className="grid gap-2 border border-line-card p-[26px_22px] transition-colors hover:bg-cream"
    >
      <span className="font-display text-xs uppercase tracking-[0.14em] text-ochre">{product.question}</span>
      <span className="font-display text-[22px] uppercase leading-[1.05]">{product.name}</span>
    </Link>
  );
}

export function ProductSummaryCard({ product }: { product: Product }) {
  return (
    <Link
      href={productHref(product)}
      className="grid gap-2.5 border border-line-card p-[28px_24px] transition-colors hover:bg-cream"
    >
      <span className="font-display text-xs uppercase tracking-[0.14em] text-ochre">{product.question}</span>
      <span className="font-display text-[22px] uppercase leading-[1.05]">{product.name}</span>
      <span className="font-serif text-[16px] leading-[1.5] text-muted-2">{product.summary}</span>
    </Link>
  );
}

export function ProductListingCard({
  product,
  showPricing = true,
}: {
  product: Product;
  showPricing?: boolean;
}) {
  return (
    <article className="flex flex-col gap-4 border border-line-card p-[34px_28px]">
      <p className="m-0 font-display text-[13px] uppercase tracking-[0.14em] text-ochre">{product.question}</p>
      <h2 className="m-0 font-display text-[clamp(24px,2vw,30px)] uppercase leading-[1.05]">{product.name}</h2>
      <p className="m-0 flex-1 font-serif text-[17px] leading-[1.55] text-muted-2">{product.summary}</p>
      {showPricing && <p className="m-0 font-sans text-[15px] font-semibold text-muted">{product.price}</p>}
      <Button href={productHref(product)} variant="primary" className="self-start" small>
        Learn more
      </Button>
    </article>
  );
}
