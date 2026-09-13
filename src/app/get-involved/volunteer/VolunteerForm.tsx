"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-sm text-brand-800">
        Thank you for applying! We review applications monthly and will reach
        out about the next orientation.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="vol-name" className="mb-1.5 block text-sm font-medium text-stone-700">
          Full name <span className="text-accent-600">*</span>
        </label>
        <input id="vol-name" required className={inputClasses} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vol-email" className="mb-1.5 block text-sm font-medium text-stone-700">
            Email <span className="text-accent-600">*</span>
          </label>
          <input id="vol-email" type="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="vol-phone" className="mb-1.5 block text-sm font-medium text-stone-700">
            Phone
          </label>
          <input id="vol-phone" type="tel" className={inputClasses} />
        </div>
      </div>
      <div>
        <label htmlFor="vol-skills" className="mb-1.5 block text-sm font-medium text-stone-700">
          Skills & interests
        </label>
        <textarea
          id="vol-skills"
          rows={3}
          placeholder="e.g. nutrition background, photography, data entry, teaching…"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="vol-availability" className="mb-1.5 block text-sm font-medium text-stone-700">
          Availability <span className="text-accent-600">*</span>
        </label>
        <select id="vol-availability" required className={inputClasses}>
          <option value="">Select…</option>
          <option>Weekdays only</option>
          <option>Weekends only</option>
          <option>Both weekdays and weekends</option>
          <option>Remote / flexible</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
      >
        Submit application
      </button>
    </form>
  );
}
