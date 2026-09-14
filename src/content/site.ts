export const site = {
  name: "Her Plate, Their Future Initiative",
  shortName: "HPTF",
  tagline: "Nourishing Women. Nourishing Children.",
  description:
    "HPTF Initiative is a Nigerian non-profit improving nutrition, food security and wellbeing among women, girls and children, particularly those in vulnerable and underserved communities.",
  email: "herplatetheirfutureinitiative@gmail.com",
  phone: "0903 909 4960",
  address: "Kaduna State, Kaduna, Nigeria",
  registration:
    "Registration / CAC No.: RC-000000 (replace with HPTF's registered number)",

  mission:
    "To improve nutrition, food security and wellbeing among women, girls and children through community-based nutrition education, empowerment, early identification and referral of nutrition problems, advocacy, and practical food-security interventions.",
  vision:
    "A future where every woman, girl and child has access to adequate nutrition, opportunity and the conditions needed to live a healthy and dignified life.",
  approach:
    "We work with communities, healthcare providers, schools, government agencies, NGOs, development partners and local stakeholders to develop practical, community-driven solutions to malnutrition and food insecurity.",
  coreMessage:
    "When we nourish and empower women and girls, we create healthier children, stronger families and a better future.",

  socials: [
    { label: "Facebook", href: "https://www.facebook.com/share/19nTK8VmkD/" },
    { label: "X (Twitter)", href: "https://x.com/HerPlateFuture" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/herplatetheirfututure?utm_source=qr&stkn=MXBhNzhtczZqbWwyMQ==",
    },
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
