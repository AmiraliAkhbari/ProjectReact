import React, { useEffect, useState } from "react";
import blogData from "../../Blogs.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import about from "../../../public/assets/about.png";
import { Link, Links } from "react-router-dom";

export default function Blog() {
  const [loading, setLoading] = React.useState(true)
  const [blogs, setBlogs] = useState([]);
   setTimeout(() => setLoading(false), 2000);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  if (loading) return <LoadingSpinner />;
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-8/12 p-4 rounded-lg">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col md:flex-row item-center mb-10 gap-6"
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                  <Link to={`/blog/${blog.id}`}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-xl w-full blog-img object-cover h-[270] transform transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                    />
                  </Link>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="flex gap-2 mb-3">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-50/10 border border-[#83838380] text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mb-1">
                    <span className="font-semibold">{blog.author}</span>
                  </p>
                  <h2 className="text-xl font-bold mb-3">{blogs.title}</h2>

                  <p className="mb-4">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.id}`}>
                    <button
                      className="px-6 py-2 rounded-lg bg-transparent border border-[#83838380] hover:bg-gray-50/15 
                 font-medium transition duration-300 ease-in-out shadow-sm hover:shadow-md"
                    >
                      {blog.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-4/12 sticky top-[80px] left-0 h-full">
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4">
              <span className="uppercase text-[14px]">About</span>
              <div className="flex items-center my-3 gap-1">
                <img
                  src="../../../public/assets/about.png"
                  className="w-16 rounded-full p-1"
                  alt=""
                />
                <div>
                  <h3 className="font-bold">Ethan Caldwell</h3>
                  <p className="uppercase text-[13px]">Reflective Blogger</p>
                </div>
              </div>
              <p>
                Ethan Caldwell shares thoughtful insights and reflections on
                life, culture, and personal growth. His work explores the
                intersections of creativity and experience, offering readers
                unique perspectives.
              </p>
              <h5 className="font-bold my-3">
                <i className="bi bi-geo-alt-fill"></i>
                Paris, France
              </h5>
              <div className="social-icons flex gap-4">
                <i className="bi bi-twitter-x hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-instagram hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-facebook hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-linkedin hover:text-yellow-400 cursor-pointer transition text-xl"></i>
              </div>
            </div>
            <h2 className="uppercase my-5 font-bold">Featured Posts</h2>
            {/* Mini Slide */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 1500,
              }}
              className="rounded-md"
            >
              <SwiperSlide>
                <div className="mini-slide p-5 flex flex-col justify-between">
                  <div>
                    <span
                      className="bg-gray-200/20 px-5 py-1 rounded-full
                   font-bold hover:gray-200/30 cursor-pointer text-white"
                    >
                      Business
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#cdcdcd]">
                      <span className="text-white font-bold">
                        Ethan Caldwell
                      </span>{" "}
                      on July 16,2025
                    </p>

                    <h1 className="text-white font-bold font-bricolage text-2xl my-1">
                      How Tech Shapes the Future of Work in 2025
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide2 */}
              <SwiperSlide>
                <div className="mini-slide mini-slide2 p-5 flex flex-col justify-between">
                  <div>
                    <span
                      className="bg-gray-200/20 px-5 py-1 rounded-full
                font-bold hover:gray-200/30 cursor-pointer text-white"
                    >
                      Sport
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#cdcdcd]">
                      <span className="text-white font-bold">
                        Ethan Caldwell
                      </span>{" "}
                      on April 20,2025
                    </p>
                    <h1 className="text-white font-bold font-bricolage text-2xl my-1">
                      How Tech Shapes the Future of Work in 2025
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide3 */}
              <SwiperSlide>
                <div className="mini-slide mini-slide3 p-5 flex flex-col justify-between">
                  <div>
                    <span
                      className="bg-gray-200/20 px-5 py-1 rounded-full
                     font-bold hover:gray-200/30 cursor-pointer text-white"
                    >
                      Trends
                    </span>
                  </div>
                  <div className="">
                    <p className="text-[#cdcdcd]">
                      <span className="text-white font-bold">
                        Ethan Caldwell
                      </span>{" "}
                      on April 29,2025
                    </p>
                    <h1 className="text-white font-bold font-bricolage text-2xl my-1">
                      How Tech Shapes the Future of Work in 2025
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Box 2 */}
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4 mt-10">
              <span className="uppercase text-[14px]">Work Experience</span>
              <div
                className="flex flex-col my-3 border-b border-[#83838380]
                pb-4"
              >
                <div className="flex justify-between w-full">
                  <h2>Product Desinger</h2>
                  <h5>2022 - Now</h5>
                </div>
                <p className="text-gray-400">Pioneer</p>
              </div>
              <div
                className="flex flex-col my-3 border-b border-[#83838380]
                pb-4"
              >
                <div className="flex justify-between w-full">
                  <h2>Product Desinger</h2>
                  <h5>2022 - 2025</h5>
                </div>
                <p className="text-gray-400">Pioneer</p>
              </div>
              <div className="flex flex-col my-3">
                <div className="flex justify-between w-full">
                  <h2>Product Desinger</h2>
                  <h5>2022 - 2025</h5>
                </div>
                <p className="text-gray-400">Pioneer</p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4 mt-10">
              <span className="uppercase text-[14px]">Work Experience</span>
              <div className="flex items-center gap-3 my-6">
                <img
                  src="../../../public/assets/figma.png"
                  alt=""
                  className="w-12 rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-xl">Figma</h2>
                  <p className="font-[300]">
                    Collaborate and design interface real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 my-6">
                <img
                  src="../../../public/assets/notion.png"
                  alt=""
                  className="w-12 rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-xl">Notion</h2>
                  <p className="font-[300]">
                    Organize,track, and collaborate on project easily.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 my-6">
                <img
                  src="../../../public/assets/AI.png"
                  alt=""
                  className="w-12 rounded-lg"
                />
                <div>
                  <h2 className="font-bold text-xl">Illustrator</h2>
                  <p className="font-[300]">
                    Create precise vector graphics and Illustrator.
                  </p>
                </div>
              </div>
            </div>
            {/* Box 4 */}
            <div className="bg-gray-50/10 rounded-lg border border-[#83838380] p-4 mt-10">
              <span className="uppercase text-[14px]">Creating</span>

              <div className="my-5">
                <h2
                  className="pb-2 font-bold text-xl hover:text-yellow-400
                cursor-pointer transition"
                >
                  Heartfelt Reflections
                  <i className="bi bi-box-arrow-in-up-right"></i>
                </h2>
                <p>
                  A deep dive into emotional experiences and personal growth,
                  sharing valuable insights on life's most meaningful moments.
                </p>
              </div>
              <div className="my-5">
                <h2
                  className="pb-2 font-bold text-xl hover:text-yellow-400
                cursor-pointer transition"
                >
                  Latest Tech Gadgets
                  <i className="bi bi-box-arrow-in-up-right"></i>
                </h2>
                <p>
                  Explore the newest and most innovative technology products
                  hitting the market, from smart devices to cutting-edge tools.
                </p>
              </div>
              <div className="my-5">
                <h2
                  className="pb-2 font-bold text-xl hover:text-yellow-400
                cursor-pointer transition"
                >
                  Trends for 2025
                  <i className="bi bi-box-arrow-in-up-right"></i>
                </h2>
                <p>
                  A look ahead at the emerging trends that will shape the world
                  in 2024, from lifestyle shifts to groundbreaking innvations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
