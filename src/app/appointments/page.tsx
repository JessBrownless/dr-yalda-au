import DrQuote from "@/components/DrQuote";

const clinics = [
  {
    name: "Epios Cosmetic Clinic",
    address: "18 William St, Paddington, 2021",
    hours: "Wednesday – Friday",
    href: "#",
    logo: "/assets/clinic-logo-epios.png",
  },
  {
    name: "Northern Sydney Dermatology & Laser",
    address: "1/29 Baringa Rd, Northbridge, 2063",
    hours: "Mondays",
    href: "#",
    logo: null,
  },
  {
    name: "Austin Clinic",
    address: "5/67 Wanganella St, Balgowlah, 2093",
    hours: "Tuesdays",
    href: "#",
    logo: null,
  },
];

const steps = [
  {
    num: "01",
    title: "Choose your clinic",
    body: "Select the location most convenient for you. Dr. Yalda consults across three Sydney clinics.",
  },
  {
    num: "02",
    title: "Book your consultation",
    body: "All new patients begin with a thorough consultation. This is your time to ask questions and explore your options without pressure.",
  },
  {
    num: "03",
    title: "Your treatment plan",
    body: "Dr. Yalda will develop a personalised plan tailored to your goals, anatomy, and what naturally suits you.",
  },
];

