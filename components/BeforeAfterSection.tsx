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

        <div className="mt-14 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {pairs.map((pair) => (
            <article key={pair.label} className="border border-border bg-ivory">
              {pair.kind === "two-up" ? (
                <div className="mx-auto w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
                  <div className="aspect-2/1 w-full overflow-hidden border-b border-border">
                    <div className="grid h-full grid-cols-2">
                      <div className="relative min-h-0 overflow-hidden border-r border-border">
                        <Image
                          src={pair.before.src}
                          alt={pair.before.alt}
                          width={pair.before.width}
                          height={pair.before.height}
                          sizes="(max-width: 1024px) 45vw, 320px"
                          className="h-full w-full object-cover object-center"
                        />
                        <span className="absolute left-2 top-2 bg-charcoal/85 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-ivory sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[0.65rem]">
                          Before
                        </span>
                      </div>
                      <div className="relative min-h-0 overflow-hidden">
                        <Image
                          src={pair.after.src}
                          alt={pair.after.alt}
                          width={pair.after.width}
                          height={pair.after.height}
                          sizes="(max-width: 1024px) 45vw, 320px"
                          className="h-full w-full object-cover object-center"
                        />
                        <span className="absolute left-2 top-2 bg-earth/90 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-ivory sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[0.65rem]">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-charcoal/3 p-1.5 sm:p-2">
                  <Image
                    src={pair.image.src}
                    alt={pair.image.alt}
                    width={pair.image.width}
                    height={pair.image.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="block h-auto w-full max-w-full object-contain max-h-[min(420px,62vh)] sm:max-h-[min(460px,58vh)] lg:max-h-[min(520px,55vh)]"
                  />
                </div>
              )}
              <div className="border-t border-border px-4 py-4 sm:px-5 sm:py-5">
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
