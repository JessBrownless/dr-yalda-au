export default function ParallaxHero() {
  return (
    <section className="parallax-hero" aria-label="Philosophy">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/dr-yalda-jamali-cosmetic-doctor-sydney.avif"
        alt="Dr. Yalda Jamali, a leading cosmetic doctor in Sydney, specializing in natural-looking aesthetic treatments."
        width={2500}
        height={1664}
        loading="eager"
        // @ts-expect-error – fetchpriority is valid HTML but TS types lag behind
        fetchpriority="high"
        aria-hidden="true"
        className="parallax-hero__preload"
      />

      <div className="parallax-hero__bg" role="presentation" />
      <div className="parallax-hero__overlay" role="presentation" />

      <div className="parallax-hero__content pg-container">

        {/* Big display text — full 12 cols */}
        <div className="parallax-hero__display">
          <p className="parallax-hero__display-line1">MEDICINE</p>
          <p className="parallax-hero__display-line2"><em>meets</em> ARTISTRY.</p>
          <p className="parallax-hero__display-line3">IN SYDNEY.</p>
        </div>

        {/* Vertical rule */}
        <div className="parallax-hero__rule" aria-hidden="true" />

        {/* Body text — center cols */}
        <div className="parallax-hero__body">
          <p className="parallax-hero__eyebrow">Dr. Yalda Jamali</p>
          <p className="parallax-hero__quote">
            Medicine is an art. Every face tells a story —<br />
            my role is simply to help it shine.
          </p>
        </div>

      </div>
    </section>
  );
}
