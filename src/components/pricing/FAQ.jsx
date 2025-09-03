// src/components/FAQ.jsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does DexKor’s pricing work?",
    answer:
      "DexKor offers flexible, per-user pricing across individual modules (SalesHub, HelpDesk, AccountCare, etc.) and bundled hubs. You can start with one module or scale into full bundles like CXOps Hub or RevOps Hub. Enterprise pricing is custom based on your needs.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No — our pricing is transparent. What you see on the pricing page is what you pay. Enterprise add-ons like custom workflows, API access, or dedicated AI prompt engineering are clearly outlined upfront.",
  },
  {
    question: "Can I start with one module and upgrade later?",
    answer:
      "Yes! You can begin with a single module like HelpDesk or AccountCare and expand into other modules or hubs as your business grows. Your data and workflows stay seamlessly connected.",
  },
  {
    question: "What’s included in the cost of a module?",
    answer:
      "Each plan includes access to the module’s features (Starter, Growth, or Enterprise), product updates, standard integrations, and support. Growth and Enterprise tiers unlock advanced AI automation, analytics, and additional integrations.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No — you can choose between monthly or annual billing. Annual commitments come with discounted pricing.",
  },
  {
    question: "What happens if I need to cancel?",
    answer:
      "You can cancel at any time. For monthly plans, you won’t be charged the next cycle. For annual plans, you’ll retain access until the end of the billing period.",
  },
  {
    question: "How does DexKor handle AI data privacy?",
    answer:
      "DexKor’s Agentic AI operates with enterprise-grade compliance (SOC2, GDPR, ISO). Your data stays secure and is never used to train third-party AI models.",
  },
  {
    question: "Does DexKor integrate with my existing tools?",
    answer:
      "Yes — DexKor integrates with CRMs like Salesforce and HubSpot, communication tools like Slack and Teams, and developer tools like GitHub and Jira. Enterprise plans also include custom API access.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most teams can get up and running within days. Starter plans are self-serve, while Growth and Enterprise plans include guided onboarding and success support.",
  },
  {
    question: "Do you offer discounts for startups?",
    answer:
      "Yes — DexKor for Startups offers credits, discounted pricing, and enablement resources for early-stage companies. Check our Startup Program page for details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFCF5] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs</h2>
        </div>

        {/* Right Accordion */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-900"
              >
                {faq.question}
                {openIndex === i ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>

              {openIndex === i && (
                <div className="mt-3 text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
