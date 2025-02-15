import React, { useRef, useState,useEffect } from 'react'
import {Menu,X} from 'lucide-react'
import "@fontsource/solitreo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  
  return (
    <nav className="bg-transparent backdrop-blur-md w-full absolute top-0 left-0 z-10 sm:px-[8%] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-white text-xl font-bold" style={{ fontFamily: "Freehand, cursive" }}>
          <span ><i>S</i></span>NEHA
          </div>
          <div className="hidden md:flex space-x-16 mr-[10rem]" >
            <a href="#home" className="text-white hover:text-gray-500">Home</a>
            <a href="#about" className="text-white hover:text-gray-500">About</a>
            <a href="#skills" className="text-white hover:text-gray-500">Skills</a>
            <a href="#services" className="text-white hover:text-gray-500">Portfolio</a>
            <a href="#contact" className="text-white hover:text-gray-500">Contact</a>
          </div>
          <div className="md:hidden">
            <button  onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} className='text-white'/> : <Menu size={24} className='text-white' />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden shadow-md p-4 pb-6 space-y-2 text-center">
          <a href="#home" className="block hover:text-gray-500">Home</a>
          <a href="#about" className="block hover:text-gray-500">About</a>
          <a href="#skills" className="block  hover:text-gray-500">skills</a>
          <a href="#services" className="block  hover:text-gray-500">Portfolio</a>
          <a href="#contact" className="block  hover:text-gray-500">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
