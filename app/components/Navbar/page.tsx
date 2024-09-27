'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '@/app/assets/logo/logo.svg'

const Navbar: React.FC = () => {
  // Handling hydration error
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter(); // using router
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-[10vh] backdrop-blur-md bg-white/30 z-50 flex items-center justify-between px-5">
      <div className="flex-1">
        <button type='button' className="text-left text-lg font-bold" onClick={() => router.push('/')}>
          NARESH K GOEL & ASSOCIATES
        </button>
      </div>
      <div className="flex-1 flex justify-center space-x-10 whitespace-nowrap"> 
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => router.push('/')}
        > 
          HOME 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => router.push('/about')}
        > 
          ABOUT US 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => router.push('/solutions')}
        > 
          SOLUTIONS 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => router.push('/services')}
        > 
          OUR SERVICES 
        </button>
        <button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => router.push('/contact')}
        > 
          CONTACT US 
        </button>
      </div>
    </div>
  )
}

export default Navbar
