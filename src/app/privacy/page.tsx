import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Dr Yalda Jamali's website collects, uses, and protects your information — analytics, cookies, bookings, and your rights under the Australian Privacy Principles.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Dr Yalda Jamali",
    description:
      "How this website collects, uses, and protects your information, and your rights under the Australian Privacy Principles.",
    url: "/privacy",
  },
};

// Restrained inline link for the few external references (third-party policies).
const linkCls =
  "underline underline-offset-2 decoration-brand-black/40 hover:decoration-brand-black transition-colors";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-parchment text-brand-black">
      <article className="mx-auto max-w-[720px] px-6 md:px-8 pt-32 md:pt-44 pb-24 md:pb-32">

        <div className="flex flex-col">
          <p className="overline">Legal</p>
          <h1 className="heading-2xl from-overline">Privacy Policy</h1>
        </div>
        <p className="label-02 mt-6 text-on-light-low">Last updated 7 July 2026</p>

        <div className="mt-12 md:mt-16 flex flex-col gap-10 md:gap-12">

          <section className="flex flex-col gap-4">
            <p className="body-serif">
              This policy explains how information is collected and handled when you use my
              website at <span className="whitespace-nowrap">dryalda.com.au</span>. I take your
              privacy seriously and handle personal information in line with the Australian
              Privacy Principles under the Privacy Act 1988 (Cth).
            </p>
            <p className="body-serif">
              This policy covers the website only. Any health information collected during a
              consultation or treatment at a clinic is handled separately, under the
              obligations that apply to medical records.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">The information I collect</h2>
            <p className="body-serif">
              The website does not have contact or enquiry forms, so I don&rsquo;t collect
              personal details directly through it. Information is limited to:
            </p>
            <ul className="body-serif flex flex-col gap-2 list-disc pl-5">
              <li>
                <strong className="font-normal">Analytics data.</strong> I use Google Analytics
                to understand how the site is used — pages viewed, approximate location (from
                your IP address), device and browser type, and how you arrived. This is
                collected through cookies and is used in aggregate.
              </li>
              <li>
                <strong className="font-normal">Server logs.</strong> My hosting provider
                (Netlify) records standard technical information such as IP addresses and
                request times to keep the site running securely.
              </li>
              <li>
                <strong className="font-normal">Booking details.</strong> Appointments are made
                through Calendly, a third-party booking service. Any details you enter there —
                such as your name, contact details, and appointment preferences — are provided
                to and handled by Calendly and my practice, under Calendly&rsquo;s own privacy
                terms.
              </li>
              <li>
                <strong className="font-normal">Social media content.</strong> The site displays
                images from my Instagram account. Viewing them may involve requests to
                Instagram&rsquo;s (Meta&rsquo;s) servers.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">Cookies</h2>
            <p className="body-serif">
              Cookies are small files stored on your device. The site uses analytics cookies
              (through Google Analytics) to measure usage. You can block or delete cookies in
              your browser settings at any time; the site will still work without them, but
              your visit won&rsquo;t be counted in the analytics.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">How I use your information</h2>
            <p className="body-serif">
              I use this information to understand how visitors use the site and to improve it,
              to keep it secure and working properly, and to manage appointment bookings. I do
              not sell your personal information, and I don&rsquo;t use it for advertising.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">Who I share it with</h2>
            <p className="body-serif">
              I share information only with the service providers that help run the site and my
              bookings, and only as needed for those purposes:
            </p>
            <ul className="body-serif flex flex-col gap-2 list-disc pl-5">
              <li>
                Google, for analytics —{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Google Privacy Policy
                </a>
              </li>
              <li>
                Calendly, for appointment bookings —{" "}
                <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Calendly Privacy Notice
                </a>
              </li>
              <li>
                Netlify, for hosting —{" "}
                <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Netlify Privacy Policy
                </a>
              </li>
            </ul>
            <p className="body-serif">
              I may also disclose information where required by law.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">Overseas storage</h2>
            <p className="body-serif">
              Some of these providers store and process data on servers outside Australia. By
              using the site, you acknowledge that your information may be handled overseas,
              subject to those providers&rsquo; own protections.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">How long I keep it</h2>
            <p className="body-serif">
              Analytics and log data is kept only as long as it&rsquo;s useful for the purposes
              above, in line with each provider&rsquo;s retention settings, and is then deleted
              or anonymised. Booking information is retained as needed to manage your
              appointment and to meet my professional and legal obligations.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">Your rights</h2>
            <p className="body-serif">
              Under the Australian Privacy Principles, you can ask me to access or correct the
              personal information I hold about you. If you have a concern about how your
              information has been handled, please contact me first so I can address it. You can
              also contact the Office of the Australian Information Commissioner —{" "}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className={linkCls}>
                oaic.gov.au
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">Security</h2>
            <p className="body-serif">
              I take reasonable steps to protect information from misuse, loss, and unauthorised
              access. No method of transmission over the internet is completely secure, but I
              work with reputable providers who maintain their own security safeguards.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">Changes to this policy</h2>
            <p className="body-serif">
              I may update this policy from time to time. Any changes will be posted on this
              page with a revised date above.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md">Contact</h2>
            <p className="body-serif">
              If you have any questions about this policy or your information, you can reach me
              by email at{" "}
              <a href="mailto:privacy@dryalda.com.au" className={linkCls}>
                privacy@dryalda.com.au
              </a>
              , or in writing at either clinic (addresses in the footer below).
            </p>
          </section>

        </div>
      </article>
    </main>
  );
}
