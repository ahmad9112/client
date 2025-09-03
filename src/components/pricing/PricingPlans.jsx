// src/components/PricingLayout.jsx
import React from "react";
import { Layers, Box, BarChart, Cpu, Rocket } from "lucide-react";

export default function PricingLayout() {
  return (
    <div className="mt-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      
      {/* Left Sidebar */}
      <aside className="md:col-span-1 space-y-8">
        {/* Products */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Products
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-900 font-medium cursor-pointer hover:text-blue-600">
              <Layers className="w-5 h-5" /> Support
            </li>
            <li className="flex items-center gap-2 text-gray-900 font-medium cursor-pointer hover:text-blue-600">
              <Box className="w-5 h-5" /> Build
            </li>
          </ul>
        </div>

        {/* In-app Services */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            In-app Services <span className="text-green-600">FREE</span>
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-900 font-medium">
              <Rocket className="w-5 h-5" /> PLuG App
            </li>
          </ul>
        </div>

        {/* Platform Services */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Platform Services
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-900 font-medium">
              <BarChart className="w-5 h-5" /> 360 Analytics – Coming soon
            </li>
            <li className="flex items-center gap-2 text-gray-900 font-medium">
              <Cpu className="w-5 h-5" /> AgentOS
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Programs
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-900 font-medium">
              <Rocket className="w-5 h-5" /> DevRev for Startups
            </li>
          </ul>
        </div>
      </aside>

      {/* Right Pricing Section */}
      <main className="md:col-span-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Pricing made simple
        </h2>
        <p className="mt-2 text-gray-600">DexKor plans are priced per seat</p>

        {/* Pricing Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Starter */}
          <div className="border rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                $9.99
                <span className="text-sm font-medium text-gray-600">
                  {" "}per user/month
                </span>
              </p>
              <p className="mt-4 text-gray-600">
                For startups & small engineering teams
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✓ AI agents, assistants, & issue tracking</li>
                <li>✓ Sprint management</li>
                <li>✓ Roadmapping & dependency tracking</li>
                <li>✓ Ready-to-go reporting</li>
              </ul>
            </div>
            <button className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
              Get started free
            </button>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Trial Pro free for 45 days
            </p>
          </div>

          {/* Pro */}
          <div className="border-2 border-blue-400 rounded-2xl p-8 bg-blue-50 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Pro{" "}
                <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">
                  Popular
                </span>
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                $24.99
                <span className="text-sm font-medium text-gray-600">
                  {" "}per user/month
                </span>
              </p>
              <p className="mt-4 text-gray-600">
                Full product development platform for scaling teams
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✓ Everything in Starter</li>
                <li>✓ Customizable issue management</li>
                <li>✓ Advanced reporting & analytics</li>
              </ul>
            </div>
            <button className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
              Get started free
            </button>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Trial Pro free for 45 days
            </p>
          </div>

          {/* Ultimate */}
          <div className="border rounded-2xl p-8 flex flex-col justify-between bg-gray-50">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Ultimate</h3>
              <p className="mt-4 text-gray-600">
                Enterprise scale & flexibility to meet any requirement
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✓ Everything in Pro</li>
                <li>✓ Unlimited integrations</li>
                <li>✓ Full customization</li>
                <li>✓ Enterprise-grade compliance & security</li>
              </ul>
            </div>
            <button className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
              Get a demo
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
