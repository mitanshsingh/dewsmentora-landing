import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { APP_LOGIN_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a message and we will reply by email. For anything inside your account, sign in to the application.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact DEWS Mentora",
    description: "Send a message and we will reply by email.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
            <h1 className="m-0 mb-[18px] font-display text-[clamp(36px,4.8vw,68px)] uppercase leading-[0.94]">
              Have a question? We&apos;re here to help.
            </h1>
            <p className="m-0 max-w-[56ch] font-serif text-[18px] leading-[1.55]">
              Send a message and we will reply by email. For anything inside your account, sign in to the
              application.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-11">
        <div className="mx-auto grid max-w-[1100px] gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} as="aside" className="grid content-start gap-[26px]">
            <div>
              <h2 className="m-0 mb-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ochre">
                Support
              </h2>
              <p className="m-0 font-serif text-[18px] leading-[1.5]">support@dewsmentora.com</p>
            </div>
            <div>
              <h2 className="m-0 mb-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ochre">
                General enquiries
              </h2>
              <p className="m-0 font-serif text-[18px] leading-[1.5]">hello@dewsmentora.com</p>
            </div>
            <div>
              <h2 className="m-0 mb-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ochre">
                Existing members
              </h2>
              <p className="m-0 font-serif text-[18px] leading-[1.5]">
                <a href={APP_LOGIN_URL} className="border-b-[1.5px] border-yellow">
                  Sign in to your dashboard
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
