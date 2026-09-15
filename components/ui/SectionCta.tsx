import Button from "./Button";
import { APP_REGISTER_URL } from "@/lib/site-content";

export default function SectionCta({
  heading,
  tone = "yellow",
  secondary,
}: {
  heading: string;
  tone?: "yellow" | "dark";
  secondary?: { label: string; href: string };
}) {
  const wrapClass =
    tone === "yellow"
      ? "bg-yellow"
      : "bg-ink text-white";

  return (
    <div className={`mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-7 px-10 py-14 ${wrapClass}`}>
      <h2 className="m-0 max-w-[24ch] font-display text-[clamp(28px,3vw,44px)] uppercase leading-none">
        {heading}
      </h2>
      <div className="flex flex-wrap gap-3.5">
        <Button href={APP_REGISTER_URL} variant={tone === "yellow" ? "dark" : "primary"} disabled>
          Coming Soon
        </Button>
        {secondary && (
          <Button href={secondary.href} variant={tone === "yellow" ? "outline-dark" : "outline-light"}>
            {secondary.label}
          </Button>
        )}
      </div>
    </div>
  );
}
