export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// ───────── HERO (split: skin + hair) ─────────
export const heroImageSkin: SiteImage = {
  src: u("photo-1487412947147-5cebf100ffc2", 1200),
  alt: "Close-up portrait highlighting clear, healthy skin",
  width: 1200,
  height: 1500,
};

export const heroImageHair: SiteImage = {
  src: u("photo-1605497788044-5a32c7078486", 1200),
  alt: "Portrait of a man with restored, healthy hair",
  width: 1200,
  height: 1500,
};

// ───────── ABOUT / STORY (`public/images/docter.png`) ─────────
export const aboutStoryImage: SiteImage = {
  src: "/images/docter.png",
  alt: "Dermapathy dermatologist",
  width: 1122,
  height: 1402,
};

export const processAccentImage: SiteImage = {
  src: u("photo-1559757175-5700dde675bc", 1200),
  alt: "Dermatologist consulting with a patient",
  width: 1200,
  height: 1500,
};

// ───────── PRACTITIONERS (Dermatologists) ─────────
export const practitioners: {
  name: string;
  role: string;
  bio: string;
  image: SiteImage;
}[] = [
  {
    name: "Dr. Aarav Mehta",
    role: "Lead Dermatologist & Hair Transplant Surgeon",
    bio: "MD Dermatology, Diplomate of the American Board of Hair Restoration Surgery. Fifteen years of FUE and DHT experience with over 3,000 procedures performed.",
    image: {
      src: u("photo-1622253692010-333f2da6031d", 800),
      alt: "Portrait of Dr. Aarav Mehta, lead dermatologist",
      width: 800,
      height: 1000,
    },
  },
  {
    name: "Dr. Meera Iyer",
    role: "Consultant Dermatologist — Skin & Aesthetics",
    bio: "MD Dermatology with fellowships in cosmetic dermatology and laser medicine. Known for honest, conservative aesthetic care that ages well.",
    image: {
      src: u("photo-1594824476967-48c8b964273f", 800),
      alt: "Portrait of Dr. Meera Iyer, consultant dermatologist",
      width: 800,
      height: 1000,
    },
  },
  {
    name: "Dr. Rohan Kapoor",
    role: "Consultant — Acne, Pigmentation & Lasers",
    bio: "MD Dermatology, fellowship-trained in lasers and pigmentary disorders. Special interest in safe outcomes for South Asian skin tones.",
    image: {
      src: u("photo-1612531386530-97286d97c2d2", 800),
      alt: "Portrait of Dr. Rohan Kapoor",
      width: 800,
      height: 1000,
    },
  },
];

// ───────── BEFORE / AFTER ─────────
export type BeforeAfterTwoUp = {
  kind: "two-up";
  label: string;
  description: string;
  before: SiteImage;
  after: SiteImage;
};

export type BeforeAfterSingleFrame = {
  kind: "single-frame";
  label: string;
  description: string;
  /** One photograph that already contains before & after (e.g. side‑by‑side or stacked). */
  image: SiteImage;
};

export type BeforeAfterPair = BeforeAfterTwoUp | BeforeAfterSingleFrame;

export const hairBeforeAfter: BeforeAfterPair[] = [
  {
    kind: "two-up",
    label: "Hair restoration — pre‑op and follow‑up",
    description:
      "Separate clinical photographs: baseline and result after the growth phase.",
    before: {
      src: "/images/9.jpeg",
      alt: "Scalp and hair — baseline before hair restoration procedure",
      width: 3024,
      height: 4032,
    },
    after: {
      src: "/images/9-after.jpeg",
      alt: "Same region after treatment — increased coverage",
      width: 3024,
      height: 4032,
    },
  },
  {
    kind: "single-frame",
    label: "Side‑by‑side comparison (single image)",
    description:
      "Before and after captured in one frame for direct comparison.",
    image: {
      src: "/images/6.jpeg",
      alt: "Hair restoration patient: before and after views shown side by side in one photograph",
      width: 1600,
      height: 800,
    },
  },
  {
    kind: "single-frame",
    label: "Combined before / after view",
    description: "Single composite clinical photograph.",
    image: {
      src: "/images/3.jpeg",
      alt: "Hair restoration: before and after comparison in one vertical composite clinical image",
      width: 853,
      height: 1280,
    },
  },
  {
    kind: "single-frame",
    label: "Outcome documentation (single frame)",
    description: "Before and after presented together in one image.",
    image: {
      src: "/images/7.jpeg",
      alt: "Hair restoration outcome: before and after regions shown together in one square-format clinical photograph",
      width: 1600,
      height: 1600,
    },
  },
];

