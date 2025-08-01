import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BlogDetails from './Pages/Blog/BlogDetalis';
import Blog from './Pages/Blog';

export default function App() {
  const [isDark , setIsDark] = useState(false);

  useEffect(() => {
     const savedTheme = localStorage.getItem('theme');
     if(savedTheme == 'dark') {
      document.documentElement.classList.add('dark');
     }
  },[]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if(!isDark){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
  return (
    <>
       <div className='bg-white dark:bg-black text-black dark:text-white min-h-screen transition'>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <Routes>
        <Route path='/' element={<><Home/></>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
      </Routes>

      <Footer/>
      </div>
    
    </>
  )
}

