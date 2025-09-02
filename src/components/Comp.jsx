"use client";
import React from "react";
import v from "../assets/v.png";
import w from "../assets/w.png";
import x from "../assets/x.png";

export default function ComplianceHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[450px]">
        {/* Curved Top SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none h-[200px] md:h-[300px]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFFCF5"
              d="M0,160 C360,0 1080,0 1440,160 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        {/* Section Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-28 md:pt-36 max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300 mb-2">
           AI-POWERED SUCCESS PLATFORM
          </p>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
           Unlock Intelligent Customer  <br /> Success™ with Dexy AI<br /> 
          </h1>
          <p className="text-lg md:text text-gray-300 mb-6">
      Stay ahead of customer needs with DexKor’s AI-powered intelligence layer. Dexy AI helps your teams detect churn risks, generate insights, and automate repetitive tasks — giving you proactive control over Success, Support, and RevOps in one place.

          </p>
          <button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition">
            Get started
          </button>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className=" rounded-xl shadow-md p-6 text-center">
            <img
              src={v}
              alt="Law Changes"
              className="w-full h-auto mb-6 rounded-lg"
            />
            <p className="text-xl text-white  mb-2">
 Predict risks with AI-driven customer health monitoring.
            </p>
            <h3 className="text-lg font-semibold">LAW CHANGES</h3>
          </div>

          {/* Card 2 */}
          <div className=" rounded-xl shadow-md p-6 text-center">
            <img
              src={w}
              alt="Misclassification Risks"
              className="w-full h-auto mb-6 rounded-lg"
            />
            <p className="text-xl text-white mb-2">
            Auto-generate summaries, categorizations, and sentiment analysis.
            </p>
            <h3 className="text-lg font-semibold">2 Misclassification Risks</h3>
          </div>

          {/* Card 3 */}
          <div className=" rounded-xl shadow-md p-6 text-center">
            <img
              src={x}
              alt="Worker Classification"
              className="w-full h-auto mb-6 rounded-lg"
            />
            <p className="text-xl text-white mb-2">
 Let AI handle QA, playbooks, and repetitive processes.
            </p>
            <h3 className="text-lg font-semibold">Worker Classification</h3>
          </div>
        </div>
      </section>
    </>
  );
}
