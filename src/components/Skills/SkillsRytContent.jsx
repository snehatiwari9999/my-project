import React, { useRef } from "react";
import gsap from "gsap";

const SkillsRytContent = (props) => {
  const boxRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(boxRef.current, {
      y: -5, // Moves up by 5px
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(boxRef.current, {
      y: 0, // Resets position
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      className=" p-2 sm:px-4 bg-gray-500 text-black font-normal rounded-xl text-[15px]  cursor-pointer"
      ref={boxRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.name}
    </div>
  );
};

export default SkillsRytContent;
