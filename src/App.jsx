import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

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
    }else{
      document.documentElement.classList.remove('dark');
    }
  }
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

