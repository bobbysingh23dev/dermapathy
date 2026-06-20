// Full treatment catalog as provided by the clinic (Dr. Isha Singh).
// These are browsable menus rendered on the Skin and Hair hub pages — names
// only, grouped by area. Deep per-treatment pages exist separately for the
// flagship procedures in lib/services.ts.

export type TreatmentGroup = {
  title: string;
  items: string[];
};

export const skinTreatmentCatalog: TreatmentGroup[] = [
  {
    title: "Facials & skin glow",
    items: [
      "Oxygeneo (Hydra) Facial",
      "Hollywood Carbon Facial",
      "Medifacials",
      "IV Rejuvenating & Glow Drips",
    ],
  },
  {
    title: "Pigmentation & acne",
    items: [
      "Chemical Peels",
      "Cosmelan",
      "Acnelan",
      "Blemiderm",
      "Laser for Pigmentation",
      "Lip Pigment Removal",
      "Under-Eye Circles Treatment",
    ],
  },
  {
    title: "Injectables & anti-aging",
    items: [
      "Fillers & Botox",
      "Skin Boosters",
      "Mesotherapy",
      "Microneedling",
      "Exosome Therapy",
      "PRP (Face & Scalp)",
    ],
  },
  {
    title: "Laser & minor procedures",
    items: [
      "Laser Hair Reduction",
      "Tattoo Removal",
      "Tag / Mole / Wart Removal",
      "Nail Surgery",
      "Cosmetic Surgeries",
    ],
  },
];

export const hairTreatmentCatalog: TreatmentGroup[] = [
  {
    title: "Hair loss treatment",
    items: [
      "PRP (Platelet-Rich Plasma)",
      "GFC (Growth Factor Concentrate)",
      "QR678",
      "Dutexome Solutions",
      "Minoxidil & Finasteride",
    ],
  },
  {
    title: "Hair transplant",
    items: [
      "Male Hair Transplant",
      "Female Hair Transplant",
      "Beard Transplant",
      "Repair Hair Transplant",
      "Eyebrow Transplant",
    ],
  },
];
