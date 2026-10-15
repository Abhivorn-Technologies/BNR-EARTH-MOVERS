import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

/**
 * Public site URL. Set NEXT_PUBLIC_SITE_URL to the custom domain in production;
 * on Vercel it falls back to the project's production domain automatically.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description, images: ["/opengraph-image.jpg"] },
  };
}
