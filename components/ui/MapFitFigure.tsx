import Image from "next/image";
import { Heart, Map, Users } from "lucide-react";
import { MAP_FIT } from "@/lib/frameworks";

/**
 * "You don't need everything." — a rebuild of identity-figure.png.
 *
 * The wide composition is laid out on the original's 1744x902 canvas: every
 * position below is a measured pixel from that artwork, expressed as a
 * percentage so the whole figure scales with its container. `cqw` drives type
 * size for the same reason, which is why the root declares
 * `container-type: inline-size`.
 *
 * Only the artwork is raster. The headline, the margin notes, all three
 * captions and the closing principles are real text; the original had every
 * one of them baked into the PNG.
 *
 * Below `nav` the same content is re-composed as a portrait stack — six
 * hundred-odd pixels of collage and a three-column footer do not survive a
 * phone at any scale.
 */

const CANVAS = 1744;
/**
 * Canvas pixels as container units. Not `%`: a percentage `top` resolves
 * against the container's height while `left` resolves against its width, so
 * mixing them collapses every vertical position. 1cqw is 1% of the container's
 * inline size, which scales both axes by the same factor.
 */
const u = (v: number) => `${(v / CANVAS) * 100}cqw`;

const INK = "#241309";
const GREY = "#7C7C7C";
const AMBER = "#C8801A";
const PAPER = "#E8E7E8";

/** Accent colour per row, matching the original's three-way treatment. */
const ACCENT = [AMBER, "#6E6E6E", INK];

const CIRCLES = [
  { src: "/images/im-direction.webp", top: 53 },
  { src: "/images/im-university.webp", top: 298 },
  { src: "/images/im-execution.webp", top: 538 },
];

const FOOTER_ICONS = [Map, Users, Heart];
/** Fragment of each principle the original sets in amber. */
const FOOTER_ACCENT = [
  "specific decision problem.",
  null,
  "genuinely adds value.",
];

function Principle({ text, accent }: { text: string; accent: string | null }) {
  if (!accent || !text.endsWith(accent)) return <>{text}</>;
  return (
    <>
      {text.slice(0, -accent.length)}
      <span style={{ color: AMBER }}>{accent}</span>
    </>
  );
}

