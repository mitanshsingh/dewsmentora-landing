import { MAP_FIT } from "@/lib/frameworks";

/**
 * "You don't need every Map" — replaces the comparison rows that were baked
 * into identity-figure.png.
 */
export default function MapFitPanel({
  headingId,
  tone = "light",
  as = "h2",
}: {
  headingId?: string;
  tone?: "light" | "dark";
  as?: "h2" | "h3";
}) {
  const dark = tone === "dark";
  const Heading = as;

  return (
    <div>
      <Heading
        id={headingId}
        className={`m-0 mb-8 max-w-[24ch] font-display text-[clamp(26px,3vw,42px)] leading-[1.02] uppercase ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {MAP_FIT.heading}
      </Heading>

      <ul className="m-0 grid list-none gap-0 p-0">
        {MAP_FIT.rows.map((row) => (
          <li
            key={row.product}
            className={`py-5 font-serif text-[17px] leading-[1.5] last:border-b ${
              dark
                ? "border-t border-white/15 text-[#C9C9C9]"
                : "border-t border-line-strong text-muted-2"
            }`}
          >
            {row.text}{" "}
            <span
              className={`font-sans font-semibold ${dark ? "text-yellow" : "text-ink"}`}
            >
              {row.product}
            </span>
          </li>
        ))}
      </ul>

      <ul
        className="m-0 mt-9 grid list-none gap-6 p-0"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
      >
        {MAP_FIT.principles.map((p) => (
          <li
            key={p}
            className={`border-l-2 border-yellow pl-4 font-serif text-[16px] leading-[1.5] ${
              dark ? "text-[#C9C9C9]" : "text-muted-2"
            }`}
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
