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
  | "write"
  | "calculator"
  | "palette"
  | "flame"
  | "door"
  | "fingerprint"
  | "confidence"
  | "pin"
  | "map";

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
  /**
   * Feather the edges (default). Off for artwork with lettering running to its
   * edge, which the feathering would fade out.
   */
  fade?: boolean;
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

/** A line with one phrase picked out, as in the owner's artwork. */
export type Highlighted = [lead: string, highlight: string, tail?: string];

type ContrastSide = {
  caption: string;
  items: string[];
  /** What the list amounts to, set under it. */
  note?: string;
};

/** What people usually weigh, set against what the Map weighs. */
export type Contrast = {
  heading: string;
  intro: string;
  left: ContrastSide;
  right: ContrastSide;
  /** A closing band under the cards: lead-in lines, a named sequence and a last word. */
  outro?: { lines: string[]; flowLabel: string; flow: string[]; close: string };
};

/**
 * The owner's product banners: a row of "this ≠ that" pairs ("Good at
 * something doesn't automatically mean built for it") or of numbered steps
 * ("Your journey. Our execution."), then a list of signals, a summary and a quote.
 */
export type SignalsBanner = {
  label: string;
  kicker: string;
  heading: Highlighted;
  pairs?: { is: string; isNot: string; icon: FrameworkIcon }[];
  steps?: { title: string; body: string; icon: FrameworkIcon }[];
  /** First line plain, second marked. */
  signals: { heading: [string, string]; items: string[] };
  summary: string;
  summaryIcon: FrameworkIcon;
  quote: string;
};

/** "From a complex world to a clear decision": inputs → mapping → report. */
export type DecisionFlow = {
  label: string;
  heading: Highlighted;
  inputs: { heading: string; items: { title: string; detail: string; icon: FrameworkIcon }[] };
  mapping: { heading: string; actions: { label: string; icon: FrameworkIcon }[]; layers: string[] };
  output: { heading: string; tagline: string; items: { title: string; icon: FrameworkIcon }[] };
};

/** "The cost of a wrong direction isn't only money." */
export type DirectionStakes = {
  heading: Highlighted;
  costs: { label: string; icon: FrameworkIcon }[];
  limits: string[];
  lead: string;
  close: Highlighted;
};

