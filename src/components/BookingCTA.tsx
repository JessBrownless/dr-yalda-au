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
  body = "Dr. Yalda’s consultations are a space to be heard, ask questions, and understand your options — with honesty and care at every step.",
  buttonText = "Book now",
  buttonHref = "/appointments",
  leftImage = "/assets/IMG_0028.avif",
  leftImagePosition = "center center",
  rightImage = "/assets/Yalda-17.avif",
  rightImagePosition = "center 40%",
}: BookingCTAProps) {
  return (
    <section className="relative overflow-hidden bg-parchment" style={{ minHeight: "max(500px, calc(40.5vw + 121px))" }}>

      {/* Left image — bleeds off left edge, anchored to top */}
      <div className="absolute left-0 top-0 hidden md:block overflow-hidden" style={{ width: "48%", height: "calc(36vw + 105px)" }}>
        <img src={leftImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: leftImagePosition }} />
      </div>

      {/* Right image — same size, bleeds off right edge, larger downward offset */}
      <div className="absolute right-0 hidden md:block overflow-hidden" style={{ width: "48%", height: "calc(36vw + 105px)", top: "calc(4.5vw + 16px)" }}>
        <img src={rightImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: rightImagePosition }} />
      </div>

      {/* Centre card — overlaps both images */}
      <div
        className="absolute z-10 hidden md:flex flex-col gap-4 justify-center items-start text-left"
        style={{
          left: "34%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "32%",
          background: "#F6F6F3",
          color: "rgba(45, 44, 42, 0.78)",
          padding: "clamp(3rem, 5vw, 6rem)",
        }}
      >
        <div className="flex flex-col gap-6 items-start">
          <p className="overline">{overline}</p>
          <h3 className="heading-lg">{heading}</h3>
        </div>
        <p className="body-serif">{body}</p>
        <a
          href={buttonHref}
          className="self-start border border-brand-black text-brand-black font-normal uppercase rounded-full px-7 py-3.5 text-center transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
          style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
        >
          {buttonText}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
            <path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Mobile fallback — stacked */}
      <div className="md:hidden flex flex-col">
        <div className="aspect-square overflow-hidden">
          <img src={rightImage} alt="Dr. Yalda Jamali" className="w-full h-full object-cover" style={{ objectPosition: rightImagePosition }} />
        </div>
        <div className="flex flex-col gap-4 px-8 py-14" style={{ background: "#F6F6F3", color: "rgba(45, 44, 42, 0.78)" }}>
          <div className="flex flex-col gap-6">
            <p className="overline">{overline}</p>
            <h3 className="heading-lg">{heading}</h3>
          </div>
          <p className="body-serif">{body}</p>
          <a
            href={buttonHref}
            className="self-start border border-brand-black text-brand-black font-normal uppercase rounded-full px-7 py-3.5 transition-all duration-300 hover:bg-brand-black hover:text-cream inline-flex items-center gap-3 whitespace-nowrap"
            style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-lato)" }}
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
