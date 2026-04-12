import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { priceId, planName, quantity = 1 } = body;

    if (!priceId || !planName) {
      return NextResponse.json(
        { error: "priceId and planName are required" },
        { status: 400 }
      );
    }

    const onboardingPriceId = process.env.STRIPE_PRICE_ONBOARDING_FEE;
    if (!onboardingPriceId) {
      return NextResponse.json(
        { error: "Onboarding fee price not configured" },
        { status: 500 }
      );
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      currency: "cad",
      line_items: [
        { price: priceId, quantity: Number(quantity) || 1 },
        { price: onboardingPriceId, quantity: 1 },
      ],
      allow_promotion_codes: true,
      billing_address_collection: "required",
      metadata: { planName },
      success_url: "https://foxsocial.ca/welcome?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://foxsocial.ca/#pricing",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    const message = error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
