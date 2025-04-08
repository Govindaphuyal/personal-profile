"use client"
import React, { useState } from 'react'

import Experience from './hire/Experience';
import Education from './hire/Education';
import Skill from './hire/Skill';
import About from './hire/About';

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className='flex gap-20 bg-black h-[700]'>
      <section className='relative left-10'>
        <div>
          <h1 className="font-black text-6xl text-white">Hire Me</h1>
          <p className='w-full space-y-2 text-2xl mt-5 mb-5 text-white'>
            I’m a Web Developer, Frontend & Backend Developer delivering high-performance, user-friendly, and SEO-optimized solutions. From stunning websites to mobile apps and result-driven marketing, I craft responsive, scalable, and conversion-focused digital experiences to grow your business. Let’s build success together! 🚀
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <button 
            className="text-white px-8 py-3 bg-blue-500 rounded-md hover:bg-gray-600 transition" 
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button 
            className="text-white px-8 py-3 bg-blue-500 rounded-md hover:bg-gray-600 transition" 
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button 
            className="text-white px-8 py-3 bg-blue-500 rounded-md hover:bg-gray-600 transition" 
            onClick={() => setActiveTab("skill")}
          >
            Skills
          </button>
          <button 
            className="text-white px-8 py-3 bg-blue-500 rounded-md hover:bg-gray-600 transition" 
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
        </div>
      </section>

      <main className="flex-1">
        {activeTab === "experience" && <Experience />}
        {activeTab === "education" && <Education />}
        {activeTab === "skill" && <Skill />}
        {activeTab === "about" && <About />}
      </main>
    </div>
  )
}

export default Resume;