export default function AppointmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-parchment relative flex items-center justify-center py-48 md:py-64">

        {/* BOOK | image | NOW — centred flex row, words pinned to image edges */}
        <div className="relative flex items-center justify-center">

          <span
            className="relative z-0 text-brand-black font-normal leading-none"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.5rem, 11vw, 12rem)", letterSpacing: "0.05em", marginRight: "-10px", alignSelf: "flex-start", marginTop: "-8%" }}
          >
            BOOK
          </span>

          <div className="relative z-10 flex-shrink-0 overflow-hidden" style={{ width: "clamp(160px, 30vw, 300px)", aspectRatio: "3/4" }}>
            <img
              src="/assets/Yalda-17.avif"
              alt="Dr. Yalda Jamali"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <span
            className="relative z-20 text-brand-black font-normal leading-none"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.5rem, 11vw, 12rem)", letterSpacing: "0.05em", marginLeft: "-10px", alignSelf: "flex-end", marginBottom: "-8%" }}
          >
            NOW
          </span>

        </div>

      </section>

      {/* Clinic locations */}
      <section className="bg-cream py-24 md:py-32 overflow-hidden">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">

            {/* Left — image + intro text */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8">

              {/* Square image */}
              <div className="overflow-hidden w-full" style={{ aspectRatio: "1/1" }}>
                <img
                  src="/assets/dr-yalda-treatment-02.avif"
                  alt="Dr. Yalda Jamali"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4">
                <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
                  Schedule
                </p>
                <h2
                  className="text-brand-black font-normal leading-tight"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 3vw, 3rem)", letterSpacing: "0.02em" }}
                >
                  IN-PERSON CONSULTATION
                </h2>
                <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "'Heading', serif" }}>
                  Dr. Yalda works across Paddington on Wednesday – Friday, Northbridge on Mondays and Balgowlah on Tuesdays.
                </p>
              </div>

            </div>

            {/* Right — clinic list */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col divide-y divide-neutral-100 md:pt-4">
              {clinics.map(({ name, address, hours, href }, i) => (
                <div key={name} className="py-8 flex gap-6 items-start">

                  {/* Pin */}
                  <div className="flex-shrink-0 mt-1">
                    <svg width="16" height="21" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1C5.58 1 2 4.58 2 9c0 6 8 16 8 16s8-10 8-16c0-4.42-3.58-8-8-8z" fill="#1a1a1a"/>
                      <text x="10" y="10.5" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="200">{i + 1}</text>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-1.5">
                    <h3
                      className="text-brand-black font-normal leading-tight"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.5vw, 1.4rem)", letterSpacing: "0.04em" }}
                    >
                      {name.toUpperCase()}
                    </h3>
                    <div className="flex items-baseline gap-4">
                      <p className="text-neutral-500 font-light tracking-[0.12em] uppercase" style={{ fontSize: "10px" }}>{hours}</p>
                      <span className="text-neutral-300 text-[8px]">·</span>
                      <p className="text-neutral-400 font-light" style={{ fontSize: "12px" }}>{address}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={href}
                    className="flex-shrink-0 self-center text-brand-black text-[9px] font-light tracking-[0.3em] uppercase border-b border-brand-black/30 pb-px hover:border-brand-black transition-colors duration-300"
                  >
                    Book
                  </a>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Telephone consultations */}
      <section className="bg-parchment py-24 md:py-40 overflow-hidden">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-8 order-2 md:order-1">

              <div className="flex flex-col gap-3">
                <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
                  Now offering
                </p>
                <h2
                  className="text-brand-black font-normal leading-[1.0]"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0" }}
                >
                  TELEPHONE<br /><em>consultations.</em>
                </h2>
              </div>

              <p className="text-neutral-600 font-light leading-[1.8]" style={{ fontSize: "15px", fontFamily: "'Heading', serif", maxWidth: "38ch" }}>
                For those who can't make it in person, Dr. Yalda now offers a limited number of telephone consultations each week.
              </p>

              <div className="flex flex-col divide-y divide-neutral-200">
                {[
                  "30 minutes per session",
                  "Limited availability — book well in advance",
                  "Suitable for new enquiries and existing patients",
                  "No prescriptions or referrals issued via phone",
                ].map((rule) => (
                  <div key={rule} className="flex items-baseline gap-4 py-4">
                    <span className="text-neutral-300 flex-shrink-0 text-[9px] tracking-[0.1em]">—</span>
                    <p className="text-brand-black font-light" style={{ fontSize: "14px", fontFamily: "'Heading', serif", letterSpacing: "0.02em" }}>{rule}</p>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="self-start text-brand-black text-[10px] font-normal tracking-[0.35em] uppercase border-b border-brand-black pb-px hover:opacity-50 transition-opacity duration-300 mt-2"
                style={{ fontFamily: "sans-serif" }}
              >
                Book a Phone Consultation
              </a>

            </div>

            {/* Right — phone mockup */}
            <div className="col-span-12 md:col-span-4 md:col-start-9 flex justify-center order-1 md:order-2">
              <div className="media-teaser__phone" style={{ width: "200px" }}>
                <div className="media-teaser__phone-notch" style={{ width: "70px", height: "20px" }} />
                <img
                  src="/assets/Yalda-17.avif"
                  alt="Dr. Yalda Jamali"
                  className="media-teaser__phone-img"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-parchment py-24 md:py-40">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            <div className="col-span-12 md:col-span-4">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-6">
                What to expect
              </p>
              <h2
                className="text-brand-black font-normal leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                YOUR FIRST<br /><em>visit.</em>
              </h2>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col divide-y divide-neutral-200">
              {steps.map(({ num, title, body }) => (
                <div key={num} className="py-8 flex gap-8 items-start">
                  <span
                    className="text-neutral-300 leading-none flex-shrink-0"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                  >
                    {num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-brand-black font-normal"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.5vw, 1.2rem)", letterSpacing: "0.03em" }}
                    >
                      {title.toUpperCase()}
                    </h3>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Note from Dr. Yalda */}
      <section className="bg-cream py-24 md:py-40">
        <div className="pg-container">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
              A note from Dr. Yalda
            </p>
            <blockquote
              className="text-brand-black font-normal leading-relaxed"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
            >
              &ldquo;I believe every patient deserves honesty above all else. My consultations are a space for you to ask anything — I&rsquo;ll always tell you what I genuinely think, even if that means doing nothing at all.&rdquo;
            </blockquote>
            <p className="text-neutral-500 text-[9px] font-light tracking-[0.35em] uppercase">
              Dr. Yalda Jamali — MBChB · MSc Dermatology · FACCSM
            </p>
          </div>
        </div>
      </section>

      <DrQuote />
    </main>
  );
}
