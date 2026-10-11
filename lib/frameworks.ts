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
  | "trophy"
  | "chat"
  | "video"
  | "visa"
  | "evidence"
  | "signal"
  | "triangulate"
  | "contrast"
  | "translate"
  | "investigate"
  | "fit"
  | "shortlist"
  | "signpost"
  | "candidate"
  | "dna"
  | "star"
  | "mail"
  | "files"
  | "resume"
  | "write";

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

export type PillarSet = { heading?: string; items: Pillar[]; maxColumns?: number };

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

/** A bullet, optionally led by a bold term ("Past — what shaped me?"). */
export type ProcessItem = string | { term: string; text: string };

export type ProcessStage = {
  n: string;
  title: string;
  icon: FrameworkIcon;
  items: ProcessItem[];
  /** What the stage hands to the next one. */
  output: string;
};

export type ProcessDeliverable = { title: string; body?: string; icon?: FrameworkIcon };

/**
 * "How your … report is created": the owner's per-Map process infographics.
 * Each stage produces a named output, and the stages together produce the
 * final report or portfolio.
 */
export type ReportProcess = {
  /** Split so the middle phrase can be highlighted, as in the artwork. */
  heading: [lead: string, highlight: string, tail: string];
  tagline: string;
  stages: ProcessStage[];
  /** Deliverables with icons render as tiles; without, as a bullet list. */
  final: { heading: string; items: ProcessDeliverable[] };
  commitment: string;
};

