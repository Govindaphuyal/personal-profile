import React from 'react'

const About = () => {
  return (
    <div>
        <div>
            <h1 className='text-4xl text-white'>About <span className="text-2xl text-green-400 font-bold">Me</span></h1>
            <p className='w-190 text-2xl mt-4 mb-4 my-9 text-white'>Govinda Phuyal, I’m a Web Developer, UI/UX Designer, Frontend & Backend Developer from Nepal. I specialize in creating high-performing websites, mobile apps, and marketing strategies that drive growth. With a passion for innovation, I deliver SEO-optimized, user-friendly, and scalable digital solutions for businesses worldwide. 🚀</p>
          </div>
          <div className="resume-list flex gap-9 flex-wrap bg-gray-500 mx-6 h-[400]">
              <div className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Name :</span><span>Govinda Phuyal</span></p>
              </div>
              <div className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Gender :</span><span> Male</span></p>
              </div>
              <div className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Age :</span><span> 28 Years Old</span></p>
              </div>
              <div className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Status :</span><span> Unmarried</span></p>
              </div>
              <div className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>City :</span><span> Kathmandu</span></p>
              </div>
              <div className="resume-item">
                <p className='text-2xl'><span className='text-green-400'> Nationality :</span><span> Nepali</span></p>
              </div>
              <div  className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Experience :</span><span> 1+ years</span></p>
              </div>
              <div  className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Full Time :</span><span> Available</span></p>
              </div>
              
              <div  className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Phone :</span> <span>(+977) 9840555196</span></p>
              </div>
             
              <div  className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Email :</span><span > govindaphuyal40@gmail.com</span></p>
              </div>
              
              <div  className="resume-item">
                <p className='text-2xl'><span className='text-green-400'>Language :</span><span> English, Nepali</span></p>
              </div>

            </div>

</div>
    
  )
}

export default About