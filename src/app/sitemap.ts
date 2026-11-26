import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Required for `output: "export"`.
export const dynamic = "force-static";

// Real last-modified dates per page. Update a page's date when its content
// changes; a build-time date on every URL tells search engines nothing.
const PAGES: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-11-26" },
  { path: "/kundli-analysis", lastModified: "2026-11-26" },
  { path: "/janam-kundli", lastModified: "2026-11-26" },
  { path: "/kundli-milan", lastModified: "2026-11-26" },
  { path: "/career-astrology", lastModified: "2026-11-26" },
  { path: "/gemstone-consultation", lastModified: "2026-11-26" },
  { path: "/astrologer-in-meerut", lastModified: "2026-11-26" },
  { path: "/book", lastModified: "2026-11-26" },
  { path: "/contact", lastModified: "2026-11-26" },
  { path: "/privacy", lastModified: "2026-11-26" },
  { path: "/terms", lastModified: "2026-11-26" },
  { path: "/refund-policy", lastModified: "2026-11-26" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
  }));
}
