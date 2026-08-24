import type { NextConfig } from "next";

// Vercel sets VERCEL_ENV to "production" only for the production domain
// (dewsmentora.com); preview deployments (dewsmentora.vercel.app, branch
// previews) get "preview". Anything not production should be non-indexable.
const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    if (isProduction) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
