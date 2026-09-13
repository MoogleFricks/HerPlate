import type { Metadata } from "next";
import { PageHero } from "@/components/ui/Section";
import { VolunteerForm } from "./VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join HPTF as a volunteer — screenings, workshops, logistics, storytelling, and more.",
};

const roles = [
  {
    title: "Program Support Volunteer",
    commitment: "1–2 days/month, community-based",
    description:
      "Help run nutrition classes, screenings, and distribution days alongside our field team.",
  },
  {
    title: "Skilled / Technical Volunteer",
    commitment: "Flexible, project-based",
    description:
      "Design, data, photography, translation, or clinical skills — support specific projects remotely or on-site.",
  },
  {
    title: "Campus & Community Ambassador",
    commitment: "Ongoing, self-paced",
    description:
      "Represent HPTF in your school, workplace, or community — run drives, share stories, fundraise.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Give your time, change a table"
        description="Volunteers are the backbone of our community work — most of our facilitators started as volunteers."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900">
              Volunteer roles
            </h2>
            <div className="mt-6 space-y-4">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-brand-900">
                      {role.title}
                    </h3>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {role.commitment}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold text-brand-900">
              What to expect
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
              <li>
                <strong className="text-brand-800">1. Apply.</strong> Fill the
                form on this page — it takes about five minutes.
              </li>
              <li>
                <strong className="text-brand-800">2. Orientation.</strong> We
                review applications monthly; every volunteer completes an
                orientation covering safeguarding and community etiquette.
              </li>
              <li>
                <strong className="text-brand-800">3. Placement.</strong> We
                match you to a role and community based on skills and
                availability.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              Apply to volunteer
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Fields marked * are required.
            </p>
            <div className="mt-6">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
