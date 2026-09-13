import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui/Section";
import { StatBar, PlaceholderImage } from "@/components/ui/StatBar";
import { StoryCard } from "@/components/ui/Cards";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { impactStats, reports } from "@/content/impact";
import { stories } from "@/content/stories";
import { impactImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The numbers, the stories, and the financial transparency behind HPTF's work.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="Proof, not promises"
        description="We measure outcomes, not just activity — and we publish what we find, including when it falls short."
      />

      {/* Metrics dashboard */}
      <section className="border-b border-brand-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow="Key metrics"
            title="This year, at a glance"
            align="left"
          />
          <div className="mt-8">
            <StatBar stats={impactStats} />
          </div>
          <p className="mt-6 text-xs text-stone-500">
            Placeholder figures — updated quarterly with verified data.
            Optional: add an interactive map of program locations here.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Stories"
          title="In their words"
          description="Each story follows the same arc — the situation, what HPTF did, and what changed. Shared with consent; names changed where needed."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <div className="mt-12 space-y-8">
          {stories.map((story) => (
            <article
              key={story.slug}
              className="grid gap-6 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:grid-cols-3 sm:p-8"
            >
              <PlaceholderImage
                label="Photo (with consent)"
                className="sm:aspect-4/5"
                image={impactImages.maternalNutrition}
              />
              <div className="sm:col-span-2">
                <h3 className="font-display text-xl font-bold text-brand-900">
                  {story.name} — {story.community}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                  <p>
                    <strong className="text-brand-800">The situation. </strong>
                    {story.situation}
                  </p>
                  <p>
                    <strong className="text-brand-800">What HPTF did. </strong>
                    {story.intervention}
                  </p>
                  <p>
                    <strong className="text-brand-800">What changed. </strong>
                    {story.outcome}
                  </p>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent-600">
                  {story.program}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reports & transparency */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Reports & transparency"
            title="Where the money goes"
            description="[X]% of every naira goes directly to program costs. Replace with HPTF's actual program-vs-operations split, and publish it in every annual report."
          />
          <ul className="mx-auto mt-10 max-w-2xl divide-y divide-brand-100 rounded-2xl border border-brand-100">
            {reports.map((report) => (
              <li key={report.title}>
                <a
                  href={report.href}
                  className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-brand-50"
                >
                  <div>
                    <p className="font-semibold text-brand-900">
                      {report.title}
                    </p>
                    <p className="text-sm text-stone-500">{report.note}</p>
                  </div>
                  <span className="text-sm text-stone-500">{report.size}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <ButtonLink href="/get-involved/donate" variant="accent" size="lg">
              Fund this work
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
