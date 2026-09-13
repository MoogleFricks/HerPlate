import type { ReactNode } from "react";
import type { ImpactImage } from "@/content/images";

export function StatBar({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-4xl font-bold text-accent-500">
            {stat.value}
          </p>
          <p className="mt-1 text-sm font-medium text-stone-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function PlaceholderImage({
  label,
  className = "",
  children,
  image,
}: {
  label: string;
  className?: string;
  children?: ReactNode;
  image?: ImpactImage;
}) {
  return (
    <div
      className={`relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 via-brand-50 to-accent-100 ${className}`}
    >
      {image ? (
        <>
          <img src={image.src} alt={image.alt} className="size-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 text-white">
            <p className="text-xs font-medium">{image.credit}</p>
            <a href={image.source} target="_blank" rel="noreferrer" className="text-[11px] underline underline-offset-2">
              View source
            </a>
          </div>
        </>
      ) : (
        <div className="px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">Photo</p>
          <p className="mt-1 text-sm text-stone-500">{label}</p>
          {children}
        </div>
      )}
    </div>
  );
}
