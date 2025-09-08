"use client";
import React, { useState } from "react";

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState("Support");

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r p-6 text-sm text-gray-800">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <ul className="space-y-3">
          <li
            onClick={() => setActiveTab("Support")}
            className={`cursor-pointer hover:text-black ${
              activeTab === "Support" ? "font-bold text-black" : "text-gray-600"
            }`}
          >
            Support
          </li>
          <li
            onClick={() => setActiveTab("Build")}
            className={`cursor-pointer hover:text-black ${
              activeTab === "Build" ? "font-bold text-black" : "text-gray-600"
            }`}
          >
            Build
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4">In-app Services</h2>
        <ul className="space-y-3">
          <li className="text-gray-600 cursor-pointer hover:text-black">
            PlugApp <span className="text-green-600 text-xs ml-1">FREE</span>
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4">Platform Services</h2>
        <ul className="space-y-3">
          <li className="text-gray-600 cursor-pointer hover:text-black">
            360 Analytics{" "}
            <span className="text-xs text-gray-500">Coming soon</span>
          </li>
          <li className="text-gray-600 cursor-pointer hover:text-black">
            AgentOS
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4">Programs</h2>
        <ul className="space-y-3">
          <li className="text-gray-600 cursor-pointer hover:text-black">
            DevRev for Startups
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Pricing made simple</h1>

        {activeTab === "Support" && (
          <>
            {/* Top Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Starter */}
              <div className="border rounded-xl shadow-sm p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <p className="text-3xl font-bold mb-2">$19.99</p>
                <p className="text-sm mb-4">per user/month</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✔ AI agents, assistants, and deflection</li>
                  <li>✔ Modern omnichannel ticketing platform</li>
                  <li>✔ Data migration and integrations</li>
                  <li>✔ Ready to go reporting and analytics</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
                  Get started free
                </button>
              </div>

              {/* Pro */}
              <div className="border rounded-xl shadow-md p-6 flex flex-col bg-purple-50">
                <h3 className="text-lg font-semibold mb-2">
                  Pro{" "}
                  <span className="ml-2 text-xs bg-purple-200 px-2 py-1 rounded-full">
                    Popular
                  </span>
                </h3>
                <p className="text-3xl font-bold mb-2">$59.99</p>
                <p className="text-sm mb-4">per user/month</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✔ Everything in Starter</li>
                  <li>✔ Advanced reporting & analytics</li>
                  <li>✔ Custom AI-based routing policies</li>
                  <li>✔ Customizable object and data types</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
                  Get started free
                </button>
              </div>

              {/* Ultimate */}
              <div className="border rounded-xl shadow-sm p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Ultimate</h3>
                <p className="text-3xl font-bold mb-2">Let’s talk</p>
                <p className="text-sm mb-4">per user/month</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✔ Everything in Pro</li>
                  <li>✔ Full object model customization</li>
                  <li>✔ Unlimited integrations</li>
                  <li>✔ Enterprise-grade security, compliance, and controls</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
                  Get a demo
                </button>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mb-10">
              <p className="uppercase text-xs font-semibold text-gray-500 mb-2">
                Comparison
              </p>
              <h2 className="text-2xl font-bold mb-10">
                An AI-Agent platform to build products and support customers
              </h2>

              {/* Small Pricing Row */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Starter Small */}
                <div className="border rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="font-semibold">Starter</h3>
                  <p className="text-2xl font-bold">$19.99</p>
                  <p className="text-xs text-gray-500">per user/month</p>
                  <p className="text-xs text-gray-500 mb-4">Up to 10 users</p>
                  <button className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-900">
                    Start a free trial
                  </button>
                </div>

                {/* Pro Small */}
                <div className="border rounded-lg p-6 bg-purple-50 shadow-sm">
                  <h3 className="font-semibold">Pro</h3>
                  <p className="text-2xl font-bold">$59.99</p>
                  <p className="text-xs text-gray-500">per user/month</p>
                  <button className="px-4 py-2 mt-4 rounded-md bg-black text-white text-sm hover:bg-gray-900">
                    Start a free trial
                  </button>
                </div>

                {/* Ultimate Small */}
                <div className="border rounded-lg p-6 bg-gray-50 shadow-sm">
                  <h3 className="font-semibold">Ultimate</h3>
                  <p className="text-2xl font-bold">Let’s talk</p>
                  <p className="text-xs text-gray-500">per user/month</p>
                  <button className="px-4 py-2 mt-4 rounded-md bg-black text-white text-sm hover:bg-gray-900">
                    Get a demo
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Build" && (
          <div className="text-lg text-gray-700">
            🚧 Build section content coming soon...
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPage;
