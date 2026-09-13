import Link from "next/link";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { LogoMark } from "@/components/brand/LogoMark";
import { site } from "@/content/site";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/news", label: "News & Resources" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
];

const involvedLinks = [
  { href: "/get-involved/donate", label: "Donate" },
  { href: "/get-involved/volunteer", label: "Volunteer" },
  { href: "/get-involved/partner", label: "Partner With Us" },
];

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <LogoMark className="size-9" />
              <span className="font-display text-lg font-bold text-white">
                {site.shortName}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-200">
              {site.description}
            </p>
            <p className="mt-3 font-display text-sm italic text-accent-300">
              {site.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-300">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {involvedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-300">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-brand-200">
              Program updates and practical nutrition tips, once a month. No
              spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-800 pt-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.registration}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
      <div aria-hidden className="h-1 w-full bg-accent-400" />
    </footer>
  );
}
