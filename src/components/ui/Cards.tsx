import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/StatBar";
import type { Program } from "@/content/programs";
import type { Story } from "@/content/stories";
import type { Post } from "@/content/posts";
import { impactImages } from "@/content/images";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span
        aria-hidden
        className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-2xl"
      >
        {program.emoji}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold text-brand-900">
        {program.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
        {program.summary}
      </p>
      <Link
        href={`/programs/${program.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
      >
        Learn more <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

export function StoryCard({ story }: { story: Story }) {
  return (
    <figure className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
      <PlaceholderImage
        label="Beneficiary photo (with consent)"
        className="mb-5 aspect-16/10"
        image={impactImages.maternalNutrition}
      />
      <blockquote className="flex-1 text-sm leading-relaxed text-stone-700">
        &quot;{story.excerpt.replace(/^"|"$/g, "")}&quot;
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-brand-800">
        {story.name}
        <span className="block text-xs font-normal text-stone-500">
          {story.community}
        </span>
      </figcaption>
    </figure>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {post.category}
      </span>
      <h3 className="mt-3 font-display text-lg font-bold text-brand-900 group-hover:text-brand-700">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
        {post.excerpt}
      </p>
      <p className="mt-4 text-xs text-stone-500">
        {new Date(post.date).toLocaleDateString("en-NG", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {post.author}
      </p>
    </Link>
  );
}
