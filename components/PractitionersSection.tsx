import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { practitioners } from "@/lib/images";

type Props = {
  variant?: "default" | "compact";
};

export default function PractitionersSection({ variant = "default" }: Props) {
  return (
    <section
      aria-labelledby="practitioners-title"
      className="border-b border-border bg-ivory"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        {variant === "default" ? (
          <SectionHeading
            eyebrow="Our Dermatologists"
            title="Board-certified, fellowship-trained, patient-led."
            description="Every plan at Dermapathy is designed and supervised by a consultant dermatologist with a specific area of focus — never delegated."
          />
        ) : (
          <SectionHeading
            eyebrow="The Team"
            title="People you'll meet."
            align="left"
          />
        )}

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {practitioners.map((p) => (
            <article key={p.name} className="group">
              <div className="relative aspect-4/5 overflow-hidden border border-border bg-cream">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent"
                />
              </div>
              <div className="mt-6">
                <p className="eyebrow">{p.role}</p>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
