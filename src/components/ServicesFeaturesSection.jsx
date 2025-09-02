"use client";
import z from "../assets/z.png"; // Omnichannel Inbox
import l from "../assets/l.png"; // AI Ticketing
import m from "../assets/m.png"; // SLA Management
import n from "../assets/n.png"; // Mobile-first Support

export default function SupportFeaturesSection() {
  const features = [
    {
      title: "Omnichannel Inbox",
      desc: "Manage email, chat, and calls in one place.",
      img: z,
    },
    {
      title: "AI Ticketing",
      desc: "Auto-categorization, sentiment tagging, and summaries.",
      img: l,
    },
    {
      title: "SLA Management",
      desc: "Track and enforce SLAs with alerts.",
      img: m,
    },
    {
      title: "Mobile-first Support",
      desc: "Help agents stay responsive on the go.",
      img: n,
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-12 px-4 sm:py-16 sm:px-6">
      {/* Headline + Subtext */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          AI-powered omnichannel support for modern teams
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Resolve tickets faster with automation, SLA tracking, and sentiment-driven prioritization.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#B5DCFF] rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform"
          >
            {/* Text Section */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">{item.desc}</p>
              <button className="bg-black text-white px-5 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                Learn more
              </button>
            </div>

            {/* Image */}
            <div className="mt-6 sm:mt-10 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
