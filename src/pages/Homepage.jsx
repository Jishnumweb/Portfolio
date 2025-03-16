import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Scroler from '../components/Scroler'
import Projects from '../components/Projects'


function Homepage() {
  return (
    <div className='bg-black'>
        <div className="header-section py-3">
            <Header/>
        </div>
        <div className="hero-section container lg:mt-[110px] mt-[50px]">
          <Hero/>
        </div>
        <div className=" container mt-5 lg:py-5 ">
          <div className='flex flex-col justify-center items-center py-4 text-[#cad3ce]'>
            <h6 className='  lg:text-[23px] text-[14px] mb-0'>The blueprint for <span className='text-[#FFFFFF89]'>breakthrough</span></h6>
            <p className='lg:text-[10px] text-[9px]'>"Turning ideas into reality, step by step!"</p>
          </div>
          <Scroler/>
        </div>

        <div className="service-section container lg:mt-5 mt-5 ">

          <Projects/>
        </div>
        <div className="service-section container">
          <Service/>
        </div>
      
    </div>
  )
}

export default Homepage
