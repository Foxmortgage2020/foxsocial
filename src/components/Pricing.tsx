"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

/* ── Price ID map: [plan][tier][period] ── */
const PRICE_IDS: Record<string, Record<string, Record<string, string>>> = {
  essential: {
    beta:    { monthly: "price_1TLA9jJDc6IlYEtZgZtkMCBK", annual: "price_1TLTfFJDc6IlYEtZRDku3io8" },
    regular: { monthly: "price_1TLSETJDc6IlYEtZFulWIB6M", annual: "price_1TLTSCJDc6IlYEtZZ4SFdWzm" },
  },
  growth: {
    beta:    { monthly: "price_1TLABkJDc6IlYEtZnctFbNCZ", annual: "price_1TLTUxJDc6IlYEtZ954H4LFR" },
    regular: { monthly: "price_1TLTVJJDc6IlYEtZz2vlE2Rm", annual: "price_1TLTVpJDc6IlYEtZhOmKdCg9" },
  },
  signature: {
    beta:    { monthly: "price_1TLTblJDc6IlYEtZzdn6Yoj3", annual: "price_1TLTcGJDc6IlYEtZgCArQsf1" },
    regular: { monthly: "price_1TLTcaJDc6IlYEtZpj1cvRT5", annual: "price_1TLTcxJDc6IlYEtZpFCV1REF" },
  },
  enterprise: {
    beta:    { monthly: "price_1TLTeWJDc6IlYEtZvdtXFaiZ", annual: "price_1TLTfFJDc6IlYEtZRDku3io8" },
    regular: { monthly: "price_1TLTeqJDc6IlYEtZfxxRbFJm", annual: "price_1TLTfeJDc6IlYEtZCaMjvFsO" },
  },
};

/* ── Pricing amounts ── */
interface PriceSet { monthly: number; annual: number; annualTotal: number; }
const PRICES: Record<string, Record<string, PriceSet>> = {
  essential: {
    beta:    { monthly: 37,  annual: 31,  annualTotal: 372  },
    regular: { monthly: 97,  annual: 81,  annualTotal: 972  },
  },
  growth: {
    beta:    { monthly: 97,  annual: 81,  annualTotal: 972  },
    regular: { monthly: 197, annual: 164, annualTotal: 1968 },
  },
  signature: {
    beta:    { monthly: 147, annual: 122, annualTotal: 1464 },
    regular: { monthly: 297, annual: 247, annualTotal: 2964 },
  },
  enterprise: {
    beta:    { monthly: 77,  annual: 64,  annualTotal: 768  },
    regular: { monthly: 147, annual: 122, annualTotal: 1464 },
  },
};

