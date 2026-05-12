import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig, telHref } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Dermapathy",
  description:
    "Book a consultation with the Dermapathy team. Hair transplant, skin care, lasers — get in touch and we'll find the right path forward.",
  path: "/contact",
});

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
                  {siteConfig.contact.address}
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
            <form
              className="border border-border bg-ivory p-8 sm:p-10"
              aria-label="Contact form"
            >
              <p className="eyebrow">Send a message</p>
              <h2 className="mt-4 font-serif text-2xl text-charcoal sm:text-[1.75rem]">
                Tell us a little about you.
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  autoComplete="name"
                  required
                />
                <Field
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Field
                  id="phone"
                  name="phone"
                  label="Phone"
                  type="tel"
                  autoComplete="tel"
                />
                <div className="flex flex-col">
                  <label
                    htmlFor="topic"
                    className="eyebrow mb-3"
                  >
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="border-b border-border bg-transparent py-3 text-sm text-charcoal focus:border-charcoal focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Hair Transplant (FUE / DHT)</option>
                    <option>PRP Hair Therapy</option>
                    <option>Scalp Treatment</option>
                    <option>Skin Rejuvenation</option>
                    <option>Acne &amp; Pigmentation</option>
                    <option>Laser Treatments</option>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="eyebrow mb-3 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none border border-border bg-transparent p-4 text-sm leading-7 text-charcoal focus:border-charcoal focus:outline-none"
                  placeholder="Briefly tell us what you're looking for…"
                />
              </div>

              <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-muted">
                  We respect your privacy. We&apos;ll never share your details.
                </p>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

function Field({ label, id, ...rest }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="eyebrow mb-3">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="border-b border-border bg-transparent py-3 text-sm text-charcoal placeholder:text-muted focus:border-charcoal focus:outline-none"
      />
    </div>
  );
}
