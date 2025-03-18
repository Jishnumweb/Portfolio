import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import {motion} from 'framer-motion'

function Projects() {
  return (
    <div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4  lg:mb-0 mb-3'>

        <motion.div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'
          initial={{y:+100}}
          whileInView={{y:0}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{once:true}}
        >
          <img src="https://wallpaperaccess.com/full/3250694.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Pixelar Imaging Studio </h6>
            <p className='lg:text-[14px] text-[10px] mb-2'>A dynamic photography platform</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[25px]'/>
            </div>
          </div>

        </motion.div>

        <motion.div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'
          initial={{y:+100}}
          whileInView={{y:0}}
                    transition={{ duration: 0.5, ease: "easeOut" }} 
                    viewport={{once:true}}

        >
          <img src="https://wallpapercave.com/wp/wp14657012.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Bhavyas Plant Nursery</h6>
            <p className='lg:text-[14px] text-[10px] mb-2'> An e-commerce platform for buying and selling plants</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[30px]'/>
            </div>
          </div>

        </motion.div>

      </div>

      <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 '>
      <motion.div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'
                  initial={{y:+100}}
                  whileInView={{y:0}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{once:true}}

      >
          <img src="https://wallpaperaccess.com/full/1088655.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Liverpool Fans Kerala</h6>
            <p className='lg:text-[14px] text-[10px] mb-2'> A dedicated platform for Liverpool FC fans in Kerala</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[25px]'/>
            </div>
          </div>

        </motion.div>
        <motion.div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'
                    initial={{y:+100}}
                    whileInView={{y:0}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{once:true}}

        >
          <img src="https://wallpaperaccess.com/full/2840327.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Shows & Movies </h6>
            <p className='lg:text-[14px] text-[10px] mb-2'>A platform to explore and track movies and TV series</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[25px]'/>
            </div>
          </div>

        </motion.div>
        <motion.div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'
                    initial={{y:+100}}
                    whileInView={{y:0}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{once:true}}

        >
          <img src="https://cdn.pixabay.com/photo/2020/08/20/20/38/hands-5504603_1280.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Arabian Henna</h6>
            <p className='lg:text-[14px] text-[10px] mb-2'>A captivating blend of tradition and elegance</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[25px]'/>
            </div>
          </div>

        </motion.div>

      </div>


    </div>
  )
}

export default Projects
