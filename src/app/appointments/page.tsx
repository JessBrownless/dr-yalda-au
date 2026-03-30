import DrQuote from "@/components/DrQuote";

const clinics = [
  {
    name: "Epios Cosmetic Clinic",
    address: "18 William St, Paddington, 2021",
    hours: "Wednesday – Friday",
    href: "#",
    logo: "/assets/clinic-logo-epios.png",
    maps: "https://www.google.com/maps/dir/?api=1&destination=18+William+St+Paddington+NSW+2021",
  },
  {
    name: "Northern Sydney Dermatology & Laser",
    address: "1/29 Baringa Rd, Northbridge, 2063",
    hours: "Mondays",
    href: "#",
    logo: null,
    maps: "https://www.google.com/maps/dir/?api=1&destination=1%2F29+Baringa+Rd+Northbridge+NSW+2063",
  },
  {
    name: "Austin Clinic",
    address: "5/67 Wanganella St, Balgowlah, 2093",
    hours: "Tuesdays",
    href: "#",
    logo: null,
    maps: "https://www.google.com/maps/dir/?api=1&destination=5%2F67+Wanganella+St+Balgowlah+NSW+2093",
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
      <section className="bg-parchment py-24 md:py-32 overflow-hidden">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-4 md:gap-16 items-start">

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
                  Schedule an
                </p>
                <h2
                  className="text-brand-black font-normal leading-tight"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.75rem, 3vw, 3rem)", letterSpacing: "0.02em" }}
                >
                  IN-PERSON CONSULTATION
                </h2>
                <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "14px", fontFamily: "'Heading', serif" }}>
                  Dr. Yalda works across Northbridge on Mondays, Balgowlah on Tuesdays and Paddington on Wednesday – Friday.
                </p>
              </div>

            </div>

            {/* Right — clinic list */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col divide-y divide-neutral-400">
              {clinics.map(({ name, address, hours, href, maps }) => (
                <div key={name} className="py-8 flex gap-5 items-start">

{/* Info + buttons */}
                  <div className="flex-1 flex flex-col gap-4">
                    <h3
                      className="text-brand-black font-normal leading-tight"
                      style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.3rem, 2vw, 1.8rem)", letterSpacing: "0.1em" }}
                    >
                      {name.toUpperCase()}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2.5">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <rect x="1" y="2" width="10" height="9" rx="1" stroke="#525252" strokeWidth="0.75"/>
                          <path d="M1 5h10" stroke="#525252" strokeWidth="0.75"/>
                          <path d="M4 1v2M8 1v2" stroke="#525252" strokeWidth="0.75" strokeLinecap="round"/>
                        </svg>
                        <p className="text-neutral-600 font-light" style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: 200, color: "#888" }}>{hours}</p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <path d="M6 1C3.79 1 2 2.79 2 5c0 3 4 7 4 7s4-4 4-7c0-2.21-1.79-4-4-4z" stroke="#525252" strokeWidth="0.75" fill="none"/>
                          <circle cx="6" cy="5" r="1.25" stroke="#525252" strokeWidth="0.75"/>
                        </svg>
                        <p className="text-neutral-600 font-light" style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: 200, color: "#888" }}>{address}</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={href}
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-brand-black text-white text-[9px] font-light tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
                      >
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <rect x="1" y="2" width="10" height="9" rx="1" stroke="white" strokeWidth="0.75"/>
                          <path d="M1 5h10" stroke="white" strokeWidth="0.75"/>
                          <path d="M4 1v2M8 1v2" stroke="white" strokeWidth="0.75" strokeLinecap="round"/>
                        </svg>
                        Book Now
                      </a>
                      <a
                        href={maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-neutral-400 text-neutral-600 text-[9px] font-light tracking-[0.4em] uppercase hover:border-brand-black hover:text-brand-black transition-colors duration-300"
                        style={{ fontFamily: "sans-serif", fontWeight: 300 }}
                      >
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <path d="M6 1C3.79 1 2 2.79 2 5c0 3 4 7 4 7s4-4 4-7c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                          <circle cx="6" cy="5" r="1.25" stroke="currentColor" strokeWidth="0.75"/>
                        </svg>
                        Plan Journey
                      </a>
                    </div>

                  </div>

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