export type ProductVisual = {
  hero?: HeroVisual;
  pillars?: PillarSet;
  framework?: Framework;
  process?: ReportProcess;
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
/* How each report is created                                          */
/*                                                                     */
/* Transcribed from the owner's landscape and portrait infographics.   */
/* Where the two differed, the fuller wording is kept.                 */
/* ------------------------------------------------------------------ */

const IDENTITY_PROCESS: ReportProcess = {
  heading: ["How your", "Identity Mapping report", "is created"],
  tagline: "Not generated. Investigated. Challenged. Interpreted. Validated.",
  stages: [
    {
      n: "01",
      title: "Candidate evidence architecture",
      icon: "evidence",
      items: [
        "Organise complete information",
        "Connect different pieces",
        "Identify patterns & gaps",
        "What stands out?",
        "What is inconsistent?",
        "What needs further investigation?",
      ],
      output: "Candidate Evidence Map",
    },
    {
      n: "02",
      title: "Multi-lens expert review",
      icon: "users",
      items: [
        "Academic profile",
        "Career & industry direction",
        "Behavioural patterns",
        "Strength & potential",
        "Higher-education pathways",
        "Skill development",
        "Application & future positioning",
        "Multiple professional perspectives",
      ],
      output: "Multi-Perspective Candidate Review",
    },
    {
      n: "03",
      title: "Independent signal discovery",
      icon: "signal",
      items: [
        "Identify recurring signals",
        "Look across academics, activities, experiences",
        "Analyse key traits",
        "Find patterns across unrelated situations",
        "Investigate what appears consistently",
      ],
      output: "Identity Signal Map",
    },
    {
      n: "04",
      title: "Evidence triangulation",
      icon: "triangulate",
      items: [
        "Self-perception (what they say)",
        "Demonstrated evidence (what they have done)",
        "Recurring behaviour (what appears consistently)",
        "Assessment signals (structured inputs)",
        "Expert interpretation (in context)",
        "Stronger convergence = stronger confidence",
      ],
      output: "Evidence Confidence Map",
    },
    {
      n: "05",
      title: "Contradiction intelligence",
      icon: "contrast",
      items: [
        "Investigate conflicting evidence",
        "Understand real aspirations",
        "Identify external influences (parents, peers, prestige, etc.)",
        "Separate authentic direction from external pressure",
        "Assess genuine potential behind contradictions",
      ],
      output: "Alignment & Contradiction Map",
    },
    {
      n: "06",
      title: "Hidden potential discovery",
      icon: "idea",
      items: [
        "Proven strengths",
        "Emerging strengths",
        "Underutilised potential",
        "Development priorities",
        "Look beyond marks and achievements",
        "Identify where they could become exceptional",
      ],
      output: "Potential & Development Map",
    },
  ],
  final: {
    heading: "Final Identity Mapping report",
    items: [
      { title: "Complete identity profile" },
      { title: "Key strengths and differentiators" },
      { title: "Alignments and contradictions" },
      { title: "True interests and motivations" },
      { title: "Academic and career direction options" },
      { title: "Development priorities" },
      { title: "Actionable next steps" },
      { title: "A clear, personalised roadmap" },
    ],
  },
  commitment:
    "A deep, unbiased and expert-led process to help every candidate understand who they are, where they can go and how to get there with clarity, confidence and purpose.",
};

const UIM_PROCESS: ReportProcess = {
  heading: ["How your", "University Intelligence Mapping report", "is created"],
  tagline: "Not a university list. A decision intelligence system.",
  stages: [
    {
      n: "01",
      title: "Candidate-to-university translation",
      icon: "translate",
      items: [
        "Use Identity Mapping findings",
        "Consider academics, interests, career goals",
        "Include learning environment, financial and geographic preferences",
        "Define what the right university must provide for this candidate",
      ],
      output: "Candidate University Requirement Map",
    },
    {
      n: "02",
      title: "Global opportunity discovery",
      icon: "country",
      items: [
        "Look beyond familiar names",
        "Remove bias from rankings, brand, social media",
        "Search widely for relevant universities and programs",
        "Identify strong, lesser-known opportunities",
      ],
      output: "Global University Opportunity Pool",
    },
    {
      n: "03",
      title: "Program-level investigation",
      icon: "investigate",
      items: [
        "Analyse the actual program (not just university ranking)",
        "Curriculum, specialisations, electives",
        "Faculty, research, laboratories",
        "Industry projects, internships",
        "Experiential learning, flexibility",
        "Career relevance and academic structure",
      ],
      output: "Program Intelligence Profile",
    },
    {
      n: "04",
      title: "Candidate × program fit analysis",
      icon: "fit",
      items: [
        "Compare the candidate’s strengths, interests and goals with program offerings",
        "Identify the right environment and learning fit",
        "Reveal if a famous university is still the right choice",
        "Focus on “Should this candidate actually study there?”",
      ],
      output: "Candidate–Program Fit Map",
    },
    {
      n: "05",
      title: "Multi-expert intelligence review",
      icon: "users",
      items: [
        "Different professional lenses review shortlisted options",
        "Academic fit, higher-education strategy",
        "Career alignment, industry relevance",
        "Competitiveness, application strategy",
        "Financial considerations",
        "Reduce one-dimensional advice",
      ],
      output: "Multi-Perspective University Review",
    },
    {
      n: "06",
      title: "Admission reality mapping",
      icon: "signal",
      items: [
        "Evaluate each university against the candidate’s profile",
        "Consider academics, test scores, projects, research, work experience, leadership and achievements",
        "Categorise opportunities (aspirational, competitive, strategic, safe)",
        "Identify risks and alternatives",
        "Provide realistic admission possibility",
      ],
      output: "Admission Probability & Strategy Map",
    },
  ],
  final: {
    heading: "Final University Intelligence Mapping report",
    items: [
      { title: "Personalised university shortlist", body: "With clear rationale", icon: "shortlist" },
      { title: "Detailed program insights", body: "What each program offers", icon: "report" },
      { title: "Admission strategy", body: "Realistic positioning", icon: "signal" },
      { title: "Comparison & final recommendation", body: "Which university and why", icon: "signpost" },
    ],
  },
  commitment:
    "A structured, evidence-based and expert-led process to help every candidate identify the right universities and programs, with clarity, confidence and a clear path forward.",
};

const STORY_PROCESS: ReportProcess = {
  heading: ["How your", "Story Mapping application portfolio", "is created"],
  tagline: "Your profile may be strong. But can the evaluator see why?",
  stages: [
    {
      n: "01",
      title: "Complete candidate evidence extraction",
      icon: "candidate",
      items: [
        "Academics, projects, internships, research",
        "Work experience, leadership, activities",
        "Achievements, failures & challenges",
        "Decisions, turning points, motivations",
        "Career ambitions, personal experiences",
        "Future aspirations",
      ],
      output: "Candidate Story Evidence Bank",
    },
    {
      n: "02",
      title: "Story mining",
      icon: "search",
      items: [
        "What happened?",
        "Why did you choose it?",
        "What did you actually do?",
        "What problem did you face?",
        "How did you respond?",
        "What changed? What did you learn?",
        "How did it influence what came next?",
        "What does this reveal about you?",
      ],
      output: "Candidate Story Bank",
    },
    {
      n: "03",
      title: "Evidence classification",
      icon: "layers",
      items: [
        "Academic readiness, intellectual curiosity",
        "Leadership, initiative, problem-solving",
        "Resilience, creativity, professional maturity",
        "Collaboration, impact, career clarity",
        "Contribution potential, future direction",
      ],
      output: "Evidence-to-Attribute Map",
    },
    {
      n: "04",
      title: "Narrative DNA",
      icon: "dna",
      items: [
        { term: "Past", text: "What shaped me?" },
        { term: "Development", text: "What changed me?" },
        { term: "Present", text: "Who have I become?" },
        { term: "Direction", text: "Where am I going?" },
        { term: "Purpose", text: "Why is this next academic step necessary?" },
      ],
      output: "Core Candidate Narrative",
    },
    {
      n: "05",
      title: "Differentiation discovery",
      icon: "star",
      items: [
        "Analyse what makes the candidate unique",
        "Experience × Perspective × Capability × Motivation × Ambition",
        "Uncover existing differentiators",
        "Show why this candidate should be remembered",
      ],
      output: "Candidate Differentiation Position",
    },
    {
      n: "06",
      title: "Multi-expert story review",
      icon: "users",
      items: [
        "Academic positioning, career direction",
        "Admissions strategy, candidate differentiation",
        "Communication & narrative, program fit",
        "Application consistency",
        "Different professional perspectives",
        "Reduce one-dimensional interpretation",
      ],
      output: "Multi-Perspective Candidate Review",
    },
  ],
  final: {
    heading: "Final application portfolio",
    items: [
      { title: "Application narrative blueprint", body: "One clear story across all documents", icon: "report" },
      { title: "Statement of purpose", body: "Compelling and authentic", icon: "edit" },
      { title: "Personal statements and essays", body: "Tailored to each university", icon: "write" },
      { title: "Academic CV / resume", body: "Strong and consistent with your story", icon: "resume" },
      { title: "Recommendation strategy framework", body: "Guidance for impactful recommendations", icon: "mail" },
      { title: "University-specific application versions", body: "Customised for each target university", icon: "files" },
    ],
  },
  commitment:
    "A structured, expert-led process to help every candidate present their story with clarity, authenticity and impact — and stand out in a competitive admissions process.",
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
      dark: true,
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
    process: IDENTITY_PROCESS,
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
    process: UIM_PROCESS,
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
      maxColumns: 3,
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
    process: STORY_PROCESS,
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

export function getProcess(slug: string): ReportProcess | undefined {
  return PRODUCT_VISUALS[slug]?.process;
}
