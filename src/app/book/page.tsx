import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Consultation — ज्योतिष परामर्श बुक करें",
  description:
    "Book your Vedic Astrology consultation online. Kundli analysis from ₹300, janam kundli, kundli milan, career guidance and gemstone consultation — pay via UPI, report on WhatsApp within 24 hours.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a Consultation | Goel Astro",
    description:
      "Kundli analysis, kundli milan, career guidance and more — book online and pay via UPI.",
    url: "/book",
  },
};

export default function BookPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold gold-gradient-text mb-3">
            परामर्श बुक करें
          </h1>
          <p className="text-white/50">
            Fill the form below to book your consultation
          </p>
        </div>
        <Suspense
          fallback={
            <div className="text-center text-white/40 py-20">Loading...</div>
          }
        >
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
