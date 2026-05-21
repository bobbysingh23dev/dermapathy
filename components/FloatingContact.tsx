import Image from "next/image";

import { siteConfig, telHref } from "@/lib/site";

const waNumber = siteConfig.contact.phone.replace(/\D/g, "");
const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  "Hello Dermapathy, I'd like to book a consultation.",
)}`;

const iconClass =
  "transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none";

export default function FloatingContact() {
  return (
    <div className="group fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      {/* Icons revealed on hover/focus */}
      <div className="pointer-events-none flex translate-y-2 flex-col items-center gap-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Dermapathy on Instagram"
          className={iconClass}
        >
          <Image
            src="/images/ins.webp"
            alt=""
            width={48}
            height={48}
            className="h-11 w-11"
          />
        </a>
        <a
          href={telHref(siteConfig.contact.phone)}
          aria-label="Call Dermapathy"
          className={iconClass}
        >
          <Image
            src="/images/call.png"
            alt=""
            width={48}
            height={48}
            className="h-11 w-11"
          />
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dermapathy on WhatsApp"
          className={iconClass}
        >
          <Image
            src="/images/whats.png"
            alt=""
            width={48}
            height={48}
            className="h-11 w-11"
          />
        </a>
      </div>

      {/* Always-visible chat trigger */}
      <button
        type="button"
        aria-label="Contact Dermapathy"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:scale-110 focus:outline-none sm:h-14 sm:w-14"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 sm:h-7 sm:w-7"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
    </div>
  );
}
