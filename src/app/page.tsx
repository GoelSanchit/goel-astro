import Hero from "@/components/Hero";
import NishulkUpay from "@/components/NishulkUpay";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import { FAQS, SERVICES, SITE_URL, BRAND_NAME } from "@/lib/constants";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Astrology Consultation Services",
  url: `${SITE_URL}/#services`,
  itemListElement: SERVICES.map((s) => ({
    "@type": "Offer",
    url: `${SITE_URL}/book?service=${s.id}`,
    priceCurrency: "INR",
    price: s.price,
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: `${s.titleHi} — ${s.title}`,
      description: s.description,
      provider: { "@id": `${SITE_URL}/#organization`, name: BRAND_NAME },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
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
