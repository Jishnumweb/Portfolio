import React from 'react'
import { BsTelephoneForward } from "react-icons/bs";

function Contact() {
  const sendMessage = () => {
    let phoneNumber = "+919778732718"; // Replace with your number
    let message = encodeURIComponent("Hi, I just saw your portfolio and I'm interested in working with you! Let's connect.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <div>
        <div className='flex flex-col  justify-center items-center text-[#ffffffbe]'>
            <div className='flex gap-2 justify-center items-center'>
            <BsTelephoneForward className='lg:text-[18px] text-[10px]'/>
            <h5 className='mb-0 lg:text-[25px] text-[15px]'>Let's <span className='text-[#ffffff87]'>Connect</span></h5>

            </div>
                <p className='lg:text-base text-[10px] lg:mb-0 mb-3 font-extralightd  ' >Have a project in mind? Let’s bring it to life!</p>
                <div className='flex lg:flex-row flex-col gap-3 w-full lg:w-auto'>
                <button onClick={sendMessage} className='text-[10px] w-full lg:w-auto border-[#ffffff2a] border-2 text-[#95BD2F] lg:bg-[#bdff170f] bg-[#67852009] lg:p-[9px_13px] rounded-[5px] font-bold p-[9px_0px] sm:p-[13px_0]'>
                                GET IN TOUCH
                            </button>
                <button className='text-[10px] w-full lg:w-auto border-[#ffffff2a] border-2 text-[#95BD2F] lg:bg-[#bdff170f] bg-[#67852009] lg:p-[9px_13px] rounded-[5px] font-bold p-[9px_0px] sm:p-[13px_0]'>
                                LET'S TALK  
                            </button>
                </div>

        </div>
      
    </div>
  )
}

export default Contact
