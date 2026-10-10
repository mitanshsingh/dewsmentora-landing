import type { FaqItem } from "./structured-data";
import type { FrameworkIcon } from "./frameworks";

// The owner's FAQ document, in its order. /resources/faqs lists all of them;
// the homepage shows the first few.
export const FAQS: FaqItem[] = [
  {
    q: "What exactly is DEWS Mentora?",
    a: [
      "DEWS Mentora is a strategic education and admissions advisory platform designed to help aspirants make better decisions about who they are, where they should apply, and how they should present themselves.",
      "Instead of beginning with a university list or an SOP, we begin with the aspirant.",
      "Our approach brings together three interconnected layers:",
      {
        list: [
          "Identity Mapping — understanding the aspirant.",
          "University Intelligence Mapping — identifying where that aspirant is most likely to fit, compete and succeed.",
          "Story Mapping — translating that identity and strategy into a compelling application narrative.",
        ],
      },
      "The objective is not simply to complete applications. It is to build a stronger strategy behind them.",
    ],
  },
  {
    q: "How is DEWS Mentora different from a traditional study-abroad consultant?",
    a: [
      "Traditional consulting often begins with questions such as:",
      "Which country? Which course? Which universities?",
      "DEWS Mentora goes deeper.",
      "We first examine the aspirant's academic profile, experiences, strengths, ambitions, motivations, career direction, differentiators and potential.",
      "Only then do we connect that identity with universities, programs and application strategy.",
      "This changes the conversation from:",
      "“Where can I get admission?”",
      "to:",
      "“Where can I build the strongest future—and how should I position myself to get there?”",
    ],
  },
  {
    q: "Why can't I simply use university rankings to choose universities?",
    a: [
      "Because rankings evaluate universities.",
      "They do not evaluate your relationship with those universities.",
      "A highly ranked university may still be a poor strategic choice for a particular aspirant because of program structure, admissions expectations, academic fit, career outcomes, geography, cost or profile competitiveness.",
      "University Intelligence Mapping looks beyond the ranking number to examine the fit between the aspirant, program and institution.",
      "The goal is not merely to find prestigious universities.",
      "It is to identify the right prestigious opportunities for you.",
    ],
  },
  {
    q: "My child already knows what they want to study. Why would we need Identity Mapping?",
    a: [
      "Knowing the name of a course is not the same as understanding the direction behind it.",
      "Identity Mapping explores questions such as:",
      {
        list: [
          "Why this field?",
          "What evidence supports this choice?",
          "What strengths distinguish the aspirant?",
          "What environments are likely to bring out their best performance?",
          "What could their academic choice eventually become professionally?",
        ],
      },
      "Even when the destination appears clear, understanding the person behind that decision can make university selection and application positioning significantly more coherent.",
    ],
  },
  {
    q: "What if the aspirant has no idea what they want to do?",
    a: [
      "That is precisely when structured exploration becomes valuable.",
      "Instead of forcing an aspirant to prematurely select a career or university, DEWS Mentora helps identify patterns across their:",
      {
        list: [
          "interests and intellectual curiosity",
          "academic strengths",
          "experiences and achievements",
          "motivations and ambitions",
          "working preferences",
          "potential career directions",
          "personal differentiators",
        ],
      },
      "The purpose is not to tell an aspirant:",
      "“This is what you must become.”",
      "It is to help them understand:",
      "“These are the directions that make the strongest sense for me—and this is why.”",
    ],
  },
  {
    q: "Is DEWS Mentora another psychometric or aptitude test?",
    a: [
      "No.",
      "A test can provide useful data, but an aspirant cannot be fully understood through a score.",
      "DEWS Mentora looks at the broader individual—academic history, experiences, achievements, interests, motivations, ambitions, choices, contradictions and future possibilities.",
      "Where appropriate, structured assessments can contribute information.",
      "But they are inputs—not the identity itself.",
      "The objective is to build a multidimensional understanding of the aspirant rather than reduce them to a test result.",
    ],
  },
  {
    q: "Does DEWS Mentora use AI to create its reports?",
    a: [
      "Technology can assist research, analysis, comparison and pattern recognition—but DEWS Mentora is not designed as an “enter information → generate AI report” service.",
      "The process combines structured information, analytical frameworks, research and professional review.",
      "Human judgement remains particularly important when interpreting aspiration, context, positioning, university fit and application narrative.",
      "We believe technology should strengthen professional intelligence—not replace it.",
    ],
  },
  {
    q: "What is University Intelligence Mapping?",
    a: [
      "University Intelligence Mapping is designed to move university selection beyond rankings and generic shortlists.",
      "It evaluates universities and programs in relation to the aspirant's individual profile.",
      "Depending on the case, this may include factors such as:",
      "Academic Fit · Program Fit · Profile Competitiveness · Career Alignment · Geographic Fit · Opportunity Ecosystem · Cost Considerations · Admissions Positioning",
      "Instead of asking only:",
      "“Which universities are best?”",
      "we ask:",
      "“Which universities are strategically best for this aspirant?”",
      "That distinction can completely change an application strategy.",
    ],
  },
  {
    q: "What is Story Mapping?",
    a: [
      "Universities do not evaluate documents independently.",
      "They evaluate the person those documents collectively reveal.",
      "Story Mapping connects the aspirant's academics, experiences, achievements, motivations, strengths and future ambitions into one coherent application narrative.",
      "That narrative can then guide:",
      "CV / Resume · SOP · Personal Statements · Essays · Recommendation Strategy · University-Specific Applications",
      "The objective is not to manufacture a story.",
      "It is to make the aspirant's real story visible, coherent and memorable.",
    ],
  },
  {
    q: "Why can't ChatGPT or another AI simply write my SOP?",
    a: [
      "AI can produce polished sentences remarkably quickly.",
      "But polished writing is not necessarily strong admissions positioning.",
      "The difficult questions come before writing:",
      {
        list: [
          "What should the admissions committee remember about you?",
          "Which experiences deserve emphasis?",
          "What should be left out?",
          "What connects your past with your intended future?",
          "Why does this particular university make sense?",
          "What differentiates you from applicants with similar grades and test scores?",
        ],
      },
      "Story Mapping addresses this underlying architecture.",
      "Writing comes afterwards.",
    ],
  },
  {
    q: "Does DEWS Mentora guarantee admission?",
    a: [
      "No responsible admissions advisor can honestly guarantee admission to a university.",
      "Admissions decisions depend on universities and can be influenced by academic performance, applicant competition, institutional priorities, program capacity and numerous other factors.",
      "What DEWS Mentora can do is help improve the quality of the decisions, positioning and application strategy within the aspirant's control.",
      "Our responsibility is not to sell certainty.",
      "It is to help the aspirant compete intelligently.",
    ],
  },
  {
    q: "Do you recommend only universities where DEWS Mentora has partnerships?",
    a: [
      "University recommendations should serve the aspirant—not a commercial arrangement.",
      "Our approach is built around identifying universities and programs that make strategic sense for the individual's profile, aspirations and circumstances.",
      "A recommendation has value only when there is a defensible reason behind it.",
      "The question should always remain:",
      "“Why is this university right for this aspirant?”",
    ],
  },
  {
    q: "My profile is average. Can DEWS Mentora still help?",
    a: [
      "Yes.",
      "Strategic positioning can become even more important when the profile is not obviously exceptional.",
      "The purpose is not to exaggerate achievements or manufacture credentials.",
      "It is to discover what is genuinely meaningful in the aspirant's journey and determine how different elements of the profile can work together.",
      "Sometimes differentiation comes from extraordinary achievements.",
      "Sometimes it comes from clarity, trajectory, resilience, intellectual curiosity, unusual combinations of experiences or a compelling future direction.",
      "A profile should be understood before it is judged.",
    ],
  },
  {
    q: "My profile is already very strong. What additional value can DEWS Mentora provide?",
    a: [
      "Strong candidates face a different problem.",
      "Their challenge is often not qualification—it is differentiation.",
      "At highly selective universities, many applicants have excellent grades, strong test scores, internships, extracurricular activities and impressive resumes.",
      "The question becomes:",
      "Why this candidate among many excellent candidates?",
      "Identity Mapping, University Intelligence Mapping and Story Mapping are designed to help answer that question coherently.",
    ],
  },
  {
    q: "At what stage should an aspirant approach DEWS Mentora?",
    a: [
      "Earlier is generally better because strategy can influence decisions made before applications begin.",
      "However, DEWS Mentora can support aspirants at different stages:",
      {
        list: [
          "Exploration Stage — understanding direction and possibilities.",
          "University Research Stage — identifying suitable universities and programs.",
          "Application Stage — developing positioning, narrative and application materials.",
          "Final Decision Stage — comparing offers and evaluating the best path forward.",
        ],
      },
      "The ideal time to develop strategy is before important choices become irreversible.",
    ],
  },
  {
    q: "Do parents participate in the process?",
    a: [
      "Where appropriate, yes.",
      "Parents often bring valuable context and understandably care about academic quality, career prospects, finances, geography, safety and long-term stability.",
      "At the same time, the aspirant ultimately has to live the academic and professional journey.",
      "DEWS Mentora therefore seeks a balance:",
      "Parents deserve clarity.",
      "Aspirants deserve ownership.",
      "Good decisions should create confidence for both.",
    ],
  },
  {
    q: "Will every aspirant receive the same type of recommendation?",
    a: [
      "No.",
      "Two aspirants with similar grades can have completely different strengths, motivations, ambitions and ideal university environments.",
      "That is why DEWS Mentora's philosophy is based on mapping before recommending.",
      "The process should adapt to the individual rather than forcing every aspirant through the same predetermined answer.",
    ],
  },
  {
    q: "What does an aspirant ultimately gain from DEWS Mentora?",
    a: [
      "More than a university list or a set of application documents.",
      "The intended outcome is greater clarity about:",
      {
        list: [
          "Who am I?",
          "What direction makes sense for me?",
          "Where am I most likely to thrive?",
          "How competitive am I for different opportunities?",
          "What makes my profile distinctive?",
          "How should universities understand me?",
          "How do my education choices connect with the future I want to build?",
        ],
      },
      "Because the most important outcome of an admissions process is not simply getting into a university.",
      "It is making sure that the university decision moves the aspirant toward the right future.",
    ],
  },
];

