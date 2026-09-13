export type Program = {
  slug: string;
  name: string;
  tagline: string;
  emoji: string;
  summary: string;
  problem: string;
  activities: string[];
  serves: string;
  outcomes: string[];
  fund: string;
};

export const programs: Program[] = [
  {
    slug: "nutrition-education",
    name: "Community Nutrition Education",
    tagline: "Knowledge that nourishes generations",
    emoji: "📚",
    summary:
      "Practical, community-led classes on infant feeding, balanced meals on a budget, and hygiene.",
    problem:
      "In the communities we serve, preventable malnutrition is driven less by a lack of food than by a lack of accessible, practical knowledge. Misconceptions about infant and young child feeding, the rising cost of nutritious staples, and limited access to health education leave many mothers without the tools to protect their children's growth in the critical first 1,000 days.",
    activities: [
      "Weekly community nutrition classes led by trained local facilitators",
      "Cooking demonstrations using affordable, locally available ingredients",
      "One-on-one counselling for mothers on breastfeeding and complementary feeding",
      "Take-home guides in English and local languages",
    ],
    serves:
      "Pregnant women, nursing mothers, and caregivers of children under five.",
    outcomes: [
      "[X] women completed the full curriculum this year",
      "[X] community facilitators trained and active",
      "[X]% of participants adopted at least three recommended feeding practices",
    ],
    fund: "Community Nutrition Fund",
  },
  {
    slug: "food-security",
    name: "Household Food Security",
    tagline: "A reliable plate, every day",
    emoji: "🌾",
    summary:
      "Food support, home gardens, and linkages to local markets so families can feed themselves year-round.",
    problem:
      "Seasonal income gaps and food-price shocks push vulnerable households into meal skipping and rationing, with women and children absorbing the worst of it. Short-term relief alone does not build resilience — families need assets and skills that outlast any single distribution.",
    activities: [
      "Targeted food support for households with children under five",
      "Home garden starter kits (seeds, seedlings, tools, training)",
      "Linking women to cooperative purchasing and local produce markets",
      "Post-harvest handling and food preservation training",
    ],
    serves:
      "Low-income households in underserved communities, prioritising female-headed homes.",
    outcomes: [
      "[X] households supported with food assistance this year",
      "[X] home gardens established and producing",
      "[X]% of supported households reporting fewer skipped meals after 6 months",
    ],
    fund: "Food Security Fund",
  },
  {
    slug: "maternal-child-health",
    name: "Maternal & Child Health",
    tagline: "Healthy mothers raise healthy children",
    emoji: "🤱",
    summary:
      "Antenatal support, growth monitoring, and referral pathways to health services for mother and child.",
    problem:
      "Many women in underserved communities attend few or no antenatal visits, and children's growth goes unmonitored until problems become severe. Distance, cost, and low trust in formal services keep families away from care that could prevent lifelong harm.",
    activities: [
      "Community-based growth monitoring and malnutrition screening",
      "Antenatal care accompaniment and birth-preparedness sessions",
      "Micronutrient supplementation drives in partnership with local clinics",
      "Referral pathways and transport support to nearby health facilities",
    ],
    serves:
      "Pregnant women and children under five in partner communities.",
    outcomes: [
      "[X] children screened for malnutrition this year",
      "[X] children referred and enrolled in treatment",
      "[X] antenatal visits supported",
    ],
    fund: "Maternal & Child Health Fund",
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
