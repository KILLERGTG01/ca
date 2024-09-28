'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import pic1 from '@/app/assets/Hero/pic1.svg';
import pic2 from '@/app/assets/Hero/pic2.svg';
import pic3 from '@/app/assets/Hero/pic3.svg';
import pic4 from '@/app/assets/Hero/pic4.svg';
import pic5 from '@/app/assets/Hero/pic5.svg';


const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [pic1, pic2, pic3, pic4, pic5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    
    return () => clearInterval(interval);
  }, [images.length]);

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id='home'>
      <div id="default-carousel" className="relative w-full h-screen" data-carousel="slide">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
              
              priority={currentIndex === index} 
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 text-white group-hover:bg-opacity-75">
          ‹
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 text-white group-hover:bg-opacity-75">
          ›
        </span>
      </button>
    </div>
    </section>
  );
};

export default Hero;
