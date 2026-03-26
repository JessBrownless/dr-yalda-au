export default function MediaTeaser() {
  return (
    <section className="media-teaser">
      <div className="media-teaser__inner">

        {/* Left — text */}
        <div className="media-teaser__text">
          <p className="media-teaser__eyebrow">In the media</p>
          <h2 className="media-teaser__heading">
            DR. YALDA<br />IN THE PRESS.
          </h2>
          <p className="media-teaser__body">
            Catch Dr. Yalda's latest podcast appearances, expert commentary,
            and press features on cosmetic medicine and aesthetic artistry.
          </p>
          <p className="media-teaser__label">FIND HER ON</p>
          <div className="media-teaser__links">
            <a href="/media" className="media-teaser__pill">Podcasts</a>
            <a href="/media" className="media-teaser__pill media-teaser__pill--active">Press</a>
            <a href="/media" className="media-teaser__pill">Instagram</a>
          </div>
        </div>

        {/* Right — phone */}
        <div className="media-teaser__phone-wrap">
          <div className="media-teaser__phone">
            <div className="media-teaser__phone-notch" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/Yalda-17.avif"
              alt="Dr. Yalda Jamali"
              className="media-teaser__phone-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
