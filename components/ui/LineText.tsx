// Renders the content files' line markup: one paragraph per line, and
// consecutive lines starting with "- " as one bulleted list.

type Block = { kind: "p"; text: string } | { kind: "ul"; items: string[] };

function toBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("- ")) {
      const last = blocks.at(-1);
      if (last?.kind === "ul") last.items.push(line.slice(2));
      else blocks.push({ kind: "ul", items: [line.slice(2)] });
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
