import type { Metadata } from "next";
import { PageHero } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DonationForm } from "./DonationForm";
import { donationTiers, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Fund nutrition education, food security, and maternal & child health programs. One-time or monthly giving, secured payments.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Give a family a stronger plate"
        description="Every donation funds practical, measured work: classes taught, gardens planted, children screened and treated."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              What your gift does
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {donationTiers.map((tier) => (
                <div
                  key={tier.amount}
                  className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
                >
                  <p className="font-display text-2xl font-bold text-accent-600">
                    {tier.amount}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {tier.impact}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold text-brand-900">
              Choose an amount
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Give once, or become a monthly donor and sustain the work all
              year. All amounts are placeholders — confirm real tiers before
              launch.
            </p>
            <div className="mt-6">
              <DonationForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-brand-900 p-6 text-white">
              <h3 className="font-display text-lg font-bold text-accent-300">
                Secure payments
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-200">
                Online donations are processed by a PCI-DSS compliant provider
                (e.g. Paystack or Flutterwave — confirm before launch). We never
                see or store your card details.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-brand-900">
                Corporate & major gifts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                For gifts above ₦1,000,000, multi-year commitments, or in-kind
                contributions, contact us directly to design the partnership.
              </p>
              <ButtonLink href="/get-involved/partner" variant="outline" className="mt-4">
                Talk to our partnerships team
              </ButtonLink>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <h3 className="font-display text-lg font-bold text-brand-900">
                Where the money goes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                [X]% of spending goes directly to programs. See our published
                reports for the full breakdown.
              </p>
              <ButtonLink href="/impact" variant="ghost" className="mt-2 -ml-4">
                View our reports →
              </ButtonLink>
            </div>
            <p className="text-xs text-stone-500">
              Questions about giving? Email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-brand-700 underline"
              >
                {site.email}
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
