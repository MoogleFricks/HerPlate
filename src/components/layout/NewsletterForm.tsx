"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="mt-4 rounded-xl bg-brand-900 px-4 py-3 text-sm text-accent-200">
        Thank you — please check your inbox to confirm your subscription.
      </p>
    );
  }

  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full min-w-0 rounded-full border border-brand-700 bg-brand-900 px-4 py-2.5 text-sm text-white placeholder:text-brand-300 focus:border-accent-400 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
