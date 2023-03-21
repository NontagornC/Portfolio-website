import React from 'react'
import { projectData } from '../../../utils/project'
import { AiFillDingtalkSquare } from "react-icons/ai";

const SingleProject = () => {
  return (
    <div>
      {projectData.map((e) => {
        return (
          <div className="grid md:grid-cols-2 w-full py-8 grid-cols-1" >
            <div className="flex flex-col items-center justify-center text-[400px]">
              <AiFillDingtalkSquare/>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center px-12 " key={e.name}>
                <h1 className="text-[36px] py-2 font-semibold">{e.name}</h1>
                <span className="text-[28px] text-center">{e.des}</span>
                <div className="justify-center">
                  {e.tool}
                </div>
                <div className="flex">
                  <button className="bg-red-500 md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px]">demo</button>
                  <button className="bg-red-500 md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px]">git repo</button>
                </div>
              </div>
            </div>
        </div>

        );
      })}
    </div>
  )
}

export default SingleProject