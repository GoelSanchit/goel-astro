import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL, BRAND_NAME, EMAIL, WHATSAPP_NUMBER, SERVICES } from "@/lib/constants";
import { OG_IMAGE, ORG_ID, WEBSITE_ID, CATALOG_ID, offerFor } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Vedic astrology consultation from Meerut: janam kundli, kundli milan, career and gemstone guidance. Detailed report on WhatsApp within 24 hours.";

// Defaults for every page. Indexable pages set their own canonical, robots
// and share cards through pageMetadata() in src/lib/seo.ts, so pages without
// one (such as the 404) don't inherit the homepage canonical.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Online Kundli & Astrology Consultation, Meerut | Goel Astro",
    template: "%s | Goel Astro",
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND_NAME,
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "hi_IN",
    siteName: BRAND_NAME,
    title: "Online Kundli & Astrology Consultation, Meerut | Goel Astro",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goel Astro — ऑनलाइन ज्योतिष परामर्श",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/images/logo-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// Sitewide entity graph: WebSite -> ProfessionalService -> OfferCatalog,
// linked by @id. Page-specific schema (FAQ, breadcrumbs, a page's Service)
// lives on the page that renders that content.
// TODO(owner): add a Person "founder" node and "sameAs" profile URLs
// (Google Business Profile, YouTube, Instagram, directories) once they exist.
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: BRAND_NAME,
      alternateName: "गोयल ज्योतिष",
      inLanguage: ["en-IN", "hi-IN"],
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: BRAND_NAME,
      alternateName: "गोयल ज्योतिष",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/images/og.jpg`,
      description: SITE_DESCRIPTION,
      email: EMAIL,
      telephone: `+${WHATSAPP_NUMBER}`,
      priceRange: "₹300 - ₹2100",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Meerut",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Meerut" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "Country", name: "India" },
      ],
      availableLanguage: ["Hindi", "English"],
      knowsAbout: [
        "Vedic astrology",
        "Janam kundli",
        "Kundli analysis",
        "Kundli milan (Ashtakoot gun milan)",
        "Career astrology",
        "Gemstone consultation",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${WHATSAPP_NUMBER}`,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English"],
      },
      hasOfferCatalog: { "@id": CATALOG_ID },
    },
    {
      "@type": "OfferCatalog",
      "@id": CATALOG_ID,
      name: "Astrology Consultation Services",
      itemListElement: SERVICES.map((s) => ({
        ...offerFor(s.id),
        itemOffered: {
          "@type": "Service",
          name: s.title,
          alternateName: s.titleHi,
          description: s.description,
          url: `${SITE_URL}${s.page}`,
          provider: { "@id": ORG_ID },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-body)]">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
