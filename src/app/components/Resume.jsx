import React from 'react'
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const Resume = () => {
  return (
    <div className='flex gap-90'>
        <section className='relative left-35 '>
          <div>
          <h1 className="font-black ">Hire Me</h1>
          <p className='w-100 space-y-2'>I’m a Web Developer, UI/UX Designer, Digital Marketer, Mobile App Developer, SEO Expert, Frontend & Backend Developer delivering high-performance, user-friendly, and SEO-optimized solutions. From stunning websites to mobile apps and result-driven marketing, I craft responsive, scalable, and conversion-focused digital experiences to grow your business. Let’s build success together! 🚀</p>
          </div>
          <div className="flex flex-col space-y-2">
  <button className="bg-gray-600  text-white px-4 py-2 rounded ">Experience</button>
  <button className="bg-gray-600 text-white px-4 py-2 rounded">Education</button>
  <button className="bg-gray-600 text-white px-4 py-2 rounded">Skills</button>
  <button className="bg-gray-600 text-white px-4 py-2 rounded">About Me</button>
</div>
        </section>
        <main>
        <div>
           <div>Experience
            <h1>My Experiance</h1>
            <p className='w-180'>With 4+ years of experience as a Web Developer, UI/UX Designer, Digital Marketer, Mobile App Developer, SEO Specialist, Frontend & Backend Developer, I create high-performing websites, apps, and marketing strategies. From SEO-driven web design to scalable applications, I deliver user-centric, responsive, and conversion-focused solutions that drive growth. 🚀</p>
          <div className="">
        <div class="bg-grey-200 rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Beautiful Mountain View</h2>
            <p class="text-gray-700 leading-tight mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                vehicula elit. Nunc et ex at turpis rutrum viverra.
            </p>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <span class="text-gray-800 font-semibold">John Doe</span>
                </div>
                <span class="text-gray-600">2 hours ago</span>
            
        </div>
    </div>
    
</div>
          </div>
          
           </div>
           <div>Education
            <h1>My Education</h1>
            <p className='w-180'>I completed my higher education in Management and am currently pursuing a Bachelor in Information Technology (BIT) at Manipal University Jaipur. With expertise in Web Development, UI/UX Design, Digital Marketing, Mobile App Development, SEO, Frontend & Backend Development, I create high-performing, user-friendly, and SEO-optimized digital solutions for businesses. 🚀</p>
            <div className="">
            <div className="overflow-x-auto mb-3">
  <table className="min-w-full border border-gray-300">
    <thead>
      <tr className="bg-gray-100 text-left">
        <th className="px-4 py-2 border-b">Board</th>
        <th className="px-4 py-2 border-b">Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">National Education Board</td>
        <td className="px-4 py-2 border-b">A+</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">Cambridge Board</td>
        <td className="px-4 py-2 border-b">A</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">ICSE</td>
        <td className="px-4 py-2 border-b">B+</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
           </div>
          <div>Skills
            <h1>My Skills</h1>
            <p className='w-180'>I specialize in Web Development, UI/UX Design, Digital Marketing, Mobile App Development, SEO, Frontend & Backend Development, crafting responsive, high-performance websites and apps with seamless user experiences. From SEO optimization to scalable coding and data-driven marketing, I deliver conversion-focused solutions that enhance brand visibility and business growth. 🚀. where i'm doing Full-Stact on MERN Stack.</p>
            <div className=" flex gap-9 flex-wrap">
              <div class="resume-item">
                <ImHtmlFive2/>
                <span>HTML5</span>
              </div>
              <div className="resume-item">
              <FaCss3Alt />
                <span>CSS3</span>
              </div>
              <div className="resume-item">
                <i className='bx bxl-tailwind-css' ></i>
                <span>Tailwind Css</span>
              </div>
              <div className="resume-item">
              <IoLogoJavascript/>
                <span>Javascript</span>
              </div>
              <div className="resume-item">
              <FaReact/>
                <span>React Js</span>
              </div>
              
              <div className="resume-item next-js">
              <RiNextjsFill/>
                <span> Next Js</span>
              </div>
              <div className="resume-item">
              <FaNodeJs />
                <span> Node Js</span>
              </div>
              <div className="resume-item">
              <SiMongodb/>
                <span> MongoDb</span>
              </div>
              
              
            
            </div>
          </div>
          <div>About Me
            <h1>About Me</h1>
            <p className='w-180'>Pritam Kumar Sah Rauniyar I’m a Web Developer, UI/UX Designer, Digital Marketer, Mobile App Developer, SEO Expert, Frontend & Backend Developer from Nepal. I specialize in creating high-performing websites, mobile apps, and marketing strategies that drive growth. With a passion for innovation, I deliver SEO-optimized, user-friendly, and scalable digital solutions for businesses worldwide. 🚀</p>
          </div>
          <div class="resume-list flex gap-9 flex-wrap">
              <div class="resume-item">
                <p>Name :<span>Govinda Phuyal</span></p>
              </div>
              <div class="resume-item">
                <p>Gender :<span> Male</span></p>
              </div>
              <div class="resume-item">
                <p>Age :<span> 28 Years Old</span></p>
              </div>
              <div class="resume-item">
                <p>Status :<span> Unmarried</span></p>
              </div>
              <div class="resume-item">
                <p>City :<span> Kathmandu</span></p>
              </div>
              <div class="resume-item">
                <p>Nationality :<span> Nepali</span></p>
              </div>
              <div class="resume-item">
                <p>Experience :<span> 1+ years</span></p>
              </div>
              <div class="resume-item">
                <p>Full Time :<span> Available</span></p>
              </div>
              
              <div class="resume-item">
                <p> Phone :<span>(+977) 9840555196</span></p>
              </div>
             
              <div class="resume-item">
                <p>Email :<span > govindaphuyal40@gmail.com</span></p>
              </div>
              
              <div class="resume-item">
                <p>Language :<span> English, Nepali</span></p>
              </div>

            </div>

</div>
        </main>
    </div>
  )
}

export default Resume