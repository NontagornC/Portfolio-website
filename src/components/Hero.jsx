import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { BsGithub,BsLinkedin,BsFacebook } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative text-white flex justify-center items-center min-h-screen flex-col">
      <h1 className="lg:text-[70px] text-[40px] md:text-[50px] font-extrabold">HELLO , I'M 
        <span className="pl-4 text-[#7de4cc]">
        <Typewriter
          words={['NONTAGORN C.', 'MON' , 'NONTAGORN','NTG']}
          loop={10}
          cursor
          cursorStyle='.'
          typeSpeed={150}
          deleteSpeed={150}
          delaySpeed={1500}
          />
        </span>
      </h1>
      <span className="text-[26px] w-[60%] md:text-[33px] md:w-[50%] text-center py-5">Welcome to my web portfolio, where you can see some of my latest projects and get to know me a little better.</span>
      <span className="text-[26px] w-[60%] md:text-[33px] md:w-[50%] text-center">Take a look at my portfolio</span>
      <button className="md:w-[250px] md:h-[80px] border-solid border-2 border-[#7de4cc] m-5 w-[200px] h-[60px] rounded-xl text-[26px] md:text-[33px] my-7 uppercase hover:text-[#7de4cc] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#2E4F4F]">Project</button>

      <div className="absolute left-[5%] md:flex flex-col justify-around items-center bg-[#2E4F4F] w-[30px] h-[200px] md:h-[300px] rounded-3xl md:w-[50px] hidden ">
          <a className="text-[20px] my-3 hover:text-[#7de4cc] md:text-3xl" href=""><BsGithub/></a>
          <a className="text-[20px] my-3 hover:text-[#7de4cc] md:text-3xl" href=""><BsLinkedin/></a>
          <a className="text-[20px] my-3 hover:text-[#7de4cc] md:text-3xl" href=""><BsFacebook/></a>
      </div>

      <div className="gradient-03" />
    </div>
  )
}

export default Hero