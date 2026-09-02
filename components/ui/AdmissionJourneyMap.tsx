import {
  Check,
  FilePen,
  Globe,
  Handshake,
  Laptop,
  MailOpen,
  Plane,
  UserPlus,
  Users,
} from "lucide-react";
import type { Framework } from "@/lib/frameworks";

/**
 * A faithful HTML/CSS rebuild of the "Your Admission Journey" infographic.
 *
 * Geometry is taken from the 1536x1024 original rather than eyeballed: node
 * centres, the dotted serpentine, the path end dots and every text block sit at
 * their measured coordinates, expressed as percentages of that canvas. The
 * wrapper is a size container and all type is sized in `cqw`, so the whole
 * graphic scales with its column exactly as the bitmap did — while remaining
 * real, selectable, translatable text.
 *
 * The serpentine only works while all six stages sit side by side, so this is a
 * `nav:` (>=1080px) treatment. Below that the caller falls back to the vertical
 * StageTimeline, which is what makes this content readable on a phone at all.
 */

const CANVAS = 1536;
const pct = (v: number) => `${(v / CANVAS) * 100}%`;

/** Measured node centres, in original canvas coordinates. */
const NODES = [
  { x: 187, y: 437, icon: UserPlus },
  { x: 462, y: 455, icon: Laptop },
  { x: 681, y: 478, icon: FilePen },
  { x: 918, y: 505, icon: MailOpen },
  { x: 1141, y: 495, icon: Globe },
  { x: 1352, y: 476, icon: Plane },
];

/** The band the dotted path occupies, in canvas coordinates. */
const BAND_TOP = 355;
const BAND_H = 300;

const START = { x: 84, y: 514 };
const END = { x: 1454, y: 564 };

/**
 * Control-point offsets per segment, derived from where the original's troughs
 * actually bottom out. A cubic whose handles drop by `d` troughs at 0.75d, and
 * the original's wave flattens toward the middle rather than holding one
 * amplitude — hence per-segment values instead of a constant.
 */
const DIPS = [83, 70, 51, 33, 38];

function buildPath() {
  const p: string[] = [];
  p.push(`M ${START.x} ${START.y}`);
  const n0 = NODES[0];
  p.push(`C ${START.x + 36} ${START.y}, ${n0.x - 47} ${n0.y + 35}, ${n0.x} ${n0.y}`);
  for (let i = 0; i < NODES.length - 1; i++) {
    const a = NODES[i];
    const b = NODES[i + 1];
    const dip = DIPS[i];
    const dx = (b.x - a.x) * 0.45;
    p.push(`C ${a.x + dx} ${a.y + dip}, ${b.x - dx} ${b.y + dip}, ${b.x} ${b.y}`);
  }
  const nl = NODES[NODES.length - 1];
  p.push(`C ${nl.x + 38} ${nl.y}, ${END.x - 34} ${END.y}, ${END.x} ${END.y}`);
  return p.join(" ");
}

/** Text blocks, positioned from the original. Above blocks hang from the band. */
const ABOVE = [
  { i: 1, left: 355, width: 305 },
  { i: 3, left: 840, width: 270 },
  { i: 5, left: 1232, width: 268 },
];
const BELOW = [
  { i: 0, left: 68, width: 232 },
  { i: 2, left: 648, width: 252 },
  { i: 4, left: 1022, width: 278 },
];
const OPTIONS_BLOCK = { left: 332, width: 293 };

