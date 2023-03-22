import React from 'react'
import { projectData } from '../../../utils/project'
import { motion } from 'framer-motion'

const SingleProject = () => {
  return (
    <div>
      {projectData.map((e) => {
        return (
          <div className="grid lg:grid-cols-2 w-full py-8 grid-cols-1" key={e.id}>
            <motion.div className="flex flex-col items-center justify-center text-[400px]"
              variants={{
                hidden: {
                  x: -100 ,
                  opacity: 0,
                },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type:"tween",
                    duration:1.5,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
            >
              {e.img} 
            </motion.div>

            <motion.div className="flex flex-col items-center justify-center"
              variants={{
                hidden: {
                  x: 150 ,
                  opacity: 0,
                },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type:"tween",
                    duration:1.5,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              >
              <div className="flex flex-col items-center px-12" key={e.name}>
                <h1 className="text-[24px] md:text-[30px] py-2 font-semibold text-[#7743DB]">{e.name}</h1>
                <span className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[13px] text-center px-5">{e.des}</span>
                <div className="justify-center">
                  {e.tool}
                </div>
                <div className="flex">
                  <a href={e.demo}>
                    <button className="md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px] border-solid border-2 border-[#7743DB] hover:text-[#7743DB] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#352166]">demo</button>
                  </a>
                  <a href={e.github}>
                    <button className="md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px] border-solid border-2 border-[#7743DB] hover:text-[#7743DB] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#352166]">git repo</button>
                  </a>
                </div>
              </div>
            </motion.div>
        </div>

        );
      })}
    </div>
  )
}

export default SingleProject