type Swatch = { name: string; hex: string; group: "Brand" | "Legacy" };

function hexToRgb(hex: string): string {
  const n = parseInt(hex.replace("#", ""), 16);
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
}

const swatches: Swatch[] = [
  { name: "brand-white",      hex: "#F6F6F3", group: "Brand" },
  { name: "parchment",        hex: "#F5F2EC", group: "Legacy" },
  { name: "linen",            hex: "#EFEAE1", group: "Brand" },
  { name: "cream",            hex: "#E9E3D8", group: "Legacy" },
  { name: "brand-black",      hex: "#2D2C2A", group: "Brand" },
  { name: "brand-charcoal",   hex: "#222120", group: "Brand" },
  { name: "brand-line",       hex: "#C2C1BE", group: "Brand" },
  { name: "brand-blue-light", hex: "#B9D3DF", group: "Brand" },
  { name: "brand-blue",       hex: "#9BB9CB", group: "Brand" },
];

const typeStyles: { className: string; label: string; specs: string; breakpoints: string; sample: string }[] = [
  { className: "heading-mega",     label: ".heading-mega — uppercase hero brand mark",  specs: "56→158px · leading 0.95 · +0.03em · uppercase",     breakpoints: "Fluid · 56–158px (max @ 1280px)",  sample: "Dr Yalda Jamali" },
  { className: "heading-hero",     label: ".heading-hero — hero H1 lockup (uppercase)", specs: "40→80px · leading 1 · +0.1em · uppercase",      breakpoints: "Fluid · 40–80px (max @ 1280px)",  sample: "Dr Yalda Jamali" },
  { className: "heading-display",  label: ".heading-display — billboard hero",          specs: "56→112px · leading 1 · −0.015em · sentence",        breakpoints: "Fluid · 56–112px (max @ 1280px)",  sample: "The quick brown fox" },
  { className: "heading-2xl",      label: ".heading-2xl — large display heading",       specs: "40→79px · leading 1.05 · −0.01em · sentence",       breakpoints: "Fluid · 40–79px (max @ 1280px)",   sample: "The quick brown fox jumps" },
  { className: "heading-statement", label: ".heading-statement — sentence-case statement", specs: "28→56px · leading 1.15 · −0.005em · sentence",     breakpoints: "Fluid · 28–56px (max @ 1280px)",   sample: "A doctor who listens first" },
  { className: "heading-lg",       label: ".heading-lg — H2 section heading",           specs: "24→40px · leading 1.2 · 0 tracking",                breakpoints: "Fluid · 24–40px (max @ 1280px)",   sample: "A considered approach" },
  { className: "heading-md",       label: ".heading-md — H3 card / list sub-heading",   specs: "18→28px · leading 1.3 · +0.02em",                   breakpoints: "Fluid · 18–28px (max @ 1280px)",   sample: "Consultation process" },
  { className: "heading-sm",       label: ".heading-sm — smallest serif heading",       specs: "14→20px · leading 1.4 · +0.02em",                   breakpoints: "Fluid · 14–20px (max @ 1280px)",   sample: "Practitioner details" },
  { className: "stat-lg",          label: ".stat-lg — stat / big label",                specs: "28→64px · leading 1 · +0.02em",                     breakpoints: "sm 28 · md 28 · lg 36 · xl 45 · 2xl 54", sample: "15+" },
  { className: "blockquote",       label: ".blockquote — large italic pull-quote",      specs: "36→64px · leading 1.3 · italic",                    breakpoints: "sm 36 · md 42 · lg 56 · xl 64 · 2xl 64", sample: "Restraint is the point." },
  { className: "quotesmall",       label: ".quotesmall — testimonial-scale italic",     specs: "18→26px · leading 1.55 · italic",                   breakpoints: "sm 18 · md 18 · lg 18 · xl 20 · 2xl 25", sample: "She listens before she suggests." },
  { className: "quote-mark",       label: ".quote-mark — oversized decorative quote glyph", specs: "80→144px · leading 1 · serif · colour per-use",  breakpoints: "Fluid · 80–144px (10vw, max @ ~1280px)", sample: "“" },
  { className: "body-serif",       label: ".body-serif — serif body copy",              specs: "16px · leading 1.7 · +0.01em · serif",              breakpoints: "Fixed 16px (all breakpoints)",     sample: "Every face is read on its own terms — proportion, movement, light. Treatment is restrained, evidence-led, and built to age with you." },
  { className: "body-sans",        label: ".body-sans — sans body copy (editorial)",    specs: "16px · leading 1.7 · +0.01em · Lato light",         breakpoints: "Fixed 16px (all breakpoints)",     sample: "Every face is read on its own terms — proportion, movement, light. Treatment is restrained, evidence-led, and built to age with you." },
  { className: "body-xs",          label: ".body-xs — caption / fine print",            specs: "12px · leading 1.5 · +0.01em",                      breakpoints: "Fixed 12px (all breakpoints)",     sample: "Results vary. Consultation required prior to any treatment." },
  { className: "body-xs-caps",     label: ".body-xs-caps — small caps body label",      specs: "10px · leading 1.4 · +0.15em · uppercase",          breakpoints: "Fixed 10px (all breakpoints)",     sample: "Bookings now open" },
  { className: "overline",         label: ".overline — kicker / overline",              specs: "10px · leading 1.4 · +0.45em · uppercase",          breakpoints: "Fixed 10px (all breakpoints)",     sample: "Chapter 01" },
  { className: "label-02",         label: ".label-02 — small functional label",         specs: "14px · leading 1.286 · +0.011em · Lato regular",    breakpoints: "Fixed 14px (all breakpoints)",     sample: "Years in cosmetic medicine" },
  { className: "cta-label",        label: ".cta-label — standard CTA pill microtype",   specs: "10px · +0.4em · uppercase · Lato semibold",         breakpoints: "Fixed 10px (all breakpoints)",     sample: "Book a consultation" },
  { className: "cta-label-sm",     label: ".cta-label-sm — smaller button microtype",   specs: "9px · +0.4em · uppercase · Lato semibold",          breakpoints: "Fixed 9px (all breakpoints)",      sample: "Book now" },
  { className: "link-arrow",       label: ".link-arrow — editorial inline link (underline + arrow)", specs: "10px · +0.4em · uppercase · Lato · hairline underline", breakpoints: "Fixed 10px (all breakpoints)",     sample: "About Dr Yalda →" },
  { className: "lede",             label: ".lede — heading→subtitle spacing (margin-top)", specs: "margin-top clamp 28→40px · fluid",                 breakpoints: "Fluid · 28–40px (2.5vw)",          sample: "Supporting subtitle beneath a heading" },
  { className: "from-overline",    label: ".from-overline — overline→heading spacing (on heading)", specs: "margin-top 0.7em · scales with heading size",   breakpoints: "Proportional · 0.7× heading font-size", sample: "Heading spaced below its kicker" },
  { className: "nav-link",         label: ".nav-link — desktop navbar links",           specs: "11px · +0.25em · uppercase · Hanken extralight",    breakpoints: "Fixed 11px (all breakpoints)",     sample: "About" },
  { className: "nav-link-drawer",  label: ".nav-link-drawer — mobile drawer links",     specs: "14px · +0.15em · uppercase · Heading serif",        breakpoints: "Fixed 14px (all breakpoints)",     sample: "Services" },
];

