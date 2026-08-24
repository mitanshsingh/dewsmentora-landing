export type CountryProfile = {
  slug: "usa" | "uk" | "germany" | "ireland";
  name: string;
  shortName: string;
  flagLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBlurb: string;
  whyStudyHere: string[];
  popularFields: string[];
  universityIntro: string;
  universityExamples: string[];
  universityNote: string;
  visaName: string;
  visaOverview: { name: string; description: string }[];
  costOverview: { label: string; detail: string }[];
  applicationSteps: { n: string; t: string; d: string }[];
  paperwork: string[];
  intakeInfo: string;
  faqs: { q: string; a: string }[];
};

export const COUNTRIES: CountryProfile[] = [
  {
    slug: "usa",
    name: "the United States",
    shortName: "the USA",
    flagLabel: "USA",
    metaTitle: "Study in the USA: Universities, Visa & Paperwork Guide",
    metaDescription:
      "A practical guide to studying in the USA: choosing a university, F-1 visa steps, required paperwork, costs and timelines for master's programs.",
    heroEyebrow: "Study destination",
    heroTitle: "Study in the USA",
    heroBlurb:
      "The United States has the largest and most varied higher-education system in the world — thousands of universities, every field imaginable, and a research and innovation ecosystem few other countries can match. That range is also why so many aspirants find US admissions confusing. This guide covers what actually matters: how programs differ, what the F-1 visa process requires, and what paperwork to prepare before you apply.",
    whyStudyHere: [
      "The widest range of programs and specialisations of any single country, from applied engineering to interdisciplinary research degrees.",
      "Optional Practical Training (OPT) lets F-1 graduates work in the US for up to 12 months after a degree — 24 months longer for many STEM majors.",
      "A dense concentration of research funding, industry partnerships and start-up ecosystems around major university hubs.",
      "Flexible curricula — many master's programs allow you to mix courses across departments rather than following one fixed track.",
    ],
    popularFields: [
      "Computer Science & Data Science",
      "Engineering (all disciplines)",
      "Business Administration (MBA/MS)",
      "Biotechnology & Life Sciences",
      "Public Policy & International Affairs",
    ],
    universityIntro:
      "There is no single \"best\" university for a master's in the US — the right choice depends on your field, funding situation, and career goal. Global rankings (QS, THE, US News) are a reasonable starting filter, but they weight research output and reputation, not fit for a specific program or your specific profile. Use rankings to build a shortlist, then evaluate each program on curriculum, faculty research areas, and outcomes for your intended path.",
    universityExamples: [
      "MIT, Stanford, Carnegie Mellon — strong for computer science and engineering-heavy programs",
      "Harvard, Columbia, University of Chicago — strong across business, policy and social sciences",
      "UC Berkeley, University of Michigan, Georgia Tech — large public research universities with broad program depth",
      "UT Austin, University of Illinois Urbana-Champaign, Purdue — strong engineering programs with lower relative cost than private peers",
    ],
    universityNote:
      "These are widely recognised examples across common fields, not a ranked list — a program ranked lower overall can still be the stronger choice for a specific specialisation, advisor, or funding package.",
    visaName: "F-1 student visa",
    visaOverview: [
      {
        name: "Form I-20",
        description:
          "Issued by your university through the SEVIS system once you accept admission and pay the initial deposit. You need the I-20 before you can apply for the visa or pay the SEVIS fee.",
      },
      {
        name: "SEVIS I-901 fee",
        description:
          "A one-time fee tied to your SEVIS ID (printed on your I-20), paid before your visa interview. Keep the payment receipt — you'll need it at the interview.",
      },
      {
        name: "DS-160 form",
        description:
          "The online nonimmigrant visa application, completed before you schedule your interview. It asks for travel history, education, and program details from your I-20.",
      },
      {
        name: "Visa interview",
        description:
          "Conducted at a US embassy or consulate. Officers typically assess intent to return home after your studies, financial capacity, and clarity about your chosen program — so be ready to explain why this specific program and university.",
      },
    ],
    costOverview: [
      {
        label: "Tuition",
        detail:
          "Roughly $20,000–$60,000 a year for a master's, depending on whether the university is public or private and the specific program. Public universities often publish separate (higher) rates for international students.",
      },
      {
        label: "Living costs",
        detail:
          "Varies enormously by city — a university town in the Midwest can cost half of what a program in New York, Boston or the Bay Area costs for housing and daily expenses.",
      },
      {
        label: "Funding",
        detail:
          "Research and teaching assistantships are common for STEM master's and PhD applicants and can cover tuition plus a stipend; they are far less common for professional master's programs (MBA, most MS in business).",
      },
    ],
    applicationSteps: [
      { n: "01", t: "Shortlist programs", d: "Filter by field, funding availability, and admission requirements rather than ranking alone." },
      { n: "02", t: "Prepare tests & documents", d: "GRE/GMAT (where required), TOEFL/IELTS, transcripts, SOP, resume and letters of recommendation." },
      { n: "03", t: "Submit applications", d: "Most Fall-intake deadlines fall between December and February; some programs also offer a smaller Spring intake." },
      { n: "04", t: "Accept & get your I-20", d: "Once admitted, confirm your seat and deposit so the university can issue your SEVIS I-20." },
      { n: "05", t: "Apply for your F-1 visa", d: "Pay the SEVIS fee, complete the DS-160, and attend your visa interview with your I-20 and financial documents." },
    ],
    paperwork: [
      "Valid passport (with at least six months' validity beyond your intended stay)",
      "Form I-20 issued by your university",
      "SEVIS I-901 fee payment receipt",
      "DS-160 confirmation page",
      "Visa interview appointment confirmation",
      "Admission/offer letter from the university",
      "Proof of funds — bank statements, loan sanction letter, or affidavit of support",
      "Academic transcripts and degree certificates",
      "English proficiency scores (TOEFL/IELTS/Duolingo)",
      "Standardised test scores where required (GRE/GMAT)",
      "Passport-size photographs meeting US visa specifications",
    ],
    intakeInfo:
      "Fall (August/September start) is the primary intake for almost every US program and carries the widest course and funding availability. A smaller Spring (January) intake exists for some programs but with fewer options.",
    faqs: [
      {
        q: "Do I need the GRE or GMAT to study in the USA?",
        a: "It depends on the program. Many STEM master's programs have made the GRE optional or waived it entirely since 2020, while competitive MBA and some business analytics programs still expect a GMAT or GRE score. Check each program's current admissions page rather than assuming.",
      },
      {
        q: "How much does it cost to study a master's in the USA?",
        a: "Tuition alone typically runs $20,000–$60,000 a year, and living costs add a further $10,000–$25,000 depending on the city. Public universities are usually cheaper than private ones, though international students pay out-of-state rates at public schools.",
      },
      {
        q: "Can I work in the US after graduating?",
        a: "F-1 graduates are eligible for up to 12 months of Optional Practical Training (OPT). Graduates of designated STEM majors can apply for a 24-month STEM-OPT extension, giving up to 36 months of work authorisation in total.",
      },
      {
        q: "What paperwork do I need for the F-1 visa interview?",
        a: "At minimum: your passport, Form I-20, SEVIS fee receipt, DS-160 confirmation, admission letter, and financial proof. Bring originals and copies — officers may ask to see any of them.",
      },
    ],
  },
  {
    slug: "uk",
    name: "the United Kingdom",
    shortName: "the UK",
    flagLabel: "UK",
    metaTitle: "Study in the UK: Universities, Student Visa & Costs Guide",
    metaDescription:
      "How to study in the UK: choosing a university, the Student Route visa and CAS process, typical costs, one-year master's timelines, and required paperwork.",
    heroEyebrow: "Study destination",
    heroTitle: "Study in the UK",
    heroBlurb:
      "UK master's programs are typically one year — roughly half the time of a US degree — which makes the country attractive if you want a faster route back into the workforce without giving up a globally recognised qualification. The trade-off is a compressed timeline once you arrive, so preparation before you land matters more than it does for a two-year program.",
    whyStudyHere: [
      "Most taught master's programs run 12 months, reducing both total cost and time out of the workforce compared with a two-year degree elsewhere.",
      "The Graduate Route visa allows international graduates to stay and work in the UK for two years after finishing (three years for PhD holders) without needing a job offer first.",
      "A century-old research and teaching tradition across a small number of world-recognised universities, concentrated in a compact geography.",
      "English-taught programs throughout, with no separate language-of-instruction barrier for most applicants.",
    ],
    popularFields: [
      "Finance & Business",
      "Law (LLM)",
      "Data Science & Artificial Intelligence",
      "Public Health & Global Health",
      "Media, Publishing & Creative Industries",
    ],
    universityIntro:
      "UK postgraduate admissions are program-specific rather than centralised, so \"best university\" really means best department for your subject. A university strong in one discipline can be middling in another — check the specific department's research output, module list and industry links rather than only the institution's overall reputation.",
    universityExamples: [
      "Oxford, Cambridge, Imperial College London — strong across STEM, medicine and research-intensive fields",
      "London School of Economics (LSE), UCL — strong for economics, policy, social sciences and law",
      "University of Edinburgh, University of Manchester — large research universities with broad program depth outside London",
      "King's College London, University of Warwick — strong reputations in specific fields (health sciences, business) at typically lower cost than the most selective London institutions",
    ],
    universityNote:
      "As with any country, treat this as a starting shortlist, not a ranking — evaluate the specific department, not just the university name.",
    visaName: "Student Route visa",
    visaOverview: [
      {
        name: "CAS (Confirmation of Acceptance for Studies)",
        description:
          "A reference number issued by your university once you firmly accept your offer and meet any conditions. You need a valid CAS before you can apply for the Student Route visa.",
      },
      {
        name: "Financial evidence",
        description:
          "You must show you can cover tuition (or the remaining balance after any deposit) plus a fixed monthly living-cost allowance, held in your account for a minimum consecutive period before you apply.",
      },
      {
        name: "Immigration Health Surcharge (IHS)",
        description:
          "A mandatory upfront payment giving access to the UK's National Health Service for the length of your visa, paid as part of the online application.",
      },
      {
        name: "Tuberculosis (TB) test",
        description:
          "Required for applicants from a list of specified countries, from an approved clinic, with results valid for six months.",
      },
    ],
    costOverview: [
      {
        label: "Tuition",
        detail:
          "Roughly £15,000–£35,000 for a one-year master's, with London-based and specialist programs (business, medicine) at the higher end.",
      },
      {
        label: "Living costs",
        detail:
          "The Home Office sets minimum monthly living-cost figures for visa purposes, higher for London than for the rest of the UK — check the current figures on the official UK government site before budgeting.",
      },
      {
        label: "Total cost of a one-year master's",
        detail:
          "Because the degree is one year rather than two, total cost is often comparable to — or lower than — a two-year program elsewhere, even with London's higher living costs.",
      },
    ],
    applicationSteps: [
      { n: "01", t: "Shortlist departments", d: "Compare specific departments and modules, not just university-wide reputation." },
      { n: "02", t: "Apply directly to universities", d: "Most postgraduate applications go straight to the university, not through a centralised portal." },
      { n: "03", t: "Accept your offer & get a CAS", d: "Firmly accept, satisfy any conditions, and receive your CAS reference from the university." },
      { n: "04", t: "Apply for your Student Route visa", d: "Complete the online application, pay the IHS, and submit financial evidence and biometrics." },
      { n: "05", t: "Arrive and register", d: "Collect your BRP (Biometric Residence Permit) or eVisa access and register with your university within the required window." },
    ],
    paperwork: [
      "Valid passport",
      "CAS reference number from your university",
      "Proof of funds for tuition and living costs (held for the required period)",
      "Academic transcripts and degree certificates",
      "English proficiency scores (IELTS for UKVI, or equivalent)",
      "Immigration Health Surcharge payment confirmation",
      "TB test certificate, if applicable to your country",
      "Admission/offer letter",
      "Biometric appointment confirmation",
    ],
    intakeInfo:
      "September is the primary intake for almost all UK master's programs. A handful of business and law programs also offer a January intake, but course choice is significantly narrower.",
    faqs: [
      {
        q: "How long is a master's degree in the UK?",
        a: "Most taught master's programs are one calendar year (September to September), compared with two years in the US. Research-based master's (MRes, MPhil) can run 12–24 months depending on the program.",
      },
      {
        q: "Can I work in the UK after my master's?",
        a: "The Graduate Route visa lets international graduates stay and work (or look for work) in the UK for two years after a bachelor's or master's degree, without needing a job offer first.",
      },
      {
        q: "What is a CAS number and why do I need it?",
        a: "A CAS (Confirmation of Acceptance for Studies) is a reference number your university issues once you've firmly accepted your offer. It's a mandatory part of the Student Route visa application — you cannot apply without one.",
      },
      {
        q: "Do I need IELTS specifically, or is TOEFL accepted?",
        a: "For the visa itself, the UK Home Office requires an approved \"Secure English Language Test\" such as IELTS for UKVI. Universities may separately accept TOEFL or Duolingo for admission purposes, but the visa application has its own, stricter requirement — check both separately.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    shortName: "Germany",
    flagLabel: "Germany",
    metaTitle: "Study in Germany: Low-Cost Universities & Visa Guide",
    metaDescription:
      "A guide to studying in Germany: public universities with little or no tuition, the national student visa, blocked-account requirements, and how to apply.",
    heroEyebrow: "Study destination",
    heroTitle: "Study in Germany",
    heroBlurb:
      "Germany is one of the few major study destinations where public universities charge little to no tuition, even for international students — you mainly budget for living costs and a small per-semester administrative fee. In exchange, the application and visa process is more document-heavy than in English-speaking countries, so preparation matters.",
    whyStudyHere: [
      "Most public universities charge no or minimal tuition, regardless of nationality — a small per-semester contribution fee covers administration and a public-transport pass.",
      "Europe's largest economy and its strongest manufacturing and engineering base, with close links between universities and industry (particularly automotive, mechanical and electrical engineering).",
      "A growing number of master's programs are taught fully in English, especially in engineering, computer science and business.",
      "Central location for exploring the rest of the EU during and after your studies.",
    ],
    popularFields: [
      "Mechanical & Automotive Engineering",
      "Computer Science & AI",
      "Electrical Engineering",
      "Renewable Energy Engineering",
      "Business & Management (MBA/MSc)",
    ],
    universityIntro:
      "Germany's university system is less hierarchical than the US or UK — public universities are funded to a broadly similar standard, so \"best\" is almost entirely about which department is strongest in your field, plus whether the program is taught in English or German.",
    universityExamples: [
      "Technical University of Munich (TUM), RWTH Aachen — strong for engineering and applied sciences",
      "Technical University of Berlin, Karlsruhe Institute of Technology (KIT) — strong for computer science and technical fields",
      "Ludwig Maximilian University of Munich (LMU), Heidelberg University — strong for sciences, humanities and research-intensive programs",
      "Mannheim, WHU Otto Beisheim — recognised names specifically for business and management programs",
    ],
    universityNote:
      "Program language matters as much as ranking here — confirm whether a program is taught in English, German, or a mix, before you shortlist it.",
    visaName: "National (Type D) study visa",
    visaOverview: [
      {
        name: "University admission letter",
        description:
          "You need a confirmed offer (or, for some applicants, proof of application to uni-assist/the university) before applying for the study visa.",
      },
      {
        name: "Blocked account (Sperrkonto)",
        description:
          "A German bank account holding a fixed sum set annually by the German Foreign Office, which you can only draw down in monthly instalments — proof you can support yourself without working illegally.",
      },
      {
        name: "Health insurance",
        description:
          "Mandatory from day one — either German statutory health insurance or a recognised equivalent, confirmed before your visa appointment.",
      },
      {
        name: "APS certificate (for some countries)",
        description:
          "Applicants from certain countries (including India and China) need an Academic Evaluation Centre (APS) certificate verifying their academic documents before the visa application.",
      },
    ],
    costOverview: [
      {
        label: "Tuition",
        detail:
          "Most public universities in most federal states charge no tuition for international students — only a semester contribution fee (typically a few hundred euros) covering administration and public transport.",
      },
      {
        label: "Living costs",
        detail:
          "The main ongoing cost of studying in Germany. Munich and other major cities run higher than smaller university towns — budget accordingly and check current blocked-account requirements, which are updated periodically.",
      },
      {
        label: "Private/specialised programs",
        detail:
          "Some private universities and specific MBA-style programs do charge tuition, sometimes substantial — check the specific program rather than assuming \"German university\" always means free.",
      },
    ],
    applicationSteps: [
      { n: "01", t: "Confirm the program language", d: "Filter for English-taught programs unless you already hold the required German proficiency." },
      { n: "02", t: "Apply via uni-assist or direct", d: "Many universities process international applications through uni-assist, a centralised document-verification service; others accept direct applications." },
      { n: "03", t: "Open a blocked account", d: "Set up your Sperrkonto once you have an offer, so funds are seasoned in time for your visa appointment." },
      { n: "04", t: "Apply for your study visa", d: "Book an appointment at the German embassy/consulate with your admission letter, blocked account proof, and health insurance." },
      { n: "05", t: "Register on arrival", d: "Register your address (Anmeldung) and apply for your residence permit at the local Ausländerbehörde within the required window." },
    ],
    paperwork: [
      "Valid passport",
      "University admission letter",
      "Blocked account (Sperrkonto) confirmation",
      "Proof of health insurance",
      "Academic transcripts and degree certificates (often needing certified translation)",
      "APS certificate, if required for your country",
      "English or German language proficiency certificate, matching the program's language of instruction",
      "Statement of purpose / motivation letter",
      "Visa application form and biometric photos",
    ],
    intakeInfo:
      "Germany runs two intakes: Winter semester (October start, the larger of the two, with applications typically due by mid-July) and Summer semester (April start, with fewer programs available, due by mid-January). Exact deadlines vary by university.",
    faqs: [
      {
        q: "Is university really free in Germany?",
        a: "Most public universities in most federal states charge no tuition for international students, only a modest per-semester administrative fee. It's not universal, though — some states and most private universities do charge tuition, so check the specific program.",
      },
      {
        q: "Do I need to speak German to study in Germany?",
        a: "Not necessarily. A growing number of master's programs, especially in engineering, computer science and business, are taught entirely in English. German proficiency helps with daily life and part-time work but isn't always required for admission.",
      },
      {
        q: "What is a blocked account and how much do I need in it?",
        a: "A Sperrkonto is a German bank account that releases a fixed monthly sum to you, used to prove you can support yourself during your studies. The required total is set annually by German authorities — check the current figure on the official Federal Foreign Office site before applying.",
      },
      {
        q: "What is uni-assist?",
        a: "uni-assist is a centralised service many German universities use to verify international applicants' academic documents before forwarding the application to the university itself. Not all universities use it — check each program's application page.",
      },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    shortName: "Ireland",
    flagLabel: "Ireland",
    metaTitle: "Study in Ireland: Universities, Visa & Post-Study Work Guide",
    metaDescription:
      "How to study in Ireland: top universities, the study visa and IRP registration, tuition and living costs, and the two-year post-study work option.",
    heroEyebrow: "Study destination",
    heroTitle: "Study in Ireland",
    heroBlurb:
      "Ireland combines English-language instruction, EU membership, and a genuinely strong tech and pharma employment market — several major US technology and pharmaceutical companies base their European headquarters in and around Dublin. For students weighing Europe against the US or UK, it's often the most direct route to English-language study plus a real shot at post-study employment.",
    whyStudyHere: [
      "English is the language of instruction throughout, removing a barrier that exists in most other continental European destinations.",
      "The Third Level Graduate Programme allows non-EEA master's graduates to stay and work in Ireland for up to two years without needing a job offer first.",
      "A concentration of US multinational employers — particularly technology, pharmaceutical and financial services companies — based in Dublin and Cork.",
      "EU membership gives access to European research networks, exchange programs, and (depending on your situation) easier onward movement within the EU.",
    ],
    popularFields: [
      "Computer Science & Data Analytics",
      "Pharmaceutical & Biopharmaceutical Science",
      "Finance & Fintech",
      "Supply Chain & Business Analytics",
      "Artificial Intelligence & Machine Learning",
    ],
    universityIntro:
      "Ireland has a smaller number of universities than the US, UK or Germany, which makes shortlisting simpler — but it also means checking department-level strength matters even more, since a handful of institutions carry most of the country's research output in any given field.",
    universityExamples: [
      "Trinity College Dublin, University College Dublin (UCD) — Ireland's two most internationally recognised universities, strong across most fields",
      "University College Cork (UCC) — strong particularly for pharmaceutical sciences and food science, tied to Cork's pharma industry cluster",
      "NUI Galway, Dublin City University (DCU) — recognised strengths in medicine, engineering and business respectively",
    ],
    universityNote:
      "With a small pool of institutions, cross-check a specific department's research output and industry partnerships directly rather than relying on university-wide reputation alone.",
    visaName: "Irish study (\"D\") visa",
    visaOverview: [
      {
        name: "Letter of acceptance",
        description:
          "A confirmed, unconditional offer from a recognised Irish institution — required before you can apply for the study visa (if your nationality requires one).",
      },
      {
        name: "Evidence of funds",
        description:
          "Proof you can cover tuition and a set level of living costs for your first year, usually shown through bank statements or an approved loan sanction letter.",
      },
      {
        name: "Private medical insurance",
        description:
          "Non-EEA students must hold private medical insurance for the duration of their stay, arranged before travel or immediately on arrival.",
      },
      {
        name: "Irish Residence Permit (IRP)",
        description:
          "Registered in person after arrival at the Irish Immigration Service — this, not the visa sticker itself, is your ongoing proof of permission to stay and study.",
      },
    ],
    costOverview: [
      {
        label: "Tuition",
        detail:
          "Roughly €10,000–€25,000 a year for a master's, with specialised programs (business, pharma, data science) often at the higher end.",
      },
      {
        label: "Living costs",
        detail:
          "Dublin is significantly more expensive than other Irish cities for accommodation — factor this in heavily if you're comparing offers between Dublin-based and regional universities.",
      },
      {
        label: "Post-study runway",
        detail:
          "The two-year Third Level Graduate Programme gives genuine time to search for skilled employment without a ticking visa clock, which changes the cost-benefit calculation compared with shorter post-study work windows elsewhere.",
      },
    ],
    applicationSteps: [
      { n: "01", t: "Shortlist programs", d: "Compare department strength and industry links, not only the university's overall name recognition." },
      { n: "02", t: "Apply directly to universities", d: "Most postgraduate applications go straight to the institution; some undergraduate applications route through the CAO instead." },
      { n: "03", t: "Accept your offer", d: "Confirm your place and pay any required deposit to receive your formal letter of acceptance." },
      { n: "04", t: "Apply for your study visa", d: "If required for your nationality, apply online and attend any necessary appointment with your acceptance letter and financial evidence." },
      { n: "05", t: "Register your IRP on arrival", d: "Book an Irish Residence Permit appointment promptly after arrival — this is a mandatory, separate step from the visa itself." },
    ],
    paperwork: [
      "Valid passport",
      "Unconditional letter of acceptance from your institution",
      "Evidence of funds for tuition and living costs",
      "Private medical insurance confirmation",
      "Academic transcripts and degree certificates",
      "English proficiency scores, if your prior education wasn't in English",
      "Statement of purpose",
      "Visa application and biometric photos (where a visa is required for your nationality)",
      "Irish Residence Permit (IRP) appointment booking, arranged after arrival",
    ],
    intakeInfo:
      "September is the main intake for almost all Irish master's programs. Admissions are largely rolling rather than fixed-round, so applying early in the cycle (opening around October–November the year before) improves your chances at competitive programs.",
    faqs: [
      {
        q: "Can I stay in Ireland after finishing my master's?",
        a: "Yes — non-EEA graduates of a master's degree can apply for the Third Level Graduate Programme, which permits up to 24 months of residence to seek and take up employment, without needing a job offer in hand first.",
      },
      {
        q: "Is Ireland cheaper than the UK or USA for a master's?",
        a: "Tuition is often comparable to or somewhat lower than the UK, and generally lower than private US universities. Dublin living costs, however, are high by European standards, so total cost depends heavily on where you study within Ireland.",
      },
      {
        q: "Do I need a visa to study in Ireland?",
        a: "It depends on your nationality. Some countries require a study (\"D\") visa before travel; others can enter visa-free and register their study permission on arrival. Check the current requirement for your passport on the official Irish Immigration Service site.",
      },
      {
        q: "What is an IRP and is it different from my visa?",
        a: "Yes. The visa (where required) gets you into the country; the Irish Residence Permit (IRP), registered in person after arrival, is the ongoing legal proof of your permission to stay and study. Both non-visa-required and visa-required students must register for an IRP.",
      },
    ],
  },
];

export function getCountry(slug: string): CountryProfile | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}
