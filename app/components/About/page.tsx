import React from 'react'
import papa from '@/app/assets/About/papa.svg'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex w-full h-auto bg-[#e6e1e1e0] justify-center items-center pt-1 sm:pt-3 md:pt-5 lg:pt-7 py-3'>
      <div className='text-center px-4 py-4'>
        <p className='text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2'>
          About Us
        </p>
        <p className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4'>
          Our firm Naresh K Goel & Associates is focused on bringing out lucrative financial solutions for making your business run efficiently.
        </p>
        <div className='flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0 md:space-x-8'>
          <div className='w-full md:w-1/2 h-32 bg-[#495adf] overflow-hidden'>
            <Image src={papa} alt='About Us Image' objectFit="cover" />
          </div>
          
          <div className='w-full md:w-1/2 h-32 bg-gray-100 flex items-center justify-center'>
            <p className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
