import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LineText from "@/components/ui/LineText";
import Reveal from "@/components/motion/Reveal";
import { POLICIES, POLICY_CONTACT, REFUND_AT_A_GLANCE } from "@/lib/policies";

export type PolicyKey = keyof typeof POLICIES;

export const POLICY_LINKS: { key: PolicyKey; href: string; label: string }[] = [
  { key: "terms", href: "/terms", label: "Terms & Conditions" },
  { key: "privacy", href: "/privacy", label: "Privacy Policy" },
  { key: "cancellation-refund", href: "/cancellation-refund-policy", label: "Cancellation & Refund Policy" },
  { key: "service-delivery", href: "/service-delivery-shipping-policy", label: "Service Delivery & Shipping Policy" },
];

const BODY = "font-serif text-[17px] leading-[1.65] text-ink nav:text-[18px]";

function ContactDetails() {
  return (
    <div className="mt-5 border-l-[3px] border-yellow bg-cream p-[20px_22px]">
      <p className="m-0 mb-3 font-sans text-[15px] font-bold tracking-[0.06em]">{POLICY_CONTACT.name}</p>
      <dl className="m-0 grid gap-2">
        {POLICY_CONTACT.rows.map((r) => (
          <div key={r.label} className="grid gap-x-4 sm:grid-cols-[140px_1fr]">
            <dt className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">{r.label}</dt>
            <dd className="m-0 break-words font-serif text-[17px] leading-[1.5]">
              {r.href ? (
                <a href={r.href} className="border-b border-yellow">
                  {r.value}
                </a>
              ) : (
                r.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="m-0 mt-4 font-sans text-[14px] font-semibold text-ochre">{POLICY_CONTACT.signOff}</p>
    </div>
  );
}

/** One template for the four policies in Policy.docx. */
export default function PolicyPage({ policy: key }: { policy: PolicyKey }) {
  const policy = POLICIES[key];
  const last = policy.sections.length - 1;

  return (
    <section className="px-6 pb-24 pt-[72px]">
      <div className="mx-auto grid max-w-[1180px] gap-12 nav:grid-cols-[1fr_260px]">
        <div className="min-w-0 max-w-[800px]">
          {/* Only the header fades in: Reveal waits for 20% of its element to be
              on screen, which a many-screens-tall policy body never reaches. */}
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: policy.title }]} />
            <h1 className="m-0 mb-3 font-display text-[clamp(36px,4.4vw,60px)] uppercase leading-[0.95]">{policy.title}</h1>
            <p className="m-0 mb-8 font-sans text-sm text-muted">Last updated: {policy.updated}</p>
          </Reveal>

          <LineText text={policy.intro} className={BODY} marker="marker:text-ochre" />

          {key === "cancellation-refund" && (
            <aside aria-label="Refund policy at a glance" className="mt-10 bg-ink p-[24px_26px] text-white">
              <h2 className="m-0 mb-4 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-yellow">
                Refund policy at a glance
              </h2>
              <dl className="m-0 grid gap-3">
                {REFUND_AT_A_GLANCE.map((r) => (
                  <div key={r.label}>
                    <dt className="font-sans text-[15px] font-semibold">{r.label}</dt>
                    <dd className="m-0 font-serif text-[17px] leading-[1.5] text-[#D9D9D9]">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}

          <ol className="m-0 mt-12 grid list-none gap-10 p-0">
            {policy.sections.map((s, i) => (
              <li key={s.n} id={`section-${s.n}`} className="scroll-mt-28">
                <h2 className="m-0 mb-3 font-sans text-[21px] font-semibold leading-[1.3]">
                  <span className="mr-2 text-ochre">{s.n}.</span>
                  {s.title}
                </h2>
                <LineText text={s.body} className={BODY} marker="marker:text-ochre" />
                {i === last && <ContactDetails />}
              </li>
            ))}
          </ol>
        </div>

        <nav aria-label="Policies" className="nav:sticky nav:top-28 nav:self-start">
          <p className="m-0 mb-3 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-muted">Policies</p>
          <ul className="m-0 grid list-none gap-1 p-0">
            {POLICY_LINKS.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  aria-current={l.key === key ? "page" : undefined}
                  className={`block border-l-2 py-1.5 pl-3 font-sans text-[15px] leading-[1.35] ${
                    l.key === key ? "border-yellow font-semibold text-ink" : "border-line-strong text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
