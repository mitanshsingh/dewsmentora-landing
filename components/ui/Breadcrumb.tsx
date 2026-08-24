import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-[26px] font-sans text-[13px] leading-none text-muted">
        {items.map((item, i) => (
          <span key={item.label}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
            {i < items.length - 1 && <span aria-hidden="true"> / </span>}
          </span>
        ))}
      </nav>
    </>
  );
}
