import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

export const metadata: Metadata = {
  title: "Goel Astro — ज्योतिष परामर्श | Vedic Astrology Consultation",
  description:
    "Trusted Vedic Astrology consultation — Kundli analysis, marriage compatibility, career guidance, gemstone consultation, and annual predictions. Book today!",
  keywords:
    "jyotish, kundli, astrology, vedic astrology, horoscope, kundli milan, career guidance, gemstone consultation, rashifal",
  openGraph: {
    title: "Goel Astro — ज्योतिष परामर्श",
    description:
      "Trusted Vedic Astrology consultation — Kundli, Marriage Compatibility, Career Guidance, and more.",
    type: "website",
    locale: "hi_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-[family-name:var(--font-body)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
