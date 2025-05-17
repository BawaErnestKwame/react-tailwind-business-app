import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CompanyLogo from './Components/CompanyLogo'
import './App.css'
import PurposeSection from './PurposeSection'
import FeatureSection from './FeatureSection'
import ScheduleSection from './ScheduleSection'
import MonitorSection from './MonitorSection'
import PricingSection from './PricingSection'
import SerivicesSection from './SerivicesSection'

const App = () => {
  return (
    <main className= 'relative min-h-screen overflow-x-hidden'>

      <div className= "absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10">

      </div>

      <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <CompanyLogo/>

      <PurposeSection/>
      <FeatureSection/>
      <ScheduleSection/>
      <MonitorSection/>
      <PricingSection/>
      <SerivicesSection/>

      </div>
    </main>
  )
}

export default App