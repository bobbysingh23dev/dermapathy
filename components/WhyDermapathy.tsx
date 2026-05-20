import { siteConfig } from "@/lib/site";

const years = new Date().getFullYear() - Number(siteConfig.founded);

const points = [
  {
    stat: `${years}+ yrs`,
    title: "A focused specialist practice",
    body: `Hair restoration and medical-grade skin care since ${siteConfig.founded}.`,
  },
  {
    stat: "Doctor-led",
    title: "Never delegated",
    body: "Every plan is designed and supervised by a consultant dermatologist.",
  },
  {
    stat: "Sterile",
    title: "Clean & hygienic",
    body: "Single-use, sterilised instruments and strict in-clinic protocols.",
  },
  {
    stat: "Tailored",
    title: "Built for your skin",
    body: "Lasers and protocols calibrated for South Asian skin tones.",
  },
];

export default function WhyDermapathy() {
  const { reviews, consultationFee } = siteConfig;
  const hasRating = Boolean(reviews.rating && reviews.count);

  return (
    <section
      aria-labelledby="why-title"
      className="border-b border-border bg-ivory"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Dermapathy</p>
          <span aria-hidden className="gold-rule" />
          <h2
            id="why-title"
            className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]"
          >
            Quietly serious about your care.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="bg-ivory p-8 sm:p-10">
              <p className="font-serif text-3xl text-earth">{p.stat}</p>
              <h3 className="mt-6 font-serif text-xl text-charcoal sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <a
            href={reviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.18em] text-charcoal hover:text-earth"
          >
            {hasRating
              ? `${reviews.rating} ★ · ${reviews.count} reviews on ${reviews.source} →`
              : `Read patient reviews on ${reviews.source} →`}
          </a>
          {consultationFee ? (
            <p className="text-sm text-muted">{consultationFee}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
