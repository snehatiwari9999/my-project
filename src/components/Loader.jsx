

import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'


function Loader() {
    const [loading, setLoading] = useState(true);
const loaderRef = useRef(null);
const textRefs = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
          onComplete: () => setLoading(false), // Hide loader after animation
        });
    
        tl.from(textRefs.current, {
          x: 50,
          opacity: 1,
          duration: 1
        })
          .to(textRefs.current, {
            opacity: 0,
            x: -50,
          })
          .to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
          })
          .set(loaderRef.current, { display: "none" }); // Ensures it is removed
    
      }, []);
  return (
    <div  ref={loaderRef} className='h-[100%] w-[100%] fixed top-0 bg-black z-99 flex justify-center items-center text-white gap-10 text-center'id='loader'>
      <h3 ref={(el) => textRefs.current[0] = el} className="text-2xl">WELCOME TO MY WEBSITE</h3>
      
    </div>
  )
}

export default Loader

