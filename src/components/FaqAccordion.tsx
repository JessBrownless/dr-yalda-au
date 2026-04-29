"use client";

const faqs = [
  { q: "Do I need a referral?", a: "No referral is required, as cosmetic medicine is a private service. Treatments are generally not covered by Medicare or private health insurance." },
  { q: "How long is a consultation?", a: "I offer complimentary 15-minute online consultations to help you understand whether I’m the right fit for you, and to discuss potential treatment options and approximate costs. This does not replace a full consultation. In-clinic consultations are 30 minutes and allow for a more detailed, personalised assessment." },
  { q: "Can treatment happen on the same day?", a: "Yes, if appropriate. Some treatments require planning, including downtime and pre-treatment preparation such as numbing. In many cases, I encourage patients to take time to consider their options rather than rush into treatment." },
  { q: "What should I bring?", a: "Just yourself. If you have any previous treatment records or are currently using skincare, feel free to bring these along. It can also be helpful to come makeup-free where possible." },
  { q: "Is there a cancellation policy?", a: "Please provide at least 48 hours’ notice for cancellations or rescheduling. Late cancellations or missed appointments may result in the loss of your deposit." },
  { q: "What’s available at each clinic location?", a: "I offer the same services across both my Paddington and Balgowlah clinics. Morpheus8 and hair rejuvenation treatments are available at Paddington only." },
];

export default function FaqAccordion() {
  return (
    <div className="flex flex-col divide-y divide-neutral-700/60">
      {faqs.map(({ q, a }) => (
        <details key={q} className="faq-item group">
          <summary className="flex items-center justify-between gap-6 py-6 md:py-7 cursor-pointer list-none">
            <h3
              className="text-white font-normal"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", letterSpacing: "0" }}
            >
              {q}
            </h3>
            <span
              className="faq-icon flex-shrink-0 text-neutral-400 transition-transform duration-300"
              style={{ fontSize: "20px", lineHeight: 1 }}
            >
              +
            </span>
          </summary>
          <p className="text-neutral-300 font-light leading-relaxed pb-7 max-w-lg" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>
            {a}
          </p>
        </details>
      ))}
    </div>
  );
}
