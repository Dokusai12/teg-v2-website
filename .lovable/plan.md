# Tego Group — V2

No new sections of the site, no blog, no news. Same pages, same navigation, same products. V2 is about the existing site looking and reading like a mature company: a stronger design system, a much better bento/product presentation, smoother motion, and pages that are properly full instead of thin.

## What's weak today (from the live site)

- The homepage is a hero, a bento, some stats, sectors, CTA — it ends quickly. There's no middle: no problem framing, no "how it works", no proof, no objection handling.
- The bento is four cards of unequal quality: one big dark card carries the design, the other three are near-identical bordered boxes with small mockups.
- Product pages are short. A visitor who clicks "Refund Shield" gets a fraction of what they need to take it seriously.
- Visually it's competent but generic-SaaS: one blue accent, purple/blue blobs, uniform white sections, one card style, everything the same weight.
- Motion is fixed-delay fades that all look alike.

## 1. Design system, evolved

- **Typography.** A real scale (display / h1 / h2 / h3 / lead / body / caption) with tighter tracking on large headings, replacing the ad-hoc `text-[17px]` values scattered through components. Tabular numerals for stats, metrics and prices so dashboards and figures line up.
- **Colour.** Keep the blue. Add a deep "ink" navy for authority bands, a muted signal green for positive metrics (currently hardcoded HSL), and slightly warmer neutrals so white sections stop feeling clinical. Retire the purple/magenta blobs — the ambient field becomes brand-blue and much more restrained.
- **Surfaces.** Three defined card elevations instead of one bordered box; a single radius scale; hairline borders; a subtle grid/noise texture on dark bands. Alternating light and ink sections give the page rhythm instead of one long white scroll.
- **Detail.** Consistent icon stroke weight, one shared kit for charts/meters/checkout mockups, refined focus and hover states everywhere.

## 2. Bento, rebuilt

The product grid is the centrepiece and gets the most attention:

- Deliberate asymmetry — a hero cell, a tall cell, two wide cells — instead of one big card plus three lookalikes.
- Every cell gets a real visual: an animated attach-rate meter, a baggage claim flow, a live flight-status strip, a bundle price stack. Each drawn from the shared visual kit so they read as one family.
- Cells respond on hover: the visual advances a step, the card lifts, the CTA arrow resolves.
- Mixed treatments — ink cells, tinted cells, glass cells — so scanning the grid feels designed, not templated.
- A second, lighter bento on the homepage for capabilities/why-Tego, reusing the same primitives.

## 3. Motion pass

- One scroll-choreography system replacing the current fixed-delay reveals: shared easing, staggered in parallel, nothing feels like it's waiting its turn.
- Scroll-driven moments where they earn it — the integration steps advancing as you scroll, counters counting once, the checkout mockup assembling itself.
- Micro-interactions on one timing token set: nav dropdown, card lift, button press, tab switch.
- `prefers-reduced-motion` respected and the existing mobile performance guards kept.

## 4. Fuller pages (same pages, more substance)

**Homepage** — the middle of the page gets built out: hero → trusted-by → the problem (ancillary revenue left on the table, framed with real numbers) → rebuilt product bento → how integration works, 3 steps → proof/metrics band on ink → industries → objection-handling FAQ → CTA.

**Product pages** (Refund Shield, Baggage Shield, Air Shield, Bundles) — each becomes a full page with a consistent template: what it is, who it's for, the customer's experience end to end, how you earn, integration snippet, coverage and eligibility, the claims journey, FAQ, related products, CTA.

**Industry pages** (six existing) — same treatment via a shared template: sector-specific pain, which products fit, an example journey, relevant metrics, FAQ, CTA. Today they're mostly a hero plus a couple of blocks.

**About** — company timeline, leadership, values, what it's like to work with Tego, credibility markers.

**Contact** — becomes a proper conversion page: segmented intent, qualifying fields, what-happens-next timeline, response-time promise. Same static submission behaviour as today.

**Careers and legal pages** — brought onto the new typography and layout system so they stop looking like an afterthought.

## 5. Copy

I draft all the new copy in a confident, specific B2B voice. Anywhere a fact is needed that I can't verify — client names, real percentages, quotes, certifications — it goes in as an obvious placeholder rather than an invented claim.

## 6. SEO and quality

- Unique title/description/OG per page, single H1 per page, semantic sections, Organization + Product JSON-LD.
- Accessibility pass on the new interactive pieces: focus states, contrast, keyboard nav.
- Performance kept in budget; existing mobile optimisations preserved and extended to the new sections.

## Technical notes

- Stack unchanged: React + Vite + Tailwind + shadcn + React Router. No backend, no CMS, no new routes.
- Tokens extended in `src/index.css` (`--ink`, `--signal`, elevation and motion tokens). Components consume tokens only — the hardcoded `hsl(145 60% 40%)`-style values get replaced.
- The `.r / .rl / .rr / .rs` reveal utilities are consolidated into one observer-driven system with shared easing tokens.
- New shared primitives (reused across pages, not new pages): `Section`, `SectionHeading`, `BentoCell`, `StatBlock`, `StepFlow`, `FaqAccordion`, `ProductPageTemplate`, `IndustryPageTemplate`.
- Page copy moves into typed data modules under `src/data/` (mirroring the existing careers pattern) so text edits never touch layout.

## Build order

1. Tokens, typography scale, motion system, shared primitives.
2. Homepage: rebuilt bento + the new middle sections.
3. Product pages on the new template.
4. Industry pages on the new template.
5. About, Contact, Careers, legal.
6. SEO, accessibility, performance QA.

You can review after step 2 and steer the whole direction before the rest follows.
