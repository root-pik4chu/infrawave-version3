import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GridDistortion from "../../../ExperimentData/GridDistortion";
import { useRouter } from "next/router";
import Image from "next/image";

// import ScrollGradientText from "../components/ScrollGradientText";
// import Lines from "../components/Lines";

// Register ScrollTrigger plugin
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
        start: "top 10%", // Start animation when section top reaches 20% from viewport top
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
      <div className="w-[100%] h-[230vh] bg-zinc-50 ">
        {/* <Lines /> */}
        {/* ---------------------------------- */}
        <div className="w-full overflow-hidden">
          <div className=" top-0 left-0 w-full h-full z-[1] pointer-events-none px-[1vw] absolute ">
            <div className="flex w-full h-full justify-between ">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-px bg-black/20 h-full" />
                ))}
            </div>
          </div>
        </div>

        {/* !-------------------------------------------- */}
        <div className="w-full h-full overflow-hidden">
          {/* Top section */}
          <div className="w-full h-[85vh]">
            <div className="w-full h-full flex items-end  justify-end flex-col px-[1vw]  ">
              {/* pt-[27vw] */}
              <div className="w-full ">
                <h1 className=" w-[50%] leading-none font-[Heading] text-[5.1vw] ">
                  we turn customer data into{" "}
                  <span className="text-blue-500">margin</span>
                </h1>
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

                <p className="w-[30%] leading-none  font-[smallHeading]">
                  We turn data into profit, plain and simple. Our approach
                  pinpoints the crucial identifiers of growth, deploys robust
                  collection, processing, and storage infrastructure, and
                  transforms your data into a tangible, profitable product.
                </p>
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
                  <div className="w-full h-full bg-zinc-900 rounded-4xl"></div>
                </div>

                <div className="video h-full w-full object-cover p-[1vw] bg-zinc-700">
                  {/* <video
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
                  </video> */}
                </div>
                <div
                  ref={secondBox}
                  className="w-1/3 h-full  absolute right-0 p-[1vw] hidden md:flex"
                >
                  {/* <div className="w-[2vw] h-full bg-yellow-400 z-20"></div> */}
                  {/* third box */}
                  <div className="w-full h-full rounded-4xl bg-zinc-900 "></div>
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
