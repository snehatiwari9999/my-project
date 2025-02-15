import React, { useLayoutEffect, useRef } from 'react'
import SkillsRytContent from './SkillsRytContent'
import gsap from 'gsap';
import "@fontsource/montserrat"; 



const SkillsRyt = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return; // Ensure ref exists

    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: 100, // Slide in from the left
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
    <section>
      <h1 className='text-[35px] font-bold ' ref={textRef} style={{ fontFamily: "Montserrat" }}>SKILLS</h1>
      <p className=' sm:pb-8 pb-8 sm:p-0  text-gray-500 '>All the Skills...</p>
      <p className='text-[22px] py-4 font-semibold  tracking-[.2px]'>Languages</p>
      <div className='flex gap-2 pr-4 '>
      <SkillsRytContent name="HTML"/>
      <SkillsRytContent name="Javascript"/>
      <SkillsRytContent name="CSS"/>
      <SkillsRytContent name="React"/>
      </div>
      <p className='text-[20px] py-4 font-semibold  tracking-[.2px]'>Frameworks</p>
      <div className='flex gap-2 pr-4 '>
      <SkillsRytContent name="Three JS"/>
      <SkillsRytContent name="GSAP"/>
      </div>
      <p className='text-[20px] py-4 font-semibold  tracking-[.2px]'>Library</p>
      <div className='flex gap-2 pr-4 '>
      <SkillsRytContent name="Tailwind CSS"/>
      
      </div>
      <p className='text-[20px] py-4 font-semibold  tracking-[.2px]'>Proffestional skills</p>
      <div className='flex gap-2 pr-4 '>
      <SkillsRytContent name="Team Work"/>
      <SkillsRytContent name="Creativity"/>
      <SkillsRytContent name="Time Management"/>
      </div>
      <div className='flex gap-2 pr-4 py-2 '>
      <SkillsRytContent name="Communication"/>
      
      <SkillsRytContent name="Problem Solving"/>
      </div>
      <p className='text-[20px] py-4 font-semibold  tracking-[.2px]'>Others</p>
      <div className='flex gap-2 pr-4 '>
      <SkillsRytContent name="Git"/>
      <SkillsRytContent name="GitHub"/>
      <SkillsRytContent name="Firebase"/>
      </div>
    </section>
  )
}

export default SkillsRyt
