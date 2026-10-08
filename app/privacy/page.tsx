import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DEWSMENTORA collects, uses, stores and shares personal information.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PolicyPage policy="privacy" />;
}
