import React from 'react'
import Rotate from './AboutRotate.jsx/Rotate'
import "@fontsource/montserrat"; // Defaults to weight 400
import resume from './Resume.pdf'


const Aboutright = () => {
  return (
    <div className='py-8 '>
      <h1 className='font-semibold text-[30px] uppercase text-center tracking-[1px]'>Pro skills</h1>
      <Rotate/>
      
    </div>
  )
}

export default Aboutright