export const HOME_FAQS = FAQS.slice(0, 4);

export const HOME_STEPS = [
  { n: "01", t: "Create profile", d: "Register in the application and record your academic background and goals." },
  { n: "02", t: "Choose product", d: "Select the Map that matches the decision you are facing." },
  { n: "03", t: "Enter information", d: "Complete the structured inputs the Map requires." },
  { n: "04", t: "Receive result", d: "Your report is delivered in your dashboard, with recommended next steps." },
];

export const WHY_POINTS = [
  "One Map per decision problem — no bundled services you do not need.",
  "Structured evaluation frameworks rather than opinion or anecdote.",
  "Independent second opinions on shortlists, offers and recommendations.",
  "Transparent process, visible milestones and one accountable point of contact.",
];

export const PRINCIPLES = [
  { t: "Student-first", d: "Recommendations follow the aspirant's decision, not a sales target." },
  { t: "Simple", d: "One question per Map, answered in language a family can act on." },
  { t: "Personalised", d: "Every output is built from the profile in front of us." },
  { t: "Data-driven", d: "Structured evaluation, documented criteria, evidence over assumption." },
];

export type HistoryItem = { t: string; d?: string; icon: FrameworkIcon; href?: string };

export type HistoryMilestone = {
  year: string;
  title: string;
  subtitle?: string;
  body: string[];
  /** Closing line, set apart beneath the body. */
  note?: string;
  /** Short pill label above the list. */
  listLabel?: string;
  /** Sentence-length lead-in above the list, for when a pill is too small. */
  listIntro?: string;
  items: HistoryItem[];
  /** Closing line beneath the list, when it speaks to the list rather than the story. */
  listOutro?: string;
};

