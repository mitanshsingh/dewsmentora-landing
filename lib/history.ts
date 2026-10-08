// "History of DEWS" slides for /about, transcribed from the six slide images in
// the content doc (Mishu todo 2). The doc lists them newest first; the page
// tells the story from the beginning.

export type HistoryItem = { t: string; d?: string };

export type HistorySlide = {
  year: string;
  title: string;
  /** Second title line, set smaller (only 1998 has one). */
  subtitle?: string;
  body: string[];
  /** Closing line set apart beneath the body. */
  emphasis?: string;
  /** Label over the list; the 2020 slide has none. */
  listHeading?: string;
  items: HistoryItem[];
  /** Paragraph under the list (only 2025 has one). */
  after?: string;
};

export const HISTORY: HistorySlide[] = [
  {
    year: "1998",
    title: "The beginning",
    subtitle: "DMC – Coaching & Career Mentoring",
    body: [
      "Our journey began with DMC, providing academic coaching and career mentoring to students.",
      "At a time when structured career guidance was still uncommon, we focused on helping students discover their potential and make informed educational decisions.",
    ],
    listHeading: "Core focus",
    items: [
      { t: "Academic Coaching" },
      { t: "Career Mentoring" },
      { t: "Student Development" },
      { t: "Educational Guidance" },
    ],
  },
  {
    year: "2003",
    title: "Preparing future professionals",
    body: [
      "As higher education became increasingly competitive, we expanded into advanced entrance examination preparation.",
    ],
    emphasis: "This marked our transition from academic coaching to professional career preparation.",
    listHeading: "Programs included",
    items: [{ t: "CAT" }, { t: "GMAT" }, { t: "Other MBA Entrance Examinations" }],
  },
  {
    year: "2005",
    title: "Entering the international education industry",
    body: [
      "Under the DEWS brand, we expanded into overseas education.",
      "During this phase, we became one of the early private ETS-authorised examination centres for TOEFL, with GRE added later. We also served as an IELTS Nodal Centre, while providing comprehensive preparation for international entrance examinations.",
    ],
    emphasis: "This was the beginning of our complete study abroad ecosystem.",
    listHeading: "Our services expanded to include",
    items: [
      { t: "TOEFL Testing" },
      { t: "GRE Testing" },
      { t: "IELTS Services" },
      { t: "TOEFL, GRE & IELTS Preparation" },
      { t: "International University Admissions" },
      { t: "Overseas Education Counselling" },
    ],
  },
  {
    year: "2008",
    title: "A complete study abroad destination",
    body: [
      "DEWS evolved into a full-fledged international education centre, providing students with every major service required throughout their study abroad journey.",
      "Students no longer had to coordinate with multiple providers—everything was available through a single, structured process.",
    ],
    listHeading: "Our integrated services included",
    items: [
      { t: "Career Counselling" },
      { t: "University Selection" },
      { t: "Test Preparation" },
      { t: "Application & Admission Support" },
      { t: "SOP, Résumé & Documentation Guidance" },
      { t: "Visa Processing Support" },
      { t: "Pre-Departure Assistance" },
    ],
  },
  {
    year: "2020",
    title: "Digital transformation",
    body: [
      "Recognising the changing needs of students worldwide, DEWS transitioned to a digital-first model.",
      "Students could now access expert guidance remotely through online counselling, virtual mentoring, and digital admission support, making quality international education services accessible regardless of location.",
    ],
    items: [{ t: "Online Counselling" }, { t: "Virtual Mentoring" }, { t: "Digital Admission Support" }],
  },
  {
    year: "2025",
    title: "The birth of DEWSMENTORA™",
    body: [
      "After nearly three decades of mentoring students and supporting international admissions, we transformed our accumulated knowledge into DEWSMENTORA™.",
      "Rather than functioning as a traditional consultancy, DEWSMENTORA™ is designed as a needs-based, AI-enabled international education platform that combines human expertise with structured decision-making frameworks.",
    ],
    listHeading: "Built upon decades of practical experience, DEWSMENTORA™ introduces proprietary systems including",
    items: [
      { t: "Identity Mapping™", d: "Discover who you are, what drives you, and where you truly belong." },
      {
        t: "University Intelligence Mapping™",
        d: "Find the right universities based on data, outcomes, and opportunities.",
      },
      { t: "Story Mapping™", d: "Craft a compelling, authentic story that strengthens every application." },
      { t: "Execution Mapping™", d: "Plan, track, and manage every step of your study abroad journey with precision." },
    ],
    after:
      "These frameworks help students make informed decisions, build stronger applications, and manage their entire study abroad journey with greater clarity, transparency, and confidence.",
  },
];
