import React from 'react'
import { motion } from 'framer-motion'
import { RxStarFilled } from "react-icons/rx";

function Testimonials() {
    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 '>
                <div className='sticky lg:top-[10px] top-[100px] flex flex-col lg:h-[300px] justify-end items-center text-[#ffffffbe]'>
                    <h6 className='lg:text-[35px] text-[17px] text-white mb-0'>Words That <span className='text-[#ffffff93]'>Inspire</span></h6>
                    <p className='lg:text-base text-[10px]'>Honest words from those who trusted my work and vision</p>


                </div>
                <div className='flex flex-col gap-3 justify-center items-center relative min-h-[400px] mt-5 lg:mt-0'>
                    <motion.div className='lg:w-[500px] p-3 sticky top-[200px] bg-gradient-to-b to-[#0d0d0d] from-[#1b1a1a]  rounded-[10px]   lg:h-[250px] flex flex-col justify-center shadow-lg border-[#ffffff53] text-[#ffffffbe]  '
                        // initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, zIndex: 1, y: -9 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='flex gap-3 mb-3 border-b rounded-[5px] py-2 border-[#ffffff5c]'>
                            <img src="https://www.freepnglogos.com/uploads/camera-logo-png/camera-logo-cliparts-31.png" alt="" className='lg:h-[50px] h-[35px] object-cover rounded-[7px]' />
                            <div>
                                <h6 className='mb-0 lg:text-base text-[13px]'>Aravind viswanathan</h6>
                                <p className='text-[#95bd2fb5] lg:text-base text-[10px]'>pixelar photography</p>
                            </div>
                        </div>
                        {/* <div className='flex text-yellow-400 mb-3'>
                        <RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled />
                        </div> */}
                        <p className='lg:text-base text-[11px]'>"Jishnu brought my vision to life with a sleek and stunning website. His attention to detail and creative touch made my photography portfolio truly stand out!"</p>
                    </motion.div>
                    <motion.div className='lg:w-[500px] p-3 sticky top-[200px] bg-gradient-to-b to-[#0d0d0d] from-[#1b1a1a]  rounded-[10px]   lg:h-[250px] flex flex-col justify-center shadow-lg border-[#ffffff53] text-[#ffffffbe]  '
                        // initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, zIndex: 1, y: -9 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='flex gap-3 mb-3 border-b rounded-[5px] py-2 border-[#ffffff5c]'>
                            <img src='https://static.vecteezy.com/system/resources/previews/023/363/687/large_2x/green-leaf-icon-free-png.png'  alt="" className='lg:h-[50px] h-[35px] object-cover rounded-[7px]'/>
                            <div>
                                <h6 className='mb-0 lg:text-base text-[13px]'>Bhavya</h6>
                                <p className='text-[#95bd2fb5]  lg:text-base text-[10px]'>Bhavyas plant nursery</p>
                            </div>
                        </div>
                        {/* <div className='flex text-yellow-400 mb-3'>
                        <RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled />
                        </div> */}
                        <p className='lg:text-base text-[11px]'>"Our plant nursery website is now user-friendly and visually appealing, all thanks to Jishnu’s skills. Highly recommended!"</p>
                    </motion.div>
                    <motion.div className='lg:w-[500px] p-3 sticky top-[200px] bg-gradient-to-b to-[#0d0d0d] from-[#1b1a1a]  rounded-[10px]   lg:h-[250px] flex flex-col justify-center shadow-lg border-[#ffffff53] text-[#ffffffbe]  '
                        // initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, zIndex: 1, y: -9 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='flex gap-3 mb-3 border-b rounded-[5px] py-2 border-[#ffffff5c]'>
                            <img src="https://webstockreview.net/images/mandala-clipart-henna-tattoo-16.png" alt="" className='lg:h-[50px] h-[35px] object-cover rounded-[7px]' />
                            <div>
                                <h6 className='mb-0 lg:text-base text-[13px]'>Rizwana</h6>
                                <p className='text-[#95bd2fb5]  lg:text-base text-[10px]'>Arabian Henna</p>
                            </div>
                        </div>
                        {/* <div className='flex text-yellow-400 mb-3'>
                        <RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled />
                        </div> */}
                        <p className='lg:text-base text-[11px]'>"The Arabian Henna website turned out beautiful and elegant. Jishnu’s attention to detail and creativity made all the difference."</p>
                    </motion.div>
                    <motion.div className='lg:w-[500px] p-3 sticky top-[200px] bg-gradient-to-b to-[#0d0d0d] from-[#1b1a1a]  rounded-[10px]   lg:h-[250px] flex flex-col justify-center shadow-lg border-[#ffffff53] text-[#ffffffbe]  '
                        // initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, zIndex: 1, y: -9 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='flex gap-3 mb-3 border-b rounded-[5px] py-2 border-[#ffffff5c]'>
                            <img src="https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png" alt="" className='lg:h-[50px] h-[35px] object-cover rounded-[7px]' />
                            <div>
                                <h6 className='mb-0 lg:text-base text-[13px]'>Liverpool fans</h6>
                                <p className='text-[#95bd2fb5] lg:text-base text-[10px]'>Liverpool Fans Kerala</p>
                            </div>
                        </div>
                        {/* <div className='flex text-yellow-400 mb-3'>
                        <RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled /><RxStarFilled />
                        </div> */}
                        <p className='lg:text-base text-[11px]'>"Jishnu created an amazing platform for Liverpool fans! The website is engaging, smooth, and exactly what we wanted."</p>
                    </motion.div>

                </div>



            </div>
            

        </div>
    )
}

export default Testimonials
