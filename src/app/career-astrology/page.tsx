import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import { TESTIMONIALS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Career Astrology Consultation — Job, Business & Timing",
  description:
    "Career guidance from your birth chart: job or business, the right field, and when to make a change, read from the 10th house, dasha and transits. ₹750.",
  path: "/career-astrology",
});

const QUESTIONS = [
  "Is a job or my own business better for me?",
  "Which field suits me: government service, a private job, trade, or a profession?",
  "When is a good time to change my job?",
  "Why does my career feel stuck, and what can help?",
  "Is a business partnership favourable in my chart?",
  "Are there indications of working or settling abroad?",
  "When is a favourable period to start a business?",
  "Which stream or subject should I choose for my studies?",
];

const HOUSES = [
  ["10th house (karma bhava)", "Profession, status and reputation"],
  ["2nd and 11th houses", "Income, savings and gains"],
  ["6th house", "Service, jobs, competition and daily work"],
  ["7th house", "Business and partnerships"],
  ["12th house", "Foreign lands, expenses"],
] as const;

const FAQS = [
  {
    question: "Can astrology tell me exactly which job to take?",
    answer:
      "It shows the kinds of work your chart supports, such as administration, trade, teaching, technical or creative work, and the periods that favour a change. It does not name a specific company or post; the decision stays yours.",
  },
  {
    question: "I am a student. Can I ask about my studies?",
    answer:
      "Yes. You can ask which stream or field suits you. Write your question in the 'Specific Question / Concern' box on the booking form.",
  },
  {
    question: "Can I talk to the astrologer on a call?",
    answer:
      "Career guidance is delivered as a written report on WhatsApp. If you would rather talk, message us on WhatsApp to book a phone session. Additional charges may apply and we will tell you the price first.",
  },
  {
    question: "What details do I need to share?",
    answer:
      "Your full name, date, time and place of birth, and your question. If you are choosing between options, list them, for example 'stay in my current job or join a family business'.",
  },
];

export default function CareerAstrologyPage() {
  return (
    <ServicePageLayout
      path="/career-astrology"
      name="Career Astrology"
      titleHi="करियर ज्योतिष"
      title="Career Astrology Consultation — Job, Business and Timing"
      serviceIds={["career"]}
      serviceType="Career guidance through Vedic astrology"
      schemaDescription="Career guidance from the birth chart: suitable fields, job or business, and favourable timing for changes, based on the 10th house, dasha and transits."
      faqs={FAQS}
      testimonials={TESTIMONIALS.filter((t) => t.service === "Career Guidance")}
      intro={
        <>
          <p>
            <strong>Career astrology</strong> uses your birth chart to answer practical
            questions about work: which kind of work suits you, whether a job or a business is
            better for you, and when a change is likely to go well. In Vedic astrology the{" "}
            <strong>10th house</strong> (karma bhava) and its lord show profession and status,
            the 2nd and 11th houses show income and gains, and the 6th house shows service and
            competition. Saturn, the Sun, Mercury and Jupiter are read for discipline,
            authority, trade and guidance, and the running <strong>dasha</strong> and transits
            show the timing.
          </p>
          <p>
            Goel Astro&apos;s career guidance (₹750) reads your chart for your own question and
            answers it in a written report, in Hindi or English, sent on WhatsApp within 24
            hours.
          </p>
        </>
      }
    >
      <h2>Questions you can ask</h2>
      <ul>
        {QUESTIONS.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <p>
        Pick the one that matters most and write it in the question box when you{" "}
        <Link href="/book?service=career">book</Link>.
      </p>

      <h2>How your chart is read for career</h2>
      <table>
        <thead>
          <tr>
            <th>Part of the chart</th>
            <th>What it shows</th>
          </tr>
        </thead>
        <tbody>
          {HOUSES.map(([house, meaning]) => (
            <tr key={house}>
              <td>{house}</td>
              <td>{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The planets placed in these houses, the planets that rule them, and the aspects they
        receive point to the kind of work that suits you. The dashamsha (D10), a divisional
        chart for career, can refine the picture. Timing comes from the dasha you are running
        and from the transits of Saturn and Jupiter, which is why the same question can have a
        different answer this year and next.
      </p>

      <h2>Job or business?</h2>
      <p>
        A strong 10th house with a well-placed Saturn or Sun often supports steady service and
        positions of authority. A strong 7th house, an active Mercury and a well-placed 11th
        lord lean towards trade and business. Most charts are a mix, so the report explains
        which way yours leans, and when.
      </p>

      <h2>What you receive</h2>
      <ul>
        <li>A direct answer to your question</li>
        <li>The fields and kinds of work your chart supports</li>
        <li>Favourable and difficult periods in the coming years</li>
        <li>Practical remedies for the planets affecting your career</li>
      </ul>
      <p>
        For a broader reading covering marriage, health and family as well, see{" "}
        <Link href="/kundli-analysis">kundli analysis</Link>.
      </p>
    </ServicePageLayout>
  );
}
