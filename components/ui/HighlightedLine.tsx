import type { Highlighted } from "@/lib/frameworks";

/**
 * A yellow marker stroke behind ink, as in ReportProcess: yellow text would be
 * unreadable on white.
 */
export const MARKER =
  "box-decoration-clone bg-[linear-gradient(transparent_58%,var(--color-yellow)_58%)] px-[0.08em]";

/** A line with its picked-out phrase marked, as in the owner's artwork. */
export default function HighlightedLine({ line }: { line: Highlighted }) {
  const [lead, highlight, tail] = line;
  return (
    <>
      {lead && <>{lead} </>}
      <span className={MARKER}>{highlight}</span>
      {tail && <> {tail}</>}
    </>
  );
}
