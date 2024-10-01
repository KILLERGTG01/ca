'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
    >
      <div className="flex-1">
        <button type='button' className="text-left text-lg font-bold" onClick={() => scrollToSection('home')}>
          NARESH K GOEL & ASSOCIATES
        </button>
      </div>
      <div className="flex-1 flex justify-center space-x-10 whitespace-nowrap"> 
        <motion.button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('home')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        > 
          HOME 
        </motion.button>
        <motion.button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('about')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        > 
          ABOUT US 
        </motion.button>
        <motion.button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('solutions')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        > 
          SOLUTIONS 
        </motion.button>
        <motion.button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('services')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        > 
          OUR SERVICES 
        </motion.button>
        <motion.button 
          type='button' 
          className="relative hover:text-black py-2 px-4 after:content-[''] after:absolute after:bg-black after:h-[2px] after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all"
          onClick={() => scrollToSection('contact')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        > 
          CONTACT US 
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Navbar;
