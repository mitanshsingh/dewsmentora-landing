import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Service Delivery & Shipping Policy",
  description: "How services purchased through dewsmentora.com are delivered. DEWSMENTORA services are delivered digitally; physical shipping is generally not applicable.",
  alternates: { canonical: "/service-delivery-shipping-policy" },
};

export default function Page() {
  return <PolicyPage policy="service-delivery" />;
}
