"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FoxLogo from "@/components/FoxLogo";

function WelcomeContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }
    // Fetch session details from our own API to get customer name + plan
    fetch(`/api/checkout/session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name || "");
        setPlan(data.planName || "");
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [sessionId]);

  const firstName = name.split(" ")[0] || "there";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-2 border-[#FF6B2B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5 py-16">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <FoxLogo className="w-9 h-9" />
          <span className="font-display font-bold text-xl text-[#080A0F]">
            FoxSocial
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display font-bold text-3xl md:text-4xl text-[#080A0F] tracking-tight mb-3">
          You&apos;re in, {firstName}!
        </h1>
        <p className="text-[#080A0F]/60 text-lg mb-10">
          Your {plan || "beta"} subscription is confirmed.
        </p>

        {/* Next steps card */}
        <div className="bg-[#FFF7ED] border border-[#FDBA74] rounded-2xl p-8 text-left mb-8">
          <h2 className="font-display font-bold text-lg text-[#080A0F] mb-5">
            Next steps
          </h2>
          <div className="space-y-5">
            <Step
              num="1"
              title="Check your email"
              desc="Login credentials are on their way."
            />
            <Step
              num="2"
              title="Set up ElevenLabs"
              desc="Create your voice clone (5 min)"
            />
            <Step
              num="3"
              title="Set up HeyGen"
              desc="Create your video avatar (10 min)"
            />
          </div>
        </div>

        <p className="text-sm text-[#080A0F]/50 mb-8">
          We&apos;ll reach out within 24 hours to schedule your activation call
          and get your first content live.
        </p>

        <a
          href="https://foxsocial.ca"
          className="inline-block bg-[#FF6B2B] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#e85a1e] transition-colors"
        >
          Visit FoxSocial
        </a>
      </div>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FF6B2B] text-white text-sm font-bold flex items-center justify-center">
        {num}
      </span>
      <div>
        <p className="font-semibold text-[#080A0F] text-sm">{title}</p>
        <p className="text-sm text-[#080A0F]/60">{desc}</p>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-8 h-8 border-2 border-[#FF6B2B] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <WelcomeContent />
    </Suspense>
  );
}
