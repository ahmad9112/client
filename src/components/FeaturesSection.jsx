"use client";
import { Globe, User, Monitor, Boxes } from "lucide-react";

export default function FeaturesSection({ activeFeature, setActiveFeature }) {
  const features = [
    { title: "Dexy AI", icon: Globe, activeColor: "bg-blue-200" },
    { title: "SalesHub", icon: User, activeColor: "bg-yellow-200" },
    { title: "OnboardHub", icon: Monitor, activeColor: "bg-purple-200" },
    { title: "HelpDesk", icon: Boxes, activeColor: "bg-blue-200" },
    { title: "AccountCare", icon: Boxes, activeColor: "bg-blue-200" },
  ];

  return (
    <div className="bg-[#FFFCF5] py-12 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeFeature === item.title;
          return (
            <button
              key={index}
              onClick={() => setActiveFeature(item.title)}
              className={`flex flex-col items-center justify-center w-full rounded-2xl shadow-sm transition 
                p-4 sm:p-6 h-28 sm:h-32
                ${isActive ? item.activeColor + " text-black" : "bg-orange-50 text-black"}`}
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-center">
                {item.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
