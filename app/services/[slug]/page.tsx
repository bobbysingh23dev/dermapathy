import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/lib/services";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllServiceSlugs();
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return buildMetadata({ title: "Service not found", noIndex: true });
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
            })
          ),
        }}
      />

      <section className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
          />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Service</p>
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-charcoal)] sm:text-[3.25rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {service.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book this Service
              </Link>
              <Link href="/services" className="btn-secondary">
                All Services
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-[var(--color-border)] bg-[var(--color-cream)] p-8 sm:p-10">
              <p className="eyebrow">Benefits</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-charcoal-soft)]">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-3 bg-[var(--color-earth)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-[var(--color-charcoal)] sm:text-[2.5rem]">
              How we approach this work.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p className="eyebrow">The Process</p>
          <h2 className="mt-5 max-w-2xl font-serif text-[2rem] leading-[1.15] tracking-tight text-[var(--color-charcoal)] sm:text-[2.5rem]">
            A clear, considered path forward.
          </h2>
          <ol className="mt-14 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <li key={p.step} className="bg-[var(--color-ivory)] p-8 sm:p-10">
                <p className="font-serif text-3xl text-[var(--color-earth)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-serif text-xl text-[var(--color-charcoal)] sm:text-2xl">
                  {p.step}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection
        eyebrow="Common Questions"
        title={`About ${service.title}.`}
        items={service.faq}
      />

      <section className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <p className="eyebrow">More Services</p>
          <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-[var(--color-charcoal)] sm:text-[2.5rem]">
            Continue exploring.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block border border-[var(--color-border)] bg-[var(--color-ivory)] p-8 transition-colors hover:border-[var(--color-charcoal)]"
              >
                <p className="eyebrow">Service</p>
                <h3 className="mt-4 font-serif text-xl text-[var(--color-charcoal)] group-hover:text-[var(--color-earth)] sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
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
