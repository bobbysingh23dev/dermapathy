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
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Treatments", href: "/services" },
              {
                name:
                  service.slug === "hair-transplant"
                    ? "Hair transplant"
                    : service.title,
                href: `/services/${service.slug}`,
              },
            ]}
          />
        </div>
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
              <Link
                href="/services"
                className="btn-secondary"
              >
                {service.category === "hair"
                  ? "All hair treatments"
                  : "All skin treatments"}
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
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
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
