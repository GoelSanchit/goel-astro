"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sun,
  Heart,
  Briefcase,
  Gem,
  CalendarDays,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Sun,
  Heart,
  Briefcase,
  Gem,
  CalendarDays,
};

export default function Services() {
  return (
    <section id="services" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold gold-gradient-text mb-3">
            हमारी सेवाएं
          </h2>
          <p className="text-white/50 text-lg">Our Services</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Sun;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-bg p-6 hover:border-gold/30 transition-all hover:gold-glow group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-gold mb-1">
                  {service.titleHi}
                </h3>
                <p className="text-white/60 text-sm mb-1">{service.title}</p>
                <p className="text-white/40 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gold">
                    {formatPrice(service.price)}
                  </span>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="bg-gold/10 text-gold text-sm px-4 py-2 rounded-full hover:bg-gold hover:text-navy transition-all font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
