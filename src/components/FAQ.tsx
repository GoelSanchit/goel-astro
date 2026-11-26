import { ChevronDown } from "lucide-react";
import { FAQS, type FAQ as FAQItem } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

interface FAQProps {
  items?: FAQItem[];
  titleHi?: string;
  title?: string;
}

// Native <details>/<summary>: every answer is in the server-rendered HTML
// (readable by search engines and AI crawlers) and the accordion works
// without JavaScript.
export default function FAQ({
  items = FAQS,
  titleHi = "अक्सर पूछे जाने वाले प्रश्न",
  title = "Frequently Asked Questions about Online Kundli & Jyotish Consultation",
}: FAQProps) {
  return (
    <section id="faq" className="py-20 section-gradient">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading hi={titleHi} en={title} className="mb-14" />

        <div className="space-y-3">
          {items.map((faq) => (
            <details key={faq.question} className="card-bg overflow-hidden group">
              <summary className="w-full flex items-center justify-between p-5 text-left cursor-pointer list-none">
                <h3 className="text-white/80 font-medium text-sm sm:text-base pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  aria-hidden="true"
                  className="faq-chevron w-5 h-5 text-gold shrink-0 transition-transform duration-300"
                />
              </summary>
              <div className="px-5 pb-5 text-white/60 text-sm leading-relaxed border-t border-gold/10 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
