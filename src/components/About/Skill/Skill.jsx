import React from 'react'
import { DiHtml5,DiCss3,DiSass,DiJavascript1,DiReact,DiBootstrap,DiGit,DiGithubBadge } from "react-icons/di";
import { SiTailwindcss,SiVite} from "react-icons/si";
import { motion } from 'framer-motion';

const Skill = () => {

  return (
    <div className="w-[80%] py-20 relative">
        <motion.h3 
            className="text-[20px] md:text-[25px] px-12 uppercase font-bold"
            variants={{
                hidden: {
                x: -100 ,
                opacity: 0,
                },
                show: {
                x: 0,
                opacity: 1,
                transition: {
                    type:"tween",
                    duration:0.5,
                    ease: "easeOut",
                },
                },
            }}
            initial="hidden"
            whileInView="show"
            >
            what i can do
        </motion.h3>
        <motion.h1 className="text-[25px] md:text-[35px] py-5 px-12 uppercase font-extrabold text-[#e42f89]"
            variants={{
                hidden: {
                x: -100 ,
                opacity: 0,
                },
                show: {
                x: 0,
                opacity: 1,
                transition: {
                    type:"tween",
                    duration:1,
                    ease: "easeOut",
                },
                },
            }}
            initial="hidden"
            whileInView="show"
            >
            Skill and tool i can do
        </motion.h1>
        <motion.div className="grid lg:grid-cols-5 md:grid-rows-2 md:grid-cols-4 grid-cols-3" 
            variants={{
                hidden: {
                opacity: 0,
                y: 100,
                },
                show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                },
                },
            }}
            initial="hidden"
            whileInView="show"
        >
            <div className="flex flex-col justify-center items-center text-[45px] p-5">
                <DiHtml5/>
                <span className="md:text-xl text-sm pt-3">HTML5</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <DiCss3/>
                <span className="md:text-xl text-sm pt-3">CSS3</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <DiSass/>
                <span className="md:text-xl text-sm pt-3">SASS</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <DiJavascript1/>
                <span className="md:text-xl text-sm pt-3">JAVASCRIPT</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <DiReact/>
                <span className="md:text-xl text-sm pt-3">REACT</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <DiBootstrap/>
                <span className="md:text-xl text-sm pt-3">BOOTSTRAP</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <SiTailwindcss/>
                <span className="md:text-xl text-sm pt-3">TAILWINDCSS</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <SiVite/>
                <span className="md:text-xl text-sm pt-3">VITE.JS</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <DiGit/>
                <span className="md:text-xl text-sm pt-3">GIT</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[60px] p-5">
                <DiGithubBadge/>
                <span className="md:text-xl text-sm pt-3">GITHUB</span>
            </div>
        </motion.div>
        <div className="gradient-05" />
    </div>

  )
}

export default Skill