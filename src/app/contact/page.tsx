import type { Metadata } from "next";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, EMAIL, SITE_URL } from "@/lib/constants";
import { pageMetadata, ORG_ID, WEBSITE_ID } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact an Astrologer in Meerut — संपर्क करें",
  description:
    "Contact Goel Astro on WhatsApp, phone or email for Vedic astrology consultation. Based in Meerut, Uttar Pradesh; open 10 AM to 8 PM, online across India.",
  path: "/contact",
});

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact Goel Astro",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold mb-3">
            <span lang="hi" className="gold-gradient-text">
              संपर्क करें
            </span>
            <span className="block mt-3 text-white/50 text-lg font-normal font-[family-name:var(--font-body)]">
              Contact Goel Astro
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-bg p-6 hover:border-gold/30 transition-all group text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-[#25D366]" />
            </div>
            <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
            <p className="text-white/50 text-sm">+91 {WHATSAPP_NUMBER.slice(2)}</p>
            <p className="text-gold text-xs mt-2">Fastest Response</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="card-bg p-6 hover:border-gold/30 transition-all group text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <Mail className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <p className="text-white/50 text-sm">{EMAIL}</p>
            <p className="text-gold text-xs mt-2">Reply within 24 hours</p>
          </a>

          {/* Working Hours */}
          <div className="card-bg p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-white font-semibold mb-1">Working Hours</h3>
            <p className="text-white/50 text-sm">10:00 AM</p>
            <p className="text-white/50 text-sm">to 8:00 PM</p>
          </div>

          {/* Location */}
          <div className="card-bg p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-white font-semibold mb-1">Location</h3>
            <p className="text-white/50 text-sm">Meerut, Uttar Pradesh</p>
            <p className="text-gold text-xs mt-2">Online Consultation Available Across India</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">
            For the fastest response, message us on WhatsApp
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello 🙏 I would like to know more about your Jyotish consultation services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition-all text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
