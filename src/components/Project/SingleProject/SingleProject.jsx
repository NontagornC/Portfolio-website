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
                <h1 className="text-[24px] py-2 font-semibold">{e.name}</h1>
                <span>{e.des}</span>
                <div className="justify-center">
                  {e.tool}
                </div>
                <div className="flex">
                  <button className="md:w-[100px] md:h-[40px] bg-red-500 m-5 w-[75px] h-[30px] rounded-xl">demo</button>
                  <button className="md:w-[100px] md:h-[40px] bg-red-500 m-5 w-[75px] h-[30px] rounded-xl">git repo</button>
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