import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of dewsmentora.com and your registration for, purchase of and use of DEWSMENTORA services.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <PolicyPage policy="terms" />;
}
