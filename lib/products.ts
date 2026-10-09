import type { FaqItem } from "./structured-data";

export type ProductStep = { n: string; t: string; d: string };
export type ProductBenefit = { t: string; d: string };
export type ProductFaq = FaqItem;

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
        q: "What exactly is Identity Mapping™ — and why does it matter?",
        a: [
          "Identity Mapping™ is a structured process designed to help an aspirant understand who they are before deciding where they should go.",
          "It brings together strengths, interests, motivations, behavioural patterns, natural abilities, aspirations and future possibilities to create a clearer picture of the individual behind the marks and qualifications.",
          "Because choosing a future without understanding yourself can turn even a good opportunity into the wrong direction.",
          "Identity Mapping™ helps replace “What should I become?” with a more powerful question: “What kind of future actually fits me?”",
        ],
      },
      {
        q: "How is Identity Mapping™ different from an aptitude, personality or psychometric test?",
        a: [
          "A test gives you a result.",
          "Identity Mapping™ builds an understanding.",
          "Traditional assessments can provide useful indicators—aptitude, personality type, interests or preferences—but an aspirant is more complex than a score or category.",
          "Identity Mapping™ connects multiple dimensions of the individual to understand not simply what they may be good at, but what combination of strengths, motivation, personality and ambition could shape a fulfilling direction.",
          "The objective is not to put an aspirant into a box.",
          "It is to help them see possibilities they may not yet have been able to see in themselves.",
        ],
      },
      {
        q: "My child is academically strong. Why would we still need Identity Mapping™?",
        a: [
          "Good marks answer an important question:",
          "“Can the student perform?”",
          "They do not necessarily answer:",
          "“Where should that ability be directed?”",
          "High-performing students often face more possibilities, not fewer. Engineering, economics, medicine, design, technology, research, entrepreneurship, management and emerging careers may all appear possible.",
          "That creates a different problem—the fear of using strong potential in the wrong direction.",
          "Identity Mapping™ helps transform academic ability into purposeful direction, so achievement is not only impressive on paper but connected to a future the aspirant genuinely wants to build.",
        ],
      },
      {
        q: "What if I have absolutely no idea what I want to do?",
        a: [
          "That is precisely when Identity Mapping™ can be most valuable.",
          "You do not need to arrive with a career already chosen.",
          "Confusion often does not mean that an aspirant lacks ability. It may simply mean that they have never had a structured way to connect who they are with what they could become.",
          "Identity Mapping™ begins with the individual—not with a predetermined career list.",
          "The goal is to move from:",
          "“I don't know what I want.”",
          "to",
          "“I understand myself better, I can see my strongest possibilities, and I know what I should explore next.”",
        ],
      },
      {
        q: "What if my child has already decided on a career?",
        a: [
          "Then Identity Mapping™ can help answer an equally important question:",
          "“Is this genuinely their choice—and does it fit them?”",
          "A career preference can come from real conviction. But it can also be influenced by friends, family expectations, social prestige, trends, salary expectations or limited exposure to alternatives.",
          "Identity Mapping™ is not designed to talk an aspirant out of a dream.",
          "It helps examine whether that dream is supported by their strengths, motivations, personality, interests and longer-term aspirations.",
          "If the direction fits, the aspirant moves forward with greater confidence.",
          "If something does not align, it is better to discover that before years of education, money and effort have been committed.",
        ],
      },
      {
        q: "As a parent, how does Identity Mapping™ help me feel more confident about my child's future?",
        a: [
          "Parents often face a difficult balance.",
          "You want to guide your child—but you do not want to impose your own choices. You want to give them freedom—but you also worry that an important decision could be made without enough maturity, information or self-understanding.",
          "Identity Mapping™ creates a more objective foundation for that conversation.",
          "Instead of:",
          "Parent: “I think this is better for you.”",
          "Student: “But this is what I want.”",
          "The discussion can become:",
          "“What does your profile tell us about you, and which directions deserve serious exploration?”",
          "It does not remove uncertainty from the future.",
          "It helps families make important decisions with greater clarity, evidence and confidence rather than assumption alone.",
        ],
      },
      {
        q: "Can Identity Mapping™ tell me the one perfect career for me?",
        a: [
          "No—and that is intentional.",
          "There is rarely one magical career that guarantees happiness or success.",
          "A strong identity may fit several pathways.",
          "Identity Mapping™ therefore focuses on identifying patterns of fit and promising directions, rather than declaring that an aspirant must become one particular thing.",
          "That matters because careers change, industries evolve and opportunities that exist ten years from now may not even exist today.",
          "The strongest career security is not knowing one job title. It is understanding yourself well enough to make better decisions as the world changes.",
        ],
      },
      {
        q: "What if parents and the aspirant disagree about the future?",
        a: [
          "That disagreement is more common than many families admit.",
          "Parents usually think about security, stability and long-term prospects.",
          "Aspirants often think about interest, independence, ambition and the life they want to create.",
          "Both perspectives matter.",
          "Identity Mapping™ provides a common reference point so the conversation becomes less about who is right and more about what actually fits the aspirant and what can realistically lead to a strong future.",
          "The objective is not for the parent to win or the student to win.",
          "The objective is to make a better decision together.",
        ],
      },
      {
        q: "What will I actually understand after completing Identity Mapping™?",
        a: [
          "You should come away with a clearer understanding of the aspirant's:",
          {
            list: [
              "Core strengths and natural tendencies",
              "Interests and motivational drivers",
              "Personal and behavioural patterns",
              "Aspirations and future orientation",
              "Potential areas of alignment",
              "Areas that deserve further exploration",
              "Questions that should guide future academic and career decisions",
            ],
          },
          "But the most important outcome is bigger than a report.",
          "It is the ability to say:",
          "“I understand myself better. I know what matters to me. I can explain why certain directions fit me—and I have a clearer basis for deciding what comes next.”",
        ],
      },
      {
        q: "What is the real risk of making these decisions without understanding identity first?",
        a: [
          "A wrong decision rarely looks wrong on the day it is made.",
          "The university may be prestigious.",
          "The course may be popular.",
          "The career may pay well.",
          "Everyone around you may approve.",
          "The problem often appears later—when the aspirant discovers that the path does not match who they are.",
          "Changing direction is always possible, but it can cost time, money, confidence and years of effort.",
          "Identity Mapping™ cannot predict every turn in someone's future.",
          "What it can do is make one of life's biggest decisions less dependent on guesswork, pressure and assumption.",
          "Because the goal is not simply to help an aspirant choose a course.",
          "It is to help them begin building a future that feels like their own.",
        ],
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
        q: "What exactly is University Intelligence Mapping™?",
        a: [
          "University Intelligence Mapping™ is a structured process for identifying and evaluating universities based on how well they fit the individual aspirant—not simply where they rank.",
          "It looks beyond university names and league tables to examine factors such as academic fit, program strength, admission probability, career outcomes, location, cost, opportunities, student environment and long-term relevance.",
          "The objective is not to create a long list of universities.",
          "It is to understand where your profile, ambitions and future have the strongest alignment.",
        ],
      },
      {
        q: "Why can't I simply use university rankings to choose?",
        a: [
          "Rankings are useful—but they answer a different question:",
          "“How is this university ranked?”",
          "They do not necessarily answer:",
          "“How good is this university for me?”",
          "A highly ranked university may be exceptional overall while another university may offer stronger opportunities for your specific program, career goal, industry, research interest or geographic preference.",
          "University Intelligence Mapping™ puts the aspirant at the centre of the comparison.",
          "Because the best university on a ranking table and the best university for your future are not always the same university.",
        ],
      },
      {
        q: "How do you decide which universities are right for my profile?",
        a: [
          "The process begins with the aspirant—not with a generic university list.",
          "Academic background, achievements, experience, interests, career direction, preferred programs, geographic preferences, financial considerations and future ambitions are considered together.",
          "Universities can then be evaluated across multiple dimensions of fit and opportunity.",
          "The result is a shortlist with reasoning behind it.",
          "You should understand not only:",
          "“Where should I apply?”",
          "but also:",
          "“Why does this university deserve a place on my list?”",
        ],
      },
      {
        q: "What if my child wants only highly ranked or famous universities?",
        a: [
          "Ambition should not be reduced.",
          "It should be made more intelligent.",
          "Prestigious universities can absolutely be part of the strategy when the profile and objectives justify them. But choosing purely by reputation can create an application list filled with impressive names without enough consideration of admission probability, program fit or career outcomes.",
          "University Intelligence Mapping™ helps distinguish between:",
          "Dream universities worth pursuing, strong opportunities worth prioritising, and famous names that may not actually be the best strategic choice.",
          "The goal is not to tell an aspirant to aim lower.",
          "It is to help them aim better.",
        ],
      },
      {
        q: "How do we know whether a university is genuinely worth the financial investment?",
        a: [
          "This is one of the most important questions a family can ask.",
          "Studying abroad can represent years of family savings and, in some cases, substantial education loans.",
          "The real question therefore cannot simply be:",
          "“Can we afford this university?”",
          "It should also be:",
          "“Does the opportunity justify the investment?”",
          "University Intelligence Mapping™ considers the wider decision—program quality, career opportunities, location, industry access, employability environment, cost and the aspirant's longer-term goals.",
          "No university can guarantee a financial return.",
          "But a major investment should be made with far more intelligence than a ranking, brochure or reputation alone.",
        ],
      },
      {
        q: "Can University Intelligence Mapping™ tell us where I have the best chance of admission?",
        a: [
          "It helps create a more realistic view of the application landscape.",
          "Universities can be considered according to the strength of the aspirant's profile and the competitiveness of the opportunity, helping build a balanced application strategy rather than depending entirely on either extremely ambitious or overly safe choices.",
          "This matters because two mistakes can be expensive:",
          "Applying only to dream universities can leave an aspirant without strong options.",
          "Applying too conservatively can mean settling below their potential.",
          "The objective is a portfolio that balances ambition, fit and probability.",
        ],
      },
      {
        q: "What if two universities look equally good? How do we decide?",
        a: [
          "This is where deeper intelligence becomes especially valuable.",
          "On the surface, two universities may have similar rankings and comparable programs.",
          "But underneath, the experience and opportunity can be very different.",
          "Program structure, faculty strengths, research opportunities, internships, industry ecosystem, location, alumni network, cost, class environment and career pathways can change the decision significantly.",
          "University Intelligence Mapping™ helps move the family from:",
          "“Both look good.”",
          "to:",
          "“This one makes more sense for the future we are trying to build.”",
        ],
      },
      {
        q: "As a parent, how does University Intelligence Mapping™ reduce the risk of making the wrong decision?",
        a: [
          "Parents are often being asked to support one of the largest educational investments the family will ever make.",
          "Yet the decision may sometimes be based on a ranking, an education fair, advice from friends, social media or the reputation of a university name.",
          "University Intelligence Mapping™ introduces a more structured decision process.",
          "It helps families examine why a university fits, what opportunity it offers, what compromises are involved and whether the overall decision makes sense for the aspirant.",
          "It cannot remove every uncertainty.",
          "But it can replace a large amount of guesswork with informed comparison.",
          "And when the stakes involve your child's future and a significant financial commitment, that distinction matters.",
        ],
      },
      {
        q: "Will you simply give me a list of universities?",
        a: [
          "No.",
          "A list is information.",
          "A mapped university strategy is intelligence.",
          "The purpose is to understand how different universities relate to the aspirant's profile, ambitions and constraints—and how those universities should be approached strategically.",
          "The aspirant should come away understanding:",
          {
            list: [
              "Which universities deserve serious consideration",
              "Why each university fits the profile",
              "Where opportunities and limitations differ",
              "Which choices are ambitious, balanced or safer",
              "How program, career, geography and investment affect the decision",
              "Where application effort should be concentrated",
            ],
          },
          "The outcome is not more university names.",
          "It is better university decisions.",
        ],
      },
      {
        q: "What is the real risk of choosing universities without University Intelligence Mapping™?",
        a: [
          "The biggest risk is not necessarily rejection.",
          "Sometimes it is acceptance at the wrong university.",
          "A student can receive an offer from a respected institution, spend substantial money, complete the degree—and only later realise that the program, location, opportunities or career ecosystem did not align with what they actually wanted.",
          "That is why university selection should not begin with:",
          "“Which university can I get into?”",
          "It should begin with:",
          "“Which universities can take me where I want to go?”",
          "University Intelligence Mapping™ is designed to bring that question into the decision before applications are submitted and major commitments are made.",
          "Because admission is an achievement.",
          "But the right admission can become an advantage.",
        ],
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
        q: "What exactly is Story Mapping™?",
        a: [
          "Story Mapping™ is the process of transforming an aspirant's academics, experiences, achievements, motivations and ambitions into one coherent admissions narrative.",
          "Most applicants have information.",
          "Marks. Internships. Projects. Activities. Awards. Work experience. Goals.",
          "The challenge is making all of those pieces tell the admissions committee something meaningful about the person behind them.",
          "Story Mapping™ connects those pieces so the application answers four critical questions:",
          "Why you? Why this field? Why this university? Why now?",
          "Because an application should not simply document what you have done.",
          "It should help the evaluator understand who you are becoming.",
        ],
      },
      {
        q: "My profile is already strong. Why do I need Story Mapping™?",
        a: [
          "Because a strong profile and a strong application are not the same thing.",
          "An applicant may have excellent grades, impressive internships, leadership experience and meaningful achievements—but if those elements appear disconnected, the evaluator is left to interpret their significance.",
          "Story Mapping™ helps turn individual accomplishments into a clear pattern of growth, motivation and future direction.",
          "Think of it this way:",
          "Achievements create evidence.",
          "Your story gives that evidence meaning.",
          "The stronger the profile, the more important it becomes to communicate why those achievements matter.",
        ],
      },
      {
        q: "Isn't Story Mapping™ basically writing my SOP or essays?",
        a: [
          "No.",
          "Writing is only the final expression of the strategy.",
          "Story Mapping™ begins before the SOP, personal statement or essay is written.",
          "It identifies the strongest experiences, differentiators, motivations, turning points and future ambitions—and determines how they should connect across the entire application.",
          "The SOP, essays, CV and recommendation strategy can then reinforce the same central positioning without simply repeating one another.",
          "Good writing makes an application sound better.",
          "Good Story Mapping™ makes the applicant easier to understand and remember.",
        ],
      },
      {
        q: "What if I don't have an extraordinary story?",
        a: [
          "You do not need one.",
          "Admissions committees are not looking only for applicants who founded companies, won international awards or changed the world at eighteen.",
          "Often, the strongest stories come from ordinary experiences interpreted with maturity and purpose.",
          "A project may reveal curiosity.",
          "A failure may reveal resilience.",
          "An internship may clarify ambition.",
          "A responsibility may reveal leadership.",
          "A change in direction may demonstrate self-awareness.",
          "Story Mapping™ looks for the significance behind the experience.",
          "You do not need to manufacture an extraordinary life. You need to communicate what your experiences genuinely reveal about you.",
        ],
      },
      {
        q: "What if my profile has weaknesses, gaps or setbacks?",
        a: [
          "A setback does not automatically make an application weak.",
          "What matters is what happened, how you responded and what the experience says about your development.",
          "Academic dips, career changes, gaps or unsuccessful attempts may need context—but they should never be hidden behind artificial storytelling.",
          "Story Mapping™ helps determine what requires explanation, what should remain secondary and what may demonstrate maturity, resilience or clearer direction.",
          "The objective is not to disguise weakness.",
          "It is to prevent one difficult chapter from becoming the definition of the entire story.",
        ],
      },
      {
        q: "As a parent, how does Story Mapping™ protect the value of everything my child has already achieved?",
        a: [
          "Families may spend years building opportunities around a student—education, activities, competitions, internships, test preparation and exposure.",
          "But an admissions committee does not experience those years.",
          "It experiences an application.",
          "If that application is fragmented, generic or poorly positioned, much of the significance behind those achievements can be lost.",
          "Story Mapping™ helps ensure that the student's experiences are presented with context, connection and purpose.",
          "It cannot guarantee how an admissions committee will decide.",
          "But it helps reduce a very real risk:",
          "A capable student being underestimated because the application failed to communicate the full strength of the person behind it.",
        ],
      },
      {
        q: "Won't everyone say similar things in their SOP—passion, leadership, ambition and hard work?",
        a: [
          "Exactly.",
          "That is why simply using impressive words rarely creates differentiation.",
          "Thousands of applicants can say:",
          "“I am passionate.”",
          "“I want to make an impact.”",
          "“I have always been interested in this field.”",
          "Story Mapping™ asks a harder question:",
          "What in your life makes those statements believable?",
          "Instead of relying on adjectives, the application uses experiences, decisions, behaviour and evidence to reveal character.",
          "Because differentiation does not come from claiming that you are different.",
          "It comes from giving the evaluator enough evidence to discover the difference themselves.",
        ],
      },
      {
        q: "How do you keep my SOP, CV, essays and recommendations from sounding repetitive?",
        a: [
          "By giving each document a different job while keeping them connected to the same larger narrative.",
          "The CV may establish evidence.",
          "The SOP may explain intellectual and professional direction.",
          "Essays may reveal character, choices and experiences.",
          "Recommendations may validate qualities through another person's perspective.",
          "Together, they should feel like different windows into the same person, not four versions of the same document.",
          "Story Mapping™ creates that architecture.",
          "The goal is consistency without repetition—and depth without contradiction.",
        ],
      },
      {
        q: "Can Story Mapping™ improve my chances of admission?",
        a: [
          "No ethical admissions service can promise admission.",
          "University decisions depend on many factors, including academic strength, competition, institutional priorities, program capacity and the overall applicant pool.",
          "What Story Mapping™ can do is help ensure that the application presents the aspirant with greater clarity, coherence, differentiation and credibility.",
          "That matters because the evaluator cannot consider qualities they never clearly see.",
          "Story Mapping™ therefore focuses on something you can influence:",
          "Making sure the strongest, most authentic version of your profile reaches the admissions committee.",
        ],
      },
      {
        q: "What is the real risk of applying without Story Mapping™?",
        a: [
          "The greatest risk is not having nothing to say.",
          "It is having a great deal to say—and failing to connect it.",
          "A transcript shows performance.",
          "A CV shows activity.",
          "An SOP explains motivation.",
          "Recommendations provide validation.",
          "Essays reveal experiences.",
          "But unless those pieces work together, the admissions committee may see several documents without seeing one compelling person behind them.",
          "Story Mapping™ connects the evidence into a narrative the evaluator can understand.",
          "Because admission decisions are not made on documents alone.",
          "They are made on the person those documents allow the evaluator to see.",
        ],
      },
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
