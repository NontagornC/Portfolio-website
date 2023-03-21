import React from 'react'
import { BsGithub} from "react-icons/bs";
import Skill from './Skill/Skill';


const About = () => {
  return (
    <div className="text-white flex items-center flex-col w-[80%] mx-auto">
      <h1 className="lg:text-[50px] md:text-[40px] text-[30px] py-5">About me</h1>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="text-[250px] flex justify-center items-center">
          {/* <img src="./logo.jpg" alt="" />
           */}
           <BsGithub/>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center my-5 text-[25px]">Who is nontagorn C.</h1>
          <span className="w-[70%] lg:text-xl text-center text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Sapiente tempora,ipsum molestiae tenetur eligendi 
            voluptate modi culpa beatae consequatur eius?
            elit. Sapiente tempora,ipsum molestiae tenetur eligendi 
            voluptate modi culpa beatae consequatur eius?
          </span>
          <button className="md:w-[200px] md:h-[80px] bg-red-500 m-5 w-[150px] h-[60px] rounded-xl">Get in touch</button>
        </div>
      </div>
      
      <Skill/>
    </div>
  )
}

export default About