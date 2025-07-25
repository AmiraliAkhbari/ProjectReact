import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='w-full text-white px-[8%] lg:px-[12%] py-5 flex items-center justify-between bg-white dark:bg-black transition fixed top-0 left-0 z-[9999]'>
       <Link to='/'>
        <div className='flex item-center space-x-2'>
            <div className='bg-gray-800 p-2 px-3 rounded-lg'>
                 <i className='bi bi-substack text-white text-2xl'></i>
            </div>
            <h1 className='text-3xl font-bricolage tracking-widest font-bold drk:-text-white'>
                I3<span className='text-[#f4e005]'>Center</span>
            </h1>
        </div>
       </Link>
    </nav>
  )
}
