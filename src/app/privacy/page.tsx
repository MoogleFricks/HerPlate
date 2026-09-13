import type { Metadata } from "next";
import { PageHero } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Replace this placeholder with HPTF's reviewed privacy policy before launch."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 leading-relaxed text-stone-600">
          <p>
            {site.name} (&quot;HPTF&quot;, &quot;we&quot;) respects your privacy. This placeholder
            page outlines the categories of personal data we collect and how we
            use it. Have the final version reviewed legally before publishing.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-brand-900">
            What we collect
          </h2>
          <p>
            Contact details you give us through forms (donations, volunteer
            applications, partnership inquiries, newsletter signup), and basic
            usage data from the site.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-brand-900">
            How we use it
          </h2>
          <p>
            To process donations and issue receipts, respond to inquiries,
            manage volunteer onboarding, and — with your consent — send our
            newsletter. We never sell your data.
          </p>
          <h2 className="pt-4 font-display text-xl font-bold text-brand-900">
            Your rights
          </h2>
          <p>
            You can request access, correction, or deletion of your data at any
            time by emailing {site.email}. Beneficiary information is collected
            under separate consent protocols tied to our safeguarding policy.
          </p>
        </div>
      </section>
    </>
  );
}
