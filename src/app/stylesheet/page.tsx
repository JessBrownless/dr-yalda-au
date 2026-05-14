type Swatch = { name: string; hex: string; group: "Brand" | "Legacy" };

function hexToRgb(hex: string): string {
  const n = parseInt(hex.replace("#", ""), 16);
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
}

const swatches: Swatch[] = [
  { name: "brand-white",      hex: "#F6F6F3", group: "Brand" },
  { name: "cream",            hex: "#E9E3D8", group: "Legacy" },
  { name: "parchment",        hex: "#F5F2EC", group: "Legacy" },
  { name: "brand-black",      hex: "#2D2C2A", group: "Brand" },
  { name: "brand-charcoal",   hex: "#222120", group: "Brand" },
  { name: "brand-line",       hex: "#C2C1BE", group: "Brand" },
  { name: "brand-blue-light", hex: "#B9D3DF", group: "Brand" },
  { name: "brand-blue",       hex: "#9BB9CB", group: "Brand" },
];

const typeStyles: { className: string; label: string; sample: string }[] = [
  { className: "heading-xl",   label: ".heading-xl — hero / page title",            sample: "Beauty meets artistry" },
  { className: "heading-lg",   label: ".heading-lg — section heading",              sample: "A considered approach" },
  { className: "heading-md",   label: ".heading-md — card / list sub-heading",      sample: "Consultation process" },
  { className: "stat-lg",      label: ".stat-lg — stat / big label",                sample: "15+" },
  { className: "blockquote",   label: ".blockquote — large italic pull-quote",      sample: "Restraint is the point." },
  { className: "quotesmall",   label: ".quotesmall — testimonial-scale italic",     sample: "She listens before she suggests." },
  { className: "body-serif",   label: ".body-serif — serif body copy",              sample: "Every face is read on its own terms — proportion, movement, light. Treatment is restrained, evidence-led, and built to age with you." },
  { className: "body-sans",    label: ".body-sans — sans body copy",                sample: "Every face is read on its own terms — proportion, movement, light. Treatment is restrained, evidence-led, and built to age with you." },
  { className: "body-xs",      label: ".body-xs — caption / fine print",            sample: "Results vary. Consultation required prior to any treatment." },
  { className: "body-xs-caps", label: ".body-xs-caps — small caps body label",      sample: "Bookings now open" },
  { className: "eyebrow",      label: ".eyebrow — small tracked uppercase label",   sample: "Sydney · By appointment" },
  { className: "overline",     label: ".overline — kicker / overline",              sample: "Chapter 01" },
];

export const metadata = {
  title: "Stylesheet — Dr Yalda Jamali",
};

export default function StylesheetPage() {
  return (
    <main className="bg-brand-white text-brand-black pt-32 pb-24">
      <div className="pg-container">

        <header className="mb-16">
          <p className="eyebrow text-brand-black/60 mb-4">Internal</p>
          <h1 className="heading-xl !text-brand-black">Stylesheet</h1>
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

          <div className="divide-y divide-brand-line">
            {typeStyles.map(({ className, label, sample }) => (
              <div
                key={className}
                className="py-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start"
              >
                <p className="body-xs-caps !text-brand-black/60">{label}</p>
                <p className={className}>{sample}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
