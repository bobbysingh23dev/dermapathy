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
    email: "care@dermapathy.com",
    phone: "+91 00000 00000",
    address: "Dermapathy Clinic, India",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  founded: "2014",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Treatments", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