export const metadata = {
  title: "Stylesheet — Dr Yalda Jamali",
};

export default function StylesheetPage() {
  return (
    <main className="bg-brand-white text-brand-black pt-32 pb-24">
      <div className="pg-container">

        <header className="mb-16">
          <p className="overline text-brand-black/60 mb-4">Internal</p>
          <h1 className="heading-display !text-brand-black">Stylesheet</h1>
          <p className="body-sans !text-brand-black/60 mt-4 max-w-[60ch]">
            Brand colour tokens and typographic helpers.
          </p>
        </header>

        {/* ─── Colours ─────────────────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="heading-lg !text-brand-black mb-2">Colour</h2>
          <p className="body-sans !text-brand-black/60 mb-8">Light to dark.</p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {swatches.map((s) => {
              const isDark = s.hex.toLowerCase() === "#2d2c2a";
              return (
                <li key={s.name} className="flex flex-col">
                  <div
                    className="w-full aspect-square rounded-sm border border-brand-line"
                    style={{ background: s.hex }}
                  />
                  <div className="mt-3">
                    <p className="body-xs-caps !text-brand-black">{s.name}</p>
                    <p className="body-xs !text-brand-black/60">{s.hex.toUpperCase()}</p>
                    <p className="body-xs !text-brand-black/60">{hexToRgb(s.hex)}</p>
                    {s.group === "Legacy" && (
                      <p className="body-xs !text-brand-black/60 italic">legacy</p>
                    )}
                    {isDark && (
                      <p className="body-xs !text-brand-black/60">primary dark</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ─── Text emphasis ───────────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="heading-lg !text-brand-black mb-2">Text emphasis</h2>
          <p className="body-sans !text-brand-black/60 mb-8">
            Four utilities for primary / secondary copy on light or dark backgrounds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* On dark */}
            <div className="bg-brand-black p-10 flex flex-col gap-6">
              <p className="body-xs-caps text-on-dark-low">On brand-black</p>
              <div>
                <p className="body-xs-caps text-on-dark-low mb-2">.text-on-dark-high</p>
                <p className="body-sans text-on-dark-high">
                  Primary copy — used for body text, headings, anything that needs full attention.
                </p>
              </div>
              <div>
                <p className="body-xs-caps text-on-dark-low mb-2">.text-on-dark-low</p>
                <p className="body-sans text-on-dark-low">
                  Secondary copy — used for captions, eyebrows, supporting text and meta detail.
                </p>
              </div>
            </div>

            {/* On light */}
            <div className="bg-parchment p-10 flex flex-col gap-6">
              <p className="body-xs-caps text-on-light-low">On parchment</p>
              <div>
                <p className="body-xs-caps text-on-light-low mb-2">.text-on-light-high</p>
                <p className="body-sans text-on-light-high">
                  Primary copy — used for body text, headings, anything that needs full attention.
                </p>
              </div>
              <div>
                <p className="body-xs-caps text-on-light-low mb-2">.text-on-light-low</p>
                <p className="body-sans text-on-light-low">
                  Secondary copy — used for captions, eyebrows, supporting text and meta detail.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Typography ──────────────────────────────────────────────── */}
        <section>
          <h2 className="heading-lg !text-brand-black mb-2">Type</h2>
          <p className="body-sans !text-brand-black/60 mb-8">
            Helpers defined in <code>globals.css</code>.
          </p>

          <p className="body-xs !text-brand-black/50 mb-6">
            Tailwind breakpoints: sm 640px · md 768px · lg 1024px · xl 1280px · 2xl 1536px
          </p>

          <div className="divide-y divide-brand-line">
            {typeStyles.map(({ className, label, specs, breakpoints, sample }) => (
              <div
                key={className}
                className="py-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="body-xs-caps !text-brand-black/60">{label}</p>
                  <p className="body-xs !text-brand-black/50">{specs}</p>
                  <p className="body-xs !text-brand-black/40">{breakpoints}</p>
                </div>
                <p className={className}>{sample}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Buttons ─────────────────────────────────────────────────── */}
        <section className="mt-20">
          <h2 className="heading-lg !text-brand-black mb-2">Buttons</h2>
          <p className="body-sans !text-brand-black/60 mb-8">
            Two variants &times; two themes, plus a compact size. Compose <code>.btn</code> with one
            variant-theme class (and optional <code>.btn-sm</code>). Primary is a solid fill for the key
            action; secondary is the outline pill that fills on hover. Hover each to see its state.
          </p>

          {/* On light */}
          <div className="bg-parchment p-8 md:p-12 mb-6">
            <p className="body-xs-caps text-on-light-low mb-10">On light backgrounds (parchment / cream)</p>
            <div className="flex flex-wrap items-start gap-x-12 gap-y-12">

              {/* Primary — light */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-primary-light">
                  Book a consultation
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <p className="body-xs !text-brand-black/60">Primary — solid fill</p>
                <p className="body-xs !text-brand-black/40">.btn .btn-primary-light</p>
              </div>

              {/* Secondary — light */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-secondary-light">
                  Book a consultation
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <p className="body-xs !text-brand-black/60">Secondary — outline, fills on hover</p>
                <p className="body-xs !text-brand-black/40">.btn .btn-secondary-light</p>
              </div>

              {/* Tertiary — light */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-tertiary-light">
                  Book a consultation
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <p className="body-xs !text-brand-black/60">Tertiary — muted outline (50%), nav CTA</p>
                <p className="body-xs !text-brand-black/40">.btn .btn-tertiary-light</p>
              </div>

              {/* Compact size — light */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-sm btn-secondary-light">
                  View all
                </a>
                <p className="body-xs !text-brand-black/60">Compact (secondary)</p>
                <p className="body-xs !text-brand-black/40">.btn .btn-sm .btn-secondary-light</p>
              </div>

            </div>
          </div>

          {/* On dark */}
          <div className="bg-brand-black p-8 md:p-12">
            <p className="body-xs-caps text-on-dark-low mb-10">On dark backgrounds (brand-black / charcoal)</p>
            <div className="flex flex-wrap items-start gap-x-12 gap-y-12">

              {/* Primary — dark */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-primary-dark">
                  Book a consultation
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <p className="body-xs text-on-dark-low">Primary — solid fill</p>
                <p className="body-xs text-on-dark-low">.btn .btn-primary-dark</p>
              </div>

              {/* Secondary — dark */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-secondary-dark">
                  Book a consultation
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <p className="body-xs text-on-dark-low">Secondary — outline, fills on hover</p>
                <p className="body-xs text-on-dark-low">.btn .btn-secondary-dark</p>
              </div>

              {/* Tertiary — dark */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-tertiary-dark">
                  Book a consultation
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <p className="body-xs text-on-dark-low">Tertiary — muted outline (50%), nav CTA</p>
                <p className="body-xs text-on-dark-low">.btn .btn-tertiary-dark</p>
              </div>

              {/* Compact size — dark */}
              <div className="flex flex-col gap-3">
                <a href="#" className="btn btn-sm btn-secondary-dark">
                  View all
                </a>
                <p className="body-xs text-on-dark-low">Compact (secondary)</p>
                <p className="body-xs text-on-dark-low">.btn .btn-sm .btn-secondary-dark</p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
