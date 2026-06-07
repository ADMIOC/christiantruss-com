import type { ServiceKey } from "@/types/booking";
import type { Post } from "@/types/post";

export const imageAssets = {
  hero: "/brand/christian-truss-hero.png",
  cuts:
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=82",
  care:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=82",
  texture:
    "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1600&q=70",
};

export const marketStats = [
  { value: "$115B", label: "self-care and grooming market" },
  { value: "220K+", label: "barbershops shaping community" },
  { value: "2", label: "brand verticals under one standard" },
  { value: "1", label: "confidence-first client experience" },
];

export const services: Array<{
  key: ServiceKey;
  name: string;
  price: string;
  duration: string;
  description: string;
}> = [
  {
    key: "cut",
    name: "Classic Cut",
    price: "$45",
    duration: "45 min",
    description: "A tailored cut with consultation, shape, finish, and upkeep guidance.",
  },
  {
    key: "cut_beard",
    name: "Cut + Beard Sculpt",
    price: "$65",
    duration: "75 min",
    description: "A complete grooming appointment for the cut, beard, line, and profile.",
  },
  {
    key: "signature",
    name: "Signature Truss Experience",
    price: "$95",
    duration: "90 min",
    description: "Cut, beard detail, scalp treatment, and a premium reset experience.",
  },
  {
    key: "care_consult",
    name: "VIP Care Consultation",
    price: "$149",
    duration: "60 min",
    description: "A self-care consultation focused on routine, skin, hair, and confidence.",
  },
];

export const posts: Post[] = [
  {
    id: "post-1",
    slug: "why-your-fade-fades",
    title: "Why Your Fade Fades: The Science Behind the Perfect Cut",
    excerpt: "Growth pattern, cut geometry, and upkeep are the real reason a fade holds.",
    body:
      "A sharp fade is not just a moment in the chair. It is the result of hair density, head shape, guard progression, and the way the client maintains the cut between visits.",
    type: "blog",
    published: true,
    published_at: "2026-06-01T12:00:00.000Z",
    tags: ["cuts", "education"],
    created_at: "2026-06-01T12:00:00.000Z",
  },
  {
    id: "post-2",
    slug: "self-care-rituals-every-man-should-own",
    title: "5 Self-Care Rituals Every Man Should Own",
    excerpt: "Small routines that make the face, hair, and day feel intentional.",
    body:
      "Self-care is not about doing the most. It is about owning repeatable standards that make you feel clear, prepared, and present before you walk into the world.",
    type: "blog",
    published: true,
    published_at: "2026-06-02T12:00:00.000Z",
    tags: ["care", "routine"],
    created_at: "2026-06-02T12:00:00.000Z",
  },
  {
    id: "post-3",
    slug: "what-master-barbering-actually-means",
    title: "Truss The Cuts: What Master Barbering Actually Means",
    excerpt: "The difference between performing a service and practicing a craft.",
    body:
      "Master barbering lives in the consultation, the discipline of the blend, the respect for the client, and the ability to send someone back into life with more command.",
    type: "blog",
    published: true,
    published_at: "2026-06-03T12:00:00.000Z",
    tags: ["cuts", "craft"],
    created_at: "2026-06-03T12:00:00.000Z",
  },
];

export const vlogs: Post[] = [
  {
    id: "vlog-1",
    slug: "client-transformation-60-minutes",
    title: "Watch Me Transform a Client in 60 Minutes",
    excerpt: "A full service walk-through from consultation to finished profile.",
    body:
      "A practical session breakdown showing consultation, shape, detail work, and the final client reveal.",
    type: "vlog",
    video_url: "demo-client-transformation",
    thumbnail_url: imageAssets.cuts,
    published: true,
    published_at: "2026-06-04T12:00:00.000Z",
    tags: ["cuts", "vlog"],
    created_at: "2026-06-04T12:00:00.000Z",
  },
  {
    id: "vlog-2",
    slug: "morning-self-care-routine",
    title: "My Morning Self-Care Routine (Full Breakdown)",
    excerpt: "Christian breaks down the care routine that anchors the day.",
    body:
      "A complete look at grooming, hydration, skin, and mental reset habits that build a better day.",
    type: "vlog",
    video_url: "demo-care-routine",
    thumbnail_url: imageAssets.care,
    published: true,
    published_at: "2026-06-05T12:00:00.000Z",
    tags: ["care", "vlog"],
    created_at: "2026-06-05T12:00:00.000Z",
  },
];

export const testimonials = [
  "Christian does not just cut hair. He reads the person, the schedule, and the standard.",
  "The care side finally made grooming feel practical instead of complicated.",
  "Every appointment feels like a reset, not just maintenance.",
];
