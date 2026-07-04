# CLAUDE.md

Instructions for Claude when working in this repository. Read this **before** writing or editing code.

## Project

Editorial site for Dr Yalda Jamali, Sydney cosmetic doctor.

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind 3 + custom utility classes in `src/app/globals.css`
- **Animation:** AOS (scroll-triggered fade-ins) + Lenis (smooth scroll), both initialised globally in `src/components/AOSInit.tsx`
- **Hosting:** Netlify (free plan — see Forms rule below; nothing on this site may incur Netlify usage charges)
- **Fonts:** "Heading" (custom serif, self-hosted at `/fonts/font.woff2`), Lato (Next.js Google Fonts), Marcellus, Hanken Grotesk
- **Source of truth for the brand:** `src/app/globals.css` — all design tokens live there

## How to use this file

Before writing any markup or styles, scan the **Design tokens** and **Components** sections below. If a token, utility class, or component already exists for what you're about to build, use it. Do not write parallel implementations.

If you can't find an existing token that fits, ask the user before introducing a new one. Adding raw `clamp(...)`, inline `style={{...}}` colours, or new utility classes in `globals.css` without checking is the most common drift pattern in this codebase.

## Design tokens

### Colours (Tailwind classes — preferred)

| Class | Hex | Use |
| --- | --- | --- |
| `bg-parchment` / `text-parchment` | `#F5F2EC` | Default page background — warm cream |
| `bg-cream` / `text-cream` | `#E9E3D8` | Slightly darker parchment — used for the CTA collage card |
| `bg-brand-black` / `text-brand-black` | `#2D2C2A` | Primary dark — text on parchment, dark sections |
| `bg-brand-charcoal` | `#222120` | Deepest dark — body background fallback |
| `bg-brand-white` / `text-brand-white` | `#F6F6F3` | Light text on dark sections |
| `border-brand-line` | `#C2C1BE` | Hairline dividers |
| `bg-brand-blue` / `text-brand-blue` | `#9BB9CB` | Accent — use sparingly |
| `bg-brand-blue-light` | `#B9D3DF` | Lighter accent |

CSS variables exist for the same palette (`--brand-black`, `--brand-white`, `--parchment`, `--brand-blue`, `--brand-blue-light`) — use these only inside `globals.css` itself, not in inline styles.

### Text emphasis helpers

These wrap `color-mix(...)` so opacity tracks the inherited colour:

- `.text-on-dark-high` — primary copy on dark backgrounds
- `.text-on-dark-low` — secondary copy on dark backgrounds (60% opacity)
- `.text-on-light-high` — primary copy on light backgrounds
- `.text-on-light-low` — secondary copy on light backgrounds (60% opacity)

### Typography utilities

All defined in `globals.css`. **Always use these instead of writing raw `clamp()` font-size or inline `fontFamily` styles.**

Headings use a fluid √2 modular scale (`heading-mega` through `heading-sm`), implemented via a single `clamp()` per class. All headings hit their max size at viewport ≈1280px and their min at ≈640px, scaling smoothly in between. `heading-mega` (56→158px, uppercase) sits one step above `heading-display` and is reserved for the hero name lockup. Body copy is 16px fixed across all breakpoints. The naming hybrid (`mega`/`display` for billboard, then `-2xl` through `-sm`) matches the convention in `/stylesheet`.

