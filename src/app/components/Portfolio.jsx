"use client"
import Image from 'next/image'
import React ,{useState}from 'react'

const Portfolio = () => {
  const images = [
    "/Screenshot 2025-04-07 140307.png",
    "/Screenshot 2025-04-07 142544.png",
    "/Screenshot 2025-04-07 142938.png",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle "Next" button click
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle "Previous" button click
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
    <h1 className='text-3xl font-bold text-center mb-8'>Latest Project</h1>
    <main className='ml-10 flex gap-24 items-start'>
      <div className='max-w-md'>
        <h2 className='text-2xl font-bold'>01</h2>
        <h3 className='text-xl mt-2 mb-2'>FrontEnd Project</h3>
        <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p className='text-sm text-gray-600'>HTML5, CSS3, JavaScript</p>
      </div>
      <section>
            <div className='mr-19'>
            <Image
      src="/Screenshot 2025-04-07 140307.png"
      alt="Screenshot"
      width={1000}
      height={900}/>
      <Image
      src="/Screenshot 2025-04-07 142544.png"
      alt="Screenshot"
      width={1000}
      height={900}/>
      <Image
      src="/Screenshot 2025-04-07 142938.png"
      alt="Screenshot"
      width={1000}
      height={900}/>
      
               </div>
           </section>
    </main>
  </div>
  
  )
}

export default Portfolio