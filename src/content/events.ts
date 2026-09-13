export type EventItem = {
  title: string;
  date: string;
  dateLabel: string;
  location: string;
  description: string;
  cta: string | null;
  ctaHref: string | null;
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    title: "Community Screening Day — [Community Name]",
    date: "2026-10-11",
    dateLabel: "11 October 2026",
    location: "[Community], Nigeria",
    description:
      "Free growth monitoring and malnutrition screening for children under five, plus nutrition counselling for caregivers.",
    cta: "Register / RSVP",
    ctaHref: "/contact",
    status: "upcoming",
  },
  {
    title: "World Food Day Outreach",
    date: "2026-10-16",
    dateLabel: "16 October 2026",
    location: "[Location], Nigeria",
    description:
      "Marking World Food Day with a community meal, cooking demonstration, and launch of the next home garden cohort.",
    cta: "Partner with us for this event",
    ctaHref: "/get-involved/partner",
    status: "upcoming",
  },
  {
    title: "Volunteer Orientation (Q4 Cohort)",
    date: "2026-09-27",
    dateLabel: "27 September 2026",
    location: "Hybrid — Lagos + online",
    description:
      "Onboarding for new volunteers: safeguarding, community etiquette, and programme overviews.",
    cta: "Apply to volunteer",
    ctaHref: "/get-involved/volunteer",
    status: "upcoming",
  },
  {
    title: "Launch of Household Food Security Program",
    date: "2026-05-09",
    dateLabel: "9 May 2026",
    location: "[Community], Nigeria",
    description:
      "First distribution of home garden starter kits to 50 households, with training from our agriculture partners.",
    cta: "Read the recap",
    ctaHref: "/news",
    status: "past",
  },
];
