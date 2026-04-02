import Image from "next/image";

const testimonials = [
  {
    quote:
      "Working with Dr. Yalda has been an absolute pleasure. As a brand, we value authenticity, and Dr. Yalda perfectly aligns with our mission to provide skincare solutions backed by science and expertise. Her content not only showcases her deep knowledge as a cosmetic doctor but also resonates with a wide audience who trusts her insights. Dr. Yalda has been a key partner in helping us reach the right audience, and breaking down more complex skincare concerns and ingredients. She's been instrumental in highlighting the value of our products. We look forward to continuing to work with her and to educate on all things healthy skin.",
    logo: "/assets/logo-clinique.svg",
    brand: "Clinique",
  },
];

export default function TestimonialSection() {
  const { quote, logo, brand } = testimonials[0];

  return (
    <section className="bg-cream py-16 md:py-28">
      <div className="pg-container">

        <div className="grid grid-cols-12 gap-6 md:gap-8">

          {/* Label — cols 1–3 */}
          <div className="hidden md:block col-span-3 pt-1">
            <p className="text-neutral-400 font-normal uppercase" style={{ fontSize: "10px", letterSpacing: "0.55em", fontFamily: "sans-serif" }}>
              Partner testimonial
            </p>
          </div>

          {/* Quote — cols 5–12 */}
          <div className="col-span-12 md:col-span-8 md:col-start-5 flex flex-col gap-8 md:gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 text-neutral-400" fill="currentColor" aria-hidden="true">
              <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z"/>
            </svg>
            <blockquote
              className="text-neutral-800 font-normal leading-relaxed [font-family:'Heading',serif]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>

            <div className="border-b border-neutral-800 pb-1 self-start">
              <Image
                src={logo}
                alt={brand}
                width={120}
                height={40}
                className="h-5 w-auto object-contain"
              />
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
