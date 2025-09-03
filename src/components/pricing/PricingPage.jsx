// src/pages/PricingPage.jsx
import { useState } from "react";
import { Globe, Users, Laptop, Layers, Info, X } from "lucide-react";

const companySizes = [
  { label: "1-20 people", value: "1-20" },
  { label: "21-200 people", value: "21-200" },
  { label: "201-2,000 people", value: "201-2000" },
  { label: "2,000+ people", value: "2000+" },
];

const pricingTabs = [
  { label: "Payroll", icon: Globe },
  { label: "HR", icon: Users },
  { label: "IT", icon: Laptop },
  { label: "Services", icon: Layers },
];

const bgColors = {
  Payroll: "bg-[#CDE6FF]",
  HR: "bg-yellow-200",
  IT: "bg-purple-100",
  Services: "bg-[#CDE6FF]",
};

const tabColors = {
  Payroll: "bg-white border-blue-500",
  HR: "bg-yellow-200 border-yellow-500",
  IT: "bg-purple-200 border-purple-500",
  Services: "bg-white border-blue-300",
};

export default function PricingPage() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState("Payroll");
  const [showModal, setShowModal] = useState(false);

  // Handle company size click
  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setShowModal(true);
  };

  return (
    <section
      className={`w-full py-36 px-24 min-h-screen transition-colors duration-500 ${bgColors[activeTab]}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Small Heading */}
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          DexKor Pricing
        </h3>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Clear, fair pricing <br /> that scales from startup to enterprise.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you’re closing deals, onboarding customers, managing support
          tickets, or driving renewals, you can do it all with DexKor.
        </p>

        {/* Company size selector */}
        <div className="mt-12 bg-white/50 px-8 py-4 rounded-2xl flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-gray-900 text-lg">
              What is the size of your company?
            </p>
            <Info className="w-4 h-4 text-gray-600" />
          </div>

          <div className="flex flex-wrap gap-4">
            {companySizes.map((size) => (
              <button
                key={size.value}
                onClick={() => handleSizeClick(size.value)}
                className={`px-6 py-3 rounded-full text-base font-medium transition
                  ${
                    selectedSize === size.value
                      ? "bg-white text-gray-900 shadow-md"
                      : "bg-gray-100 hover:bg-white/70 text-gray-800"
                  }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {pricingTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex flex-col items-center p-6 rounded-2xl border-2 transition
                  ${
                    isActive
                      ? tabColors[tab.label]
                      : "bg-white/50 border-transparent hover:border-gray-300"
                  }`}
              >
                <Icon
                  className={`w-8 h-8 mb-3 ${
                    isActive ? "text-gray-900" : "text-blue-600"
                  }`}
                />
                <span className="font-medium text-gray-900">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Headline */}
            <h2 className="text-2xl font-bold text-gray-900">
              See how DexKor fits your business with a custom plan
            </h2>
            <p className="mt-2 text-gray-600">
              Chat with a DexKor expert to explore the platform, ask questions,
              and get pricing personalized to your company’s size and needs.
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-red-500 text-xl">★★★★★</span>
              <p className="text-sm text-gray-600">
                Loved by early adopters across SaaS, D2C, and Logistics industries. <br />
                Backed by CX leaders and powered by AI innovation.
              </p>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex-1 border rounded-lg px-4 py-2"
                />
              </div>
              <input
                type="email"
                placeholder="Work email"
                className="w-full border rounded-lg px-4 py-2"
              />
              <select
                className="w-full border rounded-lg px-4 py-2"
                defaultValue={selectedSize}
              >
                {companySizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>United States</option>
                <option>India</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                {/* You can replace with real country list */}
              </select>
            </form>

            {/* Footer */}
            <p className="mt-4 text-xs text-gray-500">
              We respect your data. By submitting this form, you agree that we
              may contact you about DexKor’s products and services, in
              accordance with our Privacy Policy.
            </p>

            {/* CTA */}
            <a
              href="https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-black text-white font-medium py-3 rounded-lg text-center hover:bg-gray-800 transition"
            >
              Choose date & time
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
