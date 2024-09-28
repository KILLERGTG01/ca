'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import pic1 from '@/app/assets/Hero/pic1.svg';
import pic2 from '@/app/assets/Hero/pic2.svg';
import pic3 from '@/app/assets/Hero/pic3.svg';
import pic4 from '@/app/assets/Hero/pic4.svg';
import pic5 from '@/app/assets/Hero/pic5.svg';

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false); // State to pause the auto-slide
  const aboutRef = useRef(null);

  const cards = [
    { src: pic1, title: 'NARESH KUMAR GOEL', description: 'B.Com(H), ACA, FCS, FCMA, L.L.B' },
    { src: pic2, title: 'NARESH KUMAR GOEL', description: 'B.Com(H), ACA, FCS, FCMA, L.L.B' },
    { src: pic3, title: 'NARESH KUMAR GOEL', description: 'B.Com(H), ACA, FCS, FCMA, L.L.B' },
    { src: pic4, title: 'NARESH KUMAR GOEL', description: 'B.Com(H), ACA, FCS, FCMA, L.L.B' },
    { src: pic5, title: 'NARESH KUMAR GOEL', description: 'B.Com(H), ACA, FCS, FCMA, L.L.B' }
  ];

  // Carousel auto-slide functionality
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 4000); // Slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [cards.length, paused]);

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000); // Pause for 5 seconds after manual action
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000); // Pause for 5 seconds after manual action
  };

  return (
    <div ref={aboutRef}
      className="relative w-full h-auto bg-[#e6e1e1e0] py-8 sm:py-9 md:py-10 lg:py-19"
    >
      <div className="text-center px-4 py-4">
        <p className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
          OUR SOLUTIONS
        </p>

        {/* Horizontal Carousel */}  
        <div className="relative flex justify-center items-center overflow-hidden">
          <div
            className="relative flex items-center transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / 3)}%)`, // Shift based on active index
              width: `${cards.length * (100 / 3)}%`, // Set total width to fit 3 cards at a time
            }}
          >
            {cards.map((card, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[33%] px-2 transition-transform duration-700 ease-in-out ${isActive ? 'scale-105 z-10' : 'scale-90 opacity-60'
                    }`}
                >
                  <div className="flex flex-col items-center bg-white/30 text-black rounded-lg shadow-lg p-6 backdrop-blur-md">
                    <div className="relative mb-4">
                      <Image
                        src={card.src}
                        alt={card.title}
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-black transition-transform duration-700 ease-in-out"
                        priority={index === 0} // Only preload the first image for performance
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm font-medium mb-4">{card.description}</p>
                    <p className="text-center text-sm">
                      He is the fellow member of the Institute of Chartered Accountants of India. He did his graduation from P.G.D.A.V. College, 
                      Delhi University. He is also in the merit list of ICAI in CA Final. He is also a Law Graduate 
                      and completed his LLB in International Taxation from Vienna University, Austria, Europe. He has authored 3 books on International Taxation 
                      and Transfer Pricing.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Manual Controls */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-5 z-20">
          <button
            onClick={prevSlide}
            className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8249;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-5 z-20">
          <button
            onClick={nextSlide}
            className="bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
