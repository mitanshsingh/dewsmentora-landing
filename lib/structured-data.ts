import { SITE_URL, SITE_NAME, ORG_DESCRIPTION } from "./seo";

// TODO(human): sameAs is empty pending real, live social profile URLs — do not
// populate with guessed or placeholder links. Same for contactPoint.telephone
// below, which is omitted until a published support number exists.
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: ORG_DESCRIPTION,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@dewsmentora.com",
      contactType: "customer service",
      areaServed: "IN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished,
    dateModified,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function howToJsonLd({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}

const PRODUCT_OFFERS: Record<string, Record<string, unknown>> = {
  "university-intelligence-mapping": {
    "@type": "Offer",
    price: "3999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/products/university-intelligence-mapping`,
  },
  "story-mapping": {
    "@type": "Offer",
    price: "12999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/products/story-mapping`,
  },
  "execution-mapping": {
    "@type": "AggregateOffer",
    lowPrice: "2500",
    priceCurrency: "INR",
    offerCount: "1",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/products/execution-mapping`,
  },
};

export function productJsonLd(product: {
  slug: string;
  name: string;
  tagline: string;
  figure: string;
  figureAlt: string;
}) {
  const offers = PRODUCT_OFFERS[product.slug];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.slug}#product`,
    name: product.name,
    description: product.tagline,
    image: `${SITE_URL}${product.figure}`,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: { "@id": `${SITE_URL}/#organization` },
    ...(offers ? { offers } : {}),
  };
}
