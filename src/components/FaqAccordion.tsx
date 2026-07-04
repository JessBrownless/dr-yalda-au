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
    <div className="flex flex-col">
      {faqs.map(({ q, a }) => (
        <details key={q} className="faq-item group border-b border-brand-line/20 first:border-t first:border-brand-line/20">
          <summary className="flex items-start justify-between gap-6 py-7 md:py-8 cursor-pointer list-none transition-colors duration-300 hover:bg-brand-white/5">
            <h3 className="heading-sm text-on-dark-high">
              {q}
            </h3>
            <span className="faq-icon flex-shrink-0 mt-1.5 text-on-dark-low transition-all duration-300 group-hover:text-on-dark-high">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                {/* Vertical stroke fades out when open (plus -> minus, styled in globals.css) */}
                <path className="faq-icon-v" d="M6 1v10" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
                <path d="M1 6h10" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="body-serif text-on-dark-low pb-8 max-w-lg">
            {a}
          </p>
        </details>
      ))}
    </div>
  );
}
