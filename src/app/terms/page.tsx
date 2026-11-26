import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { BRAND_NAME, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms for booking a Goel Astro astrology consultation: what the service is and is not, payment by UPI, report delivery times and refunds.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" titleHi="सेवा की शर्तें" updated="26 November 2026">
      <p>
        These terms apply when you book a consultation with {BRAND_NAME} through
        goelastro.com, WhatsApp or phone. By booking, you agree to them.
      </p>

      <h2>What the service is</h2>
      <p>
        We provide astrological guidance based on traditional Vedic Jyotish: birth chart
        (kundli) preparation and analysis, kundli milan, career guidance and gemstone
        recommendations. Astrology is interpretive. A reading is guidance, not a promise of
        any particular result.
      </p>
      <p>
        Our guidance is <strong>not</strong> a substitute for advice from a doctor, lawyer,
        financial adviser or other qualified professional. Please do not stop medical
        treatment, or make legal or financial commitments, on the basis of an astrology
        reading alone. Decisions you take remain your own.
      </p>

      <h2>Your birth details</h2>
      <p>
        A reading is only as accurate as the birth details it is based on. If your birth time
        is unknown or approximate, we can still prepare a partial analysis, but some
        predictions (especially timing) will be less precise.
      </p>

      <h2>Prices and payment</h2>
      <ul>
        <li>Prices are listed in Indian Rupees on the website and at the time of booking.</li>
        <li>Payment is made by UPI after you submit the booking form.</li>
        <li>Work on your report starts once we have confirmed your payment.</li>
        <li>
          A phone consultation, if you want one, is booked separately on WhatsApp and may cost
          extra. We will tell you the price before the call.
        </li>
      </ul>

      <h2>Delivery</h2>
      <p>
        Reports are sent on WhatsApp, usually within 12–24 hours of payment confirmation, or
        24–48 hours for kundli milan. If a report will take longer, we will let you know.
      </p>

      <h2>Gemstones and remedies</h2>
      <p>
        Gemstone and remedy suggestions are recommendations based on your chart. If you buy a
        gemstone, buy it from a reputable seller, and ask us if you are unsure before wearing
        it.
      </p>

      <h2>Refunds</h2>
      <p>
        See our <Link href="/refund-policy">Refund Policy</Link>.
      </p>

      <h2>Your report</h2>
      <p>
        Your report is prepared for you, for your personal use. Please do not republish or
        resell it.
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle your personal and birth details is explained in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>Contact</h2>
      <p>
        WhatsApp or phone:{" "}
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>+91 {WHATSAPP_NUMBER.slice(2)}</a> · Email:{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </LegalPage>
  );
}
