export function FaqAccordion({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-brand-900 [&::-webkit-details-marker]:hidden">
            {faq.q}
            <span
              aria-hidden
              className="shrink-0 text-accent-600 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
