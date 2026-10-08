import {
  EXECUTION_COUPON as COUPON,
  EXECUTION_DIFFERENCE as DIFFERENCE,
  EXECUTION_DISTINCTION as DISTINCTION,
  EXECUTION_JOURNEY as JOURNEY,
} from "@/lib/execution";

const H2 = "m-0 mb-5 font-display text-[clamp(26px,2.8vw,40px)] uppercase leading-[1.02]";
const BODY = "m-0 font-serif text-[17px] leading-[1.55] text-muted-2";

/** Execution Mapping's coupon, fee boundary and end-to-end journey. */
export default function ExecutionCost() {
  return (
    <div className="grid gap-20">
      <div
        className="grid items-start gap-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}
      >
        <div>
          <h2 className={H2}>{COUPON.heading}</h2>
          <div className="grid gap-3">
            {COUPON.intro.map((p) => (
              <p key={p} className={BODY}>
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 bg-ink p-[26px_28px] text-white">
            <p className="m-0 mb-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-yellow">
              {COUPON.feeLabel}
            </p>
            <p className="m-0 mb-3 font-display text-[clamp(36px,4vw,56px)] leading-none">{COUPON.fee}</p>
            <p className="m-0 font-serif text-[16px] leading-[1.5] text-[#C9C9C9]">{COUPON.feeNote}</p>
          </div>
        </div>
        <div>
          <h3 className="m-0 mb-4 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-muted">
            {COUPON.includesHeading}
          </h3>
          <ul className="m-0 grid list-none gap-0 p-0">
            {COUPON.includes.map((it) => (
              <li key={it.t} className="border-t border-line-strong py-4 last:border-b">
                <p className="m-0 mb-1 font-sans text-[17px] font-semibold leading-[1.3]">{it.t}</p>
                <p className="m-0 font-serif text-[16px] leading-[1.5] text-muted-2">{it.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-[1.5px] border-ink p-[28px_24px] nav:p-[44px_48px]">
        <h2 className={H2}>{DISTINCTION.heading}</h2>
        <p className="m-0 mb-6 inline-block bg-yellow px-3 py-1.5 font-sans text-[clamp(16px,1.8vw,22px)] font-bold leading-[1.3] text-ink">
          {DISTINCTION.formula}
        </p>
        <p className={`${BODY} mb-5 max-w-[70ch]`}>{DISTINCTION.intro}</p>
        <ul
          className="m-0 mb-6 grid list-none gap-x-8 gap-y-2.5 p-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}
        >
          {DISTINCTION.excluded.map((x) => (
            <li key={x} className="flex gap-2.5 font-serif text-[16px] leading-[1.45] text-muted-2">
              <span aria-hidden="true" className="font-sans text-ochre">
                ✕
              </span>
              {x}
            </li>
          ))}
        </ul>
        <div className="grid max-w-[70ch] gap-2">
          {DISTINCTION.outro.map((p) => (
            <p key={p} className={BODY}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h2 className={H2}>{JOURNEY.heading}</h2>
        <p className="m-0 mb-8 font-sans text-[15px] font-bold uppercase tracking-[0.16em] text-ochre">{JOURNEY.flow}</p>
        <ol
          className="m-0 grid list-none gap-4 p-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}
        >
          {JOURNEY.steps.map((s) => (
            <li key={s.n} className="border-t-[3px] border-yellow bg-cream p-[18px_20px]">
              <p className="m-0 mb-2 font-display text-[28px] leading-none text-ochre">{s.n}</p>
              <p className="m-0 mb-1 font-sans text-[16px] font-semibold leading-[1.3]">{s.t}</p>
              <p className="m-0 font-serif text-[15.5px] leading-[1.45] text-muted-2">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="max-w-[880px]">
        <h2 className={H2}>{DIFFERENCE.heading}</h2>
        <div className="mb-6 grid gap-2">
          {DIFFERENCE.body.map((p) => (
            <p key={p} className={BODY}>
              {p}
            </p>
          ))}
        </div>
        <p className="m-0 mb-6 font-display text-[clamp(20px,2.2vw,30px)] uppercase leading-[1.1]">
          {DIFFERENCE.sequence}
        </p>
        <ul className="m-0 mb-6 grid list-none gap-2.5 p-0">
          {DIFFERENCE.points.map((p) => (
            <li key={p} className="border-l-2 border-yellow pl-4 font-serif text-[18px] leading-[1.5]">
              {p}
            </li>
          ))}
        </ul>
        <p className={BODY}>{DIFFERENCE.closing}</p>
      </div>
    </div>
  );
}
