// src/components/ImpactMetrics.jsx
import React from "react";

export default function ImpactMetrics() {
  return (
    <section className="bg-blue-200 py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          DexKor makes scaling customer success effortless
        </h2>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-3xl font-bold text-gray-900">5+</p>
            <p className="text-gray-700">Countries</p>
            <p className="text-sm text-gray-600">
              Already trusted across multiple regions (expand as you grow traction)
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">10+</p>
            <p className="text-gray-700">Companies</p>
            <p className="text-sm text-gray-600">
              Early adopters scaling sales, support & success with DexKor
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">50,000+</p>
            <p className="text-gray-700">Conversations Automated</p>
            <p className="text-sm text-gray-600">
              Powered by DexKor’s Agentic AI
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
