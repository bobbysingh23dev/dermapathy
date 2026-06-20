export const contactInfo = {
  phone: "+91 9650821800",
  email: "info@dermapathy.com",
  instagram: "dermapathy_clinic",
  facebook: "dermapathy",
  address:
    "1/44 First Floor, opposite Ipsum Diagnostics, Vijayant Khand, Gomti Nagar, LUCKNOW",
  timings: "11 AM - 05 PM",
  // Structured address parts — used for LocalBusiness / MedicalClinic schema.
  street: "1/44 First Floor, opposite Ipsum Diagnostics, Vijayant Khand",
  locality: "Lucknow",
  region: "Uttar Pradesh",
  postalCode: "226010",
  country: "IN",
  // schema.org openingHours format (days assumed daily — adjust if a weekly off applies)
  openingHours: "Mo-Su 11:00-17:00",
} as const;

export const siteConfig = {
  name: "Dermapathy",
  shortName: "Dermapathy",
  url: "https://dermapathy.com",
  description:
    "Dermapathy is a specialist dermatology and aesthetic clinic offering advanced hair transplant procedures, scalp restoration, and modern medical-grade skin care — delivered by experienced board-certified dermatologists.",
  tagline: "Advanced Dermatology for Hair & Skin",
  ogImage: "/og.png",
  locale: "en_IN",
  contact: {
    email: contactInfo.email,
    phone: contactInfo.phone,
    address: contactInfo.address,
    timings: contactInfo.timings,
    street: contactInfo.street,
    locality: contactInfo.locality,
    region: contactInfo.region,
    postalCode: contactInfo.postalCode,
    country: contactInfo.country,
    openingHours: contactInfo.openingHours,
  },
  social: {
    instagram: `https://www.instagram.com/${contactInfo.instagram}/`,
    facebook: `https://www.facebook.com/${contactInfo.facebook}`,
  },
  founded: "2014",
  // Public reviews listing. Fill `rating` + `count` once you have verified
  // aggregate numbers; the badge shows them only when both are non-empty.
  reviews: {
    source: "Justdial",
    url: "https://www.justdial.com/Lucknow/Dr-Isha-Singhs-Dermapathy-Skin-Clinic-Gomti-Nagar/0522PX522-X522-251031135148-S9X8_BZDET",
    rating: "",
    count: "",
  },
  // e.g. "Consultation ₹500 · adjustable against treatment". Empty = hidden.
  consultationFee: "",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Doctors", href: "/doctors" },
    { label: "Hair transplant", href: "/services/hair-transplant" },
    { label: "Skin treatment", href: "/services/skin-treatment" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** `tel:` href — strips spaces, keeps leading + */
export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
