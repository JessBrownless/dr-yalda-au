const clinics = [
  {
    name: "Epios Cosmetic Clinic",
    address: "18 William St, Paddington, 2021",
    hours: "Mon – Fri: 9am – 5pm",
    href: "#",
  },
  {
    name: "Northern Sydney Dermatology & Laser",
    address: "1/29 Baringa Rd, Northbridge, 2063",
    hours: "Mon – Fri: 9am – 5pm",
    href: "#",
  },
  {
    name: "Austin Clinic",
    address: "5/67 Wanganella St, Balgowlah, 2093",
    hours: "Mon – Fri: 9am – 5pm",
    href: "#",
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
      <section className="bg-parchment relative flex items-center justify-center overflow-hidden py-48 md:py-64">

        {/* Portrait — centered behind the text */}
        <div
          className="absolute"
          style={{ width: "clamp(180px, 22vw, 340px)", aspectRatio: "3/4", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <img
            src="/assets/Yalda-17.avif"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Heading — sits over the portrait */}
        <h1
          className="relative z-10 text-brand-black font-normal text-center leading-none select-none w-full px-4 whitespace-nowrap"
          style={{
            fontFamily: "'Heading', serif",
            fontSize: "clamp(4rem, 14vw, 14rem)",
            letterSpacing: "0.05em",
          }}
        >
          BOOK NOW
        </h1>

      </section>

      {/* Clinic locations */}
      <section className="bg-cream py-24 md:py-32">
        <div className="pg-container">

          <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-16">
            Choose a location
          </p>

          <div className="flex flex-col divide-y divide-neutral-200">
            {clinics.map(({ name, address, hours, href }) => (
              <div key={name} className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <h2
                    className="text-brand-black font-normal leading-tight"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "0.04em" }}
                  >
                    {name.toUpperCase()}
                  </h2>
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-600 text-sm font-light">
                      📍 {address}
                    </p>
                    <p className="text-neutral-500 text-[10px] font-light tracking-[0.2em] uppercase">
                      {hours}
                    </p>
                  </div>
                </div>
                <a
                  href={href}
                  className="self-start md:self-center flex-shrink-0 px-10 py-4 bg-brand-black text-white text-[9px] font-light tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            ))}
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

      {/* FAQ */}
      <section className="bg-parchment py-24 md:py-40">
        <div className="pg-container">
          <div className="grid grid-cols-12 gap-6 md:gap-8">

            <div className="col-span-12 md:col-span-4">
              <p className="text-neutral-500 text-[9px] font-light tracking-[0.5em] uppercase mb-6">
                FAQs
              </p>
              <h2
                className="text-brand-black font-normal leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                COMMON<br /><em>questions.</em>
              </h2>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col divide-y divide-neutral-200">
              {[
                {
                  q: "Do I need a referral?",
                  a: "No referral is needed. You can book directly through any of the clinic links above.",
                },
                {
                  q: "How long is a consultation?",
                  a: "Initial consultations are typically 30–45 minutes. Dr. Yalda takes the time needed — she won't rush you.",
                },
                {
                  q: "Can treatment happen on the same day?",
                  a: "In some cases yes, but Dr. Yalda always recommends a separate consultation first so you can make an informed, unhurried decision.",
                },
                {
                  q: "What should I bring?",
                  a: "Just yourself. If you have any previous treatment records or skincare you're currently using, feel free to bring those along.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="py-8 flex flex-col gap-3">
                  <h3
                    className="text-brand-black font-normal"
                    style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", letterSpacing: "0.02em" }}
                  >
                    {q.toUpperCase()}
                  </h3>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed max-w-lg">
                    {a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
