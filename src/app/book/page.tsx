import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { SERVICES, SITE_URL } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { pageMetadata, breadcrumbSchema, ORG_ID, WEBSITE_ID } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book an Astrology Consultation — परामर्श बुक करें",
  description:
    "Book a Vedic astrology consultation online: kundli analysis from ₹1,000, kundli milan ₹500, career ₹750, gemstone ₹300. Pay by UPI, report on WhatsApp.",
  path: "/book",
});

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/book#webpage`,
  url: `${SITE_URL}/book`,
  name: "Book an Astrology Consultation",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
};

export default function BookPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            pageSchema,
            breadcrumbSchema([{ name: "Book a Consultation", path: "/book" }]),
          ]),
        }}
      />
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold mb-3">
            <span lang="hi" className="gold-gradient-text">
              परामर्श बुक करें
            </span>
            <span className="block mt-3 text-white/60 text-lg font-normal font-[family-name:var(--font-body)]">
              Book an Online Astrology Consultation
            </span>
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto">
            Fill in your birth details, choose a service and pay by UPI. Your
            report is prepared from your date, time and place of birth and sent
            on WhatsApp within 12–24 hours (24–48 hours for kundli milan), in
            Hindi or English.
          </p>
        </div>

        <BookingForm />

        {/* Server-rendered price list, so the page has real content even
            before the form's JavaScript loads. */}
        <section className="mt-14">
          <h2 className="text-xl font-[family-name:var(--font-heading)] text-gold mb-4 text-center">
            Services and Prices
          </h2>
          <ul className="card-bg divide-y divide-gold/10">
            {SERVICES.map((s) => (
              <li key={s.id} className="flex items-start justify-between gap-4 p-4">
                <div>
                  <Link href={s.page} className="text-white/80 text-sm font-medium hover:text-gold">
                    {s.title}
                  </Link>
                  <p lang="hi" className="text-white/40 text-xs mt-0.5">
                    {s.titleHi}
                  </p>
                </div>
                <span className="text-gold font-semibold text-sm shrink-0">
                  {formatPrice(s.price)}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-white/40 text-xs text-center mt-4">
            Questions before booking? See the{" "}
            <Link href="/#faq" className="text-gold/80 underline">
              FAQ
            </Link>{" "}
            or read our{" "}
            <Link href="/refund-policy" className="text-gold/80 underline">
              refund policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
