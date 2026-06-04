import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { aboutStoryImage, processAccentImage } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "About Dermapathy",
  description:
    "Dermapathy is a specialist dermatology and aesthetic clinic — board-certified dermatologists delivering advanced hair transplant procedures and medical-grade skin care.",
  path: "/about",
});

const values = [
  {
    title: "Dermatologist-led, always",
    description:
      "Every plan and procedure at Dermapathy is designed and supervised by a board-certified dermatologist — never delegated.",
  },
  {
    title: "Honest about outcomes",
    description:
      "We commit to results we can deliver, and we are clear about what we cannot. No oversold promises.",
  },
  {
    title: "Built to age well",
    description:
      "Hairlines, skin protocols, and aesthetic decisions are designed to look right at fifty, not just at thirty.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ]}
          />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">About {siteConfig.name}</p>
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.5rem]">
              A specialist clinic for
              <span className="block flourish">
                hair and skin, done right.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-muted sm:text-lg">
              {siteConfig.name} was founded by a small team of dermatologists
              committed to two things: doing fewer procedures, but doing them
              exceptionally — and being honest with patients about what care
              can and cannot deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold-soft/60"
              />
              <div className="relative aspect-4/5 overflow-hidden border border-border">
                <Image
                  src={aboutStoryImage.src}
                  alt={aboutStoryImage.alt}
                  width={aboutStoryImage.width}
                  height={aboutStoryImage.height}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <SectionHeading
              eyebrow="Our Story"
              title="A practice grown around two specialties."
              align="left"
            />
            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              <p>
                {siteConfig.name} began as a hair restoration practice. Our
                lead surgeon spent years refining the FUE method and Direct Hair Implantation to a
                level where hairlines could look not just dense, but
                age-appropriate and undetectable.
              </p>
              <p>
                Over time, the practice deepened into skin — adding consultant
                dermatologists with fellowships in lasers, pigmentation, and
                medical aesthetics. Today the clinic operates two specialties
                under one roof: hair restoration and medical-grade skin care.
              </p>
              <p>
                What hasn&apos;t changed is the way we work. Long
                consultations. Honest expectations. And every plan signed off
                by a board-certified dermatologist before any device or scalpel
                is used.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
          <div className="order-2 lg:order-1 lg:col-span-7 lg:pt-4">
            <p className="eyebrow">Our Approach</p>
            <span aria-hidden className="gold-rule" />
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
              Considered care, advanced technique.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
              We invest deeply in technique and technology — but the most
              important thing in our consulting room is time. Most patients
              spend longer with us in their first visit than they have with any
              prior practitioner. The plan that follows is the better for it.
            </p>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden border border-border">
              <Image
                src={processAccentImage.src}
                alt={processAccentImage.alt}
                width={processAccentImage.width}
                height={processAccentImage.height}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Our Values"
            title="What guides every decision."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-ivory p-8 sm:p-10">
                <h3 className="font-serif text-xl text-charcoal sm:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Curious if Dermapathy is right for you?"
        description="Start with a consultation. We'll examine, listen, and share an honest perspective — with no pressure to proceed."
      />
    </>
  );
}
