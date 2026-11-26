import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Refund Policy",
  description:
    "Goel Astro refund policy: a full refund if we cannot provide your consultation; no refund once your report has been delivered. How to ask for a refund.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" titleHi="धनवापसी नीति" updated="26 November 2026">
      <h2>When you get a full refund</h2>
      <p>
        If for any reason we are unable to provide the consultation you paid for, you will
        receive a <strong>full refund</strong>.
      </p>

      <h2>When refunds do not apply</h2>
      <p>
        Once your report has been delivered, refunds are not applicable, because the work has
        been done. If something in the report is unclear, message us and we will explain it.
      </p>

      <h2>How to ask for a refund</h2>
      <p>
        Message us on{" "}
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>WhatsApp (+91 {WHATSAPP_NUMBER.slice(2)})</a>{" "}
        or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with the name used for the booking and
        your UPI payment details. Refunds are sent back to the UPI account you paid from.
      </p>

      <p>
        See also our <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
