"use client";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";

export default function SalesHubSection() {
  const features = [
    {
      title: "Lead Management",
      desc: "Capture and qualify leads in one place with AI scoring.",
      img: d,
      layout: "text-first",
    },
    {
      title: "Pipeline Visibility",
      desc: "Track deals across stages with real-time updates.",
      img: c,
      layout: "image-first",
      centerBtn: true,
    },
    {
      title: "Collaboration Tools",
      desc: "Smooth handoff from Sales → Success → Support.",
      img: e,
      layout: "image-first",
      centerBtn: true,
    },
    {
      title: "Integrations",
      desc: "Connect with HubSpot, Salesforce, Slack, and more.",
      img: f,
      layout: "text-first",
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-12 px-4 sm:py-16 sm:px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Close deals faster with a centralized Sales Hub
        </h2>
        <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
          Empower your sales teams with AI-driven insights, pipeline visibility, and seamless handoffs to Customer Success.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#FFE585] relative overflow-hidden rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow"
          >
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-28 h-28 sm:w-40 sm:h-40 bg-yellow-400 opacity-30 rounded-full -z-0 translate-x-6 sm:translate-x-8 -translate-y-6 sm:-translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-40 sm:h-40 bg-yellow-300 opacity-30 rounded-full -z-0 -translate-x-6 sm:-translate-x-10 translate-y-6 sm:translate-y-10"></div>

            {/* Layout alternate */}
            {item.layout === "text-first" ? (
              <>
                <div
                  className={`relative z-10 ${
                    item.centerBtn ? "flex flex-col items-center text-center" : ""
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                    {item.desc}
                  </p>
                  <button className="bg-black text-white px-5 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                    Learn more
                  </button>
                </div>
                <div className="mt-4 sm:mt-6 relative z-10 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg shadow w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mb-4 sm:mb-6 relative z-10 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg shadow w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                  />
                </div>
                <div
                  className={`relative z-10 ${
                    item.centerBtn ? "flex flex-col items-center text-center" : ""
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                    {item.desc}
                  </p>
                  <button className="bg-black text-white px-5 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition text-sm sm:text-base">
                    Learn more
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
