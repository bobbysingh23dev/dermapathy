import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blogs";
import { blogImages } from "@/lib/images";

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
  const image = blogImages[post.slug];

  return (
    <article className="group flex h-full flex-col border border-border bg-ivory transition-colors hover:border-charcoal">
      {image && (
        <Link
          href={`/blog/${post.slug}`}
          aria-label={post.title}
          className="block aspect-3/2 overflow-hidden border-b border-border bg-cream"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-earth">
          <span>{post.category}</span>
          <span aria-hidden>·</span>
          <span className="text-muted">{post.readingTime}</span>
        </div>
        <h3 className="mt-5 font-serif text-2xl leading-snug text-charcoal">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-earth"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-muted">
          {post.excerpt}
        </p>
        <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-xs text-muted">
          <time dateTime={post.publishedDate}>{date}</time>
          <Link
            href={`/blog/${post.slug}`}
            className="uppercase tracking-[0.18em] text-charcoal hover:text-earth"
          >
            Read article →
          </Link>
        </div>
      </div>
    </article>
  );
}
