"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/lib/images";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const stepSize = (el: HTMLDivElement) => {
    const card = el.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + 32 : Math.round(el.clientWidth * 0.85);
  };

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * stepSize(el), behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * stepSize(el), behavior: "smooth" });
    setActive(i);
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / stepSize(el));
    setActive(Math.max(0, Math.min(testimonials.length - 1, i)));
  };

  return (
    <section
      aria-labelledby="testimonials-title"
      className="border-b border-border bg-cream"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
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
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center border border-border text-lg text-charcoal transition-colors hover:border-charcoal hover:bg-ivory"
            >
              <span aria-hidden>&lsaquo;</span>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center border border-border text-lg text-charcoal transition-colors hover:border-charcoal hover:bg-ivory"
            >
              <span aria-hidden>&rsaquo;</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          tabIndex={0}
          aria-label="Patient testimonials — scroll or use the arrows"
          className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto px-1 pb-12 pt-14 lg:mt-20"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              data-card
              className="relative flex w-[86%] shrink-0 snap-start flex-col rounded-[2.25rem] border border-border bg-ivory px-8 pb-12 pt-16 shadow-sm sm:w-96 sm:px-9 lg:w-104"
            >
              {/* Monogram medallion — pops out of the top edge */}
              <div className="absolute -top-11 left-1/2 -translate-x-1/2">
                <div
                  aria-hidden
                  className="flex h-22 w-22 items-center justify-center rounded-full bg-sand font-serif text-2xl tracking-[0.12em] text-charcoal shadow-lg shadow-charcoal/15 ring-[6px] ring-cream"
                >
                  {initials(t.name)}
                </div>
              </div>

              <div
                aria-label={`${t.rating} out of 5 stars`}
                className="flex justify-center gap-2 text-lg text-gold"
              >
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} aria-hidden>
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="mt-7 flex-1 text-center font-serif text-lg leading-8 text-charcoal-soft sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-9 flex flex-col items-center">
                <span className="signature text-[2.5rem] text-earth">
                  {t.name}
                </span>
                <span className="mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-muted">
                  {t.treatment}
                </span>
                {t.date && (
                  <span className="mt-1.5 text-[0.7rem] tracking-wide text-muted/80">
                    {t.date}
                  </span>
                )}
              </figcaption>

              {/* Speech-bubble tail */}
              <span
                aria-hidden
                className="absolute -bottom-2 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 rounded-sm border-b border-r border-border bg-ivory"
              />
            </figure>
          ))}
        </div>

        <div
          role="group"
          aria-label="Testimonial pagination"
          className="mt-10 flex items-center justify-center gap-2.5"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1} of ${testimonials.length}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-earth"
                  : "w-2 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
