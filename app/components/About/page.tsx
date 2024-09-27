import React from 'react'

const About = () => {
  return (
    <div className='flex w-full h-[15vh] sm:h-[25vh] md:h-[35vh] bg-[#e6e1e1e0] justify-center items-center'>
      <div className='text-center px-4'>
        <p className='text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2'>
          About Us
        </p>
        <p className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4'>
          Our firm Naresh K Goel & Associates is focused on bringing out lucrative financial solutions for making your business run efficiently.
        </p>
        <button className='bg-[#3868fa] text-white py-2 px-4 rounded hover:bg-[#274bb8] transition duration-300 text-sm sm:text-base md:text-lg'>
          Know More
        </button>
      </div>
    </div>
  )
}

export default About
