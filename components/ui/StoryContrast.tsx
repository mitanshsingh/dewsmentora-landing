import FrameworkIcon from "@/components/ui/FrameworkIcon";
import { STORY_CONTRAST as C } from "@/lib/frameworks";

type Tone = "light" | "dark";

function Panel({
  heading,
  caption,
  items,
  accent,
  tone,
}: {
  heading: string;
  caption: string;
  items: string[];
  accent: boolean;
  tone: Tone;
}) {
  const dark = tone === "dark";
  const captionColor = accent ? (dark ? "text-yellow" : "text-ochre") : dark ? "text-white" : "text-ink";
  const dotColor = accent ? (dark ? "bg-yellow/70" : "bg-ochre/60") : dark ? "bg-white/35" : "bg-ink/25";
  return (
    <div>
      <p
        className={`m-0 mb-1 font-sans text-[12px] font-bold tracking-[0.16em] uppercase ${
          dark ? "text-[#9A9A9A]" : "text-muted"
        }`}
      >
        {heading}
      </p>
      <p className={`m-0 mb-5 font-display text-[clamp(19px,2vw,26px)] leading-[1.1] uppercase ${captionColor}`}>
        {caption}
      </p>
      <ul className="m-0 grid list-none gap-2.5 p-0">
        {items.map((it) => (
          <li
            key={it}
            className={`flex gap-2.5 font-serif text-[16px] leading-[1.45] ${
              dark ? "text-[#C9C9C9]" : "text-muted-2"
            }`}
          >
            <span aria-hidden="true" className={`mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full ${dotColor}`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * "Why Story Mapping matters" — replaces story-figure.png, whose bridge
 * diagram had its entire argument set in pixels.
 *
 * `tone` picks the palette: "dark" for `bg-ink` sections, "light" for paper or
 * cream ones.
 */
export default function StoryContrast({
  tone = "dark",
  headingId,
}: {
  tone?: Tone;
  headingId?: string;
}) {
  const dark = tone === "dark";
  const body = dark ? "text-[#C9C9C9]" : "text-muted-2";
  return (
    <div>
      <h2
        id={headingId}
        className="m-0 mb-3 max-w-[28ch] font-display text-[clamp(26px,2.8vw,40px)] leading-[1.02] uppercase"
      >
        {C.heading}
      </h2>
      <p className={`m-0 mb-11 max-w-[62ch] font-serif text-[18px] leading-[1.55] ${body}`}>{C.intro}</p>

      <div
        className="grid gap-x-12 gap-y-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        <Panel heading={C.left.heading} caption={C.left.caption} items={C.left.items} accent={false} tone={tone} />
        <Panel heading={C.right.heading} caption={C.right.caption} items={C.right.items} accent tone={tone} />
      </div>

      <div className={`mt-12 border-t pt-9 ${dark ? "border-white/15" : "border-line-strong"}`}>
        <ol
          className="m-0 grid list-none gap-6 p-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
        >
          {C.bridge.map((b, i) => (
            <li key={b.title} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                  dark ? "border-yellow/60" : "border-ochre/40 bg-white"
                }`}
              >
                <FrameworkIcon
                  name={b.icon}
                  className={`h-[19px] w-[19px] ${dark ? "text-yellow" : "text-ochre"}`}
                />
              </span>
              <span>
                <span
                  className={`block font-sans text-[12px] font-bold tracking-[0.16em] uppercase ${
                    dark ? "text-yellow/80" : "text-ochre"
                  }`}
                >
                  {C.flow[i]}
                </span>
                <span
                  className={`block font-sans text-[16px] font-semibold leading-[1.3] ${
                    dark ? "text-white" : "text-ink"
                  }`}
                >
                  {b.title}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
