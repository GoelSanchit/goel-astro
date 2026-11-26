import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  EMAIL,
  SERVICES,
  SERVICE_PAGES,
  TESTIMONIALS,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Astrologer in Meerut — Vedic Jyotish Consultation",
  description:
    "Goel Astro is a Vedic astrologer based in Meerut, UP: kundli, kundli milan, career and gemstone consultation in Hindi or English. Book online, 10 AM–8 PM.",
  path: "/astrologer-in-meerut",
});

const FAQS = [
  {
    question: "Do I need to visit in person?",
    answer:
      "No. The whole consultation, from booking to the report, happens online and on WhatsApp, so you can consult from home anywhere in Meerut or elsewhere in India.",
  },
  {
    question: "Do you give consultations in Hindi?",
    answer:
      "Yes. You can choose a report in Hindi, English or both when you book.",
  },
  {
    question: "How quickly will I get my report?",
    answer:
      "Usually within 12–24 hours of payment confirmation, and 24–48 hours for kundli milan.",
  },
  {
    question: "Can I speak to the astrologer on the phone?",
    answer:
      "Yes. Message us on WhatsApp to book a phone session. Additional charges may apply, and we tell you the price before the call.",
  },
];

export default function AstrologerInMeerutPage() {
  const pages = SERVICE_PAGES.filter((p) => p.href !== "/astrologer-in-meerut");
  return (
    <ServicePageLayout
      path="/astrologer-in-meerut"
      name="Astrologer in Meerut"
      titleHi="मेरठ में ज्योतिषी"
      title="Astrologer in Meerut — Vedic Jyotish Consultation"
      serviceIds={SERVICES.map((s) => s.id)}
      serviceType="Vedic astrology consultation"
      schemaDescription="Vedic astrology consultation from Meerut, Uttar Pradesh: kundli analysis, janam kundli, kundli milan, career guidance and gemstone consultation, online in Hindi or English."
      faqs={FAQS}
      testimonials={TESTIMONIALS.filter((t) => t.location === "Meerut")}
      intro={
        <>
          <p>
            <strong>Goel Astro</strong> is a Vedic astrology (jyotish) consultation service
            based in <strong>Meerut, Uttar Pradesh</strong>, with over 15 years of
            experience. Consultations run online: you book on this website or on WhatsApp,
            share your date, time and place of birth, pay by UPI, and receive a detailed
            written report on WhatsApp, usually within 24 hours, in Hindi or English.
          </p>
          <p>
            That means you can consult from anywhere in Meerut, or from nearby towns such as
            Modinagar, Hapur, Muzaffarnagar and Ghaziabad, without travelling or waiting for
            an appointment. We are available every day from 10 AM to 8 PM, and you can book a
            phone call if you would rather talk.
          </p>
        </>
      }
    >
      <h2>Services available</h2>
      <ul>
        {pages.map((p) => (
          <li key={p.href}>
            <Link href={p.href}>{p.label}</Link> (<span lang="hi">{p.labelHi}</span>)
          </li>
        ))}
      </ul>

      <h2>How to consult from Meerut</h2>
      <ol>
        <li>
          Fill in the <Link href="/book">booking form</Link> with your birth details and choose
          a service.
        </li>
        <li>Pay by UPI (Google Pay, PhonePe, Paytm or any UPI app).</li>
        <li>Send the payment screenshot on WhatsApp; we confirm it right away.</li>
        <li>Receive your report on WhatsApp. Ask follow-up questions in the same chat.</li>
      </ol>

      <h2>Contact details</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>Goel Astro</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>Meerut, Uttar Pradesh, India</td>
          </tr>
          <tr>
            <th>Phone / WhatsApp</th>
            <td>
              <a href={`tel:+${WHATSAPP_NUMBER}`}>+91 {WHATSAPP_NUMBER.slice(2)}</a>
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </td>
          </tr>
          <tr>
            <th>Hours</th>
            <td>10:00 AM to 8:00 PM, all days</td>
          </tr>
        </tbody>
      </table>

      <h2>Why people in Meerut consult online</h2>
      <ul>
        <li>No travel or waiting: the consultation fits around your day.</li>
        <li>A written report you can read again and share with family.</li>
        <li>The same astrologer, whether you live in Meerut or have moved away.</li>
      </ul>
    </ServicePageLayout>
  );
}
