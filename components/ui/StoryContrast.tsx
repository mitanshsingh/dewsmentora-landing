import FrameworkIcon from "@/components/ui/FrameworkIcon";
import { STORY_CONTRAST as C } from "@/lib/frameworks";

function Panel({
  heading,
  caption,
  items,
  accent,
}: {
  heading: string;
  caption: string;
  items: string[];
  accent: boolean;
}) {
  return (
    <div>
      <p className="m-0 mb-1 font-sans text-[12px] font-bold tracking-[0.16em] text-[#9A9A9A] uppercase">
        {heading}
      </p>
      <p
        className={`m-0 mb-5 font-display text-[clamp(19px,2vw,26px)] leading-[1.1] uppercase ${
          accent ? "text-yellow" : "text-white"
        }`}
      >
        {caption}
      </p>
      <ul className="m-0 grid list-none gap-2.5 p-0">
        {items.map((it) => (
          <li
            key={it}
            className="flex gap-2.5 font-serif text-[16px] leading-[1.45] text-[#C9C9C9]"
          >
            <span
              aria-hidden="true"
              className={`mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full ${
                accent ? "bg-yellow/70" : "bg-white/35"
              }`}
            />
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
 */
export default function StoryContrast() {
  return (
    <div>
      <h3 className="m-0 mb-3 font-display text-[clamp(24px,2.6vw,36px)] leading-[1.05] uppercase">
        {C.heading}
      </h3>
      <p className="m-0 mb-11 max-w-[62ch] font-serif text-[18px] leading-[1.55] text-[#C9C9C9]">
        {C.intro}
      </p>

      <div
        className="grid gap-x-12 gap-y-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        <Panel heading={C.left.heading} caption={C.left.caption} items={C.left.items} accent={false} />
        <Panel heading={C.right.heading} caption={C.right.caption} items={C.right.items} accent />
      </div>

      <div className="mt-12 border-t border-white/15 pt-9">
        <ol
          className="m-0 grid list-none gap-6 p-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
        >
          {C.bridge.map((b, i) => (
            <li key={b.title} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow/60"
              >
                <FrameworkIcon name={b.icon} className="h-[19px] w-[19px] text-yellow" />
              </span>
              <span>
                <span className="block font-sans text-[12px] font-bold tracking-[0.16em] text-yellow/80 uppercase">
                  {C.flow[i]}
                </span>
                <span className="block font-sans text-[16px] font-semibold leading-[1.3] text-white">
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
