import Image from "next/image";
import Link from "next/link";
import type { BeforeAfterPair } from "@/lib/images";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  pairs: BeforeAfterPair[];
  ctaHref?: string;
  ctaLabel?: string;
  background?: "ivory" | "cream";
};

export default function BeforeAfterSection({
  eyebrow,
  title,
  description,
  pairs,
  ctaHref,
  ctaLabel,
  background = "ivory",
}: Props) {
  const bgClass = background === "cream" ? "bg-cream" : "bg-ivory";
  return (
    <section
      aria-label={`${eyebrow} — before and after`}
      className={`border-b border-border ${bgClass}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <span aria-hidden className="gold-rule" />
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-base leading-8 text-muted">
                {description}
              </p>
            )}
          </div>
          {ctaHref && ctaLabel && (
            <Link
              href={ctaHref}
              className="text-xs uppercase tracking-[0.18em] text-charcoal hover:text-earth"
            >
              {ctaLabel} →
            </Link>
          )}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {pairs.map((pair) => (
            <article key={pair.label} className="border border-border bg-ivory">
              {pair.kind === "two-up" ? (
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square overflow-hidden border-r border-border">
                    <Image
                      src={pair.before.src}
                      alt={pair.before.alt}
                      width={pair.before.width}
                      height={pair.before.height}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 bg-charcoal/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-ivory">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={pair.after.src}
                      alt={pair.after.alt}
                      width={pair.after.width}
                      height={pair.after.height}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 bg-earth/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-ivory">
                      After
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center bg-charcoal/3 px-2 py-3 sm:px-4 sm:py-4">
                  <Image
                    src={pair.image.src}
                    alt={pair.image.alt}
                    width={pair.image.width}
                    height={pair.image.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="max-h-[min(520px,72vh)] w-full object-contain"
                  />
                </div>
              )}
              <div className="border-t border-border p-6 sm:p-7">
                <h3 className="font-serif text-lg text-charcoal sm:text-xl">
                  {pair.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {pair.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs italic text-muted">
          Patient outcomes vary. Images shown are illustrative of the kind of
          results possible with our protocols. Real patient photographs are
          shared with explicit consent during in-clinic consultations.
        </p>
      </div>
    </section>
  );
}
