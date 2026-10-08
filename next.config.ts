import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      // Policy URLs named in the owner's Policy.docx (e.g. for payment-gateway
      // listings) that differ from this site's routes.
      { source: "/terms-conditions", destination: "/terms", permanent: true },
      { source: "/refund_returns", destination: "/cancellation-refund-policy", permanent: true },
    ];
  },
};

export default nextConfig;
