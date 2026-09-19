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
  "Trusted Vedic Astrology consultation by Goel Astro — Kundli analysis, janam kundli, kundli milan for marriage, career guidance, and gemstone consultation. Detailed reports on WhatsApp within 24 hours.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Goel Astro — ज्योतिष परामर्श | Vedic Astrology Consultation",
    template: "%s | Goel Astro",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "jyotish",
    "ज्योतिष",
    "kundli",
    "कुंडली",
    "janam kundli",
    "जन्म कुंडली",
    "kundli milan",
    "कुंडली मिलान",
    "vedic astrology",
    "astrology consultation online",
    "online jyotish",
    "career astrology",
    "gemstone consultation",
    "रत्न परामर्श",
    "astrologer India",
    "Goel Astro",
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
    title: "Goel Astro — ज्योतिष परामर्श | Vedic Astrology Consultation",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Goel Astro — ज्योतिष परामर्श",
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/images/logo-icon.svg",
  },
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
  logo: `${SITE_URL}/images/logo.svg`,
  image: `${SITE_URL}/images/logo.svg`,
  description: SITE_DESCRIPTION,
  email: EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "₹300 - ₹2100",
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
