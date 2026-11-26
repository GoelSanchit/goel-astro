import type { Metadata } from "next";
import Hero from "@/components/Hero";
import NishulkUpay from "@/components/NishulkUpay";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import { FAQS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Online Kundli & Astrology Consultation, Meerut | Goel Astro",
  absoluteTitle: true,
  description:
    "Vedic astrology consultation from Meerut: janam kundli, kundli milan, career and gemstone guidance. Detailed report on WhatsApp within 24 hours.",
  path: "/",
});

// FAQ rich results were retired in May 2026; the markup stays because it
// still describes the visible FAQ accurately.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <NishulkUpay />
      <Services />
      <About />
      <Testimonials />
      <HowItWorks />
      <FAQ />
    </>
  );
}
