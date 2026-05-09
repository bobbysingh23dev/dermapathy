import Link from "next/link";
import Image from "next/image";
import { images } from "@/public/images";

const trust = [
  "Board-Certified Dermatologists",
  "Advanced Technology",
  "Personalised Treatments",
  "10+ Years Experience",
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Background split — sand on the left, mist on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid grid-cols-2"
      >
        <div className="bg-sand" />
        <div className="bg-mist" />
      </div>

      {/* Two full-bleed portraits */}
      <div className="relative grid h-[78vh] min-h-[560px] grid-cols-2 sm:min-h-[640px] lg:h-[82vh] lg:min-h-[700px]">
        <div className="relative h-full overflow-hidden">
          <Image
            src={images.Women}
            alt="Skin care patient portrait"
            fill
            priority
            sizes="50vw"
            className="object-cover object-[35%_top] mix-blend-multiply"
          />
        </div>
        <div className="relative h-full overflow-hidden">
          <Image
            src={images.Men}
            alt="Hair restoration patient portrait"
            fill
            priority
            sizes="50vw"
            className="object-cover object-[65%_top]"
          />
        </div>
      </div>

      {/* Soft cream vignette behind the headline so type stays legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 38% at 50% 48%, rgba(244,237,224,0.65), rgba(244,237,224,0) 75%)",
        }}
      />

      {/* Centred headline overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow text-charcoal-soft">
          Dermatology · Hair · Skin
        </p>

        <h1
          id="hero-title"
          className="mt-5 font-serif text-[3rem] leading-[0.95] tracking-tight sm:text-[5.25rem] lg:text-[7rem]"
        >
          <span className="text-outline">SKIN</span>
          <span className="mx-3 italic font-light text-earth sm:mx-5">
            &amp;
          </span>
          <span className="text-charcoal">SCALP</span>
        </h1>

        <p className="mt-3 font-serif text-2xl italic tracking-[0.18em] text-charcoal-soft sm:text-3xl lg:text-4xl">
          Restoration
        </p>

        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-charcoal-soft sm:text-base">
          Personalised dermatology care for hair and skin concerns —
          board-certified specialists, advanced technique.
        </p>

        <div className="pointer-events-auto mt-9">
          <Link href="/contact" className="btn-primary">
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Trust strip pinned to the bottom of the hero */}
      <ul
        aria-label="Clinic credentials"
        className="relative z-10 grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
      >
        {trust.map((label) => (
          <li
            key={label}
            className="flex items-center justify-center gap-2 bg-ivory px-4 py-4 text-center text-[0.72rem] uppercase tracking-[0.2em] text-charcoal-soft sm:py-5"
          >
            <span aria-hidden className="text-earth">
              ◆
            </span>
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
