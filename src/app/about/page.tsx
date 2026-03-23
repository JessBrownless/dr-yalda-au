export default function AboutPage() {
  return (
    <main>

      {/* 50/50 Hero */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">

        {/* Left — text */}
        <div className="bg-parchment relative flex flex-col justify-between p-24 md:p-28 overflow-hidden">

          {/* Top-right scattered text */}
          <div className="flex justify-end mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-zinc-500 text-base font-light leading-relaxed max-w-[220px] text-right">
              Sydney-based cosmetic doctor specialising in facial aesthetics.
            </p>
          </div>

          {/* Mid — credentials */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-zinc-300 text-[10px] font-light tracking-[0.4em] uppercase">
              MBChB · MSc Dermatology · FACCSM
            </p>
          </div>

          {/* Bottom — logo + subtitle */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <img
              src="/assets/dr-yalda-logo-long.svg"
              alt="Dr. Yalda Jamali"
              className="w-full h-auto pr-16"
              style={{ filter: "invert(1) brightness(0)" }}
            />
            <p className="text-zinc-500 text-lg font-light leading-relaxed mt-6">
              Natural results, refined technique, and a practice built entirely on trust. Dr. Yalda brings eight years of London-trained expertise to every consultation — combining a master's in dermatology with a deeply personal approach to aesthetic medicine.
            </p>
          </div>

        </div>

        {/* Right — image */}
        <div className="relative min-h-[60vw] md:min-h-0">
          <img
            src="/assets/yalda-17.jpg"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

      </section>

      {/* Bio section — statement */}
      <section className="bg-cream py-32 md:py-52 px-8 md:px-24 flex flex-col items-center justify-center text-center">
        <p className="text-zinc-400 text-[10px] font-light tracking-[0.45em] uppercase mb-12">
          Her story
        </p>
        <h2
          className="text-zinc-950"
          style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", maxWidth: "20ch", lineHeight: "1.05", letterSpacing: "-0.02em" }}
        >
          A doctor who listens first, treats with precision, and always puts your natural beauty above everything else.
        </h2>
      </section>

      {/* Credentials bar */}
      <section className="bg-parchment py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-8 md:px-72">
          {[
            { stat: "8+", label: "Years of experience" },
            { stat: "MBChB", label: "Medical degree" },
            { stat: "MSc", label: "Dermatology" },
            { stat: "FACCSM", label: "Cosmetic physician" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <p
                className="text-zinc-950 leading-none"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
              >
                {stat}
              </p>
              <p className="text-zinc-400 text-[10px] font-light tracking-[0.35em] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 50/50 — image left, text right */}
      <section className="grid grid-cols-1 md:grid-cols-2">

        {/* Left — image */}
        <div className="relative min-h-[60vw] md:min-h-screen">
          <img
            src="/assets/yalda-1.jpg"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Right — text */}
        <div className="bg-parchment flex flex-col justify-center px-12 md:pl-40 md:pr-16 py-20 md:py-32">
          <p className="text-zinc-400 text-[10px] font-light tracking-[0.45em] uppercase mb-8">
            Her approach
          </p>
          <h2
            className="text-zinc-950 font-normal leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
          >
            Natural results,<br />always.
          </h2>
          <div className="w-8 h-px bg-zinc-400 mb-8" />
          <p className="text-zinc-600 text-base font-light leading-relaxed mb-4 max-w-sm">
            I&rsquo;m recognised for my expertise in facial balancing and contouring, taking a personalised, meticulous approach to enhance and harmonise features with natural, refined results.
          </p>
          <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
            My aim is always to boost your confidence and deliver outcomes that reflect your unique beauty.
          </p>
        </div>

      </section>

      {/* Numbered list + image */}
      <section className="bg-cream py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center px-8 md:px-72">

          {/* Left — numbered items */}
          <div>
            <p className="text-zinc-400 text-[10px] font-light tracking-[0.45em] uppercase mb-12">
              In the clinic
            </p>

            {[
              {
                num: "01",
                title: "Facial Balancing & Contouring",
                body: "A personalised, meticulous approach to enhance and harmonise your features with natural, refined results.",
              },
              {
                num: "02",
                title: "Anti-Wrinkle Treatments",
                body: "Precision muscle relaxant injections tailored to soften expression lines while preserving your natural movement.",
              },
              {
                num: "03",
                title: "Skin Health & Dermal Therapy",
                body: "Evidence-based skin treatments combining her MSc in dermatology with a deep understanding of long-term skin wellbeing.",
              },
            ].map(({ num, title, body }, i, arr) => (
              <div key={num}>
                <div className="py-8">
                  <div className="flex items-baseline gap-5 mb-3">
                    <span
                      className="text-zinc-300 leading-none"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
                    >
                      {num}
                    </span>
                    <h3
                      className="text-zinc-950 font-normal leading-tight italic"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-md pl-14">
                    {body}
                  </p>
                </div>
                {i < arr.length - 1 && <div className="w-full h-px bg-zinc-200" />}
              </div>
            ))}
          </div>

          {/* Right — image */}
          <div className="relative">
            <img
              src="/assets/yalda-17.jpg"
              alt="Dr. Yalda Jamali in clinic"
              className="w-full aspect-[3/4] object-cover object-top"
            />
          </div>

        </div>
      </section>

      {/* 50/50 — duplicate hero at bottom */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2">

        {/* Left — text */}
        <div className="bg-parchment relative flex flex-col justify-between px-12 md:px-16 pt-36 pb-0 overflow-hidden">

          {/* Top-right scattered text */}
          <div className="flex justify-end">
            <p className="text-zinc-400 text-xs font-light leading-relaxed max-w-[180px] text-right">
              Sydney-based cosmetic doctor specialising in facial aesthetics.
            </p>
          </div>

          {/* Bottom group — credentials + logo */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-zinc-300 text-[10px] font-light tracking-[0.4em] uppercase">
                MBChB · MSc Dermatology · FACCSM
              </p>
            </div>
            <div>
              <img
                src="/assets/dr-yalda-logo-long.svg"
                alt="Dr. Yalda Jamali"
                className="w-full h-auto"
                style={{ filter: "invert(1) brightness(0)" }}
              />
            </div>
          </div>

          {/* Logo marquee */}
          <div className="relative overflow-hidden mt-6 mb-0">
            <div className="flex animate-marquee whitespace-nowrap py-6">
              {[...Array(6)].map((_, i) => (
                <img key={`a-${i}`} src="/assets/logo-clinique.svg" alt="Clinique" className="mx-8 opacity-40 flex-shrink-0" style={{ height: "40px", width: "142px" }} />
              ))}
              {[...Array(6)].map((_, i) => (
                <img key={`b-${i}`} src="/assets/logo-clinique.svg" alt="Clinique" className="mx-8 opacity-40 flex-shrink-0" style={{ height: "40px", width: "142px" }} />
              ))}
            </div>
          </div>

        </div>

        {/* Right — image */}
        <div className="relative min-h-[60vw] md:min-h-0">
          <img
            src="/assets/yalda-17.jpg"
            alt="Dr. Yalda Jamali"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

      </section>

    </main>
  );
}
