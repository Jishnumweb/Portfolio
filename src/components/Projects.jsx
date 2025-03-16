import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

function Projects() {
  return (
    <div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4  '>
        <div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'>
          <img src="https://wallpaperaccess.com/full/3250694.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Pixelar Imaging Studio </h6>
            <p className='lg:text-[14px] text-[10px] mb-2'>A dynamic photography platform</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[20px]'/>
            </div>
          </div>

        </div>
        <div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'>
          <img src="https://wallpapercave.com/wp/wp14657012.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Bhavyas Plant Nursery</h6>
            <p className='lg:text-[14px] text-[10px] mb-2'> An e-commerce platform for buying and selling plants</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[20px]'/>
            </div>
          </div>

        </div>

      </div>

      <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 '>
      <div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'>
          <img src="https://wallpaperaccess.com/full/2089295.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Liverpool Fan Page</h6>
            <p className='lg:text-[14px] text-[10px] mb-2'> A dedicated platform for Liverpool FC fans in Kerala</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[20px]'/>
            </div>
          </div>

        </div>
        <div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'>
          <img src="https://wallpaperaccess.com/full/2515310.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Shows & Movies Website </h6>
            <p className='lg:text-[14px] text-[10px] mb-2'>A platform to explore and track movies and TV series</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[20px]'/>
            </div>
          </div>

        </div>
        <div className='bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]'>
          <img src="https://wallpaperaccess.com/full/456512.jpg" alt="" className='object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]' />
          <div>
            <h6 className='lg:text-[20px] text-[17px] mb-0 mt-3'>Digital Marketing </h6>
            <p className='lg:text-[14px] text-[10px] mb-2'>A platform to Provide Degital Services</p>
            <div className='flex justify-start items-start'>
            <IoIosArrowDropright className='lg:text-[30px] text-[20px]'/>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Projects
