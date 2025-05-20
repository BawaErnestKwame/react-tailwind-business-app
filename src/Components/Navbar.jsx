import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion";

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  };
};



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // Default active link

  const naveLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Services' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  return (
    <motion.div 

    variants={fadeIn('down', 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    
    className= 'fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm' id='home'>
      <div className= "w-full container max-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div className= "flex items-center gap-1 cursor-pointer">
          <div className= "w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>

          <div className= "w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2"></div>

        </div>

        <button className= 'md:hidden p-2' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon  className='size-4'/> :<MenuIcon className='size-4'/>}
          </button>

        <div className="hidden md:flex items-center gap-10">
          {naveLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? 'text-blue-600 after:w-full'
                  : 'text-gray-800 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className= 'hidden md:block hover:bg-blue-800 transition-all bg-blue-700 py-2 px-4 text-white rounded-lg hover:shadow-blue-900 '> 
            <a href='#newsletter'>Get In Torch</a>
        </button>
      </div>

      {isMenuOpen && (
  <div className="md:hidden bg-white border-t border-gray-100 py-4">
    <div className="container mx-auto px-4 space-y-3">
      {naveLinks.map((link, index) => (
        <a
          key={index}
          onClick={() => {
            setActiveLink(link.href);
            setIsMenuOpen(false);
          }}
          href={link.href}
          className={`block text-sm font-medium py-2 hover:text-blue-700 ${
            activeLink === link.href ? "text-blue-600 font-semibold" : "text-gray-900"
          }`}
        >
          {link.label}
        </a>
      ))}

      <button className="w-full hover:bg-blue-800 transition-all bg-blue-700 py-2 px-4 text-white rounded-lg hover:shadow-blue-900">
        <a href="#newsletter">Get In Touch</a>
      </button>
    </div>
  </div>
)}


       
    </motion.div>
  );
};

export default Navbar;
