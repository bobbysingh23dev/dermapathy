import SectionHeading from "./SectionHeading";

const pillars = [
  {
    title: "Personalized Guidance",
    description:
      "Every plan begins with deep listening — your constitution, history, and goals shape every recommendation.",
  },
  {
    title: "Natural Approach",
    description:
      "We work with food, breath, herbs, and routine — gentle, time-tested practices that complement modern care.",
  },
  {
    title: "Experienced Practitioners",
    description:
      "Our team brings decades of combined practice in classical Ayurveda, yoga, and integrative wellness.",
  },
  {
    title: "Long-Term Wellness",
    description:
      "We optimize for sustainable change — habits and rhythms that hold long after the first program ends.",
  },
];

export default function TrustSection() {
  return (
    <section
      aria-labelledby="trust-title"
      className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeading
          eyebrow="Why DharmaPathy"
          title="Care that respects who you are."
          description="Wellness is rarely about doing more — it is about doing the right things, at the right time, for your body and life."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[var(--color-ivory)] p-8 sm:p-10"
            >
              <p className="eyebrow">Pillar</p>
              <h3 className="mt-4 font-serif text-xl text-[var(--color-charcoal)] sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
