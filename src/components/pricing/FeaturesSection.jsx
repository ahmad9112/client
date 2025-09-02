import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const features = [
  {
    tab: "Global HRIS",
    title: "Access robust, built-in HRIS features included at no extra cost",
    description:
      "Manage your entire workforce—employees, contractors, and vendors—in one centralized system. With automated onboarding, time tracking, document management, and reporting, Deel's HRIS keeps everything organized and compliant across multiple countries.",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlights: [
      "Centralized employee database",
      "Automated onboarding workflows",
      "Document management system",
      "Global compliance tracking",
    ],
  },
  {
    tab: "Workflows",
    title: "Trigger and schedule tasks, training, emails across Slack, Jira, and more",
    description:
      "Automate complex HR, payroll, and compliance processes with customizable workflows. From reminders and expense submissions to onboarding and offboarding, Deel's workflow automation reduces manual work and ensures consistency at scale.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlights: [
      "Custom workflow builder",
      "Multi-platform integrations",
      "Automated task scheduling",
      "Real-time notifications",
    ],
  },
  {
    tab: "Reporting and Analytics",
    title: "Get instant insights into your global workforce",
    description:
      "Deel provides detailed dashboards on payroll, headcount, performance, and compliance, helping businesses make data-driven decisions with confidence across all global operations.",
    img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlights: [
      "Real-time workforce analytics",
      "Custom report generation",
      "Compliance monitoring",
      "Performance insights",
    ],
  },
  {
    tab: "Integrations",
    title: "Integrate with over 68+ different tools",
    description:
      "Seamlessly connect Deel with your existing HR, finance, and productivity tools. Deel integrates with platforms like Workday, SAP, QuickBooks, Greenhouse, and more, enabling smooth data synchronization across systems.",
    img: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlights: [
      "68+ tool integrations",
      "API-first architecture",
      "Real-time data sync",
      "Custom integration support",
    ],
  },
  {
    tab: "Continuous Compliance",
    title: "Leverage a real-time overview of workforce compliance status",
    description:
      "Stay ahead of global compliance risks with Deel's Compliance Hub. Access real-time legal updates, automated classification checks, and country-specific labor law insights to ensure full regulatory compliance.",
    img: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlights: [
      "Real-time compliance monitoring",
      "Automated risk assessment",
      "Legal update notifications",
      "Country-specific guidance",
    ],
  },
  {
    tab: "Deel AI",
    title: "Get global HR answers and insights fast with Deel AI",
    description:
      "Leverage the power of AI to optimize HR and payroll operations. Deel AI enhances decision-making with smart recommendations, automates document reviews, and simplifies employee queries—making workforce management faster and more efficient.",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlights: [
      "AI-powered insights",
      "Smart recommendations",
      "Automated document processing",
      "Intelligent query responses",
    ],
  },
];

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful platform features included with every product
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Deel's all-in-one platform empowers businesses with advanced HR,
            compliance, and automation tools to streamline global workforce
            management. When you purchase and onboard to any Deel product, you
            also get access to all of these powerful tools.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-800 rounded-2xl p-1 overflow-x-auto">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out whitespace-nowrap ${
                  activeTab === index
                    ? "bg-white text-gray-900 shadow-lg transform scale-105"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                <span className="relative z-10">{feature.tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div key={activeTab} className="space-y-6 animate-fadeInLeft">
            <h3 className="text-3xl font-bold leading-tight">
              {features[activeTab].title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {features[activeTab].description}
            </p>

            {/* Feature Highlights */}
            <div className="space-y-3">
              {features[activeTab].highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${i * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>

            <button className="group mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Book a demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div
              key={`img-${activeTab}`}
              className="relative overflow-hidden rounded-2xl shadow-2xl animate-fadeInRight"
            >
              <img
                src={features[activeTab].img}
                alt={features[activeTab].tab}
                className="w-full h-80 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg animate-bounce">
              {features[activeTab].tab}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
