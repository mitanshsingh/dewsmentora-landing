import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { BLOG_POSTS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Placeholder article set — titles and categories are ready to be replaced with published pieces.",
  alternates: { canonical: "/resources/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="px-6 pb-5 pt-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Blog" }]} />
            <h1 className="m-0 mb-5 font-display text-[clamp(40px,5.6vw,80px)] uppercase leading-[0.92]">Blog</h1>
            <p className="m-0 max-w-[60ch] font-serif text-[18px] leading-[1.55]">
              Placeholder article set — titles and categories are ready to be replaced with published pieces.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-24 pt-11">
        <StaggerGrid className="mx-auto grid max-w-[1280px] gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {BLOG_POSTS.map((p) => (
            <StaggerItem key={p.t}>
              <article className="grid border border-line-card">
                <div
                  className="grid h-[150px] place-items-center"
                  style={{ background: "repeating-linear-gradient(135deg, #EFEFEF 0 12px, #E4E4E4 12px 24px)" }}
                >
                  <span className="font-mono text-xs tracking-[0.1em] text-[#7A7A7A]">ARTICLE IMAGE</span>
                </div>
                <div className="grid gap-3 p-[26px_24px]">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ochre">{p.cat}</span>
                  <h2 className="m-0 font-sans text-xl font-semibold leading-[1.3]">{p.t}</h2>
                  <span className="font-sans text-sm text-muted">{p.read}</span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>
    </>
  );
}
