import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "accent" | "outline" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-700",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 focus-visible:outline-accent-600",
  outline:
    "border border-brand-700 text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-700",
  ghost:
    "text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-700",
};

const sizeClasses = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: keyof typeof sizeClasses;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
