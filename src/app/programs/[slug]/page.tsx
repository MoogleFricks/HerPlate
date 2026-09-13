import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/StatBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getProgram, programs } from "@/content/programs";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return { title: "Program not found" };
  return { title: program.name, description: program.summary };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <PageHero
        eyebrow={program.tagline}
        title={program.name}
        description={program.summary}
      >
        <ButtonLink
          href={`/get-involved/donate?fund=${program.fund
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          variant="accent"
          size="lg"
        >
          Support this program
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              The problem
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {program.problem}
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-brand-900">
              What HPTF does
            </h2>
            <ul className="mt-4 space-y-3">
              {program.activities.map((activity) => (
                <li
                  key={activity}
                  className="flex gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-stone-700 shadow-sm"
                >
                  <span aria-hidden className="text-brand-500">
                    ✓
                  </span>
                  {activity}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-bold text-brand-900">
              Results so far
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {program.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-xl border border-brand-100 bg-brand-50 p-4 text-sm font-medium text-brand-800"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <PlaceholderImage label="Hero image (with consent)" />
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-brand-900">
                Who it serves
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {program.serves}
              </p>
            </div>
            <div className="rounded-2xl bg-brand-900 p-6 text-white">
              <h3 className="font-display text-lg font-bold text-accent-300">
                {program.fund}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-200">
                Donations to this fund go directly to {program.name.toLowerCase()}{" "}
                activities. Restricted giving is reported against the fund you
                choose.
              </p>
              <ButtonLink
                href={`/get-involved/donate?fund=${program.fund
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                variant="accent"
                className="mt-4 w-full"
              >
                Give to this fund
              </ButtonLink>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-brand-100 pt-10">
          <h2 className="font-display text-xl font-bold text-brand-900">
            Explore our other programs
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/programs/${other.slug}`}
                className="rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
              >
                {other.emoji} {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
