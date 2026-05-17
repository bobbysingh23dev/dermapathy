"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/85 backdrop-blur supports-[backdrop-filter]:bg-ivory/70">
      <div className="flex h-20 w-full items-center gap-6 px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="shrink-0 font-serif text-xl tracking-[0.14em] text-charcoal sm:text-2xl"
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-x-6 xl:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-[0.72rem] uppercase tracking-[0.14em] transition-colors ${
                isActive(item.href)
                  ? "text-charcoal"
                  : "text-muted hover:text-charcoal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link href="/contact" className="btn-primary text-xs">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="ml-auto flex h-10 w-10 items-center justify-center xl:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 right-0 top-0 h-px bg-charcoal transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 right-0 h-px bg-charcoal transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-ivory xl:hidden">
          <nav
            aria-label="Mobile"
            className="flex w-full flex-col gap-1 px-6 py-6 sm:px-8"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm uppercase tracking-[0.16em] ${
                  isActive(item.href)
                    ? "text-charcoal"
                    : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full text-xs"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
