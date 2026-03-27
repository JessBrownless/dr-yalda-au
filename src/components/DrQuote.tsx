export default function DrQuote() {
  return (
    <section className="bg-cream py-24 md:py-48">
      <div className="pg-container">
        <div className="w-6 h-px bg-neutral-300 mb-12 md:mb-16" />
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="hidden md:block col-span-3 pt-1">
            <p className="text-neutral-400 text-[10px] font-light tracking-[0.45em] uppercase">Her Approach</p>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col gap-8 md:gap-10">
            <blockquote
              className="text-neutral-800 font-normal leading-relaxed"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
            >
              &ldquo;I believe the most beautiful results are the ones no one can quite put their finger on. My approach is always to enhance what&rsquo;s already there — to help you look like yourself, only more rested, more confident, more you.&rdquo;
            </blockquote>
            <p className="text-neutral-400 text-[10px] font-light tracking-[0.35em] uppercase">Dr. Yalda Jamali</p>
          </div>
        </div>
        <div className="w-6 h-px bg-neutral-300 mt-12 md:mt-16" />
      </div>
    </section>
  );
}
