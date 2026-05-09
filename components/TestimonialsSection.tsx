import Image from "next/image";
import { testimonials } from "@/lib/images";

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="border-b border-border bg-cream"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">From Our Patients</p>
          <span aria-hidden className="gold-rule" />
          <h2
            id="testimonials-title"
            className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]"
          >
            Real stories, quietly told.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col border border-border bg-ivory p-8"
            >
              <div
                aria-label={`${t.rating} out of 5 stars`}
                className="flex gap-1 text-gold"
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-lg leading-8 text-charcoal-soft sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                {t.image && (
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                    <Image
                      src={t.image.src}
                      alt={t.image.alt}
                      width={t.image.width}
                      height={t.image.height}
                      sizes="48px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium text-charcoal">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-earth">
                    {t.treatment}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
