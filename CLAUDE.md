# CLAUDE.md

Instructions for Claude when working in this repository. Read this **before** writing or editing code.

## Project

Editorial site for Dr Yalda Jamali, Sydney cosmetic doctor.

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind 3 + custom utility classes in `src/app/globals.css`
- **Animation:** AOS (scroll-triggered fade-ins) + Lenis (smooth scroll), both initialised globally in `src/components/AOSInit.tsx`
- **Hosting:** Netlify
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

| Class | Purpose | Notes |
| --- | --- | --- |
| `.heading-xl` | Hero / page-title display | All caps, large, 0.04em tracking |
| `.heading-lg` | Section-level heading | Default for section h2/h3 |
| `.heading-md` | Card / list-item sub-heading | |
| `.stat-lg` | Big numbers and short stat labels | |
| `.eyebrow` | Small uppercase tracked label (kicker) | Use this OR `.overline` — same styling |
| `.overline` | Alias for `.eyebrow` | Both exist; prefer `.overline` (more common in current code). Despite the name, this is NOT the Tailwind `overline` text-decoration utility — the custom class overrides it |
| `.body-serif` | Default body copy (serif Heading font) | 14px mobile / 16px desktop |
| `.body-sans` | Body copy in Lato | Same sizing as body-serif |
| `.body-xs` | Captions, fine print | 12px, lowercase, no tracking |
| `.body-xs-caps` | Small uppercase caps (less tracking than overline) | |
| `.blockquote` | Large italic pull-quote | Used in ParallaxQuote |
| `.quotesmall` | Small italic testimonial-scale quote | |
| `.list-index` | "01 /" style serif numbering | For itemised lists (Values, What to expect) |

H1–H6 automatically get the "Heading" serif font, normal weight, 0.04em letter-spacing — **don't override these defaults without reason.**

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

### Buttons / CTA pill

The standard CTA is a thin-outline pill with letter-spaced uppercase microtype. Copy this pattern exactly when adding new CTAs:

```tsx
<a
  href="/appointments"
  className="self-start border border-brand-black text-brand-black font-normal uppercase rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
  style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
>
  Book a consultation
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>
```

For dark backgrounds: swap `border-brand-black`/`text-brand-black` → `border-cream`/`text-cream`, and the hover state to `hover:bg-cream hover:text-brand-black`.

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
9. **Hardcoded keyword soup like `"text-[11px] tracking-[0.25em] uppercase"`** scattered throughout when `.eyebrow` or `.overline` already encapsulates the same.

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
