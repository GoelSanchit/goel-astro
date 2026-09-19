import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL, BRAND_NAME, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Trusted Vedic Astrology consultation by Goel Astro, Meerut — Kundli analysis, janam kundli, kundli milan for marriage, career guidance, and gemstone consultation. Detailed reports on WhatsApp within 24 hours.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Online Kundli & Jyotish Consultation — Goel Astro, Meerut | ऑनलाइन ज्योतिष परामर्श",| ऑनलाइन ज्योतिष परामर्श",
    template: "%s | Goel Astro",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    // English
    "online astrology consultation",
    "online jyotish",
    "vedic astrology",
    "vedic astrologer online",
    "online kundli",
    "kundli analysis",
    "janam kundli",
    "janam kundli online",
    "kundli milan",
    "kundli matching for marriage",
    "gun milan",
    "horoscope matching",
    "career astrology",
    "marriage astrology",
    "gemstone consultation",
    "gemstone recommendation astrology",
    "astrology remedies",
    "astrologer in Meerut",
    "best astrologer in Meerut",
    "jyotish in Meerut",
    "kundli milan Meerut",
    "astrologer in Uttar Pradesh",
    "astrologer in India",
    "best astrologer online",
    "astrology consultation on whatsapp",
    "hindi astrologer",
    // Hindi
    "ज्योतिष",
    "ऑनलाइन ज्योतिष",
    "ज्योतिष परामर्श",
    "कुंडली",
    "जन्म कुंडली",
    "कुंडली विश्लेषण",
    "कुंडली मिलान",
    "गुण मिलान",
    "ऑनलाइन कुंडली",
    "करियर ज्योतिष",
    "विवाह ज्योतिष",
    "रत्न परामर्श",
    "ज्योतिष उपाय",
    "ज्योतिषी",
    "वैदिक ज्योतिष",
    "मेरठ ज्योतिषी",
    "मेरठ में ज्योतिष",
    "मेरठ कुंडली मिलान",
    // Brand
    "Goel Astro",
    "goelastro",
  ],
  applicationName: BRAND_NAME,
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_IN",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: "Online Kundli & Jyotish Consultation — Goel Astro",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Goel Astro — ज्योतिष परामर्श",
    description: SITE_DESCRIPTION,
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

// Sitewide business schema. Page-specific schema (FAQ, offers) lives on the
// page that renders that content.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: BRAND_NAME,
  alternateName: "गोयल ज्योतिष",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/icon-512.png`,
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
  areaServed: { "@type": "Country", name: "India" },
  availableLanguage: ["Hindi", "English"],
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
    availableLanguage: ["Hindi", "English"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
