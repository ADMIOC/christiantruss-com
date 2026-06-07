import Stripe from "stripe";

export function getStripeServerClient() {
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key) {
    return null;
  }

  return new Stripe(key, {
    apiVersion: "2023-10-16",
  });
}
