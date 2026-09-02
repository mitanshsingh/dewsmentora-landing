import type { Framework } from "@/lib/frameworks";

/**
 * The "throughout your journey" guarantees and closing commitment that sat in
 * the footer band of execution-figure.png.
 */
export default function FrameworkExtras({
  framework,
  tone = "dark",
}: {
  framework: Framework;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const rule = dark ? "border-white/15" : "border-line-strong";
  const body = dark ? "text-[#C9C9C9]" : "text-muted-2";
  const tick = dark ? "text-yellow" : "text-ochre";
  const { throughout, commitment } = framework;
  if (!throughout && !commitment) return null;

  return (
    <div
      className={`mt-14 grid gap-x-12 gap-y-10 border-t pt-11 ${rule}`}
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
    >
      {throughout && (
        <div>
          <h3 className="m-0 mb-5 font-display text-[clamp(19px,2vw,26px)] leading-[1.1] uppercase">
            {throughout.heading}
          </h3>
          <ul
            className="m-0 grid list-none gap-x-7 gap-y-2.5 p-0"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
          >
            {throughout.items.map((it) => (
              <li
                key={it}
                className={`flex gap-2.5 font-serif text-[16px] leading-[1.45] ${body}`}
              >
                <span aria-hidden="true" className={tick}>
                  ✓
                </span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      )}

      {commitment && (
        <div>
          <h3 className="m-0 mb-5 font-display text-[clamp(19px,2vw,26px)] leading-[1.1] uppercase">
            {commitment.heading}
          </h3>
          {commitment.body.map((p) => (
            <p
              key={p}
              className={`m-0 mb-3.5 max-w-[54ch] font-serif text-[16px] leading-[1.55] last:mb-0 ${body}`}
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
