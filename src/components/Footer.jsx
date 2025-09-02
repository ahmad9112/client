import React from "react";
import { Star, Globe } from "lucide-react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const reviews = [
  {
    text: "DexKor completely transformed how we manage customer accounts. Health scores and alerts helped us prevent churn before it even happened.",
    author: "Head of Customer Success, SaaS Startup",
    rating: 5,
  },
  {
    text: "Onboarding used to be chaos. With OnboardHub, new clients are live in days instead of weeks — it’s seamless for both us and our customers.",
    author: "Customer Success Manager, HR Tech Company",
    rating: 5,
  },
  {
    text: "The HelpDesk module is a game-changer. Our support SLAs are finally under control, and the AI summaries save our agents hours every week.",
    author: "Operations Lead, Logistics Company",
    rating: 5,
  },
  {
    text: "Dexy AI feels like an extra teammate — summarizing calls, tagging conversations, and surfacing insights instantly. It’s boosted our productivity massively.",
    author: "Founder, D2C Brand",
    rating: 5,
  },
];

const ReviewsAndFooter = () => {
  return (
    <footer className="relative bg-black text-white pt-32 pb-20 px-6 overflow-hidden">
      {/* Curved Top Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-28"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,80 L1200,0 L0,0 Z"
            fill="#FFF7E1"
          ></path>
        </svg>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Loved by early adopters across SaaS, D2C, and Logistics
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Trusted by growing SaaS, D2C, and enterprise teams to unify the
          customer journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-md flex flex-col"
            >
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm flex-grow mb-4">
                “{review.text}”
              </p>
              <p className="text-gray-400 text-xs font-semibold">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions */}
      <div className="max-w-6xl mx-auto text-gray-300 text-sm mb-10 leading-relaxed">
        {/* <p>
          *Conditions & Eligibility Requirements: This Promotion is subject to
          the following qualifying conditions, and may be modified or revoked by
          DexKor in its sole discretion and without notice at any time. To be
          eligible for this time-limited promotional pricing (“Promotion”), you
          must sign a new qualifying product and services agreement, such as a
          Sales Order Form (“Agreement”) with DexKor by October 31, 2025...
        </p> */}
      </div>

      {/* Links Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <button className="flex items-center gap-2 border border-gray-700 rounded-full px-4 py-2 hover:bg-gray-800 transition">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm"> English </span>
          </button>

          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Customer Stories</a>
          <a href="#" className="hover:underline">Press & Media</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Trust & Security</a>
        </nav>

        {/* Social Icons */}
        {/* <div className="flex space-x-4 text-gray-400 text-xl">
          <a href="https://x.com/dexkor" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
          <a href="https://linkedin.com/company/dexkor" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
          <a href="https://facebook.com/dexkor" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook /></a>
          <a href="https://instagram.com/dexkor" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram /></a>
          <a href="https://youtube.com/@dexkor" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaYoutube /></a>
        </div> */}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10"></div>

      {/* Multi-column Footer */}
      <div className="bg-black text-gray-300 px-6 md:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">SakesHub</a></li>
              <li><a href="#">DemoDesk</a></li>
              <li><a href="#">AdSuite</a></li>
              <li><a href="#">HelpDesk</a></li>
              <li><a href="#">AccountCare</a></li>
              <li><a href="#">Dexy AI</a></li>
              <li><a href="#">AnswerPro</a></li>
              <li><a href="#">ProductPro</a></li>
              <li><a href="#">DevCore</a></li>
              <li><a href="#">StarBoard</a></li>
              <li><a href="#">TalentPulse</a></li>
              <li><a href="#">LearnHub</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">DexKor Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Customer Success Platform</a></li>
              <li><a href="#">Agentic AI Core</a></li>
              <li><a href="#">Integrations Hub</a></li>
              <li><a href="#">Workflow Automation</a></li>
              <li><a href="#">Analytics & Insights</a></li>
              <li><a href="#">Security & Compliance</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">SaaS & Tech</a></li>
              <li><a href="#">D2C & E-commerce</a></li>
              <li><a href="#">Logistics & Fleet Management</a></li>
              <li><a href="#">EdTech</a></li>
              <li><a href="#">FinTech</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">IT & Services</a></li>
              <li><a href="#">Consumer Goods</a></li>
              <li><a href="#">Gaming & Media</a></li>
              <li><a href="#">Professional Services</a></li>
            </ul>
          </div>

          {/* Why DexKor */}
          <div>
            <h3 className="text-white font-semibold mb-4">Why DexKor?</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Competitor Comparison</a></li>
              <li><a href="#">Data Security & Privacy</a></li>
              <li><a href="#">Built for Startups</a></li>
              <li><a href="#">Built for Enterprises</a></li>
              <li><a href="#">Become a DexKor Partner</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Webinars & Events</a></li>
              <li><a href="#">Guides & Templates</a></li>
              <li><a href="#">Customer Success Playbooks</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">API Documentation</a></li>
            </ul>
          </div>
        </div>
{/* Newsletter Section */}
<div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
  
  {/* Left side */}
  <div className="flex flex-col md:flex-row md:items-center w-full md:w-1/2">
    {/* Logo + Socials */}
    <div className="flex flex-col items-center md:items-start">
      <p className="text-white text-2xl font-bold mb-4">DexKor</p>

      {/* Social Icons */}
   <div className="flex space-x-4 mb-4 md:mb-0 text-white">
  {[
    { href: "https://twitter.com", icon: "fa-brands fa-x-twitter" },
    { href: "https://www.linkedin.com/company/dexkor/posts/?feedView=all", icon: "fa-brands fa-linkedin-in" },
    { href: "https://facebook.com", icon: "fa-brands fa-facebook-f" },
    { href: "https://instagram.com", icon: "fa-brands fa-instagram" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600"
    >
      <i className={`${item.icon} text-white text-lg`}></i>
    </a>
  ))}
</div>


    </div>

    {/* Centered Text */}
    <p className="text-gray-300 text-base font-medium md:ml-6 text-center md:text-left md:self-center">
      Get the latest insights on Customer Success, AI, and Growth delivered
      straight to your inbox.
    </p>
  </div>

  {/* Right side (form) */}
  <div className="w-full md:w-1/3 mt-6 md:mt-0">
<form className="flex max-w-xl w-full bg-white rounded-full shadow relative md:ml-2">
  <input
    type="email"
    placeholder="What's your e-mail?"
    className="flex-grow px-5 py-3 text-black bg-transparent placeholder-gray-500 focus:outline-none rounded-l-full"
  />
  <button
    type="submit"
    className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full absolute right-1 top-1/2 -translate-y-1/2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </button>
</form>




<p className="text-xs text-gray-400 mt-2 md:ml-8 text-center md:text-left">
  I confirm that I have read <span className="font-semibold">DexKor’s Privacy Policy</span> and agree with it.
</p>

</div>
</div>

<div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 md:gap-0">
  {/* Left side */}
  <p className="text-center md:text-left">
    © Copyright 2025 DexKor. All Rights Reserved.
  </p>

  {/* Right side links */}
  <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
    <a href="#" className="hover:text-white">Disclaimer</a>
    <a href="#" className="hover:text-white">Privacy Policy</a>
    <a href="#" className="hover:text-white">Terms of Service</a>
    <a href="#" className="hover:text-white">Legal Hub</a>
    <a href="#" className="hover:text-white">Cookie Policy</a>
    <a href="#" className="hover:text-white">Security & Trust</a>
  </div>
</div>


      </div>
    </footer>
  );
};

export default ReviewsAndFooter;
