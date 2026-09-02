import {
  Award,
  BookOpen,
  Briefcase,
  CalendarDays,
  CircleCheck,
  Clock,
  Compass,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Inbox,
  Landmark,
  Layers,
  Lightbulb,
  MonitorSmartphone,
  Plane,
  ClipboardCheck,
  Route,
  Search,
  Send,
  ShieldCheck,
  SquarePen,
  Target,
  TrendingUp,
  Trophy,
  UserRound,
  UserRoundPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { FrameworkIcon as IconKey } from "@/lib/frameworks";

/**
 * Single source of truth for the icons that replaced the raster icons baked
 * into the product figures. Rendered from server components, so these
 * serialize to inline SVG and ship no client JavaScript.
 */
export const FRAMEWORK_ICONS: Record<IconKey, LucideIcon> = {
  profile: UserRound,
  career: TrendingUp,
  country: Globe,
  university: Landmark,
  readiness: ClipboardCheck,
  roadmap: Route,
  report: FileText,
  compass: Compass,
  target: Target,
  shield: ShieldCheck,
  clock: Clock,
  users: Users,
  award: Award,
  book: BookOpen,
  briefcase: Briefcase,
  graduation: GraduationCap,
  search: Search,
  layers: Layers,
  plane: Plane,
  calendar: CalendarDays,
  check: CircleCheck,
  idea: Lightbulb,
  send: Send,
  register: UserRoundPlus,
  edit: SquarePen,
  dashboard: MonitorSmartphone,
  inbox: Inbox,
  eye: Eye,
  trophy: Trophy,
};

export default function FrameworkIcon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = FRAMEWORK_ICONS[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
