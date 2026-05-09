import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-ivory)]"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-7 lg:pr-6">
          <p className="eyebrow">Holistic Wellness Since 2018</p>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-charcoal)] sm:text-[3.5rem] lg:text-[4rem]"
          >
            Holistic wellness rooted in
            <span className="block italic text-[var(--color-earth)]">
              ancient wisdom and modern care.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            DharmaPathy combines classical Ayurveda, yoga, and mindful nutrition
            into personalized programs designed for long-term wellbeing — not
            quick fixes.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-8">
            <div>
              <dt className="eyebrow">Practitioners</dt>
              <dd className="mt-2 font-serif text-3xl text-[var(--color-charcoal)]">
                12+
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Programs</dt>
              <dd className="mt-2 font-serif text-3xl text-[var(--color-charcoal)]">
                25+
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Lives Touched</dt>
              <dd className="mt-2 font-serif text-3xl text-[var(--color-charcoal)]">
                10k+
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative h-full">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-3 translate-y-3 rounded-sm border border-[var(--color-border)]"
            />
            <div className="relative flex h-full min-h-[420px] flex-col justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-cream)] p-8 sm:p-10">
              <div>
                <p className="eyebrow">From the Practice</p>
                <p className="mt-6 font-serif text-2xl leading-snug text-[var(--color-charcoal)] sm:text-[1.75rem]">
                  &ldquo;Ayurveda is not a treatment we apply. It is a way of
                  paying attention.&rdquo;
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-6">
                <div>
                  <p className="eyebrow">Approach</p>
                  <p className="mt-2 text-sm text-[var(--color-charcoal-soft)]">
                    Personalized, sustainable, and rooted in classical wisdom.
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Outcome</p>
                  <p className="mt-2 text-sm text-[var(--color-charcoal-soft)]">
                    Steady energy, calmer days, and long-term resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
