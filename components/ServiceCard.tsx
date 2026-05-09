import Link from "next/link";
import type { Service } from "@/lib/services";

type Props = {
  service: Pick<Service, "title" | "slug" | "shortDescription">;
  variant?: "default" | "feature";
};

export default function ServiceCard({ service, variant = "default" }: Props) {
  return (
    <article
      className={`group flex h-full flex-col justify-between border border-border bg-ivory p-8 transition-colors hover:border-charcoal sm:p-10 ${
        variant === "feature" ? "bg-cream" : ""
      }`}
    >
      <div>
        <p className="eyebrow">Service</p>
        <h3 className="mt-4 font-serif text-2xl leading-snug text-charcoal sm:text-[1.6rem]">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          {service.shortDescription}
        </p>
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-earth"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
