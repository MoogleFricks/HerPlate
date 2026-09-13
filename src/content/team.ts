export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "[Founder Name]",
    role: "Founder & Executive Director",
    bio: "Placeholder bio — one or two lines on background and what drives her work.",
    initials: "FN",
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
    title: "Community-based",
    description:
      "We work through trusted local facilitators and existing community structures rather than parachuting in.",
  },
  {
    title: "Partnership model",
    description:
      "We partner with clinics, schools, cooperatives, and government primary healthcare so impact continues beyond our direct reach.",
  },
  {
    title: "Evidence-based",
    description:
      "Our curriculum and screening protocols follow WHO and national health guidance, and we measure outcomes, not just activity.",
  },
];
