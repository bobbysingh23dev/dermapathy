import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { hairServices, skinServices } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Treatments — Hair Restoration & Medical-Grade Skin Care",
  description:
    "Explore Dermapathy's full range of treatments — hair transplant (FUE & DHT), PRP hair therapy, scalp care, skin rejuvenation, acne & pigmentation, and lasers.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Treatments", href: "/services" },
            ]}
          />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Treatments</p>
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.5rem]">
              Two specialties,
              <span className="block flourish">one careful clinic.</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-muted sm:text-lg">
              Every treatment at Dermapathy is dermatologist-led — from a
              first scalp examination through to the final follow-up after a
              laser session. Choose a starting point below, or speak with us
              if you&apos;re unsure.
            </p>
          </div>
        </div>
      </section>

      {/* Hair */}
      <section
        aria-labelledby="hair-services-title"
        className="border-b border-border bg-cream"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Specialty · Hair Restoration"
            title="Permanent, natural hair restoration."
            description="Advanced FUE and DHT hair transplant procedures, PRP therapy, and medical scalp care."
            align="left"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hairServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Skin */}
      <section
        aria-labelledby="skin-services-title"
        className="border-b border-border bg-ivory"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Specialty · Skin Care"
            title="Medical-grade skin, beautifully cared for."
            description="From clearing acne and pigmentation to long-term skin rejuvenation and laser treatments — every protocol is dermatologist-supervised."
            align="left"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skinServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which treatment fits?"
        description="Book a consultation. We'll examine, listen, and recommend a starting point that suits your goals — with no pressure either way."
      />
    </>
  );
}
