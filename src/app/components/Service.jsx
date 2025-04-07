import React from 'react'

const Service = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        
        <div
            className="border-r border-b border-8 border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal hover:border-green-900 shadow">
            <div className="p-4 pt-2 ">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                            </path>
                        </svg>
                        Members only
                    </p>
                    <button className='bg-gray-600  text-white px-4 py-2 rounded '><a href="#" className="text-white font-bold text-lg mb-2 hover:text-green-600 inline-block">
                    BackEnd Development</a></button>
                    
                    <p className="text-gray-700 text-sm">Reliable & Scalable Backend Development Services Need a powerful backend for your web or mobile application? I specialize in secure, high-performance, and scalable backend development using Node.js, Python, PHP, and more. From database management to API integrations, I build robust server-side solutions that ensure seamless functionality and optimal performance for your digital products.</p>
                </div>
                
            </div>
        </div>
        <div
            className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal hover:border-green-900 shadow-md">
            <div className="p-4 pt-2">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                            </path>
                        </svg>
                        FrontEnd Development
                    </p>
                    <button className='bg-gray-600  text-white px-4 py-2 rounded '><a href="#" className="text-white font-bold text-lg mb-2 hover:text-green-600 inline-block">
                    FrontEnd Development</a></button>
                    <p className="text-gray-700 text-sm">Front-End Development – Fast, Responsive & Pixel-Perfect Websites Looking for expert front-end development services? I build fast, responsive, and visually stunning websites using HTML, CSS, JavaScript, React, and Vue.js. My focus is on clean code, seamless user experience, and cross-browser compatibility. Let’s create a high-performing website that engages users and boosts conversions! 🚀</p>
                </div>
               
            </div>
        </div>


    </div>
</div>
  )
}

export default Service