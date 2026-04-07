"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wallet, MessageSquare, Sparkles } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Fill the Form",
    titleHi: "📝",
    description: "Fill in your details in the booking form — name, date of birth, time, and place.",
  },
  {
    icon: Wallet,
    title: "Make Payment",
    titleHi: "💰",
    description: "Pay easily via UPI — scan the QR code or pay directly to the UPI ID.",
  },
  {
    icon: MessageSquare,
    title: "Confirm on WhatsApp",
    titleHi: "📱",
    description: "Send the payment screenshot on WhatsApp — we will confirm it right away.",
  },
  {
    icon: Sparkles,
    title: "Receive Consultation",
    titleHi: "🔮",
    description: "Get your detailed consultation report on WhatsApp within 12–24 hours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold gold-gradient-text mb-3">
            कैसे काम करता है?
          </h2>
          <p className="text-white/50 text-lg">How It Works</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Step number */}
              <div className="text-5xl mb-4">{step.titleHi}</div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold">{i + 1}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-gold/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
