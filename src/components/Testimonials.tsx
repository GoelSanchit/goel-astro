"use client";

import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const averageRating = (
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  return (
    <section id="testimonials" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionHeading
            hi="हमारे संतुष्ट ग्राहक"
            en="Astrology Consultation Reviews — What Our Clients Say"
            className="mb-5"
          />

          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 bg-gold/5 border border-gold/20 rounded-full px-5 py-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-gold font-semibold text-sm">
              {averageRating}
            </span>
            <span className="text-white/40 text-sm">
              average of the {TESTIMONIALS.length} client reviews below
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-bg p-6 relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(212,175,55,0.35)]"
            >
              {/* Gold accent bar */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <Quote className="w-14 h-14 text-gold/[0.07] absolute -top-1 right-2 pointer-events-none" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${
                      si < t.rating ? "fill-gold text-gold" : "text-white/15"
                    }`}
                  />
                ))}
              </div>

              {/* Review */}
              <blockquote className="text-white/75 text-[15px] leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 pt-4 border-t border-gold/10">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/25 flex items-center justify-center">
                  <span className="text-gold font-semibold text-sm">
                    {initials(t.name)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white font-medium text-sm flex items-center gap-1.5">
                    <span className="truncate">{t.name}</span>
                    <BadgeCheck className="w-4 h-4 text-gold shrink-0" />
                  </p>
                  <p className="text-white/40 text-xs truncate">{t.location}</p>
                </div>
              </figcaption>

              <span className="mt-3 self-start text-xs bg-gold/10 text-gold border border-gold/20 px-2.5 py-1 rounded-full">
                {t.service}
              </span>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
