import type { Metadata } from "next";
import { Anton, Archivo, EB_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { SITE_URL, SITE_NAME, ORG_DESCRIPTION, openGraph } from "@/lib/seo";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DEWS Mentora — Structured clarity before high-stakes education decisions",
    template: "%s — DEWS Mentora",
  },
  description: ORG_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  openGraph: openGraph({
    title: "DEWS Mentora — Structured clarity before high-stakes education decisions",
    description:
      "Four specialised Maps that evaluate identity, universities, application narrative and execution.",
    path: "/",
  }),
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
      className={`${anton.variable} ${archivo.variable} ${garamond.variable}`}
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
