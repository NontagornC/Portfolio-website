import React from 'react'
import SingleProject from './SingleProject/SingleProject';

const Project = () => {
  return (
    <div className="text-white flex flex-col items-end justify-center w-[80%] mx-auto" style={{ justifyContent: "center" }}>
      <h1 className="text-[30px] md:text-[40px] py-3 px-12 uppercase">Here you can find some of my personal project</h1>
      <SingleProject/>
      <button className="bg-red-500 md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px] self-center">See more</button>
    </div>
  )
}

export default Project