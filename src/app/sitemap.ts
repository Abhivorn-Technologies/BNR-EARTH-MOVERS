import type { MetadataRoute } from "next";

import { SERVICES } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about-us", "/services", "/machinery", "/gallery", "/contact", "/privacy", "/terms"];
  return [
    ...paths.map((p) => ({ url: `${SITE_URL}${p === "/" ? "" : p}`, priority: p === "/" ? 1 : 0.7 })),
    ...SERVICES.map((s) => ({ url: `${SITE_URL}/services/${s.id}`, priority: 0.8 })),
  ];
}
