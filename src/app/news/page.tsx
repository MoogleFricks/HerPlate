import type { Metadata } from "next";
import { PageHero } from "@/components/ui/Section";
import { NewsFilter } from "./NewsFilter";

export const metadata: Metadata = {
  title: "News & Resources",
  description:
    "Program updates, community stories, nutrition education, and press from HPTF.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & resources"
        title="Updates from the field"
        description="Program news, practical nutrition education, community stories, and press coverage."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <NewsFilter />
      </section>
    </>
  );
}
