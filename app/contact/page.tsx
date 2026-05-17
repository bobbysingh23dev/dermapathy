import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { siteConfig, telHref } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Dermapathy",
  description:
    "Book a consultation with the Dermapathy team. Hair transplant, skin care, lasers — get in touch and we'll find the right path forward.",
  path: "/contact",
});

const mapQuery = "Dr Isha Singh's Dermapathy Skin Clinic, Gomti Nagar, Lucknow";
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  mapQuery,
)}&z=16&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  mapQuery,
)}`;

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ]}
          />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.5rem]">
              Let&apos;s start with
              <span className="block italic text-earth">
                a conversation.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-muted sm:text-lg">
              Tell us a little about what you&apos;re looking for. We read every
              message and reply within two working days — usually sooner.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow">Reach Us</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]">
              We&apos;re here, quietly.
            </h2>
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2 text-base">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-charcoal hover:text-earth"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-2 flex flex-col gap-2 text-base">
                  <a
                    href={telHref(siteConfig.contact.phone)}
                    className="text-charcoal hover:text-earth"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={telHref(siteConfig.contact.phone2)}
                    className="text-charcoal hover:text-earth"
                  >
                    {siteConfig.contact.phone2}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Visit</dt>
                <dd className="mt-2 text-base text-charcoal">
                  <span className="block">{siteConfig.contact.address}</span>
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs uppercase tracking-[0.18em] text-earth hover:text-charcoal"
                  >
                    Get directions →
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-2 text-base text-charcoal">
                  {siteConfig.contact.timings}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="find-us-title"
        className="border-b border-border bg-ivory"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Find Us</p>
              <span aria-hidden className="gold-rule" />
              <h2
                id="find-us-title"
                className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-charcoal sm:text-[2.5rem]"
              >
                Gomti Nagar, Lucknow.
              </h2>
            </div>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.18em] text-charcoal hover:text-earth"
            >
              Get directions →
            </a>
          </div>
          <div className="mt-12 overflow-hidden border border-border">
            <iframe
              title="Dermapathy clinic location on Google Maps"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-90 w-full sm:h-110"
            />
          </div>
        </div>
      </section>
    </>
  );
}
