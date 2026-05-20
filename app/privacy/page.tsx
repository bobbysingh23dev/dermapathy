import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Dermapathy collects, uses, and protects the personal information you share through this website.",
  path: "/privacy",
});

const updated = "17 May 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Privacy Policy", href: "/privacy" },
            ]}
          />
        </div>
        <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.25rem]">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-muted">Last updated: {updated}</p>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16 text-base leading-8 text-muted sm:px-8 lg:py-24">
          <p>
            This policy explains what information {siteConfig.name} collects
            through this website, how it is used, and the choices you have. By
            using this site you agree to the practices described here.
          </p>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              Information we collect
            </h2>
            <p className="mt-4">
              We only collect information you actively provide through the
              enquiry form — your name, email address, phone number, the topic
              you select, and your message. We do not require you to create an
              account, and we do not knowingly collect information from anyone
              under 18.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              How your message is sent
            </h2>
            <p className="mt-4">
              When you submit the enquiry form, the details are formatted into a
              message and opened in WhatsApp on your device so you can send it
              to our clinic. That message is transmitted through WhatsApp and is
              subject to WhatsApp&apos;s own privacy policy. We use your details
              only to respond to your enquiry and arrange care.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              How we use information
            </h2>
            <p className="mt-4">
              To reply to your enquiry, schedule consultations, provide the
              care or information you request, and keep necessary medical and
              administrative records. We do not sell, rent, or trade your
              personal information, and we do not share it except where required
              to deliver care or by law.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              Analytics
            </h2>
            <p className="mt-4">
              We may use privacy-respecting analytics to understand how the
              site is used in aggregate. These tools do not identify you
              personally and are used only to improve the website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              Data retention &amp; security
            </h2>
            <p className="mt-4">
              We retain enquiry and medical information only as long as
              necessary for care and as required by applicable medical
              record-keeping rules, and we take reasonable measures to protect
              it against unauthorised access.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">Your rights</h2>
            <p className="mt-4">
              Under India&apos;s Digital Personal Data Protection Act, you may
              request access to, correction of, or deletion of the personal
              information you have shared with us. To make a request, contact us
              at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-charcoal underline hover:text-earth"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">Contact</h2>
            <p className="mt-4">
              Questions about this policy or your data? Email{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-charcoal underline hover:text-earth"
              >
                {siteConfig.contact.email}
              </a>{" "}
              or visit us at {siteConfig.contact.address}.
            </p>
          </div>

          <p className="border-t border-border pt-8 text-sm italic">
            This policy is a general template and should be reviewed by a
            qualified legal professional before publication to ensure it meets
            your obligations.
          </p>
        </div>
      </section>
    </>
  );
}
