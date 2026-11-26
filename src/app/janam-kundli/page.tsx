import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Janam Kundli — Vedic Birth Chart with Dasha Details",
  description:
    "Get your janam kundli prepared by a Vedic astrologer: lagna chart, navamsa, planetary positions and dasha details. Black & white ₹1,000, coloured ₹1,500.",
  path: "/janam-kundli",
});

const FAQS = [
  {
    question: "Is a janam kundli the same as a horoscope?",
    answer:
      "Yes. Janam kundli (जन्म कुंडली), janam patri and birth chart all mean the same thing: the positions of the planets at the moment and place of your birth, arranged in the twelve houses. Vedic astrology uses the sidereal zodiac, so your signs may differ from a Western horoscope.",
  },
  {
    question: "What if I don't know my exact time of birth?",
    answer:
      "The kundli can still be prepared, but the ascendant (lagna) and house placements depend on the birth time, so an unknown or approximate time reduces accuracy. Tick 'Don't know' on the booking form and share whatever you remember, such as 'early morning'.",
  },
  {
    question: "What is the difference between the black & white and coloured kundli?",
    answer:
      "The content is the same: lagna chart, navamsa, planetary positions and dasha details. The coloured kundli (₹1,500) is presented in full colour; the black & white kundli (₹1,000) is the simpler format.",
  },
  {
    question: "Does the janam kundli include predictions?",
    answer:
      "The janam kundli is the chart itself. For an interpretation of what it means for your career, marriage, health and the years ahead, choose a 1-year or 3-year kundli analysis.",
  },
  {
    question: "Can I get my kundli in Hindi?",
    answer:
      "Yes. Choose Hindi, English or both as the report language on the booking form.",
  },
];

export default function JanamKundliPage() {
  return (
    <ServicePageLayout
      path="/janam-kundli"
      name="Janam Kundli"
      titleHi="जन्म कुंडली"
      title="Janam Kundli — Your Vedic Birth Chart, Prepared by an Astrologer"
      serviceIds={["kundli-bw", "kundli-colour"]}
      serviceType="Janam kundli (Vedic birth chart) preparation"
      schemaDescription="Preparation of a complete Vedic birth chart: lagna chart, navamsa (D9), planetary positions and Vimshottari dasha details, in black & white or colour."
      faqs={FAQS}
      intro={
        <>
          <p>
            A <strong>janam kundli</strong> (जन्म कुंडली) is your Vedic birth chart: a map of
            where the Sun, Moon and planets stood against the twelve signs and twelve houses
            at the exact moment and place of your birth. It is calculated from your date, time
            and place of birth, and it is the foundation of every other reading, from kundli
            milan for marriage to career guidance, gemstone advice and yearly predictions.
          </p>
          <p>
            Goel Astro prepares a complete janam kundli with the <strong>lagna chart</strong>,
            the <strong>navamsa (D9) chart</strong>, the sign and house of every planet, and
            your <strong>dasha</strong> (planetary period) details. It is available in black
            &amp; white for ₹1,000 or in full colour for ₹1,500.
          </p>
        </>
      }
    >
      <h2>What your janam kundli contains</h2>
      <h3>Lagna (birth) chart</h3>
      <p>
        The main chart, built around your ascendant (lagna): the sign rising on the eastern
        horizon when you were born. It fixes the twelve houses, each of which governs an area
        of life such as self (1st), wealth (2nd), home (4th), children (5th), marriage (7th)
        and career (10th).
      </p>
      <h3>Navamsa (D9) chart</h3>
      <p>
        The ninth divisional chart. It is read alongside the lagna chart to judge the real
        strength of each planet, and it is the key chart for marriage and partnership.
      </p>
      <h3>Planetary positions</h3>
      <p>
        The sign, house and nakshatra of the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn,
        Rahu and Ketu. Your Moon&apos;s nakshatra is your birth star, used for naming,
        muhurta and kundli milan.
      </p>
      <h3>Dasha details</h3>
      <p>
        The Vimshottari dasha: the 120-year cycle of planetary periods that shows which
        planet is &ldquo;running&rdquo; your life at any time, and when the next period
        begins. Astrologers use it to time events.
      </p>

      <h2>Why the birth time matters</h2>
      <p>
        The ascendant changes sign roughly every two hours, and its degree moves about one
        degree every four minutes. A birth time that is off by even 15–20 minutes can shift
        house placements and divisional charts. If you have a birth certificate or hospital
        record, use the time written there.
      </p>

      <h2>Janam kundli or kundli analysis?</h2>
      <p>
        A janam kundli is the chart. A <Link href="/kundli-analysis">kundli analysis</Link>{" "}
        is the astrologer&apos;s interpretation of that chart, with predictions for the next one
        or three years and remedies. If you want to know what your chart says, choose the
        analysis; if you need the chart itself, for your records or for a family priest,
        choose the janam kundli. For marriage matching, see{" "}
        <Link href="/kundli-milan">kundli milan</Link>.
      </p>

      <h2>Details we need</h2>
      <ul>
        <li>Full name</li>
        <li>Date of birth</li>
        <li>Time of birth (as exact as possible)</li>
        <li>Place of birth (city or town)</li>
      </ul>
    </ServicePageLayout>
  );
}
