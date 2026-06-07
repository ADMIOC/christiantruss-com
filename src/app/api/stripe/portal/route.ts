import { NextResponse } from "next/server";
import { getStripeServerClient } from "@/lib/stripe/client";

export async function GET(request: Request) {
  const stripe = getStripeServerClient();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const returnUrl =
    process.env.STRIPE_CUSTOMER_PORTAL_RETURN_URL || `${siteUrl}/portal/membership`;
  const customer = new URL(request.url).searchParams.get("customer");

  if (!stripe || !customer) {
    return NextResponse.redirect(`${siteUrl}/portal/membership?billing=demo`);
  }

  const session = await stripe.billingPortal.sessions.create({
    customer,
    return_url: returnUrl,
  });

  return NextResponse.redirect(session.url);
}
