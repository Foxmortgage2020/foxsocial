"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const plans = [
  {
    name: "Solo",
    beta: "$40",
    full: "$97",
    platforms: "LinkedIn only",
    featured: false,
    priceEnvKey: "solo",
    planLabel: "Solo Beta",
    features: [
      "8\u201310 posts/mo",
      "2 carousels/mo",
      "Weekly script delivery",
      "Metricool scheduling",
    ],
  },
  {
    name: "Starter",
    beta: "$75",
    full: "$175",
    platforms: "2 platforms",
    featured: false,
    priceEnvKey: "starter",
    planLabel: "Starter Beta",
    features: [
      "16\u201320 posts/mo",
      "4 carousels/mo",
      "2 video scripts + drafts",
      "Multi-platform scheduling",
    ],
  },
  {
    name: "Growth",
    beta: "$120",
    full: "$297",
    platforms: "3 platforms",
    featured: true,
    priceEnvKey: "growth",
    planLabel: "Growth Beta",
    features: [
      "24\u201332 posts/mo",
      "6 carousels/mo",
      "4 video scripts + drafts",
      "All platform scheduling",
    ],
  },
  {
    name: "Scale",
    beta: "$150",
    full: "$397",
    platforms: "All platforms + YouTube",
    featured: false,
    priceEnvKey: null, // No Stripe price ID — contact form only
    planLabel: "Scale Beta",
    features: [
      "32\u201340 posts/mo",
      "8 carousels/mo",
      "6 video scripts + drafts",
      "YouTube content intelligence",
    ],
  },
];

// Map plan keys to env var price IDs (set server-side, passed to checkout API)
const PRICE_IDS: Record<string, string> = {
  solo: "price_1TLA9jJDc6IlYEtZgZtkMCBK",
  starter: "price_1TLAAwJDc6IlYEtZxbBJVQEV",
  growth: "price_1TLABkJDc6IlYEtZnctFbNCZ",
};

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  async function handleCheckout(priceEnvKey: string, planLabel: string) {
    const priceId = PRICE_IDS[priceEnvKey];
    if (!priceId) return;

    setLoadingPlan(priceEnvKey);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, planName: planLabel }),
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
        <FadeUp>
          <p className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-3 text-center">
            Beta pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-white text-center mb-4">
            Locked-in rates. For life.
          </h2>
          <p className="text-brand-muted text-center max-w-xl mx-auto mb-16">
            Beta clients lock in their price permanently. When we launch
            publicly, prices increase. Yours never does.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 80}>
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

                <h3 className="font-display font-bold text-xl text-brand-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-brand-muted mb-5">
                  {plan.platforms}
                </p>

                <div className="mb-1">
                  <span className="font-display font-bold text-3xl text-brand-white">
                    {plan.beta}
                  </span>
                  <span className="text-brand-muted text-sm">/mo beta</span>
                </div>
                <p className="text-xs text-brand-muted line-through mb-6">
                  Full price {plan.full}/mo
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-brand-white/80"
                    >
                      <svg
                        className="w-4 h-4 text-brand-orange shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA: Checkout button or contact link */}
                <div className="space-y-2">
                  {plan.priceEnvKey ? (
                    <button
                      onClick={() =>
                        handleCheckout(plan.priceEnvKey!, plan.planLabel)
                      }
                      disabled={loadingPlan === plan.priceEnvKey}
                      className={`block w-full text-center font-semibold text-sm py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                        plan.featured
                          ? "bg-brand-orange text-white hover:bg-brand-orange-hover"
                          : "border border-brand-border text-brand-white hover:border-brand-orange/40 hover:text-brand-orange"
                      }`}
                    >
                      {loadingPlan === plan.priceEnvKey
                        ? "Redirecting..."
                        : "Get started"}
                    </button>
                  ) : (
                    <a
                      href="#beta"
                      className="block w-full text-center font-semibold text-sm py-3 rounded-lg transition-colors border border-brand-border text-brand-white hover:border-brand-orange/40 hover:text-brand-orange"
                    >
                      Contact us
                    </a>
                  )}
                  <a
                    href="#beta"
                    className="block text-center text-xs text-brand-muted hover:text-brand-orange transition-colors"
                  >
                    or contact us first &rarr;
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={350}>
          <p className="text-center text-xs text-brand-muted mt-10">
            All plans include a one-time $150 onboarding fee. Beta pricing is
            locked for life.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
