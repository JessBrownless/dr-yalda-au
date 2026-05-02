import { FaInstagram, FaTiktok, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import FeaturesList from "@/components/FeaturesList";

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
];

export default function MediaPage() {
  return (
    <main>
      {/* ─── HERO — 50/50 image background with centered text ──── */}
      <section className="relative overflow-hidden bg-brand-black" style={{ marginTop: "-80px" }}>

        {/* Full-width image background — fades in last over black */}
        <div className="absolute inset-0 overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "1.8s", animationDuration: "2.5s" }}>
          <img src="/assets/IMG_0031.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "center 15%" }} />
        </div>

        {/* Dark overlays — base dim + top fade for nav legibility + bottom fade for transition */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.4)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 55%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, rgba(8,6,4,0.35) 40%, transparent 70%)" }} />

        {/* Bottom text — H1+sub left (max 4 cols), jumplink right of container, baseline aligned */}
        <div className="relative z-10 flex flex-col justify-end pg-container pb-10 md:pb-14" style={{ minHeight: "90dvh", paddingTop: "120px" }}>
          <div className="flex flex-col gap-5 md:grid md:grid-cols-12 md:gap-8 md:items-end">
            <div className="md:col-span-6 flex flex-col items-start text-left">
              <h1
                className="heading-xl opacity-0 animate-fade-in"
                style={{ animationDelay: "0.7s", animationDuration: "1.0s" }}
              >
                Media
              </h1>
              <p className="opacity-0 animate-fade-in text-brand-white/50 font-light leading-relaxed mt-8 max-w-[42ch]" style={{ fontSize: "17px", fontFamily: "'Heading', serif", animationDelay: "0.7s", animationDuration: "1.0s" }}>
                Expert commentary, brand collaborations, and features — grounded in <em>evidence-based</em> care.
              </p>
            </div>
            <a
              href="#intro"
              className="body-xs-caps opacity-0 animate-fade-in self-start md:col-span-6 md:justify-self-end md:self-end hover:text-cream transition-colors duration-300 inline-flex items-center gap-3 whitespace-nowrap"
              style={{ animationDelay: "0.7s", animationDuration: "1.0s" }}
            >
              See media features
              <svg width="10" height="12" viewBox="0 0 14 16" fill="none" aria-hidden="true" className="md:w-3.5 md:h-4">
                <path d="M7 1v13M1 9l6 5 6-5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div id="hero-end" aria-hidden="true" style={{ height: 0, pointerEvents: "none" }} />
      </section>

      {/* Beyond the clinic — bottom padding removed on desktop so it flows into the logo strip */}
      <section id="intro" className="bg-parchment py-32 md:pt-52 md:pb-0 relative scroll-mt-20">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            {/* Left — heading + body */}
            <div className="col-span-12 md:col-span-8 flex flex-col gap-8" data-aos="fade" data-aos-duration="1000">

              <div className="flex flex-col gap-6">
                <p className="overline">
                  Beyond the clinic
                </p>
                <h3 className="heading-lg">
                  A trusted voice in cosmetic medicine.
                </h3>
              </div>

              <div className="flex gap-6 md:gap-10">
                <div className="hidden md:block w-px bg-neutral-300 flex-shrink-0 self-stretch" />
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <p className="body-serif">
                      Beyond the clinic, Dr. Yalda contributes expert commentary to leading publications, appears across broadcast and digital media, and partners with brands aligned with honest, evidence-based care.
                    </p>
                    <p className="body-serif">
                      Her approach is always the same — whether speaking to a journalist or a patient: honest, considered, and grounded in science. No hype. No hyperbole.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — Media contact */}
            <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-6 md:pt-1" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              <h2 className="overline">
                Media enquiries
              </h2>
              <p className="body-serif">
                For interviews, features, and brand collaborations, please reach out to Dr. Yalda&apos;s PR manager.
              </p>
              <div className="flex flex-col gap-1.5">
                <h3 className="heading-md">
                  [PR Manager Name]
                </h3>
                <h2 className="overline">
                  Public Relations
                </h2>
                <a
                  href="mailto:press@dryalda.com.au"
                  className="text-brand-black font-light underline-offset-4 hover:underline mt-2"
                  style={{ fontFamily: "'Heading', serif", fontSize: "0.95rem" }}
                >
                  press@dryalda.com.au
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand logo strip — sits below "Beyond the clinic" */}
      <section className="bg-parchment pb-16 md:pb-24">
        <div className="pg-container">
          <div className="flex flex-col items-center gap-10">
            <h2 className="overline">
              Proudly partnering and featured in
            </h2>
            {/* Mobile — wrapped, centered */}
            <div className="md:hidden flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
              <img src="/assets/logo-caudalie.svg" alt="Caudalie" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
              <img src="/assets/logo-no7.svg" alt="No7" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
              <span className="text-brand-black/60 font-light whitespace-nowrap" style={{ fontFamily: "sans-serif", fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)", letterSpacing: "0.2em" }}>
                MEDIK8
              </span>
              <img src="/assets/logo-clinique.svg" alt="Clinique" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
              <img src="/assets/logo-mamamia.svg" alt="Mamamia" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
            </div>
            {/* Desktop — justified across grid width */}
            <div className="hidden md:flex items-center justify-between w-full">
              <img src="/assets/logo-caudalie.svg" alt="Caudalie" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
              <img src="/assets/logo-no7.svg" alt="No7" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
              <span className="text-brand-black/60 font-light whitespace-nowrap" style={{ fontFamily: "sans-serif", fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)", letterSpacing: "0.2em" }}>
                MEDIK8
              </span>
              <img src="/assets/logo-clinique.svg" alt="Clinique" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
              <img src="/assets/logo-mamamia.svg" alt="Mamamia" className="h-5 opacity-60" style={{ filter: "brightness(0)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* How we can work together */}
      <section className="bg-parchment overflow-hidden relative py-24 md:py-32 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Coloured strip — left edge, behind the image (a shade darker than the section) */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0" style={{ width: "36%", background: "#E0DDD6" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-10 md:gap-12 items-center">

            {/* Left — image */}
            <div className="col-span-12 md:col-span-5" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:aspect-[3/4]">
                <img src="/assets/IMG_0040.jpg" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Right — numbered list */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

              <h2 className="overline mb-6">
                How we can work together
              </h2>

              {[
                {
                  num: "01",
                  title: "Press & Editorial",
                  description: "Expert commentary, interviews, and features for print and digital publications.",
                },
                {
                  num: "02",
                  title: "Podcast",
                  description: "Guest appearances on podcasts, TV segments, and digital media platforms.",
                },
                {
                  num: "03",
                  title: "Brand Partnerships",
                  description: "Collaborative campaigns with skincare brands backed by science and ethical practice.",
                },
              ].map(({ num, title, description }) => (
                <div key={num} className="flex items-baseline gap-5 py-8 border-b border-neutral-200 first:border-t first:border-neutral-200">
                  <span className="stat-lg text-neutral-400 flex-shrink-0">
                    {num}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="heading-md">
                      {title}
                    </h3>
                    <p className="body-serif">
                      {description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Latest appearances gallery */}
      <section className="bg-cream py-24 md:py-32">
        <div className="pg-container">
          <h2 className="overline mb-6">
            Latest appearances
          </h2>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {[
              { src: "/assets/IMG_4902.JPG", caption: "Caudalie launch panel, Sydney", year: "2024", aspect: "16/10", colSpan: "md:col-span-7" },
              { src: "/assets/IMG_4905.JPG", caption: "Body + Soul magazine feature", year: "2024", aspect: "3/4", colSpan: "md:col-span-5" },
              { src: "/assets/IMG_4905.JPG", caption: "No7 brand campaign shoot", year: "2023", aspect: "3/4", colSpan: "md:col-span-5" },
              { src: "/assets/IMG_4902.JPG", caption: "Mamamia podcast appearance", year: "2023", aspect: "16/10", colSpan: "md:col-span-7" },
            ].map(({ src, caption, year, aspect, colSpan }, i) => (
              <div
                key={i}
                className={`col-span-12 ${colSpan} flex flex-col gap-10 md:gap-12`}
                data-aos="fade"
                data-aos-delay={i * 100}
                data-aos-duration="1000"
              >
                <div className="overflow-hidden" style={{ aspectRatio: aspect }}>
                  <img src={src} alt={caption} className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]" />
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="heading-md">
                    {caption}
                  </h3>
                  <p className="overline">
                    {year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press features list */}
      <section className="bg-parchment py-24 md:py-32" id="features">
        <div className="pg-container">

          <h2 className="overline mb-6">
            Media features
          </h2>

          <FeaturesList />

        </div>
      </section>



      {/* TestimonialCarousel removed */}

      {/* Podcast section */}
      <section className="bg-[#2D2925] overflow-hidden" style={{ paddingTop: "120px" }}>
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-8 pt-4">
              <div className="flex flex-col gap-6">
                <h2 className="overline">
                  Podcast appearances
                </h2>
                <h3 className="heading-lg">
                  Listen To<br />dr. yalda
                </h3>
              </div>
              <div className="flex flex-col divide-y divide-neutral-800">
                {[
                  { show: "The Glow Up Podcast", episode: "The truth about filler — what no one tells you", duration: "42 min" },
                  { show: "Skin Deep with Sarah", episode: "Evidence-based aesthetics and why it matters", duration: "35 min" },
                  { show: "The Beauty Edit", episode: "Natural results: redefining cosmetic medicine", duration: "28 min" },
                ].map(({ show, episode, duration }, i) => (
                  <div key={i} className="group flex items-start justify-between gap-6 py-5 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <button className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-cream transition-colors duration-300">
                        <span className="text-neutral-500 group-hover:text-cream transition-colors duration-300" style={{ fontSize: "8px", paddingLeft: "2px" }}>▶</span>
                      </button>
                      <div className="flex flex-col gap-1">
                        <p className="overline">{show}</p>
                        <h3 className="heading-md">{episode}</h3>
                      </div>
                    </div>
                    <span className="overline flex-shrink-0 mt-1">{duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phone mockup, crops at bottom */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex justify-center">
              <div
                className="phone-mockup-height"
                style={{
                  width: 300,
                  background: "#111",
                  borderRadius: 48,
                  padding: 12,
                  boxShadow: "0 0 0 1px rgba(246,246,243,0.08), 0 40px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(246,246,243,0.04)",
                  position: "relative",
                  marginBottom: "-120px",
                }}
              >
                {/* Notch */}
                <div style={{ width: 110, height: 28, background: "#111", borderRadius: "0 0 18px 18px", position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", zIndex: 2 }} />

                {/* Screen */}
                <div style={{ background: "#1C1B1A", borderRadius: 32, overflow: "hidden", paddingBottom: 24 }}>

                  {/* Artwork */}
                  <div className="phone-artwork-ratio" style={{ position: "relative", width: "100%" }}>
                    <img
                      src="/assets/IMG_0028.avif"
                      alt="Podcast episode"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                    {/* Gradient over artwork */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #1C1B1A 100%)" }} />
                  </div>

                  {/* Player UI */}
                  <div style={{ padding: "0 20px" }}>
                    {/* Show + episode */}
                    <p style={{ color: "#525252", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6 }}>The Glow Up Podcast</p>
                    <p style={{ color: "#fff", fontSize: 13, fontWeight: 300, lineHeight: 1.4, marginBottom: 16 }}>The truth about filler — what no one tells you</p>

                    {/* Progress bar */}
                    <div style={{ height: 2, background: "#333", borderRadius: 2, marginBottom: 6, position: "relative" }}>
                      <div style={{ height: "100%", width: "38%", background: "#fff", borderRadius: 2 }} />
                      <div style={{ width: 8, height: 8, background: "#fff", borderRadius: "50%", position: "absolute", top: -3, left: "38%", transform: "translateX(-50%)" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                      <span style={{ color: "#525252", fontSize: 9 }}>16:04</span>
                      <span style={{ color: "#525252", fontSize: 9 }}>42:18</span>
                    </div>

                    {/* Controls */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28 }}>
                      <span style={{ color: "#525252", fontSize: 16 }}>⏮</span>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#111", fontSize: 14, paddingLeft: 3 }}>▶</span>
                      </div>
                      <span style={{ color: "#525252", fontSize: 16 }}>⏭</span>
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
