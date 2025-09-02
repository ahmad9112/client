"use client";
import manImg from "../assets/man.png"; // import image from assets

export default function GlobalHero() {
  return (
    <section className="w-full bg-[#FFFCF5] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section (TEXT) */}
        <div className="text-left">
          {/* Top Label */}
          <p className="uppercase tracking-wide text-sm font-semibold text-gray-600 mb-4">
            GLOBAL CUSTOMER SUCCESS PLATFORM
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Scale customer success with speed and intelligence
            <br className="hidden md:block" /> 
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            DexKor is built to empower organizations of every size — from fast-growing startups to large enterprises. Whether you’re managing complex sales pipelines, onboarding new customers, or driving renewals, DexKor unifies Success, Support, and RevOps into one AI-powered platform. Gain real-time insights, predict risks, and deliver exceptional experiences — all with enterprise-grade security and compliance.
          </p>

          {/* Button styled as link */}
          <a
            href="https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition"
          >
            Get started
          </a>
        </div>

        {/* Right Section (IMAGE) */}
        <div className="flex justify-center md:justify-end">
          <img
            src={manImg}
            alt="Hero"
            className="w-full max-w-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
