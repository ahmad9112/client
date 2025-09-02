"use client";
import React from "react";
import { FaChartBar, FaStarOfLife, FaServer, FaHandshake, FaThLarge, FaLock } from "react-icons/fa";

export default function DeelFeatures() {
  return (
    <section className="relative w-full bg-[#1a1a1a] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Feature 1 */}
        <div>
          <FaChartBar className="text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Powerful reporting</h3>
          <p className="text-gray-300">
            Unlock unrivalled insights into spending and performance with compensation, OKRs, equity and more for your team in one system.
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <FaStarOfLife className="text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Scalability</h3>
          <p className="text-gray-300">
            From contractors and EOR to payroll and PEO, Deel’s the only platform that can evolve with every stage of your company’s growth.
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <FaServer className="text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Dedicated support</h3>
          <p className="text-gray-300">
            We don’t rely on third parties, which means you’ll get a single dedicated POC with guaranteed 1.25 min FRT.
          </p>
        </div>

        {/* Feature 4 */}
        <div>
          <FaHandshake className="text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Trusted partner</h3>
          <p className="text-gray-300">
            Engage with one partner for your global growth. From M&As to entity setup, partner with our in-house team for all your expansion needs.
          </p>
        </div>

        {/* Feature 5 */}
        <div>
          <FaThLarge className="text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Seamless Integration</h3>
          <p className="text-gray-300">
            Eliminate data silos and reduce manual work with 100+ integrations across your tech stack.
          </p>
        </div>

        {/* Feature 6 */}
        <div>
          <FaLock className="text-4xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Unrivalled security</h3>
          <p className="text-gray-300">
            Our platform is GDPR, SOC2, and ISO 27001 compliant for maximum security.
          </p>
        </div>
      </div>

      {/* Angled Bottom Black Section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-black" 
           style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0% 100%)" }}>
      </div>
      
    </section>
  );
}
