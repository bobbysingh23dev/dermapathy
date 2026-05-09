import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { blogs } from "@/lib/blogs";

const journey = [
  {
    step: "01",
    title: "Consultation",
    description:
      "An unhurried conversation about your goals, history, and the texture of your daily life.",
  },
  {
    step: "02",
    title: "Diagnosis",
    description:
      "A thoughtful Ayurvedic assessment of your constitution, current state, and root imbalances.",
  },
  {
    step: "03",
    title: "Personalized Plan",
    description:
      "A practical plan covering food, routine, herbal support, breath, and movement.",
  },
  {
    step: "04",
    title: "Follow-up Care",
    description:
      "Ongoing reviews to refine the plan as your body and life evolve.",
  },
];

const homeFaqs = [
  {
    question: "Do I need to be unwell to start with DharmaPathy?",
    answer:
      "Not at all. Many of our clients are healthy people who want to stay that way. Preventive care is at the heart of Ayurveda.",
  },
  {
    question: "Is Ayurveda safe alongside modern medicine?",
    answer:
      "Yes, when guided by a qualified practitioner. We coordinate carefully with any existing treatment and never advise stopping prescribed medication.",
  },
  {
    question: "Are sessions in person or online?",
    answer:
      "Both. Most consultations and programs run online, with optional in-person sessions where available.",
  },
  {
    question: "How long until I notice change?",
    answer:
      "Most people feel small shifts within the first two weeks of consistent practice. Lasting change usually takes six to twelve weeks.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />

      {/* Services */}
      <section
        aria-labelledby="services-title"
        className="border-b border-[var(--color-border)] bg-[var(--color-cream)]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Services"
              title="Wellness, designed around you."
              description="Every service is tailored to your constitution, life, and goals — so the path forward feels possible, not prescriptive."
              align="left"
            />
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.18em] text-[var(--color-charcoal)] hover:text-[var(--color-earth)]"
            >
              View all services →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                variant={i === 0 ? "feature" : "default"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        aria-labelledby="process-title"
        className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Your Journey"
            title="A measured, four-step path forward."
            description="No quick fixes. Just a careful, considered process designed for lasting change."
          />
          <ol className="mt-16 grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j) => (
              <li
                key={j.step}
                className="bg-[var(--color-ivory)] p-8 sm:p-10"
              >
                <p className="font-serif text-3xl text-[var(--color-earth)]">
                  {j.step}
                </p>
                <h3 className="mt-6 font-serif text-xl text-[var(--color-charcoal)] sm:text-2xl">
                  {j.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
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
        className="border-b border-[var(--color-border)] bg-[var(--color-cream)]"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow">About DharmaPathy</p>
            <h2
              id="about-preview-title"
              className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-[var(--color-charcoal)] sm:text-[2.5rem]"
            >
              A practice built on listening, lineage, and patience.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              DharmaPathy was founded with a simple conviction: that the best
              wellness is personal, gentle, and patient. Our practitioners draw
              from classical Ayurveda, yoga, and integrative nutrition to
              support people through every season of life.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              We move slowly because lasting change happens slowly. Each plan
              we design is meant to be lived with, not endured.
            </p>
            <Link href="/about" className="btn-secondary mt-8">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section
        aria-labelledby="blog-title"
        className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              eyebrow="Journal"
              title="Insights from our practice."
              description="Short, practical writing on Ayurveda, yoga, food, and the quiet art of wellbeing."
              align="left"
            />
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.18em] text-[var(--color-charcoal)] hover:text-[var(--color-earth)]"
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
