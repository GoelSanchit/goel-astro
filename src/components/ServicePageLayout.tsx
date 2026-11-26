import Link from "next/link";
import { CalendarDays, MessageCircle, Star } from "lucide-react";
import FAQ from "./FAQ";
import {
  SERVICES,
  SERVICE_PAGES,
  SITE_URL,
  type FAQ as FAQItem,
  type Testimonial,
} from "@/lib/constants";
import { formatPrice, getWhatsAppURL } from "@/lib/utils";
import { ORG_ID, breadcrumbSchema, offerFor } from "@/lib/seo";

interface ServicePageLayoutProps {
  /** Path of this page, starting with "/". */
  path: string;
  /** Short name for breadcrumbs and the FAQ heading. */
  name: string;
  /** Hindi H1 line. */
  titleHi: string;
  /** English H1 line. */
  title: string;
  /** Opening answer passage, shown right under the H1. */
  intro: React.ReactNode;
  /** SERVICES ids offered on this page (prices and booking links). */
  serviceIds: string[];
  /** schema.org serviceType. */
  serviceType: string;
  /** One-sentence description for the Service schema. */
  schemaDescription: string;
  faqs: FAQItem[];
  testimonials?: Testimonial[];
  children: React.ReactNode;
}

export default function ServicePageLayout({
  path,
  name,
  titleHi,
  title,
  intro,
  serviceIds,
  serviceType,
  schemaDescription,
  faqs,
  testimonials = [],
  children,
}: ServicePageLayoutProps) {
  const services = SERVICES.filter((s) => serviceIds.includes(s.id));
  const related = SERVICE_PAGES.filter((p) => p.href !== path);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name: title,
    alternateName: titleHi,
    serviceType,
    description: schemaDescription,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Meerut" },
      { "@type": "Country", name: "India" },
    ],
    availableLanguage: ["Hindi", "English"],
    offers: serviceIds.map(offerFor),
  };

  return (
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema([{ name, path }])]),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-white/40 mb-6">
          <ol className="flex flex-wrap gap-1.5">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="text-white/60">
              {name}
            </li>
          </ol>
        </nav>

        {/* H1 + answer passage + prices */}
        <header className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start mb-12">
          <div>
            <h1 className="font-[family-name:var(--font-heading)] font-bold mb-6">
              <span lang="hi" className="block text-4xl sm:text-5xl gold-gradient-text">
                {titleHi}
              </span>{" "}
              <span className="block text-xl sm:text-2xl text-white/85 font-medium mt-3">
                {title}
              </span>
            </h1>
            <div className="prose-page text-[17px]">{intro}</div>
          </div>

          <aside className="card-bg p-6 gold-glow lg:sticky lg:top-24">
            <h2 className="text-gold font-semibold mb-4">Prices</h2>
            <ul className="space-y-4 mb-6">
              {services.map((s) => (
                <li key={s.id} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white/85 text-sm font-medium">{s.title}</p>
                    <p lang="hi" className="text-white/40 text-xs">
                      {s.titleHi}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-gold font-bold">{formatPrice(s.price)}</p>
                    <Link
                      href={`/book?service=${s.id}`}
                      className="text-xs text-gold/80 underline hover:text-gold"
                    >
                      Book
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href={services.length === 1 ? `/book?service=${services[0].id}` : "/book"}
              className="flex items-center justify-center gap-2 w-full bg-gold text-navy font-semibold py-3 rounded-full hover:bg-gold-light transition-colors mb-3"
            >
              <CalendarDays className="w-4 h-4" />
              Book Now
            </Link>
            <a
              href={getWhatsAppURL(`Hello 🙏 I have a question about ${name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-white/20 text-white py-3 rounded-full hover:border-gold/50 hover:text-gold transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              Pay by UPI after booking. Report in Hindi or English on WhatsApp.
            </p>
          </aside>
        </header>

        {/* Main content */}
        <article className="prose-page max-w-3xl">{children}</article>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="max-w-3xl mt-12">
            <h2 className="text-xl font-[family-name:var(--font-heading)] text-gold font-semibold mb-4">
              What clients say
            </h2>
            <div className="grid gap-4">
              {testimonials.map((t) => (
                <figure key={t.name} className="card-bg p-5">
                  <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        aria-hidden="true"
                        className={`w-4 h-4 ${i < t.rating ? "fill-gold text-gold" : "text-white/15"}`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-white/75 text-[15px] leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="text-white/45 text-sm mt-3">
                    {t.name}, {t.location}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="card-bg p-6 sm:p-8 mt-12 text-center max-w-3xl">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] font-bold gold-gradient-text mb-3">
            Ready to book?
          </h2>
          <p className="text-white/60 mb-6">
            Fill in your birth details, pay by UPI, and get your report on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {services.length <= 2 ? (
              services.map((s) => (
                <Link
                  key={s.id}
                  href={`/book?service=${s.id}`}
                  className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-navy px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  {s.title} — {formatPrice(s.price)}
                </Link>
              ))
            ) : (
              <Link
                href="/book"
                className="bg-gold text-navy hover:bg-gold-light px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Book a Consultation
              </Link>
            )}
          </div>
        </section>

        {/* Related services */}
        <nav aria-label="Other services" className="mt-12 mb-4 max-w-3xl">
          <h2 className="text-lg text-gold font-semibold mb-3">Other services</h2>
          <ul className="flex flex-wrap gap-2">
            {related.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-block card-bg px-4 py-2 text-sm text-white/70 hover:text-gold hover:border-gold/30"
                >
                  {p.label} · <span lang="hi">{p.labelHi}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <FAQ
        items={faqs}
        titleHi="अक्सर पूछे जाने वाले प्रश्न"
        title={`${name}: Frequently Asked Questions`}
      />
    </div>
  );
}
