export const contactInfo = {
  phone: "+91 9650821800",
  phone2: "+91 9140090880",
  email: "info@dermapathy.com",
  instagram: "dermapathy_clinic",
  facebook: "dermapathy",
  address:
    "1/44 First Floor, opposite Ipsum Diagnostics, Vijayant Khand, Gomti Nagar, LUCKNOW",
  timings: "11 AM - 05 PM",
} as const;

export const siteConfig = {
  name: "Dermapathy",
  shortName: "Dermapathy",
  url: "https://dermapathy.com",
  description:
    "Dermapathy is a specialist dermatology and aesthetic clinic offering advanced hair transplant procedures, scalp restoration, and modern medical-grade skin care — delivered by experienced board-certified dermatologists.",
  tagline: "Advanced Dermatology for Hair & Skin",
  ogImage: "/og.png",
  locale: "en_US",
  contact: {
    email: contactInfo.email,
    phone: contactInfo.phone,
    phone2: contactInfo.phone2,
    address: contactInfo.address,
    timings: contactInfo.timings,
  },
  social: {
    instagram: `https://www.instagram.com/${contactInfo.instagram}/`,
    facebook: `https://www.facebook.com/${contactInfo.facebook}`,
  },
  founded: "2014",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
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
