import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import { TESTIMONIALS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gemstone Consultation — Which Ratna Suits Your Kundli?",
  description:
    "Find the gemstone that suits your birth chart, and the ones to avoid: ruby, pearl, coral, emerald, pukhraj, diamond, neelam and more. ₹300 on WhatsApp.",
  path: "/gemstone-consultation",
});

const STONES = [
  ["Sun (Surya)", "Ruby", "माणिक्य (Manik)"],
  ["Moon (Chandra)", "Pearl", "मोती (Moti)"],
  ["Mars (Mangal)", "Red coral", "मूंगा (Moonga)"],
  ["Mercury (Budh)", "Emerald", "पन्ना (Panna)"],
  ["Jupiter (Guru)", "Yellow sapphire", "पुखराज (Pukhraj)"],
  ["Venus (Shukra)", "Diamond", "हीरा (Heera)"],
  ["Saturn (Shani)", "Blue sapphire", "नीलम (Neelam)"],
  ["Rahu", "Hessonite", "गोमेद (Gomed)"],
  ["Ketu", "Cat's eye", "लहसुनिया (Lehsunia)"],
] as const;

const FAQS = [
  {
    question: "Can I choose a gemstone by my zodiac sign?",
    answer:
      "It is not recommended. Two people with the same Moon sign can have very different charts. A gemstone strengthens a planet, so it should be chosen for planets that are favourable in your own chart, based on your lagna and dasha.",
  },
  {
    question: "Can I wear more than one gemstone?",
    answer:
      "Sometimes, but some combinations are traditionally avoided, such as stones of planets that are mutual enemies, for example ruby (Sun) with blue sapphire (Saturn). Ask before combining stones.",
  },
  {
    question: "Is blue sapphire (neelam) dangerous?",
    answer:
      "Neelam is traditionally said to act quickly, for good or bad, so it is recommended only when Saturn is clearly favourable in the chart. Many astrologers advise a trial period before wearing it permanently.",
  },
  {
    question: "Will a gemstone solve my problem?",
    answer:
      "A gemstone is a traditional remedy that supports a planet. It is not a guaranteed solution, and it is never a substitute for medical treatment or professional advice.",
  },
];

export default function GemstoneConsultationPage() {
  return (
    <ServicePageLayout
      path="/gemstone-consultation"
      name="Gemstone Consultation"
      titleHi="रत्न परामर्श"
      title="Gemstone Consultation — Which Ratna Suits Your Kundli?"
      serviceIds={["gemstone"]}
      serviceType="Gemstone (ratna) recommendation through Vedic astrology"
      schemaDescription="Recommendation of the gemstone that suits the birth chart, and the stones to avoid, based on the lagna, favourable planets and running dasha."
      faqs={FAQS}
      testimonials={TESTIMONIALS.filter((t) => t.service === "Gem Stone Consultation")}
      intro={
        <>
          <p>
            In Vedic astrology each of the nine planets (navagraha) has a{" "}
            <strong>gemstone (ratna)</strong> believed to strengthen it: ruby for the Sun, pearl
            for the Moon, red coral for Mars, emerald for Mercury, yellow sapphire for Jupiter,
            diamond for Venus, blue sapphire for Saturn, hessonite for Rahu and cat&apos;s eye
            for Ketu. A gemstone strengthens a planet; it does not &ldquo;fix&rdquo; it. Wearing
            the wrong stone can strengthen a planet that is unfavourable for your chart.
          </p>
          <p>
            That is why a stone should be chosen from your kundli, not from your zodiac sign
            alone. Goel Astro&apos;s gemstone consultation (₹300) checks your lagna, the
            planets that are favourable and unfavourable for you, and your running dasha, then
            tells you which stone suits you and which to avoid, before you spend money on one.
          </p>
        </>
      }
    >
      <h2>The nine planets and their gemstones</h2>
      <table>
        <thead>
          <tr>
            <th>Planet</th>
            <th>Gemstone</th>
            <th>Hindi name</th>
          </tr>
        </thead>
        <tbody>
          {STONES.map(([planet, stone, hindi]) => (
            <tr key={planet}>
              <td>{planet}</td>
              <td>{stone}</td>
              <td lang="hi">{hindi}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Why your kundli decides the stone</h2>
      <p>
        Whether a planet is helpful depends on the houses it rules in your chart. Jupiter,
        for example, is a natural benefic, but for some ascendants it rules difficult houses,
        and strengthening it with a yellow sapphire is not advised. The astrologer looks at:
      </p>
      <ul>
        <li>your lagna (ascendant) and the planets that are friendly to it;</li>
        <li>the strength and placement of the planet the stone belongs to;</li>
        <li>the dasha you are running now and the one that comes next.</li>
      </ul>

      <h2>Before you buy a gemstone</h2>
      <ul>
        <li>Buy a natural stone from a reputable seller, ideally with a lab certificate.</li>
        <li>Ask your astrologer about the weight (ratti) that suits you.</li>
        <li>
          Stones such as neelam are often tried for a short period before being worn
          permanently.
        </li>
        <li>If you feel unwell or uneasy after wearing a stone, take it off and ask us.</li>
      </ul>

      <h2>Details we need</h2>
      <p>
        Your full name, date, time and place of birth. If you already wear a gemstone,
        mention it in the question box when you{" "}
        <Link href="/book?service=gemstone">book</Link>. For a complete reading of your chart,
        see <Link href="/kundli-analysis">kundli analysis</Link>.
      </p>
    </ServicePageLayout>
  );
}
