import React from 'react'
import blogData from '../../../Blogs.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === parseInt(id));

  if(!blog) return <div className='p-10 text-center text-white'>Blog not found</div>
  return (
    <>
      
    </>
  )
}
