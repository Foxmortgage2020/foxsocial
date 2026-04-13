import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "");
}

/* Resolve price ID from plan + tier + period using env vars.
   Env var naming convention: STRIPE_PRICE_{PLAN}_{TIER}_{PERIOD}
   e.g. STRIPE_PRICE_ESSENTIAL_BETA_MONTHLY */
function resolvePriceId(planKey: string, tier: string, period: string): string | undefined {
  const PRICE_MAP: Record<string, string | undefined> = {
    essential_beta_monthly:     process.env.STRIPE_PRICE_ESSENTIAL_BETA_MONTHLY,
    essential_beta_annual:      process.env.STRIPE_PRICE_ESSENTIAL_BETA_ANNUAL,
    essential_regular_monthly:  process.env.STRIPE_PRICE_ESSENTIAL_MONTHLY,
    essential_regular_annual:   process.env.STRIPE_PRICE_ESSENTIAL_ANNUAL,
    growth_beta_monthly:        process.env.STRIPE_PRICE_GROWTH_BETA_MONTHLY,
    growth_beta_annual:         process.env.STRIPE_PRICE_GROWTH_BETA_ANNUAL,
    growth_regular_monthly:     process.env.STRIPE_PRICE_GROWTH_MONTHLY,
    growth_regular_annual:      process.env.STRIPE_PRICE_GROWTH_ANNUAL,
    signature_beta_monthly:     process.env.STRIPE_PRICE_SIGNATURE_BETA_MONTHLY,
    signature_beta_annual:      process.env.STRIPE_PRICE_SIGNATURE_BETA_ANNUAL,
    signature_regular_monthly:  process.env.STRIPE_PRICE_SIGNATURE_MONTHLY,
    signature_regular_annual:   process.env.STRIPE_PRICE_SIGNATURE_ANNUAL,
    enterprise_beta_monthly:    process.env.STRIPE_PRICE_ENTERPRISE_BETA_MONTHLY,
    enterprise_beta_annual:     process.env.STRIPE_PRICE_ENTERPRISE_BETA_ANNUAL,
    enterprise_regular_monthly: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY,
    enterprise_regular_annual:  process.env.STRIPE_PRICE_ENTERPRISE_ANNUAL,
  };

  const key = `${planKey}_${tier}_${period}`;
  return PRICE_MAP[key];
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Accept either new format (planKey+tier+period) or legacy (priceId)
    const { planKey, tier, period, planName, quantity = 1, priceId: legacyPriceId } = body;

    // Resolve price ID: prefer server-side lookup, fall back to legacy client-sent ID
    const priceId = (planKey && tier && period)
      ? resolvePriceId(planKey, tier, period)
      : legacyPriceId;

    if (!priceId) {
      const key = planKey ? `${planKey}_${tier}_${period}` : "unknown";
      console.error(`No price ID configured for: ${key}`);
      return NextResponse.json(
        { error: `No price configured for ${key}. Please contact support.` },
        { status: 400 }
      );
    }

    if (!planName) {
      return NextResponse.json(
        { error: "planName is required" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is not set");
      return NextResponse.json(
        { error: "Payment system not configured. Please contact support." },
        { status: 500 }
      );
    }

    const onboardingPriceId = process.env.STRIPE_PRICE_ONBOARDING_FEE;
    if (!onboardingPriceId) {
      console.error("STRIPE_PRICE_ONBOARDING_FEE is not set");
      return NextResponse.json(
        { error: "Onboarding fee not configured. Please contact support." },
        { status: 500 }
      );
    }

    console.log("Checkout:", { planKey, tier, period, priceId: priceId.substring(0, 15) + "...", quantity });

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
