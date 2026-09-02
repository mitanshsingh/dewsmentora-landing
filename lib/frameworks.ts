export type FrameworkIcon =
  | "profile"
  | "career"
  | "country"
  | "university"
  | "readiness"
  | "roadmap"
  | "report";

export type FrameworkStage = {
  n: string;
  title: string;
  icon: FrameworkIcon;
  items: string[];
};

export type Framework = {
  heading: string;
  intro: string;
  stages: FrameworkStage[];
};

/**
 * Structured replacements for the text-in-image product figures.
 *
 * Keyed by product slug. A product without an entry still renders its
 * `figure` image, so these can be migrated one at a time.
 */
export const FRAMEWORKS: Record<string, Framework> = {
  "university-intelligence-mapping": {
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
  },
};

export function getFramework(slug: string): Framework | undefined {
  return FRAMEWORKS[slug];
}
