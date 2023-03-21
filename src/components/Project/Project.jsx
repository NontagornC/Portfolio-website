import React from 'react'
import SingleProject from './SingleProject/SingleProject';

const Project = () => {
  return (
    <div className="text-white flex flex-col items-end justify-center w-[80%] mx-auto" style={{ justifyContent: "center" }}>
      <h1 className="text-[15px] md:text-[30px] py-3 px-12 uppercase">Here you can find some of my personal project</h1>
      <SingleProject/>
      <button button className="md:w-[200px] md:h-[80px] bg-red-500 m-5 w-[150px] h-[60px] rounded-xl self-center">See more</button>
    </div>
  )
}

export default Project