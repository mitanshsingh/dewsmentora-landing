// Product copy follows the "Flow of Each Product page" in the content doc
// (Mishu todo 2) and, for Execution Mapping, "Execution Mapping new".
//
// Multi-line strings (step bodies, FAQ answers) use FaqAccordion's line markup:
// one paragraph per line, and lines starting with "- " form a bulleted list.

export type ProductStep = { n: string; t: string; d: string };
export type ProductBenefit = { t: string; d: string };
export type ProductFaq = { q: string; a: string };

export type ProductWhy = {
  intro: string[];
  common: { heading: string; items: string[]; note: string };
  deeper: { heading: string; items: string[]; note: string };
  /** Optional closing beneath both columns, e.g. a process flow line. */
  outro?: string[];
};

export type Product = {
  slug: string;
  name: string;
  question: string;
  /** Hero eyebrow; defaults to `question`. */
  eyebrow?: string;
  price: string;
  cardText: string;
  summary: string;
  tagline: string;
  bg: string;
  fg: string;
  btnBg: string;
  btnFg: string;
  what: string[];
  who: string[];
  /** A closing line under "Who it's for". */
  whoNote?: string;
  benefits: ProductBenefit[];
  stepsIntro?: string;
  steps: ProductStep[];
  /** A second run of steps after the main process, in its own band. */
  afterSteps?: { heading: string; steps: ProductStep[] };
  stepsOutro?: string;
  why: ProductWhy;
  receive: ProductBenefit[];
  receiveNote: string;
  faqs: ProductFaq[];
};

