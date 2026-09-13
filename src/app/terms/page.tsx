import type { Metadata } from "next";
import { PageHero } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Replace this placeholder with HPTF's reviewed terms before launch."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 leading-relaxed text-stone-600">
          <p>
            By using this website you agree to these placeholder terms. The
            final version should be reviewed legally before launch.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-brand-900">
            Content
          </h2>
          <p>
            Text and images on this site belong to {site.name} or are used with
            consent. Beneficiary images and stories may not be reproduced
            without written permission.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-brand-900">
            Donations
          </h2>
          <p>
            Donations are voluntary and, in line with our transparency
            commitment, directed to the fund you choose wherever possible while
            remaining flexible enough to respond to the greatest need.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-brand-900">
            Liability
          </h2>
          <p>
            Educational content on this site is general information, not
            medical advice. For individual health concerns, consult a qualified
            health worker.
          </p>
        </div>
      </section>
    </>
  );
}
