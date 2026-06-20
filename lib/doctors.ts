// Clinic doctor profiles. Powers the /doctors page and Physician JSON-LD.
//
// IMPORTANT — credential fields below are intentionally LEFT BLANK where they
// could not be verified. Do NOT invent medical credentials. Fill these in with
// the real values, then they render automatically (empty fields stay hidden,
// matching the `reviews` convention in lib/site.ts).
//
// TODO(clinic): confirm and fill — qualification, registration, fellowship,
//   experienceYears, and add a professional photo at /public/doctors/isha-singh.jpg

export type Doctor = {
  name: string;
  slug: string;
  role: string;
  /** e.g. "MD, Dermatology, Venereology & Leprosy" — confirm exact degree. */
  qualification: string;
  /** NMC / State Medical Council registration number. Empty = hidden. */
  registration: string;
  /** Fellowship / additional training. Empty = hidden. */
  fellowship: string;
  /** e.g. "10+". Empty = hidden. */
  experienceYears: string;
  specialties: string[];
  /** Path under /public, e.g. "/doctors/isha-singh.jpg". Empty = initials shown. */
  image: string;
  bio: string[];
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Isha Singh",
    slug: "isha-singh",
    role: "Founder & Lead Dermatologist",
    qualification: "MD, Dermatology", // TODO(clinic): confirm exact qualification
    registration: "", // TODO(clinic): add medical council registration number
    fellowship: "", // TODO(clinic): add fellowship / specialty training, if any
    experienceYears: "", // TODO(clinic): add years of experience
    specialties: [
      "Hair transplant (FUE & Direct Hair Implantation)",
      "PRP hair therapy & scalp restoration",
      "Acne & pigmentation",
      "Lasers & skin rejuvenation",
    ],
    image: "", // TODO(clinic): add professional photo at /public/doctors/isha-singh.jpg
    bio: [
      "Dr. Isha Singh is the founder and lead dermatologist at Dermapathy, a specialist hair and skin clinic in Gomti Nagar, Lucknow. She leads every consultation and procedure personally — from hairline design and graft planning to medical-grade skin protocols.",
      "Her practice is built around long consultations, honest expectations, and techniques chosen to age well — never oversold. Patients consistently highlight her personalised treatment plans and attentive care.",
    ],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export const leadDoctor = doctors[0];
