"use client";
import React, { useState, useMemo } from "react";
import jx from "../../assets/jx.jpg";
import jxx from "../../assets/jxx.jpg";
import DevRevMain from "./DevRevMain";

// Constants for better maintainability
const TABS = {
  SUPPORT: "Support",
  BUILD: "Build",
  PLUGAPP: "PlugApp",
  ANALYTICS_360: "360Analytics",
  AGENT_OS: "AgentOS",
  DEVREV_STARTUPS: "DevRevStartups"
};

// Reusable components
const SidebarItem = ({ label, isActive, onClick, badge }) => (
  <li
    onClick={onClick}
    className={`cursor-pointer hover:text-black ${
      isActive ? "font-bold text-black" : "text-gray-600"
    }`}
  >
    {label}
    {badge && <span className={badge.className}>{badge.text}</span>}
  </li>
);

const PricingCard = ({ title, price, priceSubtext, features, buttonText, bgClass = "", isPopular = false, popularBadge }) => (
  <div className={`border rounded-xl shadow-sm p-6 flex flex-col ${bgClass}`}>
    <h3 className="text-lg font-semibold mb-2">
      {title}
      {isPopular && popularBadge && (
        <span className={`ml-2 text-xs px-2 py-1 rounded-full ${popularBadge.className}`}>
          {popularBadge.text}
        </span>
      )}
    </h3>
    <p className="text-3xl font-bold mb-2">{price}</p>
    {priceSubtext && <p className="text-sm mb-4">{priceSubtext}</p>}
    <ul className="text-sm text-gray-700 mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index}>✔ {feature}</li>
      ))}
    </ul>
    <button className="mt-auto w-full py-3 rounded-lg bg-black text-white hover:bg-gray-900">
      {buttonText}
    </button>
  </div>
);

