import React, { useLayoutEffect, useRef } from 'react'
import AboutMiddle from '../components/About/AboutMiddle'
import Aboutleft from '../components/About/Aboutleft'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aboutright from '../components/About/AboutRightContent.jsx/Aboutright';
import "@fontsource/montserrat"; 


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);


  useLayoutEffect(() => {
    if (!textRef.current) return; // Ensure ref exists

    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100, // Slide in from the left
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Start animation when 80% in view
          toggleActions: "play none none reverse",
        },
      });
    }, textRef);

    return () => ctx.revert(); // Cleanup animation
  }, []);
  return (
    <section className='w-full px-[4%] overflow-x-hidden  sm:px-[7%]' id='about'>
      <h1 className='text-[35px] font-extrabold text-center sm:py-0 py-6 ' ref={textRef} style={{ fontFamily: "Montserrat" }}>ABOUT US</h1>
    <div className='grid sm:grid-cols-3 bg-black text-white'   >
    
     
     <Aboutleft/>
        <AboutMiddle/>
        <div className='grid grid-rows-3 h-[400px]'>
          <div className='w-[300px] h-[400px] overflow-x-hidden'>
        <Aboutright />
        </div>
        </div>
    
    </div>
    </section>
  )
}

export default About
