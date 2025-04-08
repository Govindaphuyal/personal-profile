import React from 'react'
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const Skill = () => {
  return (
    <div>
      <div>
                  <h1 className="text-4xl text-white">My <span className='text-2xl text-green-400 font-bold'>Skills</span></h1>
                  <p className='w-180 text-2xl text-white'>I specialize in Web Development, Frontend & Backend Development, crafting responsive, high-performance websites and apps with seamless user experiences. From SEO optimization to scalable coding and data-driven marketing, I deliver conversion-focused solutions that enhance brand visibility and business growth. 🚀. where i'm doing Full-Stact on MERN Stack.</p>
                  <div className=" flex gap-9 flex-wrap mb-10">
                    <div class="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                      <ImHtmlFive2 className='font-bold '/>
                      <span>HTML5</span>
                    </div>
                    <div className="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                    <FaCss3Alt />
                      <span>CSS3</span>
                    </div>
                    <div className="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                    <FaCss3Alt />
                      <span>Tailwind Css</span>
                    </div>
                    <div className="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                    <IoLogoJavascript/>
                      <span>Javascript</span>
                    </div>
                    <div className="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                    <FaReact/>
                      <span>React Js</span>
                    </div>
                    
                    <div className="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                    <RiNextjsFill/>
                      <span> Next Js</span>
                    </div>
                    <div className="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                    <FaNodeJs />
                      <span> Node Js</span>
                    </div>
                    <div className="resume-item bg-gray-600  text-white px-4 py-2 rounded">
                    <SiMongodb/>
                      <span> MongoDb</span>
                    </div>
                    
                    
                  
                  </div>
                </div>
    </div>
  )
}

export default Skill