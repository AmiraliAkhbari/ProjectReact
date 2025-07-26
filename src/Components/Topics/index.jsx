import React from 'react'

export default function Topics() {
  return (
    <>
             {/* Explore Topics */}
         <div className="px-[8%] lg:px-[12%] explore-topic py-10 flex flex-col justify-center items-center">
          <h2 className="text-sm uppercase yext-center tracking-widest mb-6 font-bold">
            Explore Trending Topics
          </h2>
            <div className="flex flex-wrap justify-center gap-4 w-[100%] lg:w-[80%]">
              {/* Each topic item */}
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-1.png" className="w-7" alt="" />
               <span className="font-medium text-x">Technology</span>
              </div>
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-2.png" className="w-7" alt="" />
               <span className="font-medium text-x">Travel</span>
              </div>
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-3.png" className="w-7" alt="" />
               <span className="font-medium text-x">Sport</span>
              </div>
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-4.png" className="w-7" alt="" />
               <span className="font-medium text-x">Business</span>
              </div>
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-5.png" className="w-7" alt="" />
               <span className="font-medium text-x">Management</span>
              </div>
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-6.png" className="w-7" alt="" />
               <span className="font-medium text-x">Trends</span>
              </div>
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-7.png" className="w-7" alt="" />
               <span className="font-medium text-x">Startups</span>
              </div>
              <div className="topic-box flex item-center gap-2 px-6 py-2 bg-[#111] border border-gray-700 bg-gray-50/10 hover:bg-gray-50/15 rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
               <img src="./assets/topic-8.png" className="w-7" alt="" />
               <span className="font-medium text-x">News</span>
              </div>
            </div>
         </div>
      
    </>
  )
}
