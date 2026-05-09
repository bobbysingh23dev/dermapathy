import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact DharmaPathy",
  description:
    "Get in touch with the DharmaPathy team. Book a consultation, ask a question, or learn more about our holistic wellness programs.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-ivory)]">
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
            <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-charcoal)] sm:text-[3.5rem]">
              Let&apos;s start with
              <span className="block italic text-[var(--color-earth)]">
                a conversation.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Tell us a little about what you&apos;re looking for. We read every
              message and reply within two working days — usually sooner.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-cream)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow">Reach Us</p>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] tracking-tight text-[var(--color-charcoal)] sm:text-[2.5rem]">
              We&apos;re here, quietly.
            </h2>
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2 text-base">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[var(--color-charcoal)] hover:text-[var(--color-earth)]"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-2 text-base">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-[var(--color-charcoal)] hover:text-[var(--color-earth)]"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Visit</dt>
                <dd className="mt-2 text-base text-[var(--color-charcoal)]">
                  {siteConfig.contact.address}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-2 text-base text-[var(--color-charcoal)]">
                  Monday – Saturday · 9:00 to 18:00 IST
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <form
              className="border border-[var(--color-border)] bg-[var(--color-ivory)] p-8 sm:p-10"
              aria-label="Contact form"
            >
              <p className="eyebrow">Send a message</p>
              <h2 className="mt-4 font-serif text-2xl text-[var(--color-charcoal)] sm:text-[1.75rem]">
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
                    className="border-b border-[var(--color-border)] bg-transparent py-3 text-sm text-[var(--color-charcoal)] focus:border-[var(--color-charcoal)] focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Ayurvedic Consultation</option>
                    <option>Yoga & Meditation</option>
                    <option>Wellness Program</option>
                    <option>Diet & Lifestyle</option>
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
                  className="w-full resize-none border border-[var(--color-border)] bg-transparent p-4 text-sm leading-7 text-[var(--color-charcoal)] focus:border-[var(--color-charcoal)] focus:outline-none"
                  placeholder="Briefly tell us what you're looking for…"
                />
              </div>

              <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-[var(--color-muted)]">
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
        className="border-b border-[var(--color-border)] bg-transparent py-3 text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-charcoal)] focus:outline-none"
      />
    </div>
  );
}
