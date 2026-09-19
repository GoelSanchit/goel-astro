import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Required for `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Post-payment page carries the customer's name in the query string.
      disallow: "/thank-you",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
