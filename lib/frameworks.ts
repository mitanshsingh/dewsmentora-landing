/**
 * Structured replacements for the text-in-image figures.
 *
 * Every string here was previously baked into a PNG: invisible to search,
 * unreadable on phones and impossible to correct without a designer. Keeping
 * it as data means it is indexable, translatable, selectable and editable.
 *
 * Keyed by product slug where it belongs to a product. A product without an
 * entry still renders its original `hero` / `figure` image, so the remaining
 * composites can be migrated one at a time.
 */

export type FrameworkIcon =
  | "profile"
  | "career"
  | "country"
  | "university"
  | "readiness"
  | "roadmap"
  | "report"
  | "compass"
  | "target"
  | "shield"
  | "clock"
  | "users"
  | "award"
  | "book"
  | "briefcase"
  | "graduation"
  | "search"
  | "layers"
  | "plane"
  | "calendar"
  | "check"
  | "idea"
  | "send"
  | "register"
  | "edit"
  | "dashboard"
  | "inbox"
  | "eye"
  | "trophy";

export type FrameworkStage = {
  n: string;
  title: string;
  icon: FrameworkIcon;
  items: string[];
  /** Mutually exclusive routes through this stage, e.g. self-guided vs guided. */
  options?: { label: string; title: string; body: string }[];
};

export type Framework = {
  heading: string;
  intro: string;
  stages: FrameworkStage[];
  /** Guarantees that hold across every stage rather than at one of them. */
  throughout?: { heading: string; items: string[] };
  commitment?: { heading: string; body: string[] };
};

export type Pillar = { title: string; body: string; icon: FrameworkIcon };

export type PillarSet = { heading?: string; items: Pillar[] };

export type HeroVisual = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ProductVisual = {
  hero?: HeroVisual;
  pillars?: PillarSet;
  framework?: Framework;
};

/* ------------------------------------------------------------------ */
/* University Intelligence Mapping                                     */
/* ------------------------------------------------------------------ */

