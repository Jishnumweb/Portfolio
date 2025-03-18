import React, { useState, useEffect } from "react";

function Header() {
    const [show, setShow] = useState(false);

    const navLinks = [{ label: "Home" ,link:"#home"}, { label: "Workflow",link:"#process" }, { label: "Projects",link:"#projects" }, { label: "Testimonials",link:"#testimonials" }, { label: "Contact" ,link:"#contact"}]

    // Prevent background scrolling when menu is open

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [show]);

    return (
        <div className=" container text-[#ffffffe8] font-varela">

            {/* Large Screens */}

            <div className="container z-50 fixed top-0 w-full hidden sm:hidden lg:flex justify-center items-center gap-8 backdrop-blur border-b border-[#ffffff3c] rounded-[15px] py-4 ">
                <div>
                    <img src="images/signature.png" alt="" className="h-[30px] object-contain" />
                </div>
                <div>
                    <ul className="flex gap-5 mb-0">
                        {
                            navLinks.map((nav, index) => (
                                <div key={index}>
                                    <li className="  mt-2 text-[#ffffff8f] relative text-[13px] transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#95BD2F] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"><a href={nav.link} className="no-underline text-[#ffffff8f]">{nav.label}</a></li>

                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}

            <div className="lg:hidden sm:block block">
                {show ? (
                    <div
                        className={` z-50 fixed top-0 left-0 h-screen w-full backdrop-blur-lg bg-black/80 text-white shadow-lg transition-transform duration-300 ease-in-out ${show ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <div className="absolute right-4 top-4">
                            <button
                                className="text-3xl font-bold"
                                onClick={() => setShow(false)}
                            >
                                &times;
                            </button>
                        </div>

                        <ul className="flex flex-col items-center gap-2 mt-20 text-lg fs-[10px]">
                            <div>
                                <img src="images/signature.png" alt="" className="h-[30px] object-contain" />
                            </div>
                            {
                                navLinks.map((nav, index) => (
                                    <div key={index}>
                                        <li className="text-[13px] "><a href={nav.link} className="no-underline text-[#ffffff8f]">{nav.label}</a></li>

                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                ) : (
                    <div className="overflow-hidden mt-2 px-4 fixed z-50 top-0 left-3 right-3 flex items-center justify-between backdrop-blur border-b border-[#ffffff3c] rounded-[10px] py-2">
                        <div>
                            <img src="images/signature.png" alt="" className="h-[30px] object-contain" />
                        </div>
                        <button className="text-2xl flex-shrink-0" onClick={() => setShow(true)}>
                            ☰
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
