export default function UnusedComponentsPage() {
  return (
    <main>

      {/* ─── WHAT WE ADDRESS — photo left, text + list right ─────────────── */}
      <section className="bg-cream py-24 md:py-36">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-10 md:gap-8 items-start">

            {/* Left — portrait */}
            <div className="col-span-12 md:col-span-5">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/assets/Yalda-1.jpg"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right — text */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-10 md:pt-4">

              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                What we address
              </p>

              <div className="flex flex-col gap-6">
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
                  Not all treatments are intended to change how someone looks. Many are designed to support skin quality, encourage collagen production, and maintain healthy, resilient skin over time. The intention is not to create a different face, but to help patients look like the best version of themselves at their current stage.
                </p>
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
                  A strong emphasis is placed on energy-based devices and laser technologies, which form an important part of a multi-modality approach. Dr Jamali has access to a range of advanced devices across her Sydney clinics, which can be incorporated into treatment plans where appropriate.
                </p>
              </div>

              <div className="flex flex-col gap-0">
                {[
                  "Fine lines & natural expression",
                  "Skin laxity & firming",
                  "Tone, texture & pigmentation",
                  "Facial harmony & structural balance",
                  "Collagen support & skin quality",
                  "Energy-based devices — BBL, MOXI & Morpheus8",
                ].map((item) => (
                  <div key={item} className="py-4 border-t border-neutral-200 last:border-b">
                    <p className="text-brand-black text-sm font-light tracking-wide">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="/appointments"
                className="self-start px-8 py-4 bg-brand-black text-white text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
              >
                Book a Consultation
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* ─── THE APPROACH — text + list left, photo right ─────────────────── */}
      <section className="bg-parchment py-24 md:py-36">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-10 md:gap-8 items-start">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-10 md:pt-4">

              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                The approach
              </p>

              <div className="flex flex-col gap-6">
                <p className="text-neutral-600 text-sm font-light leading-relaxed">
                  Her approach is consultation-led rather than treatment-led. In keeping with Australian guidelines, specific treatments are not listed here and are instead discussed in detail during a clinical consultation, where suitability, risks, and alternatives can be properly explored.
                </p>
              </div>

              <div className="flex flex-col gap-0">
                {[
                  "A thorough assessment of your concerns and goals",
                  "Honest discussion of what is — and isn't — indicated",
                  "A personalised plan, with no pressure to proceed",
                  "Ongoing support and follow-up as part of the relationship",
                ].map((point) => (
                  <div key={point} className="py-4 border-t border-neutral-200 last:border-b flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                    <p className="text-neutral-600 text-sm font-light leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <a
                href="/appointments"
                className="self-start px-8 py-4 bg-brand-black text-white text-[9px] font-normal tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
              >
                Book a Consultation
              </a>

            </div>

            {/* Right — portrait */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/assets/dr-yalda-treatment.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
