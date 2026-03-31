
const clinics = [
  {
    name: "Epios Cosmetic Clinic",
    suburb: "Paddington",
    address: "18 William St, Paddington, 2021",
    hours: "Wednesday – Friday",
    href: "#",
    logo: "/assets/clinic-logo-epios.png",
    maps: "https://www.google.com/maps/dir/?api=1&destination=18+William+St+Paddington+NSW+2021",
  },
  {
    name: "Austin Clinic",
    suburb: "Balgowlah",
    address: "5/67 Wanganella St, Balgowlah, 2093",
    hours: "Tuesdays",
    href: "#",
    logo: null,
    maps: "https://www.google.com/maps/dir/?api=1&destination=5%2F67+Wanganella+St+Balgowlah+NSW+2093",
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
            className="relative z-0 text-brand-black font-normal leading-none opacity-0 animate-fade-in"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.5rem, 11vw, 12rem)", letterSpacing: "0.05em", marginRight: "-10px", alignSelf: "flex-start", marginTop: "-8%", animationDelay: "0.1s" }}
          >
            BOOK
          </span>

          <div className="relative z-10 flex-shrink-0 overflow-hidden opacity-0 animate-fade-in" style={{ width: "clamp(160px, 30vw, 300px)", aspectRatio: "3/4", animationDelay: "0.35s" }}>
            <img
              src="/assets/dr-yalda-treatment-03.avif"
              alt="Dr. Yalda Jamali"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <span
            className="relative z-20 text-brand-black font-normal leading-none opacity-0 animate-fade-in"
            style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.5rem, 11vw, 12rem)", letterSpacing: "0.05em", marginLeft: "-10px", alignSelf: "flex-end", marginBottom: "-8%", animationDelay: "0.1s" }}
          >
            NOW
          </span>

        </div>

      </section>

      {/* Clinic locations */}
      <section className="bg-parchment py-24 md:py-32">


<div className="pg-container">
          <div className="grid grid-cols-12 gap-4 md:gap-16 items-stretch">

            {/* Left — intro text + cropped image */}
            <div className="col-span-12 md:col-span-5 flex flex-col justify-between gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col gap-4">
                <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
                  Schedule an
                </p>
                <h2
                  className="text-brand-black font-normal leading-[1.0] -mt-2"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2rem, 2.8vw, 2.8rem)", letterSpacing: "0" }}
                >
                  IN-PERSON<br /><em>consultation.</em>
                </h2>
                <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "15px", fontFamily: "'Heading', serif", maxWidth: "38ch" }}>
                  Dr. Yalda receives patients by appointment across two Sydney clinics — Balgowlah on Tuesdays, and Paddington Wednesday through Friday.
                </p>
              </div>


            </div>

            {/* Right — clinic list */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col divide-y divide-neutral-300 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {clinics.map(({ name, suburb, hours, href, address }) => (
                <div key={name} className="py-8 flex flex-col gap-1.5">

                  <h3
                    className="text-brand-black font-normal leading-tight"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.2vw, 1.25rem)", letterSpacing: "0.08em", maxWidth: "60%" }}
                  >
                    {name.toUpperCase()}
                  </h3>
                  <p className="text-neutral-500 font-light" style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.85rem, 1vw, 1rem)", fontStyle: "italic" }}>{suburb}</p>
                  <p style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: 200, color: "#777" }}>{hours}</p>

                  <p className="mt-1" style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: 100, color: "#aaa" }}>{address}</p>

                  {/* Book Now — centered on mobile, left-aligned on desktop */}
                  <div className="flex justify-start mt-3">
                    <a
                      href={href}
                      className="px-10 py-3 bg-brand-black text-white text-[9px] font-light tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
                    >
                      Book Now
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Phone — sits at bottom of parchment, overlaps black section below */}
        <div className="md:hidden flex justify-center relative z-10 mt-12 pb-0" style={{ marginBottom: "-200px" }}>
          <div className="media-teaser__phone" style={{ width: "200px" }}>
            <div className="media-teaser__phone-notch" style={{ width: "70px", height: "20px" }} />
            <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="media-teaser__phone-img" />
          </div>
        </div>

      </section>

      {/* Telephone consultations */}
      <section className="bg-brand-black pt-[400px] pb-24 md:py-40 overflow-hidden">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-8 order-2 md:order-1">

              <div className="flex flex-col gap-3">
                <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase">
                  Complimentary
                </p>
                <h2
                  className="text-white font-normal leading-[1.0]"
                  style={{ fontFamily: "'Heading', serif", fontSize: "clamp(2.75rem, 3.5vw, 3.5rem)", letterSpacing: "0" }}
                >
                  ONLINE<br /><em>consultation.</em>
                </h2>
              </div>

              <p className="text-neutral-400 font-light leading-[1.8]" style={{ fontSize: "15px", fontFamily: "'Heading', serif", maxWidth: "38ch" }}>
                Book a complimentary 15-minute online consult to understand what treatments Dr. Yalda offers, who they may be suitable for, and to get an approximate idea of downtime and costs.
              </p>

              <div className="flex flex-col divide-y divide-neutral-800">
                {[
                  "15 minutes via online video",
                  "Available to prospective Sydney patients only",
                  "Not suitable for skincare, prescriptions or dermatological concerns",
                ].map((rule) => (
                  <div key={rule} className="flex items-baseline gap-4 py-4">
                    <span className="text-neutral-600 flex-shrink-0 text-[9px] tracking-[0.1em]">—</span>
                    <p className="text-neutral-300 font-light" style={{ fontSize: "14px", fontFamily: "'Heading', serif", letterSpacing: "0.02em" }}>{rule}</p>
                  </div>
                ))}
              </div>

              <p className="text-neutral-600 font-light" style={{ fontSize: "11px", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>
                * This session is not a replacement for your in-clinic consultation.
              </p>

              <a
                href="https://calendly.com/dryalda-epioscosmeticclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-white text-[10px] font-normal tracking-[0.35em] uppercase border-b border-white/40 pb-px hover:opacity-50 transition-opacity duration-300 mt-2"
                style={{ fontFamily: "sans-serif" }}
              >
                Book a Complimentary Consult
              </a>

            </div>

            {/* Right — phone mockup (desktop only) */}
            <div className="hidden md:flex col-span-12 md:col-span-4 md:col-start-9 justify-center order-1 md:order-2">
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

    </main>
  );
}
