"use client";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HrFeaturesSection from "../components/HrFeaturesSection";
import ItFeaturesSection from "../components/ItFeaturesSection";
import ServicesFeaturesSection from "../components/ServicesFeaturesSection";
import OfferSection from "../components/OfferSection"; // ✅ Using for Dexy AI
import GlobalHero from "../components/GlobalHero";
import Testimonials from "../components/Testimonials";
import ComplianceHero from "../components/Comp";
import DeelAdvantage from "../components/DeelAdvantage";
import DeelFeatures from "../components/DeelFeatures.jsx";
import GlobalCommerceHero from "../components/GlobalCommerceHero";
import CustomerStoriesBanner from "../components/CustomerStoriesBanner.jsx";
import AccountCare from "../components/AccountCare"; // ✅ Added import

// import Footer from '../components/Footer.jsx'

const Home = () => {
  // ✅ Default to "Dexy AI"
  const [activeFeature, setActiveFeature] = useState("Dexy AI");

  return (
    <div className="md:flex-row justify-between items-start gap-10 flex-1">
      {/* Left: Hero */}
      <HeroSection />

      {/* Right: Features + Conditional Sections */}
      <div className="min-h-screen flex flex-col">
        {/* ✅ Tabs */}
        <FeaturesSection
          activeFeature={activeFeature}
          setActiveFeature={setActiveFeature}
        />

        {/* Conditional Rendering */}
        {activeFeature === "Dexy AI" && <OfferSection />}   {/* ✅ Dexy AI default */}
        {activeFeature === "SalesHub" && <HrFeaturesSection />}
        {activeFeature === "OnboardHub" && <ItFeaturesSection />}
        {activeFeature === "HelpDesk" && <ServicesFeaturesSection />}
        {activeFeature === "AccountCare" && <AccountCare />}

        {/* Always show below every section */}
        <GlobalHero />
        <Testimonials />
        <ComplianceHero />
        <DeelAdvantage />
        <DeelFeatures />
        <GlobalCommerceHero />
        <CustomerStoriesBanner />

        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;
