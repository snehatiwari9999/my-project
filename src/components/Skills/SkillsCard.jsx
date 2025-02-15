import React from "react";

const SkillsCard = ({year,degree,about}) => {
  return (
    <div className=' relative p-[20px] cursor-pointer transition-all duration-100 mb-[20px] border-1 border-solid border-[#eaeaea] hover:shadow-[0_1px_10px_0_#ccc] hover:border-solid hover:border-1 hover:border-transparent before:content-[""] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-gray-500 before:top-0 before:border-1 before:border-solid before:border-white before:right-[calc(100%-(-23px))]'>
      <h1>{year}</h1>
      <h3 className="text-gray-500 font-bold text-[18px]">{degree}</h3>
      <p>
       {about}
      </p>
    </div>
  );
};

export default SkillsCard;
