export type ServiceCategory = "hair" | "skin";

export type Service = {
  title: string;
  slug: string;
  category: ServiceCategory;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  // ───────── HAIR ─────────
  {
    title: "Hair Transplant (FUE & DHT)",
    slug: "hair-transplant",
    category: "hair",
    metaTitle: "Hair Transplant — Advanced FUE & DHT Procedures | Dermapathy",
    metaDescription:
      "Advanced hair transplant at Dermapathy — Follicular Unit Extraction (FUE) and Direct Hair Transplant (DHT) for natural, permanent hair restoration with minimal downtime.",
    shortDescription:
      "Permanent, natural-looking hair restoration through advanced FUE and DHT techniques.",
    longDescription:
      "Our hair transplant programme combines two of the most refined techniques in modern dermatology — Follicular Unit Extraction (FUE) and Direct Hair Transplant (DHT). Each graft is harvested individually and placed by hand to follow your natural hairline, density, and growth direction. Procedures are performed under local anaesthesia in our day-care clinic, with most patients returning to office work within a week.",
    benefits: [
      "Natural, permanent results designed around your hairline",
      "Minimally invasive — local anaesthesia, no stitches",
      "Same-day discharge with a quick recovery",
      "Long-term aftercare and growth tracking",
    ],
    process: [
      {
        step: "Consultation",
        description:
          "Scalp analysis, donor area assessment, and a clear plan with realistic expectations.",
      },
      {
        step: "Design",
        description:
          "Hairline design tailored to your face, age, and long-term plan — reviewed before any surgery.",
      },
      {
        step: "Procedure",
        description:
          "FUE or DHT performed under local anaesthesia in a single session, typically 6–8 hours.",
      },
      {
        step: "Aftercare",
        description:
          "Structured follow-up at day 1, week 1, month 3, month 6, and month 12 to track growth.",
      },
    ],
    faq: [
      {
        question: "How long does the procedure take?",
        answer:
          "Most sessions are 6–8 hours under local anaesthesia. You walk in and walk out the same day.",
      },
      {
        question: "When will I see results?",
        answer:
          "New growth typically begins at 3–4 months. Visible density improves through month 6, with final results at 12 months.",
      },
      {
        question: "Is it permanent?",
        answer:
          "Yes — transplanted follicles are taken from genetically resistant donor zones and continue to grow for life.",
      },
      {
        question: "Will it look natural?",
        answer:
          "Yes. Each graft is placed individually following your natural hairline, density, and angle. We deliberately design hairlines that age well.",
      },
    ],
  },
  {
    title: "PRP Hair Therapy",
    slug: "prp-hair-therapy",
    category: "hair",
    metaTitle: "PRP Hair Therapy — Platelet-Rich Plasma for Hair Loss",
    metaDescription:
      "Reduce hair fall and stimulate regrowth with Platelet-Rich Plasma (PRP) therapy at Dermapathy. A safe, in-clinic procedure backed by clinical evidence.",
    shortDescription:
      "Stimulate regrowth and slow hair fall using your own platelet-rich plasma.",
    longDescription:
      "PRP (Platelet-Rich Plasma) therapy uses growth factors from your own blood to stimulate dormant hair follicles, reduce shedding, and improve the calibre of existing hair. It is a non-surgical, evidence-backed protocol most effective in early-stage hair thinning and as a long-term complement to a hair transplant.",
    benefits: [
      "Non-surgical, in-clinic procedure (~45 minutes)",
      "Reduces shedding within 8–12 weeks",
      "Improves hair calibre and scalp health",
      "Excellent companion therapy after a transplant",
    ],
    process: [
      {
        step: "Assessment",
        description:
          "Scalp examination, hair pull test, and bloodwork to determine if PRP is right for you.",
      },
      {
        step: "Preparation",
        description:
          "A small blood draw is centrifuged to isolate platelet-rich plasma.",
      },
      {
        step: "Treatment",
        description:
          "Targeted micro-injections into thinning zones — usually under topical anaesthesia.",
      },
      {
        step: "Maintenance",
        description:
          "Initial protocol of 3–4 sessions, 4 weeks apart, then quarterly maintenance.",
      },
    ],
    faq: [
      {
        question: "Does it hurt?",
        answer:
          "Discomfort is minimal. We use topical anaesthesia and a fine needle technique.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Most patients see meaningful change after 3–4 monthly sessions, followed by quarterly maintenance.",
      },
      {
        question: "Can it replace a transplant?",
        answer:
          "PRP works best in early-stage thinning. Once follicles are fully miniaturised, a transplant is the more effective option.",
      },
    ],
  },
  {
    title: "Scalp Treatments",
    slug: "scalp-treatments",
    category: "hair",
    metaTitle: "Scalp Treatments — Dandruff, Itch & Scalp Health | Dermapathy",
    metaDescription:
      "Medical-grade scalp treatments for dandruff, seborrheic dermatitis, itch, and scalp inflammation — restoring a healthy foundation for hair growth.",
    shortDescription:
      "Medical scalp care that targets dandruff, irritation, and the root causes of poor hair health.",
    longDescription:
      "A healthy scalp is the foundation of healthy hair. Our scalp programme treats dandruff, seborrheic dermatitis, scalp psoriasis, and chronic itch using a combination of medicated formulations, in-clinic procedures, and lifestyle adjustments tailored to your skin type and hair concerns.",
    benefits: [
      "Targets dandruff and seborrheic dermatitis",
      "Calms itch and inflammation",
      "Strengthens the foundation for hair growth",
      "Personalised home-care plan",
    ],
    process: [
      {
        step: "Examination",
        description:
          "Trichoscopy, scalp imaging, and a clear diagnosis of the underlying condition.",
      },
      {
        step: "Plan",
        description:
          "Combination of medicated shampoos, topicals, and in-clinic sessions.",
      },
      {
        step: "Treatment",
        description:
          "Medicated peels, mesotherapy, or LED therapy depending on the indication.",
      },
      {
        step: "Review",
        description:
          "Follow-up at 4 and 12 weeks to refine the protocol as the scalp settles.",
      },
    ],
    faq: [
      {
        question: "How long until my scalp feels better?",
        answer:
          "Most patients feel relief from itch and flaking within two weeks. Deeper inflammation takes 6–12 weeks to fully resolve.",
      },
      {
        question: "Will I need treatment forever?",
        answer:
          "Many scalp conditions are chronic but very manageable. After the active phase, most patients move to a light maintenance routine.",
      },
    ],
  },

  // ───────── SKIN ─────────
  {
    title: "Skin Rejuvenation & Anti-Aging",
    slug: "skin-rejuvenation",
    category: "skin",
    metaTitle: "Skin Rejuvenation & Anti-Aging Treatments | Dermapathy",
    metaDescription:
      "Restore tone, texture, and youthful firmness with medical-grade skin rejuvenation — combining peels, microneedling, and customised topicals.",
    shortDescription:
      "Medical-grade rejuvenation for fine lines, dullness, and loss of firmness.",
    longDescription:
      "Our skin rejuvenation programme is designed to restore tone, texture, and firmness using a combination of medical-grade peels, microneedling, and customised prescription topicals. Each plan is built around your skin type, age, and concerns — and emphasises long-term skin health rather than quick fixes.",
    benefits: [
      "Smoother texture and brighter tone",
      "Visible reduction in fine lines",
      "Improved firmness and elasticity",
      "Customised prescription home routine",
    ],
    process: [
      {
        step: "Skin Analysis",
        description:
          "Digital skin analysis covering pigmentation, hydration, sebum, and elasticity.",
      },
      {
        step: "Plan",
        description:
          "A personalised in-clinic and at-home protocol with clear timelines.",
      },
      {
        step: "Treatment",
        description:
          "Series of in-clinic sessions — peel, microneedling, or LED — every 3–4 weeks.",
      },
      {
        step: "Maintenance",
        description: "Quarterly review to keep results compounding over time.",
      },
    ],
    faq: [
      {
        question: "When will I see a difference?",
        answer:
          "Brightness and texture improve within the first session. Fine lines and firmness need 6–12 weeks of consistent treatment.",
      },
      {
        question: "Is there downtime?",
        answer:
          "Most treatments have 24–48 hours of mild redness. We schedule around your social calendar.",
      },
    ],
  },
  {
    title: "Acne & Pigmentation",
    slug: "acne-pigmentation",
    category: "skin",
    metaTitle: "Acne & Pigmentation Treatment — Clear Skin Programme",
    metaDescription:
      "Evidence-based acne and pigmentation treatment combining medical topicals, peels, and laser to clear active acne, fade marks, and prevent recurrence.",
    shortDescription:
      "Clear active acne, fade marks, and prevent recurrence with a medical-grade protocol.",
    longDescription:
      "Acne and post-acne pigmentation are deeply personal — and rarely solved by a single product. Our protocol combines medical topicals, in-clinic peels, and laser treatments where indicated, addressing active breakouts, post-inflammatory pigmentation, and underlying triggers in parallel.",
    benefits: [
      "Reduces active breakouts within 4–6 weeks",
      "Fades post-acne marks and pigmentation",
      "Treats triggers — hormonal, dietary, lifestyle",
      "Long-term skin clarity, not short-term suppression",
    ],
    process: [
      {
        step: "Diagnosis",
        description:
          "Acne grading, pigmentation mapping, and review of triggers and history.",
      },
      {
        step: "Plan",
        description:
          "Prescription topicals plus a treatment cadence appropriate to your skin grade.",
      },
      {
        step: "Treatment",
        description:
          "Targeted peels, lasers, or extractions depending on the active concern.",
      },
      {
        step: "Maintenance",
        description:
          "Step-down protocol to keep skin clear without over-treating.",
      },
    ],
    faq: [
      {
        question: "Will it come back?",
        answer:
          "We treat for clearance and then gradually step down to a maintenance routine. The risk of recurrence is much lower with this approach.",
      },
      {
        question: "Are lasers safe for my skin tone?",
        answer:
          "Yes — we use technology calibrated for South Asian skin and conservative settings to minimise the risk of post-inflammatory pigmentation.",
      },
    ],
  },
  {
    title: "Laser Treatments",
    slug: "laser-treatments",
    category: "skin",
    metaTitle: "Laser Treatments — Hair Removal, Resurfacing & More",
    metaDescription:
      "Advanced laser treatments at Dermapathy — laser hair removal, fractional resurfacing, pigmentation lasers, and vascular lasers for safe, effective results.",
    shortDescription:
      "Advanced laser solutions for hair removal, resurfacing, pigmentation, and vascular concerns.",
    longDescription:
      "Our laser suite includes diode and Nd:YAG hair removal platforms, fractional resurfacing for texture, Q-switched lasers for pigmentation, and vascular lasers for redness. Each treatment is mapped to your skin type and concern — and supervised by a board-certified dermatologist throughout.",
    benefits: [
      "Safe for South Asian skin tones",
      "FDA-cleared platforms",
      "Customised energy settings per session",
      "Dermatologist-supervised throughout",
    ],
    process: [
      {
        step: "Consultation",
        description:
          "Skin typing, concern mapping, and a patch test where appropriate.",
      },
      {
        step: "Plan",
        description:
          "A clear schedule of sessions with realistic outcomes and downtime.",
      },
      {
        step: "Treatment",
        description:
          "In-clinic sessions, typically 30–45 minutes, in a comfortable setting.",
      },
      {
        step: "Aftercare",
        description:
          "Structured aftercare and SPF guidance to protect results.",
      },
    ],
    faq: [
      {
        question: "How many laser hair removal sessions do I need?",
        answer:
          "Most patients need 6–8 sessions, 4–6 weeks apart, followed by an annual touch-up.",
      },
      {
        question: "Is there downtime after fractional resurfacing?",
        answer:
          "Expect 3–5 days of mild redness and flaking. We plan around social and travel calendars.",
      },
    ],
  },
];

export const hairServices = services.filter((s) => s.category === "hair");
export const skinServices = services.filter((s) => s.category === "skin");

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): { slug: string }[] {
  return services.map((s) => ({ slug: s.slug }));
}
