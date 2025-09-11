import React from 'react'
import { useState } from "react";

const Form = () => {
    const companySizes = [
  { label: "1-20 people", value: "1-20" },
  { label: "21-200 people", value: "21-200" },
  { label: "2,000+ people", value: "2000+" },
];

const [selectedSize, setSelectedSize] = useState(null);
  return (
   <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
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
  )
}

export default Form