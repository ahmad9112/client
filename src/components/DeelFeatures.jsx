"use client";
import React from "react";

export default function DexKorFeatures() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div>
          <h3 className="font-bold text-lg mb-2">📊 Powerful Insights</h3>
          <p className="text-gray-300">
            Track health, renewals, and support trends with AI-driven analytics.
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <h3 className="font-bold text-lg mb-2">⚡ Scalability</h3>
          <p className="text-gray-300">
            From startups to enterprises, DexKor adapts to every stage of growth.
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <h3 className="font-bold text-lg mb-2">🤝 Dedicated Partner</h3>
          <p className="text-gray-300">
            Work with a platform designed by SaaS industry veterans who understand customer success.
          </p>
        </div>

        {/* Feature 4 */}
        <div>
          <h3 className="font-bold text-lg mb-2">🔗 Seamless Integration</h3>
          <p className="text-gray-300">
            Connect with Slack, HubSpot, Salesforce, and your existing stack.
          </p>
        </div>

        {/* Feature 5 */}
        <div>
          <h3 className="font-bold text-lg mb-2">💡 AI Automation</h3>
          <p className="text-gray-300">
            Save time with Dexy AI for summaries, QA, sentiment, and workflows.
          </p>
        </div>

        {/* Feature 6 */}
        <div>
          <h3 className="font-bold text-lg mb-2">🔒 Enterprise Security</h3>
          <p className="text-gray-300">
            SOC2-ready, GDPR-compliant, and built with advanced data protection.
          </p>
        </div>
      </div>

      {/* Angled Bottom Transition */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-[#fdeaa7]"
        style={{
          clipPath: "polygon(0 80%, 100% 100%, 100% 100%, 0% 100%)",
        }}
      />
    </section>
  );
}
