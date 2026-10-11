import type { ProductReceive } from "@/lib/products";

/** A deliverable; a named one leads with its name in bold. */
export default function ReceiveItem({ item }: { item: ProductReceive }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <span>
      <strong className="font-semibold text-ink">{item.t}</strong> — {item.d}
    </span>
  );
}

export const receiveKey = (item: ProductReceive) => (typeof item === "string" ? item : item.t);
