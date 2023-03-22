import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div id="contact">
        <motion.div className="text-white w-[80%] flex flex-col justify-center text-center mx-auto my-8 border-y-2 relative"
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
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] py-5 px-12 uppercase self-start font-extrabold text-[#EDDFB3]">Get in touch</h1>
          <div className="grid grid-cols-2 text-[#EDDFB3] pb-8">
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#B09B71]" href="mailto:nontagorn.ch@gmail.com">
              nontagorn.ch@gmail.com
            </a>
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#B09B71]" href="https://www.linkedin.com/in/nontagorn-chantarasena/">
              LinkedIn
            </a>
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] cursor-none" href="">
              (+66) 88 225 7757
            </a>
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#B09B71]" href="https://www.facebook.com/nontagorn.chantarasena/">
              Facebook
            </a>
            <div className="gradient-06"/>
          </div>
        </motion.div>

        <motion.footer className="text-white w-[100%] flex  justify-around text-center mx-auto py-5 bg-[#1F2937]"
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          >
          <h1 className="text-[16px] sm:text-[20px] md:text-[30px] uppercase my-8 font-semibold">Nontagorn Chantarasena</h1>
          <div className="grid grid-cols-2 text-[12px] sm:text-[14px] md:text-[18px] px-4">
            <div className="flex flex-col justify-center text-center ">
              <h1 className="font-semibold py-3">Follow me</h1>
              <a className="py-3 overflow-hidden hover:text-[#EDDFB3]" href="https://github.com/NontagornC">Github</a>
              <a className="py-3 overflow-hidden hover:text-[#EDDFB3]" href="https://www.linkedin.com/in/nontagorn-chantarasena/">LinkedIn</a>
            </div>
            <div  className="flex flex-col justify-center text-center overflow-hidden ">
              <h1 className="font-semibold py-3">Contact</h1>
              <a  className="py-3 ">(+66) 88 225 7757</a>
              <a  className="py-3 hover:text-[#EDDFB3]" href="mailto:nontagorn.ch@gmail.com">nontagorn.ch@gmail.com</a>
            </div>
          </div>
        </motion.footer>

    </div>
    
  )
}

export default Footer