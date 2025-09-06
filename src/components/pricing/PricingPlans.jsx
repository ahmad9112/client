import { useState } from "react";

const PricingPlans = () => {
  const [selectedProduct, setSelectedProduct] = useState("DexKor");

  const plans = {
    DexKor: {
      starter: {
        price: "$19.99",
        desc: "For startups and small teams with up to 10 users",
        features: [
          "AI agents, assistants, and deflection",
          "Omnichannel ticketing platform",
          "Data migration and integrations",
          "Ready-to-go reporting & analytics",
        ],
      },
      pro: {
        price: "$59.99",
        desc: "Support & engagement platform for scaling orgs",
        features: [
          "Everything in Starter",
          "Advanced reporting & analytics",
          "Custom SLA and routing policies",
          "Customizable objects and data types",
        ],
      },
      ultimate: {
        price: "Let's talk",
        desc: "Enterprise scale & flexibility to meet any requirement",
        features: [
          "Everything in Pro",
          "Unlimited integrations",
          "Full object customization",
          "Enterprise-grade compliance & security",
        ],
      },
    },
    Build: {
      starter: {
        price: "$9.99",
        desc: "Startups and small engineering teams",
        features: [
          "AI agents, assistants, and issue tracking",
          "Sprint planning and release tracking",
          "Git integration",
        ],
      },
      pro: {
        price: "$24.99",
        desc: "Scaling teams",
        features: [
          "Everything in Starter",
          "Customizable issue management",
          "Advanced reporting & analytics",
        ],
      },
      ultimate: {
        price: "Let's talk",
        desc: "Enterprise scale and flexibility",
        features: [
          "Everything in Pro",
          "Full object model customization",
          "Enterprise-grade security, compliance, and controls",
        ],
      },
    },
    PlugApp: {
      starter: {
        price: "Free",
        desc: "Get started with AI",
        features: [
          "AI powered search",
          "GenAI powered answers",
          "One simple SDK",
        ],
      },
      pro: {
        price: "Flexible",
        desc: "In-app engagement & observability",
        features: [
          "AI powered search & deflections",
          "In-app Agents",
          "Product and support observability",
        ],
      },
      ultimate: {
        price: "Let's talk",
        desc: "Advanced monitoring & insights",
        features: [
          "Conversion drop insights",
          "Advanced Session Filtering",
          "Enterprise-grade security & privacy",
        ],
      },
    },
    AgentAi: {
      starter: {
        price: "$19.99",
        desc: "Small teams with up to 10 users",
        features: [
          "AI agents, assistants, and deflection",
          "Omnichannel ticketing platform",
          "Data migration and integrations",
        ],
      },
      pro: {
        price: "$59.99",
        desc: "Support & engagement for scaling orgs",
        features: [
          "Everything in Starter",
          "Advanced reporting & analytics",
          "Custom SLA and routing policies",
        ],
      },
      ultimate: {
        price: "Let's talk",
        desc: "Enterprise scale & flexibility",
        features: [
          "Unlimited integrations",
          "Full object customization",
          "Enterprise-grade compliance & security",
        ],
      },
    },
    DevRev: {
      starter: {
        price: "Free",
        desc: "Empowering startups to scale",
        features: [
          "Conversational AI platform",
          "Fewer tools, more time",
          "Join 100+ AI-first startups",
        ],
      },
      pro: null,
      ultimate: null,
    },
  };

  const selected = plans[selectedProduct];

  return (
    <div className="mt-24 max-w-6xl mx-auto px-4">
      {/* Product Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(plans).map((product) => (
          <button
            key={product}
            onClick={() => setSelectedProduct(product)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedProduct === product
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {product}
          </button>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        {selectedProduct === "DevRev" ? "DevRev for Startups" : "Pricing made simple"}
      </h2>
      <p className="mt-2 text-gray-600 text-center">
        {selectedProduct} plans are priced per seat
      </p>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["starter", "pro", "ultimate"].map((tier) => {
          const plan = selected[tier];
          if (!plan) return null;

          const isPro = tier === "pro";
          const isUltimate = tier === "ultimate";

          return (
            <div
              key={tier}
              className={`border rounded-2xl p-8 flex flex-col justify-between ${
                isPro ? "border-purple-400 bg-purple-50" : "bg-gray-50"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                  {isPro && (
                    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {plan.price}
                  {plan.price !== "Let's talk" && (
                    <span className="text-sm font-medium text-gray-600">
                      {" "}per user/month
                    </span>
                  )}
                </p>
                <p className="mt-4 text-gray-600">{plan.desc}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {plan.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
                {plan.price === "Let's talk" ? "Get a demo" : "Get started free"}
              </button>
              {!isUltimate && (
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Trial Pro free for 45 days
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlans;
