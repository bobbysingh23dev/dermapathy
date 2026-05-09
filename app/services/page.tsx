import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services & Treatments",
  description:
    "Explore DharmaPathy's holistic services — Ayurvedic consultation, yoga and meditation guidance, natural wellness programs, diet planning, stress care, and preventive health.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ]}
          />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Services & Treatments</p>
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-charcoal)] sm:text-[3.5rem]">
              Care designed around
              <span className="block italic text-[var(--color-earth)]">
                your body, your life.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Each of our services begins with a careful assessment and ends
              with a plan you can actually live with. Choose a starting point
              below, or speak with us if you&apos;re unsure where to begin.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="All Services"
            title="A complete toolkit for holistic wellbeing."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service fits?"
        description="Start with a short conversation. We'll listen and help you choose a starting point that suits your goals and constraints."
      />
    </>
  );
}
