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
    slug: "maternal-nutrition",
    name: "Maternal Nutrition",
    tagline: "Healthy mothers, healthy beginnings",
    emoji: "🤰",
    summary:
      "Supporting pregnant and breastfeeding women with nutrition education, dietary diversity and appropriate referrals.",
    problem:
      "Pregnancy and breastfeeding dramatically raise a woman's nutritional needs, yet in underserved communities many women eat last and least. Maternal undernutrition drives low birth weight, stalls children's growth before it begins, and puts mothers' own health at risk — often invisibly, because the warning signs go unrecognised until complications arise.",
    activities: [
      "Nutrition education for pregnant and breastfeeding women",
      "Counselling on dietary diversity using affordable local foods",
      "Early identification of nutrition problems during pregnancy and lactation",
      "Referral pathways to antenatal and health services",
    ],
    serves:
      "Pregnant women, breastfeeding mothers, and women planning pregnancy.",
    outcomes: [
      "[X] pregnant and breastfeeding women reached",
      "[X] referred to antenatal and nutrition services",
      "[X] community sessions delivered this year",
    ],
    fund: "Maternal Nutrition Fund",
  },
  {
    slug: "girls-nutrition-empowerment",
    name: "Girls' Nutrition & Empowerment",
    tagline: "Nourishing the next generation of women",
    emoji: "🎓",
    summary:
      "Promoting adolescent nutrition, menstrual health education, life skills, leadership and economic empowerment.",
    problem:
      "Adolescent girls face a hidden nutrition crisis — iron deficiency, skipping meals, and social norms that feed girls least — just as their bodies and futures are forming. Without knowledge of their own health, menstrual health education, and skills to earn, today's girls become tomorrow's undernourished mothers.",
    activities: [
      "Adolescent nutrition education in schools and community clubs",
      "Menstrual health education and hygiene support",
      "Life skills, leadership and confidence-building sessions",
      "Economic empowerment pathways for older girls",
    ],
    serves:
      "Adolescent girls in schools and community programmes, with caregiver engagement.",
    outcomes: [
      "[X] adolescent girls enrolled in school and community clubs",
      "[X] menstrual health sessions delivered",
      "[X] girls completing life-skills curriculum",
    ],
    fund: "Girls' Empowerment Fund",
  },
  {
    slug: "child-nutrition",
    name: "Child Nutrition",
    tagline: "Every child screened, every caregiver supported",
    emoji: "🧒",
    summary:
      "Nutrition education, community screening and referral of children with suspected malnutrition, and caregiver support.",
    problem:
      "Malnutrition in a child's first 1,000 days causes lifelong damage — yet in the communities we serve, children's growth goes unmonitored and caregivers often cannot recognise the early signs of wasting and stunting until the damage is severe and costly to reverse.",
    activities: [
      "Community-based growth monitoring and malnutrition screening",
      "Referral of children with suspected malnutrition to treatment services",
      "Nutrition education for caregivers on infant and young child feeding",
      "Ongoing caregiver support and follow-up",
    ],
    serves:
      "Children under five and their caregivers in partner communities.",
    outcomes: [
      "[X] children screened for malnutrition this year",
      "[X] children referred and enrolled in treatment",
      "[X] caregivers reached with feeding support",
    ],
    fund: "Child Nutrition Fund",
  },
  {
    slug: "food-security-zero-hunger",
    name: "Food Security & Zero Hunger",
    tagline: "A reliable plate, every day",
    emoji: "🌾",
    summary:
      "Community initiatives that improve access to nutritious foods and strengthen household food security.",
    problem:
      "Seasonal income gaps and food-price shocks push vulnerable households into meal skipping and rationing, with women and children absorbing the worst of it. Short-term relief alone does not build resilience — families need access to nutritious food and the means to sustain it year-round.",
    activities: [
      "Community initiatives improving access to nutritious foods",
      "Home garden starter kits (seeds, seedlings, tools, training)",
      "Linking households to cooperative purchasing and local produce markets",
      "Food preservation and storage training for lean seasons",
    ],
    serves:
      "Low-income households in underserved communities, prioritising female-headed homes.",
    outcomes: [
      "[X] households supported this year",
      "[X] home gardens established and producing",
      "[X]% of supported households reporting fewer skipped meals",
    ],
    fund: "Food Security Fund",
  },
  {
    slug: "womens-economic-empowerment",
    name: "Women's Economic Empowerment",
    tagline: "Income in her hands, food on the table",
    emoji: "💼",
    summary:
      "Skills development, entrepreneurship, financial literacy and livelihood opportunities for women.",
    problem:
      "A woman's income is one of the strongest predictors of whether her children eat well — women reinvest in food, health and school. Yet many women in the communities we serve lack access to skills training, start-up support and financial services, leaving household nutrition hostage to irregular, low-paid work.",
    activities: [
      "Vocational and business skills development",
      "Entrepreneurship training and small-business support",
      "Financial literacy and savings-group formation",
      "Linking women to livelihood opportunities and markets",
    ],
    serves:
      "Women of working age, particularly mothers and female-headed households.",
    outcomes: [
      "[X] women trained in skills and financial literacy",
      "[X] women-led small businesses supported",
      "[X] savings groups active",
    ],
    fund: "Women's Empowerment Fund",
  },
  {
    slug: "nutrition-advocacy-research",
    name: "Nutrition Advocacy & Research",
    tagline: "Evidence that changes policy and practice",
    emoji: "📊",
    summary:
      "Community assessments, awareness campaigns, evidence generation and advocacy for better nutrition policies and programmes.",
    problem:
      "Communities facing the worst malnutrition are the least measured and least heard. Without local evidence, programmes are designed on assumptions and policies overlook the people who need them — so HPTF pairs service delivery with data generation and advocacy that raises community voices to decision-makers.",
    activities: [
      "Community nutrition assessments and data collection",
      "Public awareness campaigns on nutrition and food security",
      "Evidence generation and partnerships with researchers",
      "Advocacy for better nutrition policies and programmes",
    ],
    serves:
      "Partner communities, policymakers, and the nutrition sector at large.",
    outcomes: [
      "[X] community assessments completed",
      "[X] people reached through awareness campaigns",
      "[X] advocacy engagements with government and partners",
    ],
    fund: "Advocacy & Research Fund",
  },
];

export const values = [
  {
    title: "Dignity",
    description:
      "We serve with respect, never pity. The women we work with are partners, not beneficiaries on a pedestal.",
  },
  {
    title: "Community-led",
    description:
      "Programs are designed with communities, not for them. Local facilitators lead the work in their own communities.",
  },
  {
    title: "Transparency",
    description:
      "We publish what we do and how money is spent, and we report honestly when things do not work.",
  },
  {
    title: "Sustainability",
    description:
      "We build skills, gardens, and local systems that keep working long after a project cycle ends.",
  },
];

export const approachItems = [
  {
    title: "Community-driven",
    description:
      "Solutions are developed with communities themselves — through trusted local facilitators and existing community structures.",
  },
  {
    title: "Multi-stakeholder partnerships",
    description:
      "We work with healthcare providers, schools, government agencies, NGOs, development partners and local stakeholders.",
  },
  {
    title: "Practical and evidence-led",
    description:
      "We generate local evidence, follow national and WHO guidance, and measure outcomes — not just activity.",
  },
];

/** URL-safe slug for a fund name (e.g. "Girls' Empowerment Fund" → "girls-empowerment-fund").
 *  Strips "&" and "'" and collapses dashes so the value is always safe in a query string. */
export function fundSlug(fund: string): string {
  return fund
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/'/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
