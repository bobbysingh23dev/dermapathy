import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { skinServices } from "@/lib/services";
import { skinTreatmentHeroImage, skinBeforeAfter } from "@/lib/images";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";

const metaTitle =
  "Skin Treatment — Acne, Pigmentation, Rejuvenation & Lasers | Dermapathy";
const metaDescription =
  "Medically supervised skin care at Dermapathy — acne and pigmentation, skin rejuvenation, and advanced lasers, calibrated for South Asian skin and led by board-certified dermatologists.";

export const metadata: Metadata = buildMetadata({
  title: metaTitle,
  description: metaDescription,
  path: "/services/skin-treatment",
});

const shortDescription =
  "Medically supervised skin care — acne, pigmentation, rejuvenation, and lasers — built around your skin type and calibrated for South Asian skin.";

const longDescription =
  "Our skin programme brings acne and pigmentation care, medical-grade rejuvenation, and advanced lasers under one roof. Every plan starts with a digital skin analysis and is built around your skin type, concerns, and downtime tolerance — then supervised by a board-certified dermatologist from the first peel to the final follow-up.";

const benefits = [
  "Dermatologist-supervised at every session — never delegated",
  "Calibrated for South Asian skin to minimise pigmentation risk",
  "Clears active acne and fades post-acne marks in parallel",
  "Built for long-term skin health, not short-term suppression",
];

const process = [
  {
    step: "Skin Analysis",
    description:
      "Digital skin analysis covering pigmentation, hydration, sebum, and elasticity.",
  },
  {
    step: "Plan",
    description:
      "A personalised in-clinic and at-home protocol with clear timelines.",
  },
  {
    step: "Treatment",
    description:
      "A series of in-clinic sessions — peel, microneedling, laser, or LED — every 3–4 weeks.",
  },
  {
    step: "Maintenance",
    description: "Quarterly review to keep results compounding over time.",
  },
];

const faq = [
  {
    question: "Are your lasers safe for my skin tone?",
    answer:
      "Yes — we use technology calibrated for South Asian skin and conservative settings to minimise the risk of post-inflammatory pigmentation.",
  },
  {
    question: "When will I see a difference?",
    answer:
      "Brightness and texture improve within the first session. Fine lines, firmness, and pigmentation need 6–12 weeks of consistent treatment.",
  },
  {
    question: "Is there downtime?",
    answer:
      "Most treatments have 24–48 hours of mild redness. We schedule around your social and travel calendar.",
  },
  {
    question: "Will my acne come back?",
    answer:
      "We treat for clearance and then gradually step down to a maintenance routine. The risk of recurrence is much lower with this approach.",
  },
];

export default function SkinTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              title: "Skin Treatment",
              description: metaDescription,
              slug: "skin-treatment",
            }),
          ),
        }}
      />

      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Treatments", href: "/services" },
              { name: "Skin treatment", href: "/services/skin-treatment" },
            ]}
          />
        </div>

        <div className="relative mt-8 w-full min-h-[min(88vh,920px)] sm:min-h-[min(90vh,960px)]">
          <Image
            src={skinTreatmentHeroImage.src}
            alt={skinTreatmentHeroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_30%] brightness-[0.88] contrast-[1.03]"
          />
          <div aria-hidden className="absolute inset-0 z-[1] bg-charcoal/20" />
          <div
            aria-hidden
            className="absolute inset-0 z-[2] bg-gradient-to-b from-ivory/95 via-ivory/55 to-ivory/90 md:bg-gradient-to-r md:from-ivory md:from-0% md:via-ivory/85 md:via-45% md:to-transparent"
          />
          <div className="relative z-10 mx-auto flex min-h-[min(88vh,920px)] w-full max-w-7xl flex-col justify-end px-6 pb-14 pt-24 sm:px-8 sm:pb-16 sm:pt-28 md:justify-center md:pb-20 md:pt-32 lg:px-12">
            <div className="max-w-xl md:max-w-lg">
              <p className="eyebrow text-charcoal-soft">Skin care</p>
              <span aria-hidden className="gold-rule" />
              <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.25rem] lg:text-[3.5rem]">
                Skin Treatment
              </h1>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                {shortDescription}
              </p>
              <p className="mt-4 text-sm font-medium leading-7 text-charcoal sm:max-w-md">
                In clinic: every protocol is designed and supervised by a
                board-certified dermatologist — the same doctor who analyses
                your skin and signs off your plan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book consultation
                </Link>
                <Link href="/services" className="btn-secondary">
                  All skin treatments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <header className="max-w-2xl">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
              Why patients choose this programme.
            </h2>
          </header>

          <div className="mt-14 sm:mt-16">
            <p className="eyebrow">Benefits</p>
            <span aria-hidden className="gold-rule" />
            <ul className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:mt-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {benefits.map((b, i) => (
                <li
                  key={b}
                  className="min-w-0 lg:border-l lg:border-border lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
                >
                  <p className="font-serif text-3xl leading-none tracking-tight text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-charcoal-soft sm:text-[0.9375rem] sm:leading-7">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-16 max-w-3xl border-t border-border pt-12 sm:mt-20 sm:pt-14">
            <p className="text-base leading-8 text-muted sm:text-lg">
              {longDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p className="eyebrow">The Process</p>
          <h2 className="mt-5 max-w-2xl font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
            A clear, considered path forward.
          </h2>
          <ol className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step} className="bg-ivory p-8 sm:p-10">
                <p className="font-serif text-3xl text-earth">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-serif text-xl text-charcoal sm:text-2xl">
                  {p.step}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BeforeAfterSection
        eyebrow="Clinical gallery"
        title="Before & after"
        description="Separate files per case: B = baseline (left), A = follow-up (right). Outcomes across our skin protocols."
        pairs={skinBeforeAfter}
        twoUpDensity="full"
        ctaHref="/contact"
        ctaLabel="Book consultation"
        background="cream"
      />

      <FAQSection
        eyebrow="Common Questions"
        title="About skin treatment."
        items={faq}
      />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <p className="eyebrow">More in this specialty</p>
          <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
            Explore each skin service.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skinServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block border border-border bg-ivory p-8 transition-colors hover:border-charcoal"
              >
                <p className="eyebrow">Service</p>
                <h3 className="mt-4 font-serif text-xl text-charcoal group-hover:text-earth sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {s.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
