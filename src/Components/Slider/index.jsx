import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isReady, setIsReady] = useState(false);

 
  useEffect(() => {
    setIsReady(true);
  }, []);


  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();    
      swiperInstance.navigation.update();  
    }
  }, [swiperInstance]);

  return (
    <div className="relative px-[8%] lg:px-[12%] pt-[5%]">
      {/* Navigation Buttons */}
      <div
        ref={prevRef}
        className="swiper-button-prev swiper-btn swiper-btn-prev text-white text-3xl cursor-pointer"
      >
        <i className="bi bi-arrow-left"></i>
      </div>
      <div
        ref={nextRef}
        className="swiper-button-prev swiper-btn swiper-btn-next text-white text-3xl cursor-pointer"
      >
        <i className="bi bi-arrow-right"></i>
      </div>

      {isReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          loop={true}
          spaceBetween={0}
          onSwiper={setSwiperInstance}
          className="mt-10 rounded-xl"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero p-[70px] flex flex-col justify-between bg-blue-900">
              <div className="hero-top flex justify-between items-center gap-4">
                <div className="flex items-center gap-5">
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                    Business
                  </span>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                    News
                  </span>
                </div>
                <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                  <i className="bi bi-clock-history mr-1"></i> 6 Min Read
                </span>
              </div>
              <div className="hero-bottom">
                <p className="text-[#cdcdcd]">
                  <span className="text-white font-bold">Ethan Caldwell</span> on August 16, 2025
                </p>
                <h1 className="text-white font-bold font-bricolage text-6xl lg:text-7xl w-full lg:w-[80%] my-3">
                  How Tech Shapes the Future of Work in 2025
                </h1>
                <p className="text-lg my-3 w-full lg:w-[70%] text-white">
                  In today's ever-evolving world, storytelling has become a powerful tool for connection.
                  Revision provides a unique platform for individuals to...
                </p>
                <button className="bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300">
                  Discover more
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero hero2 p-[70px] flex flex-col justify-between bg-blue-900">
              <div className="hero-top flex justify-between items-center gap-4">
                <div className="flex items-center gap-5">
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                    Business
                  </span>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                    News
                  </span>
                </div>
                <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                  <i className="bi bi-clock-history mr-1"></i> 6 Min Read
                </span>
              </div>
              <div className="hero-bottom">
                <p className="text-[#cdcdcd]">
                  <span className="text-white font-bold">Ethan Caldwell</span> on August 16, 2025
                </p>
                <h1 className="text-white font-bold font-bricolage text-6xl lg:text-7xl w-full lg:w-[80%] my-3">
                  How Tech Shapes the Future of Work in 2025
                </h1>
                <p className="text-lg my-3 w-full lg:w-[70%] text-white">
                  In today's ever-evolving world, storytelling has become a powerful tool for connection.
                  Revision provides a unique platform for individuals to...
                </p>
                <button className="bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300">
                  Discover more
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="hero hero3 p-[70px] flex flex-col justify-between bg-blue-900">
              <div className="hero-top flex justify-between items-center gap-4">
                <div className="flex items-center gap-5">
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                    Business
                  </span>
                  <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                    News
                  </span>
                </div>
                <span className="bg-gray-200/20 px-5 py-1 rounded-full font-bold text-white">
                  <i className="bi bi-clock-history mr-1"></i> 6 Min Read
                </span>
              </div>
              <div className="hero-bottom">
                <p className="text-[#cdcdcd]">
                  <span className="text-white font-bold">Ethan Caldwell</span> on August 16, 2025
                </p>
                <h1 className="text-white font-bold font-bricolage text-6xl lg:text-7xl w-full lg:w-[80%] my-3">
                  How Tech Shapes the Future of Work in 2025
                </h1>
                <p className="text-lg my-3 w-full lg:w-[70%] text-white">
                  In today's ever-evolving world, storytelling has become a powerful tool for connection.
                  Revision provides a unique platform for individuals to...
                </p>
                <button className="bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300">
                  Discover more
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
