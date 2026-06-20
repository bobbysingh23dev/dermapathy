import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyDermapathy from "@/components/WhyDermapathy";
import { hairServices, skinServices } from "@/lib/services";
import { blogs } from "@/lib/blogs";
import {
  aboutStoryImage,
  hairBeforeAfter,
  skinBeforeAfter,
} from "@/lib/images";

const journey = [
  {
    step: "01",
    title: "Consultation",
    description:
      "An unhurried conversation, scalp or skin analysis, and a clear assessment.",
  },
  {
    step: "02",
    title: "Diagnosis",
    description:
      "Trichoscopy or dermoscopy, lab work where needed, and a confirmed diagnosis.",
  },
  {
    step: "03",
    title: "Personalised Plan",
    description:
      "A protocol built around your goals, skin type, and downtime tolerance.",
  },
  {
    step: "04",
    title: "Aftercare",
    description:
      "Structured follow-up to track results and adjust as your skin or hair settles.",
  },
];

const homeFaqs = [
  {
    question: "Who will treat me at Dermapathy?",
    answer:
      "Your care is led personally by Dr. Isha Singh, a qualified MD Dermatology and the founder of Dermapathy. She plans and performs every consultation and procedure herself — your treatment is never delegated.",
  },
  {
    question: "Will my hair transplant look natural?",
    answer:
      "Yes. We design hairlines around your face, age, and long-term plan — and place each graft individually to follow natural growth patterns.",
  },
  {
    question: "Are your laser treatments safe for South Asian skin?",
    answer:
      "Yes. We use platforms calibrated for darker skin tones with conservative settings to minimise the risk of post-inflammatory pigmentation.",
  },
  {
    question: "How long does a typical treatment plan take?",
    answer:
      "Skin protocols are usually 8–16 weeks; hair restoration shows full results at 12 months. Specifics depend on the concern.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ───────── HAIR HALF ───────── */}
      <section
        aria-labelledby="hair-heading"
        className="border-b border-border bg-ivory"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Specialty · Hair Restoration</p>
              <span aria-hidden className="gold-rule" />
              <h2
                id="hair-heading"
                className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.75rem]"
              >
                Hair restoration that ages well.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                Advanced FUE and Direct Hair Implantation procedures, PRP therapy,
                and medical-grade scalp care — designed and performed by
                experienced surgeons.
              </p>
            </div>
            <Link
              href="/services/hair-transplant"
              className="text-xs uppercase tracking-[0.18em] text-charcoal hover:text-earth"
            >
              Hair transplant →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hairServices.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                variant={i === 0 ? "feature" : "default"}
              />
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSection
        eyebrow="Hair · Patient Results"
        title="Hair restoration, real outcomes."
        description="Separate baseline (B) and follow-up (A) photographs per case — same layout as skin outcomes below."
        pairs={hairBeforeAfter}
        ctaHref="/services/hair-transplant"
        ctaLabel="Hair transplant page"
        background="cream"
      />

      {/* ───────── SKIN HALF ───────── */}
      <section
        aria-labelledby="skin-heading"
        className="border-b border-border bg-ivory"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Specialty · Skin Care</p>
              <span aria-hidden className="gold-rule" />
              <h2
                id="skin-heading"
                className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.75rem]"
              >
                Medical-grade skin, beautifully cared for.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                From acne and pigmentation to anti-aging and lasers — every skin
                protocol is medically supervised and built around your skin
                type.
              </p>
            </div>
            <Link
              href="/services/skin-treatment"
              className="text-xs uppercase tracking-[0.18em] text-charcoal hover:text-earth"
            >
              Skin treatment →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skinServices.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                variant={i === 0 ? "feature" : "default"}
              />
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSection
        eyebrow="Skin · Patient Results"
        title="Skin care that holds."
        description="Outcomes from our acne, pigmentation, and rejuvenation protocols — typically over 8–16 weeks."
        pairs={skinBeforeAfter}
        ctaHref="/services/skin-treatment"
        ctaLabel="Explore skin treatment page"
        background="cream"
      />

      {/* Process */}
      <section
        aria-labelledby="process-title"
        className="border-b border-border bg-ivory"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Patient Journey"
            title="A clear, considered path."
            description="No rushed decisions. Every patient moves through the same careful four-step process."
          />
          <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j) => (
              <li key={j.step} className="bg-ivory p-8 sm:p-10">
                <p className="font-serif text-3xl text-earth">{j.step}</p>
                <h3 className="mt-6 font-serif text-xl text-charcoal sm:text-2xl">
                  {j.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {j.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About preview */}
      <section
        aria-labelledby="about-preview-title"
        className="border-b border-border bg-cream"
      >
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
          <div className="lg:col-span-7 lg:pt-6">
            <p className="eyebrow">About Dermapathy</p>
            <span aria-hidden className="gold-rule" />
            <h2
              id="about-preview-title"
              className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]"
            >
              A specialist dermatology practice — built quietly and seriously.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted sm:text-lg">
              Dermapathy was founded by a small team of dermatologists with one
              shared belief: that hair and skin care should be honest,
              evidence-based, and patient-led. We invest deeply in technique and
              technology, and we take time with every consultation.
            </p>
            <p className="mt-5 text-base leading-8 text-muted">
              We treat thousands of patients each year, but the way we work has
              not changed. Every plan is personal. Every decision is
              dermatologist-led. Every result is designed to age well.
            </p>
            <Link href="/about" className="btn-secondary mt-8">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <WhyDermapathy />

      <TestimonialsSection />

      {/* Blog preview */}
      <section
        aria-labelledby="blog-title"
        className="border-b border-border bg-ivory"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              eyebrow="Journal"
              title="Insights from our practice."
              description="Honest, dermatologist-written articles on hair restoration, skin care, and the evidence behind what works."
              align="left"
            />
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.18em] text-charcoal hover:text-earth"
            >
              All articles →
            </Link>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={homeFaqs} />
      <CTASection />
    </>
  );
}
