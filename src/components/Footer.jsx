import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom", // Starts when the footer enters the viewport
          end: "top center", // Ends halfway into the screen
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <footer
      ref={footerRef}
      className=" h-[20px]   w-full sm:py-[35px] sm:px-[10%] overflow-x-hidde"
    >
    </footer>
  );
};

export default Footer;
