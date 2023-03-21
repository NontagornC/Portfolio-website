import React from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[90%] md:max-w-[80%] mx-auto px-4 '>
        <h1 className="w-full text-1xl  md:text-2xl text-[#38BDF8] font-bold p-4">Nontagorn C.</h1>

        <ul className="hidden md:flex text-1xl md:text-2xl">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Project</li>
            <li className="p-4">Contact</li>
        </ul>

        <div onClick={()=>handleNav()} className="block md:hidden">
          {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
        </div>

        <div className={nav ? "fixed left-0 top-0 w-[40%] border-r-gray-900 h-full bg-[#0F172A] ease-in-out duration-700 px-4" : "fixed left-[-100%]"}>
          <h1 className="w-full text-1xl  md:text-2xl text-[#38BDF8] font-bold p-4">REACT.</h1>
          <ul className="uppercase p-4 text-1xl">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Project</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar