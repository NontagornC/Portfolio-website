import React from 'react'
import Skill from './Skill/Skill';
import { profile_img } from '../../assets/assets';


const About = () => {
  return (
    <div className="text-white flex items-center flex-col w-[80%] mx-auto relative">
      <h1 className="text-[25px] md:text-[35px] py-5 uppercase font-extrabold">About me</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1">
        
        <div className="flex flex-col items-center">
          <img className="lg:max-w-7xl md:max-w-5xl max-w-3xl" src={profile_img} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center my-5 text-[35px] font-extrabold text-[#1e7fd3] ">Who is Nontagorn C.</h1>
          <span className="w-[70%] lg:text-[20px] text-[16px] text-center  leading-10 py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Sapiente tempora,ipsum molestiae tenetur eligendi 
            voluptate modi culpa beatae consequatur eius?
            elit. Sapiente tempora,ipsum molestiae tenetur eligendi 
            voluptate modi culpa beatae consequatur eius?
          </span>
          <button className="md:w-[180px] w-[140px] text-[20px] md:text-[24px] md:h-[80px] h-[60px]  border-solid border-2 border-[#1e7fd3] m-5  rounded-xl uppercase 
          hover:text-[#1e7fd3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#144272]
          ">Get in touch</button>
        </div>
      </div>
      
      <Skill/>
      <div className="gradient-02"/>
    </div>
  )
}

export default About