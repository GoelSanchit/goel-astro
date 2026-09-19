"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";
import StarBackground from "./StarBackground";
import { BRAND_NAME } from "@/lib/constants";
import { getWhatsAppURL } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-deep via-navy to-indigo-deep" />
      <StarBackground />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm">Verified Jyotish Consultant</span>
          </div>

          {/* Brand */}
          <h1 className="font-[family-name:var(--font-heading)] font-bold mb-4">
            <span className="block text-5xl sm:text-7xl gold-gradient-text">{BRAND_NAME}</span>
            <span className="block text-xl sm:text-2xl text-white/80 font-medium mt-4">
              ऑनलाइन ज्योतिष परामर्श — Online Kundli &amp; Vedic Astrology Consultation
            </span>
          </h1>

          {/* Sanskrit tagline */}
          <p className="text-xl sm:text-2xl font-[family-name:var(--font-heading)] text-gold/70 mb-6">
            ज्योतिषं सर्वशास्त्राणां चक्षुः
          </p>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Janam kundli analysis, kundli milan for marriage, career astrology and
            gemstone consultation by an experienced Vedic astrologer — detailed
            reports in Hindi or English, delivered on WhatsApp within 24 hours.
            कुंडली विश्लेषण, कुंडली मिलान, करियर और रत्न परामर्श — सब एक ही जगह।
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="group flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light transition-all hover:scale-105 text-lg"
          >
            <CalendarDays className="w-5 h-5" />
            Book Consultation
          </Link>
          <a
            href={getWhatsAppURL(
              "Hello 🙏 I would like to know more about your Jyotish consultation services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full hover:border-gold/50 hover:text-gold transition-all text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { num: "15+", label: "Years Experience" },
            { num: "5000+", label: "Consultations" },
            { num: "4.9★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gold">{stat.num}</p>
              <p className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
