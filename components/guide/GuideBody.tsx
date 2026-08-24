import type { GuideSection } from "@/lib/guides";

export default function GuideBody({ sections }: { sections: GuideSection[] }) {
  return (
    <div className="grid gap-6">
      {sections.map((section, i) => {
        switch (section.type) {
          case "p":
            return (
              <p key={i} className="m-0 font-serif text-[18px] leading-[1.65] text-[#2A2A2A]">
                {section.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                id={section.id}
                className="m-0 mt-6 font-display text-[clamp(26px,2.6vw,36px)] uppercase leading-[1.05] scroll-mt-24"
              >
                {section.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="m-0 mt-2 font-sans text-[20px] font-semibold leading-[1.3]">
                {section.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="m-0 grid list-none gap-3 p-0">
                {section.items.map((item) => (
                  <li key={item} className="border-l-2 border-yellow pl-5 font-serif text-[17px] leading-[1.55] text-[#2A2A2A]">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="m-0 grid list-none gap-3 p-0 counter-reset-[step]">
                {section.items.map((item, idx) => (
                  <li key={item} className="flex gap-4 font-serif text-[17px] leading-[1.55] text-[#2A2A2A]">
                    <span
                      aria-hidden="true"
                      className="flex-none font-display text-[20px] leading-[1.55] text-yellow"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <p
                key={i}
                className="m-0 border-l-[3px] border-yellow bg-cream p-[16px_18px] font-serif text-[17px] leading-[1.5] text-[#2A2A2A]"
              >
                {section.text}
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