const NUMBER = "shrink-0 font-sans font-bold leading-[0.85] text-[4.05cqw] text-[#FEDD02]";
const TITLE = "m-0 font-sans text-[1.32cqw] font-bold uppercase leading-[1.16] tracking-[0.005em] text-[#1A1A1A]";
const ITEM = "font-sans text-[0.95cqw] leading-[1.42] text-[#3D3D3D]";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="m-0 mt-[0.85cqw] grid list-none gap-[0.42cqw] p-0">
      {items.map((it) => (
        <li key={it} className={`flex gap-[0.6cqw] ${ITEM}`}>
          <span
            aria-hidden="true"
            className="mt-[0.55cqw] h-[0.36cqw] w-[0.36cqw] shrink-0 rounded-full bg-[#FEDD02]"
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function StageBlock({ n, title, items }: { n: string; title: string; items: string[] }) {
  return (
    <div className="flex gap-[0.85cqw]">
      <span aria-hidden="true" className={NUMBER}>
        {Number(n)}
      </span>
      <div className="min-w-0">
        <h3 className={TITLE}>{title}</h3>
        <Bullets items={items} />
      </div>
    </div>
  );
}

export default function AdmissionJourneyMap({ framework }: { framework: Framework }) {
  const { stages, throughout, commitment } = framework;
  const options = stages[0]?.options ?? [];

  return (
    <div
      className="hidden nav:block"
      style={{ containerType: "inline-size" }}
      role="group"
      aria-label="Your admission journey — a structured process, professionally managed"
    >
      {/* ---------- header ---------- */}
      <div className="flex items-center gap-[1.1cqw]">
        <span className="rounded-full bg-[#FEDD02] px-[1.5cqw] py-[0.5cqw] font-sans text-[2.7cqw] font-bold uppercase leading-[1] tracking-[-0.01em] text-[#111]">
          Your
        </span>
        <h2 className="m-0 font-sans text-[2.7cqw] font-bold uppercase leading-[1] tracking-[-0.005em] text-[#1A1A1A]">
          Admission Journey
        </h2>
      </div>
      <p className="m-0 mt-[0.75cqw] mb-[2.2cqw] font-sans text-[1.12cqw] leading-[1.4] text-[#6B6B6B]">
        A Structured Process. Professionally Managed.
      </p>

      {/* ---------- above-the-path stages (2, 4, 6) ---------- */}
      <div className="relative w-full" style={{ aspectRatio: `${CANVAS} / 235` }}>
        {ABOVE.map(({ i, left, width }) => (
          <div
            key={stages[i].n}
            className="absolute bottom-0"
            style={{ left: pct(left), width: pct(width) }}
          >
            <StageBlock n={stages[i].n} title={stages[i].title} items={stages[i].items} />
          </div>
        ))}
      </div>

      {/* ---------- the dotted serpentine + nodes ---------- */}
      <div className="relative w-full" style={{ aspectRatio: `${CANVAS} / ${BAND_H}` }}>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 ${BAND_TOP} ${CANVAS} ${BAND_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          {/* non-scaling-stroke keeps the dots round once the viewBox is stretched */}
          <path
            d={buildPath()}
            fill="none"
            stroke="#1A1A1A"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray="0.1 13"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx={START.x} cy={START.y} r={9} fill="#FEDD02" />
          <circle cx={END.x} cy={END.y} r={8.5} fill="#FEDD02" />
        </svg>

        {NODES.map((node, i) => {
          const Icon = node.icon;
          return (
            <span
              key={stages[i].n}
              aria-hidden="true"
              className="absolute flex items-center justify-center rounded-full"
              style={{
                left: pct(node.x),
                top: `${((node.y - BAND_TOP) / BAND_H) * 100}%`,
                width: pct(142),
                aspectRatio: "1",
                transform: "translate(-50%, -50%)",
                background: "rgba(254,221,2,0.34)",
                boxShadow: "0.5cqw 0.7cqw 1.5cqw rgba(0,0,0,0.07)",
              }}
            >
              <span
                className="flex items-center justify-center rounded-full bg-[#FEDD02]"
                style={{ width: "85.9%", height: "85.9%" }}
              >
                <Icon
                  className="h-[46%] w-[46%] text-[#1A1A1A]"
                  strokeWidth={1.6}
                  absoluteStrokeWidth
                />
              </span>
            </span>
          );
        })}
      </div>

      {/* ---------- below-the-path stages (1, 3, 5) + the option branch ----------
          In the original these titles start at y=545, i.e. level with the lower
          half of the circles rather than clear of them, so the row is pulled
          back up into the band by the difference. */}
      <div
        className="relative w-full"
        style={{
          aspectRatio: `${CANVAS} / 285`,
          marginTop: pct(-(BAND_TOP + BAND_H - 545)),
        }}
      >
        {BELOW.map(({ i, left, width }) => (
          <div
            key={stages[i].n}
            className="absolute top-0"
            style={{ left: pct(left), width: pct(width) }}
          >
            <StageBlock n={stages[i].n} title={stages[i].title} items={stages[i].items} />
          </div>
        ))}

        {options.length === 2 && (
          <div
            className="absolute top-0 flex items-start"
            style={{ left: pct(OPTIONS_BLOCK.left), width: pct(OPTIONS_BLOCK.width) }}
          >
            <div className="flex-1">
              <p className="m-0 font-sans text-[1.02cqw] font-bold uppercase leading-[1.2] tracking-[0.02em] text-[#1A1A1A]">
                {options[0].label}
              </p>
              <p className="m-0 mt-[0.3cqw] font-sans text-[0.98cqw] font-bold leading-[1.28] text-[#1A1A1A]">
                {options[0].title}
              </p>
              <p className={`m-0 mt-[0.75cqw] pr-[0.9cqw] ${ITEM}`}>{options[0].body}</p>
            </div>

            {/* the OR pill sits on a hairline rule between the two routes */}
            <div className="relative flex w-[2.6cqw] shrink-0 justify-center self-stretch">
              <span aria-hidden="true" className="absolute inset-y-0 w-px bg-[#FEDD02]" />
              <span className="relative mt-[1.1cqw] rounded-full bg-[#FEDD02] px-[0.62cqw] py-[0.28cqw] font-sans text-[0.86cqw] font-bold uppercase leading-[1] text-[#1A1A1A]">
                or
              </span>
            </div>

            <div className="flex-1 pl-[0.5cqw]">
              <p className="m-0 font-sans text-[1.02cqw] font-bold uppercase leading-[1.2] tracking-[0.02em] text-[#1A1A1A]">
                {options[1].label}
              </p>
              <p className="m-0 mt-[0.3cqw] font-sans text-[0.98cqw] font-bold leading-[1.28] text-[#1A1A1A]">
                {options[1].title}
              </p>
              <p className={`m-0 mt-[0.75cqw] ${ITEM}`}>{options[1].body}</p>
            </div>
          </div>
        )}
      </div>

      {/* ---------- the commitment panel ---------- */}
      {(throughout || commitment) && (
        <div className="mt-[1.4cqw] grid grid-cols-[1.05fr_auto_1fr] rounded-[1.1cqw] border border-[#FEDD02] px-[2.2cqw] py-[1.9cqw]">
          {throughout && (
            <div className="flex gap-[1.15cqw] pr-[2cqw]">
              <span
                aria-hidden="true"
                className="flex shrink-0 self-start items-center justify-center rounded-full bg-[#FEDD02]"
                style={{ width: pct(64), aspectRatio: "1" }}
              >
                <Users className="h-[52%] w-[52%] text-[#1A1A1A]" strokeWidth={1.7} absoluteStrokeWidth />
              </span>
              <div className="min-w-0">
                <h3 className="m-0 font-sans text-[1.28cqw] font-bold uppercase leading-[1.15] text-[#1A1A1A]">
                  Throughout your journey
                </h3>
                <p className="m-0 mt-[0.35cqw] font-sans text-[0.95cqw] leading-[1.4] text-[#3D3D3D]">
                  You always receive:
                </p>
                <ul className="m-0 mt-[0.85cqw] grid grid-cols-3 list-none gap-x-[1.1cqw] gap-y-[0.5cqw] p-0">
                  {throughout.items.map((it) => (
                    <li key={it} className={`flex gap-[0.5cqw] ${ITEM}`}>
                      <Check
                        aria-hidden="true"
                        className="mt-[0.18cqw] h-[0.78cqw] w-[0.78cqw] shrink-0 rounded-full border border-[#FEDD02] p-[0.1cqw] text-[#D4A800]"
                        strokeWidth={3}
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <span aria-hidden="true" className="w-px bg-[#E8E2C8]" />

          {commitment && (
            <div className="flex gap-[1.15cqw] pl-[2cqw]">
              <span
                aria-hidden="true"
                className="flex shrink-0 self-start items-center justify-center rounded-full bg-[#FEDD02]"
                style={{ width: pct(72), aspectRatio: "1" }}
              >
                <Handshake className="h-[52%] w-[52%] text-[#1A1A1A]" strokeWidth={1.7} absoluteStrokeWidth />
              </span>
              <div className="min-w-0">
                <h3 className="m-0 font-sans text-[1.28cqw] font-bold uppercase leading-[1.15] text-[#1A1A1A]">
                  Our commitment
                </h3>
                <p className="m-0 mt-[0.5cqw] font-sans text-[0.95cqw] leading-[1.45] text-[#3D3D3D]">
                  {commitment.body[0]}
                </p>
                {commitment.body[1] && (
                  <p className="m-0 mt-[0.6cqw] font-sans text-[0.95cqw] font-bold leading-[1.45] text-[#1A1A1A]">
                    {commitment.body[1]}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
