"use client";
import a from "../assets/a.png"; // Health Scores
import b from "../assets/b.png"; // Renewal Playbooks
import c from "../assets/c.png"; // Alerts & Signals
import d from "../assets/d.png"; // 360° Account View

export default function CustomerSuccessSection() {
  const features = [
    {
      title: "Health Scores",
      desc: "Spot risks early with AI-driven scoring.",
      img: a,
    },
    {
      title: "Renewal Playbooks",
      desc: "Automate renewals and expansion workflows.",
      img: b,
    },
    {
      title: "Alerts & Signals",
      desc: "Get notified on churn risks and upsell opportunities.",
      img: c,
    },
    {
      title: "360° Account View",
      desc: "See support, sales, and onboarding history in one place.",
      img: d,
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-16 px-6">
      {/* Headline + Subtext */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your Customer Success HQ for retention & growth
        </h2>
        <p className="text-gray-600">
          Proactively manage customer health, renewals, and expansions with AI insights and playbooks.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#B5DCFF] rounded-2xl p-10 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform"
          >
            {/* Text Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-700 mb-6">{item.desc}</p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>

            {/* Image */}
            <div className="mt-10 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-72 h-72 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
