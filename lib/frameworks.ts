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
  /**
   * Artwork that is already edge-to-edge dark. It must not be multiplied or
   * masked — it sits on a dark section and has no white ground to dissolve.
   */
  dark?: boolean;
};

export type ImageAsset = { src: string; width: number; height: number };

export type ProductVisual = {
  hero?: HeroVisual;
  pillars?: PillarSet;
  /** Full-width editorial banners from the content doc, shown under the hero. */
  banners?: (ImageAsset & { alt: string })[];
  /** "How your report is created" infographic: landscape for desktop, portrait for phones. */
  process?: { wide: ImageAsset; tall: ImageAsset; alt: string };
};

/* ------------------------------------------------------------------ */
/* The managed admission journey (How It Works page)                   */
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

const IMG = "/images/products";

export const PRODUCT_VISUALS: Record<string, ProductVisual> = {
  "identity-mapping": {
    hero: {
      src: `${IMG}/identity-hero.webp`,
      width: 1035,
      height: 680,
      alt: "Sketch of a student writing in a notebook, beside the quote “Clarity about yourself is the first responsible career decision.”",
    },
    banners: [
      {
        src: `${IMG}/identity-banner-ability.webp`,
        width: 1920,
        height: 815,
        alt: "Good at something doesn’t automatically mean built for it. Good at maths is not automatically engineering, good at biology is not automatically medicine, creative is not automatically design, good at communication is not automatically management. Ability is one signal; identity is the bigger picture — marks, interests, aptitude, behaviour, what parents observe and what the aspirant experiences each tell us something. Identity Mapping™ brings these signals together before direction is chosen.",
      },
      {
        src: `${IMG}/identity-banner-cost.webp`,
        width: 940,
        height: 398,
        alt: "The cost of a wrong direction isn’t only money: it is time, effort, motivation, opportunity and confidence. Identity Mapping™ cannot eliminate uncertainty, predict the future or make the decision for you — but before committing years to a direction, understanding the person behind the decision can matter.",
      },
    ],
    pillars: {
      heading: "What Identity Mapping™ changes",
      items: [
        {
          title: "Clearer self-understanding",
          body: "Understand what genuinely drives you—your strengths, interests, motivations and natural patterns.",
          icon: "eye",
        },
        {
          title: "Stronger sense of direction",
          body: "Turn scattered interests and possibilities into a clearer path forward.",
          icon: "compass",
        },
        {
          title: "Better-fit choices",
          body: "Identify academic and career options that align with who you are—not just what seems popular or expected.",
          icon: "target",
        },
        {
          title: "Confident decision-making",
          body: "Make important choices with greater clarity and less second-guessing.",
          icon: "check",
        },
        {
          title: "Distinct personal identity",
          body: "Recognise what makes you different and where your strongest potential lies.",
          icon: "profile",
        },
        {
          title: "More purposeful future",
          body: "Move forward with choices built around your abilities, aspirations and the person you want to become.",
          icon: "idea",
        },
      ],
    },
    process: {
      wide: { src: `${IMG}/identity-process-wide.webp`, width: 1379, height: 920 },
      tall: { src: `${IMG}/identity-process-tall.webp`, width: 1024, height: 1536 },
      alt: "How your Identity Mapping report is created, in six stages: candidate evidence architecture, multi-lens expert review, independent signal discovery, evidence triangulation, contradiction intelligence and hidden potential discovery, leading to the final Identity Mapping report.",
    },
  },

  "university-intelligence-mapping": {
    hero: {
      src: `${IMG}/uim-hero.webp`,
      width: 1100,
      height: 734,
      alt: "Sketch of a student researching universities at a desk, beside the quote “Find the right universities, not just any options.”",
    },
    banners: [
      {
        src: `${IMG}/uim-banner-decision.webp`,
        width: 1414,
        height: 598,
        alt: "From a complex world to a clear decision: your profile, universities, admissions data, courses and global opportunities pass through research, analysis, evaluation and comparison to become your University Intelligence Report.",
      },
      {
        src: `${IMG}/uim-banner-intelligence.webp`,
        width: 1380,
        height: 585,
        alt: "Not just universities. Complete intelligence for the right decision: global opportunities, program fit and trends, a personalised university shortlist, admission strategy, and career and ROI insights. University Intelligence Mapping converts complex global information into a clear, personalised roadmap.",
      },
    ],
    pillars: {
      heading: "What University Intelligence Mapping™ changes",
      items: [
        {
          title: "Smarter university choices",
          body: "Move beyond rankings to identify universities that genuinely fit your profile, goals and potential.",
          icon: "university",
        },
        {
          title: "Stronger program fit",
          body: "Match your academic interests and career direction with the right programs, curriculum and opportunities.",
          icon: "book",
        },
        {
          title: "Balanced application strategy",
          body: "Build the right mix of ambitious, competitive and realistic university choices.",
          icon: "layers",
        },
        {
          title: "Better opportunity alignment",
          body: "Evaluate universities through the opportunities that matter—research, internships, industry access, location and career pathways.",
          icon: "career",
        },
        {
          title: "More informed decisions",
          body: "Compare universities using meaningful factors instead of reputation, rankings or assumptions alone.",
          icon: "search",
        },
        {
          title: "Stronger admission strategy",
          body: "Focus your applications where profile fit, university expectations and future goals create the strongest case for admission.",
          icon: "target",
        },
      ],
    },
    process: {
      wide: { src: `${IMG}/uim-process-wide.webp`, width: 1379, height: 920 },
      tall: { src: `${IMG}/uim-process-tall.webp`, width: 1024, height: 1536 },
      alt: "How your University Intelligence Mapping report is created, in six stages: candidate-to-university translation, global opportunity discovery, program-level investigation, candidate × program fit analysis, multi-expert intelligence review and admission reality mapping, leading to a personalised shortlist, program insights, admission strategy and final recommendation.",
    },
  },

  "story-mapping": {
    hero: {
      src: `${IMG}/story-hero.webp`,
      width: 1100,
      height: 734,
      alt: "Sketch of a student writing at a desk, beside the quote “A clear and compelling Story Mapping turns your experiences into opportunities.”",
    },
    banners: [
      {
        src: `${IMG}/story-banner.webp`,
        width: 1427,
        height: 604,
        alt: "More than a list of achievements — a story that works for you. Your journey connected, not just documents; your strengths positioned, not just achievements; your story aligned, not just separate essays; your future amplified, not just an application. Story Mapping brings your academic journey, experiences and aspirations together into one compelling story before your applications are sent.",
      },
    ],
    pillars: {
      heading: "What Story Mapping™ changes",
      items: [
        {
          title: "Clear narrative direction",
          body: "Turn academics, experiences, achievements and ambitions into one focused story.",
          icon: "compass",
        },
        {
          title: "Stronger personal positioning",
          body: "Show what makes you distinctive—and why it matters to the admissions committee.",
          icon: "profile",
        },
        {
          title: "Connected application",
          body: "Make your SOP, essays, CV and recommendations work together instead of reading as separate documents.",
          icon: "layers",
        },
        {
          title: "Meaningful differentiation",
          body: "Move beyond listing achievements to reveal the thinking, choices and potential behind them.",
          icon: "idea",
        },
        {
          title: "Stronger university connection",
          body: "Clearly communicate why this program, why this university and why you belong there.",
          icon: "university",
        },
        {
          title: "More compelling application",
          body: "Give evaluators a coherent, credible and memorable reason to choose you.",
          icon: "trophy",
        },
      ],
    },
    process: {
      wide: { src: `${IMG}/story-process-wide.webp`, width: 1379, height: 920 },
      tall: { src: `${IMG}/story-process-tall.webp`, width: 1024, height: 1536 },
      alt: "How your Story Mapping application portfolio is created, in six stages: complete candidate evidence extraction, story mining, evidence classification, narrative DNA, differentiation discovery and multi-expert story review, leading to the final application portfolio.",
    },
  },

  "execution-mapping": {
    hero: {
      src: `${IMG}/execution-hero.webp`,
      width: 1100,
      height: 724,
      alt: "Sketch of a student planning applications, beside the quote “A well-executed plan turns your dream university from a possibility into a reality.”",
    },
    banners: [
      {
        src: `${IMG}/execution-banner.webp`,
        width: 1446,
        height: 613,
        alt: "Your journey. Our execution. From planning to filing, simple and seamless: your university list, cost & procedure report, Story Mapping and document design, application execution, dedicated executive support, and visa process & filing support.",
      },
    ],
    pillars: {
      heading: "What Execution Mapping™ changes",
      items: [
        {
          title: "Clearer application journey",
          body: "Turn multiple universities, requirements, documents, deadlines and procedures into one structured execution plan.",
          icon: "roadmap",
        },
        {
          title: "Cost visibility before execution",
          body: "Understand the expected application-related expenses through your personalised Cost & Procedure Report (CPR) before proceeding.",
          icon: "eye",
        },
        {
          title: "Fewer avoidable errors",
          body: "Reduce the risk of missed requirements, incomplete documents, incorrect submissions and overlooked deadlines through structured checks.",
          icon: "shield",
        },
        {
          title: "Better document coordination",
          body: "Bring SOPs, essays, CV/resume, recommendations and university-specific requirements into one coordinated process.",
          icon: "edit",
        },
        {
          title: "Stronger deadline control",
          body: "Know what needs to happen, for which university, and by when.",
          icon: "clock",
        },
        {
          title: "One point of coordination",
          body: "A dedicated executive helps coordinate applications, updates, follow-ups and next steps.",
          icon: "users",
        },
      ],
    },
  },
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

