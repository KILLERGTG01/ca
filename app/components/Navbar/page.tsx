'use client'
import React, { useEffect, useState } from 'react'
//import Image from 'next/image'
//import logo from '@/app/assets/logo/logo.svg'

const Navbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[16vh] backdrop-blur-md bg-white/30 z-50 flex items-center justify-between px-5">
      <div className="flex-1">
        <button type='button' className="text-left text-lg font-bold" onClick={() => scrollToSection('home')}>
          NARESH K GOEL & ASSOCIATES
        </button>
      </div>
      <div className="flex-1 flex justify-center space-x-10 whitespace-nowrap"> 
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('home')}
        > 
          HOME 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('about')}
        > 
          ABOUT US 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('solutions')}
        > 
          SOLUTIONS 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('services')}
        > 
          OUR SERVICES 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('contact')}
        > 
          CONTACT US 
        </button>
      </div>
    </div>
  )
}

export default Navbar
