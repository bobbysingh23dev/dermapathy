import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

type Props = {
  post: Pick<
    BlogPost,
    "title" | "slug" | "excerpt" | "publishedDate" | "category" | "readingTime"
  >;
};

export default function BlogCard({ post }: Props) {
  const date = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex h-full flex-col border border-[var(--color-border)] bg-[var(--color-ivory)] p-8 transition-colors hover:border-[var(--color-charcoal)]">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--color-earth)]">
        <span>{post.category}</span>
        <span aria-hidden>·</span>
        <span className="text-[var(--color-muted)]">{post.readingTime}</span>
      </div>
      <h3 className="mt-5 font-serif text-2xl leading-snug text-[var(--color-charcoal)]">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-[var(--color-earth)]"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
        {post.excerpt}
      </p>
      <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border)] pt-5 text-xs text-[var(--color-muted)]">
        <time dateTime={post.publishedDate}>{date}</time>
        <Link
          href={`/blog/${post.slug}`}
          className="uppercase tracking-[0.18em] text-[var(--color-charcoal)] hover:text-[var(--color-earth)]"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
