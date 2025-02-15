import gsap from 'gsap';
import React, { useRef } from 'react'
import "@fontsource/solitreo";


const AboutMiddle = () => {
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(iconRef.current, {
      y: -10, // Move up
      repeat: 1, // Repeat once
      yoyo: true, // Reverse animation
      duration: 0.3, // Animation speed
      ease: "power1.out", // Smooth ease
    });
  };

  return (
    <div className='text-center py-8 sm:p-8'>
        
        <h1 className="text-[30px] font-bold font-text pb-4" onMouseEnter={handleMouseEnter} ref={iconRef} style={{ fontFamily: "Freehand, cursive" }}>WHO I AM</h1>
        <div className="space-y-2">
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Name:</span>
          <span>Sneha Tiwari</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Email:</span>
          <span>tsneha476@gmail.com</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Date of Birth:</span>
          <span>29 May 2004</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Address:</span>
          <span>Gomti Nagar,Lucknow</span>
        </div>
      </div>
    </div>
  )
}

export default AboutMiddle
