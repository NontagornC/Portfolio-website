import React from 'react'
import Skill from './Skill/Skill';
import { profile_img } from '../../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="text-white flex items-center flex-col w-[80%] mx-auto relative">
      <motion.h1 className="text-[25px] md:text-[35px] py-5 uppercase font-extrabold"
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
        About me
      </motion.h1>

      <div className="grid lg:grid-cols-2 grid-cols-1">
        
        <motion.div className="flex flex-col items-center"
        variants={{
          hidden: {
            x: -150 ,
            opacity: 0,
          },
          show: {
            x: 0,
            opacity: 1,
            transition: {
              type:"tween",
              duration:1,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        whileInView="show">
          <img className="lg:max-w-7xl md:max-w-5xl max-w-3xl" src={profile_img} alt="" />
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
              duration:1,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        >

          <h1 className="text-center my-5 text-[25px] sm:text-[35px] font-extrabold text-[#1e7fd3] ">Who is Nontagorn C.</h1>
          <span className="w-[90%] text-[16px] sm:text-[17px] text-center  leading-10 py-5">
              Welcome to my PORTFOLIO! My name is <span className="text-[#1e7fd3] font-semibold">NONTAGORN</span>, and I am a <span className="text-[#1e7fd3] font-semibold">Front-end dev</span> with a passion for crafting beautiful, functional websites.
            <br/>
            <br/>
              I have been honing my skills in <span className="text-[#F75421] font-semibold">HTML</span>, <span className="text-[#3595CF] font-semibold">CSS</span>, and <span className="text-[#F4AB3E] font-semibold">JavaScript</span>, as well as front-end frameworks like <span className="text-[#587DFA] font-semibold">React</span>, <span className="text-[#4CB3B2] font-semibold">Tailwind CSS</span>, and <span className="text-[#8C0BFD] font-semibold">Bootstrap</span>. In addition to my coursework, I have also worked on personal projects to further develop my abilities.
            <br/>
            <br/>
              Please take a look around my <span className="text-[#1e7fd3] font-semibold">Portfolio</span> to see examples of my work. If you have any questions or would like to discuss a potential project, <span className="text-[#1e7fd3] font-semibold">feel free to get in touch</span> with me through the contact area. <span className="text-[#1e7fd3] font-semibold">Thank you for visiting!</span>
          </span>
          <a href="mailto:nontagorn.ch@gmail.com">
            <button className="md:w-[180px] w-[140px] text-[16px] md:text-[20px] md:h-[80px] h-[60px]  border-solid border-2 border-[#1e7fd3] m-5  rounded-xl uppercase 
            hover:text-[#1e7fd3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#144272]
            ">
              Get in touch
            </button>
          </a>
        </motion.div>
      </div>
      <Skill/>
      <div className="gradient-02"/>
    </div>
  )
}

export default About