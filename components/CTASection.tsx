import Link from "next/link";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTASection({
  eyebrow = "Begin Your Journey",
  title = "A calmer, more grounded life is closer than you think.",
  description = "Book a consultation and let our dermatologists design a treatment plan that suits your skin, hair, and goals.",
  primaryHref = "/contact",
  primaryLabel = "Book a Consultation",
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <section
      aria-labelledby="cta-title"
      className="border-y border-border bg-cream"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:items-end lg:px-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="cta-title"
            className="mt-5 max-w-2xl font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.75rem]"
          >
            {title}
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-base leading-8 text-muted">{description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
