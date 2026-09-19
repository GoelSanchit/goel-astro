import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-light/50 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-icon.svg"
                alt={BRAND_NAME}
                width={36}
                height={36}
              />
              <span className="text-lg font-[family-name:var(--font-heading)] font-bold gold-gradient-text">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Trusted Vedic Astrology consultations — guiding you through
              life&apos;s questions with the wisdom of planets and stars.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/book", label: "Book Now" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="hover:text-gold transition-colors"
                >
                  +91 {WHATSAPP_NUMBER.slice(2)}
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-gold transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>Hours: 10:00 AM to 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gold/10 text-center">
          <p className="text-white/30 text-xs mb-2">
            Jyotish is an ancient science. Results may vary. This is not a
            substitute for medical or legal advice.
          </p>
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
