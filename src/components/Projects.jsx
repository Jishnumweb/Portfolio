import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

function Projects() {
  const Projects = [
    {
      id: "1",
      title: "Arts School",
      live: "thouryathrika.com",
      images: "/images/1.png",
      link: "https://thouryathrika.com",
    },
    {
      id: "2",
      title: "Gold loan",
      live: "thandapra.com",
      images: "/images/2.png",
      link: "https://thandapra.com",
    },
    {
      id: "3",
      title: "Aluminium fabrication",
      live: "aluplusaluminium.in",
      images: "/images/3.png",
      link: "https://aluplusaluminium.in",
    },
    {
      id: "4",
      title: "Homecare Services",
      live: "sevanadharahomecare.com",
      images: "/images/4.png",
      link: "https://sevanadharahomecare.com",
    },
    {
      id: "5",
      title: "Frames shop",
      live: "coreframes.com",
      images: "/images/6.png",
      link: "https://coreframes.vercel.app",
    },
    {
      id: "6",
      title: "Photography studio",
      live: "designmedia.com",
      images: "/images/7.png",
      link: "https://designmedia.vercel.app",
    },
    {
      id: "7",
      title: "Gymnasium ",
      live: "befitzone.com",
      images: "/images/8.png",
      link: "https://befitzone.vercel.app",
    },
    {
      id: "8",
      title: "Dry cleaning & Laundry",
      live: "twinklewash.com",
      images: "/images/5.png",
      link: "https://twinklewash.com",
    },
    {
      id: "9",
      title: "Travel",
      live: "lekshminarayanatours.com",
      images: "/images/9.png",
      link: "https://lekshminarayana.vercel.app",
    },
    {
      id: "10",
      title: "Cleaning service",
      live: "brightworldcleaning.com",
      images: "/images/10.png",
      link: "https://brightworldclean.vercel.app",
    },
    {
      id: "11",
      title: "Coffee shop",
      live: "mycoffeechapter.com",
      images: "/images/11.png",
      link: "https://coffee-chapter-bete.vercel.app",
    },
    {
      id: "12",
      title: "Cleaning service",
      live: "brightworldcleaning.com",
      images: "/images/10.png",
      link: "https://brightworldclean.vercel.app",
    },
  ];
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4  lg:mb-0 mb-3">
        {Projects.map((project) => (
          <a href={project.link}>
            <motion.div
              className="bg-[#25242450] lg:h-[400px] h-[200px] px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
              initial={{ y: +100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="p-1 bg-[white]">
                <img
                  src={project.images}
                  alt=""
                  className="object-contain lg:h-[450px] h-full"
                />
              </div>
              <div>
                <h6 className="lg:text-[20px] text-[12px] mb-1 mt-3">
                  {project.title}
                </h6>
                <p className="lg:text-[14px] text-[10px] mb-2">
                  {project.live}
                </p>
                <div className="flex justify-start items-start">
                  <a
                    href="https://thouryathrika.com"
                    className="no-underline text-[#ffffffbe]"
                  >
                    {" "}
                    <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
