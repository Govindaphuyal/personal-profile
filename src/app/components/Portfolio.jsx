"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <div className="bg-black h-200">
      {/* Title */}
      

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row gap-6 px-5 sm:px-10 md:px-16 py-10">
      <h1 className="text-3xl sm:text-4xl  md:text-5xl font-bold text-center text-white mb-8 mt-20">
        Latest Projects
      </h1>
        {/* Left Section (Text) */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">01</h2>
          <h3 className="text-xl sm:text-2xl text-white">FrontEnd Project</h3>
          <p className="text-sm sm:text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p className="text-xs sm:text-sm text-green-600">HTML5, CSS3, JavaScript</p>
          <hr className="border-white mt-3" />
        </div>

        {/* Right Section (Swiper Slider) */}
        <section className="w-full lg:w-2/3">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            
            className="rounded-xl"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <Image
                src="/Screenshot 2025-04-07 140307.png"
                alt="Screenshot 1"
                width={1000}
                height={900}
                className="rounded-xl w-full h-auto object-cover"
              />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <Image
                src="/Screenshot 2025-04-07 142544.png"
                alt="Screenshot 2"
                width={1000}
                height={900}
                className="rounded-xl w-full h-auto object-cover"
              />
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <Image
                src="/Screenshot 2025-04-07 142938.png"
                alt="Screenshot 3"
                width={1000}
                height={900}
                className="rounded-xl w-full h-auto object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;