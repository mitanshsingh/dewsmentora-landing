import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "When a DEWSMENTORA service can be cancelled and refunded, and when personalised professional work begins.",
  alternates: { canonical: "/cancellation-refund-policy" },
};

export default function Page() {
  return <PolicyPage policy="cancellation-refund" />;
}
