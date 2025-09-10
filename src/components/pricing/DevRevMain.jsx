"use client";
import React, { useState } from "react";

import alpha from "../../assets/alpha.png";

const DevRevMain = () => {
  

  return (
    <div className="w-full">

        <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-xs font-medium tracking-widest text-gray-600 uppercase border border-gray-200 rounded px-2 py-1">
                Startup Program
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                DevRev for Startups
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                As a startup ourselves, we totally get the hustle it takes to
                build and scale. With DevRev’s conversational AI platform we
                empower startups to focus on what truly matters.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Imagine fewer tools, fewer resources and more time to build.
              </p>
            
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center md:justify-end">
              <img
                src={alpha}
                alt="DevRev Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>



         
        </section>
    
    </div>
  );
};

export default DevRevMain;
