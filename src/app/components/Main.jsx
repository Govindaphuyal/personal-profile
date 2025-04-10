"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const roles = [
  "React/Next Developer",
  "Coder",
  "Node/Express",
  "Database",
];

const Main = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto sm:px-6 md:flex-row md:items-center p-8">
        <div className="flex flex-col items-start py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <h2 className="text-3xl sm:text-4xl mt-15 md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Govinda
            <span className="font-bold"> Phuyal</span>
          </h2>

          {/* Animated Role */}
          <span className="text-white ">I'm a&nbsp;

          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1 }}
              className="text-red-500 font-[1000] border-4 border-indigo-200 border-r-indigo-500"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
              </span>

          <p className="max-w-md mx-auto mt-3 text-sm sm:text-base md:text-lg text-white md:mt-5 md:max-w-3xl">
            I'm a coder and I can help you grow your business by providing well-modified and SEO-based websites. On the other hand, I can design modern UI/UX websites for you.
          </p>

          {/* Buttons */}
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <a
               href="/Frontend Developer.pdf" 
              download="Govinda_Phuyal_CV.pdf"
                className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-8 hover:outline-2 outline-offset-2 outline-cyan-500"
              >
                Download CV
              </a>
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-4">
              
              
              <Link href="https://www.linkedin.com/in/govinda-phuyal-222344203/">
              <CiLinkedin className="text-blue-400 text-xl sm:text-2xl" />
              </Link>
              <Link href="https://github.com/Govindaphuyal">
              <FaGithub className="text-blue-400 text-xl sm:text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <div className="relative w-full p-3 rounded md:p-8">
            <div className="w-48 h-50 sm:w-64 sm:h-64 md:w-72 md:h-70 lg:w-96 lg:h-96 border-8 border-blue-600 rounded-full">
              <img
                src="/49587666_106971730389699_1088202184316682240_n (1).jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;