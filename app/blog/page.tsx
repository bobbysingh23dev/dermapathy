import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogs } from "@/lib/blogs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Journal — Dermatology Insights",
  description:
    "Honest, dermatologist-written articles on hair transplant techniques, skin care, pigmentation, lasers, and the evidence behind what actually works.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border bg-ivory">
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
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.5rem]">
              Dermatology, written
              <span className="block flourish">by dermatologists.</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-muted sm:text-lg">
              Practical, evidence-based writing on hair restoration, acne,
              pigmentation, and skin care — from the same dermatologists you
              meet in our consulting rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="From Reading to Care"
        title="Ready to translate this into a real plan?"
        description="The articles are a starting point. The real progress happens in a consultation — and we'd love to help you take that first step."
      />
    </>
  );
}
