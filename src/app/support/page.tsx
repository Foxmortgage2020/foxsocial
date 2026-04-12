"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const faqs = [
  {
    q: "How do I set up my ElevenLabs voice clone?",
    a: "Go to elevenlabs.io, create an account, navigate to Voice Lab and record 30\u201360 seconds of clear audio. Your voice clone will be ready within minutes.",
  },
  {
    q: "How do I create my HeyGen avatar?",
    a: "Go to heygen.com, create an account, and follow the Instant Avatar setup. Upload a short video of yourself speaking and HeyGen will generate your avatar.",
  },
  {
    q: "When will my account be activated after signing up?",
    a: "We activate all new accounts within 24 hours of receiving payment. You\u2019ll receive a welcome email with login credentials and next steps.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel at any time by emailing michael@app.foxmortgage.ca. Your subscription will remain active until the end of your current billing period. No lock-in contracts.",
  },
  {
    q: "What is the $150 onboarding fee for?",
    a: "The one-time onboarding fee covers your complete account setup including Metricool brand configuration, Content OS activation, content profile setup, n8n workflow configuration, and your 30-minute activation call with Michael.",
  },
  {
    q: "Can I change my plan?",
    a: "Yes. Email michael@app.foxmortgage.ca to upgrade or downgrade your plan at any time.",
  },
  {
    q: "What platforms does FoxSocial support?",
    a: "LinkedIn, Instagram, TikTok, and YouTube depending on your plan. LinkedIn is included on all plans.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-[#080A0F] text-sm pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-[#FF6B2B] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-sm text-[#080A0F]/60 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function SupportPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/support-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-5">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-widest mb-3">
                Support
              </p>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-[#080A0F] tracking-tight">
                How can we help?
              </h1>
            </div>
          </FadeUp>

          {/* Get in touch */}
          <FadeUp delay={100}>
            <div className="rounded-2xl border border-gray-200 p-8 mb-12">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-4">
                Get in touch
              </h2>
              <p className="text-sm text-[#080A0F]/70 mb-2">
                Email:{" "}
                <a
                  href="mailto:michael@app.foxmortgage.ca"
                  className="text-[#FF6B2B] hover:underline"
                >
                  michael@app.foxmortgage.ca
                </a>
              </p>
              <p className="text-sm text-[#080A0F]/50">
                We respond to all inquiries within 24 hours on business days.
              </p>
            </div>
          </FadeUp>

          {/* FAQ */}
          <FadeUp delay={200}>
            <div className="mb-16">
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-6">
                Common questions
              </h2>
              <div className="rounded-2xl border border-gray-200 px-6">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Contact form */}
          <FadeUp delay={300}>
            <div>
              <h2 className="font-display font-bold text-xl text-[#080A0F] mb-6">
                Still need help?
              </h2>
              {status === "success" ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <p className="font-semibold text-emerald-700 mb-1">Message sent</p>
                  <p className="text-sm text-emerald-600">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Your email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors"
                    />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B2B] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#FF6B2B] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#e85a1e] transition-colors disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Send message"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </main>
      <Footer />
    </>
  );
}
