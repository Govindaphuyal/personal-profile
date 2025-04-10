import Link from 'next/link';
import React from 'react';

const Service = () => {
  return (
    <div className="bg-black h-220 sm:bg-black h-220 md:bg-black h-1 overflow-hidden">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        {/* Title */}
        <h1 className="text-center text-white font-bold text-3xl relative right-25 sm:text-4xl mt-25 md:text-5xl">
          My <span className="text-green-600">Services</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10  mb-1 relative left-[20] sm:relative left-[10] md:relative  left-[10]">
          {/* Card 1 */}
          <div className="border border-gray-400 bg-white rounded-lg shadow-md hover:border-green-900 transition duration-300 ">
            <div className="p-4 pt-2">
              <div className="mb-8">
                <button className="bg-gray-600 text-white px-4 py-2 rounded w-full sm:w-auto">
                  <a
                    href="#"
                    className="text-white font-bold text-lg sm:text-xl hover:text-green-600 inline-block"
                  >
                    BackEnd Development
                  </a>
                </button>
                <p className="text-gray-700 text-sm sm:text-base mt-4">
                  Reliable & Scalable Backend Development Services Need a powerful backend for your web ? I specialize in secure, high-performance, and scalable backend development using Node.js/Express, Python,drizzle ORM,postrsql ,Mongodb,and more. From database management to API integrations, I build robust server-side solutions that ensure seamless functionality and optimal performance for your digital products.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-400 bg-white rounded-lg shadow-md hover:border-green-900 transition duration-300">
            <div className="p-4 pt-2">
              <div className="mb-8">
                <button className="bg-gray-600 text-white px-4 py-2 rounded w-full sm:w-auto">
                  <a
                    href="#"
                    className="text-white font-bold text-lg sm:text-xl hover:text-green-600 inline-block"
                  >
                    FrontEnd Development
                  </a>
                </button>
                <p className="text-gray-700 text-sm sm:text-base mt-4">
                  Front-End Development – Fast, Responsive & Pixel-Perfect Websites Looking for expert front-end development services? I build fast, responsive, and visually stunning websites using HTML, CSS, JavaScript, React, and Nextjs. My focus is on clean code, seamless user experience, and cross-browser compatibility. Let’s create a high-performing website that engages users and boosts conversions! 🚀
                </p>
              </div>
              <h1 className="text-center text-gray-800 font-bold text-lg sm:text-xl">
                Click here
              </h1>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
                <Link
                  href="https://www.govindaphuyal.com.np/"
                  className="text-white px-4 py-3 bg-blue-500 rounded-md hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
                >
                  CRUD
                </Link>

                <Link
                  href="https://task-manage-tau.vercel.app/"
                  className="text-white px-4 py-3 bg-blue-500 rounded-md hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
                >
                  Task
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Service;