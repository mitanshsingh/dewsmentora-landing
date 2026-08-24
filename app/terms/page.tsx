import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the DEWS Mentora marketing site and the four Maps offered through the application.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="px-6 pb-24 pt-[72px]">
      <Reveal className="mx-auto max-w-[800px]">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
        <h1 className="m-0 mb-3 font-display text-[clamp(36px,4.4vw,60px)] uppercase leading-[0.95]">
          Terms of Service
        </h1>
        <p className="m-0 mb-[34px] font-sans text-sm text-muted">Placeholder text pending legal review.</p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">Scope of service</h2>
        <p className="m-0 mb-[26px] font-serif text-[18px] leading-[1.65]">
          Define what each Map delivers, and state clearly that outputs are evaluations and process management
          rather than guarantees of admission, visa or outcome.
        </p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">Member responsibilities</h2>
        <p className="m-0 mb-[26px] font-serif text-[18px] leading-[1.65]">
          Set out the accuracy of information members provide and their responsibility for final decisions.
        </p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">Fees, cancellation and refunds</h2>
        <p className="m-0 mb-[26px] font-serif text-[18px] leading-[1.65]">
          Reference the membership fee, professional and administrative fee, and the cancellation and refund
          policy.
        </p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">Governing terms</h2>
        <p className="m-0 font-serif text-[18px] leading-[1.65]">
          State the governing law, dispute process and how changes to these terms are communicated.
        </p>
      </Reveal>
    </section>
  );
}
