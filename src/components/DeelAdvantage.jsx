"use client";
import React from "react";

export default function DexKorAdvantage() {
  return (
    <section className="w-full bg-black py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Small Title */}
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
          The DexKor Advantage
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug mb-6">
          Move faster with AI-powered customer success <br /> in one unified platform
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">
          DexKor is the only platform that unifies{" "}
          <a href="#" className="text-blue-400 underline">
            SalesHub
          </a>
          ,{" "}
          <a href="#" className="text-blue-400 underline">
            OnboardHub
          </a>
          ,{" "}
          <a href="#" className="text-blue-400 underline">
            HelpDesk
          </a>
          , and{" "}
          <a href="#" className="text-blue-400 underline">
            AccountCare
          </a>{" "}
          into one AI-driven ecosystem. Boost conversions, reduce costs,
          accelerate onboarding, and maximize customer lifetime value—all while
          staying secure and compliant.
        </p>

        {/* CTA Button */}
        <a
  href= "https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition text-sm sm:text-base inline-block"
>
  Get Started
</a>

      </div>
    </section>
  );
}
