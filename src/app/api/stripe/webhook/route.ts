import { NextResponse } from "next/server";
import { sendBrevoEmail } from "@/lib/brevo/email";
import { getStripeServerClient } from "@/lib/stripe/client";
import { createSupabaseServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const productToPlan: Record<string, string> = {
  cutsMonthly: "cuts_monthly",
  careMonthly: "care_monthly",
  vipAnnual: "vip_annual",
};

type SubscriptionLike = {
  id: string;
  metadata: Record<string, string>;
  status: string;
  current_period_end: number;
};

type CheckoutSessionLike = {
  subscription?: string | { id?: string } | null;
};

type InvoiceLike = {
  subscription?: string | { id?: string } | null;
  customer_email?: string | null;
};

type StripeEventLike = {
  type: string;
  data: {
    object: unknown;
  };
};

async function upsertMembershipFromSubscription(subscription: SubscriptionLike) {
  const supabase = createSupabaseServiceClient();

  if (!supabase) {
    return;
  }

  const product = subscription.metadata.product || "vipAnnual";
  const plan = productToPlan[product] || "vip_annual";

  await supabase.from("memberships").upsert(
    {
      stripe_subscription_id: subscription.id,
      plan,
      status: subscription.status === "active" ? "active" : "past_due",
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    },
    { onConflict: "stripe_subscription_id" },
  );
}

export async function POST(request: Request) {
  const stripe = getStripeServerClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !webhookSecret) {
    return NextResponse.json({ received: true, mode: "demo" });
  }

  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: StripeEventLike;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret,
    ) as StripeEventLike;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Webhook verification failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const supabase = createSupabaseServiceClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as CheckoutSessionLike;
      const subscriptionId =
        typeof session.subscription === "string" ? session.subscription : session.subscription?.id;

      if (subscriptionId) {
        const subscription = (await stripe.subscriptions.retrieve(
          subscriptionId,
        )) as SubscriptionLike;
        await upsertMembershipFromSubscription(subscription);
      }
      break;
    }
    case "customer.subscription.updated": {
      await upsertMembershipFromSubscription(event.data.object as SubscriptionLike);
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object as SubscriptionLike;
      if (supabase) {
        await supabase
          .from("memberships")
          .update({ status: "cancelled" })
          .eq("stripe_subscription_id", subscription.id);
      }
      break;
    }
    case "invoice.payment_failed": {
      const invoice = event.data.object as InvoiceLike;
      const subscriptionId =
        typeof invoice.subscription === "string" ? invoice.subscription : invoice.subscription?.id;

      if (subscriptionId && supabase) {
        await supabase
          .from("memberships")
          .update({ status: "past_due" })
          .eq("stripe_subscription_id", subscriptionId);
      }

      if (typeof invoice.customer_email === "string") {
        await sendBrevoEmail({
          to: invoice.customer_email,
          subject: "Christian Truss membership payment needs attention",
          html: "<p>Your membership payment needs attention. Please update billing from the client portal.</p>",
        });
      }
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
