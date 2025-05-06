import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GridDistortion from "../../../ExperimentData/GridDistortion";
import { useRouter } from "next/router";
import Image from "next/image";
import SplitText from "../../../a_SpliTextAnimationCodgrid/splitWrapper";

// import ScrollGradientText from "../components/ScrollGradientText";
// import Lines from "../components/Lines";

// Register ScrollTrigger plugin\
import MagnetLines from "../../../ExperimentData/MagnetLines";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const videoBox = useRef(null);
  const box = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    // Create a timeline for coordinated animations
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 0%", // Start animation when section top reaches 20% from viewport top
        end: "+=300", // End animation after scrolling 300px
        scrub: 1, // Smoother scrubbing with slight delay
        // markers: true,       // Keep markers for debugging (remove in production)
        pin: true,
        anticipatePin: 1, // Keep pinning behavior
      },
    });

    // Add animations to timeline with label "a" to keep them synchronized
    t1.to(
      firstBox.current,
      {
        x: "-100%", // Move left panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      secondBox.current,
      {
        x: "100%", // Move right panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      videoBox.current,
      {
        width: "100vw", // Expand video box to full width
        duration: 1,
        ease: "power2.inOut",
      },
      "a"
    );
  }, []);

  const [key, setKey] = useState(router.route);
  useEffect(() => {
    setKey(router.route);
  }, [router.route]);
  // useEffect(() => {}, []);

  return (
    <div>
      <div className="w-[100%] h-[230vh] bg-[#FF4E27] ">
        {/* <Lines /> -------------------------------------- */}
        <div className=" top-0 left-0 w-full h-full z-[1] pointer-events-none px-[1vw] absolute ">
        <div className="flex w-full h-full justify-between ">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-px bg-white/50 h-full" />
            ))}
        </div>
      </div>
      {/* -------------------------------------------- */}
        <div className="w-full h-full overflow-hidden">
          {/* Top section */}
          <div className="w-full h-[85vh]">
            <div className="w-full h-full flex items-srart justify-between flex-col px-[1vw]  ">
              {/* pt-[27vw] */}
              <div className="w-full ">
                <div className="w-full h-[25vh] pt-[2vw]">
                  {/* <h1 className="pt-[2vw]" style={{fontSize:"18.5vw", color: "fff"}}>INfrawave</h1> */}
                  {/* <GridDistortion
                    key={key}
                    imageSrc="./Frame 99.svg"
                    grid={20}
                    mouse={0.1}
                    strength={0.15}
                    relaxation={0.9}
                    className="custom-class"
                  /> */}
              
                </div>
                
                  <div className="w-full h-[50vh] relative flex ">
                    
                  <h1 className=" w-[70%] leading-none font-[Heading] text-[5.1vw] ">
                    we turn customer data into{" "}
                    <span className="text-white">margin</span>
                  </h1>
                  {/* <p className="w-[50%] leading-none  font-[smallHeading]" style={{fontSize:"1.5vw" , lineHeight:"1.5vw"}}>
                    We turn data into profit, plain and simple. Our approach
                    pinpoints the crucial identifiers of growth, deploys robust
                    collection, processing, and storage infrastructure, and
                    transforms your data into a tangible, profitable product.
                  </p> */}
                 
                  </div>
               
              </div>
              <div className="w-full flex items-end justify-between ">
                <div className="flex gap-[0.5vw]">
                  <button className="px-[3vw] py-[1vw]  bg-black text-white text-[0.9vw] rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                    Work with Us
                  </button>
                  <button className="px-[3vw] py-[1vw] text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-[0.9vw] transition duration-200">
                    Portfolio
                  </button>
                </div>
                <SplitText>
                  <p className="w-[30%] leading-none  font-[smallHeading]">
                    We turn data into profit, plain and simple. Our approach
                    pinpoints the crucial identifiers of growth, deploys robust
                    collection, processing, and storage infrastructure, and
                    transforms your data into a tangible, profitable product.
                  </p>
                </SplitText>
              </div>
            </div>
          </div>

          {/* Animation section */}
          <div
            ref={box}
            className="relative w-full h-[100vh] flex items-center justify-center z-20 mt-[2vw]"
          >
            <div className="w-full h-full  sticky flex items-center justify-between">
              <div className="relative w-full h-full flex">
                <div
                  ref={firstBox}
                  className="w-1/3 h-full  absolute p-[1vw] hidden md:flex"
                >
                  {/* first box */}
                  <div className="w-full h-full bg-zinc-50 rounded-4xl object-cover overflow-hidden border-zinc-50 border-[2vw]">
                    <div className=" w-full h-[5vw]  py-[1vw]">
                      <h2>project name</h2>
                    </div>
                    <img
                      className="bg-cover object-cover w-full h-full"
                      src="https://images.unsplash.com/photo-1617355405361-29f0f0a3d737?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>

                <div className="video h-full w-full object-cover p-[1vw] ">
                  <video
                    autoPlay
                    loop
                    muted
                    // playsInline
                    className="w-full h-full object-cover rounded-4xl"
                  >
                    <source
                      src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div
                  ref={secondBox}
                  className="w-1/3 h-full  absolute right-0 p-[1vw] hidden md:flex"
                >
                  {/* <div className="w-[2vw] h-full bg-yellow-400 z-20"></div> */}
                  {/* third box */}
                  <div className="w-full h-full rounded-4xl bg-zinc-50 object-cover overflow-hidden border-zinc-50 border-[2vw] relative">
                    <div className=" w-full h-[5vw]  py-[1vw]">
                      <h2>project name</h2>
                    </div>
                    <img
                      className="object-cover w-full h-full"
                      src="https://images.unsplash.com/photo-1582275902060-7a4368e84acc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section for scrolling space */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
