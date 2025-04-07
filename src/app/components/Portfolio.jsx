import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
        <div>
            <h1 className='font-bold text-center'>Latest Project</h1>
        </div>
          <main className='ml-35 flex gap-100'>
        <div className='text-bottom'>
          <h1>01</h1>
            <div>FrontEnd Project</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
            <p>HTML5, CSS3, JavaScript</p>

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