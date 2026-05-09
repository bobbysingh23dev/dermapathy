export type BlogPost = {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: { heading: string; body: string }[];
  publishedDate: string;
  author: string;
  category: string;
  readingTime: string;
};

export const blogs: BlogPost[] = [
  {
    title: "Understanding Your Dosha: A Beginner's Guide to Ayurveda",
    slug: "understanding-your-dosha",
    metaTitle: "Understanding Your Dosha — A Beginner's Guide to Ayurveda",
    metaDescription:
      "Learn the fundamentals of Ayurvedic doshas — Vata, Pitta, and Kapha — and how knowing your constitution helps shape food, routine, and wellness choices.",
    excerpt:
      "Ayurveda begins with a simple idea — that each of us is built differently, and that wellness comes from understanding that difference.",
    publishedDate: "2026-04-12",
    author: "Dr. Aarav Mehta",
    category: "Ayurveda Basics",
    readingTime: "6 min read",
    content: [
      {
        heading: "What is a dosha?",
        body: "In Ayurveda, every person carries a unique combination of three biological energies — Vata, Pitta, and Kapha. These doshas govern how we move, digest, sleep, and respond to stress. Knowing your dominant dosha is the first step toward understanding why certain foods, climates, and routines work for you and others don't.",
      },
      {
        heading: "Vata, Pitta, and Kapha at a glance",
        body: "Vata is associated with movement, creativity, and quickness. Pitta governs metabolism, focus, and transformation. Kapha brings steadiness, strength, and patience. Most people are a blend of two, with one tending to lead.",
      },
      {
        heading: "Why constitution matters",
        body: "Generic wellness advice often fails because it ignores constitution. A diet that energizes one person can disturb another. Once you know your dosha, food, sleep, and movement choices become far more precise — and far easier to sustain.",
      },
      {
        heading: "Where to begin",
        body: "Start by observing — your appetite, sleep, energy curves, and how you respond to weather and stress. Pair these observations with a thoughtful consultation. The combination of self-observation and trained guidance creates a starting point you can actually act on.",
      },
    ],
  },
  {
    title: "The Quiet Power of a Morning Routine",
    slug: "the-quiet-power-of-a-morning-routine",
    metaTitle: "The Quiet Power of a Morning Routine — Ayurvedic Dinacharya",
    metaDescription:
      "How an Ayurvedic morning routine — Dinacharya — supports digestion, mental clarity, and long-term wellbeing in a few simple, repeatable steps.",
    excerpt:
      "The first hour of the day shapes the rest of it. Ayurveda has known this for thousands of years.",
    publishedDate: "2026-03-28",
    author: "Dr. Meera Iyer",
    category: "Lifestyle",
    readingTime: "5 min read",
    content: [
      {
        heading: "Why mornings matter",
        body: "Ayurveda places enormous weight on the first hour after waking. This is when digestion, mood, and energy patterns get set for the day. A good morning is not about being productive — it is about entering the day with steadiness.",
      },
      {
        heading: "A simple Dinacharya",
        body: "A classical morning routine includes warm water, gentle movement, breath work, and a slow, warm meal. Each element is small. Together, they create a rhythm the body can rely on.",
      },
      {
        heading: "Make it your own",
        body: "The point is consistency, not perfection. Pick three small practices you can keep for thirty days. Notice what changes. Adjust slowly.",
      },
    ],
  },
  {
    title: "Foods That Calm the Nervous System",
    slug: "foods-that-calm-the-nervous-system",
    metaTitle: "Foods That Calm the Nervous System — Ayurvedic Nutrition",
    metaDescription:
      "Discover Ayurvedic foods and meal patterns that support a calm nervous system, better sleep, and steadier energy through the day.",
    excerpt:
      "Some foods quietly settle the nervous system. Others quietly stir it up. Knowing the difference changes everything.",
    publishedDate: "2026-03-10",
    author: "Dr. Aarav Mehta",
    category: "Nutrition",
    readingTime: "7 min read",
    content: [
      {
        heading: "The food–nervous system connection",
        body: "What we eat directly shapes our nervous system through the gut, blood sugar, and inflammatory load. Ayurveda has long recognized this — long before modern science caught up.",
      },
      {
        heading: "Calming foods",
        body: "Warm, cooked, slightly oily, lightly spiced meals tend to calm the system. Think of stews, soups, ghee-cooked grains, and warm milk with a touch of cardamom. Avoid cold, raw, or heavily processed foods when stress is high.",
      },
      {
        heading: "Eating rhythm matters",
        body: "Three steady meals at consistent times often does more for the nervous system than any single 'superfood'. Predictability is medicine.",
      },
    ],
  },
  {
    title: "Why Breath Work Is the Fastest Way to Calm",
    slug: "why-breath-work-is-the-fastest-way-to-calm",
    metaTitle: "Why Breath Work Is the Fastest Way to Calm — Pranayama",
    metaDescription:
      "A clear introduction to pranayama — why slow, conscious breathing calms the nervous system faster than almost any other tool.",
    excerpt:
      "Breath is the only autonomic system you can take direct control of. That makes it powerful.",
    publishedDate: "2026-02-22",
    author: "Dr. Meera Iyer",
    category: "Practice",
    readingTime: "4 min read",
    content: [
      {
        heading: "The breath–stress loop",
        body: "When we are stressed, our breath shortens. When our breath shortens, the body assumes there is danger, and stress deepens. The loop runs in both directions, which means we can also reverse it intentionally.",
      },
      {
        heading: "A simple practice",
        body: "Inhale for four counts. Exhale for six. Repeat for two minutes. The slightly longer exhale is the key — it engages the parasympathetic system, which is what brings the body into calm.",
      },
      {
        heading: "When to use it",
        body: "Before difficult conversations, after long screen sessions, on the way to sleep. The practice is small enough to do anywhere and reliable enough to lean on.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs(): { slug: string }[] {
  return blogs.map((b) => ({ slug: b.slug }));
}

export function getRelatedBlogs(currentSlug: string, limit = 3): BlogPost[] {
  return blogs.filter((b) => b.slug !== currentSlug).slice(0, limit);
}