const UIM_FRAMEWORK: Framework = {
  heading: "From profile assessment to future outcomes",
  intro:
    "A structured intelligence framework designed to identify the most suitable global education pathways.",
  stages: [
    {
      n: "01",
      title: "Profile intelligence assessment",
      icon: "profile",
      items: [
        "Assess strengths",
        "Understand goals",
        "Career goal alignment",
        "Personal preferences",
        "Academic background",
        "Long-term vision",
      ],
    },
    {
      n: "02",
      title: "Career & industry mapping",
      icon: "career",
      items: [
        "Global industry trends",
        "In-demand careers",
        "Salary benchmarks",
        "Future workforce demand insights",
        "Career path exploration",
      ],
    },
    {
      n: "03",
      title: "Country intelligence analysis",
      icon: "country",
      items: [
        "Best countries to study",
        "Education quality",
        "Living cost analysis",
        "Post-study opportunities",
        "Safety & environment",
        "Long-term growth and stability",
      ],
    },
    {
      n: "04",
      title: "University & program mapping",
      icon: "university",
      items: [
        "Best university matches",
        "Program suitability",
        "Ranking & reputation",
        "Specialisations & electives",
        "Admission insights",
        "Program compatibility",
      ],
    },
    {
      n: "05",
      title: "Admission readiness assessment",
      icon: "readiness",
      items: [
        "Academic evaluation",
        "Test score benchmark",
        "Language readiness",
        "Application strength check",
        "Gap analysis & improvement",
      ],
    },
    {
      n: "06",
      title: "Roadmap & live evaluation",
      icon: "roadmap",
      items: [
        "Personalised action plan",
        "Timeline & milestones",
        "Financial planning & aid",
        "Career outcome mapping",
        "Risk assessment & backup planning",
        "Continuous evaluation",
      ],
    },
    {
      n: "07",
      title: "Strategic recommendation report",
      icon: "report",
      items: [
        "Comprehensive report",
        "Best-fit recommendations",
        "Alternative pathways",
        "Scholarship opportunities",
        "Career outlook summary",
        "Future readiness plan",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Execution Mapping — the managed admission journey                   */
/* ------------------------------------------------------------------ */

export const ADMISSION_JOURNEY: Framework = {
  heading: "Your admission journey",
  intro: "A structured process, professionally managed from registration to arrival.",
  stages: [
    {
      n: "01",
      title: "Register with the DEWS",
      icon: "register",
      items: [
        "Complete your registration",
        "Activate your DEWS Membership™",
        "Access your dashboard",
        "Receive onboarding information",
        "Begin your admission journey",
      ],
      options: [
        {
          label: "Option A",
          title: "Self-guided dashboard",
          body: "Complete everything through your online dashboard.",
        },
        {
          label: "Option B",
          title: "Guided information sessions",
          body: "Complete information with your Admission Executive in sessions.",
        },
      ],
    },
    {
      n: "02",
      title: "Personal onboarding & admission planning",
      icon: "dashboard",
      items: [
        "Meet your dedicated Admission Executive",
        "Understand the roadmap, timelines & documents",
        "Choose your preferred onboarding method",
      ],
    },
    {
      n: "03",
      title: "Application preparation & submission",
      icon: "edit",
      items: [
        "University application preparation",
        "SOP development & review",
        "Resume preparation",
        "LOR design & review",
        "Documentation verification",
        "Quality review",
        "Application submission",
        "Submission confirmation",
      ],
    },
    {
      n: "04",
      title: "Application management & offer tracking",
      icon: "inbox",
      items: [
        "Application status updates",
        "University communication support",
        "Additional document requests",
        "Interview coordination, if required",
        "Offer letter tracking",
        "Scholarship updates, where applicable",
        "Post-application task management",
      ],
    },
    {
      n: "05",
      title: "University selection & visa preparation",
      icon: "shield",
      items: [
        "Offer evaluation support",
        "Acceptance process",
        "Tuition deposit guidance",
        "CAS / COE / admission document support",
        "Financial documentation guidance",
        "Visa documentation checklist",
        "Visa application guidance",
        "Pre-visa readiness review",
      ],
    },
    {
      n: "06",
      title: "Pre-departure & beyond",
      icon: "plane",
      items: [
        "Pre-departure guidance",
        "Travel preparation",
        "Accommodation planning guidance",
        "Essential documentation checklist",
        "Arrival preparation",
        "Student readiness resources",
        "Final departure checklist",
      ],
    },
  ],
  throughout: {
    heading: "Throughout your journey you always receive",
    items: [
      "Dedicated Admission Executive",
      "Transparent communication",
      "Professional admission execution",
      "Secure member dashboard",
      "Structured document management",
      "Timely updates & reminders",
      "Complete progress tracking",
      "Clearly defined milestones",
    ],
  },
  commitment: {
    heading: "Our commitment",
    body: [
      "From your first registration to your first day at university, every stage of your admission journey is planned, tracked and professionally managed.",
      "Because successful international admissions are not built on last-minute efforts — they are built on organised execution, transparent communication, and consistent support every step of the way.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Per-product visuals                                                 */
/* ------------------------------------------------------------------ */

export const PRODUCT_VISUALS: Record<string, ProductVisual> = {
  "identity-mapping": {
    hero: {
      src: "/images/journey.webp",
      width: 720,
      height: 900,
      alt: "A student considering education and career directions",
    },
    pillars: {
      heading: "What Identity Mapping clarifies",
      items: [
        {
          title: "Right direction",
          body: "Understand the person making the decision before choosing a path.",
          icon: "compass",
        },
        {
          title: "Clarity over confusion",
          body: "Separate genuine fit from inherited expectation and conflicting advice.",
          icon: "idea",
        },
        {
          title: "Stronger decisions",
          body: "Course, university, country and career choices tested against who you are.",
          icon: "target",
        },
      ],
    },
  },

  "university-intelligence-mapping": {
    hero: {
      src: "/images/uim-hero.webp",
      width: 660,
      height: 800,
      alt: "A student holding a laptop, considering study destinations",
    },
    pillars: {
      heading: "Make smarter study abroad decisions",
      items: [
        {
          title: "Right country",
          body: "Identify the best countries aligned with your goals and future opportunities.",
          icon: "country",
        },
        {
          title: "Right university",
          body: "Find universities that fit your profile, ambition and career aspirations.",
          icon: "university",
        },
        {
          title: "Right program",
          body: "Choose programs that match your strengths, interests and career direction.",
          icon: "book",
        },
        {
          title: "Right career path",
          body: "Map pathways to industries and roles that align with your future goals.",
          icon: "career",
        },
        {
          title: "Right future",
          body: "Build a future with clarity, confidence and the right opportunities.",
          icon: "profile",
        },
      ],
    },
    framework: UIM_FRAMEWORK,
  },

  "story-mapping": {
    hero: {
      src: "/images/story-hero.webp",
      width: 914,
      height: 665,
      alt: "A student on a university campus",
    },
    pillars: {
      heading: "What a mapped story changes",
      items: [
        {
          title: "Clear career direction",
          body: "Define your path with confidence.",
          icon: "target",
        },
        {
          title: "Strong personal narrative",
          body: "Highlight your unique strengths and potential.",
          icon: "profile",
        },
        {
          title: "Strategic positioning",
          body: "Stand out to admissions committees.",
          icon: "compass",
        },
        {
          title: "Differentiated application",
          body: "A story that sets you apart from the rest.",
          icon: "layers",
        },
        {
          title: "University fit",
          body: "Connect with programs that match your goals.",
          icon: "university",
        },
        {
          title: "Better admissions outcomes",
          body: "Stronger stories lead to stronger results.",
          icon: "trophy",
        },
      ],
    },
  },

  "execution-mapping": {
    hero: {
      src: "/images/execution-hero.webp",
      width: 390,
      height: 550,
      alt: "A student walking up steps towards a university building",
    },
    pillars: {
      heading: "Execution excellence for high-stakes admissions",
      items: [
        {
          title: "Clear roadmap",
          body: "Defined milestones and timelines.",
          icon: "roadmap",
        },
        {
          title: "Zero-error execution",
          body: "Multiple verification checkpoints.",
          icon: "shield",
        },
        {
          title: "Expert-led delivery",
          body: "Specialists managing critical stages.",
          icon: "users",
        },
        {
          title: "Full visibility & control",
          body: "Real-time tracking and transparent updates.",
          icon: "eye",
        },
      ],
    },
    framework: ADMISSION_JOURNEY,
  },
};

/* ------------------------------------------------------------------ */
/* Story Mapping — the "why it matters" contrast                       */
/* ------------------------------------------------------------------ */

export const STORY_CONTRAST = {
  heading: "Why Story Mapping matters",
  intro:
    "The challenge is not presenting information. The challenge is presenting information in a way that supports the decision-making process of the evaluator.",
  left: {
    heading: "Most students focus on",
    caption: "Writing documents",
    items: [
      "Transcript",
      "Test scores",
      "Resume",
      "Certifications",
      "Recommendation letter",
      "Application essay",
    ],
  },
  right: {
    heading: "Universities focus on",
    caption: "Evaluating people",
    items: [
      "Academic readiness",
      "Leadership potential",
      "Program fit",
      "Professional maturity",
      "Career clarity",
      "Future contribution",
      "Intellectual curiosity",
      "Long-term success probability",
    ],
  },
  flow: ["Information", "Intelligence", "Impact"],
  bridge: [
    { title: "Connects the dots", icon: "layers" as FrameworkIcon },
    { title: "Creates a coherent narrative", icon: "book" as FrameworkIcon },
    { title: "Drives direction and purpose", icon: "target" as FrameworkIcon },
  ],
};

/* ------------------------------------------------------------------ */
/* "You don't need every Map" — used on /for-students and the homepage */
/* ------------------------------------------------------------------ */

export const MAP_FIT = {
  heading: "You don't need everything, and we don't believe in selling everything",
  rows: [
    { text: "An aspirant who knows their direction may not require", product: "Identity Mapping™" },
    {
      text: "An aspirant who has already validated their universities may not require",
      product: "University Intelligence Mapping™",
    },
    {
      text: "Someone capable of independently executing their applications may not require",
      product: "Execution Mapping™",
    },
  ],
  principles: [
    "Each Map addresses a specific decision problem.",
    "DEWSMENTORA's role is not to maximise the number of services you purchase.",
    "It is to identify where structured evaluation or professional support genuinely adds value.",
  ],
};

/* ------------------------------------------------------------------ */
/* Homepage — the advantage behind every successful journey            */
/* ------------------------------------------------------------------ */

export const WHY_DEWS_PILLARS: Pillar[] = [
  {
    title: "Proven expertise",
    body: "Years of experience and deep domain knowledge you can trust.",
    icon: "award",
  },
  {
    title: "Precision in execution",
    body: "Every detail is planned, tracked and executed with accuracy.",
    icon: "target",
  },
  {
    title: "Risk mitigation",
    body: "We identify challenges early and keep your journey on track.",
    icon: "shield",
  },
  {
    title: "Timely delivery",
    body: "We value your time and ensure milestones are met, every time.",
    icon: "clock",
  },
  {
    title: "Client-centric approach",
    body: "Your goals are the priority. We build partnerships, not projects.",
    icon: "users",
  },
  {
    title: "Results that matter",
    body: "We focus on outcomes that drive growth and create lasting impact.",
    icon: "career",
  },
];

export function getProductVisual(slug: string): ProductVisual | undefined {
  return PRODUCT_VISUALS[slug];
}

export function getFramework(slug: string): Framework | undefined {
  return PRODUCT_VISUALS[slug]?.framework;
}
