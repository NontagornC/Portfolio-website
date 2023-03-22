import React from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleNav=()=>{
    setNav(!nav)
  }

  const scrollTo = (id) => {
    scroll.scrollTo(`#${id}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <motion.div 
      variants={{
        hidden: {
          opacity: 0,
          y: -50,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 140,
          },
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5,
          },
        },
        }}
    initial="hidden"
    whileInView="show"
    className='text-white flex justify-between items-center h-24 max-w-[90%] md:max-w-[80%] mx-auto px-4 '>
        <h1 className="w-full text-xl  md:text-2xl text-[#7de4cc] font-bold p-4 uppercase">Nontagorn C.</h1>

        <ul className="hidden md:flex text-md md:text-xl ">
          <Link to="home"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="p-4 cursor-pointer uppercase hover:text-[#7de4cc] hover:font-extrabold "
                  onClick={() => scrollTo("home")}
                  >
            Home
          </Link>
          <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="p-4 cursor-pointer uppercase hover:text-[#7de4cc] hover:font-extrabold"
                  onClick={() => scrollTo("about")}
                  >
            About
          </Link>
          <Link
                  to="project"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="p-4 cursor-pointer uppercase hover:text-[#7de4cc] hover:font-extrabold"
                  onClick={() => scrollTo("project")}
                  >
            Project
          </Link>
          <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="p-4 cursor-pointer uppercase hover:text-[#7de4cc] hover:font-extrabold"
                  onClick={() => scrollTo("contact")}
                  >
            Contact
          </Link>
        </ul>

        <div onClick={()=>handleNav()} className="block md:hidden">
          {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
        </div>

        <div className={nav ? "fixed left-0 top-0 w-[40%] border-r-gray-900 h-full bg-[#0F172A] ease-in-out duration-700 px-4" : "fixed left-[-100%]"}>
        <h1 className="w-full text-xl  md:text-2xl text-[#7de4cc] font-bold p-4 uppercase">Nontagorn C.</h1>
          <ul className="uppercase p-4 text-md md:text-xl flex flex-col">
            <Link to="home"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7de4cc] hover:font-extrabold"
                  onClick={() => scrollTo("home")}
                  >
              Home
            </Link>
            <Link
                    to="about"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7de4cc] hover:font-extrabold"
                    onClick={() => scrollTo("about")}
                    >
              About
            </Link>
            <Link
                    to="project"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7de4cc] hover:font-extrabold"
                    onClick={() => scrollTo("project")}
                    >
              Project
            </Link>
            <Link
                    to="contact"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7de4cc] hover:font-extrabold"
                    onClick={() => scrollTo("contact")}
                    >
              Contact
            </Link>
          </ul>
        </div>
    </motion.div>
  )
}

export default Navbar