export default function MapFitFigure({ headingId }: { headingId?: string }) {
  const rows = MAP_FIT.rows;

  return (
    <>
      {/* ============================ wide ============================ */}
      <div
        className="relative hidden w-full nav:block"
        style={{ containerType: "inline-size", aspectRatio: `${CANVAS} / 902`, background: PAPER }}
      >
        {/* headline */}
        <h2
          id={headingId}
          className="absolute m-0 font-display uppercase"
          style={{
            left: u(58),
            top: u(30),
            fontSize: "4.55cqw",
            // The original sets these three lines on a 77px baseline pitch at
            // a 79px cap — tighter than 1, which is how the third line stays
            // clear of the signpost and the swoosh reads as an underline.
            lineHeight: 0.98,
            letterSpacing: "-0.005em",
          }}
        >
          <span style={{ color: INK }}>You don&apos;t need everything.</span>
          <br />
          <span style={{ color: GREY }}>And we don&apos;t believe in</span>
          <br />
          <span style={{ color: AMBER }}>Selling everything.</span>
        </h2>

        <Image
          src="/images/im-swoosh.webp"
          alt=""
          width={390}
          height={48}
          aria-hidden="true"
          className="absolute mix-blend-multiply"
          style={{ left: u(58), top: u(261), width: u(390) }}
        />

        {/* the collage sits behind the headline; its own artwork starts right
            of x=700, so the two never touch */}
        <Image
          src="/images/im-collage.webp"
          alt="A student at a desk with a signpost reading course, university, country, career and future"
          width={1105}
          height={570}
          priority
          sizes="(max-width: 1080px) 1px, 820px"
          className="absolute mix-blend-multiply"
          style={{ left: u(10), top: u(185), width: u(1105) }}
        />

        {/* margin notes — handwriting in the original */}
        <span
          className="absolute font-hand"
          style={{
            left: u(296),
            top: u(306),
            width: u(100),
            fontSize: "1.72cqw",
            lineHeight: 1.28,
            color: "#3A3A3A",
            transform: "rotate(-4deg)",
          }}
        >
          Clarity over Confusion
        </span>
        <span
          className="absolute font-hand"
          style={{
            left: u(778),
            top: u(196),
            width: u(180),
            fontSize: "1.72cqw",
            lineHeight: 1.3,
            color: "#3A3A3A",
            transform: "rotate(-3deg)",
          }}
        >
          Right Direction. Stronger Decisions.
        </span>

        {/* three qualifying rows */}
        <ul className="absolute m-0 list-none p-0" style={{ inset: 0 }}>
          {rows.map((row, i) => (
            <li key={row.product}>
              <Image
                src={CIRCLES[i].src}
                alt=""
                width={212}
                height={212}
                aria-hidden="true"
                className="absolute rounded-full mix-blend-multiply"
                style={{ left: u(1140), top: u(CIRCLES[i].top - 5), width: u(212) }}
              />
              <span
                aria-hidden="true"
                className="absolute"
                style={{
                  left: u(1378),
                  top: u(CIRCLES[i].top + 18),
                  width: "1px",
                  height: u(150),
                  background: "#C6C4C4",
                }}
              />
              <p
                className="absolute m-0 font-sans"
                style={{
                  left: u(1400),
                  top: u(CIRCLES[i].top + 16),
                  width: u(330),
                  fontSize: "1.32cqw",
                  lineHeight: 1.72,
                  color: "#3A3A3A",
                }}
              >
                {row.text}{" "}
                <span style={{ color: ACCENT[i], fontWeight: 700 }}>{row.product}</span>
              </p>
            </li>
          ))}
        </ul>

        {/* dashed rules between the rows */}
        {[265, 514].map((y) => (
          <span
            key={y}
            aria-hidden="true"
            className="absolute"
            style={{
              left: u(1146),
              top: u(y),
              width: u(594),
              borderTop: "1px dashed #B9B7B7",
            }}
          />
        ))}

        {/* closing principles */}
        <ul className="absolute m-0 list-none p-0" style={{ inset: 0 }}>
          {MAP_FIT.principles.map((p, i) => {
            const Icon = FOOTER_ICONS[i];
            const x = [100, 604, 1169][i];
            const textX = [226, 723, 1281][i];
            // measured from the original, which sets each principle on two lines
            const textW = [295, 380, 428][i];
            return (
              <li key={p}>
                <span
                  aria-hidden="true"
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    left: u(x),
                    top: u(763),
                    width: u(97),
                    height: u(97),
                    border: "1.5px solid #D6D4D4",
                    background: "#FBFAFA",
                  }}
                >
                  <Icon
                    style={{ width: "2.9cqw", height: "2.9cqw", color: AMBER }}
                    strokeWidth={1.6}
                  />
                </span>
                <p
                  className="absolute m-0 font-sans font-semibold"
                  style={{
                    left: u(textX),
                    top: u(778),
                    width: u(textW),
                    fontSize: "1.26cqw",
                    lineHeight: 1.55,
                    color: INK,
                  }}
                >
                  <Principle text={p} accent={FOOTER_ACCENT[i]} />
                </p>
              </li>
            );
          })}
        </ul>

        {/* dividers between the principles */}
        {[556, 1112].map((x) => (
          <span
            key={x}
            aria-hidden="true"
            className="absolute"
            style={{ left: u(x), top: u(760), width: "1px", height: u(118), background: "#D2D0D0" }}
          />
        ))}
      </div>

      {/* =========================== portrait =========================== */}
      <div className="nav:hidden" style={{ background: PAPER }}>
        <div className="px-5 pt-9 pb-8">
          <h2 className="m-0 font-display text-[clamp(28px,7.8vw,40px)] uppercase leading-[1.04]">
            <span className="block" style={{ color: INK }}>
              You don&apos;t need everything.
            </span>
            <span className="block" style={{ color: GREY }}>
              And we don&apos;t believe in
            </span>
            <span className="block" style={{ color: AMBER }}>
              Selling everything.
            </span>
          </h2>
          <Image
            src="/images/im-swoosh.webp"
            alt=""
            width={390}
            height={48}
            aria-hidden="true"
            className="mt-2 h-auto w-[62%] max-w-[240px] mix-blend-multiply"
          />
          <Image
            src="/images/im-collage.webp"
            alt="A student at a desk with a signpost reading course, university, country, career and future"
            width={1105}
            height={570}
            sizes="(max-width: 1080px) 100vw, 1px"
            className="mt-4 h-auto w-full mix-blend-multiply"
          />

          <ul className="m-0 mt-6 grid list-none gap-0 p-0">
            {rows.map((row, i) => (
              <li
                key={row.product}
                className="flex items-center gap-4 border-t border-dashed border-[#B9B7B7] py-5 first:border-t-0 first:pt-0"
              >
                <Image
                  src={CIRCLES[i].src}
                  alt=""
                  width={212}
                  height={212}
                  aria-hidden="true"
                  className="h-[92px] w-[92px] shrink-0 rounded-full mix-blend-multiply"
                />
                <p className="m-0 font-sans text-[15px] leading-[1.5] text-[#3A3A3A]">
                  {row.text}{" "}
                  <span className="font-bold" style={{ color: ACCENT[i] }}>
                    {row.product}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <ul className="m-0 mt-2 grid list-none gap-0 p-0">
            {MAP_FIT.principles.map((p, i) => {
              const Icon = FOOTER_ICONS[i];
              return (
                <li key={p} className="flex items-center gap-4 border-t border-[#D2D0D0] py-5">
                  <span
                    aria-hidden="true"
                    className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#D6D4D4] bg-[#FBFAFA]"
                  >
                    <Icon className="h-6 w-6" style={{ color: AMBER }} strokeWidth={1.6} />
                  </span>
                  <p className="m-0 font-sans text-[15px] font-semibold leading-[1.5]" style={{ color: INK }}>
                    <Principle text={p} accent={FOOTER_ACCENT[i]} />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
