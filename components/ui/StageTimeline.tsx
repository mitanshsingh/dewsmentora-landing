import {
  ClipboardCheck,
  FileText,
  Globe,
  Landmark,
  Route,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { FrameworkIcon, FrameworkStage } from "@/lib/frameworks";

const ICONS: Record<FrameworkIcon, LucideIcon> = {
  profile: UserRound,
  career: TrendingUp,
  country: Globe,
  university: Landmark,
  readiness: ClipboardCheck,
  roadmap: Route,
  report: FileText,
};

/**
 * Vertical stage timeline used in place of the text-in-image product figures.
 *
 * Renders on the dark (`bg-ink`) product sections, so colours are fixed to the
 * on-ink palette rather than inherited.
 */
export default function StageTimeline({ stages }: { stages: FrameworkStage[] }) {
  return (
    <ol className="m-0 grid list-none gap-0 p-0">
      {stages.map((stage, i) => {
        const Icon = ICONS[stage.icon];
        const isLast = i === stages.length - 1;
        return (
          <li
            key={stage.n}
            className="relative grid grid-cols-[52px_1fr] gap-x-5 gap-y-0 pb-11 last:pb-0 sm:grid-cols-[64px_1fr] sm:gap-x-7"
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute top-[60px] bottom-0 left-[25px] w-px bg-white/20 sm:top-[72px] sm:left-[31px]"
              />
            )}

            <span
              aria-hidden="true"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-yellow bg-ink sm:h-16 sm:w-16"
            >
              <Icon className="h-6 w-6 text-yellow sm:h-7 sm:w-7" strokeWidth={1.75} />
            </span>

            <div className="min-w-0 pt-1.5 sm:pt-3">
              <p className="m-0 mb-1.5 font-sans text-[13px] font-bold tracking-[0.14em] text-yellow uppercase">
                Stage {stage.n}
              </p>
              <h3 className="m-0 mb-4 font-display text-[clamp(20px,2vw,28px)] leading-[1.1] uppercase">
                {stage.title}
              </h3>
              <ul
                className="m-0 grid list-none gap-x-8 gap-y-2.5 p-0"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
              >
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 font-serif text-[16px] leading-[1.45] text-[#C9C9C9]"
                  >
                    <span aria-hidden="true" className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-yellow/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
