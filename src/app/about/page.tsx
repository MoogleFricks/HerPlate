import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/StatBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { team } from "@/content/team";
import { values, approachItems } from "@/content/programs";
import { site } from "@/content/site";
import { impactImages } from "@/content/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story, mission, vision, values, team, and how HPTF works with communities.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built with communities, for communities"
        description="Her Plate, Their Future Initiative exists because malnutrition is solvable — when solutions are designed with the women who carry the problem every day."
      />

      {/* Our Story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              Our story
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
              Why HPTF was founded
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-stone-600">
              <p>
                Her Plate, Their Future Initiative is a Nigerian non-profit
                organisation focused on improving nutrition, food security and
                wellbeing among women, girls and children — particularly those
                living in vulnerable and underserved communities.
              </p>
              <p>
                The Initiative recognises that women and girls play a major
                role in household nutrition, and that improving their access to
                nutrition knowledge, opportunities and resources contributes to
                healthier children, stronger families and more resilient
                communities.
              </p>
              <p>
                [Add HPTF&apos;s founding story here — what the founder saw in the
                community, the gap between what families needed and what
                services reached them, and how the first activities grew into
                today&apos;s six areas of focus.]
              </p>
            </div>
          </div>
          <PlaceholderImage label="Founding team / early program photo (with consent)" image={impactImages.learning} />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-accent-300">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                {site.mission}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-accent-300">
                Our Vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                {site.vision}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-brand-700 bg-brand-800/60 p-6"
              >
                <h3 className="font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Our team"
          title="The people behind the work"
          description="Replace placeholders with leadership photos, names, and one-line bios."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-sm"
            >
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  className="mx-auto aspect-[3/4] w-28 rounded-2xl object-cover object-top shadow-sm"
                />
              ) : (
                <div
                  aria-hidden
                  className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-100 font-display text-2xl font-bold text-brand-700"
                >
                  {member.initials}
                </div>
              )}
              <h3 className="mt-4 font-semibold text-brand-900">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent-600">
                {member.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-brand-50 p-6 text-center text-sm text-stone-600">
          <strong className="text-brand-900">Board of Trustees:</strong>{" "}
          Optional section — add trustee names and roles here once confirmed.
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Our approach"
            title="What makes HPTF different"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-stone-600">
            {site.approach}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-100 bg-cream p-6"
              >
                <h3 className="font-display text-lg font-bold text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-brand-50 p-8 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Her Plate, Their Future Initiative logo"
              className="mx-auto mb-4 h-36 w-auto"
            />
            <p className="font-display text-xl leading-relaxed text-brand-900 sm:text-2xl">
              &ldquo;{site.coreMessage}&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-accent-600">
              Our core message
            </p>
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/programs" variant="primary" size="lg">
              See our programs
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
