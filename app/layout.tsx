import type { Metadata } from "next";
import { Anton, Archivo, Caveat, EB_Garamond, Karla, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { SITE_URL, SITE_NAME, ORG_DESCRIPTION } from "@/lib/seo";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

// Phone design system typefaces — used below the `nav` breakpoint.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// The margin notes in the Identity Mapping figure, which were handwriting
// baked into the PNG.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DEWS Mentora — Structured clarity before high-stakes education decisions",
    template: "%s — DEWS Mentora",
  },
  description: ORG_DESCRIPTION,
  keywords: [
    "study abroad",
    "study in usa",
    "study in uk",
    "study in germany",
    "study in ireland",
    "best university for masters",
    "how to choose a university",
    "how to apply for masters abroad",
    "career guidance",
    "student visa paperwork",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  openGraph: {
    siteName: SITE_NAME,
    title: "DEWS Mentora — Structured clarity before high-stakes education decisions",
    description:
      "Four specialised Maps that evaluate identity, universities, application narrative and execution.",
    type: "website",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${garamond.variable} ${newsreader.variable} ${karla.variable} ${caveat.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[200] focus:bg-ink focus:px-[18px] focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
