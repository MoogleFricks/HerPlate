export type Story = {
  slug: string;
  name: string;
  initials: string;
  community: string;
  excerpt: string;
  situation: string;
  intervention: string;
  outcome: string;
  program: string;
};

export const stories: Story[] = [
  {
    slug: "amaka",
    name: "Amaka (name changed)",
    initials: "A",
    community: "Partner community, Southwest Nigeria",
    excerpt:
      "\"I used to guess what to feed my son. Now I know, and he is growing.\"",
    situation:
      "When Amaka joined our nutrition classes, her one-year-old son was underweight and she had been told to stop breastfeeding without any explanation why.",
    intervention:
      "Over eight weeks, she attended the community classes, received one-on-one counselling, and learned to prepare balanced meals from ingredients she already bought every week.",
    outcome:
      "Her son regained a healthy weight trajectory within four months, and Amaka now volunteers as a peer facilitator for new mothers in her community.",
    program: "Community Nutrition Education",
  },
  {
    slug: "hajara",
    name: "Hajara (name changed)",
    initials: "H",
    community: "Partner community, North-Central Nigeria",
    excerpt:
      "\"The garden feeds us in the hungry season. That never happened before.\"",
    situation:
      "Hajara, a mother of four, regularly skipped meals in the months before harvest so her children could eat.",
    intervention:
      "Her household received a home garden starter kit and training on preservation, and joined a women's cooperative purchasing group.",
    outcome:
      "The family now grows vegetables through the lean season and reports no skipped meals in the last two harvest cycles.",
    program: "Household Food Security",
  },
  {
    slug: "blessing",
    name: "Blessing (name changed)",
    initials: "B",
    community: "Partner community, Southwest Nigeria",
    excerpt:
      "\"The screening caught what I could not see. The clinic had her treatment ready.\"",
    situation:
      "Blessing's daughter seemed lively, so she never suspected malnutrition — until a routine HPTF growth-monitoring session flagged severe wasting.",
    intervention:
      "Our team referred her the same week to a partner clinic, with transport support, where her daughter began ready-to-use therapeutic food treatment.",
    outcome:
      "Her daughter completed treatment and remains in the follow-up programme, and Blessing now brings other mothers to every screening round.",
    program: "Maternal & Child Health",
  },
];
