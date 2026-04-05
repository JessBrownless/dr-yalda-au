import DrQuote from "@/components/DrQuote";
import TestimonialSection from "@/components/TestimonialSection";
import LogoQuilt from "@/components/LogoQuilt";
import MediaTeaser from "@/components/MediaTeaser";
import HeroHome from "@/components/HeroHome";

export default function Home() {
  return (
    <main>
      <HeroHome />

      {/* Her Story — statement block */}
      <section className="bg-cream py-32 md:py-52 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto w-full px-8 md:px-16 flex flex-col items-center">
          <p
            data-aos="fade"
            className="text-neutral-500 text-[10px] font-light tracking-[0.45em] uppercase mb-12"
          >
            Her story
          </p>
          <h2
            data-aos="fade"
            data-aos-delay="120"
            className="text-brand-black"
            style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", maxWidth: "20ch", lineHeight: "1.05", letterSpacing: "-0.02em" }}
          >
            A doctor who listens first, treats with precision, and always puts your natural beauty above everything else.
          </h2>
        </div>
      </section>

      {/* Philosophy section — parchment-backed image left, text right */}
      <section className="bg-cream overflow-hidden relative py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — left edge, behind the image */}
        <div className="absolute hidden md:block left-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — image over parchment */}
            <div className="col-span-12 md:col-span-5" data-aos="fade" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:[aspect-ratio:3/4]" style={{ transform: "scale(1.05)", transformOrigin: "center center" }}>
                <img src="/assets/Yalda-17.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Right — introduction text */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">

              <p
                className="text-neutral-400 font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}
              >
                The Foundation
              </p>

              <p
                className="text-brand-black font-normal"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.5rem, 2.8vw, 3rem)",
                  lineHeight: "1.2",
                  letterSpacing: "0",
                }}
              >
                Clinical excellence meets an artist's eye.
              </p>

              <p
                className="text-neutral-600 font-light leading-relaxed"
                style={{ fontSize: "15px", fontFamily: "var(--font-hanken)", letterSpacing: "0.01em" }}
              >
                Dr. Yalda Jamali combines rigorous medical training with a bespoke approach to aesthetics. Each treatment is a collaboration, designed to enhance your natural architecture.
              </p>

              <a
                href="/about"
                className="flex items-center gap-3 text-brand-black font-normal uppercase transition-opacity duration-300 hover:opacity-60 mt-2"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
              >
                Meet Dr. Yalda <span aria-hidden="true" style={{ letterSpacing: 0 }}>→</span>
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Reversed section — parchment-backed image right, text left */}
      <section className="bg-cream overflow-hidden relative py-20 md:flex md:items-center" style={{ minHeight: "80vh" }}>

        {/* Parchment strip — right edge, behind the image */}
        <div className="absolute hidden md:block right-0 top-0 bottom-0 bg-parchment" style={{ width: "36%" }} />

        <div className="pg-container relative">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-8 order-2 md:order-1" data-aos="fade" data-aos-duration="1000">

              <p
                className="text-neutral-400 font-normal uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}
              >
                The Foundation
              </p>

              <p
                className="text-brand-black font-normal"
                style={{
                  fontFamily: "'Heading', serif",
                  fontSize: "clamp(1.5rem, 2.8vw, 3rem)",
                  lineHeight: "1.2",
                  letterSpacing: "0",
                }}
              >
                Clinical excellence meets an artist's eye.
              </p>

              <p
                className="text-neutral-600 font-light leading-relaxed"
                style={{ fontSize: "15px", fontFamily: "var(--font-hanken)", letterSpacing: "0.01em" }}
              >
                Dr. Yalda Jamali combines rigorous medical training with a bespoke approach to aesthetics. Each treatment is a collaboration, designed to enhance your natural architecture.
              </p>

              <a
                href="/about"
                className="flex items-center gap-3 text-brand-black font-normal uppercase transition-opacity duration-300 hover:opacity-60 mt-2"
                style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "sans-serif" }}
              >
                Meet Dr. Yalda <span aria-hidden="true" style={{ letterSpacing: 0 }}>→</span>
              </a>

            </div>

            {/* Right — image over parchment */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2" data-aos="fade" data-aos-delay="150" data-aos-duration="1000">
              <div className="overflow-hidden aspect-square md:[aspect-ratio:3/4]" style={{ transform: "scale(1.05)", transformOrigin: "center center" }}>
                <img src="/assets/IMG_0012.avif" alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: "50% 20%" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Parallax quote */}
      <section
        className="relative flex items-center justify-center"
        style={{
          minHeight: "clamp(360px, 50vw, 680px)",
          backgroundImage: "url('/assets/IMG_0028.avif')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/50" />
        <blockquote className="relative z-10 pg-container w-full flex flex-col gap-8">
          <svg data-aos="fade" data-aos-duration="1000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8" fill="rgba(244,241,238,0.3)" aria-hidden="true">
            <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z"/>
          </svg>
          <p
            data-aos="fade"
            data-aos-delay="180"
            data-aos-duration="1200"
            className="font-normal leading-[1.25]"
            style={{
              fontFamily: "'Heading', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 4rem)",
              color: "#F4F1EE",
              maxWidth: "22ch",
            }}
          >
            I believe the most beautiful results are the ones no one can quite put their finger on.
          </p>
          <cite
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="not-italic font-normal uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-hanken)", color: "rgba(244,241,238,0.5)" }}
          >
            Dr. Yalda Jamali
          </cite>
        </blockquote>
      </section>

      <TestimonialSection />

      <LogoQuilt />
    </main>
  );
}
