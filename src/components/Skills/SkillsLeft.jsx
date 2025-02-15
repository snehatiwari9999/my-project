import React, { useLayoutEffect, useRef } from "react";
import SkillsCard from "./SkillsCard";
import gsap from "gsap";
import "@fontsource/montserrat"; 


const SkillsLeft = () => {
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
    <section className="col sm:pb-0 pb-8 ">
      <h1 className='text-[35px] font-bold  ' ref={textRef} style={{ fontFamily: "Montserrat" }}>EDUCATION</h1>
      <p className=' sm:pb-16 pb-8 sm:p-0 px-[9%] text-gray-500 '>My Education Till Now...</p>

      <div className="py-[0] px-[30px] border-l-2 border-l-solid border-l-[#bababa] ">
      <SkillsCard year="2022-2025" degree="Bachelor's of Computer Application" about="College of Innovative Management And Science, Gomti Nagar | Pursuing"/>
        <SkillsCard year="2021-2022" degree="Higher Secondary Education" about="St. Don Bosco College, Lakhimpur kheri | PCM stream |
Percentage: 79%"/>
        <SkillsCard year="2019-2020" degree="Secondary Education" about="St. Don Bosco College, Lakhimpur kheri |
Percentage: 74%"/>
      </div>
    </section>
  );
};

export default SkillsLeft;
