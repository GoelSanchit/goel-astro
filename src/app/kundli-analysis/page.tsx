import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import { TESTIMONIALS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kundli Analysis Online — 1-Year & 3-Year Predictions",
  description:
    "Detailed kundli analysis by a Vedic astrologer: planets, dasha, transits and remedies, with a 1-year (₹1,000) or 3-year (₹2,100) prediction on WhatsApp.",
  path: "/kundli-analysis",
});

const FAQS = [
  {
    question: "Should I choose the 1-year or the 3-year analysis?",
    answer:
      "Choose the 1-year analysis if you want guidance for the year ahead or are facing a specific decision now. Choose the 3-year analysis if you are planning bigger changes, such as marriage, a new business or a move, or are entering a new dasha period, since it lays out each year separately.",
  },
  {
    question: "Can I ask a specific question?",
    answer:
      "Yes. The booking form has a 'Specific Question / Concern' field. Write your main question there, for example about a job change or marriage timing, and the analysis will address it.",
  },
  {
    question: "How accurate is a kundli analysis?",
    answer:
      "Accuracy depends mostly on an accurate birth time. Astrology indicates tendencies and favourable or difficult periods; it is guidance to help you plan, not a guarantee of events.",
  },
  {
    question: "Does the analysis include gemstone recommendations?",
    answer:
      "The analysis includes practical remedies. For a detailed recommendation on which gemstone to wear, and which to avoid, book the separate gemstone consultation (₹300).",
  },
  {
    question: "When will I receive the report?",
    answer:
      "The report is sent on WhatsApp, usually within 12–24 hours of payment confirmation.",
  },
];

export default function KundliAnalysisPage() {
  return (
    <ServicePageLayout
      path="/kundli-analysis"
      name="Kundli Analysis"
      titleHi="कुंडली विश्लेषण"
      title="Kundli Analysis Online — 1-Year and 3-Year Predictions"
      serviceIds={["kundli-1-year", "full-kundli"]}
      serviceType="Vedic birth chart analysis and prediction"
      schemaDescription="Interpretation of the birth chart with dasha and transit-based predictions for one or three years, and practical remedies."
      faqs={FAQS}
      testimonials={TESTIMONIALS.filter(
        (t) => t.service === "Kundli Analysis" || t.service === "1-Year Kundli Analysis"
      )}
      intro={
        <>
          <p>
            <strong>Kundli analysis</strong> (कुंडली विश्लेषण) is the interpretation of your
            birth chart: what the planets in your janam kundli indicate about career, money,
            marriage, health and family, and when those indications are likely to show up.
            Timing comes from the <strong>Vimshottari dasha</strong>, the sequence of planetary
            periods that runs through your life, read together with{" "}
            <strong>gochar</strong>: the current transits of slow planets such as Saturn,
            Jupiter, Rahu and Ketu over your chart.
          </p>
          <p>
            Goel Astro offers two versions. The <strong>1-year analysis (₹1,000)</strong>{" "}
            covers the year ahead. The <strong>full analysis (₹2,100)</strong> covers the next
            three years, year by year. Both include practical remedies (upay), are written in
            Hindi or English, and are sent on WhatsApp within 24 hours.
          </p>
        </>
      }
    >
      <h2>What the astrologer looks at</h2>
      <ul>
        <li>
          <strong>Lagna and lagna lord</strong>: your nature, health and the overall
          direction of life.
        </li>
        <li>
          <strong>Planets in the twelve houses</strong>: which areas of life are strong and
          which need care.
        </li>
        <li>
          <strong>Yogas</strong>: planetary combinations, such as Raj yoga or Dhan yoga, that
          shape status and wealth.
        </li>
        <li>
          <strong>Dasha and antardasha</strong>: the planetary periods active now and in the
          coming years.
        </li>
        <li>
          <strong>Transits</strong>: Saturn (including Sade Sati), Jupiter, Rahu and Ketu
          moving over sensitive points in your chart.
        </li>
      </ul>

      <h2>1-year or 3-year analysis</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1-Year Analysis</th>
            <th>Full Analysis (3 Years)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td>₹1,000</td>
            <td>₹2,100</td>
          </tr>
          <tr>
            <td>Prediction period</td>
            <td>The next 12 months</td>
            <td>The next 3 years, year by year</td>
          </tr>
          <tr>
            <td>Planets, dasha and transits</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Remedies</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>A decision or concern right now</td>
            <td>Planning marriage, business, a move or a new dasha</td>
          </tr>
        </tbody>
      </table>

      <h2>Areas covered</h2>
      <p>
        Career and finances, marriage and relationships, health, family and property, and
        education. If one area matters most to you, mention it in the question field of the
        booking form. For a report focused only on work, see{" "}
        <Link href="/career-astrology">career astrology</Link>.
      </p>

      <h2>Remedies (upay)</h2>
      <p>
        Remedies are kept simple and practical: mantra, charity (daan), fasting, or changes in
        daily conduct, chosen for the planets that need support in your chart. Free general
        remedies are also listed on our <Link href="/">homepage</Link>.
      </p>

      <h2>Details we need</h2>
      <p>
        Your full name, date, time and place of birth. You don&apos;t need to have your chart
        already: the astrologer works it out from your birth details. (If you want the chart
        itself as a document, that is the <Link href="/janam-kundli">janam kundli</Link>.)
      </p>
    </ServicePageLayout>
  );
}
