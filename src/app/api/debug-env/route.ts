import { NextResponse } from "next/server";

// TEMPORARY — remove after confirming env vars
export async function GET() {
  return NextResponse.json({
    hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
    keyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 7) || null,
    hasOnboardingFee: !!process.env.STRIPE_PRICE_ONBOARDING_FEE,
    hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
    hasProvisionSecret: !!process.env.INTERNAL_PROVISION_SECRET,
  });
}
