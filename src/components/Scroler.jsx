import React from 'react'
import Marquee from "react-fast-marquee";

function Scroler() {
    return (
        <div>
            <Marquee pauseOnHover={true}>
                <div className="flex gap-x-4">
                    <div className="bg-[#413e3ead] lg:h-[300px] lg:w-[300px] text-white flex justify-center items-center">
                        <p>scroller 1</p>
                    </div>
                    <div className="bg-[#413e3ead] lg:h-[300px] lg:w-[300px] text-white flex justify-center items-center">
                        <p>scroller 1</p>
                    </div>
                    <div className="bg-[#413e3ead] lg:h-[300px] lg:w-[300px] text-white flex justify-center items-center">
                        <p>scroller 1</p>
                    </div>
                    <div className="bg-[#413e3ead] lg:h-[300px] lg:w-[300px] text-white flex justify-center items-center">
                        <p>scroller 1</p>
                    </div>


                </div>
            </Marquee>



        </div>
    )
}

export default Scroler
