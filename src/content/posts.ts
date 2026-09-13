export type Post = {
  slug: string;
  title: string;
  date: string;
  category:
    | "Program Updates"
    | "Community Stories"
    | "Nutrition Education"
    | "Press / Media"
    | "Events Recap";
  excerpt: string;
  author: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "first-nutrition-class-cycle",
    title: "Our first nutrition class cycle wraps up in [community]",
    date: "2026-08-20",
    category: "Program Updates",
    excerpt:
      "Eight weeks, [X] mothers, and one very loud graduation ceremony. Here is what we learned.",
    author: "HPTF Team",
    body: [
      "This is placeholder body copy. Replace with the real update: how many women completed the cycle, what the classes covered, and one or two moments that captured the community's response.",
      "Include a concrete outcome or quote from a participant, and close with what the next cycle will do differently based on what was learned.",
    ],
  },
  {
    slug: "reading-a-growth-chart",
    title: "How to read a child's growth chart (and when to worry)",
    date: "2026-07-14",
    category: "Nutrition Education",
    excerpt:
      "Growth monitoring only helps if caregivers understand it. A plain-language explainer we hand out at screenings.",
    author: "HPTF Team",
    body: [
      "This is placeholder body copy. Replace with the actual educational content: what the lines on a growth chart mean, what a crossed line signals, and the two or three actions a caregiver should take.",
      "Keep it practical and translated for the communities served — this category is where HPTF's expertise becomes visible to donors and partners.",
    ],
  },
  {
    slug: "home-garden-pilot-results",
    title: "Home garden pilot: what [X] households told us after six months",
    date: "2026-06-02",
    category: "Program Updates",
    excerpt:
      "Meals skipped, seeds saved, and the one input nobody expected to matter most.",
    author: "HPTF Team",
    body: [
      "This is placeholder body copy. Replace with the pilot's findings: participation rates, whether gardens survived the dry season, and quotes from two participating households.",
      "Close with how the findings will shape the next distribution round.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
