import Image from "next/image";

/**
 * Watercolour artwork that sits *in* the page rather than on it.
 *
 * These crops came off a white studio canvas, so dropping them straight onto a
 * tinted section reads as a pasted rectangle. Two things fix that:
 *
 * - `mix-blend-multiply` turns the white ground transparent against a lighter
 *   backdrop, so the art picks up the surface colour instead of fighting it.
 * - a radial mask feathers whatever edge survives the blend, so the artwork
 *   dissolves outward instead of stopping at a bounding box.
 *
 * `surface` must name the colour the figure is sitting on, and it is painted on
 * the wrapper rather than inherited. Blending resolves against the nearest
 * stacking context, and `Reveal` creates one for the length of its fade
 * (`opacity` < 1) — without an explicit surface the art would blend against
 * nothing mid-animation and visibly snap when the fade finished.
 *
 * Artwork that is already edge-to-edge dark has no white ground to remove and
 * would only be muddied by multiply: pass `blend={false} fade={false}`.
 */
// The falloff has to happen *inside* the frame. An ellipse wider than the box
// puts its transparent stop off-canvas, so the edges never actually fade and
// the crop still reads as a rectangle.
const FADE =
  "radial-gradient(86% 94% at 50% 42%, #000 42%, rgba(0,0,0,0.66) 70%, rgba(0,0,0,0.18) 88%, transparent 100%)";

export default function ArtFigure({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  blend = true,
  fade = true,
  surface = "bg-transparent",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  blend?: boolean;
  fade?: boolean;
  /** Tailwind background utility matching the section behind the figure. */
  surface?: string;
  className?: string;
}) {
  return (
    <span className={`block ${blend ? surface : ""} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={`h-auto w-full ${blend ? "mix-blend-multiply" : ""}`}
        style={fade ? { maskImage: FADE, WebkitMaskImage: FADE } : undefined}
      />
    </span>
  );
}
