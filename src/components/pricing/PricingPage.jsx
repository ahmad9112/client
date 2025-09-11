import { useState } from "react";
import { Globe, Users, Laptop, Layers, Info, X } from "lucide-react";

const companySizes = [
  { label: "1-20 people", value: "1-20" },
  { label: "21-200 people", value: "21-200" },
  { label: "2,000+ people", value: "2000+" },
];

const pricingTabs = [
  { label: "AI Copilot", icon: Globe },
  { label: "RevOps Hub", icon: Users },
  { label: "CXOps Hub", icon: Laptop },
  { label: "TeamOps Hub", icon: Layers },
];

const bgColors = {
  "AI Copilot": "bg-[#CDE6FF]",
  "RevOps Hub": "bg-yellow-200",
  "CXOps Hub": "bg-purple-100",
  "TeamOps Hub": "bg-[#CDE6FF]",
};

const tabColors = {
  "AI Copilot": "bg-white border-blue-500",
  "RevOps Hub": "bg-yellow-200 border-yellow-500",
  "CXOps Hub": "bg-purple-200 border-purple-500",
  "TeamOps Hub": "bg-white border-blue-300",
};

export default function PricingPage() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState("AI Copilot");
  const [showModal, setShowModal] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setShowModal(true);
  };

  return (
    <section
      className={`mt-24 w-full py-20 px-4 sm:px-8 lg:px-16 xl:px-24 min-h-screen transition-colors duration-500 ${bgColors[activeTab]}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Small Heading */}
        <h3 className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">
          DexKor Pricing
        </h3>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-snug">
          Clear, fair pricing <br className="hidden sm:block" />
          that scales from startup to enterprise.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-2">
          Whether you’re closing deals, onboarding customers, managing support
          tickets, or driving renewals, you can do it all with DexKor.
        </p>

        {/* Company size selector */}
        <div className="mt-10 sm:mt-12 bg-white/50 px-4 sm:px-8 py-6 rounded-2xl flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <p className="font-semibold text-gray-900 text-base sm:text-lg">
              What is the size of your company?
            </p>
            <Info className="w-4 h-4 text-gray-600" />
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {companySizes.map((size) => (
              <button
                key={size.value}
                onClick={() => handleSizeClick(size.value)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition ${
                  selectedSize === size.value
                    ? "bg-white text-gray-900 shadow-md"
                    : "bg-gray-100 hover:bg-[#fffbf4] text-gray-800"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {pricingTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl border-2 transition ${
                  isActive
                    ? tabColors[tab.label]
                    : "bg-white/50 border-transparent hover:border-gray-300"
                }`}
              >
                <Icon
                  className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${
                    isActive ? "text-gray-900" : "text-blue-600"
                  }`}
                />
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              See how DexKor fits your business with a custom plan
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Chat with a DexKor expert to explore the platform, ask questions,
              and get pricing personalized to your company’s size and needs.
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-red-500 text-lg sm:text-xl">★★★★★</span>
              <p className="text-xs sm:text-sm text-gray-600">
                Loved by early adopters across SaaS, D2C, and Logistics
                industries. <br />
                Backed by CX leaders and powered by AI innovation.
              </p>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm sm:text-base"
                />
              </div>
              <input
                type="email"
                placeholder="Work email"
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base"
              />
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base"
                defaultValue={selectedSize}
              >
                {companySizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
              <select className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base">
                <option>United States</option>
                <option>India</option>
                <option>United Kingdom</option>
                <option>Canada</option>
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
              className="mt-6 block w-full bg-black text-white font-medium py-3 rounded-lg text-center hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Choose date & time
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
