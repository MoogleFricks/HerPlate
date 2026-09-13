import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-display text-6xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-brand-900">
        This page is empty — like a plate should never be
      </h1>
      <p className="mt-4 text-stone-600">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex gap-4">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/get-involved/donate" variant="outline">
          Donate
        </ButtonLink>
      </div>
    </section>
  );
}
