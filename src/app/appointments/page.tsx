
const clinics = [
  {
    name: "Epios Cosmetic Clinic",
    suburb: "Paddington",
    address: "18 William St, Paddington, 2021",
    hours: null,
    href: "#",
    logo: "/assets/clinic-logo-epios.png",
    maps: "https://www.google.com/maps/dir/?api=1&destination=18+William+St+Paddington+NSW+2021",
  },
  {
    name: "Austin Clinic",
    suburb: "Balgowlah",
    address: "5/67 Wanganella St, Balgowlah, 2093",
    hours: null,
    href: "#",
    logo: null,
    maps: "https://www.google.com/maps/dir/?api=1&destination=5%2F67+Wanganella+St+Balgowlah+NSW+2093",
  },
];


export default function AppointmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative -mt-20" style={{ minHeight: "clamp(480px, 80vh, 920px)" }}>

        {/* Full-bleed background image */}
        <img
          src="/assets/big-scroll-03.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)", zIndex: 1 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)", zIndex: 2 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)", zIndex: 2 }} />

        {/* Overlay panel */}
        <div className="absolute left-0 right-0 pg-container" style={{ bottom: "clamp(2rem, 5vh, 4rem)", zIndex: 10 }}>
          <div data-aos="fade" data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-end">
            <div className="flex flex-col gap-3">
              <p className="text-white/50 text-[9px] font-light tracking-[0.5em] uppercase">
                Appointments
              </p>
              <h1
                className="text-white font-normal leading-[0.95]"
                style={{ fontFamily: "'Heading', serif", fontSize: "clamp(3.5rem, 5.5vw, 6.5rem)", letterSpacing: "0.01em", textTransform: "none" }}
              >
                Book Now
              </h1>
            </div>
            <p className="text-white/60 font-light leading-relaxed" style={{ fontSize: "15px", fontFamily: "'Heading', serif", paddingBottom: "0.35em" }}>
              Dr Yalda receives patients by appointment across two Sydney clinics — Paddington and Balgowlah.
            </p>
          </div>
        </div>

      </section>
      <div id="hero-end" />

      {/* Clinic locations */}
      <section className="bg-parchment py-24 md:py-32">

        <div className="pg-container">

          {/* Image + clinic list */}
          <div className="grid grid-cols-12 gap-4 md:gap-16 items-center">

            {/* Left — image */}
            <div className="hidden md:block col-span-12 md:col-span-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img src="/assets/IMG_0031.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Right — heading + clinic list */}
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>

              {/* Heading */}
              <div className="flex flex-col gap-3 mb-4">
                <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
                  Book Consultation
                </p>
                <h2
                  className="text-brand-black font-normal leading-[0.95] text-[2.5rem] lg:text-[3.25rem]"
                  style={{ fontFamily: "'Heading', serif", letterSpacing: "0.04em", textTransform: "uppercase" }}
                >
                  In-person
                </h2>
                <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "17px", fontFamily: "'Heading', serif" }}>
                  In-clinic consultations are the only setting where prescriptions and treatments can take place.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-neutral-300 mt-2">
              {clinics.map(({ name, hours, href, address }) => (
                <div key={name} className="flex items-center justify-between gap-6 py-7 first:pt-0">

                  {/* Left — clinic name + address */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-brand-black font-normal leading-tight text-[1.25rem] lg:text-[1.5rem]"
                      style={{ fontFamily: "'Heading', serif", letterSpacing: "0.04em", textTransform: "uppercase" }}
                    >
                      {name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 0C2.015 0 0 2.015 0 4.5c0 3.375 4.5 6.5 4.5 6.5S9 7.875 9 4.5C9 2.015 6.985 0 4.5 0zm0 6.125A1.625 1.625 0 1 1 4.5 2.875a1.625 1.625 0 0 1 0 3.25z" fill="#aaa"/>
                      </svg>
                      <p style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: 300, color: "#666", letterSpacing: "0.05em" }}>{address}</p>
                    </div>
                    {hours && <p style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: 300, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>{hours}</p>}
                  </div>

                  {/* Right — book button */}
                  <a
                    href={href}
                    className="flex-shrink-0 px-7 py-2.5 bg-brand-black text-white text-[9px] font-light tracking-[0.35em] uppercase hover:bg-neutral-800 transition-colors duration-300"
                  >
                    Book
                  </a>

                </div>
              ))}
              </div>

            </div>

          </div>
        </div>

        {/* Phone — sits at bottom of parchment, overlaps black section below */}
        <div className="md:hidden flex justify-center relative z-10 mt-12 pb-0" style={{ marginBottom: "-320px" }}>
          <div className="media-teaser__phone" style={{ width: "200px" }}>
            <div className="media-teaser__phone-notch" style={{ width: "70px", height: "20px" }} />
            <div className="relative w-full overflow-hidden" style={{ background: "#1c1c1e", aspectRatio: "9/19", borderRadius: "32px" }}>
              <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 pt-2" style={{ zIndex: 2 }}>
                <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.9)", fontFamily: "sans-serif", fontWeight: 600 }}>9:41</span>
                <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}>FaceTime</span>
                <div className="flex items-center gap-1">
                  <div style={{ width: "10px", height: "6px", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "1px", position: "relative" }}>
                    <div style={{ position: "absolute", left: "1px", top: "1px", bottom: "1px", width: "60%", background: "rgba(255,255,255,0.8)", borderRadius: "0.5px" }} />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 flex justify-center pt-8" style={{ zIndex: 2 }}>
                <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.85)", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>12:34</span>
              </div>
              <div className="absolute overflow-hidden" style={{ width: "48px", aspectRatio: "3/4", top: "12px", right: "8px", borderRadius: "6px", border: "1.5px solid rgba(255,255,255,0.3)", background: "#2c2c2e", zIndex: 3 }}>
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #3a3a3c 0%, #2c2c2e 100%)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#48484a" }} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 pb-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)", zIndex: 2, paddingTop: "24px" }}>
                <div className="flex items-center justify-center rounded-full" style={{ width: "28px", height: "28px", background: "rgba(255,255,255,0.2)" }}>
                  <svg width="10" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" fill="none"/></svg>
                </div>
                <div className="flex items-center justify-center rounded-full" style={{ width: "36px", height: "36px", background: "#ff3b30" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                </div>
                <div className="flex items-center justify-center rounded-full" style={{ width: "28px", height: "28px", background: "rgba(255,255,255,0.2)" }}>
                  <svg width="12" height="10" viewBox="0 0 24 20" fill="white"><path d="M23 4l-7 4V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-4l7 4V4z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Telephone consultations */}
      <section className="bg-brand-black pt-[320px] pb-24 md:py-40 overflow-hidden">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-8 order-2 md:order-1">

              <div className="flex flex-col gap-3">
                <p className="text-neutral-400 text-[9px] font-light tracking-[0.5em] uppercase">
                  Book Consultation
                </p>
                <h2
                  className="text-white font-normal leading-[0.95] text-[2.5rem] lg:text-[3.25rem]"
                  style={{ fontFamily: "'Heading', serif", letterSpacing: "0.04em", textTransform: "uppercase" }}
                >
                  Via Phone
                </h2>
                <p className="text-neutral-500 font-light leading-relaxed" style={{ fontSize: "17px", fontFamily: "'Heading', serif" }}>
                  Each session runs for 15 minutes via online video and is not a replacement for your in-clinic consultation.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-neutral-500">
                {[
                  { text: "Overview of treatments, suitability and approximate costs", icon: "tick" },
                  { text: "Available to prospective Sydney patients only", icon: "tick" },
                  { text: "Not suitable for skincare, prescriptions or dermatological concerns", icon: "cross" },
                ].map(({ text, icon }) => (
                  <div key={text} className="flex items-start gap-4 py-4">
                    {icon === "tick" ? (
                      <svg className="flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 4" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 3l8 8M11 3l-8 8" stroke="#525252" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                    <p className="text-neutral-300 font-light leading-relaxed" style={{ fontSize: "17px", fontFamily: "'Heading', serif" }}>{text}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/dryalda-epioscosmeticclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-10 py-3 bg-white text-brand-black text-[9px] font-light tracking-[0.4em] uppercase hover:bg-neutral-200 transition-colors duration-300"
              >
                Book
              </a>

            </div>

            {/* Right — phone mockup (desktop only) */}
            <div className="hidden md:flex col-span-12 md:col-span-4 md:col-start-9 justify-end order-1 md:order-2">
              <div className="media-teaser__phone">
                <div className="media-teaser__phone-notch" style={{ width: "70px", height: "20px" }} />
                {/* FaceTime UI */}
                <div className="relative w-full overflow-hidden" style={{ background: "#1c1c1e", aspectRatio: "9/19", borderRadius: "32px" }}>

                  {/* Main caller — Dr. Yalda */}
                  <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="absolute inset-0 w-full h-full object-cover object-top" />

                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 pt-2" style={{ zIndex: 2 }}>
                    <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.9)", fontFamily: "sans-serif", fontWeight: 600 }}>9:41</span>
                    <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}>FaceTime</span>
                    <div className="flex items-center gap-1">
                      <div style={{ width: "10px", height: "6px", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "1px", position: "relative" }}>
                        <div style={{ position: "absolute", left: "1px", top: "1px", bottom: "1px", width: "60%", background: "rgba(255,255,255,0.8)", borderRadius: "0.5px" }} />
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center pt-8" style={{ zIndex: 2 }}>
                    <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.85)", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>12:34</span>
                  </div>

                  {/* PiP — your camera */}
                  <div className="absolute overflow-hidden" style={{ width: "48px", aspectRatio: "3/4", top: "12px", right: "8px", borderRadius: "6px", border: "1.5px solid rgba(255,255,255,0.3)", background: "#2c2c2e", zIndex: 3 }}>
                    <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #3a3a3c 0%, #2c2c2e 100%)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#48484a" }} />
                    </div>
                  </div>

                  {/* Bottom controls */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 pb-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)", zIndex: 2, paddingTop: "24px" }}>
                    {/* Mute */}
                    <div className="flex items-center justify-center rounded-full" style={{ width: "28px", height: "28px", background: "rgba(255,255,255,0.2)" }}>
                      <svg width="10" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" fill="none"/></svg>
                    </div>
                    {/* End call */}
                    <div className="flex items-center justify-center rounded-full" style={{ width: "36px", height: "36px", background: "#ff3b30" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                    </div>
                    {/* Camera */}
                    <div className="flex items-center justify-center rounded-full" style={{ width: "28px", height: "28px", background: "rgba(255,255,255,0.2)" }}>
                      <svg width="12" height="10" viewBox="0 0 24 20" fill="white"><path d="M23 4l-7 4V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-4l7 4V4z"/></svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
