// src/components/Testimonials.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    company: "SaaS Startup",
    text: "“With DexKor, we finally have one place to manage sales, onboarding, and customer success. The AI health scores have saved us from at-risk renewals we might have missed before.”",
    author: "Founder, SaaS Startup",
    bg: "bg-yellow-300",
  },
  {
    company: "Logistics Company",
    text: "“Our support team is more efficient than ever. DexKor’s HelpDesk automation and AI summaries cut resolution times in half while keeping customers happy.”",
    author: "Head of Operations, Logistics Firm",
    bg: "bg-blue-300",
  },
  {
    company: "D2C Brand",
    text: "“Scaling a D2C brand means juggling tons of customer touchpoints. DexKor unified everything and gave us visibility into customer health like never before.”",
    author: "CX Lead, D2C Brand",
    bg: "bg-purple-300",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#FFFCF5] py-20 px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Title + Buttons Row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            See why growing teams trust DexKor
          </h2>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${t.bg} min-w-[300px] md:min-w-[350px] p-6 rounded-xl shadow-md flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-3">{t.company}</h3>
                <p className="text-gray-800 italic">{t.text}</p>
              </div>
              <div className="mt-6 text-sm font-medium text-gray-900">
                {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
