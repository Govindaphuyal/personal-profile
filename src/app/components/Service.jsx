import React from 'react'

const Service = () => {
  return (
    <div className="bg-black " >


    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 " >
        <h1 className='text-center text-white font-bold'> My <span className='text-green-600'>Services</span> </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-50 ml-50">
        <div
            className="border-r border-b border-8 border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal hover:border-green-900 shadow">
            <div className="p-4 pt-2 ">
                <div className="mb-8">
                    
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
                    
                    <button className='bg-gray-600  text-white px-4 py-2 rounded '><a href="#" className="text-white font-bold text-lg mb-2 hover:text-green-600 inline-block">
                    FrontEnd Development</a></button>
                    <p className="text-gray-700 text-sm">Front-End Development – Fast, Responsive & Pixel-Perfect Websites Looking for expert front-end development services? I build fast, responsive, and visually stunning websites using HTML, CSS, JavaScript, React, and Vue.js. My focus is on clean code, seamless user experience, and cross-browser compatibility. Let’s create a high-performing website that engages users and boosts conversions! 🚀</p>
                </div>
               
            </div>
        </div>


    </div>
</div>
    </div>
  )
}

export default Service