import gsap from "gsap";
import React, {  useLayoutEffect, useRef, useState } from "react";
import { FaGithub,FaLinkedinIn,FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "@fontsource/solitreo";
import "@fontsource/montserrat"; 



const Contact = () => {
  
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
    return () => ctx.revert();
  }, []);
  const [userData,setUserData] =useState(
    {
      Name:'',Email:'',Message:''
    }
  )
  let name,value
  const data = (e) =>{
    name = e.target.name
    value = e.target.value
    setUserData({...userData,[name]:value})
  }
  const send = async(e) => {
    const {Name,Email,Message} = userData
    e.preventDefault();
    const option = {
      method: 'POST',
      headers:{
        "Content-type": 'aplication/json'
      },
      body: JSON.stringify({
        Name,Email,Message
      })
    }
    const res = await fetch("https://portfolio-contact-49406-default-rtdb.firebaseio.com/Meaasges.json", option)
    if(res){
      alert("message sent")
    }
    setUserData({ Name: "", Email: "", Message: "" });

  }
  
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
    <section className="overflow-x-hidden sm:p-0 p-4  py-10 sm:pt-[80px]" id="contact" >
            <h1 className='text-[35px] font-extrabold text-center sm:pb-0 pb-2' ref={textRef} style={{ fontFamily: "Montserrat" }}>Contact Us</h1>
    <div className="min-h-screen flex items-center justify-center sm:p-0">
      <div className="max-w-4xl w-full shadow-lg rounded-2xl  md:flex">
        {/* Left Section - Info */}
        <div className="md:w-1/2 sm:p-6">
          <h2 className="text-2xl font-bold border-b-[1px] border-gray-400 w-[80%] py-2" style={{ fontFamily: "Freehand, cursive" }} >Get in Touch</h2>
          <p className="text-gray-600 mt-4">
            If you have any questions or just want to say hello, feel free to reach out!
          </p>
          <div className="mt-6">
            <p className="text-gray-700"><strong>Email:</strong> tsneha476@gmail.com</p>
            <p className="text-gray-700 mt-2"><strong>Address:</strong> Gomti Nagar,Lucknow</p>
          </div>
          <h2 className="text-xl mt-[70px]"><strong>Follow On:</strong></h2>
          <div className="grid grid-cols-4  text-[23px] cursor-pointer mt-6" >
          <a href="https://github.com/snehatiwari9999"><FaGithub className="bg-gray-500 p-1 rounded-full hover:bg-black" size={29}/></a>
           <a href=" http://instagram.com/snehatiwari9999"><FaInstagramSquare className="bg-gray-500 p-1 rounded-full hover:bg-black" size={29}/></a>
          <a href="https://www.linkedin.com/in/snehatiwari9999"><FaLinkedinIn className="bg-gray-500 p-1 rounded-full hover:bg-black" size={27}/></a>
          <a href="mailto:tsneha476@gmail.com"><MdEmail className="bg-gray-500 p-1 rounded-full hover:bg-black" size={29}/></a>
        </div>
        </div>
        
        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 sm:p-6 p-4 sm:pt-8 pt-14">
          <form className="space-y-4" method="POST" >
            <div>
              <input name="Name" value={userData.Name} type="text" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name"
              autoComplete="off" onChange={data} required />
            </div>
            <div>
              <input required type="email" name="Email" value={userData.Email} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" autoComplete="off" onChange={data}  />
            </div>
            <div>
              <textarea required name="Message" value={userData.Message} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your Message" autoComplete="off" onChange={data} ></textarea>
            </div>
            <button type="submit" className="w-[50%] text-bold bg-gray-500 text-black p-2 rounded-md " onClick={send} ref={boxRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
