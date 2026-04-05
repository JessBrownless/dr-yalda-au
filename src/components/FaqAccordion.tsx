"use client";

import { useState } from "react";

const faqs = [
  { q: "Do I need a referral?", a: "No referral is needed. You can book directly through any of the clinic links above." },
  { q: "How long is a consultation?", a: "Initial consultations are typically 30–45 minutes. Dr. Yalda takes the time needed — she won't rush you." },
  { q: "Can treatment happen on the same day?", a: "In some cases yes, but Dr. Yalda always recommends a separate consultation first so you can make an informed, unhurried decision." },
  { q: "What should I bring?", a: "Just yourself. If you have any previous treatment records or skincare you're currently using, feel free to bring those along." },
  { q: "Is there a cancellation policy?", a: "We ask for at least 24 hours notice for any cancellations or rescheduling. This allows us to offer the appointment to other patients." },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-neutral-800">
      {faqs.map(({ q, a }, i) => (
        <div key={q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-7 text-left group"
          >
            <h3
              className="text-white font-normal"
              style={{ fontFamily: "'Heading', serif", fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", letterSpacing: "0.02em", textTransform: "uppercase" }}
            >
              {q}
            </h3>
            <span
              className="flex-shrink-0 text-neutral-600 transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", fontSize: "20px", lineHeight: 1 }}
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "200px" : "0px", opacity: open === i ? 1 : 0 }}
          >
            <p className="text-neutral-400 font-light leading-relaxed pb-7 max-w-lg" style={{ fontSize: "16px", fontFamily: "'Heading', serif" }}>
              {a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
