import SectionHeading from "./SectionHeading";
import { faqJsonLd } from "@/lib/seo";

export type FAQItem = { question: string; answer: string };

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FAQItem[];
  includeJsonLd?: boolean;
};

export default function FAQSection({
  eyebrow = "Frequently Asked",
  title = "Questions, answered.",
  description,
  items,
  includeJsonLd = true,
}: Props) {
  return (
    <section
      aria-labelledby="faq-title"
      className="border-b border-border bg-ivory"
    >
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
        />
      )}
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="left"
          />
        </div>
        <div className="divide-y divide-border border-y border-border lg:col-span-7">
          {items.map((item, i) => (
            <details
              key={i}
              className="group py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <h3 className="font-serif text-lg leading-snug text-charcoal sm:text-xl">
                  {item.question}
                </h3>
                <span
                  aria-hidden
                  className="mt-1 text-earth transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
