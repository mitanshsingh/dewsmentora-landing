import type { Product } from "@/lib/products";

/**
 * A boxed caveat after What you receive. Execution Mapping's says what its
 * quoted fee does not cover, so the range isn't read as the cost of applying.
 */
export default function CostNote({ note }: { note: NonNullable<Product["costNote"]> }) {
  return (
    <aside aria-labelledby="cost-note" className="border-l-4 border-yellow bg-cream p-[28px_22px] sm:p-[36px_40px]">
      <p className="m-0 mb-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-ochre">{note.label}</p>
      <h2 id="cost-note" className="m-0 mb-5 font-display text-[clamp(24px,2.6vw,34px)] uppercase leading-[1.05]">
        {note.heading}
      </h2>
      <p className="m-0 mb-5 max-w-[68ch] font-serif text-[18px] leading-[1.55] text-ink">{note.intro}</p>
      <ul className="m-0 mb-6 grid list-none gap-x-8 gap-y-2.5 p-0 sm:grid-cols-2">
        {note.items.map((item) => (
          <li key={item} className="flex items-start gap-3 font-serif text-[17px] leading-[1.45] text-muted-2">
            <span aria-hidden="true" className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-ochre/60" />
            {item}
          </li>
        ))}
      </ul>
      {note.outro.map((line) => (
        <p key={line} className="m-0 mt-2.5 max-w-[68ch] font-sans text-[16px] font-semibold leading-[1.45] text-ink">
          {line}
        </p>
      ))}
    </aside>
  );
}
