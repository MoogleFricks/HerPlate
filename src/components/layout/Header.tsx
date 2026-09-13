"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LogoMark } from "@/components/brand/LogoMark";
import { site } from "@/content/site";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved/donate", label: "Get Involved" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="size-9" />
          <span className="font-display text-lg font-bold text-brand-900">
            {site.shortName}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-brand-100 text-brand-900"
                  : "text-stone-600 hover:bg-brand-50 hover:text-brand-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/get-involved/donate"
            variant="accent"
            className="hidden sm:inline-flex"
          >
            Donate
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-brand-900 hover:bg-brand-50 lg:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-brand-100 bg-cream px-4 pt-2 pb-4 lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base font-medium ${
                isActive(item.href)
                  ? "bg-brand-100 text-brand-900"
                  : "text-stone-700 hover:bg-brand-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href="/get-involved/donate"
            variant="accent"
            className="mt-3 w-full"
          >
            Donate
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
