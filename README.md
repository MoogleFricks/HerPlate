# Her Plate, Their Future Initiative (HPTF) — Website

Marketing/content site for HPTF, a nonprofit improving nutrition, food security, and wellbeing for women, girls, and children in underserved Nigerian communities.

## Tech Stack

- **[Next.js](https://nextjs.org) 16** (App Router) — static-first rendering, file-based routing
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `src/app/globals.css` via `@theme`)
- Fonts: Inter (body) + Playfair Display (display), self-hosted via `next/font`

No backend yet — forms are front-end only. See "Before launch" below.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (static export of all routes)
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # typecheck
```

## Project Structure

```
src/
├── app/                    # Routes (App Router)
│   ├── page.tsx            # Home
│   ├── about/              # Story, mission/vision/values, team, approach
│   ├── programs/           # Index + [slug] detail pages (6 key areas of focus)
│   ├── impact/             # Metrics, stories, reports & transparency
│   ├── get-involved/
│   │   ├── donate/         # Tiers + donation form (fund=? deep links)
│   │   ├── volunteer/      # Roles + application form
│   │   └── partner/        # Partnership types + inquiry form
│   ├── news/               # Blog listing (category filter) + [slug] template
│   ├── events/             # Upcoming + past events
│   ├── contact/            # Form, info, map placeholder, FAQ accordion
│   ├── privacy/ · terms/   # Legal placeholders
│   └── not-found.tsx
├── components/
│   ├── layout/             # Header (mobile nav), Footer, NewsletterForm
│   └── ui/                 # ButtonLink, Section/PageHero, StatBar,
│                           # PlaceholderImage, Cards, Forms primitives
└── content/                # ★ ALL site content lives here — edit these
    ├── site.ts             # Name, contacts, socials, donation tiers
    ├── programs.ts         # Program catalog (drives /programs/*)
    ├── stories.ts          # Beneficiary stories
    ├── team.ts             # Team, values, approach
    ├── posts.ts            # Blog posts (drives /news/*)
    ├── events.ts           # Upcoming/past events
    ├── faqs.ts             # Contact FAQ
    └── impact.ts           # Metrics + report links
```

## Editing Content

Pages render from `src/content/*.ts` — update data there, no component edits needed. Adding a blog post or program = adding an object to the array; routes are generated statically from those arrays.

Placeholders that must be replaced with real data are marked `[X]` or wrapped in `[brackets]`.

## Before Launch

- [ ] Replace all `[X]` metrics and `[bracketed]` placeholder copy with real data
- [ ] Add real photography (with consent) — replace `PlaceholderImage` blocks with `next/image`
- [ ] Wire the donation form to Paystack/Flutterwave checkout (PCI-DSS compliant)
- [ ] Point all forms at a backend or form service (currently front-end only)
- [ ] Confirm CAC/registration number and update `site.registration`
- [ ] Have legal review Privacy Policy and Terms pages
- [ ] Set the production domain in metadata + share URLs in the blog template

## Deployment

Any Node host or Vercel: `npm run build` produces a fully static site for all current routes.
