import React from 'react'
import SingleProject from './SingleProject/SingleProject';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className="text-white flex flex-col items-end justify-center w-[80%] mx-auto relative" style={{ justifyContent: "center" }}>
      <motion.h1 className="text-[25px] md:text-[35px] py-3 px-12 uppercase font-extrabold text-[#7743DB]"
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        >
        Here you can find some of my personal project
      </motion.h1>
      <SingleProject/>
      
      <div className="gradient-01"/>
      <div className="gradient-04"/>
    </div>
  )
}

export default Project