import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="text-white w-[80%] flex flex-col justify-center text-center mx-auto my-8 border-y-2 relative">
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] py-5 px-12 uppercase self-start font-extrabold text-[#EDDFB3]">Get in touch</h1>
          <div className="grid grid-cols-2 text-[#EDDFB3] pb-8">
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#B09B71]" href="">nontagorn.ch@gmail.com</a>
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#B09B71]" href="">LinkedIn</a>
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#B09B71]" href="">(+66) 88 225 7757</a>
            <a className="p-5 bg-[#374151] m-5 rounded-3xl overflow-hidden text-[14px] md:text-[20px] uppercase border-solid border-2 border-[#EDDFB3] hover:shadow-2xl hover:translate-x-[-10px] hover:bg-[#B09B71]" href="">Facebook</a>
            <div className="gradient-06"/>
          </div>
        </div>

        <footer className="text-white w-[100%] flex  justify-around text-center mx-auto py-5 bg-[#1F2937]">
          <h1 className="text-[30px] uppercase my-8 font-semibold">Nontagorn Chantarasena</h1>
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center text-center">
              <h1 className="text-[14px] md:text-[18px] font-semibold py-3">Follow me</h1>
              <a className="text-[14px] md:text-[18px] py-3 overflow-hidden" href="">Github</a>
              <a className="text-[14px] md:text-[18px] py-3 overflow-hidden" href="">LinkedIn</a>
            </div>
            <div  className="flex flex-col justify-center text-center overflow-hidden">
              <h1 className="text-[14px] md:text-[18px] font-semibold py-3">Contact</h1>
              <a  className="text-[14px] md:text-[18px] py-3" href="">(+66) 88 225 7757</a>
              <a  className="text-[14px] md:text-[18px] py-3" href="">nontagorn.ch@gmail.com</a>
            </div>
          </div>
        </footer>

    </div>
    
  )
}

export default Footer