import React from 'react'
import Marquee from "react-fast-marquee";
import { FaSearch } from "react-icons/fa";

function Scroler() {
    return (
        <div>
            <Marquee pauseOnHover={true}>
                <div className="flex gap-x-4">
                    <div className="bg-[#413e3e47] lg:h-[250px] lg:w-[300px] h-auto py-3 text-[#bec9c3be] rounded-[8px] flex flex-col justify-center items-start px-3">
                        <div className='border-b border-[#ffffff2a] flex flex-col'>
                            <h6><FaSearch /></h6>
                            <h6>Research & Discovery</h6>
                            <p className='lg:text-[12px] text-[10px] lg:w-auto w-[250px]'>I start by understanding the project requirements, target audience, and business goals. This includes competitor analysis, market trends, and defining the scope of the project.</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-[12px] border-b border-r border-l rounded-[5px] p-[3px_9px] border-[#ffffff2a]'>
                                step 1
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#413e3e47] lg:h-[250px] lg:w-[300px] h-auto py-3 text-[#bec9c3be] rounded-[8px] flex flex-col justify-center items-start px-3">
                        <div className='border-b border-[#ffffff2a] flex flex-col'>
                            <h6><FaSearch /></h6>
                            <h6> Planning & Strategy</h6>
                            <p className='lg:text-[12px] text-[10px] lg:w-auto w-[250px]'>Next, I outline a clear roadmap, creating wireframes, user flows, and defining the tech stack that best fits the project. This step ensures efficiency in execution.</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-[12px] border-b border-r border-l rounded-[5px] p-[3px_9px] border-[#ffffff2a]'>
                                step 2
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#413e3e47] lg:h-[250px] lg:w-[300px] h-auto py-3 text-[#bec9c3be] rounded-[8px] flex flex-col justify-center items-start px-3">
                        <div className='border-b border-[#ffffff2a] flex flex-col'>
                            <h6><FaSearch /></h6>
                            <h6>Design & Prototyping</h6>
                            <p className='lg:text-[12px] text-[10px] lg:w-auto w-[250px]'>Using modern UI/UX principles, I craft visually appealing and user-friendly designs. I create prototypes to visualize the final product and gather feedback before development.</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-[12px] border-b border-r border-l rounded-[5px] p-[3px_9px] border-[#ffffff2a]'>
                                step 3
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#413e3e47] lg:h-[250px] lg:w-[300px] h-auto py-3 text-[#bec9c3be] rounded-[8px] flex flex-col justify-center items-start px-3">
                        <div className='border-b border-[#ffffff2a] flex flex-col'>
                            <h6><FaSearch /></h6>
                            <h6> Development & Implementation </h6>
                            <p className='lg:text-[12px] text-[10px] lg:w-auto w-[250px]'>I bring the designs to life using clean, optimized code. Whether it’s frontend, backend, or full-stack development, I ensure the project is responsive, scalable, and performs well.</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-[12px] border-b border-r border-l rounded-[5px] p-[3px_9px] border-[#ffffff2a]'>
                                step 4
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#413e3e47] lg:h-[250px] lg:w-[300px] h-auto py-3 text-[#bec9c3be] rounded-[8px] flex flex-col justify-center items-start px-3">
                        <div className='border-b border-[#ffffff2a] flex flex-col'>
                            <h6><FaSearch /></h6>
                            <h6>  Testing & Refinement </h6>
                            <p className='lg:text-[12px] text-[10px] lg:w-auto w-[250px]'>Before launching, I conduct thorough testing—checking responsiveness, speed, security, and usability—to eliminate any bugs or issues.</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-[12px] border-b border-r border-l rounded-[5px] p-[3px_9px] border-[#ffffff2a]'>
                                step 5
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#413e3e47] lg:h-[250px] lg:w-[300px] h-auto py-3 text-[#bec9c3be] rounded-[8px] flex flex-col justify-center items-start px-3">
                        <div className='border-b border-[#ffffff2a] flex flex-col'>
                            <h6><FaSearch /></h6>
                            <h6> Deployment & Maintenance </h6>
                            <p className='lg:text-[12px] text-[10px] lg:w-auto w-[250px]'>Once everything is polished, I deploy the project live. I also provide post-launch support, updates, and improvements to keep it running smoothly.</p>
                        </div>
                        <div className='mt-2'>
                            <button className='text-[12px] border-b border-r border-l rounded-[5px] p-[3px_9px] border-[#ffffff2a]'>
                                step 6
                            </button>
                        </div>
                    </div>



                </div>
            </Marquee>



        </div>
    )
}

export default Scroler
