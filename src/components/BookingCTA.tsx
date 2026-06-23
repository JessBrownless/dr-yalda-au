interface BookingCTAProps {
  overline?: string;
  heading?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  leftImage?: string;
  leftImagePosition?: string;
  rightImage?: string;
  rightImagePosition?: string;
}

export default function BookingCTA({
  overline = "Start with a conversation",
  heading = "Book a consultation",
  body = "Be heard, ask questions, and understand your options — with honesty and care at every step.",
  buttonText = "Book now",
  buttonHref = "/appointments",
  leftImage = "/assets/IMG_0028.avif",
  leftImagePosition = "center center",
  rightImage = "/assets/Yalda-17.avif",
  rightImagePosition = "center 40%",
}: BookingCTAProps) {
  return (
    <section className="relative overflow-hidden bg-parchment" style={{ minHeight: "max(500px, calc(40.5vw + 121px))" }}>

      {/* Left image — bleeds off left edge, anchored to top. Widens at large breakpoints to close the collage gap on big screens (the right image stays fixed, so they never overlap). */}
      <div className="absolute -left-[2%] top-0 hidden md:block overflow-hidden w-[48%] min-[1440px]:w-[54%] min-[1700px]:w-[58%]" data-aos="fade" data-aos-duration="1100" data-aos-easing="ease-out-sine" style={{ height: "calc(36vw + 105px)" }}>
        <img src={leftImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: leftImagePosition }} />
      </div>

      {/* Right image — bleeds off right edge, larger downward offset. Fixed 38% (portrait) at all sizes; the left image closes the gap instead. */}
      <div className="absolute right-0 hidden md:block overflow-hidden w-[40%]" data-aos="fade" data-aos-delay="100" data-aos-duration="1100" data-aos-easing="ease-out-sine" style={{ height: "calc(36vw + 105px)", top: "calc(4.5vw + 16px)" }}>
        <img src={rightImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: rightImagePosition }} />
      </div>

      {/* Centre card — overlaps both images; frosted-glass (semi-transparent + blur) */}
      <div
        className="absolute z-10 hidden md:flex flex-col gap-4 justify-center items-center text-center bg-brand-white/70 backdrop-blur-lg"
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="2200"
        data-aos-easing="ease-out-sine"
        style={{
          left: "30%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40%",
          color: "rgba(45, 44, 42, 0.78)",
          padding: "clamp(3rem, 5vw, 6rem)",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="overline">{overline}</p>
          <h3 className="heading-statement from-overline text-brand-black">{heading}</h3>
        </div>
        <p className="body-serif">{body}</p>
        <a
          href={buttonHref}
          className="btn btn-primary-light self-center"
        >
          {buttonText}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
            <path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Mobile fallback — stacked */}
      <div className="md:hidden flex flex-col">
        <div className="aspect-square overflow-hidden" data-aos="fade" data-aos-duration="1100" data-aos-easing="ease-out-sine">
          <img src={rightImage} alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: rightImagePosition }} />
        </div>
        <div className="flex flex-col items-center text-center gap-4 px-8 py-24 bg-brand-white" data-aos="fade" data-aos-delay="150" data-aos-duration="2200" data-aos-easing="ease-out-sine" style={{ color: "rgba(45, 44, 42, 0.78)" }}>
          <div className="flex flex-col items-center">
            <p className="overline">{overline}</p>
            <h3 className="heading-statement from-overline text-brand-black">{heading}</h3>
          </div>
          <p className="body-serif">{body}</p>
          <a
            href={buttonHref}
            className="btn btn-primary-light self-center"
          >
            {buttonText}
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
              <path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
