# Tego Group — V2

Same brand, same product story. V2 makes the site read like an established fintech-grade infrastructure company rather than a well-designed startup page: an evolved design system, far deeper content on every page, and a real conversion path from first scroll to booked call. Everything stays static — no backend, no CMS.

## 1. Evolved design system

Not a rebrand. The blue accent, the wordmark and the clean light surface stay. What changes:

- **Typography scale.** A proper display/body split with tighter tracking on large headings, a defined scale (display / h1 / h2 / h3 / lead / body / caption) applied consistently instead of ad-hoc `text-[17px]` values. Numerals aligned for stats and pricing.
- **Palette depth.** The single flat accent becomes a small system: primary blue, a deeper "ink" navy for authority surfaces, a muted signal green for positive metrics, and warmer neutrals so white sections stop feeling clinical. Dark "ink" bands break the page rhythm between light sections.
- **Surfaces.** Consistent card system (three elevations), one radius scale, subtler borders, and a hairline grid/noise texture on dark bands. Retire the three-blob purple mesh in favour of a restrained, brand-blue ambient field.
- **Iconography and data visuals.** One consistent stroke weight; charts, meters and checkout mockups all drawn from a shared visual kit instead of each section inventing its own.

## 2. Motion pass

- Replace the current fixed-delay entrance with a single scroll-choreography system: staggered reveals with a shared easing curve, parallel not sequential, so nothing feels like it's waiting.
- Sticky/scroll-driven moments on key sections — the "how it works" flow advancing as you scroll, counters that count once, a checkout mockup that assembles itself.
- Micro-interactions: nav dropdown, card hover lift, button press, tab switches, all on one timing token set.
- Full `prefers-reduced-motion` support and mobile-cheap variants preserved.

## 3. Deeper content

**Homepage** — reordered into a real narrative: hero → trusted-by → the problem (ancillary revenue left on the table) → product suite → how integration works (3 steps, technical but readable) → proof/metrics → industries → objection-handling FAQ → CTA.

**Product pages** (Refund Shield, Baggage Shield, Air Shield, Bundles) — each grows into a full page: what it is, who it's for, how the customer experiences it, how you earn, integration snippet, coverage/eligibility detail, claims journey, FAQ, related products, CTA.

**New pages**
- **How it works / Integration** — the technical story: integration models (hosted, API, redirect), a sample flow, go-live timeline, support model. This is the page that makes buyers trust you.
- **Why Tego** — differentiators, economics, service standards, what happens after signature.
- **Security, compliance & governance** — hub that also gathers the existing anti-bribery, modern slavery and privacy pages under one credible roof.
- **Industries index** — a real landing page above the six existing industry pages.
- **FAQ** — consolidated, searchable by section.

**Existing pages levelled up** — About gains a company timeline, leadership and values; Careers gains culture, benefits and process; Contact becomes a proper conversion page.

## 4. Conversion machinery

- **Revenue estimator** — visitor enters bookings/month and average order value, gets an estimated annual ancillary revenue range with assumptions shown. Client-side only, no data stored. The single strongest addition for a B2B site like this.
- **Contact page rebuilt** — segmented intent (partnership / support / press), qualifying fields, what-happens-next timeline, response-time promise. Same static submission behaviour as today.
- **CTA discipline** — one primary CTA per page plus a persistent, unobtrusive secondary path; sticky CTA bar on long product pages; contextual CTAs at the end of each major section instead of only at the bottom.
- **Trust surfaces** — placeholder-marked slots for logos, testimonials and case-study results, wired and styled so real assets drop straight in.

## 5. Copy

I draft all new copy in a consistent, confident B2B voice. Every place that needs a fact I can't verify (client names, real percentages, quotes, certifications) gets an obvious placeholder rather than an invented claim, so nothing goes live unchecked.

## 6. SEO and technical

- Unique title/description/OG per page, single H1, semantic sections, JSON-LD (Organization, Product, FAQ), breadcrumbs.
- Image and animation budget kept in check; the existing mobile performance work is preserved and extended to the new sections.
- Accessibility pass: focus states, contrast, keyboard nav on the new interactive pieces.

## Technical notes

- React + Vite + Tailwind + shadcn, React Router — unchanged. No new routing model, no backend.
- Design tokens centralised in `src/index.css` (extended HSL token set: `--ink`, `--signal`, elevation and motion tokens). Components consume tokens only — no hardcoded colours.
- Motion tokens (`--ease-brand`, duration steps) drive both CSS reveals and any component animation; the existing `.r/.rl/.rs` reveal utilities are refactored into one observer-driven system.
- New shared components: `Section`, `SectionHeading`, `StatBlock`, `FaqAccordion`, `StepFlow`, `PricingEstimator`, `TrustSlot`, `StickyCta`.
- New routes: `/how-it-works`, `/why-tego`, `/security`, `/industries`, `/faq`. Existing routes and redirects preserved.
- Content lives in typed data modules under `src/data/` (mirroring the existing careers pattern) so copy edits never touch layout code.

## Suggested build order

1. Design tokens, typography scale, motion system, shared components.
2. Homepage rebuild on the new system.
3. Product pages depth pass.
4. New pages (How it works, Why Tego, Security, Industries index, FAQ).
5. Conversion layer (estimator, contact rebuild, CTA discipline).
6. About/Careers/legal refresh, SEO, accessibility, performance QA.

Each step is reviewable on its own, so you can steer after seeing the homepage rather than at the end.
