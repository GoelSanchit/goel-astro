"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, BookOpen, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-gold/30 bg-navy-light flex items-center justify-center gold-border-glow p-8">
                <Image
                  src="/images/logo.svg"
                  alt="Goel Astro"
                  width={220}
                  height={220}
                  className="w-full h-full"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-gold/10 animate-pulse" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold gold-gradient-text mb-3">
              हमारे बारे में
            </h2>
            <p className="text-white/50 text-lg mb-6">About Us</p>

            <p className="text-white/70 leading-relaxed mb-6">
              Welcome! At <strong className="text-gold">Goel Astro</strong>, we
              bring the ancient wisdom of Vedic Astrology to you in a modern and
              accessible way. With over 15 years of experience, we have guided
              thousands of people through life&apos;s most important decisions — whether
              it&apos;s marriage, career choices, or overcoming difficult times.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              We believe that Jyotish is not just about predicting the future — it
              is a powerful tool to show you the right direction. In every consultation,
              we provide an in-depth analysis of planetary positions along with
              practical remedies.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "15+ Years Experience" },
                { icon: Users, label: "5000+ Happy Clients" },
                { icon: BookOpen, label: "Vedic Jyotish Expert" },
                { icon: Star, label: "4.9 Star Rating" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 card-bg p-3"
                >
                  <Icon className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-white/70 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
