import type { Metadata } from "next";

export const SITE_URL = "https://lp.ai-nintei-assistant.com";
export const OG_IMAGE = `${SITE_URL}/lp_nintei_image.jpg`;

interface PageSEOOptions {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

/** Builds page-level metadata, mirroring the previous client-side useSEO hook's fields. */
export function buildMetadata({
  title,
  description,
  path = "/",
  noindex = false,
}: PageSEOOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    robots: noindex ? "noindex, nofollow" : "index, follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [OG_IMAGE],
    },
    twitter: {
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
