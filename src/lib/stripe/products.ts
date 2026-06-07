export const stripeProducts = {
  cutsMonthly: {
    env: "STRIPE_CUTS_MONTHLY_PRICE_ID",
    label: "Truss The Cuts Monthly",
    price: "$29/mo",
  },
  careMonthly: {
    env: "STRIPE_CARE_MONTHLY_PRICE_ID",
    label: "Truss The Care Monthly",
    price: "$39/mo",
  },
  vipAnnual: {
    env: "STRIPE_VIP_ANNUAL_PRICE_ID",
    label: "VIP All-Access Annual",
    price: "$497/yr",
  },
  consult: {
    env: "STRIPE_CONSULT_PRICE_ID",
    label: "1:1 Care Consultation",
    price: "$149",
  },
  cutsCourse: {
    env: "STRIPE_CUTS_COURSE_PRICE_ID",
    label: "Master Cuts Course",
    price: "$197",
  },
} as const;

export function getPriceId(key: keyof typeof stripeProducts) {
  return process.env[stripeProducts[key].env];
}
