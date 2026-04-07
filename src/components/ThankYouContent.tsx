"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Copy, Check, MessageCircle } from "lucide-react";
import { UPI_ID } from "@/lib/constants";
import { getWhatsAppURL, formatPrice } from "@/lib/utils";

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "User";
  const service = searchParams.get("service") || "Consultation";
  const serviceHi = searchParams.get("serviceHi") || "";
  const amount = searchParams.get("amount") || "500";
  const [copied, setCopied] = useState(false);

  async function copyUPI() {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = UPI_ID;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const serviceList = service.includes(",")
    ? service.split(", ").join(", ")
    : service;
  const whatsappMsg = `Hello 🙏 I have made a payment of ${formatPrice(Number(amount))} for ${serviceList}. My name is ${name}. Please confirm.`;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-xl mx-auto px-4">
        {/* Success */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-green-400 mb-2">
            Booking Successful!
          </h1>
          <p className="text-white/60">Please complete the payment using the steps below</p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-bg p-6 mb-6"
        >
          <h3 className="text-gold font-semibold mb-3">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/50">Name:</span>
              <span className="text-white">{name}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-white/50 shrink-0">Service:</span>
              <span className="text-white text-right">
                {service.includes(",") ? (
                  <span className="flex flex-col items-end gap-0.5">
                    {service.split(", ").map((s, i) => {
                      const hiParts = serviceHi ? serviceHi.split(", ") : [];
                      return (
                        <span key={i} className="text-sm">
                          {hiParts[i] ? `${hiParts[i]} — ` : ""}
                          {s}
                        </span>
                      );
                    })}
                  </span>
                ) : (
                  <>
                    {serviceHi ? `${serviceHi} — ` : ""}
                    {service}
                  </>
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Amount:</span>
              <span className="text-gold font-bold text-lg">
                {formatPrice(Number(amount))}
              </span>
            </div>
          </div>
        </motion.div>

        {/* UPI Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-bg p-6 mb-6"
        >
          <h3 className="text-gold font-semibold mb-4 text-center">
            Pay via UPI
          </h3>

          {/* QR Code */}
          <div className="flex justify-center mb-5">
            <div className="bg-white p-3 rounded-xl">
              <Image
                src="/images/upi-qr.jpeg"
                alt="UPI QR Code"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mb-4">
            Scan the QR code or pay using the UPI ID below
          </p>

          {/* UPI ID */}
          <div className="flex items-center gap-2 bg-navy/60 border border-gold/20 rounded-xl px-4 py-3">
            <span className="text-white font-mono text-sm flex-1 truncate">
              {UPI_ID}
            </span>
            <button
              onClick={copyUPI}
              className="shrink-0 flex items-center gap-1 bg-gold/10 text-gold text-xs px-3 py-1.5 rounded-lg hover:bg-gold/20 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>
          </div>

          <p className="text-center text-gold font-semibold mt-4 text-lg">
            Amount: {formatPrice(Number(amount))}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-bg p-6 mb-6"
        >
          <h3 className="text-gold font-semibold mb-4">After Payment</h3>
          <div className="space-y-3">
            {[
              `Step 1: Pay ${formatPrice(Number(amount))} via UPI`,
              "Step 2: Take a screenshot of the payment",
              "Step 3: Click the WhatsApp button below and send the screenshot",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-white/60 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href={getWhatsAppURL(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 rounded-xl hover:brightness-110 transition-all text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Send Screenshot on WhatsApp
          </a>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center space-y-2"
        >
          <p className="text-white/40 text-sm">
            You will receive your consultation within 12–24 hours after payment confirmation.
          </p>
          <p className="text-white/30 text-xs">
            If you face any issues, please message us on WhatsApp.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
