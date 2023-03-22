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
      <motion.button className="md:w-[180px] w-[140px] text-[20px] md:text-[27px] md:h-[80px] h-[60px] rounded-xl uppercase lg:text-[24px] border-solid border-2 border-[#7743DB] hover:text-[#7743DB] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#352166] self-center"
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
        See more
      </motion.button>
      <div className="gradient-01"/>
      <div className="gradient-04"/>
    </div>
  )
}

export default Project