import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Payment",
  description: "Booking successful! Please complete your payment via UPI.",
  // Personalised post-booking page; keep it out of search results.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-white/40">
          Loading...
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
