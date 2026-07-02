import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-parchment text-brand-black">
      <section className="min-h-[70vh] flex items-center">
        <div className="pg-container w-full">
          <div className="flex flex-col items-center text-center">
            <p className="overline">404</p>
            <h1 className="heading-statement from-overline">
              This page doesn&apos;t seem to exist.
            </h1>
            <p className="body-serif text-on-light-low lede" style={{ maxWidth: "42ch" }}>
              The address may have changed, or the link you followed is out of
              date. Let&apos;s get you back to somewhere useful.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <Link href="/" className="btn btn-secondary-light">
                Back to home
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                  <path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/appointments" className="btn btn-primary-light">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
