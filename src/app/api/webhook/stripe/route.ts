import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "");
}

const PROVISION_URL = "https://app.foxmortgage.ca/api/internal/provision-subscriber";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    console.error("stripe webhook: missing signature");
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Signature verification failed";
    console.error("stripe webhook: signature verification failed:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email || "";
    const name = session.customer_details?.name || "";
    const planName = session.metadata?.planName || "Beta";
    const stripeCustomerId = typeof session.customer === "string" ? session.customer : "";
    const stripeSubscriptionId = typeof session.subscription === "string" ? session.subscription : "";

    console.log(`stripe webhook: checkout completed for ${email} (${planName})`);

    // Forward to app.foxmortgage.ca to provision subscriber
    const internalSecret = process.env.INTERNAL_PROVISION_SECRET || "";
    try {
      const res = await fetch(PROVISION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-internal-secret": internalSecret,
        },
        body: JSON.stringify({
          email,
          name,
          planName,
          stripeCustomerId,
          stripeSubscriptionId,
        }),
      });

      const result = await res.json();
      console.log("stripe webhook: provision result:", result);
    } catch (provisionError) {
      console.error("stripe webhook: provision call failed:", provisionError);
    }
  }

  // Always return 200 to acknowledge receipt
  return NextResponse.json({ received: true });
}
