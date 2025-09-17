"use client";
import React, { useState, useMemo } from "react";
import Form from "../Form";
import StartupOffer from "./StartupOffer";

// ✅ Tabs (constants)
const TABS = {
  REVOPS_HUB: "RevOps Hub",
  ADSUITE: "AdSuite",
  SALESHUB: "SalesHub",
  DEMO_DESK: "DemoDesk",
  CXOPS_HUB: "CXOps Hub",
  ONBOARD_HUB: "OnBoardHub",
  HELPDESK: "HelpDesk",
  ACCOUNT_CARE: "AccountCare",
  ANSWARE_PRO: "AnswarePro",
  TEAMOPS_HUB: "TeamOps Hub",
  PRODUCT_PRO: "ProductPro",
  DEVCORE: "DevCore",
  LEARNHUB: "LearnHub",
  STARBOARD: "StarBoard",
  AI_Copilot: "AI Copilot",
  DEXY: "Dexy",
  INTEGRATIONS_HUB: "Integrations Hub",
  WORKFLOW_AUTOMATION: "Workflow Automation",
  DEXKOR_FOR_STARTUPS: "Dexkor for Startups",
  EARLY_ADOPTER_PROGRAM: "Early Adopter Program",
};

// ✅ Sidebar item
const SidebarItem = ({ label, isActive, onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  return (
    <li>
      <div
        onClick={() => (hasChildren ? setIsOpen(!isOpen) : onClick(label))}
        className={`flex justify-between items-center cursor-pointer px-2 py-1 rounded hover:bg-gray-100 ${
          isActive === label ? "font-bold text-black" : "text-gray-600"
        }`}
      >
        {label}
        {hasChildren && (
          <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
        )}
      </div>
      {hasChildren && isOpen && (
        <ul className="ml-4 mt-1 space-y-1">
          {children.map((child) => (
            <li
              key={child.key}
              onClick={() => onClick(child.key)}
              className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-100 ${
                isActive === child.key
                  ? "font-bold text-black"
                  : "text-gray-500"
              }`}
            >
              {child.label}
              {child.comingSoon && (
                <span className="ml-2 text-xs text-gray-400">
                  (Coming Soon)
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// ✅ Mobile menu toggle
const MobileMenuToggle = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
    aria-label="Toggle menu"
  >
    {isOpen ? (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

// ✅ Pricing Content for OnBoardHub and SalesHub
const renderOnBoardHubPricing = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">OnBoardHub Pricing</h1>
    {/* Pricing Plans */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Starter */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-500 mb-4">Ideal for small teams</p>
        <p className="text-3xl font-bold mb-6">$15</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Basic onboarding playbooks</li>
          <li>✔ Task assignments & tracking</li>
          <li>✔ Progress dashboard</li>
          <li>✔ 1 integration</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>
      {/* Growth */}
      <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-2">
          Growth <span className="text-sm text-green-600">(Most Popular)</span>
        </h2>
        <p className="text-gray-500 mb-4">For scaling teams</p>
        <p className="text-3xl font-bold mb-6">$39</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Automated workflows & alerts</li>
          <li>✔ Customer-facing onboarding portal</li>
          <li>✔ Advanced reporting</li>
          <li>✔ CRM integrations (HubSpot, Salesforce)</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>
      {/* Enterprise */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
        <p className="text-gray-500 mb-4">For large orgs</p>
        <p className="text-3xl font-bold mb-6">Let’s Talk</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Multi-team onboarding collaboration</li>
          <li>✔ Custom journey builder</li>
          <li>✔ Dedicated onboarding manager</li>
          <li>✔ Advanced analytics & API access</li>
          <li>✔ Enterprise-grade security & SSO</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg w-full">
          Book a demo
        </button>
      </div>
    </div>
    {/* Feature Comparison Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Features</th>
            <th className="p-3 border text-center">Starter</th>
            <th className="p-3 border text-center">Growth</th>
            <th className="p-3 border text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Onboarding playbooks</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Task assignments</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr>
            <td className="p-3 border">Customer portal</td>
            <td className="p-3 border text-center">—</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">CRM Integrations</td>
            <td className="p-3 border text-center">—</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr>
            <td className="p-3 border">Custom journey builder</td>
            <td className="p-3 border text-center">—</td>
            <td className="p-3 border text-center">—</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Dedicated manager</td>
            <td className="p-3 border text-center">—</td>
            <td className="p-3 border text-center">—</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const renderSalesHubPricing = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">SalesHub Pricing</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Starter */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h2 className="text-xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-500 mb-4">Ideal for startups and small sales teams</p>
        <p className="text-3xl font-bold mb-6">$19<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Basic pipeline tracking</li>
          <li>✔ Lead capture & management</li>
          <li>✔ 1 integration (e.g., Slack)</li>
          <li>✔ Standard reporting</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition">Get started free</button>
      </div>

      {/* Growth */}
      <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h2 className="text-xl font-semibold mb-2">Growth <span className="text-sm text-green-600">(Most Popular)</span></h2>
        <p className="text-gray-500 mb-4">For scaling sales teams needing automation & insights</p>
        <p className="text-3xl font-bold mb-6">$49<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Starter</li>
          <li>✔ All lead scoring & prioritization</li>
          <li>✔ Multi-pipeline support</li>
          <li>✔ Advanced reporting & dashboards</li>
          <li>✔ CRM integrations (HubSpot, Salesforce)</li>
          <li>✔ Team collaboration tools</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition">Get started free</button>
      </div>

      {/* Enterprise */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
        <p className="text-gray-500 mb-4">Large/global sales orgs with complex workflows</p>
        <p className="text-3xl font-bold mb-6">Let's talk</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Growth</li>
          <li>✔ Unlimited pipelines & advanced custom fields</li>
          <li>✔ AI deal insights & forecasting</li>
          <li>✔ Territory & role-based permissions</li>
          <li>✔ Dedicated success manager</li>
          <li>✔ Enterprise security (SSO, SOC2, GDPR)</li>
          <li>✔ Custom API & workflow automation</li>
          <li>✔ Dedicated success manager + 24/7 support</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-900 transition">Book a demo</button>
      </div>
    </div>

    {/* Feature Comparison Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Feature Group</th>
            <th className="p-3 border text-center">Starter</th>
            <th className="p-3 border text-center">Growth</th>
            <th className="p-3 border text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Lead & contact mgmt", "Basic", "Full", "Full"],
            ["Visual pipeline & deal mgmt", "1 pipeline", "Multi-pipeline", "Unlimited + custom fields"],
            ["Task automation", "Basic", "Advanced", "Advanced + custom workflows"],
            ["Email templates", "Limited", "Full", "Advanced + personalization"],
            ["All lead scoring", "Basic", "Full", "Advanced + forecasting"],
            ["Sales forecasting", "Basic", "Basic", "Advanced"],
            ["Team collaboration", "Notes", "Handoff", "Deal rooms + advanced"],
            ["Reports & dashboards", "Standard", "Advanced", "Custom + scheduled"],
            ["Integrations", "1", "Popular apps", "Full + API"],
            ["Role-based permissions", "✘", "✘", "✔"],
            ["Security & compliance", "✘", "✘", "SSO, SOC2, GDPR"],
            ["Dedicated success manager", "✘", "✘", "✔"]
          ].map((row, i) => (
            <tr
              key={i}
              className={`transition duration-300 ease-in-out hover:bg-blue-50 hover:scale-[1.01] ${i % 2 === 1 ? "bg-gray-50" : ""}`}
            >
              <td className="p-3 border">{row[0]}</td>
              <td className="p-3 border text-center">{row[1]}</td>
              <td className="p-3 border text-center">{row[2]}</td>
              <td className="p-3 border text-center">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const renderHelpDeskPricing = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">HelpDesk Pricing</h1>
    {/* Pricing Plans */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Starter */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-500 mb-4">Ideal for small support teams</p>
        <p className="text-3xl font-bold mb-6">$19<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Omnichannel inbox (Email, Chat, WhatsApp)</li>
          <li>✔ SLA tracking basics</li>
          <li>✔ CSAT survey integration</li>
          <li>✔ Lite knowledge base sync (AnswerPro Lite)</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>
      {/* Growth */}
      <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Growth <span className="text-sm text-green-600">(Most Popular)</span></h2>
        <p className="text-gray-500 mb-4">For scaling support teams needing automation</p>
        <p className="text-3xl font-bold mb-6">$49<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Starter</li>
          <li>✔ AI ticket categorization & auto-summaries</li>
          <li>✔ SLA automation + breach alerts</li>
          <li>✔ Advanced dashboards</li>
          <li>✔ CRM & Slack integrations</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>
      {/* Enterprise */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
        <p className="text-gray-500 mb-4">For enterprises running global support</p>
        <p className="text-3xl font-bold mb-6">Let's talk</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Growth</li>
          <li>✔ AI-powered AutoQA + Sentiment analysis</li>
          <li>✔ Custom workflows & rules</li>
          <li>✔ Dedicated success manager</li>
          <li>✔ Enterprise-grade compliance (SOC2, GDPR, SSO)</li>
          <li>✔ Custom API integrations</li>
          <li>✔ Dedicated success manager + 24/7 support</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg w-full">
          Book a demo
        </button>
      </div>
    </div>
    {/* Feature Comparison Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Feature Group</th>
            <th className="p-3 border text-center">Starter</th>
            <th className="p-3 border text-center">Growth</th>
            <th className="p-3 border text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Omnichannel Support</td>
            <td className="p-3 border text-center">Email & basic chat</td>
            <td className="p-3 border text-center">Email, Chat, WhatsApp, Portal, Slack</td>
            <td className="p-3 border text-center">Full channels (API, Social DMs, Teams)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">All Ticketing</td>
            <td className="p-3 border text-center">Basic inbox</td>
            <td className="p-3 border text-center">Multi-agent shared inbox</td>
            <td className="p-3 border text-center">Advanced filters, automation, custom rules</td>
          </tr>
          <tr>
            <td className="p-3 border">Knowledge Base Integration</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">Suggest KB articles (AnswerPro sync)</td>
            <td className="p-3 border text-center">Auto-surface AI-generated articles</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Workflows & SLA Management</td>
            <td className="p-3 border text-center">Manual routing, SLA timers</td>
            <td className="p-3 border text-center">Rule-based routing, SLA breach alerts</td>
            <td className="p-3 border text-center">Dynamic escalations, workflow automation</td>
          </tr>
          <tr>
            <td className="p-3 border">Sentiment & Context</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">Summarization & sentiment analysis</td>
            <td className="p-3 border text-center">Advanced sentiment AI + account context</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">CSAT/NPS Feedback</td>
            <td className="p-3 border text-center">CSAT surveys</td>
            <td className="p-3 border text-center">CSAT surveys</td>
            <td className="p-3 border text-center">CSAT + NPS + advanced feedback analytics</td>
          </tr>
          <tr>
            <td className="p-3 border">Collaboration</td>
            <td className="p-3 border text-center">Internal notes</td>
            <td className="p-3 border text-center">Mentions & shared ticket ownership</td>
            <td className="p-3 border text-center">Advanced collaboration rooms</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Reports & Dashboards</td>
            <td className="p-3 border text-center">Basic reports (TAT, volume)</td>
            <td className="p-3 border text-center">SLA metrics, agent KPIs</td>
            <td className="p-3 border text-center">Custom dashboards, scheduled reports</td>
          </tr>
          <tr>
            <td className="p-3 border">Integrations</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">Popular tools (Slack, HubSpot, Salesforce)</td>
            <td className="p-3 border text-center">Full integrations + API access</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Security & Compliance</td>
            <td className="p-3 border text-center">Basic access control</td>
            <td className="p-3 border text-center">Role-based permissions</td>
            <td className="p-3 border text-center">SSO, SOC2, GDPR, Audit logs</td>
          </tr>
          <tr>
            <td className="p-3 border">Support</td>
            <td className="p-3 border text-center">Email support</td>
            <td className="p-3 border text-center">Priority support</td>
            <td className="p-3 border text-center">24/7 support + dedicated success manager</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const renderDevCorePricing = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">DevCore Pricing</h1>
    
    {/* Pricing Plans */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Starter Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-500 mb-4">Ideal for small engineering teams</p>
        <p className="text-3xl font-bold mb-6">$15<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Project/task tracking</li>
          <li>✔ Sprint boards</li>
          <li>✔ Bug tracking basics</li>
          <li>✔ Basic reporting</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Growth Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Growth <span className="text-sm text-green-600">(Most Popular)</span></h2>
        <p className="text-gray-500 mb-4">Scaling product & dev teams</p>
        <p className="text-3xl font-bold mb-6">$39<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Starter</li>
          <li>✔ Cross-team collaboration</li>
          <li>✔ Advanced reporting & dashboards</li>
          <li>✔ GitHub/Jira integrations</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
        <p className="text-gray-500 mb-4">Large/global engineering orgs</p>
        <p className="text-3xl font-bold mb-6">Let's talk</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Growth</li>
          <li>✔ Enterprise-scale project governance</li>
          <li>✔ Role-based access control</li>
          <li>✔ API & workflow automation</li>
          <li>✔ Enterprise-grade compliance</li>
          <li>✔ Dedicated technical success manager</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg w-full">
          Book a demo
        </button>
      </div>
    </div>

    {/* Feature Comparison Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Feature Group</th>
            <th className="p-3 border text-center">Starter</th>
            <th className="p-3 border text-center">Growth</th>
            <th className="p-3 border text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Issue Management</td>
            <td className="p-3 border text-center">Basic issues, real-time collab</td>
            <td className="p-3 border text-center">Custom fields (40), clustering</td>
            <td className="p-3 border text-center">Fully customizable + smart automation</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Dependency Tracking</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔ Advanced</td>
          </tr>
          <tr>
            <td className="p-3 border">AI Agents & Copilots</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ In-app Copilot + auto-suggestions</td>
            <td className="p-3 border text-center">✔ Full AI suite (deduplication, clustering, analyst)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Semantic Search</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Advanced + cross-platform search</td>
          </tr>
          <tr>
            <td className="p-3 border">Automations & Workflows</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Task automation + templates</td>
            <td className="p-3 border text-center">✔ Advanced custom workflows + API triggers</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Analytics & Reporting</td>
            <td className="p-3 border text-center">Basic metrics</td>
            <td className="p-3 border text-center">Velocity, burndown, sprint analytics</td>
            <td className="p-3 border text-center">Custom dashboards + scheduled reporting</td>
          </tr>
          <tr>
            <td className="p-3 border">Integrations</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ GitHub, Slack, Jira</td>
            <td className="p-3 border text-center">✔ All integrations + API + webhooks</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Security & Compliance</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ SSO, SOC2, GDPR, audit logs</td>
          </tr>
          <tr>
            <td className="p-3 border">Support</td>
            <td className="p-3 border text-center">Email support</td>
            <td className="p-3 border text-center">Priority support</td>
            <td className="p-3 border text-center">24/7 support + dedicated success manager</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const renderAccountCarePricing = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">AccountCare Pricing</h1>

    {/* Pricing Plans */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Starter Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-500 mb-4">Ideal for small CS teams</p>
        <p className="text-3xl font-bold mb-6">$25<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Unified account profiles</li>
          <li>✔ Health scores & engagement tracking</li>
          <li>✔ Task management</li>
          <li>✔ Feedback capture</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Growth Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Growth <span className="text-sm text-green-600">(Most Popular)</span></h2>
        <p className="text-gray-500 mb-4">Scaling CS teams managing multiple accounts</p>
        <p className="text-3xl font-bold mb-6">$59<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Starter</li>
          <li>✔ AI churn prediction</li>
          <li>✔ Renewal & expansion playbooks</li>
          <li>✔ Alerts & risk signals</li>
          <li>✔ CRM & support integrations</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
        <p className="text-gray-500 mb-4">Enterprises with complex customer success orgs</p>
        <p className="text-3xl font-bold mb-6">Let's talk</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Growth</li>
          <li>✔ AI Opportunity Prediction</li>
          <li>✔ Advanced NRR dashboards</li>
          <li>✔ Custom workflows & escalations</li>
          <li>✔ Enterprise-grade security (SOC2, GDPR, SSO)</li>
          <li>✔ Dedicated success manager</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg w-full">
          Book a demo
        </button>
      </div>
    </div>

    {/* Feature Comparison Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Feature Group</th>
            <th className="p-3 border text-center">Starter</th>
            <th className="p-3 border text-center">Growth</th>
            <th className="p-3 border text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Customer 360 Profiles</td>
            <td className="p-3 border text-center">Basic account data</td>
            <td className="p-3 border text-center">Full account timeline</td>
            <td className="p-3 border text-center">Advanced + custom fields</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Health Scoring</td>
            <td className="p-3 border text-center">Manual scoring</td>
            <td className="p-3 border text-center">Automated health scores</td>
            <td className="p-3 border text-center">AI predictive scoring</td>
          </tr>
          <tr>
            <td className="p-3 border">Churn Risk Signals</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">Alerts for risks</td>
            <td className="p-3 border text-center">AI-driven churn prediction</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Playbooks & Automation</td>
            <td className="p-3 border text-center">Basic templates</td>
            <td className="p-3 border text-center">Renewal playbooks + workflows</td>
            <td className="p-3 border text-center">AI-driven expansion + renewal playbooks</td>
          </tr>
          <tr>
            <td className="p-3 border">Success Plans</td>
            <td className="p-3 border text-center">Static success plans</td>
            <td className="p-3 border text-center">Editable success plans</td>
            <td className="p-3 border text-center">Dynamic, AI-driven success plans</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Engagement Alerts</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">Basic alerts</td>
            <td className="p-3 border text-center">Advanced, cross-team alerts</td>
          </tr>
          <tr>
            <td className="p-3 border">Renewals Tracking</td>
            <td className="p-3 border text-center">Renewal list</td>
            <td className="p-3 border text-center">Renewal dashboard + reminders</td>
            <td className="p-3 border text-center">Automated renewals + custom workflows</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Expansion/Upsell Signals</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">Basic expansion insights</td>
            <td className="p-3 border text-center">AI-powered upsell opportunities</td>
          </tr>
          <tr>
            <td className="p-3 border">Analytics & Reporting</td>
            <td className="p-3 border text-center">Basic dashboards</td>
            <td className="p-3 border text-center">Portfolio health + NPS/CSAT tracking</td>
            <td className="p-3 border text-center">Custom dashboards + scheduled reporting</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Integrations</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">CRM + HelpDesk + Slack/Teams</td>
            <td className="p-3 border text-center">Full integrations + API</td>
          </tr>
          <tr>
            <td className="p-3 border">Security & Compliance</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">SSO, SOC2, GDPR</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Support</td>
            <td className="p-3 border text-center">Email support</td>
            <td className="p-3 border text-center">Priority support</td>
            <td className="p-3 border text-center">24/7 support + dedicated success manager</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const renderDexyAIPricing = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Dexy AI Pricing</h1>

    {/* Pricing Plans */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Starter Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-500 mb-4">Ideal for teams starting with AI assistants</p>
        <p className="text-3xl font-bold mb-6">$29<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Ask Dexy (basic chat)</li>
          <li>✔ Ticket summarization</li>
          <li>✔ Limited categorization</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Growth Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Growth <span className="text-sm text-green-600">(Most Popular)</span></h2>
        <p className="text-gray-500 mb-4">Scaling orgs needing AI automation across Success & Support</p>
        <p className="text-3xl font-bold mb-6">$79<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Starter</li>
          <li>✔ In-app AI Copilot</li>
          <li>✔ AutoQA (basic rubrics)</li>
          <li>✔ Sentiment analysis</li>
          <li>✔ Semantic search across tools</li>
          <li>✔ Renewal risk signals</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
        <p className="text-gray-500 mb-4">Ideal for enterprises needing advanced AI, customizations & compliance</p>
        <p className="text-3xl font-bold mb-6">Let's talk</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Growth</li>
          <li>✔ Advanced predictive churn & upsell</li>
          <li>✔ Custom QA rubrics</li>
          <li>✔ Dedicated prompt engineering support</li>
          <li>✔ API & SDK for AI agents</li>
          <li>✔ Enterprise-wide semantic search</li>
          <li>✔ SSO, SOC2, GDPR</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg w-full">
          Book a demo
        </button>
      </div>
    </div>

    {/* Feature Comparison Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Feature Group</th>
            <th className="p-3 border text-center">Starter</th>
            <th className="p-3 border text-center">Growth</th>
            <th className="p-3 border text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Ask Dexy (OrgG)</td>
            <td className="p-3 border text-center">✔ Chat Q&A</td>
            <td className="p-3 border text-center">✔ Contextual knowledge answers</td>
            <td className="p-3 border text-center">✔ Advanced contextual + Org-wide coverage</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">In-app AI Copilot</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Basic AI assist</td>
            <td className="p-3 border text-center">✔ Full copilot with predictive insights</td>
          </tr>
          <tr>
            <td className="p-3 border">AutoQA</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Basic QA automation</td>
            <td className="p-3 border text-center">✔ Custom rubrics + deep QA automation</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Summarization</td>
            <td className="p-3 border text-center">✔ Limited (tickets only)</td>
            <td className="p-3 border text-center">✔ Multi-channel (support + success)</td>
            <td className="p-3 border text-center">✔ Full multi-system categorization</td>
          </tr>
          <tr>
            <td className="p-3 border">Sentiment Analysis</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Basic sentiment</td>
            <td className="p-3 border text-center">✔ Advanced sentiment + escalation signals</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Semantic Search</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Across connected tools</td>
            <td className="p-3 border text-center">✔ Enterprise-wide semantic search</td>
          </tr>
          <tr>
            <td className="p-3 border">Knowledge Management</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ KB sync + AI article suggestions</td>
            <td className="p-3 border text-center">✔ Auto-KB generation + clustering</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Predictive Insights</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Churn risk signals</td>
            <td className="p-3 border text-center">✔ AI-powered churn + upsell predictions</td>
          </tr>
          <tr>
            <td className="p-3 border">Workflows & Automation</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Basic triggers</td>
            <td className="p-3 border text-center">✔ Advanced custom workflows + AI agents</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">API & Extensions</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ API + SDK for custom agents</td>
          </tr>
          <tr>
            <td className="p-3 border">Prompt Engineering Support</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Dedicated prompt engineering team</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Security & Compliance</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ SSO, SOC2, GDPR</td>
          </tr>
          <tr>
            <td className="p-3 border">Support</td>
            <td className="p-3 border text-center">Email support</td>
            <td className="p-3 border text-center">Priority support</td>
            <td className="p-3 border text-center">Dedicated success manager + 24/7 support</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const renderStarboardPricing = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Starboard Pricing</h1>

    {/* Pricing Plans */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Starter Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Starter</h2>
        <p className="text-gray-500 mb-4">Ideal for small teams starting employee recognition</p>
        <p className="text-3xl font-bold mb-6">$3<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Peer-to-peer kudos</li>
          <li>✔ Monthly point allowance (basic)</li>
          <li>✔ Recognition wall (feed)</li>
          <li>✔ 1 reward catalog (gift cards only)</li>
          <li>✔ Email support</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Growth Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow-lg hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Growth <span className="text-sm text-green-600">(Most Popular)</span></h2>
        <p className="text-gray-500 mb-4">Ideal for growing orgs scaling rewards & engagement</p>
        <p className="text-3xl font-bold mb-6">$6<span className="text-base font-normal">/user/month</span></p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Starter</li>
          <li>✔ Custom point budgets</li>
          <li>✔ Multiple reward catalogs (gift cards, vouchers)</li>
          <li>✔ Leaderboards & badges</li>
          <li>✔ Manager-to-team recognition</li>
          <li>✔ Integrations (Slack, Teams)</li>
          <li>✔ Priority support</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          Get started free
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="flex flex-col border rounded-lg p-6 shadow hover:shadow-md">
        <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
        <p className="text-gray-500 mb-4">Ideal for large/global companies needing governance & integrations</p>
        <p className="text-3xl font-bold mb-6">Let's talk</p>
        <ul className="space-y-2 text-gray-600 flex-1">
          <li>✔ Everything in Growth</li>
          <li>✔ Advanced analytics & reporting</li>
          <li>✔ Custom reward catalogs (local vendors)</li>
          <li>✔ Budget approvals & controls</li>
          <li>✔ Multi-location/global support</li>
          <li>✔ SSO, SOC2, GDPR compliance</li>
          <li>✔ Dedicated success manager + 24/7 support</li>
        </ul>
        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg w-full">
          Book a demo
        </button>
      </div>
    </div>

    {/* Feature Comparison Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Feature Group</th>
            <th className="p-3 border text-center">Starter</th>
            <th className="p-3 border text-center">Growth</th>
            <th className="p-3 border text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Peer-to-peer kudos</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Recognition wall / feed</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr>
            <td className="p-3 border">Monthly point allowance</td>
            <td className="p-3 border text-center">Fixed</td>
            <td className="p-3 border text-center">Custom</td>
            <td className="p-3 border text-center">✔ Custom + advanced controls</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Reward catalogs</td>
            <td className="p-3 border text-center">Gift cards</td>
            <td className="p-3 border text-center">Gift cards + vouchers</td>
            <td className="p-3 border text-center">Global & custom vendor catalogs</td>
          </tr>
          <tr>
            <td className="p-3 border">Leaderboards & badges</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Manager-to-team recognition</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr>
            <td className="p-3 border">Integrations (Slack, Teams)</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Analytics & reporting</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔ Basic</td>
            <td className="p-3 border text-center">✔ Advanced, exportable</td>
          </tr>
          <tr>
            <td className="p-3 border">Budget approvals & controls</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Multi-location/global support</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr>
            <td className="p-3 border">Security & compliance</td>
            <td className="p-3 border text-center">✘</td>
            <td className="p-3 border text-center">(SSO, SOC2, GDPR)</td>
            <td className="p-3 border text-center">✔</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 border">Support</td>
            <td className="p-3 border text-center">Email only</td>
            <td className="p-3 border text-center">Priority</td>
            <td className="p-3 border text-center">Dedicated manager + 24/7</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// ✅ Tab content
const PricingPage = () => {
  const [activeTab, setActiveTab] = useState(TABS.REVOPS_HUB);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sidebar sections as before
  const sidebarSections = useMemo(
    () => [
      {
        title: "Products",
        items: [
          {
            key: TABS.REVOPS_HUB,
            label: "RevOps Hub",
            children: [
              { key: TABS.ADSUITE, label: "AdSuite", comingSoon: true },
              { key: TABS.SALESHUB, label: "SalesHub" },
              { key: TABS.DEMO_DESK, label: "DemoDesk", comingSoon: true },
            ],
          },
          {
            key: TABS.CXOPS_HUB,
            label: "CXOps Hub",
            children: [
              { key: TABS.ONBOARD_HUB, label: "OnBoardHub" },
              { key: TABS.HELPDESK, label: "HelpDesk" },
              { key: TABS.ACCOUNT_CARE, label: "AccountCare" },
              { key: TABS.ANSWARE_PRO, label: "AnswarePro" },
            ],
          },
          {
            key: TABS.TEAMOPS_HUB,
            label: "TeamOps Hub",
            children: [
              { key: TABS.PRODUCT_PRO, label: "ProductPro", comingSoon: true },
              { key: TABS.DEVCORE, label: "DevCore" },
              { key: TABS.LEARNHUB, label: "LearnHub", comingSoon: true },
              { key: TABS.STARBOARD, label: "StarBoard" },
            ],
          },
          {
            key: TABS.AI_Copilot,
            label: "AI Copilot",
            children: [{ key: TABS.DEXY, label: "Dexy" }],
          },
        ],
      },
      {
        title: "Platform & Services",
        items: [
          { key: TABS.INTEGRATIONS_HUB, label: "Integrations Hub" },
          { key: TABS.WORKFLOW_AUTOMATION, label: "Workflow Automation" },
        ],
      },
      {
        title: "Programs",
        items: [
          { key: TABS.DEXKOR_FOR_STARTUPS, label: "Dexkor for Startups" },
          { key: TABS.EARLY_ADOPTER_PROGRAM, label: "Early Adopter Program" },
        ],
      },
    ],
    []
  );

  // Main tab content renderer
  const renderTabContent = () => {
    if (activeTab === TABS.ONBOARD_HUB) {
      return renderOnBoardHubPricing();
    }
    if (activeTab === TABS.SALESHUB) {
      return renderSalesHubPricing();
    }
    if (activeTab === TABS.HELPDESK) {
      return renderHelpDeskPricing();
    }
    if (activeTab === TABS.DEVCORE) {
      return renderDevCorePricing();
    }
    if (activeTab === TABS.ACCOUNT_CARE) {
      return renderAccountCarePricing();
    }
    if (activeTab === TABS.DEXY) {
      return renderDexyAIPricing();
    }
    if (activeTab === TABS.STARBOARD) {
      return renderStarboardPricing();
    }

    return (
      <div className="grid grid-cols-2 ">
        <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
        <p className="text-gray-600 mb-10 ">
          Content for <b>{activeTab}</b> goes here.
        </p>
        <StartupOffer />
        <Form />
        
      </div>
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile menu toggle */}
      <MobileMenuToggle isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      
      {/* Sidebar */}
      <div className={`w-64 p-6 text-sm text-gray-800 bg-white fixed lg:static inset-y-0 left-0 z-40 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}>
        {sidebarSections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.key}
                  label={item.label}
                  isActive={activeTab}
                  onClick={handleTabClick}
                  children={item.children}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Content */}
      <div className="flex-1 p-4 lg:p-10 mt-16 lg:mt-0 overflow-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default PricingPage;