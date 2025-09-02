"use client";
import React, { useState } from "react";

const companySizes = ["1–20", "21–50", "51–200", "201–500", "500+ people"];
const countries = [
  "United States",
  "India",
  "United Kingdom",
  "Canada",
  "Germany",
  "Australia",
  "Singapore",
  "Brazil",
  "Other",
];

const PricingSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companySize: "",
    headquarters: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    // Redirect to Cal.com scheduling link
    window.open(
      "https://cal.com/richard-samuel/let-s-talk-cx-saas-growth",
      "_blank"
    );
  };

  return (
    <section className="relative bg-white py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Clear, fair pricing that scales from startup to enterprise.
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you’re closing deals, onboarding customers, managing support
          tickets, or driving renewals, you can do it all with DexKor.
        </p>

        {/* CTA to Open Modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Custom Pricing
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h3 className="text-2xl font-bold text-gray-900">
              See how DexKor fits your business with a custom plan
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Chat with a DexKor expert to explore the platform, ask questions,
              and get pricing personalized to your company’s size and needs.
            </p>

            {/* Ratings Row */}
            <div className="mt-4 flex items-center gap-2 text-red-500">
              <span className="text-xl">⭐️⭐️⭐️⭐️⭐️</span>
              <p className="text-sm text-gray-600">Loved by SaaS teams worldwide</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First name"
                  className="w-full border rounded-lg p-3 text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last name"
                  className="w-full border rounded-lg p-3 text-sm"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Work email"
                className="w-full border rounded-lg p-3 text-sm"
              />

              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 text-sm"
              >
                <option value="">Company size</option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              <select
                name="headquarters"
                value={formData.headquarters}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 text-sm"
              >
                <option value="">Headquarters</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <p className="text-xs text-gray-500 mt-2">
                We respect your data. By submitting this form, you agree that we
                may contact you about DexKor’s products and services, in
                accordance with our Privacy Policy.
              </p>

              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Choose date & time
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
