import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Medical Disclaimer",
  description:
    "Important information about the medical content on the Dermapathy website and the limits of advice provided online.",
  path: "/disclaimer",
});

const updated = "17 May 2026";

export default function DisclaimerPage() {
  return (
    <>
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Medical Disclaimer", href: "/disclaimer" },
            ]}
          />
        </div>
        <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-charcoal sm:text-[3.25rem]">
            Medical Disclaimer
          </h1>
          <p className="mt-5 text-sm text-muted">Last updated: {updated}</p>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16 text-base leading-8 text-muted sm:px-8 lg:py-24">
          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              Information, not medical advice
            </h2>
            <p className="mt-4">
              The content on this website is provided for general educational
              purposes only. It is not a substitute for professional medical
              advice, diagnosis, or treatment. Always seek the guidance of a
              qualified dermatologist or physician with any questions about a
              medical condition or treatment.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              No doctor–patient relationship
            </h2>
            <p className="mt-4">
              Reading this website, submitting the enquiry form, or messaging us
              does not create a doctor–patient relationship. A formal assessment
              and any treatment plan are established only during an in-clinic
              consultation with a {siteConfig.name} dermatologist.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              Results vary
            </h2>
            <p className="mt-4">
              Outcomes from any dermatology, hair restoration, or aesthetic
              procedure depend on individual factors and are not guaranteed.
              Any before-and-after images or timelines shown are illustrative
              of the kind of results possible and should not be taken as a
              promise of a specific outcome for you.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">
              In case of emergency
            </h2>
            <p className="mt-4">
              This website is not for medical emergencies. If you are
              experiencing a medical emergency, contact your local emergency
              services or go to the nearest hospital immediately.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-charcoal">Questions</h2>
            <p className="mt-4">
              For anything specific to your situation, please{" "}
              <a
                href="/contact"
                className="text-charcoal underline hover:text-earth"
              >
                contact us
              </a>{" "}
              and book a consultation.
            </p>
          </div>

          <p className="border-t border-border pt-8 text-sm italic">
            This disclaimer is a general template and should be reviewed by a
            qualified legal professional before publication.
          </p>
        </div>
      </section>
    </>
  );
}
