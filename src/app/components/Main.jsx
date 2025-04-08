"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../globals.css"
const roles = [
  'React/Next Developer',
  'Coder',
  'Node/Express',
  'Database',
];
const Main = () => {
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % roles.length);
    }, 2000); // change text every 2 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='bg-black'>
        <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
            <h2
                className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl">
                Govinda
                <span className="font-bold ">phuyal</span>
            </h2>
            {/* <span className="text-xl font-semibold rounded-full text-blueGray-500">I'm a
                <span > React/Next  Developer </span>
                <span> Coder</span>
                <span> Node/Express</span>
                <span> Database</span>
                </span> */}
             <span className='text-white'>I'm a&nbsp;</span>   
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

            <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            I'm a coder and i can help you to grow your business and i can provide you well modified and SEO based website. which is good to grow your business. other hand i can design your website which will be modern UI/UX
            </p>
            <div className="mt-5 sm:flex md:mt-8">
                <div className="rounded-md shadow"><a href=""
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10 hover:outline-2 outline-offset-2 outline-cyan-500">
                        DownLoad Cv
                    </a></div>
                <div className='p-9  flex gap-9 '>
                <CiFacebook className='text-blue-400 text-xl'/>
                <CiLinkedin className='text-blue-400 text-xl'/>
                <FaGithub className='text-blue-400 text-xl'/>
                </div>
            </div>
        </div>
    </div>
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded bottom-10  md:p-8">
            <div className="w-145 h-150 border-9 border-blue-600 rounded-full moving-border">
  <img
    src="https://picsum.photos/400/300"
    className="w-140 h-145 rounded-full object-cover"
    alt="Random image"
  />
</div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Main