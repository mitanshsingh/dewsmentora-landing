import { PRODUCTS } from "@/lib/products";

export default function MappingJourneyPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-8 border border-[#2A2A2A] bg-ink p-9 text-white sm:p-12 ${className}`}>
      <div>
        <p className="m-0 mb-3 font-display text-[13px] uppercase tracking-[0.22em] text-yellow">
          The DEWSMENTORA™ Mapping Journey™
        </p>
        <p className="m-0 max-w-[42ch] font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.3]">
          Different decisions require different kinds of <span className="text-yellow">clarity</span>.
        </p>
      </div>
      <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
        {PRODUCTS.map((p) => (
          <li key={p.slug} className="border-l-2 border-yellow py-1 pl-4 font-sans text-[15px] leading-[1.35] text-[#D9D9D9]">
            {p.question}
          </li>
        ))}
      </ul>
      <div className="grid gap-3 border-t border-[#2A2A2A] pt-6">
        <p className="m-0 flex items-center gap-3 font-sans text-[15px] text-[#9A9A9A]">
          <span aria-hidden="true">✕</span> You don&apos;t need every Map.
        </p>
        <p className="m-0 flex items-center gap-3 font-sans text-[15px] font-semibold text-white">
          <span aria-hidden="true" className="text-yellow">✓</span> You need the <span className="text-yellow">right Map</span> for the decision you&apos;re facing.
        </p>
      </div>
    </div>
  );
}