// About → Our journey. Transcribed from the owner's history slides (About Us
// section of the "Mishu todo 2" document), in chronological order.
export const HISTORY: HistoryMilestone[] = [
  {
    year: "1998",
    title: "The Beginning",
    subtitle: "DMC – Coaching & Career Mentoring",
    body: [
      "Our journey began with DMC, providing academic coaching and career mentoring to students.",
      "At a time when structured career guidance was still uncommon, we focused on helping students discover their potential and make informed educational decisions.",
    ],
    listLabel: "Core focus",
    items: [
      { t: "Academic Coaching", icon: "graduation" },
      { t: "Career Mentoring", icon: "profile" },
      { t: "Student Development", icon: "career" },
      { t: "Educational Guidance", icon: "book" },
    ],
  },
  {
    year: "2003",
    title: "Preparing Future Professionals",
    body: [
      "As higher education became increasingly competitive, we expanded into advanced entrance examination preparation.",
    ],
    note: "This marked our transition from academic coaching to professional career preparation.",
    listLabel: "Programs included",
    items: [
      { t: "CAT", icon: "readiness" },
      { t: "GMAT", icon: "report" },
      { t: "Other MBA Entrance Examinations", icon: "briefcase" },
    ],
  },
  {
    year: "2005",
    title: "Entering the International Education Industry",
    body: [
      "Under the DEWS brand, we expanded into overseas education.",
      "During this phase, we became one of the early private ETS-authorised examination centres for TOEFL, with GRE added later. We also served as an IELTS Nodal Centre, while providing comprehensive preparation for international entrance examinations.",
    ],
    note: "This was the beginning of our complete study abroad ecosystem.",
    listLabel: "Our services expanded to include",
    items: [
      { t: "TOEFL Testing", icon: "dashboard" },
      { t: "GRE Testing", icon: "edit" },
      { t: "IELTS Services", icon: "chat" },
      { t: "TOEFL, GRE & IELTS Preparation", icon: "book" },
      { t: "International University Admissions", icon: "university" },
      { t: "Overseas Education Counselling", icon: "country" },
    ],
  },
  {
    year: "2008",
    title: "A Complete Study Abroad Destination",
    body: [
      "DEWS evolved into a full-fledged international education centre, providing students with every major service required throughout their study abroad journey.",
      "Students no longer had to coordinate with multiple providers—everything was available through a single, structured process.",
    ],
    listLabel: "Our integrated services included",
    items: [
      { t: "Career Counselling", icon: "chat" },
      { t: "University Selection", icon: "graduation" },
      { t: "Test Preparation", icon: "book" },
      { t: "Application & Admission Support", icon: "edit" },
      { t: "SOP, Résumé & Documentation Guidance", icon: "report" },
      { t: "Visa Processing Support", icon: "visa" },
      { t: "Pre-Departure Assistance", icon: "plane" },
    ],
  },
  {
    year: "2020",
    title: "Digital Transformation",
    body: [
      "Recognising the changing needs of students worldwide, DEWS transitioned to a digital-first model.",
      "Students could now access expert guidance remotely through online counselling, virtual mentoring, and digital admission support, making quality international education services accessible regardless of location.",
    ],
    items: [
      { t: "Online Counselling", icon: "dashboard" },
      { t: "Virtual Mentoring", icon: "video" },
      { t: "Digital Admission Support", icon: "readiness" },
    ],
  },
  {
    year: "2025",
    title: "The Birth of DEWSMENTORA™",
    body: [
      "After nearly three decades of mentoring students and supporting international admissions, we transformed our accumulated knowledge into DEWSMENTORA™.",
      "Rather than functioning as a traditional consultancy, DEWSMENTORA™ is designed as a needs-based, AI-enabled international education platform that combines human expertise with structured decision-making frameworks.",
    ],
    listIntro: "Built upon decades of practical experience, DEWSMENTORA™ introduces proprietary systems including:",
    items: [
      {
        t: "Identity Mapping™",
        d: "Discover who you are, what drives you, and where you truly belong.",
        icon: "profile",
        href: "/products/identity-mapping",
      },
      {
        t: "University Intelligence Mapping™",
        d: "Find the right universities based on data, outcomes, and opportunities.",
        icon: "university",
        href: "/products/university-intelligence-mapping",
      },
      {
        t: "Story Mapping™",
        d: "Craft a compelling, authentic story that strengthens every application.",
        icon: "edit",
        href: "/products/story-mapping",
      },
      {
        t: "Execution Mapping™",
        d: "Plan, track, and manage every step of your study abroad journey with precision.",
        icon: "roadmap",
        href: "/products/execution-mapping",
      },
    ],
    listOutro:
      "These frameworks help students make informed decisions, build stronger applications, and manage their entire study abroad journey with greater clarity, transparency, and confidence.",
  },
];

