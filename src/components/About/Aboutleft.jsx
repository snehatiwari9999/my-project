import gsap from 'gsap';
import React, {  useLayoutEffect, useRef, useState } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Aboutleft = () => {
  const [isExpanded, setIsExpanded] = useState(false); 
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return; // Ensure ref exists

    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100, // Slide in from the left
        opacity: 0,
        duration: 1.5,
        ease: "power3.in",
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
    <div className=' sm:p-12'>
     <p className="text-lg tracking-[.1px]" ref={textRef}>
     I'm a frontend developer passionate about crafting engaging and dynamic user experiences. I specialize in creating interactive,visually appealing web applications using modern frameworks 
        {!isExpanded && "..."} {/* Show ellipsis when text is collapsed */}
        {isExpanded && (
          <>
            {" "} like React, GSAP, Three js and Framer Motion. My focus is on blending design and code to bring interfaces to life with smooth animations, micro-interactions, and seamless transitions.
          </>
        )}
      </p>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-gray-500 hover:underline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  )
}

export default Aboutleft
