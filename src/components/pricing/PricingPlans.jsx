"use client";
import React, { useState } from "react";
import jx from "../../assets/jx.jpg";
import jxx from "../../assets/jxx.jpg"; // ✅ new image import

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
          <li
            onClick={() => setActiveTab("PlugApp")}
            className={`cursor-pointer hover:text-black ${
              activeTab === "PlugApp" ? "font-bold text-black" : "text-gray-600"
            }`}
          >
            PlugApp <span className="text-green-600 text-xs ml-1">FREE</span>
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4">Platform Services</h2>
        <ul className="space-y-3">
          <li
            onClick={() => setActiveTab("360Analytics")}
            className={`cursor-pointer hover:text-black ${
              activeTab === "360Analytics"
                ? "font-bold text-black"
                : "text-gray-600"
            }`}
          >
            360 Analytics{" "}
            <span className="text-xs text-gray-500">(Coming soon)</span>
          </li>
          <li
            onClick={() => setActiveTab("AgentOS")}
            className={`cursor-pointer hover:text-black ${
              activeTab === "AgentOS" ? "font-bold text-black" : "text-gray-600"
            }`}
          >
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

        {/* ✅ SUPPORT SECTION */}
        {activeTab === "Support" && (
          <>
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
            {/* Feature Comparison Table */}
<div className="space-y-12">
  {/* AI Agents and AI */}
  <div>
    <h2 className="text-xl font-semibold mb-4">AI Agents and AI</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">Features</th>
          <th className="border px-4 py-2">Starter</th>
          <th className="border px-4 py-2">Pro</th>
          <th className="border px-4 py-2">Ultimate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Customer Service AI Agent</td>
          <td className="border px-4 py-2">✔</td>
          <td className="border px-4 py-2">✔</td>
          <td className="border px-4 py-2">✔</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Data Analyst AI Agent</td>
          <td className="border px-4 py-2">Early Access</td>
          <td className="border px-4 py-2">Early Access</td>
          <td className="border px-4 py-2">Early Access</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">AI Awareness</td>
          <td className="border px-4 py-2">Add-on</td>
          <td className="border px-4 py-2">Add-on</td>
          <td className="border px-4 py-2">Custom</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Dedicated Prompt Engineering Support</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">Custom</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Messaging and Live Chat */}
  <div>
    <h2 className="text-xl font-semibold mb-4">Messaging and Live Chat</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">Features</th>
          <th className="border px-4 py-2">Starter</th>
          <th className="border px-4 py-2">Pro</th>
          <th className="border px-4 py-2">Ultimate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Unified Inbox</td>
          <td className="border px-4 py-2">✔</td>
          <td className="border px-4 py-2">✔</td>
          <td className="border px-4 py-2">✔</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Skills Based Routing</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">Coming Soon</td>
          <td className="border px-4 py-2">Coming Soon</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">PlugChat Custom Branding</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">Custom</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Ticket Management */}
  <div>
    <h2 className="text-xl font-semibold mb-4">Ticket Management</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">Features</th>
          <th className="border px-4 py-2">Starter</th>
          <th className="border px-4 py-2">Pro</th>
          <th className="border px-4 py-2">Ultimate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Custom Ticket Fields</td>
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">40</td>
          <td className="border px-4 py-2">Customizable</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Org Schedules</td>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Unlimited</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">CSAT Surveys</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">Customizable</td>
          <td className="border px-4 py-2">Customizable</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

          </>
        )}

        {/* ✅ BUILD SECTION */}
        {activeTab === "Build" && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Starter */}
              <div className="border rounded-xl shadow-sm p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <p className="text-3xl font-bold mb-2">$9.99</p>
                <p className="text-sm mb-4">per user/month</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✔ AI agents, assistants, and issue tracking</li>
                  <li>✔ Project management</li>
                  <li>✔ Seamless progress and dependency tracking</li>
                  <li>✔ Ready-to-go reporting and analytics</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
                  Get started free
                </button>
              </div>

              {/* Pro */}
              <div className="border rounded-xl shadow-md p-6 flex flex-col bg-blue-50">
                <h3 className="text-lg font-semibold mb-2">
                  Pro{" "}
                  <span className="ml-2 text-xs bg-blue-200 px-2 py-1 rounded-full">
                    Popular
                  </span>
                </h3>
                <p className="text-3xl font-bold mb-2">$24.99</p>
                <p className="text-sm mb-4">per user/month</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✔ Everything in Starter</li>
                  <li>✔ Customizable issue management</li>
                  <li>✔ Advanced reporting & analytics</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
                  Get started free
                </button>
              </div>

              {/* Ultimate */}
              <div className="border rounded-xl shadow-sm p-6 flex flex-col bg-gray-100">
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
          </>
        )}

        {/* ✅ PLUGAPP SECTION */}
        {activeTab === "PlugApp" && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Free */}
              <div className="border rounded-xl shadow-sm p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Free</h3>
                <p className="text-sm mb-4">
                  The easiest way to get started with AI powered search.
                </p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✔ GenAI powered search</li>
                  <li>✔ One simple SDK</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
                  Get started - Free forever
                </button>
              </div>

              {/* Flexible */}
              <div className="border rounded-xl shadow-md p-6 flex flex-col bg-yellow-50">
                <h3 className="text-lg font-semibold mb-2">Flexible</h3>
                <p className="text-sm mb-4">
                  Pay as you go – AI Engage, eStores, better together.
                </p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✔ AI powered search & deflections</li>
                  <li>✔ In-app Agents</li>
                  <li>✔ Product-led support observability</li>
                  <li>✔ Session insights</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
                  Get started free
                </button>
              </div>

              {/* Ultimate */}
              <div className="border rounded-xl shadow-sm p-6 flex flex-col bg-black text-white">
                <h3 className="text-lg font-semibold mb-2">Ultimate</h3>
                <p className="text-sm mb-4">
                  Scale with PlusInfra enhanced functionality.
                </p>
                <ul className="text-sm mb-6 space-y-2">
                  <li>✔ Overcome design bottlenecks</li>
                  <li>✔ Advanced Session Filtering</li>
                  <li>
                    ✔ Enterprise-grade security, compliance, controls, and
                    policies
                  </li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-white text-black hover:bg-gray-100">
                  Contact sales
                </button>
              </div>
            </div>
          </>
        )}

        {/* ✅ 360 ANALYTICS SECTION */}
        {activeTab === "360Analytics" && (
          <>
            <div className="text-center mb-12">
              <p className="uppercase text-xs font-semibold text-gray-400 mb-2">
                Platform
              </p>
              <h1 className="text-4xl font-bold mb-4">
                Robust data platform. <br /> Purpose-built for tech.
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Reimagine data—efficiently converge data to get personalized,
                unique, and actionable insights with low-latency performance.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
                  Book a demo
                </button>
                <button className="px-6 py-3 rounded-lg bg-gray-200 text-black font-medium hover:bg-gray-300">
                  Start for free
                </button>
              </div>
            </div>

            {/* ✅ First Image */}
            <div className="max-w-5xl mx-auto mb-8">
              <img
                src={jx}
                alt="Analytics Dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* ✅ Second Image */}
            <div className="max-w-5xl mx-auto mb-8">
              <img
                src={jxx}
                alt="Analytics Insights"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* ✅ Video Section */}
            <div className="max-w-5xl mx-auto mb-16">
              <video
                src="/video/jxxx.mp4"
                controls
                loop
                muted
                className="rounded-lg shadow-lg w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold mb-2">
                Blazing fast turnkey data platform
              </h2>
              <p className="text-gray-500 mb-6">
                Retrieve millions of records in seconds and uncover insights
                using high performance feather-light database technologies right
                in your browser.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
                  Book a demo
                </button>
                <button className="px-6 py-3 rounded-lg bg-gray-200 text-black font-medium hover:bg-gray-300">
                  Start for free
                </button>
              </div>
            </div>
          </>
        )}
        {activeTab === "AgentOS" && (
          <>
            {/* AgentOS Pricing Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="border rounded-xl shadow-sm p-8 flex flex-col bg-black text-white">
                <h3 className="text-xl font-semibold mb-4">Ultimate</h3>
                <p className="text-2xl font-bold mb-4">Let’s talk</p>
                <p className="text-sm mb-6">
                  Enterprise scale and flexibility to meet any requirement.
                </p>
                <ul className="text-sm space-y-3 mb-6">
                  <li>✔ Flexible pricing models (usage-based or seat-based)</li>
                  <li>✔ Full object model & customization</li>
                  <li>✔ Unlimited projects and integrations</li>
                  <li>✔ Enterprise-grade security, compliance, and controls</li>
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg bg-white text-black hover:bg-gray-200">
                  Contact sales
                </button>
              </div>
            </div>

            {/* Features Section */}
            <h2 className="text-2xl font-bold mb-8">
              Agent OS — Make your company AI ready
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Airdrop</h3>
                <p className="text-sm text-gray-600">
                  Large-scale data ingestion and unification from unlimited
                  sources with near real-time syncs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Knowledge graph</h3>
                <p className="text-sm text-gray-600">
                  Organize data from multiple sources into a connected graph
                  with customization.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Conversational search</h3>
                <p className="text-sm text-gray-600">
                  Advanced search powered by your preferred LLM with extended
                  history retention.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Agentic workflows</h3>
                <p className="text-sm text-gray-600">
                  Deploy AI-powered workflows with automation, decision nodes,
                  and orchestration.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Natural language analytics
                </h3>
                <p className="text-sm text-gray-600">
                  Query business data with natural language and visualize with
                  flexible reporting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">360 Analytics</h3>
                <p className="text-sm text-gray-600">
                  Gain a 360° view into customers, products, users, and
                  sessions.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PricingPage;