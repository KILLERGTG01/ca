'use client'
import React, { useState, useEffect, useRef } from 'react'
import papa from '@/app/assets/About/papa1.svg'
import Image from 'next/image'

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`relative w-full h-auto bg-[#e6e1e1e0] py-8 sm:py-9 md:py-10 lg:py-19 transition-all duration-700 ${
        isInView ? 'scale-100' : 'scale-95'
      }`}
    >
      <div className='text-center px-4 py-4'>
        <p
          className={`text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 transition-opacity duration-700 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About Us
        </p>
        <p
          className={`text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 transition-opacity duration-700 delay-100 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Our firm Naresh K Goel & Associates is focused on bringing out lucrative financial solutions for making your business run efficiently.
        </p>

        
        <div
          className={`flex flex-col items-center bg-white/30 text-black rounded-lg shadow-lg p-6 max-w-xl mx-auto backdrop-blur-md transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='relative mb-4'>
            <Image
              src={papa}
              alt='About Us Image'
              width={120}
              height={120}
              className='rounded-full border-4 border-white transition-transform duration-700 delay-300'
              style={{
                transform: isInView ? 'scale(1)' : 'scale(0.8)',
              }}
            />
          </div>
          <h3
            className={`text-2xl font-bold mb-2 transition-opacity duration-700 delay-400 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            NARESH KUMAR GOEL
          </h3>
          <p
            className={`text-sm font-medium mb-4 transition-opacity duration-700 delay-500 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            B.Com(H), ACA, FCS, FCMA, L.L.B
          </p>
          <p
            className={`text-center text-sm transition-opacity duration-700 delay-600 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            He is the fellow member of the Institute of Chartered Accountants of India. He did his graduation from P.G.D.A.V. College, 
            Delhi University. He is also in the merit list of ICAI in CA Final. He is also a Law Graduate 
            and completed his LLB in International Taxation from Vienna University, Austria, Europe. He has authored 3 books on International Taxation 
            and Transfer Pricing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
