const SITE_URL = "https://dryalda.com.au";

// Sitewide structured data (schema.org JSON-LD), rendered in the root layout so
// it appears on every page. Models the practice as a Person (Dr Yalda) who works
// at two MedicalClinic locations, plus the WebSite node. Per-page Blog/Article
// schema is added separately on the blog routes and merged by search engines via
// matching @id references.
//
// Only verified data is included. sameAs lists the real social profiles only —
// the footer's LinkedIn/Facebook links are placeholders, so they're omitted here.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Dr Yalda Jamali",
      description:
        "Dr Yalda Jamali is a Sydney cosmetic doctor focused on natural-looking results, skin health, and considered, evidence-based care.",
      inLanguage: "en-AU",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Dr Yalda Jamali",
      jobTitle: "Cosmetic Doctor",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/Yalda-17.avif`,
      description:
        "Sydney cosmetic doctor with a decade of experience, focused on natural-looking results, skin quality, and evidence-based care.",
      knowsAbout: [
        "Cosmetic medicine",
        "Skin health",
        "Skin quality",
        "Facial anatomy",
        "Dermatology",
      ],
      sameAs: [
        "https://instagram.com/dr.yalda",
        "https://tiktok.com/@dryaldajamali",
      ],
      identifier: {
        "@type": "PropertyValue",
        propertyID: "AHPRA",
        name: "AHPRA Registration",
        value: "MED0002486778",
      },
      workLocation: [
        { "@id": `${SITE_URL}/#epios` },
        { "@id": `${SITE_URL}/#austin` },
      ],
    },
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#epios`,
      name: "Epios Cosmetic Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "18 William St",
        addressLocality: "Paddington",
        addressRegion: "NSW",
        postalCode: "2021",
        addressCountry: "AU",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#austin`,
      name: "Austin Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5/67 Wanganella St",
        addressLocality: "Balgowlah",
        addressRegion: "NSW",
        postalCode: "2093",
        addressCountry: "AU",
      },
    },
  ],
};

export default function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
