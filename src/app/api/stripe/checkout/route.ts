import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripeServerClient } from "@/lib/stripe/client";
import { getPriceId, stripeProducts } from "@/lib/stripe/products";

const checkoutSchema = z.object({
  product: z.enum(["cutsMonthly", "careMonthly", "vipAnnual", "consult", "cutsCourse"]),
});

async function createCheckout(product: keyof typeof stripeProducts) {
  const stripe = getStripeServerClient();
  const price = getPriceId(product);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!stripe || !price) {
    return {
      url: `${siteUrl}/book/confirm?service=${product}&booking=stripe-demo`,
      mode: "demo",
    };
  }

  const isRecurring = ["cutsMonthly", "careMonthly", "vipAnnual"].includes(product);
  const session = await stripe.checkout.sessions.create({
    mode: isRecurring ? "subscription" : "payment",
    line_items: [{ price, quantity: 1 }],
    success_url: `${siteUrl}/book/confirm?service=${product}&booking={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/book`,
  });

  return { url: session.url || `${siteUrl}/book`, mode: "live" };
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const product = checkoutSchema.safeParse({
    product: url.searchParams.get("product"),
  });

  if (!product.success) {
    return NextResponse.redirect(new URL("/book", request.url));
  }

  const checkout = await createCheckout(product.data.product);
  return NextResponse.redirect(checkout.url);
}

export async function POST(request: Request) {
  const payload = checkoutSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const checkout = await createCheckout(payload.data.product);
  return NextResponse.json(checkout);
}
