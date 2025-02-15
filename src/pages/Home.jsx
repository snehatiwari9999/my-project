import React, { useEffect, useRef } from "react";
import img from "../assets/img.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "@fontsource/solitreo";

gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  const imageRef = useRef(null);
  const textRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const splitText = new SplitType(textRef.current, { types: "chars" });
    gsap.fromTo(
      splitText.chars,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 2.5,
        delay:.5,
        ease: "power4" ,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Start animation when text is 80% in view
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 80, scale: 0.8 }, // Start position
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Start animation when 80% visible
          end: "bottom 60%",
          scrub: false, // Set to true for smooth effect
        },
      })
    
  }, []);

  
 
  return (
    <section className="bg-black text-white min-h-screen flex flex-col-reverse md:flex-row items-center w-full  sm:px-[8%] px:[7%] py-[20%] sm:py-[35px] overflow-x-hidden" id="home">
      <div className="w-full md:w-1/2 text-center md:text-left ">
        <h3 className="sm:text-xl text-xl sm:pb-6 pb-4 tracking-[.5px]">Hi! I'm Sneha Tiwari</h3>
        <h1 className="sm:text-6xl text-3xl font-extrabold sm:pb-6 pb-2 " ref={textRef} style={{ fontFamily: "Solitreo, cursive" }}>
          FrontEnd Developer
        </h1>
        <p className="text-lg mb-4 transition-colors duration-500 sm:p-0 p-2 tracking-[.5px] text-gray-500" >
        I'm an animated frontend developer who brings UIs to life with seamless interactions, smooth animations, and engaging user experiences.
        </p>
        
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative sm:pb-4 pb-8">
        <img
          src={img}
          alt="Hero Image"
          className="w-80 md:w-[550px] transition duration-800 ease hover:mt-[-10px] cursor-pointer bg-gradient-to-b from-black to-white"

          ref={imageRef}
        />


      </div>
    </section>
  );
};

export default Home;
