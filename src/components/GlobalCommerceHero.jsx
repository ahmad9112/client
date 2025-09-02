import React from "react";
import zz from "../assets/zz.png"; // Adjust path if needed

const ConnectedPlatformHero = () => {
  return (
    <section className="relative min-h-screen bg-[#FFEBA6] text-gray-900 overflow-hidden flex items-center">
      {/* Background Illustration */}
      <img
        src={zz}
        alt="Connected platform illustration"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />

      {/* Main Content aligned to left */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl text-left">
          {/* Small Upper Title */}
          <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            Connected Platform
          </p>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Why stop at sales when success is the full journey?
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-6">
            From sales to onboarding, customer support to renewals — DexKor covers
            the entire customer lifecycle. One connected platform, AI-powered at
            its core, helping teams across SaaS, D2C, and Logistics deliver
            success at every stage.
          </p>

          {/* CTA Button with Link */}
     <a
  href="https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto bg-black text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-800 transition text-center"
>
  Get started
</a>

          
        </div>
      </div>
    </section>
  );
};

export default ConnectedPlatformHero;
