import React, { useState } from "react";
import etcImg from "../assets/etc.png"; // replace with your actual image path

// Import images
import hiringImg from "../assets/hiring.png";
import payrollImg from "../assets/payroll.png";
import complianceImg from "../assets/compliance.png";
import relocationImg from "../assets/relocation.png";
import mergersImg from "../assets/mergers.png";

// Tabs Data for Customer Stories
const tabsData = {
  "Global Hiring": {
    img: hiringImg,
    stat: "5,000+ contracts created",
    desc: "Turing has around 400 developers working for customers and 150 developers working to build Turing. They were able to migrate everyone to Deel in days. Now they use Deel to manage, pay, and onboard every developer, in over 60 different countries.",
  },
  "Global Payroll": {
    img: payrollImg,
    stat: "300+ hours saved monthly",
    desc: "Since using Deel’s Global Payroll, Change.org has saved more than 300 hours on admin each month. They’ve also taken advantage of all the services Deel offers, including EOR to retain employees needing visa sponsorship.",
  },
  "Compliance": {
    img: complianceImg,
    stat: "100% compliance achieved",
    desc: "With Deel’s compliance services, companies ensure full legal and regulatory adherence across multiple countries, reducing risk and saving time.",
  },
  "Employee relocation": {
    img: relocationImg,
    stat: "1,000+ relocations managed",
    desc: "Deel has helped global companies relocate employees smoothly, handling visas, legal paperwork, and employee support across 50+ countries.",
  },
  "Mergers/Acquisitions": {
    img: mergersImg,
    stat: "50+ mergers supported",
    desc: "Deel provides HR & Payroll support for companies undergoing mergers and acquisitions, ensuring seamless employee transitions and compliance.",
  },
};

// MAIN COMPONENT
const LandingSections = () => {
  const [activeTab, setActiveTab] = useState("Global Hiring");

  const { img, stat, desc } = tabsData[activeTab];

  const steps = [
    {
      number: "1",
      title: "Book a demo",
      desc: "Schedule a quick call with our CX experts. We’ll understand your needs and set you up with a free DexKor trial tailored for your business.",
    },
    {
      number: "2",
      title: "Connect your data",
      desc: "Easily integrate your existing tools — CRM, helpdesk, or spreadsheets. DexKor unifies everything so you start with context from day one.",
    },
    {
      number: "3",
      title: "Launch with AI",
      desc: "With Dexy AI and our guided onboarding, your teams can start tracking accounts, managing support, and driving success — all within days, not months.",
    },
  ];

  return (
    <>
      {/* SECTION 1: Customer Stories FIRST */}
      <section className="bg-[#FFF7E1] py-12 md:py-16 px-4 md:px-6 text-gray-900">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xs md:text-sm font-semibold text-gray-500 mb-2">
            CUSTOMER STORIES
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            We’ve helped 35,000+ companies <br className="hidden sm:block" />
            grow and manage global teams.
          </h3>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {Object.keys(tabsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-5 py-2 text-sm md:text-base rounded-full font-medium transition ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Image + Stat Block */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <div>
            <img
              src={img}
              alt={activeTab}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right: Stat + Text */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              {stat}
            </h4>
            <p className="text-sm md:text-base text-gray-700 mb-4">{desc}</p>
            <a
              href="#"
              className="text-yellow-600 text-sm md:text-base font-medium hover:underline"
            >
              Read customer story →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Three Steps BELOW */}
      <section className="bg-[#FFF7E1] py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Steps */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              Get started with DexKor <br className="hidden sm:block" /> in
              three easy steps
            </h2>

            <div className="space-y-5 md:space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-yellow-200 text-black font-bold flex items-center justify-center text-sm md:text-base">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-6 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 bg-black text-white rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition">
              Get started
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={etcImg}
              alt="Three steps illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingSections;
