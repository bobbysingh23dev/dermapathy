import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";

export type BreadcrumbItem = { name: string; href: string };

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  const jsonLd = breadcrumbJsonLd(items.map((i) => ({ name: i.name, url: i.href })));
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="text-xs uppercase tracking-[0.18em] text-muted"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-charcoal">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-earth"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && <span aria-hidden>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
