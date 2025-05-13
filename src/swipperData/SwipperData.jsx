"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SwipperData = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cardData = [
    {
      title: "Expert Team",
      description: "Our developers, designers, and strategists are skilled at delivering top-quality work.",
    },
    {
      title: "Creative Solutions",
      description: "We combine design and tech to build bold, creative digital experiences.",
    },
    {
      title: "Transparent Workflow",
      description: "We involve clients every step of the way to ensure clarity and confidence.",
    },
    {
      title: "Fast Turnaround",
      description: "Timely delivery is built into our process without sacrificing quality.",
    },
    {
      title: "Long-Term Support",
      description: "We're with you post-launch for updates, improvements, and support.",
    },
    {
      title: "Client Satisfaction",
      description: "Our work isn't done until you're happy. That's our promise.",
    },
  ];

  return (
    <>
      <div className="w-full h-[70%]">
        <div className="w-full h-[10%] flex items-center">
          <div
            ref={prevRef}
            className="swiper-button-prev w-[40px] h-[40px] bg-black text-white flex items-center justify-center rounded-full z-10 cursor-pointer"
          >
            &lt;
          </div>
          <div
            ref={nextRef}
            className="swiper-button-next w-[40px] h-[40px] bg-black text-white flex items-center justify-center rounded-full z-10 cursor-pointer"
          >
            &gt;
          </div>
        </div>
        <div className="w-full h-[80%]">
          <Swiper
            spaceBetween={10}
            slidesPerView={3.2}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4.2,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-zinc-200 p-4 rounded-xl shadow-md h-full grid grid-rows-2 py-[3vw] text-start ">
                  <h2 className="text-lg font-semibold lowercase leading-tight line-clamp-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        #app {
          height: 100%;
        }
        
        body {
          background: #eee;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          margin: 0;
          padding: 0;
        }
        
        .swiper {
          width: 100%;
          height: 90%;
          position: relative;
        }
        
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .swiper-button-next {
          position: relative;
          width: 2vw;
          height: 2vw;
          background-color: #171717;
          color: white;
          border-radius: 50%;
          top: 0%;
          left: 94%;
          --swiper-navigation-size: 20px;
        }
        
        .swiper-button-prev {
          position: relative;
          width: 2vw;
          height: 2vw;
          color: white;
          border-radius: 50%;
          top: 0%;
          left: 92%;
          --swiper-navigation-size: 20px;
          background-color: #171717;
        }
      `}</style>
    </>
  );
};

export default SwipperData;