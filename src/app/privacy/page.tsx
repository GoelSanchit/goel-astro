import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { BRAND_NAME, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "What personal and birth details Goel Astro collects when you book a consultation, how they are used and stored, and how to ask for them to be deleted.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" titleHi="गोपनीयता नीति" updated="26 November 2026">
      <p>
        {BRAND_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides Vedic astrology consultations
        from Meerut, Uttar Pradesh, India. This policy explains what we collect through
        goelastro.com, why, and what you can ask us to do with it.
      </p>

      <h2>What we collect</h2>
      <p>When you book a consultation, the booking form asks for:</p>
      <ul>
        <li>your name, phone number, gender and (optionally) email address;</li>
        <li>your date, time and place of birth;</li>
        <li>the services you choose, your question, and your preferred report language;</li>
        <li>
          for kundli milan only: your partner&apos;s name and date, time and place of birth.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> ask for Aadhaar, PAN, bank account or card details. You pay
        in your own UPI app; we never see your UPI PIN or bank login. We only see the payment
        confirmation or screenshot you send us.
      </p>
      <p>
        If you give us someone else&apos;s birth details (for example a partner for kundli
        milan), please make sure they are comfortable with that.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>to prepare your astrology report or consultation;</li>
        <li>to contact you on WhatsApp, phone or email about your booking and payment;</li>
        <li>to answer your follow-up questions about the report.</li>
      </ul>
      <p>We do not sell your details, and we do not use them for advertising.</p>

      <h2>Where it is stored</h2>
      <ul>
        <li>
          Booking form submissions are saved to a private Google Sheet through Google Apps
          Script, and we receive a copy by email.
        </li>
        <li>Report delivery and conversations happen on WhatsApp.</li>
      </ul>
      <p>
        These providers (Google and WhatsApp/Meta) process the data only so that we can run
        the service. We share your details with no one else, unless the law requires it.
      </p>

      <h2>Analytics and cookies</h2>
      <p>
        We use Google Analytics 4, which sets cookies, to count visits and see which pages and
        services people use. When a booking is submitted we record the service and amount in
        Analytics. Your name, phone number and birth details are not sent to Analytics. You can
        block these cookies in your browser settings without affecting your booking.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep booking details for as long as we need them to deliver your report and answer
        follow-up questions. You can ask us to delete them at any time.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to show you, correct or delete the details we hold about you, or
        withdraw your consent to us using them, in line with India&apos;s Digital Personal Data
        Protection Act, 2023. Message us on{" "}
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>WhatsApp (+91 {WHATSAPP_NUMBER.slice(2)})</a>{" "}
        or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We usually reply within 24 hours.
      </p>

      <h2>Children</h2>
      <p>
        If you are under 18, please ask a parent or guardian to book the consultation for you.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will update the date at the top of this page. See also our{" "}
        <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/refund-policy">Refund Policy</Link>.
      </p>
    </LegalPage>
  );
}
