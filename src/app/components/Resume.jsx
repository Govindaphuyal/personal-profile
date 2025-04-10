"use client";
import React, { useState } from "react";

import Experience from "./hire/Experience";
import Education from "./hire/Education";
import Skill from "./hire/Skill";
import About from "./hire/About";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="bg-black min-h-screen">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-black text-4xl sm:text-5xl mt-20 md:text-6xl text-white">
            Hire Me
          </h1>
          <p className="w-full text-lg sm:text-xl md:text-2xl mt-5 text-white">
            I’m a Web Developer, Frontend & Backend Developer delivering
            high-performance, user-friendly, and SEO-optimized solutions. From
            stunning websites to mobile apps and result-driven marketing, I
            craft responsive, scalable, and conversion-focused digital
            experiences to grow your business. Let’s build success together!
            🚀
          </p>
        </div>

        {/* Tabs and Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar (Tabs) */}
          <section className="w-full lg:w-1/4 space-y-4">
            <button
              className={`w-full text-white px-6 py-3 rounded-md transition ${
                activeTab === "experience"
                  ? "bg-green-600"
                  : "bg-blue-500 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={`w-full text-white px-6 py-3 rounded-md transition ${
                activeTab === "education"
                  ? "bg-green-600"
                  : "bg-blue-500 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`w-full text-white px-6 py-3 rounded-md transition ${
                activeTab === "skill"
                  ? "bg-green-600"
                  : "bg-blue-500 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("skill")}
            >
              Skills
            </button>
            <button
              className={`w-full text-white px-6 py-3 rounded-md transition ${
                activeTab === "about"
                  ? "bg-green-600"
                  : "bg-blue-500 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </button>
          </section>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            {activeTab === "experience" && <Experience />}
            {activeTab === "education" && <Education />}
            {activeTab === "skill" && <Skill />}
            {activeTab === "about" && <About />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;