// Resources → Preparation. Material is added per test; until then each card
// reads "Material coming soon".
export const PREP_TEST_GROUPS = [
  {
    title: "English proficiency",
    tests: [
      { name: "IELTS", d: "International English Language Testing System." },
      { name: "TOEFL", d: "Test of English as a Foreign Language." },
      { name: "PTE Academic", d: "Pearson Test of English Academic." },
    ],
  },
  {
    title: "Admissions tests",
    tests: [
      { name: "GRE", d: "Graduate Record Examinations, for master's and doctoral programs." },
      { name: "GMAT", d: "Graduate Management Admission Test, for business school programs." },
      { name: "SAT", d: "For undergraduate admission, mainly in the USA." },
    ],
  },
];

export const BLOG_POSTS = [
  { t: "How to compare two university offers without defaulting to rankings", cat: "Decision making", read: "6 min read" },
  { t: "What admissions teams are actually evaluating when they read your SOP", cat: "Applications", read: "8 min read" },
  { t: "Cost of study is not the same as cost of studying abroad", cat: "Finance", read: "5 min read" },
  { t: "Choosing a stream at 16: what to look at before you narrow", cat: "Direction", read: "7 min read" },
  { t: "Deadlines, documents and the four most common execution failures", cat: "Execution", read: "6 min read" },
  { t: "Second opinions: when to question a consultant shortlist", cat: "Decision making", read: "5 min read" },
];

// Phone menu: the four Maps are listed individually above these, straight from
// PRODUCTS, so the panel mirrors the phone design's full navigation.
export const PHONE_NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const APP_LOGIN_URL = "https://app.dewsmentora.com/login";
export const APP_REGISTER_URL = "https://app.dewsmentora.com/register";
