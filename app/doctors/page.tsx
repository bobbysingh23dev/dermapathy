import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildMetadata, physicianJsonLd } from "@/lib/seo";
import { doctors } from "@/lib/doctors";

export const metadata: Metadata = buildMetadata({
  title: "Our Doctors — Dermatologists in Lucknow",
  description:
    "Meet the dermatologists behind Dermapathy in Gomti Nagar, Lucknow — led by Dr. Isha Singh, specialising in hair transplant, PRP, and medical-grade skin care.",
  path: "/doctors",
});

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function DoctorsPage() {
  return (
    <>
      {doctors.map((d) => (
        <script
          key={d.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              physicianJsonLd({
                name: d.name,
                slug: d.slug,
                role: d.role,
                qualification: d.qualification,
                image: d.image || undefined,
                bio: d.bio,
              }),
            ),
          }}
        />
      ))}

      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Our Doctors", href: "/doctors" },
            ]}
          />
        </div>
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="eyebrow">Our Doctors</p>
          <span aria-hidden className="gold-rule" />
          <h1 className="mt-5 max-w-3xl font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.5rem]">
            The dermatologists behind Dermapathy.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Every consultation and procedure at our Gomti Nagar, Lucknow clinic
            is led personally by a qualified dermatologist — never delegated.
          </p>
        </div>
      </section>

      {doctors.map((d, i) => (
        <section
          key={d.slug}
          id={d.slug}
          className={`border-b border-border ${i % 2 === 0 ? "bg-cream" : "bg-ivory"}`}
        >
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -translate-x-3 translate-y-3 border border-gold-soft/60"
                />
                <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden border border-border bg-ivory">
                  {d.image ? (
                    <Image
                      src={d.image}
                      alt={`${d.name}, ${d.role} at Dermapathy`}
                      width={640}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-serif text-6xl text-gold sm:text-7xl">
                      {initials(d.name)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <p className="eyebrow">{d.role}</p>
              <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] tracking-tight text-charcoal sm:text-[2.75rem]">
                {d.name}
              </h2>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal-soft">
                {d.qualification ? (
                  <li className="flex items-center gap-2">
                    <span aria-hidden className="text-earth">◆</span>
                    {d.qualification}
                  </li>
                ) : null}
                {d.experienceYears ? (
                  <li className="flex items-center gap-2">
                    <span aria-hidden className="text-earth">◆</span>
                    {d.experienceYears} years experience
                  </li>
                ) : null}
                {d.fellowship ? (
                  <li className="flex items-center gap-2">
                    <span aria-hidden className="text-earth">◆</span>
                    {d.fellowship}
                  </li>
                ) : null}
                {d.registration ? (
                  <li className="flex items-center gap-2">
                    <span aria-hidden className="text-earth">◆</span>
                    Reg. {d.registration}
                  </li>
                ) : null}
              </ul>

              <div className="mt-7 space-y-5 text-base leading-8 text-muted">
                {d.bio.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>

              {d.specialties.length > 0 ? (
                <div className="mt-8 border-t border-border pt-7">
                  <p className="eyebrow">Specialties</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {d.specialties.map((s) => (
                      <li
                        key={s}
                        className="flex gap-3 text-sm leading-7 text-charcoal-soft"
                      >
                        <span aria-hidden className="mt-2 h-px w-3 bg-earth" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-9">
                <Link href="/contact" className="btn-primary">
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