const FeatureTable = ({ title, features }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">Features</th>
          <th className="border px-4 py-2">Starter</th>
          <th className="border px-4 py-2">Pro</th>
          <th className="border px-4 py-2">Ultimate</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{feature.name}</td>
            <td className="border px-4 py-2">{feature.starter}</td>
            <td className="border px-4 py-2">{feature.pro}</td>
            <td className="border px-4 py-2">{feature.ultimate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState(TABS.SUPPORT);

  // Memoized data structures
  const sidebarSections = useMemo(() => [
    {
      title: "Products",
      items: [
        { key: TABS.SUPPORT, label: "Support" },
        { key: TABS.BUILD, label: "Build" }
      ]
    },
    {
      title: "In-app Services",
      items: [
        { 
          key: TABS.PLUGAPP, 
          label: "PlugApp", 
          badge: { text: "FREE", className: "text-green-600 text-xs ml-1" }
        }
      ]
    },
    {
      title: "Platform Services",
      items: [
        { 
          key: TABS.ANALYTICS_360, 
          label: "360 Analytics", 
          badge: { text: "(Coming soon)", className: "text-xs text-gray-500" }
        },
        { key: TABS.AGENT_OS, label: "AgentOS" }
      ]
    },
    {
      title: "Programs",
      items: [
        { key: TABS.DEVREV_STARTUPS, label: "DevRev for Startups" }
      ]
    }
  ], []);

  const supportPlans = useMemo(() => [
    {
      title: "Starter",
      price: "$19.99",
      priceSubtext: "per user/month",
      features: [
        "AI agents, assistants, and deflection",
        "Modern omnichannel ticketing platform",
        "Data migration and integrations",
        "Ready to go reporting and analytics"
      ],
      buttonText: "Get started free"
    },
    {
      title: "Pro",
      price: "$59.99",
      priceSubtext: "per user/month",
      features: [
        "Everything in Starter",
        "Advanced reporting & analytics",
        "Custom AI-based routing policies",
        "Customizable object and data types"
      ],
      buttonText: "Get started free",
      bgClass: "bg-purple-50",
      isPopular: true,
      popularBadge: { text: "Popular", className: "bg-purple-200" }
    },
    {
      title: "Ultimate",
      price: "Let's talk",
      priceSubtext: "per user/month",
      features: [
        "Everything in Pro",
        "Full object model customization",
        "Unlimited integrations",
        "Enterprise-grade security, compliance, and controls"
      ],
      buttonText: "Get a demo"
    }
  ], []);

  const buildPlans = useMemo(() => [
    {
      title: "Starter",
      price: "$9.99",
      priceSubtext: "per user/month",
      features: [
        "AI agents, assistants, and issue tracking",
        "Project management",
        "Seamless progress and dependency tracking",
        "Ready-to-go reporting and analytics"
      ],
      buttonText: "Get started free"
    },
    {
      title: "Pro",
      price: "$24.99",
      priceSubtext: "per user/month",
      features: [
        "Everything in Starter",
        "Customizable issue management",
        "Advanced reporting & analytics"
      ],
      buttonText: "Get started free",
      bgClass: "bg-blue-50",
      isPopular: true,
      popularBadge: { text: "Popular", className: "bg-blue-200" }
    },
    {
      title: "Ultimate",
      price: "Let's talk",
      priceSubtext: "per user/month",
      features: [
        "Everything in Pro",
        "Full object model customization",
        "Unlimited integrations",
        "Enterprise-grade security, compliance, and controls"
      ],
      buttonText: "Get a demo",
      bgClass: "bg-gray-100"
    }
  ], []);

  const plugAppPlans = useMemo(() => [
    {
      title: "Free",
      price: "",
      priceSubtext: "The easiest way to get started with AI powered search.",
      features: [
        "GenAI powered search",
        "One simple SDK"
      ],
      buttonText: "Get started - Free forever"
    },
    {
      title: "Flexible",
      price: "",
      priceSubtext: "Pay as you go – AI Engage, eStores, better together.",
      features: [
        "AI powered search & deflections",
        "In-app Agents",
        "Product-led support observability",
        "Session insights"
      ],
      buttonText: "Get started free",
      bgClass: "bg-yellow-50"
    },
    {
      title: "Ultimate",
      price: "",
      priceSubtext: "Scale with PlusInfra enhanced functionality.",
      features: [
        "Overcome design bottlenecks",
        "Advanced Session Filtering",
        "Enterprise-grade security, compliance, controls, and policies"
      ],
      buttonText: "Contact sales",
      bgClass: "bg-black text-white"
    }
  ], []);

  const featureTables = useMemo(() => [
    {
      title: "AI Agents and AI",
      features: [
        { name: "Customer Service AI Agent", starter: "✔", pro: "✔", ultimate: "✔" },
        { name: "Data Analyst AI Agent", starter: "Early Access", pro: "Early Access", ultimate: "Early Access" },
        { name: "AI Awareness", starter: "Add-on", pro: "Add-on", ultimate: "Custom" },
        { name: "Dedicated Prompt Engineering Support", starter: "", pro: "", ultimate: "Custom" }
      ]
    },
    {
      title: "Messaging and Live Chat",
      features: [
        { name: "Unified Inbox", starter: "✔", pro: "✔", ultimate: "✔" },
        { name: "Skills Based Routing", starter: "", pro: "Coming Soon", ultimate: "Coming Soon" },
        { name: "PlugChat Custom Branding", starter: "", pro: "", ultimate: "Custom" }
      ]
    },
    {
      title: "Ticket Management",
      features: [
        { name: "Custom Ticket Fields", starter: "5", pro: "40", ultimate: "Customizable" },
        { name: "Org Schedules", starter: "1", pro: "3", ultimate: "Unlimited" },
        { name: "CSAT Surveys", starter: "", pro: "Customizable", ultimate: "Customizable" }
      ]
    }
  ], []);

  const agentOSFeatures = useMemo(() => [
    {
      title: "Airdrop",
      description: "Large-scale data ingestion and unification from unlimited sources with near real-time syncs."
    },
    {
      title: "Knowledge graph",
      description: "Organize data from multiple sources into a connected graph with customization."
    },
    {
      title: "Conversational search",
      description: "Advanced search powered by your preferred LLM with extended history retention."
    },
    {
      title: "Agentic workflows",
      description: "Deploy AI-powered workflows with automation, decision nodes, and orchestration."
    },
    {
      title: "Natural language analytics",
      description: "Query business data with natural language and visualize with flexible reporting."
    },
    {
      title: "360 Analytics",
      description: "Gain a 360° view into customers, products, users, and sessions."
    }
  ], []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderSidebar = () => (
    <div className="w-64 border-r p-6 text-sm text-gray-800">
      {sidebarSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-lg font-semibold mb-4 mt-6 first:mt-0">{section.title}</h2>
          <ul className="space-y-3">
            {section.items.map((item) => (
              <SidebarItem
                key={item.key}
                label={item.label}
                isActive={activeTab === item.key}
                onClick={() => handleTabChange(item.key)}
                badge={item.badge}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderPricingCards = (plans) => (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );

  const renderAnalyticsSection = () => (
    <>
      <div className="text-center mb-12">
        <p className="uppercase text-xs font-semibold text-gray-400 mb-2">
          Platform
        </p>
        <h1 className="text-4xl font-bold mb-4">
          Robust data platform. <br /> Purpose-built for tech.
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Reimagine data—efficiently converge data to get personalized,
          unique, and actionable insights with low-latency performance.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
            Book a demo
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-200 text-black font-medium hover:bg-gray-300">
            Start for free
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-8">
        <img
          src={jx}
          alt="Analytics Dashboard"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-5xl mx-auto mb-8">
        <img
          src={jxx}
          alt="Analytics Insights"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <video
          src="/video/jxxx.mp4"
          controls
          loop
          muted
          className="rounded-lg shadow-lg w-full"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">
          Blazing fast turnkey data platform
        </h2>
        <p className="text-gray-500 mb-6">
          Retrieve millions of records in seconds and uncover insights
          using high performance feather-light database technologies right
          in your browser.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
            Book a demo
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-200 text-black font-medium hover:bg-gray-300">
            Start for free
          </button>
        </div>
      </div>
    </>
  );

  const renderAgentOSSection = () => (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border rounded-xl shadow-sm p-8 flex flex-col bg-black text-white">
          <h3 className="text-xl font-semibold mb-4">Ultimate</h3>
          <p className="text-2xl font-bold mb-4">Let's talk</p>
          <p className="text-sm mb-6">
            Enterprise scale and flexibility to meet any requirement.
          </p>
          <ul className="text-sm space-y-3 mb-6">
            <li>✔ Flexible pricing models (usage-based or seat-based)</li>
            <li>✔ Full object model & customization</li>
            <li>✔ Unlimited projects and integrations</li>
            <li>✔ Enterprise-grade security, compliance, and controls</li>
          </ul>
          <button className="mt-auto w-full py-3 rounded-lg bg-white text-black hover:bg-gray-200">
            Contact sales
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-8">
        Agent OS — Make your company AI ready
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {agentOSFeatures.map((feature, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case TABS.SUPPORT:
        return (
          <>
            {renderPricingCards(supportPlans)}
            <div className="space-y-12">
              {featureTables.map((table, index) => (
                <FeatureTable key={index} {...table} />
              ))}
            </div>
          </>
        );
      case TABS.BUILD:
        return renderPricingCards(buildPlans);
      case TABS.PLUGAPP:
        return renderPricingCards(plugAppPlans);
      case TABS.ANALYTICS_360:
        return renderAnalyticsSection();
      case TABS.AGENT_OS:
        return renderAgentOSSection();
      case TABS.DEVREV_STARTUPS:
        return <DevRevMain />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {renderSidebar()}
      <div className="flex-1 p-10">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default PricingPage;