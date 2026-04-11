"use client";

import { useState, useEffect } from "react";
import FoxLogo from "./FoxLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <FoxLogo className="w-8 h-8" />
          <span className="font-display font-bold text-lg text-brand-black">
            FoxSocial
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-black/70">
          <a href="#how" className="hover:text-brand-black transition-colors">
            How it works
          </a>
          <a
            href="#pricing"
            className="hover:text-brand-black transition-colors"
          >
            Pricing
          </a>
          <a
            href="#industries"
            className="hover:text-brand-black transition-colors"
          >
            Industries
          </a>
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.foxmortgage.ca/sign-in"
            className="text-sm font-medium text-brand-black/70 hover:text-brand-black transition-colors"
          >
            Sign in
          </a>
          <a
            href="#beta"
            className="text-sm font-semibold bg-brand-orange text-white px-5 py-2.5 rounded-lg hover:bg-brand-orange-hover transition-colors"
          >
            Get early access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-brand-black transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-brand-black transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-brand-black transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5 pt-3 flex flex-col gap-4">
          <a
            href="#how"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-brand-black/70"
          >
            How it works
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-brand-black/70"
          >
            Pricing
          </a>
          <a
            href="#industries"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-brand-black/70"
          >
            Industries
          </a>
          <a
            href="https://app.foxmortgage.ca/sign-in"
            className="text-sm font-medium text-brand-black/70"
          >
            Sign in
          </a>
          <a
            href="#beta"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-brand-orange text-white px-5 py-2.5 rounded-lg text-center hover:bg-brand-orange-hover transition-colors"
          >
            Get early access
          </a>
        </div>
      )}
    </nav>
  );
}
