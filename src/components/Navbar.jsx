import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import hi from "../assets/hi.png";
import { FaBox, FaUsers, FaCogs, FaLifeRing } from "react-icons/fa";
import { MdTravelExplore, MdStorefront } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";   // ✅ Router links

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

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

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
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
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2"
      >
        {/* Logo → Home */}
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
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-[#1A73E8] transition">
              Products <FiChevronDown className="ml-1" />
            </button>
            <AnimatePresence>
              {activeMenu === "products" && (
                <motion.div
                  {...dropdownMotion}
                  className="absolute left-0 top-12 w-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-6"
                >
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold mb-2">
                      RevOps Hub
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 hover:text-[#1A73E8] cursor-pointer">
                        <FaBox /> <span>AdSuite</span>
                      </li>
                      <li className="flex items-start gap-2 hover:text-[#1A73E8] cursor-pointer">
                        <FaUsers /> <span>SalesHub</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-semibold mb-2">
                      CXOps Hub
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 hover:text-[#1A73E8] cursor-pointer">
                        <FaCogs /> <span>OnBoard</span>
                      </li>
                      <li className="flex items-start gap-2 hover:text-[#1A73E8] cursor-pointer">
                        <FaLifeRing /> <span>SupportDesk</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-[#1A73E8] transition">
              Who we serve <FiChevronDown className="ml-1" />
            </button>
            <AnimatePresence>
              {activeMenu === "solutions" && (
                <motion.div
                  {...dropdownMotion}
                  className="absolute left-0 top-12 w-[500px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-6"
                >
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 hover:text-[#1A73E8] cursor-pointer">
                      <RiBankFill className="text-[#1A73E8]" /> <span>BFSI</span>
                    </li>
                    <li className="flex items-center gap-2 hover:text-[#1A73E8] cursor-pointer">
                      <MdStorefront className="text-[#1A73E8]" /> <span>Retail</span>
                    </li>
                    <li className="flex items-center gap-2 hover:text-[#1A73E8] cursor-pointer">
                      <MdTravelExplore className="text-[#1A73E8]" /> <span>Travel</span>
                    </li>
                  </ul>
                  <div>
                    <h4 className="text-gray-500 text-sm font-semibold mb-2">
                      Explore More in BFSI
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Retail & Corporate Banking</li>
                      <li>Lending</li>
                      <li>Trading</li>
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
          <button className="px-4 py-2 border border-black text-black rounded-full font-medium hover:bg-gray-100 transition">
            Log in
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
            <div>
              <button
                className="flex items-center justify-between w-full font-medium hover:text-[#1A73E8] transition"
                onClick={() =>
                  setMobileSubMenu(
                    mobileSubMenu === "products" ? null : "products"
                  )
                }
              >
                Products <FiChevronDown />
              </button>
              <AnimatePresence>
                {mobileSubMenu === "products" && (
                  <motion.div {...dropdownMotion} className="pl-4 mt-2 space-y-2">
                    {["AdSuite", "SalesHub", "OnBoard", "SupportDesk"].map(
                      (s, i) => (
                        <motion.p
                          key={i}
                          whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                          className="px-3 py-2 rounded-lg cursor-pointer"
                        >
                          {s}
                        </motion.p>
                      )
                    )}
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
                        whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
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
                Sign in
              </button>
              <a
                href="https://cal.com/richard-samuel/let-s-talk-cx-saas-growth"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-[#1A73E8] to-[#0B5ED7] text-white rounded-full font-medium hover:opacity-90 transition text-center"
              >
                Book Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Bar */}
      <div className="hidden lg:block w-full bg-[#1A1152] text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-blue-200">🌟 Redefining Customer Success with AI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-300 font-medium">
              🧑‍🤝‍🧑 Built for Sales, Support & Success teams
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-200">🔒 Trusted security and compliance</span>
          </div>
        </div> 
      </div>
    </nav>
  );
}