export const skinBeforeAfter: BeforeAfterPair[] = [
  {
    kind: "two-up",
    label: "Acne & Pigmentation Programme",
    description:
      "12-week protocol combining medical topicals and chemical peels.",
    before: {
      src: u("photo-1573497019418-b400bb3ab074", 800),
      alt: "Skin clarity — before",
      width: 800,
      height: 800,
    },
    after: {
      src: u("photo-1487412947147-5cebf100ffc2", 800),
      alt: "Skin clarity — after",
      width: 800,
      height: 800,
    },
  },
  {
    kind: "two-up",
    label: "Skin Rejuvenation",
    description:
      "Microneedling + medical-grade topicals over six in-clinic sessions.",
    before: {
      src: u("photo-1531746020798-e6953c6e8e04", 800),
      alt: "Skin rejuvenation — before",
      width: 800,
      height: 800,
    },
    after: {
      src: u("photo-1502823403499-6ccfcf4fb453", 800),
      alt: "Skin rejuvenation — after",
      width: 800,
      height: 800,
    },
  },
];

// ───────── BLOG IMAGES ─────────
export const blogImages: Record<string, SiteImage> = {
  "fue-vs-dht-hair-transplant": {
    src: u("photo-1620916566398-39f1143ab7be", 1400),
    alt: "Hair transplant procedure in a modern clinic",
    width: 1400,
    height: 933,
  },
  "what-causes-adult-acne": {
    src: u("photo-1573461160327-b450ce3d8e7f", 1400),
    alt: "Close-up of clear skin during a dermatology consultation",
    width: 1400,
    height: 933,
  },
  "prp-for-hair-loss": {
    src: u("photo-1559757175-5700dde675bc", 1400),
    alt: "Patient receiving PRP scalp treatment",
    width: 1400,
    height: 933,
  },
  "sunscreen-for-indian-skin": {
    src: u("photo-1556228720-195a672e8a03", 1400),
    alt: "Sunscreen and skincare products on a clean surface",
    width: 1400,
    height: 933,
  },
};

// ───────── SERVICE ACCENTS ─────────
const hairAccent: SiteImage = {
  src: u("photo-1620916566398-39f1143ab7be", 1400),
  alt: "Hair restoration procedure",
  width: 1400,
  height: 933,
};

const skinAccent: SiteImage = {
  src: u("photo-1570172619644-dfd03ed5d881", 1400),
  alt: "Skin treatment in progress",
  width: 1400,
  height: 933,
};

export const serviceAccentImage: SiteImage = skinAccent;

export const serviceImagesBySlug: Record<string, SiteImage> = {
  "hair-transplant": {
    src: u("photo-1620916566398-39f1143ab7be", 1400),
    alt: "Advanced FUE hair transplant procedure",
    width: 1400,
    height: 933,
  },
  "prp-hair-therapy": {
    src: u("photo-1559757175-5700dde675bc", 1400),
    alt: "PRP scalp injection therapy",
    width: 1400,
    height: 933,
  },
  "scalp-treatments": {
    src: u("photo-1522337360788-8b13dee7a37e", 1400),
    alt: "Scalp examination using trichoscopy",
    width: 1400,
    height: 933,
  },
  "skin-rejuvenation": {
    src: u("photo-1570172619644-dfd03ed5d881", 1400),
    alt: "Medical-grade skin rejuvenation treatment",
    width: 1400,
    height: 933,
  },
  "acne-pigmentation": {
    src: u("photo-1573461160327-b450ce3d8e7f", 1400),
    alt: "Acne and pigmentation consultation",
    width: 1400,
    height: 933,
  },
  "laser-treatments": {
    src: u("photo-1532926381893-7542290edf1d", 1400),
    alt: "Laser dermatology treatment in a modern clinic",
    width: 1400,
    height: 933,
  },
};

// ───────── TESTIMONIALS (placeholder portraits) ─────────
export type Testimonial = {
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  image?: SiteImage;
};

export const testimonials: Testimonial[] = [
  {
    name: "Vikram, 38",
    treatment: "FUE Hair Transplant",
    rating: 5,
    quote:
      "The team designed a hairline that fits my face — not the dramatic line I'd seen elsewhere. Twelve months on, it looks completely natural.",
    image: {
      src: u("photo-1500648767791-00dcc994a43e", 400),
      alt: "Testimonial portrait of Vikram",
      width: 400,
      height: 400,
    },
  },
  {
    name: "Anjali, 31",
    treatment: "Acne & Pigmentation Programme",
    rating: 5,
    quote:
      "I'd tried everything before coming here. Dr. Iyer treated my barrier first, then my acne. My skin has been clear for over a year.",
    image: {
      src: u("photo-1573496359142-b8d87734a5a2", 400),
      alt: "Testimonial portrait of Anjali",
      width: 400,
      height: 400,
    },
  },
  {
    name: "Priya, 44",
    treatment: "Skin Rejuvenation",
    rating: 5,
    quote:
      "Six sessions over three months. My skin texture is the best it has been in a decade — and it still looks like my skin.",
    image: {
      src: u("photo-1487412947147-5cebf100ffc2", 400),
      alt: "Testimonial portrait of Priya",
      width: 400,
      height: 400,
    },
  },
];

// Suppress unused warnings — kept for future targeted use
void hairAccent;
void skinAccent;
