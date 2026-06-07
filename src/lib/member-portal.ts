export const memberProfile = {
  name: "Marcus Reed",
  memberSince: "March 2026",
  plan: "VIP All-Access",
  status: "active",
  nextBillingDate: "July 1, 2026",
  barberNotes:
    "Prefers a low taper with clean beard structure. Skin tends dry after travel.",
  careGoal: "Keep the cut sharp for work weeks and simplify the morning routine.",
};

export const memberStats = [
  { label: "Care score", value: "82", helper: "12 points up this month" },
  { label: "Visits", value: "7", helper: "3 signature experiences" },
  { label: "Resources", value: "14", helper: "4 saved for later" },
  { label: "Streak", value: "9d", helper: "morning care check-ins" },
];

export const memberAppointments = [
  {
    id: "apt-001",
    service: "Signature Truss Experience",
    date: "June 18, 2026",
    time: "10:30 AM",
    status: "confirmed",
    price: "$95",
    notes: "Scalp treatment + beard line. Refresh travel routine.",
  },
  {
    id: "apt-002",
    service: "Classic Cut",
    date: "May 30, 2026",
    time: "3:30 PM",
    status: "completed",
    price: "$45",
    notes: "Low taper, natural neckline, product-light finish.",
  },
  {
    id: "apt-003",
    service: "VIP Care Consultation",
    date: "May 12, 2026",
    time: "12:00 PM",
    status: "completed",
    price: "$149",
    notes: "Built morning and travel care routine.",
  },
];

export const routineTasks = [
  {
    id: "routine-1",
    label: "Hydrate + cleanse",
    cadence: "Daily AM",
    status: "done",
    detail: "Light cleanser, lukewarm rinse, no harsh scrub.",
  },
  {
    id: "routine-2",
    label: "Moisturizer + SPF",
    cadence: "Daily AM",
    status: "due",
    detail: "Use SPF before commute or outdoor work.",
  },
  {
    id: "routine-3",
    label: "Beard oil",
    cadence: "3x/week",
    status: "done",
    detail: "Two drops, comb through, shape edge with palm.",
  },
  {
    id: "routine-4",
    label: "Cut maintenance check",
    cadence: "Weekly",
    status: "due",
    detail: "Review neckline, sideburns, beard connection, and product buildup.",
  },
];

export const memberResources = [
  {
    id: "res-1",
    title: "Fade Upkeep Checklist",
    type: "PDF guide",
    vertical: "Cuts",
    length: "8 min",
    status: "saved",
    description: "What to check at day 3, day 7, and day 14 after a fresh cut.",
  },
  {
    id: "res-2",
    title: "Weekly Self-Care Audit",
    type: "Worksheet",
    vertical: "Care",
    length: "12 min",
    status: "new",
    description: "A simple scoring sheet for skin, hair, sleep, and energy.",
  },
  {
    id: "res-3",
    title: "Beard Shape Maintenance",
    type: "Video",
    vertical: "Cuts",
    length: "6 min",
    status: "watched",
    description: "Keep cheek line, jaw line, and beard density balanced between visits.",
  },
  {
    id: "res-4",
    title: "Morning Routine Breakdown",
    type: "Video",
    vertical: "Care",
    length: "11 min",
    status: "new",
    description: "Christian's practical sequence for a cleaner start to the day.",
  },
  {
    id: "res-5",
    title: "Travel Grooming Kit",
    type: "Checklist",
    vertical: "Care",
    length: "5 min",
    status: "saved",
    description: "A compact kit for keeping your standard when you are away from home.",
  },
  {
    id: "res-6",
    title: "Product-Light Styling",
    type: "Audio note",
    vertical: "Cuts",
    length: "4 min",
    status: "new",
    description: "How to finish the cut without weighing it down.",
  },
];

export const membershipBenefits = [
  "Priority booking windows",
  "Gated Cuts and Care library",
  "Monthly routine audit",
  "Subscriber-only video breakdowns",
  "Stripe customer portal billing",
];

export const recommendedNextActions = [
  "Confirm June 18 appointment details",
  "Complete the weekly self-care audit",
  "Watch beard maintenance before next lineup",
];
