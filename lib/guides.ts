export type GuideSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  dek: string;
  category: string;
  readTime: string;
  updatedDisplay: string;
  updatedISO: string;
  publishedISO: string;
  keywords: string[];
  sections: GuideSection[];
  relatedProduct: { href: string; label: string };
  faqs: { q: string; a: string }[];
  howToSteps?: { name: string; text: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "how-to-choose-a-university",
    title: "How to Choose the Right University or School",
    metaTitle: "How to Choose a University: A Decision Framework",
    metaDescription:
      "A practical framework for deciding which university is right for you — beyond rankings, covering program fit, funding, outcomes, and comparing offers.",
    eyebrow: "Decision making",
    dek:
      "Rankings measure research reputation, not whether a program is right for you. Here's how to build a shortlist you can actually defend.",
    category: "Decision making",
    readTime: "9 min read",
    updatedDisplay: "Updated August 2026",
    updatedISO: "2026-08-24",
    publishedISO: "2026-02-01",
    keywords: ["how to choose a university", "how to decide the right school", "how to pick a college", "choosing a university checklist"],
    relatedProduct: { href: "/products/university-intelligence-mapping", label: "University Intelligence Mapping" },
    sections: [
      {
        type: "p",
        text: "Choosing a university is usually treated as a name-recognition problem — get into the highest-ranked school you can, and the rest sorts itself out. That approach breaks down fast once you're comparing real offers: a globally ranked program in the wrong specialisation is a worse decision than a lesser-known program that matches exactly what you want to do next. Rank is one input. It shouldn't be the only one.",
      },
      { type: "h2", id: "outcome-not-name", text: "Start with the outcome, not the name" },
      {
        type: "p",
        text: "Before you open a single rankings table, write down what you want to be true two years after graduation: the kind of role, the kind of company or research environment, the geography you want to be working in. That single paragraph becomes your filter for everything else — a program only earns a place on your shortlist if it plausibly gets you there.",
      },
      { type: "h2", id: "five-factors", text: "The five factors that actually predict fit" },
      {
        type: "ul",
        items: [
          "Curriculum and specialisation — does the actual module list match what you want to learn, or is the program a generic version of the subject with your target specialisation as one elective among many?",
          "Faculty and research alignment — for research-leaning programs, are there specific faculty publishing in the area you care about, and are they currently taking students?",
          "Cost and funding reality — total cost including living expenses, set against realistic funding (assistantships, scholarships, loans), not the sticker price alone.",
          "Location and post-study work rights — what you're legally allowed to do after the degree ends matters as much as the degree itself if working in that country is part of the plan.",
          "Career outcomes for your specific field — a university's overall employment statistics can hide wide variation between departments; look for outcomes data scoped to your program, not the institution as a whole.",
        ],
      },
      { type: "h2", id: "rankings", text: "How to use rankings without being ruled by them" },
      {
        type: "p",
        text: "Global rankings (QS, Times Higher Education, US News) are built mostly from research output, citations, and reputation surveys — useful signals for research-intensive doctoral work, weaker signals for a taught master's where teaching quality and industry links matter more. Use a ranking to generate an initial list of universities worth investigating, then set it aside. Once two programs are both credible, the ranking difference between them tells you very little about which is the better decision for you specifically.",
      },
      { type: "h2", id: "scoring-method", text: "A simple scoring method for comparing offers" },
      {
        type: "p",
        text: "When you're down to a real shortlist, a basic weighted matrix removes a surprising amount of second-guessing:",
      },
      {
        type: "ol",
        items: [
          "List your five to seven decision factors (curriculum fit, cost, location, funding, outcomes, and anything personally important — climate, community, safety).",
          "Assign each factor a weight from 1–5 based on how much it actually matters to you, not how much you feel you should care about it.",
          "Score each shortlisted program 1–5 on every factor.",
          "Multiply score by weight for each factor, then sum the totals per program.",
          "Sit with the result for a few days before deciding — the exercise is meant to surface your real priorities, not replace judgment entirely.",
        ],
      },
      { type: "h2", id: "red-flags", text: "Red flags worth taking seriously" },
      {
        type: "ul",
        items: [
          "A curriculum that hasn't been updated in a fast-moving field — check when core courses were last revised.",
          "No published outcomes or employment data for the specific program, only institution-wide averages.",
          "Unusually limited funding options in a field where assistantships or scholarships are standard practice elsewhere.",
          "A mismatch between your post-study plans and that country's actual visa or work-rights rules — verify this before you fall in love with a program.",
        ],
      },
      { type: "h2", id: "second-opinion", text: "When it's worth getting a second opinion" },
      {
        type: "p",
        text: "If you're comparing offers across multiple countries, or you suspect your shortlist is being shaped more by what people around you expect than by what actually fits your profile, an independent evaluation can be worth the time — not to replace your judgment, but to pressure-test it against a documented framework instead of instinct alone.",
      },
    ],
    faqs: [
      {
        q: "Should I always choose the highest-ranked university I get into?",
        a: "Not automatically. Rank is a reasonable tiebreaker between two otherwise-equal options, but it shouldn't override a clear mismatch in program fit, funding, or post-study work rights. A lower-ranked program that matches your specialisation and offers funding can be the stronger decision.",
      },
      {
        q: "How many universities should I apply to?",
        a: "Most applicants do well applying to six to ten programs split across three tiers — a couple of reach programs, several solid-fit programs, and one or two safety options where admission is likely and the fit is still genuinely good.",
      },
      {
        q: "What if two programs score almost identically on my comparison matrix?",
        a: "That's a useful signal in itself — it usually means the decision comes down to a factor you didn't weight explicitly, like personal comfort with the location or a specific faculty relationship. Name that factor directly rather than defaulting to rank.",
      },
    ],
  },
  {
    slug: "how-to-apply-for-a-masters-degree-abroad",
    title: "How to Apply for a Master's Degree Abroad: Step-by-Step",
    metaTitle: "How to Apply for a Master's Degree Abroad",
    metaDescription:
      "A step-by-step guide to applying for a master's degree abroad — timeline, tests, documents, statement of purpose, offers, and visa preparation.",
    eyebrow: "Applications",
    dek: "The process is broadly the same everywhere in the world. Here's the sequence, and what tends to go wrong at each stage.",
    category: "Applications",
    readTime: "10 min read",
    updatedDisplay: "Updated August 2026",
    updatedISO: "2026-08-24",
    publishedISO: "2026-02-10",
    keywords: ["how to apply for masters abroad", "how to apply for masters globally", "master's application process", "study abroad application steps"],
    relatedProduct: { href: "/products/execution-mapping", label: "Execution Mapping" },
    sections: [
      {
        type: "p",
        text: "Applying for a master's abroad involves more moving parts than a domestic application — tests, document legalisation, funding proof, and a visa process layered on top of the academic application itself. The country changes the specifics; the sequence below holds across almost every destination.",
      },
      { type: "h2", id: "timeline", text: "Build your timeline backwards from the intake date" },
      {
        type: "p",
        text: "Work backwards from your target start date, not forwards from today. As a rough guide for a program starting in September:",
      },
      {
        type: "ul",
        items: [
          "12–18 months before: research programs, take standardised tests if required.",
          "9–12 months before: finalise your shortlist, request letters of recommendation, draft your statement of purpose.",
          "6–9 months before: submit applications (most deadlines fall in this window for a September intake).",
          "3–5 months before: receive decisions, compare offers, accept and pay any deposit.",
          "1–3 months before: apply for your visa, arrange finances and accommodation.",
        ],
      },
      { type: "h2", id: "step-1", text: "Step 1 — Shortlist programs, not universities" },
      {
        type: "p",
        text: "Build your shortlist at the program level. Two master's programs at the same university can have completely different admission requirements, funding availability, and outcomes — treat each one as a separate decision.",
      },
      { type: "h2", id: "step-2", text: "Step 2 — Take the required tests early" },
      {
        type: "ul",
        items: [
          "GRE or GMAT — required for some programs (especially business and some STEM fields), optional or waived for many others. Check each program individually rather than assuming.",
          "English proficiency (IELTS, TOEFL, or Duolingo) — required for almost all applicants whose prior education wasn't in English, and separately required by some visa categories even if the university itself waives it.",
          "Book test dates early — popular slots near application deadlines fill up months in advance.",
        ],
      },
      { type: "h2", id: "step-3", text: "Step 3 — Assemble your documents" },
      {
        type: "ul",
        items: [
          "Academic transcripts and degree certificates, often needing certified or official translations.",
          "A resume or CV formatted for academic applications, not a job application.",
          "Two to three letters of recommendation — request these early; recommenders need real lead time.",
          "A statement of purpose or personal statement, tailored per program.",
          "A portfolio, if your field requires one (design, architecture, some research-based programs).",
        ],
      },
      { type: "h2", id: "step-4", text: "Step 4 — Write a statement of purpose that isn't generic" },
      {
        type: "p",
        text: "The most common failure mode is a statement that could be submitted to any program in the field with a find-and-replace of the university name. A stronger statement names specific faculty, courses, or research groups, and connects your prior experience to a concrete reason for choosing that program over its peers.",
      },
      { type: "h2", id: "step-5", text: "Step 5 — Submit, track, and follow up" },
      {
        type: "p",
        text: "Keep a simple tracker of deadlines, submission status, and any outstanding requirements per program. Universities occasionally request missing documents close to their decision date — a gap in your own tracking is the most common reason a strong applicant misses a follow-up request.",
      },
      { type: "h2", id: "step-6", text: "Step 6 — Compare offers and accept" },
      {
        type: "p",
        text: "Once decisions arrive, compare offers on the same criteria you used to build the shortlist in the first place — see our guide on choosing a university for a structured way to do this — rather than defaulting to whichever offer arrived first.",
      },
      { type: "h2", id: "step-7", text: "Step 7 — Visa and pre-departure" },
      {
        type: "p",
        text: "Once you've accepted and paid any deposit, the university issues the document your visa application needs (an I-20 in the US, a CAS in the UK, and so on). Visa processing times vary widely by country and season — start as soon as you have that document rather than waiting until closer to departure.",
      },
    ],
    howToSteps: [
      { name: "Shortlist programs", text: "Build your list at the program level, not the university level." },
      { name: "Take required tests", text: "Book GRE/GMAT and English proficiency tests early." },
      { name: "Assemble documents", text: "Gather transcripts, CV, recommendation letters and a tailored statement of purpose." },
      { name: "Submit applications", text: "Track deadlines and submission status across every program." },
      { name: "Compare and accept an offer", text: "Evaluate offers against your original decision criteria." },
      { name: "Apply for your visa", text: "Use the document your university issues once you accept to start the visa process." },
    ],
    faqs: [
      {
        q: "How long does the whole process take from start to visa?",
        a: "Comfortably, 12–18 months from starting research to arriving on campus. It's possible to compress this to 6–9 months if you already have your tests done and a clear shortlist, but that leaves little room for setbacks like a delayed recommendation letter or a visa appointment backlog.",
      },
      {
        q: "Can I apply to countries with different intake seasons at the same time?",
        a: "Yes — many applicants apply to a September UK/EU intake and a September/Fall US intake in parallel, since the document preparation overlaps heavily. Just track each country's specific deadlines and requirements separately.",
      },
      {
        q: "Do I need a different statement of purpose for every program?",
        a: "Yes, at least in the specifics. A shared core (your background and goals) can carry across applications, but the parts naming why this program — specific faculty, courses, or research strengths — need to be genuinely tailored to each one.",
      },
    ],
  },
  {
    slug: "what-career-should-i-choose",
    title: "What Career Should I Choose? A Framework for Deciding",
    metaTitle: "What Career Should I Choose? A Decision Framework",
    metaDescription:
      "A framework for deciding what career to choose — beyond passion tests, covering strengths, market reality, lifestyle fit, and testing a direction first.",
    eyebrow: "Direction",
    dek: "\"Follow your passion\" isn't a framework. Here's a more useful way to think through a career decision that will shape years of your life.",
    category: "Direction",
    readTime: "8 min read",
    updatedDisplay: "Updated August 2026",
    updatedISO: "2026-08-24",
    publishedISO: "2026-01-20",
    keywords: ["what career should i choose", "how to choose a career", "career decision framework", "choosing the right career"],
    relatedProduct: { href: "/products/identity-mapping", label: "Identity Mapping" },
    sections: [
      {
        type: "p",
        text: "\"What career should I choose\" is one of the most-searched questions students ask, and one of the least well served by generic advice. A five-minute quiz can't account for how you actually think, what you're good at that you don't notice because it comes easily, or what a job really looks like day-to-day once the title stops being interesting. This is a framework for thinking it through properly, not a shortcut around thinking about it at all.",
      },
      { type: "h2", id: "passion-problem", text: "Why \"follow your passion\" isn't enough advice" },
      {
        type: "p",
        text: "Passion is unstable as a sole input — interests shift, and many people discover what they enjoy only after they're already reasonably good at it, not before. A more reliable approach treats passion as one signal among several, not the only one.",
      },
      { type: "h2", id: "three-inputs", text: "Three inputs that matter more than interest alone" },
      {
        type: "ul",
        items: [
          "Strengths — not just what you enjoy, but what you're naturally good at and how you tend to think: are you drawn to ambiguity or structure, people or systems, breadth or depth?",
          "Market reality — genuine demand, growth trajectory, and compensation trends in the field, researched directly rather than assumed from what seems popular right now.",
          "Lifestyle fit — the actual rhythm of the work: travel, autonomy, structure versus flexibility, and how that maps to the life you want outside of work.",
        ],
      },
      { type: "h2", id: "four-questions", text: "A four-question filter" },
      {
        type: "ol",
        items: [
          "What am I good at that other people seem to find genuinely hard?",
          "What kinds of problems do I enjoy working through even when no one's watching or grading it?",
          "What does the job actually look like day-to-day — not the job title, the actual Tuesday afternoon?",
          "What tradeoffs am I not willing to make, regardless of the upside — long hours, constant travel, a specific industry, a particular kind of pressure?",
        ],
      },
      {
        type: "p",
        text: "Answer these honestly rather than aspirationally, and a shortlist of two or three directions usually emerges — which is a far more useful starting point than either a single \"right answer\" or an unfiltered list of everything that sounds interesting.",
      },
      { type: "h2", id: "test-before-commit", text: "Test before you commit years to it" },
      {
        type: "p",
        text: "Before committing to an expensive degree or a multi-year plan, look for a low-cost way to test the direction: an internship, a short project, shadowing someone actually doing the job, or an informational interview asking specifically about the parts of the role that don't show up in a job description. What you learn from a few weeks of real exposure is often worth more than months of research from the outside.",
      },
      { type: "h2", id: "direction-not-destination", text: "It's okay to choose a direction, not a destination" },
      {
        type: "p",
        text: "A career decision at 18 or 22 doesn't need to name a final job title. Choosing a direction — a field, a type of problem, a set of skills worth building — leaves room to specialise later with more information than you have now, without the paralysis of trying to pick a single permanent answer today.",
      },
      { type: "h2", id: "career-to-education", text: "When a career decision becomes an education decision" },
      {
        type: "p",
        text: "Once a direction is reasonably clear, it turns into a different kind of question: which course, university, or program actually builds toward it. That's a separate decision with its own evaluation criteria — worth treating as its own step rather than folding into the career question itself.",
      },
    ],
    faqs: [
      {
        q: "What if I have no strong passion for anything in particular?",
        a: "That's more common than it looks from the outside, and it's not a disqualifying problem. Start from strengths and market reality instead — competence and genuine interest often develop together once you're actually doing meaningful work in a field, rather than needing to precede it.",
      },
      {
        q: "How do I know if a career test or quiz is worth taking?",
        a: "Short quizzes can be a useful starting point for generating options, but treat the output as a list of directions to investigate further, not a verdict. The four-question filter above is a better test of whether a direction actually fits once you have some candidates.",
      },
      {
        q: "Is it too late to change direction if I've already started a degree in something else?",
        a: "Rarely. Many skills and much coursework transfer more than expected, and changing direction earlier is almost always less costly than staying in a mismatched path for years out of momentum alone.",
      },
    ],
  },
  {
    slug: "usa-study-visa-paperwork-checklist",
    title: "Paperwork Required to Study in the USA: Complete F-1 Visa Checklist",
    metaTitle: "Paperwork Required to Study in the USA: F-1 Visa Checklist",
    metaDescription:
      "The complete paperwork checklist for studying in the USA — I-20, DS-160, SEVIS fee, financial documents, and what to bring to your F-1 visa interview.",
    eyebrow: "Execution",
    dek: "Every document the F-1 visa process actually requires, in the order you'll need them.",
    category: "Execution",
    readTime: "9 min read",
    updatedDisplay: "Updated August 2026",
    updatedISO: "2026-08-24",
    publishedISO: "2026-03-05",
    keywords: ["paperwork required to study in usa", "f-1 visa checklist", "us student visa documents", "study in usa requirements"],
    relatedProduct: { href: "/products/execution-mapping", label: "Execution Mapping" },
    sections: [
      {
        type: "p",
        text: "The F-1 visa process rejects far more applicants for incomplete or poorly prepared paperwork than for any deeper eligibility issue. Most of the process is mechanical once you know the sequence — this is the full document list, in the order you'll actually need it.",
      },
      { type: "h2", id: "university-side", text: "Before the visa: university-side paperwork" },
      {
        type: "ul",
        items: [
          "Form I-20 — issued by your university through SEVIS once you accept your offer and pay any required deposit. You cannot start the visa process without it.",
          "SEVIS I-901 fee — a one-time fee tied to the SEVIS ID number on your I-20, paid online before you schedule your visa interview. Print or save the payment receipt.",
        ],
      },
      { type: "h2", id: "ds-160", text: "The DS-160 — what it actually asks for" },
      {
        type: "p",
        text: "The DS-160 is the online nonimmigrant visa application form, completed before you book your interview. Have these ready before you start it: your passport, your I-20 (for SEVIS ID and program details), your travel history for the past five years, and a passport-style digital photo meeting the State Department's specifications. Save your application ID as you go — the form times out and does not always let you resume from where you left off.",
      },
      { type: "h2", id: "financial-docs", text: "Financial documents — proving you can pay" },
      {
        type: "ul",
        items: [
          "Recent bank statements showing sufficient funds for at least the first year of tuition and living costs.",
          "A loan sanction letter, if your funding is via an education loan.",
          "An affidavit of support (Form I-134) from a sponsor, if someone other than you is funding your studies, along with that sponsor's own proof of funds.",
          "A scholarship or assistantship award letter, if part of your funding comes from the university.",
        ],
      },
      { type: "h2", id: "academic-docs", text: "Academic documents" },
      {
        type: "ul",
        items: [
          "Original and photocopied academic transcripts and degree certificates.",
          "Standardised test score reports (GRE, GMAT) where the program required them.",
          "English proficiency score report (TOEFL, IELTS, or Duolingo).",
          "Your admission/offer letter from the university.",
        ],
      },
      { type: "h2", id: "interview-prep", text: "Booking and preparing for your visa interview" },
      {
        type: "p",
        text: "Book your interview slot as soon as your I-20 and SEVIS fee payment are in hand — appointment availability varies significantly by consulate and season, and slots near the peak Fall-intake period fill quickly. In the interview itself, officers are typically assessing two things: that you have genuine, specific reasons for choosing this program, and that you have a credible plan and intent to return home after your studies. Vague or rehearsed-sounding answers about \"why this university\" are one of the more common reasons for a request for further documentation or a refusal.",
      },
      { type: "h2", id: "interview-checklist", text: "What to bring to the interview" },
      {
        type: "ul",
        items: [
          "Passport, valid for at least six months beyond your intended stay.",
          "Form I-20, signed.",
          "DS-160 confirmation page.",
          "SEVIS fee payment receipt.",
          "Visa interview appointment confirmation.",
          "Admission letter and financial documents.",
          "Academic transcripts and test score reports.",
          "A passport-style photo, if not already uploaded digitally.",
        ],
      },
      { type: "h2", id: "after-interview", text: "After the interview" },
      {
        type: "p",
        text: "Decisions are sometimes given on the spot, sometimes after further administrative processing, which can add days to weeks. Once approved, your passport with the visa stamp is typically returned by courier — plan your travel booking with that processing buffer in mind rather than right up against your program start date.",
      },
      { type: "h2", id: "common-issues", text: "Common reasons applications get delayed or refused" },
      {
        type: "ul",
        items: [
          "Insufficient evidence of ties to your home country, or an unclear explanation of your plans after the program ends.",
          "Financial documents that don't clearly cover the full first-year cost shown on the I-20.",
          "An unclear or inconsistent explanation for why this specific program and university, especially if it doesn't obviously follow from prior academic or work experience.",
          "Missing or mismatched information between the DS-160, the I-20, and supporting documents.",
        ],
      },
    ],
    howToSteps: [
      { name: "Get your I-20", text: "Accept your offer and pay any deposit so your university can issue your SEVIS I-20." },
      { name: "Pay the SEVIS I-901 fee", text: "Pay online using the SEVIS ID from your I-20 and save the receipt." },
      { name: "Complete the DS-160", text: "Fill out the online nonimmigrant visa application with your passport and I-20 details." },
      { name: "Gather financial and academic documents", text: "Collect bank statements, sponsor letters, transcripts and test scores." },
      { name: "Book and attend your visa interview", text: "Schedule as early as possible and bring the full document set." },
    ],
    faqs: [
      {
        q: "What is the I-20 and why is it the first document I need?",
        a: "The I-20 is the Certificate of Eligibility for Nonimmigrant Student Status, issued by your university through SEVIS once you accept your offer. It contains your SEVIS ID, which you need to pay the SEVIS fee and complete the DS-160 — every later step in the process depends on having it first.",
      },
      {
        q: "How much lead time should I give myself for the F-1 visa process?",
        a: "Aim to start as soon as you have your I-20, ideally two to three months before your program start date, since interview appointment availability and administrative processing times vary by consulate and season.",
      },
      {
        q: "Do I need an affidavit of support if my parents are funding my studies?",
        a: "It's commonly used when a sponsor other than the applicant is covering costs, though requirements can vary by consulate. Bank statements in the sponsor's name plus a clear letter explaining the relationship and support are the core requirement either way.",
      },
      {
        q: "What happens if my visa application needs further administrative processing?",
        a: "This adds an unpredictable delay — from a few days to several weeks — while additional checks are completed. It doesn't necessarily mean refusal; build a buffer into your travel plans so this possibility doesn't put your program start date at risk.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
