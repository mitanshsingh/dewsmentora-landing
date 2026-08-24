import type { MetadataRoute } from "next";
import { PRODUCTS, productHref } from "@/lib/products";
import { COUNTRIES } from "@/lib/study-destinations";
import { GUIDES } from "@/lib/guides";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/products`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/study-abroad`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/how-it-works`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/for-students`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/resources`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/resources/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/resources/guides`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/resources/faqs`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}${productHref(p)}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const countryEntries: MetadataRoute.Sitemap = COUNTRIES.map((c) => ({
    url: `${SITE_URL}/study-abroad/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const guideEntries: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${SITE_URL}/resources/guides/${g.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: g.updatedISO,
  }));

  return [...staticEntries, ...productEntries, ...countryEntries, ...guideEntries];
}
