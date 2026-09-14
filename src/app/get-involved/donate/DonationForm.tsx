"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { donationTiers } from "@/content/site";
import { fundSlug, programs } from "@/content/programs";

const fundLabels: Record<string, string> = Object.fromEntries(
  programs.map((program) => [fundSlug(program.fund), program.fund])
);

export function DonationForm() {
  return (
    <Suspense fallback={null}>
      <DonationFormInner />
    </Suspense>
  );
}

function DonationFormInner() {
  const searchParams = useSearchParams();
  const fundParam = searchParams.get("fund");

  const [amount, setAmount] = useState<string>("₦25,000");
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [fund, setFund] = useState("general");

  useEffect(() => {
    // Sync the URL ?fund= param into state after hydration (deep links from
    // program pages). Can't be a lazy useState initializer because the
    // prerendered HTML has no query params.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (fundParam && fundLabels[fundParam]) setFund(fundParam);
  }, [fundParam]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
    >
      {/* Frequency */}
      <div className="inline-flex rounded-full bg-brand-50 p-1">
        {(["once", "monthly"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFrequency(option)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              frequency === option
                ? "bg-brand-700 text-white"
                : "text-brand-800 hover:text-brand-900"
            }`}
          >
            {option === "once" ? "Give once" : "Give monthly"}
          </button>
        ))}
      </div>

      {/* Amounts */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {donationTiers.map((tier) => (
          <button
            key={tier.amount}
            type="button"
            onClick={() => {
              setAmount(tier.amount);
              setCustom("");
            }}
            className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-colors ${
              amount === tier.amount && !custom
                ? "border-brand-700 bg-brand-50 text-brand-900"
                : "border-stone-300 text-stone-600 hover:border-brand-400"
            }`}
          >
            {tier.amount}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <label htmlFor="custom-amount" className="sr-only">
          Custom amount
        </label>
        <input
          id="custom-amount"
          inputMode="decimal"
          placeholder="Other amount (₦)"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </div>

      {/* Fund designation */}
      <div className="mt-5">
        <label
          htmlFor="fund"
          className="mb-1.5 block text-sm font-medium text-stone-700"
        >
          Direct my gift to
        </label>
        <select
          id="fund"
          value={fund}
          onChange={(e) => setFund(e.target.value)}
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        >
          <option value="general">Where it&apos;s needed most (General Fund)</option>
          {Object.entries(fundLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-accent-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-600"
      >
        Donate {custom ? custom : amount} {frequency === "monthly" ? "monthly" : "now"}
      </button>
      <p className="mt-3 text-center text-xs text-stone-500">
        Demo form — wire this button to Paystack/Flutterwave checkout before
        launch.
      </p>
    </form>
  );
}
