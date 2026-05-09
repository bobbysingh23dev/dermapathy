import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl tracking-[0.18em] text-charcoal">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              A specialist dermatology and aesthetic clinic for advanced hair
              transplant and medical-grade skin care.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-charcoal-soft transition-colors hover:text-earth"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow">Treatments</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-charcoal-soft transition-colors hover:text-earth"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-charcoal-soft">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-earth"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-earth"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
            <div className="mt-5 flex gap-4 text-xs uppercase tracking-[0.16em] text-muted">
              <a
                href={siteConfig.social.instagram}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-earth"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-earth"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.youtube}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-earth"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="tracking-wide">
            Dermatologist-led care for hair and skin.
          </p>
        </div>
      </div>
    </footer>
  );
}
