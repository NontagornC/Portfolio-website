import React from 'react'
import { DiHtml5,DiCss3,DiSass,DiJavascript1,DiReact,DiBootstrap,DiGit,DiGithubBadge } from "react-icons/di";
import { SiTailwindcss,SiVite} from "react-icons/si";

const Skill = () => {

  return (
    <div className="w-[80%] py-20">
        <h3 className="text-[20px] md:text-[25px] px-12 uppercase">what i can do</h3>
        <h3 className="text-[30px] md:text-[40px] py-5 px-12 uppercase">Skill and tool i can do</h3>
        <div className="grid lg:grid-cols-5 md:grid-rows-2 md:grid-cols-4 grid-cols-3" >
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiHtml5/>
                <span className="text-lg">HTML5</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiCss3/>
                <span className="text-lg">CSS3</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiSass/>
                <span className="text-lg">SASS</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiJavascript1/>
                <span className="text-lg">JAVASCRIPT</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiReact/>
                <span className="text-lg">REACT</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiBootstrap/>
                <span className="text-lg">BOOTSTRAP</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <SiTailwindcss/>
                <span className="text-lg">TAILWINDCSS</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <SiVite/>
                <span className="text-lg">VITE.JS</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiGit/>
                <span className="text-lg">GIT</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiGithubBadge/>
                <span className="text-lg">GITHUB</span>
            </div>
        </div>
    </div>

  )
}

export default Skill