import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="px-6 pb-24 pt-[72px]">
      <Reveal className="mx-auto max-w-[800px]">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="m-0 mb-3 font-display text-[clamp(36px,4.4vw,60px)] uppercase leading-[0.95]">
          Privacy Policy
        </h1>
        <p className="m-0 mb-[34px] font-sans text-sm text-muted">Placeholder text pending legal review.</p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">Information we collect</h2>
        <p className="m-0 mb-[26px] font-serif text-[18px] leading-[1.65]">
          Describe the personal, academic and payment information collected through the marketing site and the
          application, and the purpose of each category.
        </p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">How information is used</h2>
        <p className="m-0 mb-[26px] font-serif text-[18px] leading-[1.65]">
          Describe how submitted information is used to deliver each Map, communicate with members, and improve
          the service.
        </p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">Sharing and retention</h2>
        <p className="m-0 mb-[26px] font-serif text-[18px] leading-[1.65]">
          State when information is shared with universities or service providers, and how long records are
          retained.
        </p>

        <h2 className="m-0 mb-2.5 font-sans text-xl font-semibold leading-[1.3]">Your rights</h2>
        <p className="m-0 font-serif text-[18px] leading-[1.65]">
          Describe access, correction and deletion rights and the contact route for exercising them.
        </p>
      </Reveal>
    </section>
  );
}
