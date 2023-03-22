import React from 'react'
import { projectData } from '../../../utils/project'

const SingleProject = () => {
  return (
    <div>
      {projectData.map((e) => {
        return (
          <div className="grid lg:grid-cols-2 w-full py-8 grid-cols-1" key={e.id}>
            <div className="flex flex-col items-center justify-center text-[400px]">
              {e.img} 
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center px-12" key={e.name}>
                <h1 className="text-[24px] md:text-[30px] py-2 font-semibold text-[#7743DB]">{e.name}</h1>
                <span className="text-[18px] md:text-[22px] text-center">{e.des}</span>
                <div className="justify-center">
                  {e.tool}
                </div>
                <div className="flex">
                  <button className="md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px] border-solid border-2 border-[#7743DB] hover:text-[#7743DB] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#352166]">demo</button>
                  <button className="md:w-[200px] md:h-[80px] m-5 w-[150px] h-[60px] rounded-xl uppercase text-[20px] lg:text-[24px] border-solid border-2 border-[#7743DB] hover:text-[#7743DB] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#352166]">git repo</button>
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