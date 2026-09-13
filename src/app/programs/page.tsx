import type { Metadata } from "next";
import { PageHero } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/StatBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { programs } from "@/content/programs";
import { impactImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "HPTF's flagship programs: community nutrition education, household food security, and maternal & child health.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="From knowledge to resilience"
        description="HPTF works across three integrated areas — nutrition education, food security, and maternal & child health — because a well-fed child needs all three."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <PlaceholderImage
                label={`${program.name} — program photo (with consent)`}
                image={index === 0 ? impactImages.nutrition : index === 1 ? impactImages.foodSecurity : impactImages.learning}
              />
              <div>
                <span aria-hidden className="text-3xl">
                  {program.emoji}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-brand-900 sm:text-3xl">
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
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`/programs/${program.slug}`}>
                    Learn more
                  </ButtonLink>
                  <ButtonLink
                    href={`/get-involved/donate?fund=${program.fund
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    variant="outline"
                  >
                    Support this program
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
