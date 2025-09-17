"use client";
import gg from "../assets/gg.png";
import hh from "../assets/hh.png";
import ii from "../assets/ii.png";
import jj from "../assets/jj.png";

export default function OnboardingFeaturesSection() {
  const features = [
    {
      title: "Playbook Builder",
      desc: "Set repeatable onboarding journeys.",
      img: gg,
    },
    {
      title: "Task Automation",
      desc: "Assign, track, and complete onboarding steps automatically.",
      img: hh,
    },
    {
      title: "Progress Tracking",
      desc: "Monitor onboarding status across all accounts.",
      img: ii,
    },
    {
      title: "Customer Collaboration",
      desc: "Shared checklists and portals for customers.",
      img: jj,
    },
  ];

  return (
    <section className="w-full bg-[#FAF8FF] py-12 px-4 sm:py-16 sm:px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Deliver seamless customer onboarding at scale
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Standardize onboarding, automate tasks, and ensure every customer starts their journey with success.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between "
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                {item.desc}
              </p>
              <button className="bg-black text-white px-5 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                Learn more
              </button>
            </div>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg  w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
