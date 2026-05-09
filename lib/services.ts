export type Service = {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    title: "Ayurvedic Consultation",
    slug: "ayurvedic-consultation",
    metaTitle: "Ayurvedic Consultation — Personalized Dosha Analysis",
    metaDescription:
      "Book a one-on-one Ayurvedic consultation with experienced practitioners for dosha analysis, personalized herbal guidance, and a long-term wellness path.",
    shortDescription:
      "Personalized dosha analysis and wellness guidance from experienced Ayurvedic practitioners.",
    longDescription:
      "Our Ayurvedic consultations are rooted in classical pulse, tongue, and lifestyle assessment. Each session focuses on understanding your unique constitution, current imbalances, and goals — then translating that into a sustainable plan that fits modern life. We use natural herbs, dietary refinement, and daily rituals over quick fixes.",
    benefits: [
      "Personalized dosha and prakriti assessment",
      "Targeted herbal recommendations",
      "Lifestyle and routine refinement",
      "Long-term wellness roadmap",
    ],
    process: [
      {
        step: "Consultation",
        description:
          "An unhurried conversation about your health history, lifestyle, and concerns.",
      },
      {
        step: "Assessment",
        description:
          "Pulse, tongue, and constitutional analysis using classical Ayurvedic methods.",
      },
      {
        step: "Personalized Plan",
        description:
          "A practical plan covering diet, routine, herbal support, and daily practices.",
      },
      {
        step: "Follow-up",
        description:
          "Ongoing reviews to refine the plan as your body and routine evolve.",
      },
    ],
    faq: [
      {
        question: "How long is an Ayurvedic consultation?",
        answer:
          "Initial consultations typically run 60–75 minutes. Follow-ups are 30–45 minutes.",
      },
      {
        question: "Do I need to bring anything?",
        answer:
          "Recent reports if any, a list of current medications, and a brief note on your daily routine help us prepare.",
      },
      {
        question: "Is Ayurveda safe alongside modern medicine?",
        answer:
          "Yes, when guided by a qualified practitioner. We coordinate around existing treatments and never recommend stopping prescribed medication abruptly.",
      },
    ],
  },
  {
    title: "Yoga and Meditation Guidance",
    slug: "yoga-and-meditation-guidance",
    metaTitle: "Yoga and Meditation Guidance — Personalized Practice",
    metaDescription:
      "Personalized yoga and meditation programs tailored to your body, mind, and goals — taught by experienced teachers in the classical tradition.",
    shortDescription:
      "Personalized yoga and meditation programs designed around your body and goals.",
    longDescription:
      "We design yoga and meditation programs that respect your starting point — whether you are recovering from injury, building stamina, or seeking depth in practice. Sessions blend asana, pranayama, and meditation, with attention to breath and intention rather than performance.",
    benefits: [
      "Custom asana sequences for your body",
      "Breathwork to calm the nervous system",
      "Meditation techniques for daily life",
      "Sustainable, injury-aware progression",
    ],
    process: [
      {
        step: "Intake",
        description:
          "Understanding your physical history, goals, and current practice level.",
      },
      {
        step: "Practice Design",
        description:
          "A sequence built around your body, available time, and intentions.",
      },
      {
        step: "Guided Sessions",
        description:
          "One-on-one or small-group sessions with breath and posture coaching.",
      },
      {
        step: "Refinement",
        description:
          "Periodic adjustments as your practice deepens and life shifts.",
      },
    ],
    faq: [
      {
        question: "I am a complete beginner — is this for me?",
        answer:
          "Yes. Programs are designed from the ground up, starting with breath and gentle movement.",
      },
      {
        question: "How often should I practice?",
        answer:
          "Most students see real change with three to five short sessions per week, supported by daily breathwork.",
      },
    ],
  },
  {
    title: "Natural Wellness Programs",
    slug: "natural-wellness-programs",
    metaTitle: "Natural Wellness Programs — Holistic Health Plans",
    metaDescription:
      "Multi-week natural wellness programs that combine Ayurveda, yoga, nutrition, and lifestyle coaching for a complete holistic reset.",
    shortDescription:
      "Multi-week programs combining Ayurveda, yoga, nutrition, and lifestyle coaching.",
    longDescription:
      "Our wellness programs are structured journeys designed for people who want a complete, guided reset. Each program blends classical Ayurvedic principles with modern nutrition, yoga, and habit coaching, delivered over four to twelve weeks with regular check-ins.",
    benefits: [
      "Structured 4–12 week journey",
      "Integrated diet, movement, and rest",
      "Weekly check-ins and adjustments",
      "Lasting lifestyle change",
    ],
    process: [
      {
        step: "Discovery",
        description:
          "Understanding your goals, constraints, and what success means to you.",
      },
      {
        step: "Diagnosis",
        description:
          "A holistic assessment across diet, sleep, stress, and movement.",
      },
      {
        step: "Program",
        description:
          "A weekly plan with daily practices, meals, and reflection prompts.",
      },
      {
        step: "Follow-up Care",
        description:
          "Weekly reviews and adjustments, plus a closing plan for continued practice.",
      },
    ],
    faq: [
      {
        question: "Are these programs online or in person?",
        answer:
          "Both. Most clients work with us online, with optional in-person sessions where available.",
      },
      {
        question: "What if I miss a week?",
        answer:
          "The program flexes around your life. Missed sessions are rolled forward without judgment.",
      },
    ],
  },
  {
    title: "Diet and Lifestyle Planning",
    slug: "diet-and-lifestyle-planning",
    metaTitle: "Diet and Lifestyle Planning — Ayurvedic Nutrition",
    metaDescription:
      "Personalized diet and lifestyle plans grounded in Ayurvedic nutrition and modern food science — practical, sustainable, and tailored to you.",
    shortDescription:
      "Personalized food and routine plans grounded in Ayurvedic nutrition and modern science.",
    longDescription:
      "We build food and routine plans that work in your real kitchen and real schedule. Rather than restrictive diets, our plans focus on what to add, when to eat, and how to align your day with your body's natural rhythms.",
    benefits: [
      "Constitutional and seasonal eating guidance",
      "Practical recipes and meal structures",
      "Sleep and circadian rhythm support",
      "Sustainable habit-based change",
    ],
    process: [
      {
        step: "Profile",
        description:
          "A clear picture of your constitution, current diet, and lifestyle.",
      },
      {
        step: "Plan",
        description:
          "A weekly meal and routine framework — flexible, not rigid.",
      },
      {
        step: "Recipes",
        description:
          "Simple recipes and shopping guides that fit your kitchen.",
      },
      {
        step: "Refinement",
        description:
          "Iterative adjustments based on how your body responds.",
      },
    ],
    faq: [
      {
        question: "Will I have to give up the foods I love?",
        answer:
          "Rarely. We focus on balance and timing, not elimination, unless a specific food is clearly causing harm.",
      },
      {
        question: "Do you support vegetarian and non-vegetarian diets?",
        answer:
          "Yes. Plans are built around what you actually eat, with thoughtful adjustments either way.",
      },
    ],
  },
  {
    title: "Stress Management",
    slug: "stress-management",
    metaTitle: "Stress Management — Mind-Body Wellness Programs",
    metaDescription:
      "Calm the nervous system and build long-term resilience through Ayurveda, breathwork, meditation, and lifestyle practices.",
    shortDescription:
      "Calm the nervous system and build resilience with breathwork, meditation, and lifestyle care.",
    longDescription:
      "Our stress care combines breathwork, meditation, herbal support, and small daily practices that compound into a calmer baseline. The aim is not just relief, but a more resilient nervous system over time.",
    benefits: [
      "Daily breathwork and meditation routines",
      "Targeted herbal and dietary support",
      "Sleep restoration practices",
      "Tools for high-pressure days",
    ],
    process: [
      {
        step: "Listening",
        description:
          "Understanding the texture of your stress and what triggers it.",
      },
      {
        step: "Diagnosis",
        description:
          "Mapping how stress is showing up in body, sleep, and energy.",
      },
      {
        step: "Practice",
        description:
          "A short daily practice, plus tools for acute moments.",
      },
      {
        step: "Follow-up",
        description:
          "Weekly check-ins to keep practice realistic and effective.",
      },
    ],
    faq: [
      {
        question: "How quickly will I feel a difference?",
        answer:
          "Many people feel calmer within the first week. Lasting nervous system change typically takes six to twelve weeks of consistent practice.",
      },
      {
        question: "Can I combine this with therapy?",
        answer:
          "Absolutely. Our practices complement, not replace, mental health care.",
      },
    ],
  },
  {
    title: "Preventive Health Guidance",
    slug: "preventive-health-guidance",
    metaTitle: "Preventive Health Guidance — Proactive Wellness Care",
    metaDescription:
      "Proactive Ayurvedic guidance to support immunity, energy, and long-term wellbeing — designed for people who want to stay well, not just get well.",
    shortDescription:
      "Proactive guidance for immunity, energy, and long-term wellbeing.",
    longDescription:
      "Preventive care is at the heart of Ayurveda. This program is for people who feel mostly well but want to stay that way — through seasonal routines, periodic detox, and habits that protect immunity and energy.",
    benefits: [
      "Seasonal routine planning",
      "Immunity and digestion support",
      "Energy and sleep optimization",
      "Periodic gentle detox protocols",
    ],
    process: [
      {
        step: "Baseline",
        description:
          "Establishing where you are and what wellbeing looks like for you.",
      },
      {
        step: "Plan",
        description:
          "A seasonal calendar of practices, foods, and gentle resets.",
      },
      {
        step: "Practice",
        description:
          "Light, sustainable daily and weekly habits.",
      },
      {
        step: "Review",
        description:
          "Quarterly reviews to adjust with the seasons and your life.",
      },
    ],
    faq: [
      {
        question: "Do I need to be sick to start?",
        answer:
          "No — this program is specifically for people who want to maintain wellness, not recover from illness.",
      },
      {
        question: "How often do we meet?",
        answer:
          "Typically once a quarter, with optional check-ins between seasons.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): { slug: string }[] {
  return services.map((s) => ({ slug: s.slug }));
}
