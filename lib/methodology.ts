// Generated from the "Mishu todo 2" content doc by scratch tooling, then
// hand-edited. Each Map's "How your report is created" methodology.

export type MethodItem = { t: string; d?: string };

export type MethodBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "caps"; items: string[] }
  | { type: "terms"; items: MethodItem[] }
  | { type: "chain"; op: "↓" | "×"; items: MethodItem[] };

export type MethodStep = { n: string; title: string; lead?: string; blocks: MethodBlock[]; output?: string };

export type Methodology = {
  heading: string;
  subheading: string;
  intro: MethodBlock[];
  steps: MethodStep[];
  appendix: { title: string; blocks: MethodBlock[] }[];
};

export const METHODOLOGY: Record<string, Methodology> = {
  "identity-mapping": {
    "heading": "How Your Identity Mapping Report Is Created",
    "subheading": "Not Generated. Investigated. Challenged. Interpreted. Validated.",
    "intro": [
      {
        "type": "p",
        "text": "Collecting information about a candidate is only the beginning."
      },
      {
        "type": "p",
        "text": "What happens after that information is collected is what makes Identity Mapping different."
      },
      {
        "type": "p",
        "text": "We do not upload candidate information into AI and ask it to produce a career report."
      },
      {
        "type": "p",
        "text": "We do not allow one psychometric score to define a young person."
      },
      {
        "type": "p",
        "text": "And we do not allow the opinion of one counsellor to determine someone's future."
      },
      {
        "type": "p",
        "text": "Identity Mapping is built through a proprietary multi-layer intelligence process in which evidence, specialist perspectives, structured analysis and technology work together."
      },
      {
        "type": "p",
        "text": "The objective is not another report."
      },
      {
        "type": "p",
        "text": "It is a deeper understanding of the person behind the profile."
      }
    ],
    "steps": [
      {
        "n": "01",
        "title": "Candidate Evidence Architecture",
        "lead": "First, we build the complete picture.",
        "blocks": [
          {
            "type": "p",
            "text": "Academic history, interests, achievements, activities, experiences, aspirations, decisions, behavioural observations, preferences and relevant assessment inputs are organised into one structured Candidate Evidence Architecture."
          },
          {
            "type": "p",
            "text": "Instead of examining each piece independently, we begin connecting them."
          },
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "list",
            "items": [
              "What repeats?",
              "What stands out?",
              "What appears inconsistent?",
              "What may be hidden?",
              "What needs further investigation?"
            ]
          }
        ],
        "output": "Candidate Evidence Map"
      },
      {
        "n": "02",
        "title": "Multi-Lens Expert Review",
        "lead": "One candidate. Different professional lenses.",
        "blocks": [
          {
            "type": "p",
            "text": "A young person's future should not depend entirely on how one person interprets their profile."
          },
          {
            "type": "p",
            "text": "Relevant aspects of the candidate are therefore examined through different professional perspectives within our methodology."
          },
          {
            "type": "p",
            "text": "Depending on the candidate and service scope, these may include perspectives relating to:"
          },
          {
            "type": "list",
            "items": [
              "Academic Profile",
              "Career & Industry Direction",
              "Behavioural Patterns",
              "Strength & Potential",
              "Higher-Education Pathways",
              "Skill Development",
              "Application & Future Positioning"
            ]
          },
          {
            "type": "p",
            "text": "Each professional lens asks different questions of the same evidence."
          },
          {
            "type": "p",
            "text": "The purpose is not to collect opinions."
          },
          {
            "type": "p",
            "text": "It is to reduce the risk of one-dimensional interpretation."
          }
        ],
        "output": "Multi-Perspective Candidate Review"
      },
      {
        "n": "03",
        "title": "Independent Signal Discovery",
        "lead": "Before conclusions are formed, we search for patterns.",
        "blocks": [
          {
            "type": "p",
            "text": "We identify recurring signals across different parts of the candidate's life."
          },
          {
            "type": "p",
            "text": "Curiosity • Leadership • Analytical Thinking • Creativity • Persistence • Initiative • Communication • Independence • Collaboration • Problem-Solving • Resilience • Aspirational Drive"
          },
          {
            "type": "p",
            "text": "A single example tells us very little."
          },
          {
            "type": "p",
            "text": "A pattern appearing repeatedly across unrelated situations deserves investigation."
          }
        ],
        "output": "Identity Signal Map"
      },
      {
        "n": "04",
        "title": "Evidence Triangulation",
        "lead": "We don't accept important conclusions from one source.",
        "blocks": [
          {
            "type": "p",
            "text": "A candidate may say something."
          },
          {
            "type": "p",
            "text": "A test may indicate something."
          },
          {
            "type": "p",
            "text": "Academic history may demonstrate something."
          },
          {
            "type": "p",
            "text": "Past behaviour may reveal something else."
          },
          {
            "type": "p",
            "text": "We cross-check important findings across:"
          },
          {
            "type": "chain",
            "op": "×",
            "items": [
              {
                "t": "Self-perception",
                "d": "What does the candidate believe about themselves?"
              },
              {
                "t": "Demonstrated evidence",
                "d": "What have they actually done?"
              },
              {
                "t": "Recurring behaviour",
                "d": "What repeatedly appears across situations?"
              },
              {
                "t": "Assessment signals",
                "d": "What do structured inputs indicate?"
              },
              {
                "t": "Expert interpretation",
                "d": "How should those signals be understood in context?"
              }
            ]
          },
          {
            "type": "p",
            "text": "The stronger the convergence, the stronger our confidence."
          }
        ],
        "output": "Evidence Confidence Map"
      },
      {
        "n": "05",
        "title": "Contradiction Intelligence",
        "lead": "Sometimes disagreement in the evidence reveals more than agreement.",
        "blocks": [
          {
            "type": "p",
            "text": "A candidate may say:"
          },
          {
            "type": "quote",
            "text": "“I want to pursue X.”"
          },
          {
            "type": "p",
            "text": "But their strongest abilities, motivations, interests and behavioural evidence may point somewhere else."
          },
          {
            "type": "p",
            "text": "We don't ignore that contradiction."
          },
          {
            "type": "p",
            "text": "We investigate it."
          },
          {
            "type": "list",
            "items": [
              "Is the aspiration genuinely theirs?",
              "Is it influenced by parents?",
              "Peers?",
              "Prestige?",
              "Salary perception?",
              "Fear?",
              "Limited exposure?",
              "Or is there genuine supporting potential that has not yet been recognised?"
            ]
          },
          {
            "type": "p",
            "text": "This helps separate authentic direction from external influence."
          }
        ],
        "output": "Alignment & Contradiction Map"
      },
      {
        "n": "06",
        "title": "Hidden Potential Discovery",
        "lead": "We look beyond what marks and achievements already reveal.",
        "blocks": [
          {
            "type": "p",
            "text": "Identity Mapping separates:"
          },
          {
            "type": "terms",
            "items": [
              {
                "t": "Proven strengths",
                "d": "Already demonstrated."
              },
              {
                "t": "Emerging strengths",
                "d": "Beginning to appear consistently."
              },
              {
                "t": "Underutilised potential",
                "d": "Capability that may not yet have received the right opportunity."
              },
              {
                "t": "Development priorities",
                "d": "Areas where focused development may create significant improvement."
              }
            ]
          },
          {
            "type": "p",
            "text": "This changes the question from:"
          },
          {
            "type": "quote",
            "text": "“What is the student good at today?”"
          },
          {
            "type": "p",
            "text": "to:"
          },
          {
            "type": "quote",
            "text": "“Where could this candidate become exceptionally strong tomorrow?”"
          }
        ],
        "output": "Strength & Potential Architecture"
      },
      {
        "n": "07",
        "title": "Motivation DNA",
        "lead": "Capability tells us what someone can do. Motivation helps explain what they may sustain.",
        "blocks": [
          {
            "type": "p",
            "text": "We examine deeper drivers such as:"
          },
          {
            "type": "p",
            "text": "Achievement • Autonomy • Impact • Recognition • Security • Competition • Creativity • Intellectual Challenge • Mastery • Leadership • Exploration • Contribution"
          },
          {
            "type": "p",
            "text": "These are then compared with strengths, interests and aspirations."
          }
        ],
        "output": "Candidate Motivation DNA"
      },
      {
        "n": "08",
        "title": "Energy × Performance Mapping",
        "lead": "Being good at something does not necessarily mean wanting a life built around it.",
        "blocks": [
          {
            "type": "p",
            "text": "We examine both performance and energy."
          },
          {
            "type": "terms",
            "items": [
              {
                "t": "High performance + high energy",
                "d": "Natural Growth Zone"
              },
              {
                "t": "High performance + low energy",
                "d": "Capability Trap"
              },
              {
                "t": "Lower performance + high energy",
                "d": "Development Opportunity"
              },
              {
                "t": "Lower performance + low energy",
                "d": "Low-Alignment Zone"
              }
            ]
          },
          {
            "type": "p",
            "text": "This distinction helps separate:"
          },
          {
            "type": "quote",
            "text": "“I can do this”"
          },
          {
            "type": "p",
            "text": "from"
          },
          {
            "type": "quote",
            "text": "“I could thrive doing this.”"
          }
        ],
        "output": "Energy–Performance Matrix"
      },
      {
        "n": "09",
        "title": "Environment Compatibility Mapping",
        "lead": "The same person can flourish in one environment and struggle in another.",
        "blocks": [
          {
            "type": "p",
            "text": "We examine where the candidate is more likely to thrive:"
          },
          {
            "type": "list",
            "items": [
              "Structured ↔ Flexible",
              "Independent ↔ Collaborative",
              "Competitive ↔ Cooperative",
              "Stable ↔ Dynamic",
              "Specialist ↔ Leadership-Oriented",
              "Analytical ↔ People-Intensive",
              "Execution ↔ Exploration",
              "Predictability ↔ Ambiguity"
            ]
          },
          {
            "type": "p",
            "text": "The question becomes:"
          },
          {
            "type": "quote",
            "text": "“What kind of environment brings out the strongest version of this candidate?”"
          }
        ],
        "output": "Candidate Environment Fit Map"
      },
      {
        "n": "10",
        "title": "Identity × Opportunity Intersection",
        "lead": "Now identity begins becoming direction.",
        "blocks": [
          {
            "type": "p",
            "text": "We intersect:"
          },
          {
            "type": "chain",
            "op": "×",
            "items": [
              {
                "t": "Strengths"
              },
              {
                "t": "Potential"
              },
              {
                "t": "Interests"
              },
              {
                "t": "Motivation"
              },
              {
                "t": "Behaviour"
              },
              {
                "t": "Energy"
              },
              {
                "t": "Environment Fit"
              },
              {
                "t": "Aspirations"
              }
            ]
          },
          {
            "type": "p",
            "text": "Rather than forcing the candidate into one career title, we identify areas where multiple dimensions converge."
          },
          {
            "type": "p",
            "text": "These become High-Alignment Opportunity Zones."
          }
        ],
        "output": "Identity–Opportunity Map"
      },
      {
        "n": "11",
        "title": "Future-Self Simulation",
        "lead": "A career should not be judged by its title. It should be examined through the life attached to it.",
        "blocks": [
          {
            "type": "p",
            "text": "Potential directions are tested against future realities."
          },
          {
            "type": "list",
            "items": [
              "What might the candidate actually do every day?",
              "What abilities would the field repeatedly demand?",
              "Would the environment fit?",
              "Would the work satisfy their motivations?",
              "Would their strengths actually be used?",
              "Could they tolerate the less glamorous parts of the profession?",
              "Does the direction support the future they imagine?"
            ]
          },
          {
            "type": "p",
            "text": "We move from:"
          },
          {
            "type": "quote",
            "text": "“I like the idea of this career.”"
          },
          {
            "type": "p",
            "text": "to:"
          },
          {
            "type": "quote",
            "text": "“Would I actually like the reality of this career?”"
          }
        ],
        "output": "Future-Self Alignment Map"
      },
      {
        "n": "12",
        "title": "Blind-Spot & Risk Intelligence",
        "lead": "We examine what could interfere with potential.",
        "blocks": [
          {
            "type": "p",
            "text": "Confidence can become overconfidence."
          },
          {
            "type": "p",
            "text": "Perfectionism can delay execution."
          },
          {
            "type": "p",
            "text": "Independence can become resistance to collaboration."
          },
          {
            "type": "p",
            "text": "Curiosity can create scattered focus."
          },
          {
            "type": "p",
            "text": "Ambition can create unrealistic expectations."
          },
          {
            "type": "p",
            "text": "Creativity can struggle inside highly rigid environments."
          },
          {
            "type": "p",
            "text": "Potential blind spots are identified early so they can become development priorities rather than future surprises."
          }
        ],
        "output": "Candidate Risk & Development Map"
      },
      {
        "n": "13",
        "title": "Cross-Expert Challenge Review",
        "lead": "Before important conclusions are finalised, they are challenged.",
        "blocks": [
          {
            "type": "p",
            "text": "Significant findings can be reviewed through different relevant professional perspectives."
          },
          {
            "type": "p",
            "text": "One interpretation may say:"
          },
          {
            "type": "quote",
            "text": "“This appears to be a strength.”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“What evidence supports it?”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“Will it translate into an academic or professional environment?”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“Is this demonstrated capability or current interest?”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“What happens if our interpretation is wrong?”"
          },
          {
            "type": "p",
            "text": "Agreement strengthens confidence."
          },
          {
            "type": "p",
            "text": "Disagreement triggers deeper investigation."
          },
          {
            "type": "p",
            "text": "The objective is not consensus for its own sake."
          },
          {
            "type": "p",
            "text": "The objective is better judgement."
          }
        ],
        "output": "Cross-Validated Identity Findings"
      },
      {
        "n": "14",
        "title": "Human × Technology Intelligence Layer",
        "lead": "Technology assists the investigation. It does not replace professional judgement.",
        "blocks": [
          {
            "type": "p",
            "text": "Modern analytical tools, including AI where appropriate, can help organise information, identify relationships, compare evidence and test analytical hypotheses."
          },
          {
            "type": "p",
            "text": "But technology does not make the final identity judgement by itself."
          },
          {
            "type": "p",
            "text": "Our principle is:"
          },
          {
            "type": "caps",
            "items": [
              "Technology for scale.",
              "Structured evidence for rigour.",
              "Professional interpretation for context.",
              "Human judgement for meaning."
            ]
          },
          {
            "type": "p",
            "text": "AI can help us identify patterns."
          },
          {
            "type": "p",
            "text": "It does not get to decide who the candidate is."
          }
        ],
        "output": "Human-Validated Candidate Intelligence"
      },
      {
        "n": "15",
        "title": "Identity Confidence Index",
        "lead": "We don't pretend every conclusion is equally certain.",
        "blocks": [
          {
            "type": "p",
            "text": "Major findings are classified according to the quality and consistency of supporting evidence."
          },
          {
            "type": "terms",
            "items": [
              {
                "t": "Strongly evidenced",
                "d": "Multiple independent signals consistently support the finding."
              },
              {
                "t": "Consistently indicated",
                "d": "Good supporting evidence exists."
              },
              {
                "t": "Emerging signal",
                "d": "A potentially important pattern requiring further observation."
              },
              {
                "t": "Exploration required",
                "d": "Insufficient evidence for a responsible conclusion."
              }
            ]
          },
          {
            "type": "p",
            "text": "A professional report should distinguish between:"
          },
          {
            "type": "caps",
            "items": [
              "What we know"
            ]
          },
          {
            "type": "p",
            "text": "and"
          },
          {
            "type": "caps",
            "items": [
              "What we still need to discover."
            ]
          }
        ],
        "output": "Identity Confidence Index"
      },
      {
        "n": "16",
        "title": "Identity Architecture",
        "lead": "Hundreds of individual signals now become one coherent picture.",
        "blocks": [
          {
            "type": "chain",
            "op": "↓",
            "items": [
              {
                "t": "Who I am"
              },
              {
                "t": "How I think"
              },
              {
                "t": "What I do well"
              },
              {
                "t": "What potential may still be hidden"
              },
              {
                "t": "What motivates me"
              },
              {
                "t": "What energises me"
              },
              {
                "t": "Where I thrive"
              },
              {
                "t": "What may hold me back"
              },
              {
                "t": "What futures align with me"
              },
              {
                "t": "Who I could become"
              }
            ]
          }
        ],
        "output": "Candidate Identity Architecture"
      },
      {
        "n": "17",
        "title": "Personal Direction Blueprint",
        "lead": "Because insight becomes valuable when it changes what happens next.",
        "blocks": [
          {
            "type": "p",
            "text": "The final Identity Mapping Report translates the analysis into practical direction."
          },
          {
            "type": "p",
            "text": "The aspirant leaves with greater clarity about:"
          },
          {
            "type": "caps",
            "items": [
              "What to strengthen",
              "What to explore",
              "What to experience",
              "What to question",
              "What environments to seek",
              "What assumptions to challenge",
              "Which directions deserve deeper investigation",
              "What should not yet be decided"
            ]
          },
          {
            "type": "p",
            "text": "The report does not simply conclude:"
          },
          {
            "type": "quote",
            "text": "“These careers suit you.”"
          },
          {
            "type": "p",
            "text": "It provides something much more useful:"
          },
          {
            "type": "quote",
            "text": "“Based on the evidence, this is where your strongest possibilities appear to lie—and this is what you should do next to test and develop them.”"
          }
        ]
      }
    ],
    "appendix": [
      {
        "title": "Why this is not another AI-generated report",
        "blocks": [
          {
            "type": "p",
            "text": "An AI-only approach can become:"
          },
          {
            "type": "chain",
            "op": "↓",
            "items": [
              {
                "t": "Candidate Data"
              },
              {
                "t": "AI Analysis"
              },
              {
                "t": "Generated Recommendations"
              },
              {
                "t": "Report"
              }
            ]
          },
          {
            "type": "p",
            "text": "Identity Mapping goes much deeper:"
          },
          {
            "type": "chain",
            "op": "↓",
            "items": [
              {
                "t": "Candidate evidence"
              },
              {
                "t": "Structured evidence architecture"
              },
              {
                "t": "Multiple professional lenses"
              },
              {
                "t": "Identity signal discovery"
              },
              {
                "t": "Evidence triangulation"
              },
              {
                "t": "Contradiction intelligence"
              },
              {
                "t": "Hidden potential discovery"
              },
              {
                "t": "Motivation & energy analysis"
              },
              {
                "t": "Environment compatibility"
              },
              {
                "t": "Future-self testing"
              },
              {
                "t": "Professional interpretation"
              },
              {
                "t": "Cross-expert challenge"
              },
              {
                "t": "Technology-assisted analysis"
              },
              {
                "t": "Human validation"
              },
              {
                "t": "Identity Confidence Index"
              },
              {
                "t": "Identity architecture"
              },
              {
                "t": "Personal direction blueprint"
              }
            ]
          }
        ]
      },
      {
        "title": "One candidate should never be reduced to one test, one score, one algorithm or one opinion",
        "blocks": []
      }
    ]
  },
  "university-intelligence-mapping": {
    "heading": "How Your University Intelligence Mapping Report Is Created",
    "subheading": "Not a University List. A Decision Intelligence System.",
    "intro": [
      {
        "type": "p",
        "text": "Once we understand the candidate, the real university investigation begins."
      },
      {
        "type": "p",
        "text": "Most university advice starts with a familiar question:"
      },
      {
        "type": "quote",
        "text": "“Where can this student get admission?”"
      },
      {
        "type": "p",
        "text": "We believe that question is incomplete."
      },
      {
        "type": "p",
        "text": "The questions that matter are:"
      },
      {
        "type": "list",
        "items": [
          "Where should this candidate apply?",
          "Why does that university fit this particular candidate?",
          "Is the program actually right?",
          "What is the realistic admission possibility?",
          "What opportunities exist beyond the classroom?",
          "What will the total investment look like?",
          "What are the hidden risks?",
          "What alternatives may be even better?"
        ]
      },
      {
        "type": "p",
        "text": "And if multiple universities offer admission—which one should the candidate actually choose?"
      },
      {
        "type": "p",
        "text": "University Intelligence Mapping is designed to answer these questions through a structured combination of:"
      },
      {
        "type": "caps",
        "items": [
          "Candidate intelligence × university research × expert interpretation × data × technology × human judgement"
        ]
      }
    ],
    "steps": [
      {
        "n": "01",
        "title": "Candidate-to-University Translation",
        "lead": "We don't begin with universities. We begin with the candidate.",
        "blocks": [
          {
            "type": "p",
            "text": "The candidate's Identity Mapping findings, academic record, capabilities, career ambitions, preferred learning environment, financial considerations, geographic preferences and long-term objectives are converted into a personalised University Selection Architecture."
          },
          {
            "type": "p",
            "text": "This determines what the right university must actually provide for this candidate."
          }
        ],
        "output": "Candidate University Requirement Map"
      },
      {
        "n": "02",
        "title": "Global Opportunity Discovery",
        "lead": "We deliberately look beyond familiar names.",
        "blocks": [
          {
            "type": "p",
            "text": "University selection can easily become influenced by:"
          },
          {
            "type": "list",
            "items": [
              "Rankings.",
              "Brand familiarity.",
              "Friends and relatives.",
              "Social media.",
              "Popular destinations.",
              "Counsellor familiarity.",
              "Or universities that are easier to recommend."
            ]
          },
          {
            "type": "p",
            "text": "Our process searches more widely for relevant institutions and programs that deserve investigation."
          },
          {
            "type": "p",
            "text": "We don't begin with a preferred university and try to justify it."
          },
          {
            "type": "p",
            "text": "We begin with the candidate and search for the strongest opportunities."
          }
        ],
        "output": "Global University Opportunity Pool"
      },
      {
        "n": "03",
        "title": "Program-Level Investigation",
        "lead": "Because the candidate doesn't study a ranking. The candidate studies a program.",
        "blocks": [
          {
            "type": "p",
            "text": "A university can be excellent overall and still be the wrong choice for a particular course."
          },
          {
            "type": "p",
            "text": "We therefore investigate the program itself."
          },
          {
            "type": "p",
            "text": "Where reliable information is available, this can include:"
          },
          {
            "type": "list",
            "items": [
              "Curriculum",
              "Specialisations",
              "Electives",
              "Faculty",
              "Research",
              "Laboratories",
              "Industry projects",
              "Internships",
              "Experiential learning",
              "Program flexibility",
              "Academic structure",
              "Career relevance"
            ]
          }
        ],
        "output": "Program Intelligence Profile"
      },
      {
        "n": "04",
        "title": "Candidate × Program Fit Analysis",
        "lead": "Now we ask a question that changes the entire selection process.",
        "blocks": [
          {
            "type": "p",
            "text": "Not simply:"
          },
          {
            "type": "quote",
            "text": "“Can the candidate get into this university?”"
          },
          {
            "type": "p",
            "text": "But:"
          },
          {
            "type": "quote",
            "text": "“Should this candidate actually study there?”"
          },
          {
            "type": "p",
            "text": "The candidate's strengths, interests, academic direction, career objectives and preferred environment are compared with what the program actually offers."
          },
          {
            "type": "p",
            "text": "This can reveal an important truth:"
          },
          {
            "type": "p",
            "text": "A famous university with weak candidate-program alignment may be a poorer decision than a less obvious university with exceptional alignment."
          }
        ],
        "output": "Candidate–Program Fit Map"
      },
      {
        "n": "05",
        "title": "Multi-Expert Intelligence Review",
        "lead": "One university decision should not depend on one counsellor's opinion.",
        "blocks": [
          {
            "type": "p",
            "text": "Relevant shortlisted options can be examined through different professional lenses within the scope of the service."
          },
          {
            "type": "p",
            "text": "These may include perspectives relating to:"
          },
          {
            "type": "list",
            "items": [
              "Academic Fit",
              "Higher-Education Strategy",
              "Career Alignment",
              "Industry Relevance",
              "Candidate Profile Competitiveness",
              "Application Strategy",
              "Financial Considerations"
            ]
          },
          {
            "type": "p",
            "text": "Different perspectives interrogate different parts of the same decision."
          },
          {
            "type": "p",
            "text": "The purpose is not to collect more opinions."
          },
          {
            "type": "p",
            "text": "It is to reduce one-dimensional advice."
          }
        ],
        "output": "Multi-Perspective University Review"
      },
      {
        "n": "06",
        "title": "Admission Reality Mapping",
        "lead": "Aspirations need probability.",
        "blocks": [
          {
            "type": "p",
            "text": "Each serious university is evaluated against the candidate's actual profile."
          },
          {
            "type": "p",
            "text": "We examine relevant evidence such as:"
          },
          {
            "type": "p",
            "text": "Academics • Test Scores • Projects • Research • Work Experience • Leadership • Activities • Achievements • Portfolio • Profile Differentiation"
          },
          {
            "type": "p",
            "text": "Universities can then be strategically positioned as:"
          },
          {
            "type": "terms",
            "items": [
              {
                "t": "Aspirational",
                "d": "Exceptional opportunity with higher admission uncertainty."
              },
              {
                "t": "Competitive",
                "d": "Strong opportunity with meaningful competition."
              },
              {
                "t": "Strategic",
                "d": "Good alignment with a more favourable competitive position."
              },
              {
                "t": "Safer",
                "d": "Higher probability while retaining acceptable academic and career value."
              }
            ]
          }
        ],
        "output": "Admission Probability Portfolio"
      },
      {
        "n": "07",
        "title": "Profile Gap Intelligence",
        "lead": "We don't stop at “your chances are low.”",
        "blocks": [
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "quote",
            "text": "“What could improve those chances?”"
          },
          {
            "type": "p",
            "text": "For priority universities, the candidate's present profile is compared with relevant competitive expectations."
          },
          {
            "type": "p",
            "text": "Potential gaps may include:"
          },
          {
            "type": "list",
            "items": [
              "Academic evidence.",
              "Testing.",
              "Projects.",
              "Research.",
              "Work experience.",
              "Leadership.",
              "Portfolio.",
              "Relevant exposure.",
              "Application positioning.",
              "This converts university research into an improvement strategy."
            ]
          }
        ],
        "output": "University-Specific Profile Gap Map"
      },
      {
        "n": "08",
        "title": "Career Ecosystem Intelligence",
        "lead": "We investigate what surrounds the degree.",
        "blocks": [
          {
            "type": "p",
            "text": "The university experience extends beyond lectures."
          },
          {
            "type": "p",
            "text": "Where relevant and supported by reliable information, we examine:"
          },
          {
            "type": "list",
            "items": [
              "Employer ecosystem",
              "Industry proximity",
              "Internship opportunities",
              "Research ecosystem",
              "Entrepreneurship environment",
              "Alumni reach",
              "Career services",
              "Location advantage",
              "Graduate opportunities"
            ]
          },
          {
            "type": "p",
            "text": "The question is not merely:"
          },
          {
            "type": "quote",
            "text": "“What will the candidate study?”"
          },
          {
            "type": "p",
            "text": "It is also:"
          },
          {
            "type": "quote",
            "text": "“What opportunities could surround the candidate while studying it?”"
          }
        ],
        "output": "Career Ecosystem Map"
      },
      {
        "n": "09",
        "title": "Cost × Opportunity Intelligence",
        "lead": "Cost tells you what you pay. Value asks what you may receive.",
        "blocks": [
          {
            "type": "p",
            "text": "We examine major financial considerations such as:"
          },
          {
            "type": "p",
            "text": "Tuition + Living Expenses + Other Major Costs − Relevant Scholarships / Funding = Estimated Education Investment"
          },
          {
            "type": "p",
            "text": "This is then considered alongside:"
          },
          {
            "type": "p",
            "text": "Program Fit × Career Opportunity × Candidate Fit × Strategic Value"
          },
          {
            "type": "p",
            "text": "A cheaper university is not automatically better."
          },
          {
            "type": "p",
            "text": "A more expensive university is not automatically better."
          },
          {
            "type": "p",
            "text": "The better decision depends on what the candidate receives in return for the investment."
          }
        ],
        "output": "Education Investment & Value Map"
      },
      {
        "n": "10",
        "title": "Scholarship & Funding Intelligence",
        "lead": "Published tuition should not automatically be treated as the final financial picture.",
        "blocks": [
          {
            "type": "p",
            "text": "Relevant scholarships, funding opportunities and major eligibility considerations are investigated wherever reliable information is available."
          },
          {
            "type": "p",
            "text": "This allows affordability to become part of university strategy rather than an afterthought."
          }
        ],
        "output": "Scholarship Opportunity Map"
      },
      {
        "n": "11",
        "title": "Hidden Risk Detection",
        "lead": "Attractive options can hide poor decisions.",
        "blocks": [
          {
            "type": "p",
            "text": "For each serious university, we deliberately search for possible mismatches."
          },
          {
            "type": "caps",
            "items": [
              "High ranking — but weak program fit?",
              "Strong program — but excessive financial pressure?",
              "Famous university — but limited relevance to the candidate's direction?",
              "Easy admission — but weak long-term value?",
              "Excellent academics — but poor environment fit?",
              "Strong brand — but better alternatives exist?"
            ]
          },
          {
            "type": "p",
            "text": "Most advice focuses on why a university should be selected."
          },
          {
            "type": "p",
            "text": "University Intelligence Mapping also asks why it should NOT be selected."
          }
        ],
        "output": "University Risk Map"
      },
      {
        "n": "12",
        "title": "Hidden Opportunity Discovery",
        "lead": "We search for what popularity and rankings can overlook.",
        "blocks": [
          {
            "type": "p",
            "text": "Some universities may provide an unusually attractive intersection of:"
          },
          {
            "type": "chain",
            "op": "×",
            "items": [
              {
                "t": "Candidate Fit"
              },
              {
                "t": "Program Strength"
              },
              {
                "t": "Admission Possibility"
              },
              {
                "t": "Industry Access"
              },
              {
                "t": "Career Opportunity"
              },
              {
                "t": "Financial Value"
              }
            ]
          },
          {
            "type": "p",
            "text": "These may not always be the names a family originally expected."
          },
          {
            "type": "p",
            "text": "Sometimes the smartest university decision is hidden behind the most famous one."
          }
        ],
        "output": "High-Value Opportunity Map"
      },
      {
        "n": "13",
        "title": "University Intelligence Score",
        "lead": "Every serious option now faces the same scrutiny.",
        "blocks": [
          {
            "type": "p",
            "text": "Each shortlisted university can be assessed across multiple decision dimensions:"
          },
          {
            "type": "list",
            "items": [
              "Candidate Fit",
              "Program Fit",
              "Academic Strength",
              "Admission Competitiveness",
              "Career Alignment",
              "Opportunity Ecosystem",
              "Financial Fit",
              "Scholarship Potential",
              "Environment Fit",
              "Risk",
              "Long-Term Strategic Value"
            ]
          },
          {
            "type": "p",
            "text": "The purpose is not to reduce a university to one artificial number."
          },
          {
            "type": "p",
            "text": "The purpose is to make the reasoning behind the decision visible."
          }
        ],
        "output": "University Intelligence Scorecard"
      },
      {
        "n": "14",
        "title": "University vs University Decision Matrix",
        "lead": "Now the family can compare what actually matters.",
        "blocks": [
          {
            "type": "p",
            "text": "Imagine three offers:"
          },
          {
            "type": "terms",
            "items": [
              {
                "t": "University A",
                "d": "Higher ranking. Higher cost. Moderate candidate fit."
              },
              {
                "t": "University B",
                "d": "Slightly lower ranking. Exceptional program fit. Strong industry ecosystem."
              },
              {
                "t": "University C",
                "d": "Strong scholarship. Good fit. Lower financial risk."
              }
            ]
          },
          {
            "type": "p",
            "text": "Which is actually better?"
          },
          {
            "type": "p",
            "text": "A ranking table cannot answer that."
          },
          {
            "type": "p",
            "text": "A generic shortlist cannot answer that."
          },
          {
            "type": "p",
            "text": "Candidate-specific comparative intelligence can."
          },
          {
            "type": "p",
            "text": "Universities are therefore compared across:"
          },
          {
            "type": "caps",
            "items": [
              "Fit × program × probability × opportunity × cost × risk × future value"
            ]
          }
        ],
        "output": "University Decision Matrix"
      },
      {
        "n": "15",
        "title": "Cross-Expert Challenge Review",
        "lead": "Before recommendations are finalised, important conclusions are challenged.",
        "blocks": [
          {
            "type": "p",
            "text": "One perspective may say:"
          },
          {
            "type": "quote",
            "text": "“Excellent university.”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“Excellent for whom?”"
          },
          {
            "type": "p",
            "text": "One may say:"
          },
          {
            "type": "quote",
            "text": "“Strong ranking.”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“How strong is this particular program?”"
          },
          {
            "type": "p",
            "text": "One may say:"
          },
          {
            "type": "quote",
            "text": "“The candidate can probably get admission.”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“But should the candidate actually go there?”"
          },
          {
            "type": "p",
            "text": "One may say:"
          },
          {
            "type": "quote",
            "text": "“It is expensive.”"
          },
          {
            "type": "p",
            "text": "Another asks:"
          },
          {
            "type": "quote",
            "text": "“What opportunities justify the additional investment?”"
          },
          {
            "type": "p",
            "text": "Agreement strengthens confidence."
          },
          {
            "type": "p",
            "text": "Disagreement triggers deeper investigation."
          },
          {
            "type": "p",
            "text": "The objective is not simply to recommend universities."
          },
          {
            "type": "p",
            "text": "The objective is to challenge the recommendation before the family has to challenge the decision."
          }
        ],
        "output": "Cross-Validated University Recommendations"
      },
      {
        "n": "16",
        "title": "Human × Technology Intelligence Layer",
        "lead": "Technology accelerates research. It does not make the university decision.",
        "blocks": [
          {
            "type": "p",
            "text": "Modern analytical tools, including AI where appropriate, can help organise information, compare large datasets, identify relationships and support research."
          },
          {
            "type": "p",
            "text": "But an AI-generated list is not University Intelligence Mapping."
          },
          {
            "type": "p",
            "text": "Our principle is:"
          },
          {
            "type": "caps",
            "items": [
              "Technology for scale",
              "Data for evidence",
              "Expertise for interpretation",
              "Human judgement for the decision"
            ]
          },
          {
            "type": "p",
            "text": "AI can help identify possibilities."
          },
          {
            "type": "p",
            "text": "It does not get to decide where the candidate should invest years of their life."
          }
        ],
        "output": "Human-Validated University Intelligence"
      },
      {
        "n": "17",
        "title": "Strategic Application Portfolio",
        "lead": "Every university on the final list must earn its place.",
        "blocks": [
          {
            "type": "p",
            "text": "The final portfolio is not:"
          },
          {
            "type": "quote",
            "text": "“Here are 10 universities you can try.”"
          },
          {
            "type": "p",
            "text": "Every recommended university should have a strategic reason for being included."
          },
          {
            "type": "p",
            "text": "The portfolio is balanced across:"
          },
          {
            "type": "caps",
            "items": [
              "Aspirational",
              "Competitive",
              "Strategic",
              "Safer"
            ]
          },
          {
            "type": "p",
            "text": "For every priority university, the candidate should understand:"
          },
          {
            "type": "list",
            "items": [
              "Why this university?",
              "Why this program?",
              "Why does it fit me?",
              "How competitive am I?",
              "What should I strengthen?",
              "What could it cost?",
              "What opportunities could it create?",
              "What are the risks?",
              "Why is it on my final list?"
            ]
          }
        ],
        "output": "The University Intelligence Map"
      }
    ],
    "appendix": [
      {
        "title": "Why this report should come before the application",
        "blocks": [
          {
            "type": "p",
            "text": "Because choosing a university is not a search problem."
          },
          {
            "type": "p",
            "text": "It is an investment decision."
          },
          {
            "type": "p",
            "text": "A family may be committing:"
          },
          {
            "type": "caps",
            "items": [
              "Years of the aspirant's life",
              "Substantial family capital",
              "A critical stage of career development",
              "A new country or city",
              "A professional network",
              "And possibly the direction of an entire career."
            ]
          },
          {
            "type": "p",
            "text": "Yet this decision can sometimes be based on little more than:"
          },
          {
            "type": "p",
            "text": "Ranking + Reputation + Eligibility + Recommendation"
          },
          {
            "type": "p",
            "text": "We believe that is not enough."
          }
        ]
      },
      {
        "title": "What conventional university advice can look like",
        "blocks": [
          {
            "type": "chain",
            "op": "↓",
            "items": [
              {
                "t": "Your Marks"
              },
              {
                "t": "Your Budget"
              },
              {
                "t": "Preferred Country"
              },
              {
                "t": "Ranking / Familiar Universities"
              },
              {
                "t": "10–15 Names"
              },
              {
                "t": "Apply"
              }
            ]
          }
        ]
      },
      {
        "title": "University Intelligence Mapping goes further",
        "blocks": [
          {
            "type": "chain",
            "op": "↓",
            "items": [
              {
                "t": "Candidate Identity"
              },
              {
                "t": "Candidate Requirements"
              },
              {
                "t": "Global Opportunity Discovery"
              },
              {
                "t": "Program-Level Investigation"
              },
              {
                "t": "Candidate–Program Fit"
              },
              {
                "t": "Multi-Expert Review"
              },
              {
                "t": "Admission Reality"
              },
              {
                "t": "Profile Gap Intelligence"
              },
              {
                "t": "Career Ecosystem"
              },
              {
                "t": "Cost & Scholarship Intelligence"
              },
              {
                "t": "Hidden Risk Detection"
              },
              {
                "t": "Hidden Opportunity Discovery"
              },
              {
                "t": "University Intelligence Score"
              },
              {
                "t": "University-vs-University Comparison"
              },
              {
                "t": "Cross-Expert Challenge"
              },
              {
                "t": "Human Validation"
              },
              {
                "t": "Strategic university decision"
              }
            ]
          }
        ]
      },
      {
        "title": "This is not another university shortlist",
        "blocks": [
          {
            "type": "caps",
            "items": [
              "It is due diligence before one of the biggest education decisions a family may make."
            ]
          },
          {
            "type": "p",
            "text": "You would not make a major investment simply because someone said:"
          },
          {
            "type": "quote",
            "text": "“This looks good.”"
          },
          {
            "type": "p",
            "text": "So why make an education investment that may involve substantial money and several years of a young person's life with less investigation?"
          }
        ]
      },
      {
        "title": "Before you ask “Which university will accept me?”",
        "blocks": [
          {
            "type": "p",
            "text": "First ask:"
          },
          {
            "type": "quote",
            "text": "“Which university actually deserves me?”"
          },
          {
            "type": "p",
            "text": "And before parents ask “Can we afford this university?”, there is another question worth asking:"
          },
          {
            "type": "quote",
            "text": "“Is this university worth what we are about to invest?”"
          }
        ]
      },
      {
        "title": "University Intelligence Mapping",
        "blocks": [
          {
            "type": "p",
            "text": "Not a List."
          },
          {
            "type": "p",
            "text": "Not a Ranking Exercise."
          },
          {
            "type": "p",
            "text": "Not an AI-Generated Recommendation."
          },
          {
            "type": "p",
            "text": "A Candidate-Specific University Due-Diligence System."
          },
          {
            "type": "p",
            "text": "Research. Evidence. Experts. Technology. Human Judgement."
          },
          {
            "type": "p",
            "text": "Because getting an admission is an achievement."
          },
          {
            "type": "p",
            "text": "Choosing the right admission is intelligence."
          }
        ]
      }
    ]
  },
  "story-mapping": {
    "heading": "How Your Story Mapping Application Portfolio Is Created",
    "subheading": "Your Profile May Be Strong. But Can the Evaluator See Why?",
    "intro": [
      {
        "type": "p",
        "text": "By the time Story Mapping begins, years of work have already happened."
      },
      {
        "type": "p",
        "text": "The candidate has studied."
      },
      {
        "type": "p",
        "text": "Built achievements."
      },
      {
        "type": "p",
        "text": "Completed projects."
      },
      {
        "type": "p",
        "text": "Gained experiences."
      },
      {
        "type": "p",
        "text": "Developed interests."
      },
      {
        "type": "p",
        "text": "Made decisions."
      },
      {
        "type": "p",
        "text": "Overcome challenges."
      },
      {
        "type": "p",
        "text": "And selected universities."
      },
      {
        "type": "p",
        "text": "But now comes a completely different challenge:"
      },
      {
        "type": "p",
        "text": "How do you make an evaluator who has never met you understand the person behind all that evidence?"
      },
      {
        "type": "p",
        "text": "That is what Story Mapping is designed to do."
      },
      {
        "type": "p",
        "text": "Story Mapping is our 7-University Application Document Development System."
      },
      {
        "type": "p",
        "text": "It does not simply write an SOP."
      },
      {
        "type": "p",
        "text": "It determines:"
      },
      {
        "type": "list",
        "items": [
          "WHAT should be communicated.",
          "WHY it matters.",
          "WHICH evidence should prove it.",
          "WHERE it should appear.",
          "HOW it should change for each university.",
          "WHAT the evaluator should understand.",
          "AND WHAT they should remember."
        ]
      }
    ],
    "steps": [
      {
        "n": "01",
        "title": "Complete Candidate Evidence Extraction",
        "lead": "We don't begin by writing.",
        "blocks": [
          {
            "type": "p",
            "text": "We begin by investigating."
          },
          {
            "type": "p",
            "text": "The candidate's complete journey is examined:"
          },
          {
            "type": "list",
            "items": [
              "Academics",
              "Projects",
              "Internships",
              "Research",
              "Work experience",
              "Leadership",
              "Activities",
              "Achievements",
              "Failures",
              "Challenges",
              "Decisions",
              "Turning points",
              "Motivations",
              "Career ambitions",
              "Personal experiences",
              "Future aspirations"
            ]
          },
          {
            "type": "p",
            "text": "We search for evidence that reveals something meaningful about the candidate."
          }
        ],
        "output": "Candidate Story Evidence Bank"
      },
      {
        "n": "02",
        "title": "Story Mining",
        "lead": "Achievements tell us what happened. Stories tell us what it meant.",
        "blocks": [
          {
            "type": "p",
            "text": "For significant experiences, we go deeper."
          },
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "list",
            "items": [
              "What happened?",
              "Why did you choose it?",
              "What did you actually do?",
              "What problem did you face?",
              "How did you respond?",
              "What changed?",
              "What did you learn?",
              "How did it influence what came next?",
              "What does this reveal about you?"
            ]
          },
          {
            "type": "p",
            "text": "This turns résumé information into meaningful narrative material."
          }
        ],
        "output": "Candidate Story Bank"
      },
      {
        "n": "03",
        "title": "Evidence Classification",
        "lead": "Every experience must earn its place.",
        "blocks": [
          {
            "type": "p",
            "text": "Candidate evidence is classified according to what it can demonstrate:"
          },
          {
            "type": "list",
            "items": [
              "Academic Readiness",
              "Intellectual Curiosity",
              "Leadership",
              "Initiative",
              "Problem-Solving",
              "Resilience",
              "Creativity",
              "Professional Maturity",
              "Collaboration",
              "Impact",
              "Career Clarity",
              "Contribution Potential",
              "Future Direction"
            ]
          },
          {
            "type": "p",
            "text": "The purpose is to prevent the same achievements from being repeated mechanically across every document."
          }
        ],
        "output": "Evidence-to-Attribute Map"
      },
      {
        "n": "04",
        "title": "Narrative DNA",
        "lead": "We identify the story underneath the CV.",
        "blocks": [
          {
            "type": "p",
            "text": "Individual experiences are connected across:"
          },
          {
            "type": "chain",
            "op": "↓",
            "items": [
              {
                "t": "Past",
                "d": "What shaped me?"
              },
              {
                "t": "Development",
                "d": "What changed me?"
              },
              {
                "t": "Present",
                "d": "Who have I become?"
              },
              {
                "t": "Direction",
                "d": "Where am I going?"
              },
              {
                "t": "Purpose",
                "d": "Why is this next academic step necessary?"
              }
            ]
          },
          {
            "type": "p",
            "text": "This becomes the candidate's core Narrative DNA."
          }
        ],
        "output": "Core Candidate Narrative"
      },
      {
        "n": "05",
        "title": "Differentiation Discovery",
        "lead": "Universities see many applicants with good marks.",
        "blocks": [
          {
            "type": "p",
            "text": "Many applicants have internships."
          },
          {
            "type": "p",
            "text": "Many have projects."
          },
          {
            "type": "p",
            "text": "Many have leadership positions."
          },
          {
            "type": "p",
            "text": "Many describe themselves as passionate, ambitious and hardworking."
          },
          {
            "type": "p",
            "text": "So why should this candidate be remembered?"
          },
          {
            "type": "p",
            "text": "We search for the distinctive intersection of:"
          },
          {
            "type": "p",
            "text": "Experience × Perspective × Capability × Motivation × Ambition"
          },
          {
            "type": "p",
            "text": "The objective is not to manufacture uniqueness."
          },
          {
            "type": "p",
            "text": "It is to uncover what is already distinctive and make it visible."
          }
        ],
        "output": "Candidate Differentiation Position"
      },
      {
        "n": "06",
        "title": "Multi-Expert Story Review",
        "lead": "One writer should not decide how an entire candidate is presented.",
        "blocks": [
          {
            "type": "p",
            "text": "Relevant aspects of the application can be examined through different professional lenses within the service scope."
          },
          {
            "type": "p",
            "text": "These may include perspectives relating to:"
          },
          {
            "type": "list",
            "items": [
              "Academic Positioning",
              "Career Direction",
              "Admissions Strategy",
              "Candidate Differentiation",
              "Communication & Narrative",
              "Program Fit",
              "Application Consistency"
            ]
          },
          {
            "type": "p",
            "text": "Each lens asks something different."
          },
          {
            "type": "p",
            "text": "An academic lens asks:"
          },
          {
            "type": "quote",
            "text": "“Does this demonstrate intellectual readiness?”"
          },
          {
            "type": "p",
            "text": "A career lens asks:"
          },
          {
            "type": "quote",
            "text": "“Does the future direction make sense?”"
          },
          {
            "type": "p",
            "text": "An admissions lens asks:"
          },
          {
            "type": "quote",
            "text": "“Why should this evidence matter to an evaluator?”"
          },
          {
            "type": "p",
            "text": "A narrative lens asks:"
          },
          {
            "type": "quote",
            "text": "“Will the reader understand and remember it?”"
          }
        ],
        "output": "Multi-Perspective Narrative Review"
      },
      {
        "n": "07",
        "title": "Evaluator Lens Mapping",
        "lead": "Now we stop reading like the candidate.",
        "blocks": [
          {
            "type": "p",
            "text": "We start reading like the evaluator."
          },
          {
            "type": "p",
            "text": "For each university, we identify the relevant questions the application must answer."
          },
          {
            "type": "p",
            "text": "Depending on the program, these may include:"
          },
          {
            "type": "list",
            "items": [
              "Is this candidate academically prepared?",
              "Why this field?",
              "Is the motivation credible?",
              "Does the candidate demonstrate maturity?",
              "What distinguishes them?",
              "Does the career direction make sense?",
              "Why this program?",
              "Why this institution?",
              "What might this candidate contribute?",
              "Is there evidence behind the claims?"
            ]
          }
        ],
        "output": "Evaluator Question Map"
      },
      {
        "n": "08",
        "title": "Seven-University Story Architecture",
        "lead": "One of the biggest differences begins here.",
        "blocks": [
          {
            "type": "p",
            "text": "The candidate is applying to 7 selected universities."
          },
          {
            "type": "p",
            "text": "Those universities may have different:"
          },
          {
            "type": "list",
            "items": [
              "Programs.",
              "Curricula.",
              "Academic cultures.",
              "Opportunities.",
              "Questions.",
              "Essay requirements.",
              "And institutional environments."
            ]
          },
          {
            "type": "p",
            "text": "So why should all seven receive essentially the same SOP?"
          },
          {
            "type": "p",
            "text": "They shouldn't."
          },
          {
            "type": "p",
            "text": "But there is an equally important danger:"
          },
          {
            "type": "p",
            "text": "Seven applications should not create seven different versions of the candidate."
          },
          {
            "type": "p",
            "text": "Story Mapping solves both problems."
          },
          {
            "type": "chain",
            "op": "×",
            "items": [
              {
                "t": "One authentic identity"
              },
              {
                "t": "Seven university-specific narrative strategies"
              }
            ]
          },
          {
            "type": "p",
            "text": "For each university we determine:"
          },
          {
            "type": "list",
            "items": [
              "What should be emphasised?",
              "Which evidence is most relevant?",
              "Which experiences should lead?",
              "Which strengths matter most here?",
              "Why does this program fit?",
              "Why does this university fit?",
              "What should this evaluator remember?"
            ]
          }
        ],
        "output": "Seven University Story Maps"
      },
      {
        "n": "09",
        "title": "Why You × Why Program × Why University × Why Now",
        "lead": "Four answers. One logical story.",
        "blocks": [
          {
            "type": "p",
            "text": "Many applications treat these as separate questions."
          },
          {
            "type": "p",
            "text": "We connect them."
          },
          {
            "type": "chain",
            "op": "×",
            "items": [
              {
                "t": "Why you?",
                "d": "What evidence demonstrates your readiness and potential?"
              },
              {
                "t": "Why this program?",
                "d": "Why is this academic step necessary?"
              },
              {
                "t": "Why this university?",
                "d": "What specifically makes this environment appropriate?"
              },
              {
                "t": "Why now?",
                "d": "Why is this the logical next step in your journey?"
              }
            ]
          },
          {
            "type": "p",
            "text": "When these answers reinforce each other, the application stops feeling assembled."
          },
          {
            "type": "p",
            "text": "It begins feeling coherent."
          }
        ],
        "output": "Application Logic Architecture"
      },
      {
        "n": "10",
        "title": "Claim × Evidence × Meaning × Relevance Mapping",
        "lead": "Every important claim should have a reason to be believed.",
        "blocks": [
          {
            "type": "p",
            "text": "Consider:"
          },
          {
            "type": "quote",
            "text": "“I am passionate about technology.”"
          },
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "p",
            "text": "What have you done that demonstrates it?"
          },
          {
            "type": "quote",
            "text": "“I have strong leadership skills.”"
          },
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "p",
            "text": "Where is the evidence?"
          },
          {
            "type": "quote",
            "text": "“This university is perfect for me.”"
          },
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "p",
            "text": "Why?"
          },
          {
            "type": "p",
            "text": "Story Mapping therefore tests important narrative claims through:"
          },
          {
            "type": "chain",
            "op": "↓",
            "items": [
              {
                "t": "Claim"
              },
              {
                "t": "Evidence"
              },
              {
                "t": "Meaning"
              },
              {
                "t": "Relevance"
              }
            ]
          },
          {
            "type": "p",
            "text": "This makes the application more credible and less dependent on generic statements."
          }
        ],
        "output": "Evidence-Backed Narrative Map"
      },
      {
        "n": "11",
        "title": "Document Role Architecture",
        "lead": "Your documents should work together—not repeat each other.",
        "blocks": [
          {
            "type": "terms",
            "items": [
              {
                "t": "CV / Résumé",
                "d": "Proves what you have done."
              },
              {
                "t": "SOP",
                "d": "Explains where you are going and why."
              },
              {
                "t": "Personal essays",
                "d": "Reveal the person behind the profile."
              },
              {
                "t": "Short answers",
                "d": "Deliver precise evidence against specific questions."
              },
              {
                "t": "Recommendation strategy",
                "d": "Identifies dimensions that could be independently validated by recommenders."
              }
            ]
          },
          {
            "type": "p",
            "text": "Instead of five documents repeating the same achievements:"
          },
          {
            "type": "p",
            "text": "Each document adds another dimension of the candidate."
          }
        ],
        "output": "Application Document Architecture"
      },
      {
        "n": "12",
        "title": "University-Specific Fit Integration",
        "lead": "“Your prestigious university” is not a Why-University argument.",
        "blocks": [
          {
            "type": "p",
            "text": "For each of the seven universities, relevant characteristics are researched and connected with the candidate's actual objectives."
          },
          {
            "type": "p",
            "text": "Where appropriate, these may include:"
          },
          {
            "type": "list",
            "items": [
              "Courses",
              "Curriculum",
              "Specialisations",
              "Faculty",
              "Research",
              "Labs",
              "Projects",
              "Industry opportunities",
              "Experiential learning",
              "Relevant communities",
              "Career ecosystem"
            ]
          },
          {
            "type": "p",
            "text": "But simply mentioning them is not enough."
          },
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "quote",
            "text": "“Why does this matter specifically to this candidate?”"
          }
        ],
        "output": "Candidate–University Narrative Fit"
      },
      {
        "n": "13",
        "title": "Story Allocation Intelligence",
        "lead": "The strongest story can become weak if placed in the wrong document.",
        "blocks": [
          {
            "type": "p",
            "text": "Imagine a candidate has:"
          },
          {
            "type": "list",
            "items": [
              "10 strong experiences.",
              "7 universities.",
              "Multiple essays.",
              "An SOP.",
              "A CV.",
              "Short-answer questions.",
              "Recommendation opportunities."
            ]
          },
          {
            "type": "p",
            "text": "Which experience goes where?"
          },
          {
            "type": "p",
            "text": "Story Mapping deliberately allocates narrative evidence."
          },
          {
            "type": "p",
            "text": "One experience may demonstrate leadership."
          },
          {
            "type": "p",
            "text": "Another intellectual curiosity."
          },
          {
            "type": "p",
            "text": "Another resilience."
          },
          {
            "type": "p",
            "text": "Another career motivation."
          },
          {
            "type": "p",
            "text": "Another future contribution."
          },
          {
            "type": "p",
            "text": "This reduces repetition and increases the amount of the candidate the evaluator gets to discover."
          }
        ],
        "output": "Story Allocation Matrix"
      },
      {
        "n": "14",
        "title": "Memorability Engineering",
        "lead": "Being impressive and being memorable are not the same thing.",
        "blocks": [
          {
            "type": "p",
            "text": "An evaluator may read hundreds or thousands of applications."
          },
          {
            "type": "p",
            "text": "After reading this candidate's documents, what remains?"
          },
          {
            "type": "p",
            "text": "We identify a limited number of genuine Candidate Recall Anchors."
          },
          {
            "type": "p",
            "text": "These might include:"
          },
          {
            "type": "list",
            "items": [
              "A defining decision.",
              "An unusual project.",
              "A meaningful failure.",
              "A distinctive intellectual interest.",
              "A moment of initiative.",
              "A significant personal insight.",
              "A compelling future objective.",
              "Not gimmicks.",
              "Not manufactured drama.",
              "Authentic evidence worth remembering."
            ]
          }
        ],
        "output": "Candidate Recall Architecture"
      },
      {
        "n": "15",
        "title": "AI & Generic-Language Detection Review",
        "lead": "A polished application should never lose the candidate.",
        "blocks": [
          {
            "type": "p",
            "text": "Today's applicants have access to templates, AI writing tools and countless sample SOPs."
          },
          {
            "type": "p",
            "text": "The result can be grammatically impressive—"
          },
          {
            "type": "p",
            "text": "but personally invisible."
          },
          {
            "type": "p",
            "text": "We deliberately challenge:"
          },
          {
            "type": "list",
            "items": [
              "Generic openings.",
              "Artificial sophistication.",
              "Overused phrases.",
              "Unnecessary vocabulary.",
              "Template language.",
              "Empty claims.",
              "Exaggeration.",
              "Over-polished sentences that no longer sound like the candidate."
            ]
          },
          {
            "type": "p",
            "text": "The purpose is not to reject technology."
          },
          {
            "type": "p",
            "text": "Technology can assist research, organisation, comparison and refinement."
          },
          {
            "type": "p",
            "text": "But technology should never manufacture the candidate's identity."
          }
        ],
        "output": "Authenticity & Voice Review"
      },
      {
        "n": "16",
        "title": "Contradiction & Consistency Audit",
        "lead": "Seven applications must still describe one person.",
        "blocks": [
          {
            "type": "p",
            "text": "We cross-check:"
          },
          {
            "type": "list",
            "items": [
              "SOP",
              "CV",
              "Essays",
              "Short answers",
              "Career goals",
              "Academic positioning",
              "Recommendation strategy",
              "University-specific narratives"
            ]
          },
          {
            "type": "p",
            "text": "We search for:"
          },
          {
            "type": "list",
            "items": [
              "Contradictions.",
              "Unexplained changes.",
              "Repeated information.",
              "Timeline inconsistencies.",
              "Different career goals.",
              "Unsupported claims.",
              "Narrative gaps."
            ]
          }
        ],
        "output": "Cross-Document Consistency Map"
      },
      {
        "n": "17",
        "title": "Human × Technology Intelligence Layer",
        "lead": "Technology supports the process. It does not write the candidate's life.",
        "blocks": [
          {
            "type": "p",
            "text": "Modern analytical tools, including AI where appropriate, can assist with:"
          },
          {
            "type": "list",
            "items": [
              "Information organisation.",
              "Research comparison.",
              "Pattern identification.",
              "Document analysis.",
              "Consistency checking.",
              "Language refinement."
            ]
          },
          {
            "type": "p",
            "text": "But the final narrative requires:"
          },
          {
            "type": "caps",
            "items": [
              "Human experience",
              "Context",
              "Interpretation",
              "Judgement",
              "Authenticity"
            ]
          },
          {
            "type": "p",
            "text": "Our principle is:"
          },
          {
            "type": "caps",
            "items": [
              "Technology for scale.",
              "Expertise for strategy.",
              "Human judgement for story."
            ]
          }
        ],
        "output": "Human-Validated Application Narrative"
      },
      {
        "n": "18",
        "title": "Evaluator Simulation Review",
        "lead": "Before submission, we change sides of the table.",
        "blocks": [
          {
            "type": "p",
            "text": "The application is reviewed as though we were encountering the candidate for the first time."
          },
          {
            "type": "p",
            "text": "We ask:"
          },
          {
            "type": "list",
            "items": [
              "Who is this person?",
              "What do I remember?",
              "What makes them different?",
              "Do I believe their motivation?",
              "Does their academic journey make sense?",
              "Is their career direction credible?",
              "Why this program?",
              "Why this university?",
              "What evidence supports their claims?",
              "What might they contribute?",
              "Is anything confusing?",
              "Is anything missing?"
            ]
          },
          {
            "type": "p",
            "text": "And most importantly:"
          },
          {
            "type": "quote",
            "text": "“After reading this application, do I understand why this candidate belongs here?”"
          },
          {
            "type": "p",
            "text": "If the answer is not sufficiently clear, the relevant element goes back for refinement."
          }
        ],
        "output": "Evaluator-Readiness Review"
      },
      {
        "n": "19",
        "title": "Cross-Expert Challenge & Final Validation",
        "lead": "Before the application portfolio is finalised, the story is challenged.",
        "blocks": [
          {
            "type": "p",
            "text": "Different professional perspectives can ask:"
          },
          {
            "type": "list",
            "items": [
              "Is this academically credible?",
              "Is the career direction logical?",
              "Is the university connection genuine?",
              "Is the evidence strong enough?",
              "Does the writing sound authentic?",
              "Is anything overclaimed?"
            ]
          }
        ]
      }
    ],
    "appendix": []
  }
};
