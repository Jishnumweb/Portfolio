import React, { useState } from "react";
import { FaInstagram, FaLaravel, FaPhp, FaWordpress } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  const sendMessage = () => {
    let phoneNumber = "+919778732718"; // Replace with your number
    let message = encodeURIComponent(
      "Hi, I just saw your portfolio and I'm interested in working with you! Let's connect."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-black ">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-5  justify-center items-center">
        {/* Image section */}
        <div className=" h-auto lg:h-[530px] sm:h-[650px] border-gray-300 bg-[#25242450] rounded-[10px] lg:w-96  bg-blend-darken">
          <figure className="p-3">
            <img
              src="images/jishnu2.jpg"
              alt="Shoes"
              className="rounded-[10px] saturate-0 hover:saturate-100"
            />
          </figure>
          <div className=" px-3 pb-2 text-[#BEC9C3]">
            <p className="font-varela mb-0">Hello i am Jishnu M</p>
            <p className="font-varela">
              Full stack web developer based in kerala
            </p>
            <div className="pb-3 border-b border-[#ffffff2a]">
              <div className="button-container lg:text-[25px] text-[20px]">
                <a href="" className="text-[#BEC9C3]">
                  <FaInstagram />
                </a>
                <a href="" className="text-[#BEC9C3]">
                  <FaGithub />
                </a>
                <a href="" className="text-[#BEC9C3]">
                  {" "}
                  <FaXTwitter />
                </a>
                <a href="" className="text-[#BEC9C3]">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 mb-2">
              <button
                className="text-[10px] w-full lg:w-auto border-[#ffffff2a] border-2 text-[#95BD2F] lg:bg-[#bdff170f] bg-[#67852009] lg:p-[9px_13px] rounded-[5px] font-bold p-[9px_0px] sm:p-[13px_0] "
                onClick={sendMessage}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>

        {/* Content section */}

        <div className=" p-0 flex flex-col gap-2 ">
          <div className="h-auto lg:h-[130px] lg:w-[650px]  rounded-[10px]   bg-[#25242450] p-[10px] lg:p-[20px] sm:p-[24px]">
            <p className="text-[11px] lg:text-[14px] text-[#BEC9C3]">
              I’m a MERN stack developer and web designer passionate about the
              creating modern, responsive websites. I specialize in React,
              Node.js, Express, MongoDB, and Tailwind CSS. My work blends
              functionality with sleek design for the best user experience.
              Let’s build something amazing together!{" "}
            </p>
          </div>
          <div className="h-auto lg:h-[400px] lg:w-[650px]  rounded-[10px]   bg-[#25242450] p-[10px] lg:p-[20px] lg:flex lg:flex-col justify-evenly">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 pb-3 border-b rounded-[10px] border-[#ffffff1e]">
              <div className=" group lg:h-[100px] h-[80px]  transition  bg-[#2c28284f] lg:p-[20px_3-010x] flex flex-col justify-center items-center lg:rounded-[9px] rounded-[7px]">
                <h4 className="text-[#ffffff90] group-hover:text-[#E34F26] transition duration-300 lg:text-[30px] text-[23px] ">
                  <FaHtml5 />
                </h4>
                <h4 className="lg:text-sm font-bold text-[13px] text-[#ffffff90]">
                  HTML
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] text-[23px] lg:text-[30px] group-hover:text-[#38BDF8] transition duration-300">
                  <IoLogoCss3 />
                </h4>
                <h4 className="font-bold  lg:text-sm text-[13px] text-[#ffffff90]">
                  CSS
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] group-hover:text-[yellow] transition duration-300 lg:text-[30px] text-[23px] ">
                  <BiLogoJavascript />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90] ">
                  JAVASCRIPT
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#61DAFB] transition duration-300 text-[23px] ">
                  <FaReact />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  REACT JS
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#339933] transition duration-300 text-[23px] ">
                  <FaNodeJs />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  NODE JS
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#ffe1e1] transition duration-300 text-[23px] ">
                  <SiExpress />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  EXPRESSJS
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#47A248] transition duration-300 text-[23px] ">
                  <SiMongodb />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  MONGODB
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#38BDF8] transition duration-300 text-[23px] ">
                  <RiTailwindCssFill />
                </h4>
                <h4 className="font-bold lg:text-sm text-sm text-[#ffffff90]">
                  TAILWIND
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#000000] transition duration-300 text-[23px] ">
                  <RiNextjsLine />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  NEXT JS
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#4989a7] transition duration-300 text-[23px] ">
                  <FaPhp />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  PHP
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#cc5353] transition duration-300 text-[23px] ">
                  <FaLaravel />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  LARAVEL
                </h4>
              </div>
              <div className="h-[80px] group lg:h-[100px] bg-[#2c28284f] lg:p-[20px_30px] flex flex-col justify-center items-center rounded-[9px]">
                <h4 className="text-[#ffffff90] lg:text-[30px] group-hover:text-[#38BDF8] transition duration-300 text-[23px] ">
                  <FaWordpress />
                </h4>
                <h4 className="font-bold  lg:text-sm text-sm text-[#ffffff90]">
                  WORDPRESS
                </h4>
              </div>
            </div>

            <div className="mt-4 grid lg:grid-cols-4 grid-cols-3  gap-2 ">
              <button className="lg:text-[12px] text-[10px] p-2 rounded-[5px] text-[#ffffff8a] border-[#ffffff1e] bg-[#25242450]">
                Mobile responsive
              </button>
              <button className="lg:text-[12px] text-[10px] p-2 rounded-[5px] text-[#ffffff8a] border-[#ffffff1e] bg-[#25242450]">
                High performance
              </button>
              <button className="lg:text-[12px] text-[10px] p-2 rounded-[5px] text-[#ffffff8a] border-[#ffffff1e] bg-[#25242450]">
                user-friendly
              </button>
              <button className="lg:text-[12px] text-[10px] p-2 rounded-[5px] text-[#ffffff8a] border-[#ffffff1e] bg-[#25242450]">
                Interactive
              </button>
              <button className="lg:text-[12px] text-[10px] p-2 rounded-[5px] text-[#ffffff8a] border-[#ffffff1e] bg-[#25242450]">
                SEO-optimized
              </button>
              <button className="lg:text-[12px] text-[10px] p-2 rounded-[5px] text-[#ffffff8a] border-[#ffffff1e] bg-[#25242450]">
                Scalable & Secure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
