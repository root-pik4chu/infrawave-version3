"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import SplitText from "../../../../a_SpliTextAnimationCodgrid/splitWrapper";
const Card = ({ color, i, Name, Desc, img, targetScale, progress, range }) => {
  // Calculate staggered position based on index
  const staggerOffset = i * 70; // Reduced offset for better stacking

  // Create scale transform based on scroll progress
  // const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="md:h-[15.5vw] h-[47vh]  flex items-center justify-end  sticky top-[0vh] md:px-[1vw]"
      style={{ color: "#fff" }}
    >
      <motion.div
        className="flex flex-col relative md:h-[350px] h-[550px] w-[100%] rounded-xl origin-top  md:px-[1vw]"
        style={{
          backgroundColor: color,
          translateY: staggerOffset, // Use translateY directly in style
          // scale: scale,
          zIndex: 100 - i, // Higher cards appear on top
        }}
      >
        <div className="relative flex md:flex-row flex-col justify-between  w-full h-full md:p-[1vw] p-[5vw]">
          <SplitText>
            <h2 className="md:w-[33%] lowercase">{Name}</h2>
          </SplitText>
          <SplitText>
            <p className="md:w-[33%] text-justify">{Desc}</p>
          </SplitText>

          <div className="md:w-[20%] w-full  h-full border-[.3vw] rounded-[1vw]">
            <img className="w-full h-full  object-cover rounded-[.8vw]" src={img} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
