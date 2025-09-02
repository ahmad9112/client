"use client";
import a from "../assets/a.png";
import b from "../assets/b.png";
import o from "../assets/o.png";
import p from "../assets/p.png";

export default function OfferSection() {
  return (
    <section className="w-full bg-[#FFFCF5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Headline + Subtext */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your OrgGPT for instant answers and insights
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Leverage agentic AI to boost efficiency with chat, auto-QA, and AI-driven knowledge.
          </p>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Ask Dexy */}
          <div className="bg-[#B5DCFF] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="mb-6 sm:mb-8">
              <img src={a} alt="Ask Dexy" className="w-full h-auto rounded-lg shadow object-contain" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Ask Dexy</h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Chat with your organizational data for instant answers.
              </p>
              <a
                href="/features/ask-dexy"
                className="bg-black text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm sm:text-base"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Auto-QA */}
          <div className="bg-[#B5DCFF] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Auto-QA</h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                AI audits of tickets, chats, and processes.
              </p>
              <a
                href="/features/auto-qa"
                className="bg-black text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm sm:text-base"
              >
                Learn more
              </a>
            </div>
            <div className="mt-6 sm:mt-8">
              <img src={b} alt="Auto-QA" className="w-full h-auto rounded-lg shadow object-contain" />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Summaries & Categorization */}
          <div className="bg-[#B5DCFF] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="mb-6 sm:mb-8">
              <img src={o} alt="Summaries & Categorization" className="w-full h-auto rounded-lg shadow object-contain" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Summaries & Categorization</h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Auto-generate summaries and tag interactions.
              </p>
              <a
                href="/features/summaries"
                className="bg-black text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm sm:text-base"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div className="bg-[#B5DCFF] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Sentiment Analysis</h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Measure customer and employee sentiment at scale.
              </p>
              <a
                href="/features/sentiment-analysis"
                className="bg-black text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm sm:text-base"
              >
                Learn more
              </a>
            </div>
            <div className="mt-6 sm:mt-8">
              <img src={p} alt="Sentiment Analysis" className="w-full h-auto rounded-lg shadow object-contain" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
