import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About DharmaPathy",
  description:
    "DharmaPathy is a holistic wellness practice rooted in classical Ayurveda, yoga, and integrative care — built on listening, lineage, and patience.",
  path: "/about",
});

const values = [
  {
    title: "Personal, never prescriptive",
    description:
      "Every plan begins with deep listening. We design around the person, not around a protocol.",
  },
  {
    title: "Rooted in lineage",
    description:
      "Our practitioners trained directly under teachers in classical Ayurveda and yoga lineages.",
  },
  {
    title: "Honest and patient",
    description:
      "We are honest about what wellness can and cannot do — and we move at the pace your body can hold.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]">
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
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-charcoal)] sm:text-[3.5rem]">
              A wellness practice built on
              <span className="block italic text-[var(--color-earth)]">
                listening, lineage, and patience.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {siteConfig.name} was founded with a quiet conviction — that real
              wellness is personal, gradual, and rooted in attention. We help
              people build daily practices that hold across seasons, jobs,
              relationships, and stages of life.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Story"
              title="A practice grown slowly, with care."
              align="left"
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-base leading-8 text-[var(--color-muted)]">
            <p>
              {siteConfig.name} began with a small group of practitioners who
              shared a common frustration with how wellness was being sold —
              loud, quick, and often disconnected from the body in front of
              them. We wanted something quieter.
            </p>
            <p>
              Today, our practice spans Ayurvedic consultation, yoga and
              meditation guidance, nutrition planning, and structured wellness
              programs. We work with people in many different seasons of life —
              from early-career professionals managing stress to families
              navigating long-term wellbeing together.
            </p>
            <p>
              What hasn&apos;t changed is the way we work. We listen first. We
              recommend less, more carefully. We meet people where they are.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Our Values"
            title="What we hold onto, even when it's slower."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-[var(--color-ivory)] p-8 sm:p-10">
                <h3 className="font-serif text-xl text-[var(--color-charcoal)] sm:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Curious if our approach is right for you?"
        description="Start with a short consultation. We'll listen, share an honest perspective, and help you decide on the next step — with no pressure either way."
      />
    </>
  );
}
