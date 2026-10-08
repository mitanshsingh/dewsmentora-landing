import type { ReactNode } from "react";
import type { MethodBlock, MethodItem, Methodology as MethodologyData } from "@/lib/methodology";
import type { ProductVisual } from "@/lib/frameworks";

const BODY = "font-serif text-[16px] leading-[1.55] text-muted-2 nav:text-[17px]";

function Chain({ op, items }: { op: "↓" | "×"; items: MethodItem[] }) {
  const down = op === "↓";
  return (
    <ol
      className={`m-0 flex list-none p-0 ${down ? "flex-col items-start gap-1" : "flex-wrap items-center gap-x-2 gap-y-2"}`}
    >
      {items.map((it, i) => (
        <li key={`${it.t}-${i}`} className={`flex ${down ? "flex-col items-start gap-1" : "items-center gap-2"}`}>
          {i > 0 && (
            <span aria-hidden="true" className={`font-sans text-[14px] text-ochre ${down ? "pl-4" : ""}`}>
              {op}
            </span>
          )}
          <span className="rounded-md border border-line bg-cream px-3 py-1.5">
            <span className="block font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">
              {it.t}
            </span>
            {it.d && <span className="block font-serif text-[15px] leading-[1.4] text-muted-2">{it.d}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Blocks({ blocks }: { blocks: MethodBlock[] }) {
  return (
    <div className="grid gap-3.5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className={`m-0 ${BODY}`}>
                {b.text}
              </p>
            );
          case "quote":
            return (
              <p key={i} className="m-0 border-l-2 border-ochre pl-4 font-serif text-[17px] italic leading-[1.5] text-ink">
                {b.text}
              </p>
            );
          case "list":
            return (
              <ul
                key={i}
                className={`m-0 list-disc pl-5 marker:text-gold ${BODY} ${b.items.length > 6 ? "gap-x-10 sm:columns-2" : ""}`}
              >
                {b.items.map((li) => (
                  <li key={li} className="mb-1 break-inside-avoid">
                    {li}
                  </li>
                ))}
              </ul>
            );
          case "caps":
            return (
              <ul key={i} className="m-0 grid list-none gap-1.5 p-0">
                {b.items.map((li) => (
                  <li key={li} className="font-sans text-[13.5px] font-bold uppercase tracking-[0.08em] text-ink">
                    {li}
                  </li>
                ))}
              </ul>
            );
          case "terms":
            return (
              <dl
                key={i}
                className="m-0 grid gap-3"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}
              >
                {b.items.map((it) => (
                  <div key={it.t} className="border-l-2 border-yellow bg-cream px-4 py-3">
                    <dt className="font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-ink">{it.t}</dt>
                    {it.d && <dd className="m-0 mt-1 font-serif text-[15.5px] leading-[1.45] text-muted-2">{it.d}</dd>}
                  </div>
                ))}
              </dl>
            );
          case "chain":
            return <Chain key={i} op={b.op} items={b.items} />;
        }
      })}
    </div>
  );
}

function Disclosure({
  n,
  title,
  lead,
  output,
  children,
}: {
  n?: string;
  title: string;
  lead?: string;
  output?: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-t border-line-strong last:border-b">
      <summary className="flex cursor-pointer list-none items-start gap-4 py-5 [&::-webkit-details-marker]:hidden nav:gap-6">
        {n && (
          <span className="w-10 flex-none font-display text-[28px] leading-none text-ochre nav:w-12 nav:text-[34px]">
            {n}
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block font-sans text-[17px] font-semibold leading-[1.3] text-ink nav:text-[19px]">
            {title}
          </span>
          {lead && (
            <span className="mt-1 block font-serif text-[16px] leading-[1.45] text-muted-2 nav:text-[17px]">{lead}</span>
          )}
        </span>
        <span
          aria-hidden="true"
          className="flex-none font-display text-[26px] leading-none text-yellow transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className={`pb-7 ${n ? "pl-14 nav:pl-[72px]" : ""}`}>
        {children}
        {output && (
          <p className="m-0 mt-5 inline-flex flex-wrap items-baseline gap-2 rounded-md bg-ink px-3.5 py-2 text-white">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-yellow">Output</span>
            <span className="font-sans text-[14px] font-semibold">{output}</span>
          </p>
        )}
      </div>
    </details>
  );
}

/**
 * "How your report is created": the doc's infographic plus the full step-by-step
 * methodology, each step collapsed behind a native <details> so the long copy
 * stays in the HTML for search without overwhelming the page.
 */
export default function Methodology({
  data,
  process,
}: {
  data: MethodologyData;
  process?: ProductVisual["process"];
}) {
  const steps = data.appendix.filter((a) => a.blocks.length > 0);
  const statements = data.appendix.filter((a) => a.blocks.length === 0);

  return (
    <div>
      <h2 className="m-0 mb-3 max-w-[24ch] font-display text-[clamp(28px,3vw,44px)] uppercase leading-[1]">
        {data.heading}
      </h2>
      <p className="m-0 mb-8 font-sans text-[15px] font-semibold uppercase tracking-[0.12em] text-ochre">
        {data.subheading}
      </p>
      <div className="mb-12 max-w-[70ch]">
        <Blocks blocks={data.intro} />
      </div>

      {process && (
        <picture className="mb-14 block">
          <source media="(min-width: 768px)" srcSet={process.wide.src} />
          {/* Art direction needs <picture>, which next/image can't express; the files are pre-sized webp. */}
          <img
            src={process.tall.src}
            alt={process.alt}
            width={process.tall.width}
            height={process.tall.height}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-[520px] md:max-w-[1100px]"
          />
        </picture>
      )}

      <h3 className="m-0 mb-2 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-muted">
        The full process, step by step
      </h3>
      <ol className="m-0 list-none p-0">
        {data.steps.map((s) => (
          <li key={s.n}>
            <Disclosure n={s.n} title={s.title} lead={s.lead} output={s.output}>
              <Blocks blocks={s.blocks} />
            </Disclosure>
          </li>
        ))}
      </ol>

      {steps.length > 0 && (
        <div className="mt-12">
          {steps.map((a) => (
            <Disclosure key={a.title} title={a.title}>
              <Blocks blocks={a.blocks} />
            </Disclosure>
          ))}
        </div>
      )}

      {statements.map((a) => (
        <p
          key={a.title}
          className="m-0 mt-12 max-w-[30ch] border-l-[3px] border-yellow pl-5 font-display text-[clamp(22px,2.4vw,32px)] uppercase leading-[1.05] text-ink"
        >
          {a.title}.
        </p>
      ))}
    </div>
  );
}
