import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  lg:mb-0 mb-3">
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/1200x/8a/0a/fc/8a0afc5f39c8607a042a86a5ff317a9b.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-1 mt-3">
              Clothing E-commerce Website
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              A responsive online fashion store with product listings, cart, and
              smooth checkout experience.
            </p>
            <div className="flex justify-start items-start">
              <a
                href="http://217.217.248.249/"
                className="no-underline text-[#ffffffbe]"
              >
                {" "}
                <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/1200x/e8/15/09/e81509abe6b808f19dc5757451eddd30.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              ERP Software
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              {" "}
              A scalable solution for streamlined business operations and
              management.
              {/* <span className="text-red-100">(Under maintanence)</span>{" "} */}
            </p>
            <div className="flex justify-start items-start">
              <a
                href="https://dashboard.jishnum.in"
                className="no-underline text-[#ffffffbe]"
              >
                <IoIosArrowDropright className="lg:text-[30px] text-[30px]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 ">
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/1200x/73/3c/4e/733c4e3ea8c206ffd04d4f52e6b0a09a.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              Photography Portfolio Website
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              {" "}
              A visual-focused website to showcase photography work and
              galleries.
            </p>
            <div className="flex justify-start items-start">
              <a
                href="https://designmedia.vercel.app"
                className="no-underline text-[#ffffffbe]"
              >
                {" "}
                <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/736x/13/7e/c4/137ec494bb3937be9496b1bb58bc345f.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              Fitness & Gym Website
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              A responsive website designed for gyms and fitness centers
            </p>
            <div className="flex justify-start items-start">
              <a
                href="https://quonsahflix.netlify.app/"
                className="no-underline text-[#ffffffbe]"
              >
                {" "}
                <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/736x/92/2b/9c/922b9cf3074cd1d2c45f0e392bc391bf.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              Thouryathrika Art School – Website
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              A creative website showcasing art courses, events, and student
              works.
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
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 ">
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/736x/76/b1/16/76b116fdfdcc1fc0430318644576c7a5.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              Madirasi Biriyani – Restaurant Website
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              {" "}
              A modern restaurant website showcasing menu, specials, and brand
              identity.
            </p>
            <div className="flex justify-start items-start">
              <a
                href="https://madirasibiriyani.com"
                className="no-underline text-[#ffffffbe]"
              >
                {" "}
                <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://wallpaperaccess.com/full/2840327.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              Shows & Movies{" "}
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              A platform to explore and track movies and TV series
            </p>
            <div className="flex justify-start items-start">
              <a
                href="https://quonsahflix.netlify.app/"
                className="no-underline text-[#ffffffbe]"
              >
                {" "}
                <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/1200x/85/16/96/851696dcf18248fc8c4845124dc9f7bd.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              Twinkle Wash – Laundry Service Website
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              A modern website for showcasing laundry services and customer
              information.
            </p>
            <div className="flex justify-start items-start">
              <a
                href="https://twinklewash.com"
                className="no-underline text-[#ffffffbe]"
              >
                {" "}
                <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#25242450] lg:h-[600px] h-auto px-3 py-3 rounded-[10px] flex flex-col justify-between text-[#ffffffbe]"
          initial={{ y: +100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pinimg.com/736x/1f/9f/82/1f9f825beafaa037012dc100fa074de8.jpg"
            alt=""
            className="object-cover lg:h-[450px] h-[auto] saturate-0 hover:saturate-100 rounded-[10px]"
          />
          <div>
            <h6 className="lg:text-[20px] text-[17px] mb-0 mt-3">
              Aventrix HR – Business Website
            </h6>
            <p className="lg:text-[14px] text-[10px] mb-2">
              A professional website for showcasing HR services and company
              profile.
            </p>
            <div className="flex justify-start items-start">
              <a
                href="https://twinklewash.com"
                className="no-underline text-[#ffffffbe]"
              >
                {" "}
                <IoIosArrowDropright className="lg:text-[30px] text-[25px]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
