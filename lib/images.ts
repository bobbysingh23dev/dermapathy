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

const hairGalleryDescription =
  "Separate baseline (B) and follow-up (A) clinical photographs.";

/** Full hair transplant before/after set (B = before, A = after). */
export const hairTransplantGalleryPairs: BeforeAfterPair[] = [
  {
    kind: "two-up",
    label: "Hair comparison I",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB1.png",
      alt: "Hair restoration — before",
      width: 289,
      height: 285,
    },
    after: {
      src: "/images/HA1.png",
      alt: "Hair restoration — after",
      width: 269,
      height: 285,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison II",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB2.png",
      alt: "Hair restoration — before",
      width: 269,
      height: 285,
    },
    after: {
      src: "/images/HA2.png",
      alt: "Hair restoration — after",
      width: 262,
      height: 284,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison III",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB3.png",
      alt: "Hair restoration — before",
      width: 359,
      height: 502,
    },
    after: {
      src: "/images/HA3.png",
      alt: "Hair restoration — after",
      width: 359,
      height: 502,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison IV",
    description: hairGalleryDescription,
    before: {
      src: "/images/H4B.png",
      alt: "Hair restoration — before",
      width: 427,
      height: 414,
    },
    after: {
      src: "/images/H4A.png",
      alt: "Hair restoration — after",
      width: 412,
      height: 414,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison V",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB5.png",
      alt: "Hair restoration — before",
      width: 412,
      height: 404,
    },
    after: {
      src: "/images/HA5.png",
      alt: "Hair restoration — after",
      width: 412,
      height: 404,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison VI",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB6.png",
      alt: "Hair restoration — before",
      width: 590,
      height: 583,
    },
    after: {
      src: "/images/HA6.png",
      alt: "Hair restoration — after",
      width: 590,
      height: 583,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison VII",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB7.png",
      alt: "Hair restoration — before",
      width: 335,
      height: 346,
    },
    after: {
      src: "/images/HA7.png",
      alt: "Hair restoration — after",
      width: 335,
      height: 418,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison VIII",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB8.png",
      alt: "Hair restoration — before",
      width: 655,
      height: 686,
    },
    after: {
      src: "/images/HA8.png",
      alt: "Hair restoration — after",
      width: 655,
      height: 742,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison IX",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB9.png",
      alt: "Hair restoration — before",
      width: 716,
      height: 705,
    },
    after: {
      src: "/images/HA9.png",
      alt: "Hair restoration — after",
      width: 716,
      height: 705,
    },
  },
  {
    kind: "two-up",
    label: "Hair comparison X",
    description: hairGalleryDescription,
    before: {
      src: "/images/HB10.png",
      alt: "Hair restoration — before",
      width: 2555,
      height: 3042,
    },
    after: {
      src: "/images/HA10.png",
      alt: "Hair restoration — after",
      width: 656,
      height: 931,
    },
  },
];

/** Home: first four hair comparisons (subset of `hairTransplantGalleryPairs`). */
export const hairBeforeAfter: BeforeAfterPair[] =
  hairTransplantGalleryPairs.slice(0, 4);

/** File naming: B suffix = before (left), A suffix = after (right). */
export const skinBeforeAfter: BeforeAfterPair[] = [
  {
    kind: "two-up",
    label: "Comparison I",
    description:
      "Dermatologist-supervised protocol — separate baseline (B) and follow-up (A) photographs.",
    before: {
      src: "/images/skin1B.png",
      alt: "Skin — before treatment",
      width: 613,
      height: 1009,
    },
    after: {
      src: "/images/skin1A.png",
      alt: "Skin — after treatment",
      width: 534,
      height: 1002,
    },
  },
  {
    kind: "two-up",
    label: "Comparison II",
    description:
      "Dermatologist-supervised protocol — separate baseline (B) and follow-up (A) photographs.",
    before: {
      src: "/images/Skin2B.png",
      alt: "Skin — before treatment",
      width: 592,
      height: 988,
    },
    after: {
      src: "/images/Skin2A.png",
      alt: "Skin — after treatment",
      width: 594,
      height: 1012,
    },
  },
  {
    kind: "two-up",
    label: "Comparison III",
    description:
      "Dermatologist-supervised protocol — separate baseline (B) and follow-up (A) photographs.",
    before: {
      src: "/images/Skin3B.png",
      alt: "Skin — before treatment",
      width: 224,
      height: 111,
    },
    after: {
      src: "/images/Skin3A.png",
      alt: "Skin — after treatment",
      width: 224,
      height: 111,
    },
  },
  {
    kind: "two-up",
    label: "Comparison IV",
    description:
      "Dermatologist-supervised protocol — separate baseline (B) and follow-up (A) photographs.",
    before: {
      src: "/images/Skin4B.png",
      alt: "Skin — before treatment",
      width: 582,
      height: 879,
    },
    after: {
      src: "/images/Skin4A.png",
      alt: "Skin — after treatment",
      width: 574,
      height: 909,
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
    src: "/images/hairPrp.png",
    alt: "Dermatologist performing an in-clinic hair treatment — hands applying product to the patient’s scalp",
    width: 1536,
    height: 1024,
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
