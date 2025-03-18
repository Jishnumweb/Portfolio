import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Scroler from '../components/Scroler'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'


function Homepage() {
  return (
    <div className='bg-black'>
        <div className="header-section py-3" id='home'>
            <Header/>
        </div>
        <div className="hero-section container lg:mt-[110px] mt-[50px]">
          <Hero/>
        </div>
        <div className=" container mt-5 lg:py-5 " id='process'>
          <motion.div className='flex flex-col justify-center items-center py-4 text-[#cad3ce]'
            initial={{opacity:-1}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
          >
            <h6 className='  lg:text-[23px] text-[14px] mb-0'>The blueprint for <span className='text-[#FFFFFF89]'>breakthrough</span></h6>
            <p className='lg:text-[10px] text-[9px]'>"Turning ideas into reality, step by step!"</p>
          </motion.div>
          <Scroler/>
        </div>

        <div className="service-section container lg:mt-5 mt-5 " id='projects'>
          <Projects/>
        </div>
        <div className="service-section container lg:mt-[100px] mt-[100px]" id='testimonials'>
          <Testimonials/>
        </div>
        <div className="service-section container lg:mt-[100px] mt-[70px]" id='contact'>
          <Contact/>
        </div>
        <div className="service-section container lg:mt-[100px] mt-[70px]">
          <Footer/>
        </div>
      
    </div>
  )
}

export default Homepage
