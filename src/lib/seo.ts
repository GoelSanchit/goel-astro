import type { Metadata } from "next";
import { BRAND_NAME, SERVICES, SITE_URL } from "./constants";

export const OG_IMAGE = {
  url: "/images/og.jpg",
  width: 1200,
  height: 630,
  alt: "Goel Astro — Online Kundli & Vedic Astrology Consultation, Meerut",
};

export const INDEXABLE_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

interface PageMetadataInput {
  /** Page title. Child pages get " | Goel Astro" from the layout template. */
  title: string;
  /** Use the title as-is, without the layout's " | Goel Astro" suffix. */
  absoluteTitle?: boolean;
  description: string;
  /** Path starting with "/", used for the canonical and og:url. */
  path: string;
}

// Full metadata for an indexable page. Next.js replaces (does not merge) the
// layout's openGraph/twitter objects when a page sets them, so every page
// builds the complete set here, including the share image.
export function pageMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
}: PageMetadataInput): Metadata {
  const shareTitle = absoluteTitle ? title : `${title} | ${BRAND_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: INDEXABLE_ROBOTS,
    openGraph: {
      type: "website",
      locale: "en_IN",
      alternateLocale: "hi_IN",
      url: path,
      siteName: BRAND_NAME,
      title: shareTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const CATALOG_ID = `${SITE_URL}/#catalog`;

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function offerFor(serviceId: string) {
  const s = SERVICES.find((x) => x.id === serviceId);
  if (!s) throw new Error(`Unknown service id: ${serviceId}`);
  return {
    "@type": "Offer",
    name: s.title,
    price: s.price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book?service=${s.id}`,
    seller: { "@id": ORG_ID },
  };
}
