"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SwipperStyles.css"
import { Navigation } from "swiper/modules";

export default function SwipperData() {
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
      description: "We’re with you post-launch for updates, improvements, and support.",
    },
    {
      title: "Client Satisfaction",
      description: "Our work isn’t done until you’re happy. That’s our promise.",
    },
  ];

  return (
    <>
      <div className="w-full h-[70%] ">
        <div className="w-full h-[10%]   flex items-center">
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
              <div className="bg-white p-4 rounded-xl shadow-md h-[100%] grid grid-rows-2  py-[3vw] text-start">
                <h2 className="text-lg font-semibold mb-2 lowercase">{card.title}</h2>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        
      </div>
    </>
  );
}
