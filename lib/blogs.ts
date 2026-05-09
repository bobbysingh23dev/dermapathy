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
    title: "FUE vs DHT — Which Hair Transplant Technique Is Right for You?",
    slug: "fue-vs-dht-hair-transplant",
    metaTitle:
      "FUE vs DHT Hair Transplant — Which Technique Is Right for You?",
    metaDescription:
      "A clear, dermatologist-written comparison of FUE and DHT hair transplant techniques — how each works, who they suit, and what results to expect.",
    excerpt:
      "Both FUE and DHT can deliver excellent results — but they suit different patients. Here is how we choose between them in our practice.",
    publishedDate: "2026-04-22",
    author: "Dr. Aarav Mehta",
    category: "Hair Transplant",
    readingTime: "7 min read",
    content: [
      {
        heading: "How FUE works",
        body: "Follicular Unit Extraction (FUE) harvests individual follicular units from the donor area using a tiny circular punch. The grafts are then implanted one by one into the recipient zone. There are no linear scars and recovery is quick — most patients return to office work within a week.",
      },
      {
        heading: "How DHT (Direct Hair Transplant) differs",
        body: "DHT is a refinement of FUE in which extracted grafts are implanted immediately, without an intermediate holding step. This shortens the time grafts spend out of the body, which can improve survival rates and growth density in the right hands.",
      },
      {
        heading: "Who suits which technique",
        body: "FUE is the workhorse — appropriate for most patients seeking a natural restoration. DHT shines when graft survival needs to be maximised, such as in cases with limited donor area or tight density goals. Your dermatologist will recommend the right approach after a scalp assessment.",
      },
      {
        heading: "Results and timelines",
        body: "Whichever technique is chosen, the timeline is similar — initial shedding around weeks 2–4, new growth from month 3, visible density at month 6, and final result at month 12.",
      },
    ],
  },
  {
    title: "What Actually Causes Adult Acne — A Dermatologist's View",
    slug: "what-causes-adult-acne",
    metaTitle: "What Actually Causes Adult Acne — A Dermatologist's View",
    metaDescription:
      "A dermatologist explains the real drivers of adult acne — hormones, skin barrier, diet, and stress — and the order to treat them in.",
    excerpt:
      "Adult acne is rarely about one thing. It is usually a combination — and treating it well means addressing the right driver first.",
    publishedDate: "2026-04-08",
    author: "Dr. Meera Iyer",
    category: "Skin Care",
    readingTime: "6 min read",
    content: [
      {
        heading: "Hormones, even when bloodwork looks normal",
        body: "The most common driver of adult acne in women is androgen sensitivity at the follicle — even when serum hormone levels are within range. This is why oral contraceptives, spironolactone, and topical anti-androgens often outperform standard topicals.",
      },
      {
        heading: "Skin barrier damage from over-treatment",
        body: "Many patients arrive after months of layering harsh actives — retinoids, acids, scrubs, salicylic washes. The skin barrier is exhausted, the microbiome is disrupted, and acne is worse, not better. Step one in these cases is barrier repair, not more actives.",
      },
      {
        heading: "Diet, but not the foods you'd expect",
        body: "Whey protein, high-glycemic foods, and certain dairy patterns are far more strongly linked to adult acne than chocolate or fried food in the literature. Patterns matter more than single ingredients.",
      },
      {
        heading: "What to do first",
        body: "Repair the barrier for 2–4 weeks before introducing new actives. Identify the dominant driver — hormonal, inflammatory, or comedonal — and treat that first. Stop layering products you read about online.",
      },
    ],
  },
  {
    title: "PRP for Hair Loss — When It Works, and When It Doesn't",
    slug: "prp-for-hair-loss",
    metaTitle: "PRP for Hair Loss — When It Works, and When It Doesn't",
    metaDescription:
      "Platelet-Rich Plasma can meaningfully reduce hair fall — but only in the right patient. Here is who PRP suits and who is better served by other options.",
    excerpt:
      "PRP works beautifully for some patients and almost not at all for others. The difference is patient selection.",
    publishedDate: "2026-03-18",
    author: "Dr. Aarav Mehta",
    category: "Hair Care",
    readingTime: "5 min read",
    content: [
      {
        heading: "Who PRP works best for",
        body: "Early-stage androgenetic alopecia, telogen effluvium recovery, and as a companion therapy after a hair transplant. In these settings, PRP can reduce shedding within 8–12 weeks and improve hair calibre over six months.",
      },
      {
        heading: "Who PRP is wrong for",
        body: "Advanced miniaturisation, scarring alopecia, and very late-stage hair loss are not good candidates. In these cases, PRP can give a small temporary improvement but is not a long-term solution.",
      },
      {
        heading: "What a real protocol looks like",
        body: "A clinical PRP protocol is 3–4 sessions four weeks apart, then quarterly maintenance. Single-session PRP advertised in salons rarely produces results.",
      },
    ],
  },
  {
    title: "Sunscreen for Indian Skin — A Practical Guide",
    slug: "sunscreen-for-indian-skin",
    metaTitle: "Sunscreen for Indian Skin — A Practical Dermatologist's Guide",
    metaDescription:
      "How to choose, apply, and reapply sunscreen for Indian skin — and why it is the single most effective anti-aging step you can take.",
    excerpt:
      "Sunscreen is the single most effective anti-aging product available. Here is how to choose and use one that actually works.",
    publishedDate: "2026-02-28",
    author: "Dr. Meera Iyer",
    category: "Skin Care",
    readingTime: "6 min read",
    content: [
      {
        heading: "What to look for",
        body: "A broad-spectrum sunscreen with SPF 30–50, PA+++ or higher, and a formulation you actually enjoy wearing. Tinted mineral sunscreens often suit Indian skin tones better — they avoid the white cast of pure mineral filters.",
      },
      {
        heading: "How much to apply",
        body: "Roughly two finger-lengths of product across the face and neck. Most people apply a quarter of what's needed and wonder why they still pigment.",
      },
      {
        heading: "Reapplication",
        body: "Every 2–3 hours of sun exposure. For office settings, once at noon is usually enough. For outdoor days, set an alarm.",
      },
      {
        heading: "Sunscreen and pigmentation",
        body: "If you are treating melasma or post-inflammatory pigmentation, sunscreen is non-negotiable. Without it, no other treatment — laser, peels, or topicals — will hold.",
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
