export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Asma'u Adam",
    role: "Founder & Executive Director",
    bio: "A Nutrition & Dietetics graduate, climate-change advocate, and founder of Nernerh Agri-Fresh Nutrition, Asma'u leads HPTF's work to nourish women and children in Kaduna and beyond.",
    initials: "AA",
    photo: "/asmau.svg",
  },
  {
    name: "[Trustee Name]",
    role: "Board Chair",
    bio: "Placeholder bio — governance and community-development background.",
    initials: "TN",
  },
  {
    name: "[Program Lead Name]",
    role: "Programs Lead",
    bio: "Placeholder bio — nutrition/public health programme management experience.",
    initials: "PL",
  },
  {
    name: "[Partnerships Lead Name]",
    role: "Partnerships & Fundraising Lead",
    bio: "Placeholder bio — institutional partnerships and donor relations.",
    initials: "PN",
  },
];
