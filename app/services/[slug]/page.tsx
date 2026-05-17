import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { serviceImagesBySlug, serviceAccentImage, hairTransplantGalleryPairs } from "@/lib/images";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service)
    return buildMetadata({ title: "Service not found", noIndex: true });
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services
    .filter(
      (s) => s.slug !== service.slug && s.category === service.category,
    )
    .slice(0, 3);
  const accent = serviceImagesBySlug[service.slug] ?? serviceAccentImage;
  const stackedOverview =
    service.slug === "hair-transplant" || service.category === "skin";

  const isHairFlagship = service.slug === "hair-transplant";
  const hub =
    service.category === "hair"
      ? { name: "Hair transplant", href: "/services/hair-transplant" }
      : { name: "Skin treatment", href: "/services/skin-treatment" };

  const breadcrumbItems = isHairFlagship
    ? [
        { name: "Home", href: "/" },
        { name: "Hair transplant", href: "/services/hair-transplant" },
      ]
    : [
        { name: "Home", href: "/" },
        hub,
        { name: service.title, href: `/services/${service.slug}` },
      ];

  const secondary = isHairFlagship
    ? { href: "/services/skin-treatment", label: "Skin treatment" }
    : service.category === "hair"
      ? { href: "/services/hair-transplant", label: "All hair treatments" }
      : { href: "/services/skin-treatment", label: "All skin treatments" };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              title: service.title,
              description: service.metaDescription,
              slug: service.slug,
            }),
          ),
        }}
      />

      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {service.slug === "hair-transplant" ? (
          <>
            <div className="relative mt-8 w-full min-h-[min(88vh,920px)] sm:min-h-[min(90vh,960px)]">
              <Image
                src={accent.src}
                alt={accent.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[50%_30%] brightness-[0.88] contrast-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0 z-[1] bg-charcoal/20"
              />
              <div
                aria-hidden
                className="absolute inset-0 z-[2] bg-gradient-to-b from-ivory/95 via-ivory/55 to-ivory/90 md:bg-gradient-to-r md:from-ivory md:from-0% md:via-ivory/85 md:via-45% md:to-transparent"
              />
              <div className="relative z-10 mx-auto flex min-h-[min(88vh,920px)] w-full max-w-7xl flex-col justify-end px-6 pb-14 pt-24 sm:px-8 sm:pb-16 sm:pt-28 md:justify-center md:pb-20 md:pt-32 lg:px-12">
                <div className="max-w-xl md:max-w-lg">
                  <p className="eyebrow text-charcoal-soft">Hair restoration</p>
                  <span aria-hidden className="gold-rule" />
                  <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.25rem] lg:text-[3.5rem]">
                    {service.title}
                  </h1>
                  <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                    {service.shortDescription}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-7 text-charcoal sm:max-w-md">
                    In clinic: your dermatologist performs the treatment
                    hands-on — the same doctor who planned your hairline and
                    graft map.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary">
                      Book consultation
                    </Link>
                    <Link href={secondary.href} className="btn-secondary">
                      {secondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
            <div className="lg:col-span-7">
              <p className="eyebrow">
                {service.category === "hair" ? "Hair Restoration" : "Skin Care"}
              </p>
              <span aria-hidden className="gold-rule" />
              <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.25rem]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                {service.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book Consultation
                </Link>
                <Link href={secondary.href} className="btn-secondary">
                  {secondary.label}
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-6">
                <div className="relative aspect-3/2 overflow-hidden border border-border">
                  <Image
                    src={accent.src}
                    alt={accent.alt}
                    width={accent.width}
                    height={accent.height}
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                {service.category === "hair" ? (
                  <div className="border border-border bg-cream p-8 sm:p-10">
                    <p className="eyebrow">Benefits</p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-charcoal-soft">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span aria-hidden className="mt-2 h-px w-3 bg-earth" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        )}
      </section>

      <section className="border-b border-border bg-cream">
        {stackedOverview ? (
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
                {service.benefits.map((b, i) => (
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
                {service.longDescription}
              </p>
            </div>
          </div>
        ) : (
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
            <div className="lg:col-span-5">
              <p className="eyebrow">Overview</p>
              <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
                How we approach this work.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-8 text-muted sm:text-lg">
                {service.longDescription}
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p className="eyebrow">The Process</p>
          <h2 className="mt-5 max-w-2xl font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
            A clear, considered path forward.
          </h2>
          <ol className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
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

      {service.slug === "hair-transplant" ? (
        <BeforeAfterSection
          eyebrow="Clinical gallery"
          title="Before & after"
          description="Separate files per case: B = baseline (left), A = follow-up (right). Full set of outcomes on this page."
          pairs={hairTransplantGalleryPairs}
          twoUpDensity="full"
          ctaHref="/contact"
          ctaLabel="Book consultation"
          background="cream"
        />
      ) : null}

      <FAQSection
        eyebrow="Common Questions"
        title={`About ${service.title}.`}
        items={service.faq}
      />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <p className="eyebrow">More in this specialty</p>
          <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
            {service.category === "hair"
              ? "Other hair services."
              : "Other skin services."}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
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
