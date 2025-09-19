import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import hi from "../assets/hi.png";
import { FaBox, FaUsers, FaCogs, FaLifeRing } from "react-icons/fa";
import { MdTravelExplore, MdStorefront } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const menuRef = useRef(null);

  // Sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animations
  const dropdownMotion = {
    initial: { opacity: 0, y: 15, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 15, scale: 0.98 },
    transition: { type: "spring", stiffness: 200, damping: 20 },
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 font-satoshi ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-white to-[#F9FBFF]"
      }`}
    >
      {/* Container */}
      <div
        ref={menuRef}
        className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#1A2B6B] font-bold text-xl">
          <Link to="/">
            <img
              src={hi}
              alt="logo"
              className="h-8 sm:h-10 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-gray-800 font-medium relative">
          {/* Products */}
      {/* Products */}
          <div className="relative"> {/* ✅ Full navbar item wrapper */}
  <button
    onClick={() =>
      setActiveMenu(activeMenu === "products" ? null : "products")
    }
    className="flex items-center hover:text-[#1A73E8] transition"
  >
    Products <FiChevronDown className="ml-1" />
  </button>

  <AnimatePresence>
    {activeMenu === "products" && (
      <motion.div
        {...dropdownMotion}
        className="absolute left-1/2 -translate-x-1/2 ml-70 top-full mt-2
                   w-[90vw] max-w-[1100px]
                   bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-8
                   grid grid-cols-4 gap-8 z-50"
      >
                  {/* Col 1 - RevOps Hub */}
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold mb-4">
                      RevOps Hub
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaBox className="mt-1" />
                        <div>
                          <p className="font-medium">AdSuite</p>
                          <p className="text-xs text-gray-500">
                            Plan, launch, and manage campaigns across channels
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaUsers className="mt-1" />
                        <div>
                          <p className="font-medium">DemoDesk</p>
                          <p className="text-xs text-gray-500">
                            Centralized hub for leads
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaUsers className="mt-1" />
                        <div>
                          <p className="font-medium">SalesHub</p>
                          <p className="text-xs text-gray-500">
                            Plan, launch, and manage campaigns across channels
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Col 2 - CXOps Hub */}
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold mb-4">
                      CXOps Hub
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaCogs className="mt-1" />
                        <div>
                          <p className="font-medium">OnBoard</p>
                          <p className="text-xs text-gray-500">
                            Plan, launch, and manage campaigns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaLifeRing className="mt-1" />
                        <div>
                          <p className="font-medium">HelpDesk</p>
                          <p className="text-xs text-gray-500">
                            Centralized hub for leads
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaUsers className="mt-1" />
                        <div>
                          <p className="font-medium">Dexy</p>
                          <p className="text-xs text-gray-500">
                            AI-powered customer support
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaUsers className="mt-1" />
                        <div>
                          <p className="font-medium">AnswerPro</p>
                          <p className="text-xs text-gray-500">
                            Manage campaigns across channels
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaUsers className="mt-1" />
                        <div>
                          <p className="font-medium">AccountCare</p>
                          <p className="text-xs text-gray-500">
                            Centralized hub for leads
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Col 3 - TeamOps Hub */}
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold mb-4">
                      TeamOps Hub
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaCogs className="mt-1" />
                        <div>
                          <p className="font-medium">ProductPro</p>
                          <p className="text-xs text-gray-500">
                            Manage campaigns across channels
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaCogs className="mt-1" />
                        <div>
                          <p className="font-medium">DevCore</p>
                          <p className="text-xs text-gray-500">
                            Centralized hub for leads
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaCogs className="mt-1" />
                        <div>
                          <p className="font-medium">StarBoard</p>
                          <p className="text-xs text-gray-500">
                            Manage campaigns across channels
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 cursor-pointer hover:text-[#1A73E8]">
                        <FaCogs className="mt-1" />
                        <div>
                          <p className="font-medium">TalentPulse</p>
                          <p className="text-xs text-gray-500">
                            Manage campaigns across channels
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Col 4 - Promo Card */}
                  <div className="bg-[#111827] text-white rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Experience the age of AI-powered customer support.
                      </h3>
                      <p className="text-sm text-gray-300">
                        With Dexy, our GPT-4o powered chatbot, a new internal
                        support Copilot for your agents, in-app bug reporting,
                        product roadmaps, knowledge bases, surveys and marketing
                        automations.
                      </p>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-[#1A73E8] hover:bg-[#1664C4] rounded-lg text-white font-medium transition">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Who we serve */}
          {/* Who we serve */}
<div
  className="relative group"
  onMouseEnter={() => setActiveMenu("solutions")}
  onMouseLeave={() => setActiveMenu(null)}
>
  <button className="flex items-center hover:text-[#1A73E8] transition">
    Who we serve <FiChevronDown className="ml-1" />
  </button>
  <AnimatePresence>
    {activeMenu === "solutions" && (
      <motion.div
        {...dropdownMotion}
        className="absolute left-0 top-12 w-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex"
      >
        {/* Left Sidebar */}
        <div className="w-48 border-r bg-gray-50">
          {[
            { label: "BFSI", icon: <RiBankFill className="w-4 h-4" /> },
            { label: "Retail", icon: <MdStorefront className="w-4 h-4" /> },
            { label: "Travel", icon: <MdTravelExplore className="w-4 h-4" /> },
            { label: "Digital Native", icon: <FaUsers className="w-4 h-4" /> },
          ].map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => setMobileSubMenu(item.label)}
              className={`flex items-center gap-2 px-4 py-3 cursor-pointer transition-all ${
                mobileSubMenu === item.label
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-6 bg-blue-50">
          <h4 className="font-semibold text-gray-800 mb-3">
            Explore More in {mobileSubMenu || "BFSI"}
          </h4>
          <ul className="space-y-3 text-gray-700">
            {mobileSubMenu === "Retail" && (
              <>
                <li>Fashion & Apparel</li>
                <li>Consumer Goods</li>
                <li>E-commerce</li>
              </>
            )}
            {mobileSubMenu === "Travel" && (
              <>
                <li>Airlines</li>
                <li>Hotels</li>
                <li>Tourism</li>
              </>
            )}
            {mobileSubMenu === "Digital Native" && (
              <>
                <li>Startups</li>
                <li>SaaS Platforms</li>
                <li>Marketplaces</li>
              </>
            )}
            {!mobileSubMenu || mobileSubMenu === "BFSI" ? (
              <>
                <li>Retail & Corporate Banking</li>
                <li>Lending</li>
                <li>Trading</li>
              </>
            ) : null}
          </ul>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>


          {/* Other Menus */}
          <Link to="/pricing" className="hover:text-[#1A73E8] transition">
            Pricing
          </Link>
          <Link to="/customer-stories" className="hover:text-[#1A73E8] transition">
            Customer Stories
          </Link>
          <Link to="/resources" className="hover:text-[#1A73E8] transition">
            Resources
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-4">
         <button
  className="px-4 py-2 border border-black text-black rounded-full font-medium hover:bg-gray-100 transition"
  onClick={() => {
    const subscribeSection = document.getElementById("subscribe-bar");
    if (subscribeSection) {
      subscribeSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Subscribe
</button>

          <a
            href="https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
          >
            Book a 30-min demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            {...dropdownMotion}
            className="lg:hidden bg-white/95 backdrop-blur-xl shadow-lg px-6 py-4 space-y-4"
          >
            {/* Products */}
           {/* Products */}
<div
  className="relative group"
  onMouseEnter={() => setActiveMenu("products")}
  onMouseLeave={() => setActiveMenu(null)}
>
  <button className="flex items-center hover:text-[#1A73E8] transition">
    Products <FiChevronDown className="ml-1" />
  </button>
  <AnimatePresence>
    {activeMenu === "products" && (
      <motion.div
        {...dropdownMotion}
        className="absolute left-0 top-12 w-[1000px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex gap-8"
      >
        {/* ==== LEFT SIDE (Products List) ==== */}
        <div className="flex-1 flex flex-col gap-8">
          {/* RevOps Hub */}
          <div>
            <h4 className="text-gray-400 text-sm font-semibold mb-3">RevOps Hub</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaBox className="mt-1" />
                <div>
                  <p className="font-medium">AdSuite</p>
                  <p className="text-xs text-gray-500">Plan, launch, and manage campaigns across channels</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaUsers className="mt-1" />
                <div>
                  <p className="font-medium">DemoDesk</p>
                  <p className="text-xs text-gray-500">Centralized hub for leads</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaUsers className="mt-1" />
                <div>
                  <p className="font-medium">SalesHub</p>
                  <p className="text-xs text-gray-500">Plan, launch, and manage campaigns across channels</p>
                </div>
              </div>
            </div>
          </div>

          {/* CXOps Hub */}
          <div>
            <h4 className="text-gray-400 text-sm font-semibold mb-3">CXOps Hub</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaCogs className="mt-1" />
                <div>
                  <p className="font-medium">OnBoard</p>
                  <p className="text-xs text-gray-500">Plan, launch, and manage campaigns</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaLifeRing className="mt-1" />
                <div>
                  <p className="font-medium">HelpDesk</p>
                  <p className="text-xs text-gray-500">Centralized hub for leads</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaUsers className="mt-1" />
                <div>
                  <p className="font-medium">Dexy</p>
                  <p className="text-xs text-gray-500">AI-powered customer support</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaUsers className="mt-1" />
                <div>
                  <p className="font-medium">AnswerPro</p>
                  <p className="text-xs text-gray-500">Manage campaigns across channels</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaUsers className="mt-1" />
                <div>
                  <p className="font-medium">AccountCare</p>
                  <p className="text-xs text-gray-500">Centralized hub for leads</p>
                </div>
              </div>
            </div>
          </div>

          {/* TeamOps Hub */}
          <div>
            <h4 className="text-gray-400 text-sm font-semibold mb-3">TeamOps Hub</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaCogs className="mt-1" />
                <div>
                  <p className="font-medium">ProductPro</p>
                  <p className="text-xs text-gray-500">Manage campaigns across channels</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaCogs className="mt-1" />
                <div>
                  <p className="font-medium">DevCore</p>
                  <p className="text-xs text-gray-500">Centralized hub for leads</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaCogs className="mt-1" />
                <div>
                  <p className="font-medium">StarBoard</p>
                  <p className="text-xs text-gray-500">Manage campaigns across channels</p>
                </div>
              </div>
              <div className="flex items-start gap-2 cursor-pointer hover:text-[#1A73E8]">
                <FaCogs className="mt-1" />
                <div>
                  <p className="font-medium">TalentPulse</p>
                  <p className="text-xs text-gray-500">Manage campaigns across channels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==== RIGHT SIDE (Promo Card) ==== */}
        <div className="w-72 bg-black text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold">
              Experience the age of AI-powered customer support.
            </h4>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              With Dexy, our GPT-4o powered chatbot, a new internal support Copilot 
              for your agents, in-app bug reporting, product roadmaps, surveys & marketing automations.
            </p>
          </div>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>


            {/* Solutions */}
            <div>
              <button
                className="flex items-center justify-between w-full font-medium hover:text-[#1A73E8] transition"
                onClick={() =>
                  setMobileSubMenu(
                    mobileSubMenu === "solutions" ? null : "solutions"
                  )
                }
              >
                Who we serve <FiChevronDown />
              </button>
              <AnimatePresence>
                {mobileSubMenu === "solutions" && (
                  <motion.div {...dropdownMotion} className="pl-4 mt-2 space-y-2">
                    {["BFSI", "Retail", "Travel"].map((s, i) => (
                      <motion.p
                        key={i}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#f0f9ff",
                        }}
                        className="px-3 py-2 rounded-lg cursor-pointer"
                      >
                        {s}
                      </motion.p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link
              to="/pricing"
              className="block w-full text-left hover:text-[#1A73E8] transition"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/customer-stories"
              className="block w-full text-left hover:text-[#1A73E8] transition"
              onClick={() => setMobileOpen(false)}
            >
              Customer Stories
            </Link>
            <Link
              to="/resources"
              className="block w-full text-left hover:text-[#1A73E8] transition"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>

            {/* Auth */}
            <div className="flex flex-col space-y-3 pt-3">
              <button className="px-4 py-2 border border-[#1A73E8] text-[#1A73E8] rounded-full font-medium hover:bg-[#EAF3FF] transition">
                Subscribe
              </button>
              <a
                href="https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-[#1A73E8] to-[#0B5ED7] text-white rounded-full font-medium hover:opacity-90 transition text-center"
              >
                   Book a 30-min demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Bar */}
      <div className="hidden lg:block w-full bg-[#1A1152] text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-blue-200">
              🌟 Redefining Customer Success with AI
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-300 font-medium">
              🧑‍🤝‍🧑 Built for Sales, Support & Success teams
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-200">
              🔒 Trusted security and compliance
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}