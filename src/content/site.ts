export const site = {
  name: "Her Plate, Their Future Initiative",
  shortName: "HPTF",
  tagline: "Nourishing Women. Nourishing Children.",
  description:
    "HPTF improves nutrition, food security, and wellbeing for women, girls, and children in underserved Nigerian communities.",
  email: "hello@hptf.org",
  phone: "+234 (0) 000 000 0000",
  address: "Placeholder Address, Lagos, Nigeria",
  registration:
    "Registration / CAC No.: RC-000000 (replace with HPTF's registered number)",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "X (Twitter)", href: "https://x.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

export const donationTiers = [
  {
    amount: "₦5,000",
    impact: "Provides a nutrition starter kit for one mother and her infant.",
  },
  {
    amount: "₦25,000",
    impact: "Feeds a family of four for a month with staple food support.",
  },
  {
    amount: "₦50,000",
    impact: "Funds a community nutrition education workshop for 30 women.",
  },
  {
    amount: "₦250,000",
    impact: "Sponsors a school feeding pilot for a classroom for a full term.",
  },
] as const;
