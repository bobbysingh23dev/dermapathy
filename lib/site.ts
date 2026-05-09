export const siteConfig = {
  name: "DharmaPathy",
  shortName: "DharmaPathy",
  url: "https://dharmapathy.com",
  description:
    "DharmaPathy offers holistic wellness rooted in ancient wisdom and modern care — Ayurvedic consultation, yoga guidance, and personalized lifestyle programs designed for long-term wellbeing.",
  tagline: "Holistic Wellness Rooted in Ancient Wisdom",
  ogImage: "/og.png",
  locale: "en_US",
  contact: {
    email: "care@dharmapathy.com",
    phone: "+91 00000 00000",
    address: "Wellness Center, India",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  founded: "2018",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
