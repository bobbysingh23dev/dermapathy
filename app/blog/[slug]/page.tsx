import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getRelatedBlogs,
} from "@/lib/blogs";
import { blogImages } from "@/lib/images";
import { buildMetadata, articleJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogBySlug(slug);
  if (!post)
    return buildMetadata({ title: "Article not found", noIndex: true });
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedDate,
    authors: [post.author],
  });
}

export default async function BlogDetailPage(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogs(post.slug, 3);
  const date = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.metaDescription,
              slug: post.slug,
              publishedDate: post.publishedDate,
              author: post.author,
            })
          ),
        }}
      />

      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-4xl px-6 pt-12 sm:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Journal", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>
        <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-10 sm:px-8 lg:pb-24">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-earth">
            <span>{post.category}</span>
            <span aria-hidden>·</span>
            <span className="text-muted">{post.readingTime}</span>
          </div>
          <h1 className="mt-6 font-serif text-[2.25rem] leading-[1.1] tracking-tight text-charcoal sm:text-[3rem]">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-6 text-sm text-muted">
            <span className="font-medium text-charcoal">
              {post.author}
            </span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedDate}>{date}</time>
          </div>
        </div>
      </section>

      {blogImages[post.slug] && (
        <figure className="border-b border-border bg-ivory">
          <div className="mx-auto w-full max-w-5xl px-6 pb-12 sm:px-8 lg:px-0">
            <div className="relative aspect-3/2 overflow-hidden border border-border">
              <Image
                src={blogImages[post.slug].src}
                alt={blogImages[post.slug].alt}
                width={blogImages[post.slug].width}
                height={blogImages[post.slug].height}
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </figure>
      )}

      <article className="border-b border-border bg-ivory">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <aside className="lg:col-span-3">
            <div className="sticky top-28">
              <p className="eyebrow">In this article</p>
              <ol className="mt-5 space-y-3 text-sm">
                {post.content.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="text-charcoal-soft transition-colors hover:text-earth"
                    >
                      {String(i + 1).padStart(2, "0")} — {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <p className="font-serif text-xl leading-9 text-charcoal-soft sm:text-2xl">
              {post.excerpt}
            </p>
            <div className="mt-12 space-y-12">
              {post.content.map((section, i) => (
                <section key={i} id={`section-${i}`} className="scroll-mt-28">
                  <h2 className="font-serif text-[1.75rem] leading-snug text-charcoal sm:text-[2rem]">
                    {section.heading}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-charcoal-soft">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-16 border-t border-border pt-8">
              <Link
                href="/blog"
                className="text-xs uppercase tracking-[0.18em] text-charcoal hover:text-earth"
              >
                ← Back to journal
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-b border-border bg-cream">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
            <p className="eyebrow">Continue Reading</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
              More from the journal.
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
