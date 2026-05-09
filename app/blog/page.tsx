import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogs } from "@/lib/blogs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Journal — Insights from our practice",
  description:
    "Practical, considered writing on Ayurveda, yoga, mindful nutrition, and the quiet art of holistic wellbeing — from the practitioners at DharmaPathy.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Journal", href: "/blog" },
            ]}
          />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Journal</p>
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-charcoal)] sm:text-[3.5rem]">
              Insights from our
              <span className="block italic text-[var(--color-earth)]">
                practice and lineage.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Short, practical writing on Ayurveda, yoga, food, and the quiet
              art of wellbeing — written by the same practitioners you would
              meet in a consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="From Reading to Practice"
        title="Ready to bring this into your life?"
        description="The articles are a starting point. The real change happens in practice — and we'd love to help you take that first step."
      />
    </>
  );
}
