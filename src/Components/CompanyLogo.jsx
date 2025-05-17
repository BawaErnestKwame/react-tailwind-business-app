import React from 'react'
import slake from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woo from "../assets/woocommerce.png"
import meu from "../assets/meundies.png"
import site from "../assets/sitepoint.png"
import { img } from 'framer-motion/client'


const CompanyLogo = () => {
    const logos = [slake, amazon, woo, meu, site ]
  return (
    <div className= 'w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-counter items-start '>
        <div className= "w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-600 px-4 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left ">
            Proud partner at <br/> Hupspot and Segment
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
         {logos.map((logo, index) =>(
            <img src={logo} alt='company logo' className= 'mx-12 w-36 object-contain gray-scale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all '/>
            
         ))}
        </div>

    </div>
  )
}

export default CompanyLogo 