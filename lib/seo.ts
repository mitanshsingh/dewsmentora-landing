export const SITE_URL = "https://dewsmentora.com";
export const SITE_NAME = "DEWS Mentora";
export const ORG_LEGAL_NAME = "DEWS Mentora";
export const ORG_DESCRIPTION =
  "DEWSMENTORA helps aspirants and families independently evaluate, compare and validate high-stakes education and career decisions before commitment.";

// Pricing is in rupees and the audience is Indian, so every page's OpenGraph
// metadata should carry en_IN rather than the default en_US.
export const OG_LOCALE = "en_IN";

/**
 * Next.js shallow-merges metadata across route segments: a page that sets its
 * own `openGraph` object replaces the layout's entirely rather than merging
 * into it, so siteName/locale/type must be repeated on every page that
 * overrides openGraph. Use this helper instead of hand-writing that object.
 */
export function openGraph(og: {
  title: string;
  description: string;
  type?: "website" | "article";
  path?: string;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  return {
    siteName: SITE_NAME,
    locale: OG_LOCALE,
    type: og.type ?? "website",
    ...(og.path ? { url: `${SITE_URL}${og.path}` } : {}),
    title: og.title,
    description: og.description,
    ...(og.publishedTime ? { publishedTime: og.publishedTime } : {}),
    ...(og.modifiedTime ? { modifiedTime: og.modifiedTime } : {}),
  };
}
