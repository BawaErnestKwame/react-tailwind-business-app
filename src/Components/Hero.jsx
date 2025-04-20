import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { right } from './../../node_modules/@popperjs/core/lib/enums';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import hero from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className= 'container mx-auto pt-30 pb-6 px-4 sm:px-6 lg:px-8 justify-between items-center flex sm:flex-col md:flex-row'>

        <div className= "w-full md:w-1/2 space-y-8">

        <div className= " flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className= 'text-blue-600 group-hover:scale-110 transition-transform group-hover:text-amber-600 leading'><StarIcon/></span>
            <span className='text-sm font-medium block'>Jump Start your Growth</span>

           
        </div>
        <h1 className= 'text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.3]'>We boost the Growth For
           <span className= 'text-blue-600 relative inline-block'>Startup Fortune 500
        <span className= 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
        </span>
        Companies <span className= 'inline-block ml-2 animate-pulse'>⏰</span>
        </h1>

        <p className= 'text-gray-600 text-lg md:text-xl max-w-xl'>We believe that technology should work for you—not the other way around. That’s why we’ve built a system that adapts to your needs👔</p>

        <div className= " flex gap-3 max-w-md">

          <input type="email"
          placeholder='Email Address'
           className= 'flex-1 px-6 py-4 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'
          />

          <button className= 'bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg '><ArrowRightAltIcon/></button>
        </div>


        
        </div>

        <div className= "w-full md:w-1/2 mt-16 md:mt-0 md:pl-12 ">
        <div className="relative">

          <img src={hero} alt="" className= 'rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
        </div>
        </div>
    </div>
  )
}

export default Hero
