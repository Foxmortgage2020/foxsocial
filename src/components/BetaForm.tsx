"use client";

import { useState, FormEvent } from "react";
import FadeUp from "./FadeUp";

export default function BetaForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Signup failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="beta" className="py-24 px-5 bg-brand-black">
      <div className="max-w-lg mx-auto">
        <FadeUp>
          <p className="text-center text-sm font-semibold text-brand-orange mb-4">
            Only 15 beta spots available.
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-white text-center mb-3">
            Join the beta. Lock in your rate.
          </h2>
          <p className="text-brand-muted text-center mb-10 text-sm">
            Limited to 15 founding clients. You get early access, locked-in
            pricing, and direct input into what we build next.
          </p>
        </FadeUp>

        {status === "success" ? (
          <FadeUp>
            <div className="bg-brand-card border border-brand-orange/30 rounded-2xl p-10 text-center">
              <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-white mb-2">
                You&apos;re on the list.
              </h3>
              <p className="text-brand-muted text-sm">
                We&apos;ll be in touch within 48 hours to get you set up.
              </p>
            </div>
          </FadeUp>
        ) : (
          <FadeUp delay={100}>
            <form
              onSubmit={handleSubmit}
              className="bg-brand-card border border-brand-border rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-brand-muted mb-1.5">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    required
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-white placeholder-brand-muted focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-brand-muted mb-1.5">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    required
                    className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-white placeholder-brand-muted focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-brand-muted mb-1.5">
                  Work Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-white placeholder-brand-muted focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-xs text-brand-muted mb-1.5">
                  Industry
                </label>
                <select
                  name="industry"
                  required
                  defaultValue=""
                  className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select your industry
                  </option>
                  <option value="Mortgage">Mortgage</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Legal">Legal</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-orange text-white font-semibold py-3.5 rounded-lg hover:bg-brand-orange-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Submitting..."
                  : "Get early access \u2192"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="text-[11px] text-brand-muted text-center">
                One-time $147 setup fee. No lock-in. Cancel anytime during beta.
              </p>
            </form>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
