// src/components/StartupOffer.jsx
import React from "react";
import { Check } from "lucide-react";

export default function StartupOffer() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Exclusive Offer */}
        <div className="border-b border-gray-800 pb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Exclusive offer for early-stage startups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div>
              <h3 className="text-lg font-medium">
                12 Months Free — Up to $10K Credits
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Kickstart with DexKor at zero cost. Get up to $6K credits
                instantly at signup and another $4K by completing onboarding
                milestones.
              </p>
            </div>

            {/* Offer 2 */}
            <div>
              <h3 className="text-lg font-medium">50% Off on Renewal Commit</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Lock in long-term savings — enjoy 50% off your first annual plan
                if you commit within 6 months of activating credits.
              </p>
            </div>

            {/* Offer 3 */}
            <div>
              <h3 className="text-lg font-medium">Technical & Success Enablement</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Beyond credits, gain access to customer success playbooks, AI
                training guides, and success experts to help your team scale
                smarter.
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="pt-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Eligibility Criteria
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start justify-between border-b border-gray-800 pb-4">
              <span>
                <strong>Early Stage</strong> <br />
                Backed by an incubator/accelerator or Seed/Series A funded
              </span>
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
            </li>
            <li className="flex items-start justify-between border-b border-gray-800 pb-4">
              <span>
                <strong>VC Ecosystem Portfolio</strong> <br />
                Part of a DexKor partner VC/founder community
              </span>
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
            </li>
            <li className="flex items-start justify-between">
              <span>
                <strong>New Customer</strong> <br />
                Must be a new DexKor customer
              </span>
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
