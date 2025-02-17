import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "@fontsource/montserrat";
import calc1 from "../assets/calc1.jpg";
import dicitionary from "../assets/dictionary.jpg";
import portfolio from "../assets/portfolio.jpeg";
import rps from "../assets/rps.png";
import todo from "../assets/to-do.png";
import weathe from "../assets/weathe.jpg";
import ttt from "../assets/ttt.jpg";
import "../App.css"

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const swiperRef = useRef(null);
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
  const [isPlaying, setIsPlaying] = useState(true); // Track autoplay state

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying); // Toggle state
    }
  };

  const images = [
    {
      src: calc1,
      text: "A simple and responsive calculator built with HTML, CSS, and JavaScript for basic arithmetic operations.",
      link: "/src/Projects/calculator/calculator.html",
    },
    {
      src: dicitionary,
      text: "A sleek and interactive dictionary web app using HTML, CSS, and JavaScript to quickly find word meanings!",
      link: "/src/Projects/dictionary/dictionary.html",
    },
    {
      src: rps,
      text: "Play a classic game of Rock, Paper, Scissors with interactive UI and real-time results using HTML, CSS, and JavaScript!",
      link: "/src/Projects/rock paper scissors/game.html",
    },
    {
      src: todo,
      text: "A simple and interactive To-Do List using HTML, CSS, and JavaScript to add, remove, and mark tasks as completed.",
      link: "/src/Projects/to-do list/index.html",
    },
    {
      src: ttt,
      text: "Tic-Tac-Toe game using HTML, CSS, and JavaScript for interactive gameplay with a basic AI opponent.",
      link: "/src/Projects/tic tac toe/ttt.html",
    },
    {
      src: weathe,
      text: "A simple weather app using HTML, CSS, and JavaScript to fetch and display real-time weather data.",
      link: "/src/Projects/weather/weather.html",
    },

    // {
    //   src: portfolio,
    //   text: "A sleek and responsive portfolio built with HTML, CSS, and JavaScript to showcase projects and skills.",
    //   link: "/src/Projects/pf2/index.html",
    // },
  ];

  return (
    <section
      className="w-full sm:py-[35px] sm:px-[8%] overflow-x-hidden py-[30%] "
      id="services"
    >
      <h1
        className="text-[35px] font-extrabold text-center "
        ref={textRef}
        style={{ fontFamily: "Montserrat" }}
      >
        Portfolio
      </h1>
      <p className="sm:px-[18%] sm:pb-[60px] pb-6 sm:p-0 px-[9%] text-gray-500">
        Proficient in crafting dynamic and responsive UIs with modern frontend
        technologies, animations, and seamless user experiences.
      </p>
      <div className="sm:w-full sm:max-w-4xl mx-auto w-[3.4/4]">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation,Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onClick={toggleAutoplay}
          grabCursor={true}
          navigation={true}
          pagination={{clickable:true}}
          className="relative sm:w-full sm:max-w-5xl sm:mx-auto w-[350px] flex justify-center items-center cursor-pointer"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-full h-64 object-cover rounded-lg "
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                  <p className="text-white text-md font-bold bg-transparent mt-[80px] p-8">
                    {item.text}

                    <button
                      onClick={() => window.open(item.link, "_blank")}
                      className="absolute top-4 right-4 bg-black text-white  rounded-[20%] hover:bg-black"
                    >
                      <FaArrowUpRightFromSquare
                        className="mx-auto mb-1 bg-transparent m-2 p-[2px] "
                        size={22}
                      />
                    </button>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
