// Renders the content files' line markup: one paragraph per line,
// consecutive lines starting with "- " as one bulleted list, and "## " lines
// as small sub-headings.

type Block = { kind: "p"; text: string } | { kind: "h"; text: string } | { kind: "ul"; items: string[] };

function toBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("- ")) {
      const last = blocks.at(-1);
      if (last?.kind === "ul") last.items.push(line.slice(2));
      else blocks.push({ kind: "ul", items: [line.slice(2)] });
    } else if (line.startsWith("## ")) {
      blocks.push({ kind: "h", text: line.slice(3) });
    } else {
      blocks.push({ kind: "p", text: line });
    }
  }
  return blocks;
}

export default function LineText({
  text,
  className = "",
  gap = "gap-3",
  marker = "marker:text-gold",
}: {
  text: string;
  /** Typography shared by paragraphs and list items. */
  className?: string;
  gap?: string;
  marker?: string;
}) {
  return (
    <div className={`grid ${gap}`}>
      {toBlocks(text).map((b, j) =>
        b.kind === "p" ? (
          <p key={j} className={`m-0 ${className}`}>
            {b.text}
          </p>
        ) : b.kind === "h" ? (
          <h3 key={j} className="m-0 mt-2 font-sans text-[16px] font-semibold leading-[1.3] text-ink">
            {b.text}
          </h3>
        ) : (
          <ul key={j} className={`m-0 grid list-disc gap-1 pl-5 ${marker} ${className}`}>
            {b.items.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