const lines = (...l: string[]) => l.join("\n");

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
    what: [
      "Connects interests, strengths, values, personality, experiences and natural tendencies",
      "Identifies patterns that reveal how you think, learn, decide and perform best",
      "Separates genuine interests from external expectations, trends and peer pressure",
      "Brings clarity to what motivates you—and what is likely to sustain that motivation",
      "Connects who you are today with the directions you could realistically grow into",
      "Answers the critical question: Who am I—and what kind of future genuinely fits me?",
    ],
    who: [
      "Students unsure about what to study or pursue",
      "Students choosing subjects, courses, majors or career directions",
      "High-performing students with several possible paths",
      "Students whose interests keep changing or feel disconnected",
      "Students influenced by parental expectations, peers or popular career trends",
      "Young people who want to understand themselves before making decisions that shape their future",
    ],
    // The content doc's Identity "Key benefits" column repeats the University
    // Intelligence Mapping copy, so these stay until corrected copy arrives.
    benefits: [
      { t: "Direction before decisions", d: "Establish fit before spending on applications, coaching or tuition." },
      { t: "Structured, not intuitive", d: "A defined evaluation framework rather than opinion or anecdote." },
      { t: "Family alignment", d: "A shared vocabulary for conversations at home about direction." },
      { t: "Feeds every later Map", d: "Findings carry forward into university, story and execution decisions." },
    ],
    steps: [
      {
        n: "01",
        t: "Discovery",
        d: "Your strengths, interests, motivations, experiences and natural patterns are explored beyond marks and conventional assessments.",
      },
      {
        n: "02",
        t: "Identity Analysis",
        d: "Your abilities, preferences, personality patterns and potential differentiators are evaluated to understand what genuinely fits you.",
      },
      {
        n: "03",
        t: "Direction Mapping",
        d: "Your identity is connected with suitable academic paths, career possibilities and future opportunities to create clearer direction.",
      },
      {
        n: "04",
        t: "Personal Roadmap",
        d: "The insights are translated into a practical roadmap for better academic, career and development decisions—with greater clarity and confidence.",
      },
    ],
    why: {
      intro: [
        "The challenge is not having more career options.",
        "The challenge is knowing which opportunities genuinely fit who you are—and which only look attractive from the outside.",
      ],
      common: {
        heading: "Most students make decisions around",
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
      deeper: {
        heading: "Identity Mapping™ looks deeper",
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
    receive: [
      {
        t: "Personal Identity Blueprint™",
        d: "A structured picture of who you are beyond marks, degrees, and conventional labels.",
      },
      {
        t: "Strength & Capability Map",
        d: "Identifies natural strengths, emerging capabilities, and areas with the greatest potential.",
      },
      {
        t: "Interest & Motivation Profile",
        d: "Reveals what genuinely engages you and the environments in which you are most likely to thrive.",
      },
      {
        t: "Personality & Working-Style Insights",
        d: "Helps you understand how you think, learn, communicate, decide, and respond to challenges.",
      },
      {
        t: "Career & Academic Direction Map",
        d: "Connects your identity with suitable fields, subjects, career directions, and future possibilities.",
      },
      {
        t: "Decision-Fit Framework",
        d: "A practical lens for evaluating future choices based on personal fit rather than pressure, trends, or assumptions.",
      },
      {
        t: "Personalised Identity Mapping™ Report",
        d: "Brings the insights together into one clear, actionable reference for future academic and career decisions.",
      },
    ],
    receiveNote:
      "You don’t receive a label telling you what to become. You receive a clearer understanding of who you are—and a framework for deciding where you can go next.",
    faqs: [
      {
        q: "What exactly is Identity Mapping™ — and why does it matter?",
        a: lines(
          "Identity Mapping™ is a structured process designed to help an aspirant understand who they are before deciding where they should go.",
          "It brings together strengths, interests, motivations, behavioural patterns, natural abilities, aspirations and future possibilities to create a clearer picture of the individual behind the marks and qualifications.",
          "Because choosing a future without understanding yourself can turn even a good opportunity into the wrong direction.",
          "Identity Mapping™ helps replace “What should I become?” with a more powerful question: “What kind of future actually fits me?”",
        ),
      },
      {
        q: "How is Identity Mapping™ different from an aptitude, personality or psychometric test?",
        a: lines(
          "A test gives you a result. Identity Mapping™ builds an understanding.",
          "Traditional assessments can provide useful indicators—aptitude, personality type, interests or preferences—but an aspirant is more complex than a score or category.",
          "Identity Mapping™ connects multiple dimensions of the individual to understand not simply what they may be good at, but what combination of strengths, motivation, personality and ambition could shape a fulfilling direction.",
          "The objective is not to put an aspirant into a box. It is to help them see possibilities they may not yet have been able to see in themselves.",
        ),
      },
      {
        q: "My child is academically strong. Why would we still need Identity Mapping™?",
        a: lines(
          "Good marks answer an important question: “Can the student perform?” They do not necessarily answer: “Where should that ability be directed?”",
          "High-performing students often face more possibilities, not fewer. Engineering, economics, medicine, design, technology, research, entrepreneurship, management and emerging careers may all appear possible.",
          "That creates a different problem—the fear of using strong potential in the wrong direction.",
          "Identity Mapping™ helps transform academic ability into purposeful direction, so achievement is not only impressive on paper but connected to a future the aspirant genuinely wants to build.",
        ),
      },
      {
        q: "What if I have absolutely no idea what I want to do?",
        a: lines(
          "That is precisely when Identity Mapping™ can be most valuable. You do not need to arrive with a career already chosen.",
          "Confusion often does not mean that an aspirant lacks ability. It may simply mean that they have never had a structured way to connect who they are with what they could become.",
          "Identity Mapping™ begins with the individual—not with a predetermined career list.",
          "The goal is to move from “I don't know what I want.” to “I understand myself better, I can see my strongest possibilities, and I know what I should explore next.”",
        ),
      },
      {
        q: "What if my child has already decided on a career?",
        a: lines(
          "Then Identity Mapping™ can help answer an equally important question: “Is this genuinely their choice—and does it fit them?”",
          "A career preference can come from real conviction. But it can also be influenced by friends, family expectations, social prestige, trends, salary expectations or limited exposure to alternatives.",
          "Identity Mapping™ is not designed to talk an aspirant out of a dream. It helps examine whether that dream is supported by their strengths, motivations, personality, interests and longer-term aspirations.",
          "If the direction fits, the aspirant moves forward with greater confidence. If something does not align, it is better to discover that before years of education, money and effort have been committed.",
        ),
      },
      {
        q: "As a parent, how does Identity Mapping™ help me feel more confident about my child's future?",
        a: lines(
          "Parents often face a difficult balance.",
          "You want to guide your child—but you do not want to impose your own choices. You want to give them freedom—but you also worry that an important decision could be made without enough maturity, information or self-understanding.",
          "Identity Mapping™ creates a more objective foundation for that conversation. Instead of:",
          "- Parent: “I think this is better for you.”",
          "- Student: “But this is what I want.”",
          "The discussion can become: “What does your profile tell us about you, and which directions deserve serious exploration?”",
          "It does not remove uncertainty from the future. It helps families make important decisions with greater clarity, evidence and confidence rather than assumption alone.",
        ),
      },
      {
        q: "Can Identity Mapping™ tell me the one perfect career for me?",
        a: lines(
          "No—and that is intentional.",
          "There is rarely one magical career that guarantees happiness or success. A strong identity may fit several pathways.",
          "Identity Mapping™ therefore focuses on identifying patterns of fit and promising directions, rather than declaring that an aspirant must become one particular thing.",
          "That matters because careers change, industries evolve and opportunities that exist ten years from now may not even exist today.",
          "The strongest career security is not knowing one job title. It is understanding yourself well enough to make better decisions as the world changes.",
        ),
      },
      {
        q: "What if parents and the aspirant disagree about the future?",
        a: lines(
          "That disagreement is more common than many families admit.",
          "Parents usually think about security, stability and long-term prospects. Aspirants often think about interest, independence, ambition and the life they want to create. Both perspectives matter.",
          "Identity Mapping™ provides a common reference point so the conversation becomes less about who is right and more about what actually fits the aspirant and what can realistically lead to a strong future.",
          "The objective is not for the parent to win or the student to win. The objective is to make a better decision together.",
        ),
      },
      {
        q: "What will I actually understand after completing Identity Mapping™?",
        a: lines(
          "You should come away with a clearer understanding of the aspirant's:",
          "- Core strengths and natural tendencies",
          "- Interests and motivational drivers",
          "- Personal and behavioural patterns",
          "- Aspirations and future orientation",
          "- Potential areas of alignment",
          "- Areas that deserve further exploration",
          "- Questions that should guide future academic and career decisions",
          "But the most important outcome is bigger than a report. It is the ability to say:",
          "“I understand myself better. I know what matters to me. I can explain why certain directions fit me—and I have a clearer basis for deciding what comes next.”",
        ),
      },
      {
        q: "What is the real risk of making these decisions without understanding identity first?",
        a: lines(
          "A wrong decision rarely looks wrong on the day it is made.",
          "The university may be prestigious. The course may be popular. The career may pay well. Everyone around you may approve.",
          "The problem often appears later—when the aspirant discovers that the path does not match who they are. Changing direction is always possible, but it can cost time, money, confidence and years of effort.",
          "Identity Mapping™ cannot predict every turn in someone's future. What it can do is make one of life's biggest decisions less dependent on guesswork, pressure and assumption.",
          "Because the goal is not simply to help an aspirant choose a course. It is to help them begin building a future that feels like their own.",
        ),
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
    what: [
      "Connects your academic profile, career goals, preferences and priorities with the right universities",
      "Evaluates universities beyond rankings—across program fit, outcomes, opportunities, location, cost and career relevance",
      "Identifies where your profile is likely to be competitive and where the opportunity may justify the stretch",
      "Builds a balanced university strategy across ambitious, competitive and strong-fit options",
      "Identifies important differences between seemingly similar universities and programs",
      "Answers the critical question: Where should I apply—and why is each university right for me?",
    ],
    who: [
      "Undergraduate, Master’s and MBA applicants",
      "Students overwhelmed by hundreds of universities, programs and rankings",
      "Applicants unsure how ambitious or realistic their university list should be",
      "Students comparing similar programs across universities or countries",
      "Applicants who want decisions based on fit and outcomes—not rankings alone",
      "Families looking to make better-informed choices before investing significant time, money and effort in applications",
    ],
    benefits: [
      {
        t: "Smarter university selection",
        d: "Move beyond rankings and reputation to identify universities that genuinely fit your profile, goals and priorities.",
      },
      {
        t: "Evidence-based fit",
        d: "Evaluate programs through curriculum, faculty, outcomes, opportunities and admission expectations—not assumptions.",
      },
      {
        t: "Strategic shortlisting",
        d: "Build a balanced university list based on fit, competitiveness and realistic admission potential.",
      },
      {
        t: "Opportunity visibility",
        d: "Discover programs, specialisations and universities you may otherwise overlook.",
      },
      {
        t: "Application prioritisation",
        d: "Know where to invest your time, effort and application resources for the strongest potential return.",
      },
      {
        t: "Confident decisions",
        d: "Move from “Which university is best?” to “Which university is best for me—and why?”",
      },
    ],
    steps: [
      {
        n: "01",
        t: "Understand Your Profile",
        d: lines(
          "We begin with you—not with a university list.",
          "Your academics, experience, career direction, preferences, priorities, budget considerations and application strengths are evaluated to establish the criteria against which universities should be assessed.",
          "Before asking “Which university is best?” we establish “What should the right university deliver for you?”",
        ),
      },
      {
        n: "02",
        t: "Build University Intelligence",
        d: lines(
          "Potential universities and programmes are investigated beyond rankings, reputation and marketing claims. The analysis can examine factors such as:",
          "Programme & Curriculum • Admission Expectations • Career Alignment • Outcomes • Location • Cost • Opportunities • Institutional Strengths • Profile Fit",
          "The objective is not to create a longer university list. It is to create a better-informed one.",
        ),
      },
      {
        n: "03",
        t: "Map Your Fit",
        d: lines(
          "Your profile is mapped against the intelligence gathered for relevant universities and programmes. Options are evaluated for fit, competitiveness and future value, helping distinguish:",
          "- Ambitious — Strong opportunities where admission may be more competitive.",
          "- Target — Strong profile-to-programme alignment with realistic competitiveness.",
          "- Safer — Options providing greater admission resilience without losing sight of academic and career value.",
          "Not simply where you can get admitted—but where admission is worth pursuing.",
        ),
      },
      {
        n: "04",
        t: "Compare the Decisions",
        d: lines(
          "Universities that appear similar on rankings can lead to very different outcomes. UIM compares the shortlisted options across the factors that matter to your decision—helping reveal:",
          "Where the strongest fit exists • What each option offers • What compromises you may be making • Where risks exist • Which opportunities deserve priority",
          "Every university should earn its place on your shortlist.",
        ),
      },
      {
        n: "05",
        t: "Receive Your UIM Report",
        d: lines(
          "Your analysis is brought together into a structured University Intelligence Mapping™ Report.",
          "Instead of receiving another generic university list, you receive a decision framework explaining which universities deserve consideration, how they compare, why they fit, where concerns exist and what each choice could mean for your future.",
          "The report informs the decision. It doesn't make the decision for you.",
        ),
      },
    ],
    afterSteps: {
      heading: "After your UIM report",
      steps: [
        {
          n: "06",
          t: "Finalise Your University List",
          d: lines(
            "Review your UIM findings and decide which universities and programmes you actually want to pursue. The final choice remains yours.",
            "Once decided, send your Final University List to DEWSMENTORA.",
            "We provide the intelligence. You make the decision.",
          ),
        },
        {
          n: "07",
          t: "Receive Your Cost & Procedure Report (CPR)",
          d: lines(
            "Now we move from “Where should I apply?” to “What will applying actually involve?”",
            "For your final university list, DEWSMENTORA prepares a personalised Cost & Procedure Report™ identifying relevant:",
            "Application Procedures • Requirements • Deadlines • Application Fees • Test/Reporting Fees • Transcript or Credential Evaluation • Translation Requirements • Other Identified Third-Party Application Expenses",
            "Choosing a university without understanding the cost and complexity of applying to it leaves part of the decision unanswered.",
            "Know the process. Know the expected costs. Before you commit.",
          ),
        },
        {
          n: "08",
          t: "Receive Your Personalised Service Coupon",
          d: lines(
            "Once the university list and application requirements are known, DEWSMENTORA can determine the execution support applicable to your case.",
            "You receive a Personalised Service Coupon showing the DEWSMENTORA services available to you and the applicable fee. Your Execution Mapping™ fee can range from ₹0 to ₹32,000, depending on the applicable service structure and scope.",
            "External expenses—including university, testing, evaluation, translation, government and other third-party charges—remain separate.",
            "You see the scope. You see the fee. You decide whether to proceed.",
          ),
        },
      ],
    },
    why: {
      intro: [
        "The challenge is not finding universities.",
        "The challenge is identifying which universities, programmes and opportunities make the most strategic sense for you.",
      ],
      common: {
        heading: "Most students focus on",
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
      deeper: {
        heading: "University Intelligence Mapping™ looks deeper",
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
    receive: [
      {
        t: "Personalised University Intelligence Map™",
        d: "A structured view of universities aligned with your academic profile, ambitions, preferences, and application potential.",
      },
      {
        t: "University Fit & Compatibility Analysis",
        d: "Evaluates academic, career, cultural, geographic, and personal fit beyond rankings alone.",
      },
      {
        t: "Reach · Target · Foundation Portfolio",
        d: "Creates a balanced university portfolio based on opportunity, competitiveness, and realistic admission potential.",
      },
      {
        t: "Program & Curriculum Comparison",
        d: "Compares relevant programs, specialisations, curriculum structures, flexibility, and academic opportunities.",
      },
      {
        t: "Admissions Intelligence Profile",
        d: "Examines what shortlisted universities value and how your profile aligns with their expectations.",
      },
      {
        t: "Career & Outcome Mapping",
        d: "Evaluates internships, industry exposure, employability, graduate outcomes, and pathways connected with each university.",
      },
      {
        t: "Cost · Scholarship · Value Analysis",
        d: "Compares tuition, scholarships, overall financial commitment, and potential value of different options.",
      },
      {
        t: "Final University Priority Matrix™",
        d: "A clear, evidence-based framework showing where to apply, why to apply, and how each university fits into your overall strategy.",
      },
    ],
    receiveNote:
      "Not just a list of highly ranked universities. A strategically mapped portfolio of universities where your profile, ambitions, opportunities, and probability of success come together.",
    faqs: [
      {
        q: "What exactly is University Intelligence Mapping™?",
        a: lines(
          "University Intelligence Mapping™ is a structured process for identifying and evaluating universities based on how well they fit the individual aspirant—not simply where they rank.",
          "It looks beyond university names and league tables to examine factors such as academic fit, program strength, admission probability, career outcomes, location, cost, opportunities, student environment and long-term relevance.",
          "The objective is not to create a long list of universities. It is to understand where your profile, ambitions and future have the strongest alignment.",
        ),
      },
      {
        q: "Why can't I simply use university rankings to choose?",
        a: lines(
          "Rankings are useful—but they answer a different question: “How is this university ranked?” They do not necessarily answer: “How good is this university for me?”",
          "A highly ranked university may be exceptional overall while another university may offer stronger opportunities for your specific program, career goal, industry, research interest or geographic preference.",
          "University Intelligence Mapping™ puts the aspirant at the centre of the comparison. Because the best university on a ranking table and the best university for your future are not always the same university.",
        ),
      },
      {
        q: "How do you decide which universities are right for my profile?",
        a: lines(
          "The process begins with the aspirant—not with a generic university list.",
          "Academic background, achievements, experience, interests, career direction, preferred programs, geographic preferences, financial considerations and future ambitions are considered together. Universities can then be evaluated across multiple dimensions of fit and opportunity.",
          "The result is a shortlist with reasoning behind it. You should understand not only “Where should I apply?” but also “Why does this university deserve a place on my list?”",
        ),
      },
      {
        q: "What if my child wants only highly ranked or famous universities?",
        a: lines(
          "Ambition should not be reduced. It should be made more intelligent.",
          "Prestigious universities can absolutely be part of the strategy when the profile and objectives justify them. But choosing purely by reputation can create an application list filled with impressive names without enough consideration of admission probability, program fit or career outcomes.",
          "University Intelligence Mapping™ helps distinguish between dream universities worth pursuing, strong opportunities worth prioritising, and famous names that may not actually be the best strategic choice.",
          "The goal is not to tell an aspirant to aim lower. It is to help them aim better.",
        ),
      },
      {
        q: "How do we know whether a university is genuinely worth the financial investment?",
        a: lines(
          "This is one of the most important questions a family can ask. Studying abroad can represent years of family savings and, in some cases, substantial education loans.",
          "The real question therefore cannot simply be “Can we afford this university?” It should also be “Does the opportunity justify the investment?”",
          "University Intelligence Mapping™ considers the wider decision—program quality, career opportunities, location, industry access, employability environment, cost and the aspirant's longer-term goals.",
          "No university can guarantee a financial return. But a major investment should be made with far more intelligence than a ranking, brochure or reputation alone.",
        ),
      },
      {
        q: "Can University Intelligence Mapping™ tell us where I have the best chance of admission?",
        a: lines(
          "It helps create a more realistic view of the application landscape.",
          "Universities can be considered according to the strength of the aspirant's profile and the competitiveness of the opportunity, helping build a balanced application strategy rather than depending entirely on either extremely ambitious or overly safe choices.",
          "This matters because two mistakes can be expensive:",
          "- Applying only to dream universities can leave an aspirant without strong options.",
          "- Applying too conservatively can mean settling below their potential.",
          "The objective is a portfolio that balances ambition, fit and probability.",
        ),
      },
      {
        q: "What if two universities look equally good? How do we decide?",
        a: lines(
          "This is where deeper intelligence becomes especially valuable.",
          "On the surface, two universities may have similar rankings and comparable programs. But underneath, the experience and opportunity can be very different.",
          "Program structure, faculty strengths, research opportunities, internships, industry ecosystem, location, alumni network, cost, class environment and career pathways can change the decision significantly.",
          "University Intelligence Mapping™ helps move the family from “Both look good.” to “This one makes more sense for the future we are trying to build.”",
        ),
      },
      {
        q: "As a parent, how does University Intelligence Mapping™ reduce the risk of making the wrong decision?",
        a: lines(
          "Parents are often being asked to support one of the largest educational investments the family will ever make. Yet the decision may sometimes be based on a ranking, an education fair, advice from friends, social media or the reputation of a university name.",
          "University Intelligence Mapping™ introduces a more structured decision process. It helps families examine why a university fits, what opportunity it offers, what compromises are involved and whether the overall decision makes sense for the aspirant.",
          "It cannot remove every uncertainty. But it can replace a large amount of guesswork with informed comparison.",
          "And when the stakes involve your child's future and a significant financial commitment, that distinction matters.",
        ),
      },
      {
        q: "Will you simply give me a list of universities?",
        a: lines(
          "No. A list is information. A mapped university strategy is intelligence.",
          "The purpose is to understand how different universities relate to the aspirant's profile, ambitions and constraints—and how those universities should be approached strategically. The aspirant should come away understanding:",
          "- Which universities deserve serious consideration",
          "- Why each university fits the profile",
          "- Where opportunities and limitations differ",
          "- Which choices are ambitious, balanced or safer",
          "- How program, career, geography and investment affect the decision",
          "- Where application effort should be concentrated",
          "The outcome is not more university names. It is better university decisions.",
        ),
      },
      {
        q: "What is the real risk of choosing universities without University Intelligence Mapping™?",
        a: lines(
          "The biggest risk is not necessarily rejection. Sometimes it is acceptance at the wrong university.",
          "A student can receive an offer from a respected institution, spend substantial money, complete the degree—and only later realise that the program, location, opportunities or career ecosystem did not align with what they actually wanted.",
          "That is why university selection should not begin with “Which university can I get into?” It should begin with “Which universities can take me where I want to go?”",
          "University Intelligence Mapping™ is designed to bring that question into the decision before applications are submitted and major commitments are made.",
          "Because admission is an achievement. But the right admission can become an advantage.",
        ),
      },
    ],
  },
  {
    slug: "story-mapping",
    name: "Story Mapping",
    question: "How should I present myself?",
    eyebrow: "Your journey. A clearer story.",
    price: "Rs. 3,999",
    cardText:
      "Transform achievements, experiences, aspirations and future direction into one coherent application narrative. Not simply better documents. A better-positioned applicant.",
    summary: "Your application isn't a collection of documents. It's one story.",
    tagline:
      "Turn your experiences, strengths and aspirations into one compelling story — a clear, consistent narrative that brings your applications to life.",
    bg: "#0B0B0B",
    fg: "#fff",
    btnBg: "#F2C230",
    btnFg: "#0B0B0B",
    what: [
      "Connects academics, experiences, achievements, strengths, motivation and future intent into one coherent story",
      "Identifies the experiences and evidence that best demonstrate your potential",
      "Builds one consistent narrative across your CV, SOP, essays, LOR strategy and applications",
      "Positions your profile around what admissions evaluators need to understand and remember",
      "Turns disconnected achievements into a clear progression of growth, purpose and direction",
      "Answers the critical question: What should the university understand and remember about me?",
    ],
    who: [
      "Undergraduate, Master’s and MBA applicants",
      "Scholarship and competitive-program applicants",
      "Students with strong profiles but weak or fragmented narratives",
      "Applicants whose materials read like a list of achievements rather than one connected story",
      "Career changers who need to explain their transition with clarity and credibility",
      "Applicants who want every part of their application to work together and make a stronger case for admission",
    ],
    benefits: [
      {
        t: "Narrative clarity",
        d: "Turn academics, experiences, achievements and ambitions into one clear and compelling story.",
      },
      {
        t: "Strategic positioning",
        d: "Present your profile around the strengths, potential and qualities you want admissions teams to recognise.",
      },
      {
        t: "Application coherence",
        d: "Ensure your SOP, essays, CV and recommendations reinforce one another instead of telling disconnected stories.",
      },
      {
        t: "Meaningful differentiation",
        d: "Go beyond listing achievements to show the experiences, choices and thinking that make your journey distinctive.",
      },
      {
        t: "Stronger university connection",
        d: "Clearly communicate Why you, Why this course, Why this university and Why now.",
      },
      {
        t: "Evaluator impact",
        d: "Make it easier for admissions teams to understand, remember and advocate for your application.",
      },
    ],
    steps: [
      {
        n: "01",
        t: "Profile Discovery",
        d: "Your academic journey, experiences, achievements, motivations and future ambitions are explored to uncover the strongest elements of your story.",
      },
      {
        n: "02",
        t: "Strategic Positioning",
        d: "Your strengths, differentiators and career direction are evaluated to determine how your profile should be positioned.",
      },
      {
        n: "03",
        t: "Narrative Architecture",
        d: "Why you, why this field, why this university and why now are connected into one clear, compelling and differentiated narrative.",
      },
      {
        n: "04",
        t: "Application Alignment",
        d: "Your SOP, essays, CV and recommendation strategy are aligned so every document reinforces the same story and strengthens your overall application.",
      },
    ],
    why: {
      intro: [
        "The challenge is not having achievements.",
        "The challenge is presenting them in a way that helps an evaluator understand who you are, what drives you and why you belong in the programme.",
      ],
      common: {
        heading: "Most students focus on",
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
      deeper: {
        heading: "Story Mapping™ looks deeper",
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
    receive: [
      {
        t: "Application Narrative Blueprint™",
        d: "The strategic story connecting your academics, experiences, achievements, motivations and future direction.",
      },
      {
        t: "Core Positioning Framework",
        d: "Defines the central message admissions evaluators should understand and remember about you.",
      },
      {
        t: "Statement of Purpose",
        d: "A focused narrative connecting your past, present ambitions and future goals.",
      },
      {
        t: "Personal Statements & Essays",
        d: "Authentic, differentiated responses built around your experiences, strengths and university fit.",
      },
      {
        t: "Academic CV / Résumé",
        d: "Structured to communicate achievements, leadership, experience and impact with clarity.",
      },
      {
        t: "Recommendation Strategy Framework",
        d: "Aligns recommender perspectives with the strengths and qualities your overall application needs to reinforce.",
      },
      {
        t: "University-Specific Narrative Versions",
        d: "Adapts your core story to the expectations, programs and opportunities of each target university.",
      },
      {
        t: "Application Consistency Review",
        d: "Ensures your SOP, essays, CV, recommendations and application answers communicate one coherent story.",
      },
    ],
    receiveNote:
      "Not separate documents telling separate stories. One strategically connected narrative that helps the evaluator understand who you are, why you belong, and where you are going.",
    faqs: [
      {
        q: "What exactly is Story Mapping™?",
        a: lines(
          "Story Mapping™ is the process of transforming an aspirant's academics, experiences, achievements, motivations and ambitions into one coherent admissions narrative.",
          "Most applicants have information. Marks. Internships. Projects. Activities. Awards. Work experience. Goals. The challenge is making all of those pieces tell the admissions committee something meaningful about the person behind them.",
          "Story Mapping™ connects those pieces so the application answers four critical questions: Why you? Why this field? Why this university? Why now?",
          "Because an application should not simply document what you have done. It should help the evaluator understand who you are becoming.",
        ),
      },
      {
        q: "My profile is already strong. Why do I need Story Mapping™?",
        a: lines(
          "Because a strong profile and a strong application are not the same thing.",
          "An applicant may have excellent grades, impressive internships, leadership experience and meaningful achievements—but if those elements appear disconnected, the evaluator is left to interpret their significance.",
          "Story Mapping™ helps turn individual accomplishments into a clear pattern of growth, motivation and future direction. Think of it this way: achievements create evidence; your story gives that evidence meaning.",
          "The stronger the profile, the more important it becomes to communicate why those achievements matter.",
        ),
      },
      {
        q: "Isn't Story Mapping™ basically writing my SOP or essays?",
        a: lines(
          "No. Writing is only the final expression of the strategy.",
          "Story Mapping™ begins before the SOP, personal statement or essay is written. It identifies the strongest experiences, differentiators, motivations, turning points and future ambitions—and determines how they should connect across the entire application.",
          "The SOP, essays, CV and recommendation strategy can then reinforce the same central positioning without simply repeating one another.",
          "Good writing makes an application sound better. Good Story Mapping™ makes the applicant easier to understand and remember.",
        ),
      },
      {
        q: "What if I don't have an extraordinary story?",
        a: lines(
          "You do not need one.",
          "Admissions committees are not looking only for applicants who founded companies, won international awards or changed the world at eighteen. Often, the strongest stories come from ordinary experiences interpreted with maturity and purpose.",
          "- A project may reveal curiosity.",
          "- A failure may reveal resilience.",
          "- An internship may clarify ambition.",
          "- A responsibility may reveal leadership.",
          "- A change in direction may demonstrate self-awareness.",
          "Story Mapping™ looks for the significance behind the experience. You do not need to manufacture an extraordinary life. You need to communicate what your experiences genuinely reveal about you.",
        ),
      },
      {
        q: "What if my profile has weaknesses, gaps or setbacks?",
        a: lines(
          "A setback does not automatically make an application weak. What matters is what happened, how you responded and what the experience says about your development.",
          "Academic dips, career changes, gaps or unsuccessful attempts may need context—but they should never be hidden behind artificial storytelling.",
          "Story Mapping™ helps determine what requires explanation, what should remain secondary and what may demonstrate maturity, resilience or clearer direction.",
          "The objective is not to disguise weakness. It is to prevent one difficult chapter from becoming the definition of the entire story.",
        ),
      },
      {
        q: "As a parent, how does Story Mapping™ protect the value of everything my child has already achieved?",
        a: lines(
          "Families may spend years building opportunities around a student—education, activities, competitions, internships, test preparation and exposure. But an admissions committee does not experience those years. It experiences an application.",
          "If that application is fragmented, generic or poorly positioned, much of the significance behind those achievements can be lost.",
          "Story Mapping™ helps ensure that the student's experiences are presented with context, connection and purpose.",
          "It cannot guarantee how an admissions committee will decide. But it helps reduce a very real risk: a capable student being underestimated because the application failed to communicate the full strength of the person behind it.",
        ),
      },
      {
        q: "Won't everyone say similar things in their SOP—passion, leadership, ambition and hard work?",
        a: lines(
          "Exactly. That is why simply using impressive words rarely creates differentiation.",
          "Thousands of applicants can say “I am passionate.”, “I want to make an impact.” or “I have always been interested in this field.”",
          "Story Mapping™ asks a harder question: What in your life makes those statements believable?",
          "Instead of relying on adjectives, the application uses experiences, decisions, behaviour and evidence to reveal character.",
          "Because differentiation does not come from claiming that you are different. It comes from giving the evaluator enough evidence to discover the difference themselves.",
        ),
      },
      {
        q: "How do you keep my SOP, CV, essays and recommendations from sounding repetitive?",
        a: lines(
          "By giving each document a different job while keeping them connected to the same larger narrative.",
          "- The CV may establish evidence.",
          "- The SOP may explain intellectual and professional direction.",
          "- Essays may reveal character, choices and experiences.",
          "- Recommendations may validate qualities through another person's perspective.",
          "Together, they should feel like different windows into the same person, not four versions of the same document. Story Mapping™ creates that architecture.",
          "The goal is consistency without repetition—and depth without contradiction.",
        ),
      },
      {
        q: "Can Story Mapping™ improve my chances of admission?",
        a: lines(
          "No ethical admissions service can promise admission. University decisions depend on many factors, including academic strength, competition, institutional priorities, program capacity and the overall applicant pool.",
          "What Story Mapping™ can do is help ensure that the application presents the aspirant with greater clarity, coherence, differentiation and credibility. That matters because the evaluator cannot consider qualities they never clearly see.",
          "Story Mapping™ therefore focuses on something you can influence: making sure the strongest, most authentic version of your profile reaches the admissions committee.",
        ),
      },
      {
        q: "What is the real risk of applying without Story Mapping™?",
        a: lines(
          "The greatest risk is not having nothing to say. It is having a great deal to say—and failing to connect it.",
          "A transcript shows performance. A CV shows activity. An SOP explains motivation. Recommendations provide validation. Essays reveal experiences.",
          "But unless those pieces work together, the admissions committee may see several documents without seeing one compelling person behind them.",
          "Story Mapping™ connects the evidence into a narrative the evaluator can understand. Because admission decisions are not made on documents alone. They are made on the person those documents allow the evaluator to see.",
        ),
      },
    ],
  },
  {
    slug: "execution-mapping",
    name: "Execution Mapping",
    question: "How should I execute?",
    eyebrow: "From university decision to application, visa & beyond",
    price: "From Rs. 2,500 (institution-supported)",
    cardText:
      "Once the decision is made, execute it professionally. Applications, documents, deadlines, submissions, communication and critical milestones — systematically managed.",
    summary: "A good decision still needs good execution: Plan → Prepare → Verify → Submit → Track → Respond → Progress.",
    tagline:
      "Choosing your universities is only the beginning. Execution Mapping™ turns your final university shortlist into a clear, cost-visible and professionally managed application journey.",
    bg: "#F2C230",
    fg: "#0B0B0B",
    btnBg: "#0B0B0B",
    btnFg: "#fff",
    what: [
      "Converts your final university list into a structured application plan",
      "Maps university-specific procedures, documents, requirements and deadlines",
      "Provides a personalised Cost & Procedure Report (CPR) before execution",
      "Identifies expected third-party costs such as application fees, reporting fees, transcript evaluation and translation charges",
      "Connects your application requirements with Story Mapping™ and document preparation, where selected",
      "Coordinates application preparation and filing",
      "Tracks deadlines, pending requirements and university responses",
      "Provides dedicated executive support through the application journey",
      "Coordinates post-application requirements and next steps",
      "Provides visa-process and filing support within the applicable service scope",
    ],
    who: [
      "Students who have finalised the universities where they want to apply",
      "Applicants managing several university applications simultaneously",
      "Families who want to understand expected application costs before proceeding",
      "Students worried about documents, procedures or deadlines",
      "Applicants who want professional coordination rather than managing every application independently",
      "Families who want one structured process from university selection through application and subsequent stages",
    ],
    whoNote:
      "Execution Mapping™ answers one critical question: “Now that I know where I want to apply, how do I execute everything correctly?”",
    benefits: [
      { t: "Cost clarity", d: "Know the expected application-related expenses before execution begins." },
      { t: "Structured execution", d: "Turn different university procedures into one organised application roadmap." },
      {
        t: "Fewer avoidable errors",
        d: "Structured preparation and review help reduce missed requirements and incomplete submissions.",
      },
      {
        t: "Deadline control",
        d: "Track university deadlines, documents, submissions and pending actions in one coordinated process.",
      },
      {
        t: "Application consistency",
        d: "Keep your documents, information and application narrative aligned across universities.",
      },
      {
        t: "Dedicated coordination",
        d: "Have a DEWSMENTORA executive coordinating the process and helping you understand what comes next.",
      },
      {
        t: "End-to-end continuity",
        d: "Move more smoothly from application preparation to filing, follow-ups, decisions and applicable visa-stage support.",
      },
    ],
    stepsIntro:
      "Execution Mapping™ begins after you have made your university decision. From there, DEWSMENTORA converts multiple requirements, costs, documents and deadlines into one structured application journey.",
    steps: [
      {
        n: "01",
        t: "Finalise Your University List",
        d: lines(
          "Complete University Intelligence Mapping™, review your report and decide which universities and programmes you want to apply to. Share your Final University List with DEWSMENTORA.",
          "You decide where. We map what happens next.",
        ),
      },
      {
        n: "02",
        t: "Receive Your Cost & Procedure Report (CPR)",
        d: lines(
          "We analyse your selected universities and prepare your personalised Cost & Procedure Report™. Your CPR maps:",
          "- Application procedures and requirements",
          "- Important deadlines",
          "- Application fees",
          "- Test/reporting fees, where applicable",
          "- Transcript or credential evaluation requirements",
          "- Translation requirements, where applicable",
          "- Other identified third-party application expenses",
          "Know the process. Know the expected costs. Before you commit.",
        ),
      },
      {
        n: "03",
        t: "Receive Your Personalised Service Coupon",
        d: lines(
          "Based on your final university list and applicable service structure, DEWSMENTORA provides your personalised service coupon. Your applicable Execution Mapping™ fee can range from ₹0 to ₹32,000.",
          "The coupon clearly identifies which DEWSMENTORA services are included. University, government and other third-party charges remain separate.",
          "Clear scope. Clear fee. Your decision.",
        ),
      },
      {
        n: "04",
        t: "Story Mapping™ & Document Preparation",
        d: lines(
          "Where included, we develop and coordinate the application materials required for your selected universities. This may include:",
          "SOPs • Essays • CV/Resume • Recommendation Strategy • University-specific documents",
          "The objective is not simply to prepare documents, but to maintain a clear, credible and consistent application narrative.",
        ),
      },
      {
        n: "05",
        t: "Application Preparation & Execution",
        d: lines(
          "Each selected university is mapped against its specific application requirements. Applications are prepared, reviewed and coordinated for submission with attention to:",
          "Requirements • Documents • Formats • Deadlines • Application-specific instructions",
          "Different universities. One structured execution system.",
        ),
      },
      {
        n: "06",
        t: "Dedicated Executive Support",
        d: lines(
          "A dedicated DEWSMENTORA executive becomes your primary coordination point. Your executive helps coordinate:",
          "Pending actions • Deadlines • Application updates • Follow-ups • Additional requirements • Next steps",
          "So you don't have to manage every moving part alone.",
        ),
      },
      {
        n: "07",
        t: "Post-Application Coordination",
        d: lines(
          "Submission is not always the end of an application.",
          "Where applicable, we help coordinate subsequent stages such as additional document requests, university communications, application updates, offer-related requirements and other next steps within your service scope.",
          "Submitted doesn't mean finished. We help you stay on track.",
        ),
      },
      {
        n: "08",
        t: "Visa Process & Filing Support",
        d: lines(
          "Where included and permitted, DEWSMENTORA supports the applicable visa-stage process after admission.",
          "This may include coordination of required documentation, process guidance and filing support according to the destination and applicable service scope.",
          "From university decision toward your destination.",
        ),
      },
    ],
    stepsOutro:
      "One university list. Multiple requirements. Hundreds of moving parts. One structured execution journey.",
    why: {
      intro: [
        "The challenge isn't simply submitting an application.",
        "The challenge is managing everything that must happen correctly before, during and after submission.",
      ],
      common: {
        heading: "What an applicant sees",
        items: [
          "Application form",
          "SOP",
          "CV",
          "Recommendation letters",
          "Upload documents",
          "Pay application fee",
          "Submit",
        ],
        note: "One university may be manageable.",
      },
      deeper: {
        heading: "What the actual process can involve",
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
        note: "Multiple universities create multiple processes running simultaneously.",
      },
      outro: [
        "Execution Mapping™ brings them together",
        "PLAN → PREPARE → CHECK → FILE → TRACK → RESPOND → PROGRESS",
        "You shouldn't have to become an application-process expert just to apply to university.",
      ],
    },
    receive: [
      {
        t: "Cost & Procedure Report (CPR)",
        d: "A personalised view of the procedures, requirements and expected application-related external expenses for your selected universities.",
      },
      {
        t: "Application Execution Roadmap",
        d: "A structured plan showing what needs to happen across your university applications.",
      },
      {
        t: "University Requirement Mapping",
        d: "University- and programme-specific requirements organised for easier execution.",
      },
      {
        t: "Application Cost Visibility",
        d: "Expected external costs identified wherever applicable, including application fees, reporting charges, evaluation and translation requirements.",
      },
      {
        t: "Story Mapping™ & Document Support",
        d: "Where included in your selected service, strategic preparation and coordination of SOPs, essays, CV/resume and recommendation strategy.",
      },
      {
        t: "Application Filing & Tracking",
        d: "Structured preparation, submission coordination, deadline tracking and follow-up.",
      },
      { t: "Dedicated Executive", d: "A designated point of coordination for your application journey." },
      {
        t: "Post-Application Support",
        d: "Coordination of subsequent university requirements and application-stage next steps within your service scope.",
      },
      {
        t: "Visa Process & Filing Support",
        d: "Applicable documentation and filing support according to destination, service scope and regulatory requirements.",
      },
    ],
    receiveNote:
      "You don't simply receive help filling forms. You receive a structured execution system designed to turn a complicated multi-university application journey into a process you can understand, track and manage with greater confidence.",
    faqs: [
      {
        q: "What exactly is Execution Mapping™?",
        a: lines(
          "Execution Mapping™ is DEWSMENTORA's structured application-management service designed to take you from your final university selection through application execution and applicable post-application stages.",
          "Instead of treating every application as a separate collection of forms, documents and deadlines, we organise the journey into one coordinated process.",
        ),
      },
      {
        q: "When does Execution Mapping™ begin?",
        a: lines(
          "Execution Mapping™ begins after you have completed University Intelligence Mapping™ and finalised the universities and programmes where you want to apply.",
          "UIM helps answer “Where should I apply?” Execution Mapping™ then addresses “How do I execute those applications?”",
        ),
      },
      {
        q: "What is the Cost & Procedure Report (CPR)?",
        a: lines(
          "CPR is prepared using your final university list. It identifies relevant application procedures, requirements, deadlines and expected third-party costs wherever applicable.",
          "These may include application fees, test/reporting charges, transcript evaluation, credential evaluation, translation and other university-specific requirements.",
          "It allows you to understand more of the financial and procedural commitment before execution begins.",
        ),
      },
      {
        q: "Is the Execution Mapping™ fee the total cost of applying?",
        a: lines(
          "No.",
          "The DEWSMENTORA Execution Mapping™ fee covers only the DEWSMENTORA services included in your applicable service package/coupon.",
          "It does not include amounts payable to universities, testing organisations, evaluators, translators, government authorities or other third parties. That distinction should be clearly understood before proceeding.",
        ),
      },
      {
        q: "Why does the Execution Mapping™ fee range from ₹0 to ₹32,000?",
        a: lines(
          "The applicable DEWSMENTORA fee depends on the service structure available for the candidate and the scope of execution support involved.",
          "After your final university list is received and the applicable pathway is determined, you receive your personalised service offer/coupon showing the DEWSMENTORA services available to you and the applicable fee.",
          "The fee is disclosed before you commit to execution.",
        ),
      },
      {
        q: "Does Execution Mapping™ include SOPs, essays, CV and LOR support?",
        a: lines(
          "Where included in your selected service, Story Mapping™ supports the strategic development and coordination of application materials such as SOPs, essays, CV/resume and recommendation strategy.",
          "The objective is not merely to produce separate documents. It is to ensure that the application communicates a clear, credible and consistent story.",
        ),
      },
      {
        q: "Will someone actually manage my applications?",
        a: lines(
          "Where included in your Execution Mapping™ service, a dedicated executive acts as your primary coordination point.",
          "The executive helps coordinate requirements, deadlines, application stages, follow-ups and subsequent actions.",
          "You remain involved in important decisions and approvals; DEWSMENTORA helps organise and coordinate the execution.",
        ),
      },
      {
        q: "Does Execution Mapping™ guarantee admission?",
        a: lines(
          "No. No responsible service should guarantee admission because the final decision belongs to the university.",
          "Execution Mapping™ is designed to improve the quality, organisation, completeness and management of the application process—not manufacture an admission guarantee.",
        ),
      },
      {
        q: "Does Execution Mapping™ continue after applications are submitted?",
        a: lines(
          "Yes, where included in your service scope.",
          "Application submission is not necessarily the end of the process. Universities may request additional information, documents, interviews, clarification or subsequent actions.",
          "Execution Mapping™ can continue through applicable post-application coordination and next steps.",
        ),
      },
      {
        q: "What is the biggest advantage of Execution Mapping™?",
        a: lines(
          "A university application can appear simple until several universities, deadlines, documents, costs and procedures begin running simultaneously.",
          "The biggest advantage is therefore not simply convenience. It is control. You understand:",
          "- What needs to be done.",
          "- What it may cost.",
          "- Who needs to do it.",
          "- When it needs to happen.",
          "- What has already been completed.",
          "- And what comes next.",
          "Execution Mapping™ turns application complexity into a structured journey—from your university decision toward your destination.",
        ),
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
