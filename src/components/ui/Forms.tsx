"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const fieldClasses =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

export function Field({
  label,
  htmlFor,
  children,
  required,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-stone-700"
      >
        {label}
        {required && <span className="text-accent-600"> *</span>}
      </label>
      {children}
    </div>
  );
}

export function FormShell({
  children,
  successMessage,
  submitLabel = "Submit",
}: {
  children: ReactNode;
  successMessage: string;
  submitLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-sm text-brand-800">
        {successMessage}
      </div>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {children}
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
      >
        {submitLabel}
      </button>
    </form>
  );
}

export { fieldClasses };
