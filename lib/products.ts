export type ProductStep = { n: string; t: string; d: string };
export type ProductBenefit = { t: string; d: string };
export type ProductFaq = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  question: string;
  price: string;
  cardText: string;
  summary: string;
  tagline: string;
  bg: string;
  fg: string;
  btnBg: string;
  btnFg: string;
  hero: string;
  heroAlt: string;
  figure: string;
  figureAlt: string;
  what: string[];
  who: string[];
  benefits: ProductBenefit[];
  steps: ProductStep[];
  receive: string[];
  faqs: ProductFaq[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "identity-mapping",
    name: "Identity Mapping",
    question: "Who am I?",
    price: "Pricing on the application",
    cardText:
      "Understand strengths, thinking patterns, behavioural orientation and direction before committing to important education and career choices.",
    summary: "Before choosing a direction, understand the person making the decision.",
    tagline: "Understand the person. Explore the direction. Decide with greater clarity.",
    bg: "#fff",
    fg: "#0B0B0B",
    btnBg: "#0B0B0B",
    btnFg: "#fff",
    hero: "/images/mapping-journey.png",
    heroAlt: "The DEWSMENTORA Mapping Journey — different decisions require different kinds of clarity",
    figure: "/images/identity-figure.png",
    figureAlt:
      "Each Map addresses a specific decision problem — an aspirant who knows their direction may not require Identity Mapping",
    what: [
      "Explores strengths, thinking and intelligence patterns",
      "Examines behaviour, decisions and motivation",
      "Clarifies interests and direction",
      "Answers: does this direction actually fit me?",
      "Separates genuine fit from inherited expectation",
    ],
    who: [
      "Students unsure of their direction",
      "Students choosing a stream, course or career",
      "Aspirants comparing options",
      "Aspirants receiving conflicting advice",
      "Anyone looking for clarity beyond a career test",
    ],
    benefits: [
      { t: "Direction before decisions", d: "Establish fit before spending on applications, coaching or tuition." },
      { t: "Structured, not intuitive", d: "A defined evaluation framework rather than opinion or anecdote." },
      { t: "Family alignment", d: "A shared vocabulary for conversations at home about direction." },
      { t: "Feeds every later Map", d: "Findings carry forward into university, story and execution decisions." },
    ],
    steps: [
      { n: "01", t: "Profile intake", d: "Academic history, experiences, interests and constraints are recorded in the application." },
      { n: "02", t: "Structured evaluation", d: "Strengths, thinking patterns and behavioural orientation are assessed." },
      { n: "03", t: "Direction analysis", d: "Candidate directions are tested against the profile rather than against trends." },
      { n: "04", t: "Clarity report", d: "Findings are returned as a readable report with recommended next steps." },
    ],
    receive: [
      "Identity and strengths summary",
      "Thinking and behavioural orientation overview",
      "Direction suitability analysis",
      "Recommended next Map, where relevant",
      "A report you can revisit as decisions change",
    ],
    faqs: [
      {
        q: "Is this a career test?",
        a: "No. A test returns a label. Identity Mapping is a structured evaluation of strengths, thinking, behaviour and direction, read together and interpreted for the decision in front of you.",
      },
      {
        q: "Who should start here?",
        a: "Aspirants who are not yet sure of direction, or who are receiving conflicting advice about which stream, course or career to pursue.",
      },
      { q: "How long does it take?", a: "Timelines are confirmed inside the application once your profile is submitted." },
      {
        q: "Do I need the other Maps afterwards?",
        a: "Not necessarily. Each Map addresses a specific decision problem, and the report states where further support genuinely adds value.",
      },
    ],
  },
  {
    slug: "university-intelligence-mapping",
    name: "University Intelligence Mapping",
    question: "Where should I go?",
    price: "Rs. 3,999",
    cardText:
      "Don't just find universities. Evaluate Course + Career + Cost + Location + Outcomes + Profile Fit before making the investment.",
    summary: "A good university isn't automatically a good decision for you. Evaluate the decision, not only the ranking.",
    tagline:
      "Make smarter study abroad decisions. Choosing a country, university, or program should not be based solely on rankings, trends, or agent recommendations.",
    bg: "#D9D9D9",
    fg: "#0B0B0B",
    btnBg: "#fff",
    btnFg: "#0B0B0B",
    hero: "/images/uim-hero.png",
    heroAlt: "University Intelligence Mapping — right country, right university, right program, right career path, right future",
    figure: "/images/uim-figure.png",
    figureAlt: "How it works: from profile assessment to future outcomes across seven structured stages",
    what: [
      "Evaluates academic compatibility and career alignment",
      "Assesses admission feasibility against your profile",
      "Analyses return on investment and living costs",
      "Reviews employment opportunities and industry demand",
      "Compares post-study pathways and long-term growth potential",
    ],
    who: [
      "Students unsure about country selection",
      "Students confused between multiple university offers",
      "Applicants relying heavily on rankings and trends",
      "Students seeking better career outcomes",
      "Families wanting transparency before investing in international education",
      "Aspirants seeking an independent second opinion",
    ],
    benefits: [
      { t: "Evidence over assumptions", d: "Decisions rest on structured evaluation rather than popularity." },
      { t: "Cost clarity", d: "Total cost, living expenses and expected returns are examined together." },
      { t: "Feasibility, not guesswork", d: "Your profile is compared against admission criteria before you commit." },
      { t: "Future-focused", d: "The objective is not only admission, but the pathway that creates the strongest future." },
    ],
    steps: [
      { n: "01", t: "Profile intelligence assessment", d: "Strengths, goals, preferences and academic background are assessed." },
      { n: "02", t: "Career & industry mapping", d: "Global industry trends, in-demand careers and salary benchmarks are reviewed." },
      { n: "03", t: "Country & program mapping", d: "Countries, universities and programs are evaluated for suitability." },
      { n: "04", t: "Strategic recommendation report", d: "Best-fit recommendations, alternatives and timelines are delivered." },
    ],
    receive: [
      "Personalised University Intelligence Report",
      "Best-fit countries, universities and programs",
      "Admission feasibility analysis",
      "Career alignment and employment opportunity insights",
      "ROI evaluation",
      "Strategic recommendations and timelines",
    ],
    faqs: [
      {
        q: "How is this different from a consultant shortlist?",
        a: "A shortlist names options. University Intelligence Mapping evaluates the decision behind them — course, career, cost, location, outcomes and profile fit — and explains why each option is or is not suitable.",
      },
      { q: "Can I use it after I already have offers?", a: "Yes. Comparing offers is one of the most common reasons aspirants use this Map." },
      { q: "Does it guarantee admission?", a: "No. It is an evaluation framework for decisions, not an admission outcome." },
      {
        q: "What do you need from me?",
        a: "Your academic background, goals, preferences and any offers or shortlists you are considering, entered in the application.",
      },
    ],
  },
  {
    slug: "story-mapping",
    name: "Story Mapping",
    question: "How should I present myself?",
    price: "Rs. 12,999",
    cardText:
      "Transform achievements, experiences, aspirations and future direction into one coherent application narrative. Not simply better documents. A better-positioned applicant.",
    summary: "Your application isn't a collection of documents. It's one story.",
    tagline: "Your story, strategically connected. Powerfully remembered.",
    bg: "#0B0B0B",
    fg: "#fff",
    btnBg: "#F2C230",
    btnFg: "#0B0B0B",
    hero: "/images/story-hero.png",
    heroAlt: "Your story, strategically connected, powerfully remembered — clear career direction, strong personal narrative, strategic positioning",
    figure: "/images/story-figure.png",
    figureAlt: "Why Story Mapping matters — most students focus on writing documents while universities focus on evaluating people",
    what: [
      "Connects academics, experiences, strengths, motivation and future intent",
      "Builds one narrative across CV, SOP, LORs and applications",
      "Positions the profile for the evaluator's decision process",
      "Answers: what should the university understand about me?",
      "Reviews every document for clarity, logic, flow and consistency",
    ],
    who: [
      "Undergraduate, Master's and MBA applicants",
      "Scholarship applicants",
      "Career changers",
      "Students with strong profiles but weak narratives",
      "Applicants whose materials read as a list of achievements",
    ],
    benefits: [
      { t: "Coherence", d: "One consistent narrative instead of documents written in isolation." },
      { t: "Evaluator focus", d: "Positioning built around what admissions teams are assessing." },
      { t: "Differentiation", d: "A strong profile gets attention; a coherent story creates differentiation." },
      { t: "Confidence", d: "Clearer answers to Why you, Why this course, Why this university." },
    ],
    steps: [
      { n: "01", t: "Discovery", d: "Academic journey, professional experience, achievements and motivations are uncovered." },
      { n: "02", t: "Strategic positioning", d: "Core strengths, differentiators and career alignment are evaluated." },
      { n: "03", t: "Narrative architecture", d: "Why you, why this domain, why this university, why now — assembled into one structure." },
      { n: "04", t: "Document design & review", d: "SOP, essays, CV and recommendation strategy are developed and reviewed." },
    ],
    receive: [
      "Application Narrative Blueprint",
      "Statement of Purpose",
      "Personal statements and essays",
      "Academic CV / resume",
      "Recommendation strategy framework",
      "University-specific application versions",
    ],
    faqs: [
      {
        q: "Do you write my documents for me?",
        a: "The process builds your narrative and produces submission-ready materials with you; the story, experiences and motivations remain yours.",
      },
      {
        q: "I have a strong profile already. Why would I need this?",
        a: "Strong profiles are often hard to evaluate when the materials read as separate achievements. Story Mapping positions them as one coherent case.",
      },
      { q: "Does it cover every university separately?", a: "University-specific versions are prepared for the programs you are applying to." },
      { q: "When should I start?", a: "Before drafting documents. Positioning first makes writing considerably faster." },
    ],
  },
  {
    slug: "execution-mapping",
    name: "Execution Mapping",
    question: "How should I execute?",
    price: "From Rs. 2,500 (institution-supported)",
    cardText:
      "Once the decision is made, execute it professionally. Applications, documents, deadlines, submissions, communication and critical milestones — systematically managed.",
    summary: "A good decision still needs good execution: Plan → Prepare → Verify → Submit → Track → Respond → Progress.",
    tagline: "Strategy creates opportunity. Execution protects it.",
    bg: "#F2C230",
    fg: "#0B0B0B",
    btnBg: "#0B0B0B",
    btnFg: "#fff",
    hero: "/images/execution-hero.png",
    heroAlt: "Execution excellence for high-stakes admissions — document verification, university applications, visa approval, timeline management",
    figure: "/images/execution-figure.png",
    figureAlt: "Your admission journey — a structured process from registration through pre-departure, professionally managed",
    what: [
      "Manages applications, documents, deadlines and submissions",
      "Verifies documentation before submission",
      "Tracks university responses and pending actions",
      "Coordinates interviews, offers and visa documentation",
      "Answers: is my entire admission journey being managed correctly?",
    ],
    who: [
      "Students who have decided to study abroad and want professional execution",
      "Applicants applying to multiple universities",
      "Students who want support with applications, SOPs, resumes, LORs and visa preparation",
      "Families seeking a transparent, accountable admission journey",
      "Applicants who prefer one execution partner over several agencies",
    ],
    benefits: [
      { t: "Nothing missed", d: "Deadlines, requirements and document requests are tracked centrally." },
      { t: "Multi-layer verification", d: "Independent review designed to improve accuracy and consistency." },
      { t: "Full visibility", d: "Milestones, dependencies and responsibilities are visible throughout." },
      { t: "One accountable partner", d: "A dedicated admission executive rather than coordination across vendors." },
    ],
    steps: [
      { n: "01", t: "Register & onboard", d: "Registration, membership activation and onboarding — self-guided or guided sessions." },
      { n: "02", t: "Prepare & verify", d: "Applications, SOP, resume, LORs and documents are prepared and verified." },
      { n: "03", t: "Submit & track", d: "Applications are submitted, then status, requests and offers are tracked." },
      { n: "04", t: "Visa & pre-departure", d: "Offer evaluation, financial documentation, visa guidance and departure readiness." },
    ],
    receive: [
      "End-to-end execution oversight",
      "Expert-led intervention at critical stages",
      "Structured risk management",
      "Timeline governance with clear milestones",
      "Continuous monitoring and multi-layer verification",
      "Complete transparency on progress and status",
    ],
    faqs: [
      {
        q: "Why are there two fee levels?",
        a: "The Execution Mapping fee has two parts: a membership fee and a professional and administrative fee. Institution-supported execution carries the membership fee; independent-supported execution includes the professional and administrative component.",
      },
      {
        q: "Do you guarantee a visa or an admission?",
        a: "No. Execution Mapping manages process quality — planning, verification, tracking and communication — not institutional or government decisions.",
      },
      { q: "Can I use it for universities outside your partner network?", a: "Yes. It applies to partner-network and independent universities alike." },
      {
        q: "Who manages my journey?",
        a: "A dedicated admission executive, supported by specialists at critical stages, with progress visible in your dashboard.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productHref(product: Pick<Product, "slug">): string {
  return `/products/${product.slug}`;
}