/* ── Plan data ── */
const plans = [
  {
    key: "essential",
    name: "Essential",
    platforms: "LinkedIn only",
    featured: false,
    perSeat: false,
    desc: "Perfect for professionals who want to build authority on LinkedIn without the time commitment. We research, write, and schedule your content every week \u2014 you spend about 10 minutes adding your voice.",
    features: [
      "8\u201310 posts per month",
      "2 carousels per month",
      "Weekly script delivery",
      "Metricool scheduling",
    ],
  },
  {
    key: "growth",
    name: "Growth",
    platforms: "LinkedIn + Instagram + TikTok",
    featured: true,
    perSeat: false,
    desc: "For professionals ready to dominate across multiple platforms. Everything in Essential, plus Instagram carousels, TikTok reels, and more video scripts \u2014 all automated and published in your voice every week.",
    features: [
      "16\u201320 posts per month",
      "4 carousels per month",
      "4 video scripts + drafts",
      "Multi-platform scheduling",
    ],
  },
  {
    key: "signature",
    name: "Signature",
    platforms: "All platforms",
    featured: false,
    perSeat: false,
    desc: "Our most complete personal brand package. Full multi-platform publishing including YouTube content intelligence, maximum post volume, and priority support.",
    features: [
      "24\u201332 posts per month",
      "6 carousels per month",
      "6 video scripts + drafts",
      "YouTube content intelligence",
      "Priority support",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    platforms: "Per seat \u00b7 3 seat minimum",
    featured: false,
    perSeat: true,
    desc: "Built for brokerages, agencies, and teams where every member needs their own content presence. Each seat gets a fully independent content pipeline \u2014 their own voice, their own brand, their own platforms.",
    features: [
      "Everything in Signature per seat",
      "Shared admin dashboard",
      "Single invoice for all seats",
      "Team performance analytics",
      "Dedicated account setup",
    ],
  },
];

/* ── Onboarding accordion items ── */
const onboardingItems = [
  "Metricool brand setup",
  "Content OS activation",
  "Content profile configuration",
  "n8n workflow setup",
  "30-min activation call",
];

export default function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");
  const [tier, setTier] = useState<"beta" | "regular">("beta");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [seats, setSeats] = useState(3);
  const [setupOpen, setSetupOpen] = useState(false);

  const isBeta = tier === "beta";
  const isAnnual = period === "annual";

  // Growth annual savings for banner
  const growthMonthly = PRICES.growth[tier].monthly;
  const growthAnnualPerMonth = PRICES.growth[tier].annual;
  const annualSavings = (growthMonthly - growthAnnualPerMonth) * 12;

  async function handleCheckout(planKey: string, quantity: number = 1) {
    const priceId = PRICE_IDS[planKey]?.[tier]?.[period];
    if (!priceId) return;
    const planLabel = `${plans.find((p) => p.key === planKey)?.name || planKey} ${isBeta ? "Beta" : ""} ${isAnnual ? "Annual" : "Monthly"}`.trim();

    setLoadingPlan(planKey);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, planName: planLabel, quantity }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data.error);
        setLoadingPlan(null);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setLoadingPlan(null);
    }
  }

  return (
    <section id="pricing" className="py-24 px-5 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeUp>
          <p className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-3 text-center">
            {isBeta ? "Beta pricing" : "Pricing"}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-white text-center mb-4">
            {isBeta ? "Locked-in rates. For life." : "Simple, transparent pricing."}
          </h2>
          <p className="text-brand-muted text-center max-w-xl mx-auto mb-10">
            {isBeta
              ? "Beta clients lock in their price permanently. When we launch publicly, prices increase. Yours never does."
              : "Choose the plan that fits your content needs. Upgrade or downgrade anytime."}
          </p>
        </FadeUp>

        {/* Toggles */}
        <FadeUp delay={50}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Billing period toggle */}
            <div className="inline-flex items-center rounded-lg bg-brand-card border border-brand-border p-1">
              <button
                onClick={() => setPeriod("monthly")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  !isAnnual ? "bg-brand-orange text-white" : "text-brand-muted hover:text-brand-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPeriod("annual")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${
                  isAnnual ? "bg-brand-orange text-white" : "text-brand-muted hover:text-brand-white"
                }`}
              >
                Annual
                <span className="text-[10px] font-bold bg-emerald-500 text-white px-1.5 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>

            {/* Pricing tier toggle */}
            <div className="inline-flex items-center rounded-lg bg-brand-card border border-brand-border p-1">
              <button
                onClick={() => setTier("beta")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${
                  isBeta ? "bg-brand-orange text-white" : "text-brand-muted hover:text-brand-white"
                }`}
              >
                Beta
                {isBeta && (
                  <span className="text-[10px] font-bold bg-white/20 px-1.5 py-0.5 rounded-full">
                    Founding member
                  </span>
                )}
              </button>
              <button
                onClick={() => setTier("regular")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  !isBeta ? "bg-brand-orange text-white" : "text-brand-muted hover:text-brand-white"
                }`}
              >
                Regular
              </button>
            </div>
          </div>
        </FadeUp>

        {/* Annual savings banner */}
        {isAnnual && (
          <FadeUp>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                You save ${annualSavings}/year on Growth by paying annually
              </span>
            </div>
          </FadeUp>
        )}

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {plans.map((plan, i) => {
            const price = PRICES[plan.key][tier];
            const displayPrice = isAnnual ? price.annual : price.monthly;
            const otherTier = isBeta ? "regular" : "beta";
            const otherPrice = PRICES[plan.key][otherTier];
            const otherDisplay = isAnnual ? otherPrice.annual : otherPrice.monthly;

            return (
              <FadeUp key={plan.key} delay={i * 80}>
                <div
                  className={`relative rounded-2xl p-6 flex flex-col h-full ${
                    plan.featured
                      ? "border-2 border-brand-orange bg-brand-card"
                      : "border border-brand-border bg-brand-card"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most popular
                    </span>
                  )}

                  {/* Plan name + platforms */}
                  <h3 className="font-display font-bold text-xl text-brand-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-brand-muted mb-3">{plan.platforms}</p>

                  {/* Description */}
                  <p className="text-xs text-brand-white/50 leading-relaxed mb-5">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="font-display font-bold text-3xl text-brand-white">
                      ${plan.perSeat ? displayPrice * seats : displayPrice}
                    </span>
                    <span className="text-brand-muted text-sm">
                      {plan.perSeat
                        ? isAnnual ? "/mo" : "/mo"
                        : "/mo"}
                    </span>
                  </div>

                  {/* Per-seat breakdown */}
                  {plan.perSeat && (
                    <p className="text-[11px] text-brand-muted mb-1">
                      {seats} seats × ${displayPrice}/{plan.perSeat ? "seat" : "mo"}
                    </p>
                  )}

                  {/* Annual total */}
                  {isAnnual && (
                    <p className="text-[11px] text-brand-muted mb-1">
                      Billed annually at ${plan.perSeat ? price.annualTotal * seats : price.annualTotal}/yr
                    </p>
                  )}

                  {/* Beta badge + comparison price */}
                  {isBeta ? (
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-[10px] font-bold bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded-full">
                        Beta price
                      </span>
                      <span className="text-xs text-brand-muted line-through">
                        Full price ${otherDisplay}/mo
                      </span>
                    </div>
                  ) : (
                    <div className="mb-5" />
                  )}

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-brand-white/80">
                        <svg className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Enterprise seat selector */}
                  {plan.perSeat && (
                    <div className="mb-4">
                      <p className="text-xs text-brand-muted mb-2">Number of seats</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSeats(Math.max(3, seats - 1))}
                          className="w-8 h-8 rounded-md border border-brand-border text-brand-white flex items-center justify-center hover:border-brand-orange/40 transition-colors"
                        >
                          &minus;
                        </button>
                        <span className="font-display font-bold text-lg text-brand-white w-8 text-center">
                          {seats}
                        </span>
                        <button
                          onClick={() => setSeats(Math.min(10, seats + 1))}
                          className="w-8 h-8 rounded-md border border-brand-border text-brand-white flex items-center justify-center hover:border-brand-orange/40 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[10px] text-brand-muted mt-1.5">
                        Min 3 seats. Need more than 10?{" "}
                        <a href="#beta" className="text-brand-orange hover:underline">Contact us</a>.
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCheckout(plan.key, plan.perSeat ? seats : 1)}
                      disabled={loadingPlan === plan.key}
                      className={`block w-full text-center font-semibold text-sm py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                        plan.featured
                          ? "bg-brand-orange text-white hover:bg-brand-orange-hover"
                          : "border border-brand-border text-brand-white hover:border-brand-orange/40 hover:text-brand-orange"
                      }`}
                    >
                      {loadingPlan === plan.key ? "Redirecting..." : "Get started"}
                    </button>
                    <a
                      href="#beta"
                      className="block text-center text-xs text-brand-muted hover:text-brand-orange transition-colors"
                    >
                      or contact us first &rarr;
                    </a>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Onboarding fee callout */}
        <FadeUp delay={350}>
          <div className="rounded-xl border border-brand-border bg-brand-card p-5 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-brand-white mb-1">
                  All plans include a one-time $147 setup fee
                </p>
                <p className="text-xs text-brand-muted">
                  Charged on your first invoice. Covers everything you need to go live.
                </p>
              </div>
              <button
                onClick={() => setSetupOpen(!setupOpen)}
                className="text-xs text-brand-orange hover:underline shrink-0 ml-4 mt-0.5"
              >
                {setupOpen ? "Hide details \u25B4" : "What\u2019s included \u25BE"}
              </button>
            </div>
            {setupOpen && (
              <ul className="mt-4 pt-4 border-t border-brand-border space-y-2">
                {onboardingItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-brand-white/70">
                    <svg className="w-3.5 h-3.5 text-brand-orange shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={400}>
          <p className="text-center text-xs text-brand-muted">
            {isBeta
              ? "Beta pricing is locked for life for founding clients."
              : "All prices in CAD. Cancel anytime."}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
