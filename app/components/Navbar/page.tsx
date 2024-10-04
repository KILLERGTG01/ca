'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const buttonVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-[12vh] backdrop-blur-md bg-white/30 z-50 flex items-center justify-between px-5"
      style={{ borderBottom: isMenuOpen ? '2px solid black' : 'none' }}
    >
      <div className="flex-1">
        <button type='button' className="text-left text-lg font-bold" onClick={() => scrollToSection('home')}>
          NARESH K GOEL & ASSOCIATES
        </button>
      </div>

      <div className="hidden md:block">
        <div className="flex-1 flex justify-center space-x-10 whitespace-nowrap">
          {['home', 'about', 'solutions', 'services', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              type='button'
              className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
              onClick={() => scrollToSection(section)}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 * (index + 1) }}
            >
              {section.toUpperCase().replace('_', ' ')}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button 
          type="button"
          className="text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX className="text-black" size={24} /> : <FiMenu className="text-black" size={24} />}
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[12vh] left-0 w-full bg-white z-40 shadow-lg rounded-b-md border-t border-gray-300"
            style={{ borderTop: '2px solid black' }}
          >
            <div className="flex flex-col items-center space-y-5 p-5">
              {['home', 'about', 'solutions', 'services', 'contact'].map((section, index) => (
                <button
                  key={section}
                  type='button'
                  className="py-2 px-4 text-lg font-bold text-gray-800 hover:text-black"
                  onClick={() => scrollToSection(section)}
                >
                  {section.toUpperCase().replace('_', ' ')}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
