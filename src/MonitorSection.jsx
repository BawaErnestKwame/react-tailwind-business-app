import React from 'react'
import monitor from './assets/monitor-card.webp'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MonitorSection = () => {
  return (
    <section className= 'max-w-7xl mx-auto px-4 py-16 md:py-24'>
    <div className=" flex flex-col md:flex-row items-center justify-between gap-12 md:gap-12">
        {/* left */}
        <div className=" md:w-1/2 w-full">
        <p className='text-orange-500 font-semibold'> Monitor</p>
        <h2 className=' text-3xl md:text-4xl font-bold text-neutral-900 mt-4 md-6'>Introducing proper mobile carousels</h2>
        <p className=" text-gray-600 mb-8">
            Take Control of your time and boost your productivity with our intelligent scheduling system. Automate apointments, Message team availability, and deliver exceptional customer experience calender management.

        </p>

        <a href='#' className= 'text-blue-500 font-semibold flex text-center transition-all gap-2 hover:gap-4'>
        {/* <FaLongArrowAltRight className='w-5 h-5 ' /> */}
        Explore Scheduling Features
        <ArrowRightAltIcon className='w-5 h-5 size-8'/>
        
        </a>


        </div>
       


        {/* right */}
        <div className=" md:w-1/2 w-full">
            <img src={monitor} alt="" className='w-full h-auto' />

        </div>


    </div>


</section>
  )
}

export default MonitorSection