| Class | Purpose | Notes |
| --- | --- | --- |
| `.heading-mega` | Uppercase hero brand mark (name lockup) | **Uppercase**, 56→158px, leading 0.95, +0.03em tracking. One √2 step above `.heading-display`. Reserve for the hero name lockup in `HeroHome`; don't use for editorial titles (use `.heading-display` for those) |
| `.heading-hero` | **Hero H1 lockup** — every page's hero title | **Uppercase**, 40→80px, leading 1, +0.1em tracking. Dedicated to hero H1s and decoupled from the modular scale, so tune it freely without affecting the scale. Colour is set per-use (`text-parchment`). |
| `.lede-hero` | Hero tagline/subtitle under the hero H1 | 17→20px, leading 1.5, +0.02em. Decoupled from the scale like `.heading-hero`. Floor deliberately sits **above** 16px body copy — hero taglines previously wore `.heading-sm`, whose 14px floor made them smaller than body text on phones. |
| `.heading-display` | Billboard / hero display | Sentence case, 56→112px, leading 1, −0.015em tracking |
| `.heading-2xl` | Large display heading | Sentence case, 40→79px, leading 1.05, −0.01em tracking |
| `.heading-statement` | Centred editorial statements | Sentence case, 28→56px, leading 1.15, −0.005em. Fills the gap between `.heading-lg` and `.heading-2xl`. |
| `.heading-lg` | H2 section headings | Sentence case, 24→40px, leading 1.2 |
| `.heading-md` | H3 card / list sub-headings | Sentence case, 16→28px, +0.02em tracking |
| `.heading-sm` | Smallest serif heading (H4) | Sentence case, 14→20px, +0.02em tracking |
| `.stat-lg` | Big numbers and short stat labels | |
| `.overline` | Small uppercase tracked label (kicker) | 10px, +0.45em tracking, uppercase. Despite the name, this is NOT the Tailwind `overline` text-decoration utility — the custom class overrides it. (Previously duplicated as `.eyebrow`, now consolidated.) |
| `.body-serif` | Default body copy (serif Heading font) | **16px fixed across all breakpoints**, leading 1.7 |
| `.body-sans` | Editorial-tall body copy in Lato | 16px fixed, leading 1.7 (matches `.body-serif`) |
| `.label-02` | Image captions, stat labels, form/helper labels | 14px, leading 1.286, +0.011em, Lato regular |
| `.body-xs` | Captions, fine print | 12px, lowercase, no tracking |
| `.body-xs-caps` | Small uppercase caps (less tracking than overline) | |
| `.blockquote` | Large italic pull-quote | Used in ParallaxQuote |
| `.quotesmall` | Small italic testimonial-scale quote | |
| `.list-index` | "01 /" style serif numbering | For itemised lists (Values, What to expect) |
| `.cta-label` | Standard CTA pill microtype | 10px, +0.4em, uppercase, Lato. Used 5+ times across BookingCTA, HeroHome, page.tsx |
| `.link-caps` | Caps micro text-link ("View all", "Read now", "Follow", footer links) | Compose with `.body-xs-caps` + `inline-flex items-center gap-3`. **Site-wide link rule: text links are full emphasis (the title's colour via currentColor), never underlined, never grey.** Hover dims to 65% and slides the optional arrow; `.group:hover` mirrors it inside card-links. Jessica explicitly banned underlines and grey link text — don't reintroduce `border-b`/`underline` on text links. |
| `.cta-label-sm` | Smaller button microtype | 9px, +0.4em, uppercase, Lato light. Appointments page + FeaturesList pills |
| `.nav-link` | Desktop navbar links | 11px, +0.25em, uppercase, Hanken extralight (200). Override `font-weight` for active state |
| `.nav-link-drawer` | Mobile Navbar full-screen menu links | 14px, +0.15em, uppercase, Heading serif |

H1–H6 automatically get the "Heading" serif font, normal weight, 0.04em letter-spacing — **don't override these defaults without reason.**

#### Heading-group spacing (overline → heading → lede)

The vertical gaps around a heading are utilities — **never set them ad-hoc with `mb-*`/`mt-*`/`gap-*`**, or they drift (this is exactly what went wrong before they were standardised).

| Relationship | Class | Applied to | Value |
| --- | --- | --- | --- |
| overline/kicker **→ heading** | `.from-overline` | the heading | `margin-top: 0.7em` — **scales with the heading** (0.7× its font-size), so a billboard heading gets proportionally more air above it than a small section heading, and it shrinks fluidly on mobile |
| heading **→ lede/subtitle** | `.lede` | the subtitle | `margin-top: clamp(28→40px)` — fluid |

Canonical structure: put the overline and heading as **direct siblings** (no `gap-*` between them) and add `.from-overline` to the heading. If they sit in a multi-child flex column, wrap just the overline+heading in a gap-less `<div className="flex flex-col">` so the parent's `gap-*` doesn't double up.

**Section header → content gap:** the air between a section's header block (overline + heading + optional lede) and the content below it should be **≈ half the section's top padding** (the padding above the overline). More than that reads as an awkward void — this shipped on the blog masthead once and Jessica called it out. When fixing this anywhere, check every page for the same pattern in the same pass.

**Same-colour section boundaries:** when two adjacent sections share (or nearly share) a background, their meeting paddings stack into an invisible double-height void — Jessica called this out on the media page (320px of empty parchment). Keep the combined boundary ≈ **144–192px on desktop**: give one side its full `pb-24 md:pb-32` and drop the other side to `pt-12 md:pt-16`. This applies to dark-on-dark too (`bg-brand-black` next to `bg-brand-charcoal` reads as one colour). Boundaries with a real contrast change (dark ↔ parchment, or an image section between) keep full paddings.

### Stylesheet canon

`src/app/stylesheet/page.tsx` renders every typography utility with a label, specs, and live sample at `/stylesheet`. **Treat it as the visual source of truth** — if you add a utility to `globals.css`, add a row to the `typeStyles` array in the same commit. Live page makes it impossible for documented specs and rendered reality to drift apart.

### Layout helpers

- `.pg-container` — the standard max-width 1200px container with responsive padding (`clamp(1.75rem, 5vw, 5rem)`). Use this on any contained section.
- `.site-portrait` — responsive portrait image wrapper: 1:1 mobile, 3:4 desktop, with `object-fit: cover` and `object-position: top`. Use this for any standalone portrait image.
- `.hero-noise` — film-grain SVG overlay. Use on dark hero sections (already in `HeroHome` and `ParallaxQuote`).
- `.about-hero-portrait` — specific to the About page hero. Don't reuse elsewhere.

Full-bleed sections intentionally break out of `pg-container` — that contrast is part of the design language. Match the section above/below when deciding whether to contain or full-bleed.

### Tailwind animations (configured in `tailwind.config.ts`)

- `animate-fade-in` — 1.2s ease-out fade-in
- `animate-fade-in-up` — 0.8s fade-in + slide up 20px
- `animate-fade-in-down` — 0.8s fade-in + slide down 20px
- `animate-marquee` — infinite horizontal scroll

**Pair these with `opacity-0` and `animationDelay` for staggered entrances.** See `HeroHome.tsx` for the canonical pattern.

## Components

### Use these (canonical)

These are wired into pages and are the right thing to reuse or extend:

| Component | Used in | Purpose |
| --- | --- | --- |
| `Navbar` | `layout.tsx` | Site nav with scroll-aware colour flipping |
| `Footer` | `layout.tsx` | Site footer |
| `AnnouncementBar` | `layout.tsx` | Top dismissible bar |
| `AOSInit` | `layout.tsx` | Global AOS + Lenis setup — don't duplicate |
| `SmoothScroll` | `layout.tsx` | Smooth-scroll provider |
| `HeroHome` | `page.tsx`, `services/page.tsx` | **Canonical hero.** Configurable via props (title, tagline, images, parallax, align, cta, etc.). Extend this — do NOT create new hero components |
| `LogoStripDark` | `page.tsx` | Press/credibility logo strip on dark bg |
| `StickyScrollSection` | `page.tsx` | Pinned-scroll section |
| `TestimonialSection` | `page.tsx` | Testimonial display |
| `ParallaxQuote` | `page.tsx`, `about/page.tsx` | Full-bleed parallax quote — takes `image` + `quote` props |
| `BookingCTA` | `page.tsx`, `about`, `services` | Standard book-a-consultation CTA block |
| `InstagramFeed` | most pages | Instagram grid |
| `FaqAccordion` | `services/page.tsx` | Native `<details>`-based accordion |
| `FeaturesList` | `media/page.tsx` | Used on media page |

### Don't import these (orphaned / dead)

These exist in `src/components/` but are not imported from any real page (some only appear in `/unused-components`, a dev sandbox). **Don't extend or copy patterns from them — they're not load-bearing and may be deleted.**

`HeroExperiment`, `HeroExperimentSaved`, `HeroSplit`, `TwoPanelHero`, `ParallaxHero`, `SplitSection`, `OverflowDebug`, `LogoQuilt`, `MediaTeaser`, `DrQuote`, `ScrollIndicator`, `TestimonialCarousel`, `FadeIn`, `CustomCursor`

When a new hero is needed, **extend `HeroHome` via its props** rather than spawning a `HeroX` variant. `HeroHome` already supports: `title`, `tagline`, `images` array (crossfade), `parallax`, `align` (left/center), `verticalAlign` (center/bottom), `cta`, `bottomRight`, `showScroll`, `showSocials`, `height`, `zoom`.

If `HeroHome`'s props genuinely don't cover the new case, add a prop to `HeroHome` rather than forking it. Ask the user before forking.

## Patterns

### Page structure

```
src/app/
├── layout.tsx        ← root layout (Navbar, Footer, AnnouncementBar, AOSInit, SmoothScroll)
├── globals.css       ← all design tokens
├── page.tsx          ← homepage
├── about/page.tsx
├── services/page.tsx
├── media/page.tsx
├── appointments/page.tsx
└── unused-components/page.tsx  ← dev sandbox, ignore
```

Pages are mostly composed of `<section>` blocks with `.pg-container` inside and `bg-parchment` (or dark equivalent) on the section element.

### Section template

```tsx
<section className="bg-parchment py-20 md:py-32">
  <div className="pg-container">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
      {/* content */}
    </div>
  </div>
</section>
```

**Critical:** when using a 12-column grid, always gate it behind `md:` — use `grid-cols-1 md:grid-cols-12`. A bare `grid-cols-12` causes horizontal overflow on mobile because the 11 column gaps (40–48px each) push the grid wider than the viewport. This bug has already shipped to production once — don't reintroduce it.

### Scroll-triggered fade-in (AOS)

AOS is initialised in `AOSInit.tsx` with `duration: 900`, `easing: ease-out-quart`, `once: true`, `offset: 80`.

Use AOS for content reveal as the user scrolls into a section:

```tsx
<div data-aos="fade" data-aos-delay="0">First</div>
<div data-aos="fade" data-aos-delay="150">Second</div>
<div data-aos="fade" data-aos-delay="300">Third</div>
```

Don't override `data-aos-duration` unless you have a specific reason — the global default is consistent across the site.

### Initial-page-load fade-in (Tailwind, not AOS)

For hero/above-the-fold content that fades in on first paint (not on scroll), use the Tailwind `animate-fade-in` utility with `opacity-0` and inline `animationDelay`/`animationDuration`:

```tsx
<div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationDuration: "1.0s" }}>
```

See `HeroHome.tsx` for the canonical staggered pattern. Common delays: image layer fades in last around 1.8s; text content fades in around 0.7s.

### Mobile/desktop splits

This codebase often renders **separate mobile and desktop markup** for sections with complex layered layouts (hero, about hero) rather than relying on responsive utilities alone. The pattern is:

```tsx
<section className="md:hidden">{/* mobile layout */}</section>
<section className="hidden md:block">{/* desktop layout */}</section>
```

This is intentional — Tailwind responsive utilities can't easily express asymmetric layouts with overlapping cards and parallax. **Match this pattern** for new sections with complex overlap. For simple stacked-to-grid layouts, use a single section with responsive utilities.

### Smooth scroll

`SmoothScroll.tsx` + Lenis is mounted globally in the root layout. Don't add your own scroll listeners that fight it; if you need to react to scroll, use Lenis's events or `window.scrollY`.

### Image handling

- Format: AVIF preferred (`*.avif` files in `public/assets/`)
- Aspect ratios: 1:1 mobile, 3:4 desktop is the standard portrait pattern (see `.site-portrait`)
- Use `object-position` to control crop — most existing portraits use `objectPosition: "50% 15%"` or similar to favour the upper part of the face
- Image fade-in: wrap the `<img>` in a `div` with `opacity-0 animate-fade-in` and a longer delay than the surrounding text (~1.8s), so the image is the last thing to resolve
- **Scroll-triggered image reveals**: the AOS default (900ms) reads abrupt on large photos — Jessica asked for slower, softer fades. Use `data-aos="fade" data-aos-duration="1800" data-aos-easing="ease-out-sine"`; stagger overlapping/paired images by 250–300ms, and let a logo/badge overlay arrive last (~700ms delay, 1200ms duration). See the About-page two-image interlude for the canonical example.

### Buttons / CTA system

**Always use the `.btn` utility classes for buttons and CTAs. Never hand-roll a button with inline `fontSize`/`letterSpacing`/`fontFamily` or ad-hoc border/padding/hover Tailwind.** The full system is defined in `globals.css` and rendered live at `/stylesheet`.

Compose `.btn` + one variant-theme class, plus optional `.btn-sm`:

```tsx
<a href="/appointments" className="btn btn-primary-light">
  Book a consultation
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>
```

| Class | Use |
| --- | --- |
| `.btn` | Base — pill shape, padding, `cta-label` text style, transitions, focus ring. Always include it. |
| `.btn-primary-light` | Solid fill on a **light** background. Highest emphasis — the key action per page/section. |
| `.btn-secondary-light` | Outline pill on a **light** background, fills brand-black on hover. The brand signature CTA. |
| `.btn-primary-dark` | Solid cream fill on a **dark** background. |
| `.btn-secondary-dark` | Outline pill on a **dark** background, fills cream on hover. |
| `.btn-tertiary-light` / `.btn-tertiary-dark` | Lowest-emphasis outline — border muted to 50% (matches nav link / social opacity). Fills on hover. Used for the navbar CTA. |
| `.btn-sm` | Compact size modifier (9px text, tighter padding) for dense contexts. Combine with a variant-theme class. |

Rules:
- `light` / `dark` refers to the **background the button sits on**, not the button's own colour.
- Primary = solid fill (one key action); secondary = outline (everything else). Don't put two primaries in the same view.
- The arrow `<svg>` is optional child markup — include it on the main page CTAs, omit on compact/secondary actions. Don't restyle it.
- All colours come from CSS variables (`--brand-black`, `--cream`, `--brand-charcoal`, `--brand-white`). Don't introduce new button colours without adding a token.
- If you need a button shape the system doesn't cover, **ask the user before hand-rolling one** — extending the system beats a one-off.

### Forms (billing constraint — do not violate)

**Never use Netlify Forms.** No `data-netlify="true"`, no `netlify` attribute on a `<form>`, and never enable form detection on the Netlify site. Netlify Forms bills the hosting account once submissions pass the free threshold, and the hosting account is not the client's.

The site currently has no forms — booking goes to external links (clinic booking pages, Calendly). If a contact form is ever needed, POST it to an external form endpoint (e.g. Web3Forms or Formspree) registered under the **client's** email, so submissions forward to her inbox and any usage billing is hers. Ask the user before adding any form.

## Drift patterns to avoid

These are the recurring mistakes past Claude sessions have made in this codebase:

1. **Creating a new `HeroX` component instead of extending `HeroHome` via props.** The `/unused-components` route is a graveyard of these. Don't add to it.
2. **Bare `grid-cols-12` without `md:` prefix.** Causes mobile horizontal overflow. Always `grid-cols-1 md:grid-cols-12`.
3. **Inline `clamp(...)` font sizes** instead of `.heading-lg` / `.body-serif` / etc. If a heading needs a size, there's usually already a utility for it.
4. **Inline `fontFamily: "Heading", serif"` styles** instead of letting the global h1–h6 styles or `.heading-*` utilities handle it.
5. **Inline colour hex codes** (`color: "#2D2C2A"`) instead of `text-brand-black` / `bg-parchment` Tailwind classes.
6. **Hard-coded `8px` padding values** instead of Tailwind spacing utilities (`p-2`, `px-4`, etc.).
7. **Custom scroll listeners** in new components when AOS or the existing scroll observers in `Navbar.tsx` would work.
8. **Empty `metadata.description`** when adding new pages. Always populate the description and Open Graph fields — this site is SEO-critical for the practice.
9. **Hardcoded keyword soup like `"text-[11px] tracking-[0.25em] uppercase"`** scattered throughout when `.overline` already encapsulates the same.
10. **Inline `fontSize` / `letterSpacing` / `fontFamily` styles on text elements when a utility exists.** The `/stylesheet` page documents every available class — check it before introducing new inline styling. If a pattern recurs (CTA microtype, nav link, image caption), it belongs in `globals.css` as a utility, not duplicated inline.
11. **Hand-rolling buttons** with ad-hoc `border`/`rounded-full`/`px-*`/`hover:*` Tailwind and inline microtype instead of the `.btn` system (`.btn .btn-primary-light` etc.). See the Buttons / CTA system section. Every pill CTA on the site should be `.btn` + a variant-theme class.

## Voice and copy

When writing or editing user-facing copy:

- **First person.** Dr Yalda speaks directly to the reader ("I'll always tell you...", "My practice is built on...") — not third person ("Dr. Yalda will tell you...").
- **Restrained.** No exclamation marks, no superlatives, no "amazing/incredible/transform your life" language. The brand is editorial, considered, medical.
- **Australian English.** "personalised", "specialise", "recognised", not American spellings.
- **Regulatory caution.** This is Australian cosmetic medicine. **Don't reference Schedule 4 substances by name** (e.g. "Botox", brand-name fillers) in marketing copy — TGA rules. Use generic terms like "injectables" or "anti-wrinkle treatments". Testimonials must not mention therapeutic goods.
- **Compliance flag on testimonials.** If editing `TestimonialSection.tsx`, double-check that no quote references a specific procedure by name.

## SEO and meta

`layout.tsx` currently has `metadata.description: ""` — this is a known gap. When updating page metadata:

- Populate `description` (155–160 chars, includes "Sydney", her name, and her specialty)
- Add Open Graph (`openGraph: { title, description, images: [...] }`) for social sharing
- Add Twitter card meta if relevant

Each page in `src/app/*/page.tsx` should export its own `metadata` for page-specific titles and descriptions.

## When you're not sure

If you can't find an existing token, component, or pattern that fits the task and you're about to introduce a new one, **stop and ask the user.** The cost of asking is one round-trip; the cost of forking a parallel implementation is months of accumulated drift.
