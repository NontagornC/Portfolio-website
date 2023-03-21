import React from 'react'
import SingleProject from './SingleProject/SingleProject';

const Project = () => {
  return (
    <div className="text-white flex flex-col items-end justify-center w-[80%] mx-auto relative" style={{ justifyContent: "center" }}>
      <h1 className="text-[30px] md:text-[40px] py-3 px-12 uppercase font-extrabold text-[#7743DB]">Here you can find some of my personal project</h1>
      <SingleProject/>
      <button className="md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px] border-solid border-2 border-[#7743DB] hover:text-[#7743DB] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#352166] self-center">See more</button>
      <div className="gradient-01"/>
      <div className="gradient-04"/>
    </div>
  )
}

export default Project