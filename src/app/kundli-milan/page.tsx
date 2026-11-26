import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import { TESTIMONIALS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kundli Milan for Marriage — Gun Milan Report",
  description:
    "Kundli milan by a Vedic astrologer: all 8 koots of Ashtakoot gun milan scored out of 36, plus Manglik, Nadi and Bhakoot dosha checks. ₹500 on WhatsApp.",
  path: "/kundli-milan",
});

const KOOTS = [
  ["Varna", 1, "Temperament and outlook of the two partners"],
  ["Vashya", 2, "Mutual attraction and how the partners influence each other"],
  ["Tara", 3, "Compatibility of the birth stars (nakshatras); well-being"],
  ["Yoni", 4, "Physical and intimate compatibility"],
  ["Graha Maitri", 5, "Friendship between the lords of the two Moon signs; mental harmony"],
  ["Gana", 6, "Nature: Deva (gentle), Manushya (human) or Rakshasa (intense)"],
  ["Bhakoot", 7, "Relationship between the two Moon signs; family welfare and finances"],
  ["Nadi", 8, "Health and children; the most heavily weighted koot"],
] as const;

const FAQS = [
  {
    question: "What is the minimum gun milan score for marriage?",
    answer:
      "Traditionally, 18 out of 36 gunas is the minimum for a marriage to be recommended. 18–24 is considered an average match, 25–32 a good match and 33–36 an excellent one. The total is a starting point: doshas and the 7th house of both charts matter as much as the number.",
  },
  {
    question: "Can a Manglik marry a non-Manglik?",
    answer:
      "Often, yes. Manglik dosha can be cancelled by the position of Mars or other planets, or balanced when both charts carry a similar Mars influence. Whether it is cancelled in your case can only be judged from both charts, which is part of the report.",
  },
  {
    question: "What if we don't know the exact time of birth?",
    answer:
      "Gun milan is based mainly on the Moon's nakshatra, which changes about once a day, so an approximate time is often enough for the score. Manglik dosha and the 7th house depend on the ascendant, which needs an accurate time. Share whatever you know and we will tell you how reliable the result is.",
  },
  {
    question: "Do you do kundli milan for love marriages?",
    answer:
      "Yes. The method is the same. For a couple who have already decided, the report is useful for understanding where the charts are strong, which areas may need care, and which remedies can help.",
  },
  {
    question: "How long does the kundli milan report take?",
    answer:
      "Because both charts are analysed, the report is usually sent on WhatsApp within 24–48 hours of payment confirmation.",
  },
];

