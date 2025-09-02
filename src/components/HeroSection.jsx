"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import all 11 logos
import logo1 from "../assets/logo/logo1.png";
import logo2 from "../assets/logo/logo2.png";
import logo3 from "../assets/logo/logo3.png";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";
import logo6 from "../assets/logo/logo6.png";
import logo7 from "../assets/logo/logo7.png";
import logo8 from "../assets/logo/logo8.png";
import logo9 from "../assets/logo/logo9.png";
import logo10 from "../assets/logo/logo10.png";
import logo11 from "../assets/logo/logo11.png";

export default function HeroSection() {
  const features = ["Success", "Support", "Insights", "Recognition", "Growth"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const backedBy = [logo1, logo2, logo11];
  const trustedBy = [logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo3];

  return (
    <section className="w-full overflow-hidden font-satoshi">
      {/* Hero Section (Sky Blue background) */}
      <div
        className="relative bg-[#B5DCFF] pb-16 sm:pb-20"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 10% 95%, 0 100%)",
        }}
      >
        {/* Hero Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight mb-6">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="bg-white px-2 inline-block rounded-md"
              >
                {features[index]}
              </motion.span>
              <br />
              for modern teams
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Manage customer health, renewals, and growth with AccountCare.
              Deliver faster resolutions with AI-powered HelpDesk. Ask Dexy —
              your OrgGPT for instant knowledge & sentiment insights. Boost
              employee engagement with StarBoard kudos & rewards. Unify RevOps,
              CXOps, and TeamOps into one connected platform.
            </p>

            {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
  <a
    href="https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 sm:px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition text-center text-sm sm:text-base"
  >
    Get a free 30-min demo
  </a>
  <button className="px-5 sm:px-6 py-3 bg-white text-black border rounded-full font-medium hover:bg-gray-100 transition text-sm sm:text-base">
    Speak to sales
  </button>
</div>

          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] aspect-video shadow-xl rounded-xl overflow-hidden">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Logos Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8">
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-[37%_63%] gap-8 sm:gap-12 pt-6 sm:pt-8">
            
            {/* Backed By (Static, Responsive, No Cutoff) */}
            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-6">
                Backed By
              </h3>
              <div className="flex flex-wrap md:flex-nowrap gap-5 sm:gap-8 md:gap-10 justify-center md:justify-start">
                {backedBy.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`backed-logo-${i}`}
                    className="max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-20 w-auto max-w-[150px] object-contain opacity-80 hover:opacity-100 transition"
                  />
                ))}
              </div>
            </div>

            {/* Trusted By (Scrolling, Responsive, No Cutoff) */}
            <div className="text-center md:text-left  md:pl-8 overflow-hidden">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-6">
                Trusted By
              </h3>
              <motion.div
                className="flex flex-nowrap whitespace-nowrap gap-6 sm:gap-8 md:gap-10"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              >
                {[...trustedBy, ...trustedBy].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`trusted-logo-${i}`}
                    className="max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-20 w-auto max-w-[150px] object-contain opacity-80 hover:opacity-100 transition inline-block"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-[#FFFCF5] py-10 sm:py-12 md:py-16 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight tracking-tight font-satoshi max-w-3xl mx-auto">
          DexKor is your AI-powered Suite for Pre & Post-Sales Success.
        </h2>
      </div>
    </section>
  );
}
