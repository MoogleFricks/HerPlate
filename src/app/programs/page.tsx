import type { Metadata } from "next";
import { PageHero } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { fundSlug, programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "HPTF's key areas of focus: maternal nutrition, girls' nutrition & empowerment, child nutrition, food security & zero hunger, women's economic empowerment, and nutrition advocacy & research.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="From a mother's plate to national policy"
        description="Six integrated areas of focus — nutrition care for women and children, food security, economic empowerment, and the evidence and advocacy that scale what works."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <span aria-hidden className="text-3xl">
                {program.emoji}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-brand-900 sm:text-2xl">
                {program.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-accent-600">
                {program.tagline}
              </p>
              <p className="mt-4 leading-relaxed text-stone-600">
                {program.summary}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-stone-600">
                {program.activities.slice(0, 3).map((activity) => (
                  <li key={activity} className="flex gap-2">
                    <span aria-hidden className="text-brand-500">
                      ✓
                    </span>
                    {activity}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-brand-50 pt-5 [margin-top:auto]">
                <ButtonLink href={`/programs/${program.slug}`}>
                  Learn more
                </ButtonLink>
                <ButtonLink
                  href={`/get-involved/donate?fund=${fundSlug(program.fund)}`}
                  variant="outline"
                >
                  Support this program
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