export default function KundliMilanPage() {
  return (
    <ServicePageLayout
      path="/kundli-milan"
      name="Kundli Milan"
      titleHi="कुंडली मिलान"
      title="Kundli Milan for Marriage — Detailed Gun Milan Report"
      serviceIds={["marriage"]}
      serviceType="Horoscope matching (Ashtakoot gun milan)"
      schemaDescription="Ashtakoot gun milan of the bride's and groom's birth charts, scored out of 36, with Manglik, Nadi and Bhakoot dosha checks and a written compatibility report."
      faqs={FAQS}
      testimonials={TESTIMONIALS.filter((t) => t.service === "Marriage Compatibility")}
      intro={
        <>
          <p>
            <strong>Kundli milan</strong> (कुंडली मिलान), also called gun milan or horoscope
            matching, compares the birth charts of the bride and groom before marriage. The
            standard method, <strong>Ashtakoot milan</strong>, scores eight factors (koots)
            based on the Moon&apos;s nakshatra and sign in each chart, for a maximum of{" "}
            <strong>36 gunas</strong>. A score of 18 or more is traditionally considered
            acceptable, 25 or more is good, and 33 or more is excellent.
          </p>
          <p>
            The score is only the starting point. A careful match also checks Manglik dosha,
            Nadi dosha and Bhakoot dosha, whether any of them is cancelled, and the strength of
            the 7th house of marriage in both charts. Our ₹500 kundli milan report covers all of
            this, written by the astrologer in Hindi or English and sent on WhatsApp within
            24–48 hours.
          </p>
        </>
      }
    >
      <h2>The 8 koots of Ashtakoot milan</h2>
      <p>
        Each koot compares one aspect of the two charts and carries a fixed number of points.
        The points add up to 36.
      </p>
      <table>
        <thead>
          <tr>
            <th>Koot</th>
            <th>Points</th>
            <th>What it compares</th>
          </tr>
        </thead>
        <tbody>
          {KOOTS.map(([koot, points, meaning]) => (
            <tr key={koot}>
              <td>{koot}</td>
              <td>{points}</td>
              <td>{meaning}</td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>36</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h2>What the score means</h2>
      <table>
        <thead>
          <tr>
            <th>Gunas matched</th>
            <th>Traditional reading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below 18</td>
            <td>Not recommended without a closer look at both charts</td>
          </tr>
          <tr>
            <td>18–24</td>
            <td>Average, acceptable match</td>
          </tr>
          <tr>
            <td>25–32</td>
            <td>Good match</td>
          </tr>
          <tr>
            <td>33–36</td>
            <td>Excellent match</td>
          </tr>
        </tbody>
      </table>
      <p>
        A high score does not outweigh a serious dosha, and a modest score can still work
        when other factors in the charts are strong. That is why the written analysis matters
        more than the number on its own.
      </p>

      <h2>The doshas we check</h2>
      <h3>Manglik (Mangal) dosha</h3>
      <p>
        A chart is called Manglik when Mars sits in the 1st, 4th, 7th, 8th or 12th house.
        Mars there is believed to bring friction into married life. The dosha is often
        cancelled by Mars&apos;s sign, by other planets, or when both partners are Manglik, so
        it should be judged from both charts rather than from a yes/no label.
      </p>
      <h3>Nadi dosha</h3>
      <p>
        Every nakshatra belongs to one of three nadis: Aadi, Madhya or Antya. When both
        partners share the same nadi, the Nadi koot scores 0 of its 8 points. It is
        traditionally linked to health and children, and there are recognised exceptions,
        for example when both partners have the same Moon sign but different nakshatras.
      </p>
      <h3>Bhakoot dosha</h3>
      <p>
        Bhakoot looks at how far apart the two Moon signs are. Positions of 6–8, 9–5 or 2–12
        from each other score 0 of 7 points and are associated with strain on family
        finances or harmony. This dosha too can be cancelled, for example when the lords of
        the two Moon signs are friends.
      </p>

      <h2>What is in the ₹500 report</h2>
      <ul>
        <li>Your Ashtakoot score out of 36, with an explanation of each koot</li>
        <li>Manglik check for both charts, and whether the dosha is cancelled</li>
        <li>Nadi and Bhakoot dosha check</li>
        <li>Overall guidance on the match, in plain Hindi or English</li>
        <li>Remedies (upay) where the charts call for them</li>
      </ul>

      <h2>Details we need</h2>
      <p>
        For both partners: full name, date of birth, time of birth and place of birth. The
        more accurate the birth time, the more reliable the Manglik and 7th-house analysis.
      </p>

      <h2>How to book</h2>
      <ol>
        <li>
          Open the <Link href="/book?service=marriage">booking form</Link> and choose Marriage
          Compatibility. A second section for your partner&apos;s details appears.
        </li>
        <li>Pay ₹500 by UPI and send the payment screenshot on WhatsApp.</li>
        <li>Receive your kundli milan report on WhatsApp within 24–48 hours.</li>
      </ol>
      <p>
        Want a full reading for yourself as well? See{" "}
        <Link href="/kundli-analysis">kundli analysis</Link> or get your{" "}
        <Link href="/janam-kundli">janam kundli</Link> prepared.
      </p>
    </ServicePageLayout>
  );
}
