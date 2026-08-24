import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="px-6 pb-[120px] pt-24">
      <div className="mx-auto max-w-[800px]">
        <p className="m-0 mb-[18px] font-display text-sm uppercase tracking-[0.16em] text-ochre">404</p>
        <h1 className="m-0 mb-5 font-display text-[clamp(38px,5vw,72px)] uppercase leading-[0.92]">Page not found</h1>
        <p className="m-0 mb-8 max-w-[52ch] font-serif text-[19px] leading-[1.55]">
          The page you were looking for doesn&apos;t exist or has moved. Start from the homepage, or pick the Map
          that matches your decision.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Button href="/" variant="primary">
            Home
          </Button>
          <Button href="/products" variant="outline-dark">
            Explore Products
          </Button>
          <Button href="/contact" variant="outline-dark" className="border-[#C9C9C9]" arrow={false}>
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