export type ProductVisual = {
  hero?: HeroVisual;
  /** Set straight after the hero. */
  signals?: SignalsBanner;
  pillars?: PillarSet;
  /** Shown in the Map's block on /how-it-works, not on the product page. */
  framework?: Framework;
  process?: ReportProcess;
  /** Set after the How It Works block. */
  contrast?: Contrast;
  /** Set just before What you receive. */
  stakes?: DirectionStakes;
  /** Set just before What you receive. */
  flow?: DecisionFlow;
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
      src: "/images/identity-hero.webp",
      width: 1035,
      height: 680,
      alt: "Sketch of a student writing in a notebook, beside the words “Clarity about yourself is the first responsible career decision.”",
      fade: false,
    },
    signals: {
      label: "Identity Mapping™",
      kicker: "Understand yourself. Choose your direction.",
      heading: ["Good at something doesn't automatically mean", "built for it."],
      pairs: [
        { is: "Good at Maths", isNot: "Automatically Engineering", icon: "calculator" },
        { is: "Good at Biology", isNot: "Automatically Medicine", icon: "dna" },
        { is: "Creative", isNot: "Automatically Design", icon: "palette" },
        { is: "Good at Communication", isNot: "Automatically Management", icon: "chat" },
      ],
      signals: {
        heading: ["Ability is one signal.", "Identity is the bigger picture."],
        items: [
          "Marks tell us something.",
          "Interests tell us something.",
          "Aptitude tells us something.",
          "Behaviour tells us something.",
          "Parents observe something.",
          "The aspirant experiences something.",
        ],
      },
      summary: "Identity Mapping™ brings these signals together before direction is chosen.",
      summaryIcon: "fingerprint",
      quote: "Marks tell a story. Identity writes the future.",
    },
    pillars: {
      heading: "What Identity Mapping™ changes",
      maxColumns: 3,
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
          icon: "fit",
        },
        {
          title: "Confident decision-making",
          body: "Make important choices with greater clarity and less second-guessing.",
          icon: "check",
        },
        {
          title: "Distinct personal identity",
          body: "Recognise what makes you different and where your strongest potential lies.",
          icon: "fingerprint",
        },
        {
          title: "More purposeful future",
          body: "Move forward with choices built around your abilities, aspirations and the person you want to become.",
          icon: "roadmap",
        },
      ],
    },
    process: IDENTITY_PROCESS,
    contrast: {
      heading: "Why Identity Mapping™ matters",
      intro:
        "The challenge is not having more career options. The challenge is knowing which opportunities genuinely fit who you are—and which only look attractive from the outside.",
      left: {
        caption: "Most students make decisions around",
        items: [
          "Marks and academic performance",
          "Popular courses",
          "Salary expectations",
          "University rankings",
          "Parent and peer influence",
          "Current market trends",
          "Careers they already know about",
        ],
        note: "These factors tell you what options are available.",
      },
      right: {
        caption: "Identity Mapping™ looks deeper",
        items: [
          "Natural strengths",
          "Thinking and problem-solving style",
          "Interests and motivations",
          "Behavioural patterns",
          "Preferred environments",
          "Values and priorities",
          "Emerging capabilities",
          "Long-term aspirations",
        ],
        note: "These factors help reveal which opportunities actually fit you.",
      },
    },
    stakes: {
      heading: ["The cost of a", "wrong direction", "isn't only money."],
      costs: [
        { label: "Time", icon: "clock" },
        { label: "Effort", icon: "target" },
        { label: "Motivation", icon: "flame" },
        { label: "Opportunity", icon: "door" },
        { label: "Confidence", icon: "confidence" },
      ],
      limits: [
        "Identity Mapping™ cannot eliminate uncertainty.",
        "It cannot predict the future.",
        "It cannot make the decision for you.",
      ],
      lead: "But before committing years to a direction,",
      close: ["", "understanding the person behind the decision", "can matter."],
    },
  },

  "university-intelligence-mapping": {
    hero: {
      src: "/images/uim-sketch.webp",
      width: 1330,
      height: 887,
      alt: "Sketch of a student researching universities around the world, beside the words “Find the right universities, not just any options.”",
      fade: false,
    },
    signals: {
      label: "University Intelligence Mapping™",
      kicker: "The right university. A brighter future.",
      heading: ["Not just universities. Complete intelligence for the", "right decision."],
      pairs: [
        { is: "Global Opportunities", isNot: "Not just a list of universities", icon: "country" },
        { is: "Program Fit & Trends", isNot: "Not just popular courses", icon: "signal" },
        { is: "Personalised University Shortlist", isNot: "Not just rankings", icon: "candidate" },
        { is: "Admission Strategy", isNot: "Not just general advice", icon: "university" },
        { is: "Career & ROI Insights", isNot: "Not just today's option", icon: "career" },
      ],
      signals: {
        heading: ["Deeper insights. Clearer direction.", "Better outcomes."],
        items: [
          "Analyses your profile with global perspective.",
          "Recommends the right universities and programs.",
          "Maps admission trends, requirements and chances.",
          "Compares options across countries.",
          "Builds a personalised application roadmap.",
          "Helps you make an informed, confident decision.",
        ],
      },
      summary:
        "University Intelligence Mapping™ converts complex global information into a clear, personalised roadmap — so you choose with confidence.",
      summaryIcon: "graduation",
      quote: "The right information doesn't just open doors — it opens a bigger world.",
    },
    pillars: {
      heading: "What University Intelligence Mapping™ changes",
      maxColumns: 3,
      items: [
        {
          title: "Smarter university choices",
          body: "Move beyond rankings to identify universities that genuinely fit your profile, goals and potential.",
          icon: "university",
        },
        {
          title: "Stronger program fit",
          body: "Match your academic interests and career direction with the right programs, curriculum and opportunities.",
          icon: "fit",
        },
        {
          title: "Balanced application strategy",
          body: "Build the right mix of ambitious, competitive and realistic university choices.",
          icon: "layers",
        },
        {
          title: "Better opportunity alignment",
          body: "Evaluate universities through the opportunities that matter—research, internships, industry access, location and career pathways.",
          icon: "compass",
        },
        {
          title: "More informed decisions",
          body: "Compare universities using meaningful factors instead of reputation, rankings or assumptions alone.",
          icon: "contrast",
        },
        {
          title: "Stronger admission strategy",
          body: "Focus your applications where profile fit, university expectations and future goals create the strongest case for admission.",
          icon: "target",
        },
      ],
    },
    process: UIM_PROCESS,
    contrast: {
      heading: "Why University Intelligence Mapping™ matters",
      intro:
        "The challenge is not finding universities. The challenge is identifying which universities, programmes and opportunities make the most strategic sense for you.",
      left: {
        caption: "Most students focus on",
        items: [
          "Searching and shortlisting universities",
          "Global rankings",
          "Popular universities",
          "Course names",
          "Location",
          "Tuition fees",
          "Entry requirements",
          "Recommendations from friends and family",
          "General online searches",
        ],
        note: "These factors tell you where you could apply.",
      },
      right: {
        caption: "University Intelligence Mapping™ looks deeper",
        items: [
          "Academic and profile fit",
          "Programme curriculum alignment",
          "Admission competitiveness",
          "University-specific selection priorities",
          "Career and industry outcomes",
          "Research and specialisation opportunities",
          "Geographic and financial considerations",
          "Scholarship and funding potential",
          "Aspirational, Target and Strategic options",
        ],
        note: "These factors help determine where you should apply—and why.",
      },
    },
    flow: {
      label: "University Intelligence Mapping™",
      heading: ["From a complex world to a", "clear decision."],
      inputs: {
        heading: "What goes in",
        items: [
          { title: "Universities", detail: "Programs · Rankings · Requirements", icon: "university" },
          { title: "Admissions data", detail: "Trends · Acceptance rates · Profiles", icon: "investigate" },
          { title: "Your profile", detail: "Academics · Experience · Goals · Interests", icon: "profile" },
          { title: "Global opportunities", detail: "Countries · Visas · Scholarships · Careers", icon: "country" },
          { title: "Courses & curriculum", detail: "Fit · Options · Comparisons", icon: "book" },
        ],
      },
      mapping: {
        heading: "University Intelligence Mapping",
        actions: [
          { label: "Research", icon: "search" },
          { label: "Analyse", icon: "signal" },
          { label: "Evaluate", icon: "readiness" },
          { label: "Compare", icon: "contrast" },
          { label: "Map & align", icon: "pin" },
        ],
        layers: ["Data analysis", "Opportunity mapping", "Personal fit", "Expert insights", "Strategic roadmap"],
      },
      output: {
        heading: "Your University Intelligence Report",
        tagline: "Right universities. Brighter future.",
        items: [
          { title: "Best-fit universities", icon: "university" },
          { title: "Recommended courses", icon: "report" },
          { title: "Admission strategy", icon: "target" },
          { title: "Scholarships & funding", icon: "graduation" },
          { title: "Career outlook & ROI analysis", icon: "career" },
          { title: "Country comparison & visa pathways", icon: "country" },
          { title: "Next steps roadmap", icon: "roadmap" },
        ],
      },
    },
  },

  "story-mapping": {
    hero: {
      src: "/images/story-sketch.webp",
      width: 1374,
      height: 916,
      alt: "Sketch of a student writing beside books labelled My Experiences, My Strengths, My Passions, My Story and My Future, with the words “A clear and compelling Story Mapping turns your experiences into opportunities.”",
      fade: false,
    },
    signals: {
      label: "Story Mapping™",
      kicker: "Your journey. A clearer story. A stronger future.",
      heading: ["More than a list of achievements. A story that", "works for you."],
      pairs: [
        { is: "Your Journey Connected", isNot: "Not just documents", icon: "book" },
        { is: "Your Strengths Positioned", isNot: "Not just achievements", icon: "target" },
        { is: "Your Story Aligned", isNot: "Not just separate essays", icon: "write" },
        { is: "Your Future Amplified", isNot: "Not just an application", icon: "graduation" },
      ],
      signals: {
        heading: ["A stronger", "narrative creates greater opportunities."],
        items: [
          "Brings your experiences together.",
          "Highlights what makes you unique.",
          "Creates a clear and consistent narrative.",
          "Aligns with what universities value.",
          "Builds stronger applications.",
          "Helps you stand out with confidence.",
        ],
      },
      summary:
        "Story Mapping™ brings your academic journey, experiences and aspirations together into one compelling story — before your applications are sent.",
      summaryIcon: "map",
      quote: "Stories don't just tell your past — they open your future.",
    },
    pillars: {
      heading: "What Story Mapping™ changes",
      maxColumns: 3,
      items: [
        {
          title: "Clear narrative direction",
          body: "Turn academics, experiences, achievements and ambitions into one focused story.",
          icon: "compass",
        },
        {
          title: "Stronger personal positioning",
          body: "Show what makes you distinctive—and why it matters to the admissions committee.",
          icon: "target",
        },
        {
          title: "Connected application",
          body: "Make your SOP, essays, CV and recommendations work together instead of reading as separate documents.",
          icon: "layers",
        },
        {
          title: "Meaningful differentiation",
          body: "Move beyond listing achievements to reveal the thinking, choices and potential behind them.",
          icon: "star",
        },
        {
          title: "Stronger university connection",
          body: "Clearly communicate why this program, why this university and why you belong there.",
          icon: "university",
        },
        {
          title: "More compelling application",
          body: "Give evaluators a coherent, credible and memorable reason to choose you.",
          icon: "award",
        },
      ],
    },
    process: STORY_PROCESS,
    contrast: {
      heading: "Why Story Mapping™ matters",
      intro:
        "The challenge is not having achievements. The challenge is presenting them in a way that helps an evaluator understand who you are, what drives you and why you belong in the programme.",
      left: {
        caption: "Most students focus on",
        items: [
          "Preparing application documents",
          "Academic transcripts",
          "Test scores",
          "Résumé / CV",
          "Certifications",
          "Recommendation letters",
          "Statement of Purpose",
          "Application essays",
          "Extracurricular achievements",
        ],
        note: "These documents tell the university what you have done.",
      },
      right: {
        caption: "Story Mapping™ looks deeper",
        items: [
          "Academic and intellectual progression",
          "Defining experiences and decisions",
          "Strengths and differentiators",
          "Leadership and initiative",
          "Motivation and career direction",
          "Programme and university alignment",
          "Evidence behind claims",
          "Future contribution and potential",
        ],
        note: "These factors help the evaluator understand what your journey means.",
      },
    },
  },

  "execution-mapping": {
    hero: {
      src: "/images/execution-sketch.webp",
      width: 1293,
      height: 851,
      alt: "Sketch of a student planning applications beside a checklist of universities, requirements, deadlines, documents, applications and visa, with the words “A well-executed plan turns your dream university from a possibility into a reality.”",
      fade: false,
    },
    signals: {
      label: "Execution Mapping™",
      kicker: "From your university decision to a successful application journey.",
      heading: ["Your journey. Our execution. From planning to filing.", "Simple and seamless."],
      steps: [
        {
          title: "Your university list",
          body: "You share your selected universities from your UIM report.",
          icon: "shortlist",
        },
        {
          title: "Cost & Procedure Report (CPR)",
          body: "We map all application-related costs, requirements and deadlines.",
          icon: "report",
        },
        {
          title: "Story Mapping & document design",
          body: "We create and refine your SOPs, essays, CV and LOR strategy.",
          icon: "write",
        },
        {
          title: "Application execution",
          body: "We complete accurate submissions across all universities.",
          icon: "send",
        },
        {
          title: "Dedicated executive support",
          body: "One point of contact for updates, follow-ups and next steps.",
          icon: "users",
        },
        {
          title: "Visa process & filing support",
          body: "Guidance and coordination until your visa filing.",
          icon: "visa",
        },
      ],
      signals: {
        heading: ["Why", "Execution Mapping?"],
        items: [
          "Structured process keeps you on track.",
          "Right format for each university.",
          "All deadlines managed.",
          "Complete and accurate submissions.",
          "Expert support until next steps.",
        ],
      },
      summary:
        "DEWSMENTORA Execution Mapping™ turns a complex application process into a simple, structured and expertly managed journey — so you can focus on your future.",
      summaryIcon: "graduation",
      quote: "A well-executed application turns opportunity into reality.",
    },
    pillars: {
      heading: "What Execution Mapping™ changes",
      maxColumns: 4,
      items: [
        {
          title: "Clearer application journey",
          body: "Turn multiple universities, requirements, documents, deadlines and procedures into one structured execution plan.",
          icon: "roadmap",
        },
        {
          title: "Cost visibility before execution",
          body: "Understand the expected application-related expenses through your personalised Cost & Procedure Report (CPR) before proceeding.",
          icon: "report",
        },
        {
          title: "Fewer avoidable errors",
          body: "Reduce the risk of missed requirements, incomplete documents, incorrect submissions and overlooked deadlines through structured checks.",
          icon: "shield",
        },
        {
          title: "Better document coordination",
          body: "Bring SOPs, essays, CV/resume, recommendations and university-specific requirements into one coordinated process.",
          icon: "files",
        },
        {
          title: "Stronger deadline control",
          body: "Know what needs to happen, for which university, and by when.",
          icon: "calendar",
        },
        {
          title: "One point of coordination",
          body: "A dedicated executive helps coordinate applications, updates, follow-ups and next steps.",
          icon: "users",
        },
        {
          title: "Greater application confidence",
          body: "Move from “Have I missed something?” to “I know what needs to happen next.”",
          icon: "check",
        },
      ],
    },
    framework: ADMISSION_JOURNEY,
    contrast: {
      heading: "Why Execution Mapping™ matters",
      intro:
        "The challenge isn't simply submitting an application. The challenge is managing everything that must happen correctly before, during and after submission.",
      left: {
        caption: "What an applicant sees",
        items: [
          "Application form",
          "SOP",
          "CV",
          "Recommendation letters",
          "Upload documents",
          "Pay application fee",
          "Submit",
        ],
      },
      right: {
        caption: "What the actual process can involve",
        items: [
          "Different requirements for every university",
          "Different application portals",
          "Programme-specific documentation",
          "SOP and essay variations",
          "Recommendation procedures",
          "Transcript requirements",
          "Credential evaluation",
          "Language translation",
          "Test-score reporting",
          "Application fees",
          "Different deadlines",
          "Document-format requirements",
          "Missing-information requests",
          "University follow-ups",
          "Offer conditions",
          "Deposits and subsequent procedures",
          "Visa-stage documentation",
        ],
      },
      outro: {
        lines: [
          "One university may be manageable.",
          "Multiple universities create multiple processes running simultaneously.",
        ],
        flowLabel: "Execution Mapping™ brings them together",
        flow: ["Plan", "Prepare", "Check", "File", "Track", "Respond", "Progress"],
        close: "You shouldn't have to become an application-process expert just to apply to university.",
      },
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

export function getFramework(slug: string): Framework | undefined {
  return PRODUCT_VISUALS[slug]?.framework;
}

export function getProcess(slug: string): ReportProcess | undefined {
  return PRODUCT_VISUALS[slug]?.process;
}
