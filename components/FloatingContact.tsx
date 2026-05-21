import Image from "next/image";

import { siteConfig, telHref } from "@/lib/site";

const waNumber = siteConfig.contact.phone.replace(/\D/g, "");
const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  "Hello Dermapathy, I'd like to book a consultation.",
)}`;

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Dermapathy on Instagram"
        className="transition-transform hover:scale-105"
      >
        <Image
          src="/images/ins.webp"
          alt=""
          width={56}
          height={56}
          className="h-12 w-12 sm:h-14 sm:w-14"
        />
      </a>
      <a
        href={telHref(siteConfig.contact.phone)}
        aria-label="Call Dermapathy"
        className="transition-transform hover:scale-105"
      >
        <Image
          src="/images/call.png"
          alt=""
          width={56}
          height={56}
          className="h-12 w-12 sm:h-14 sm:w-14"
        />
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dermapathy on WhatsApp"
        className="transition-transform hover:scale-105"
      >
        <Image
          src="/images/whats.png"
          alt=""
          width={56}
          height={56}
          className="h-12 w-12 sm:h-14 sm:w-14"
        />
      </a>
    </div>
  );
}
