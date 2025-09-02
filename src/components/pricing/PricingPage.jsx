import React, { useState } from "react";
import PricingSection from "./PricingSection";
import FeaturesSection from "./FeaturesSection";
import { Users, Globe, Shield, Zap, ArrowRight } from "lucide-react";

const companySize = [
  { label: "1-10 people", value: "1-10", icon: Users },
  { label: "11-50 people", value: "11-50", icon: Users },
  { label: "51-200 people", value: "51-200", icon: Globe },
  { label: "200+ people", value: "200+", icon: Shield },
];

const PricingPage = () => {
  const [selectedSize, setSelectedSize] = useState("1-10");

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-16 text-center overflow-hidden">
        {/* 🌊 Animated Gradient Waves */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>

        {/* ✨ Animated Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fadeInDown">
            <Zap className="w-4 h-4" />
            <span>DexKor Pricing</span>
          </div>

          {/* 💡 Animated Gradient Headline */}
          <h1 className="headline-gradient text-5xl md:text-6xl font-extrabold mb-8">
         Clear, fair pricing that scales from startup to enterprise.
          </h1>

          <p
            className="text-gray-600 text-xl leading-relaxed mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
          Whether you’re closing deals, onboarding customers, managing support tickets, or driving renewals, you can do it all with DexKor.

          </p>

          {/* Company Size Selector */}
          <div className="mb-8">
            <p className="text-gray-700 font-semibold mb-4">
              What is the size of your company?
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {companySize.map((size, index) => {
                const Icon = size.icon;
                return (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      selectedSize === size.value
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200"
                    }`}
                    style={{
                      animationDelay: `${0.4 + index * 0.1}s`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        selectedSize === size.value
                          ? "text-white"
                          : "text-gray-500 group-hover:text-gray-700"
                      }`}
                    />
                    <span>{size.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Bottom CTA */}
      <section className="relative bg-gradient-to-r from-blue-200 to-blue-400 text-white text-center py-20 px-6 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* 🔥 Gradient Heading with Wavy Motion */}
          <h2 className="wavy-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Find out why Deel is trusted by more than
            <span className="text-blue-200">
              {" "}
              35,000 leading global companies
            </span>
          </h2>

          <p
            className="text-blue-50 text-lg mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Join thousands of companies that have transformed their global
            workforce management with Deel
          </p>
          <button
            className="group bg-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 animate-fadeInUp flex items-center space-x-2 mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="headline-gradient">Book a Demo</span>
            <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        /* Fade Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        /* 🌊 Waves */
        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(59, 130, 246, 0.15),
            transparent 70%
          );
          animation: waveMove 12s infinite linear;
          border-radius: 45%;
        }
        .wave1 {
          animation-duration: 18s;
        }
        .wave2 {
          animation-duration: 22s;
          opacity: 0.7;
        }
        .wave3 {
          animation-duration: 28s;
          opacity: 0.5;
        }

        @keyframes waveMove {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* ✨ Particles */
        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, transparent 70%);
          animation: floatParticle 10s ease-in-out infinite,
            colorShift 6s infinite alternate;
        }
        @keyframes floatParticle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50px) scale(1.4);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
        }
        @keyframes colorShift {
          0% {
            background: radial-gradient(circle, #3b82f6, transparent 70%);
          }
          25% {
            background: radial-gradient(circle, #60a5fa, transparent 70%);
          }
          50% {
            background: radial-gradient(circle, #38bdf8, transparent 70%);
          }
          75% {
            background: radial-gradient(circle, #0ea5e9, transparent 70%);
          }
          100% {
            background: radial-gradient(circle, #2563eb, transparent 70%);
          }
        }

        /* Floating Circles */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* 🌈 Animated Gradient Headline & Button Text */
        .headline-gradient {
          background: linear-gradient(
            270deg,
            #3b82f6,
            #60a5fa,
            #38bdf8,
            #0ea5e9
          );
          background-size: 800% 800%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 10s ease infinite,
            fadeInUp 1.2s ease-out forwards;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
            0 0 35px rgba(96, 165, 250, 0.3), 0 0 50px rgba(14, 165, 233, 0.2);
        }
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* 🎵 Wavy Heading Animation */
        .wavy-heading {
          display: inline-block;
          animation: floatWave 4s ease-in-out infinite;
        }
        @keyframes floatWave {
          0% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-6px) rotate(-1deg);
          }
          50% {
            transform: translateY(3px) rotate(1deg);
          }
          75% {
            transform: translateY(-4px) rotate(-1deg);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default PricingPage;
