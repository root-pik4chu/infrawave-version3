"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";

const Card = ({ color, i, targetScale, progress, range }) => {
  // Calculate staggered position based on index
  const staggerOffset = i * 70; // Reduced offset for better stacking

  // Create scale transform based on scroll progress
  // const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="md:h-[17.5vw] h-[47vh]  flex items-center justify-end  sticky top-[0vh] md:px-[1vw]"
      // style={{ color: "#fff" }}
    >
      <motion.div
  className="flex flex-col relative md:h-[450px] h-[550px] w-full rounded-xl origin-top md:px-[1vw]  shadow-lg"
  style={{
    backgroundColor: color,
    translateY: staggerOffset,
    zIndex: 100 - i,
  }}
>
  <div className="relative flex md:flex-row flex-col justify-between w-full h-full md:p-[1vw] p-6 gap-4">
    <h2 className="md:w-[33%] text-xl font-semibold text-gray-800">
      Web Design & Development
    </h2>

    <p className="md:w-[33%] text-sm text-gray-600 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
      voluptatum ad soluta blanditiis nihil fuga optio tempora dolor eligendi
      ratione!
    </p>

    <div className="md:w-[20%] w-full h-40 md:h-full rounded-xl overflow-hidden mt-auto md:mt-0">
      <img
        className="object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkzfHx8ZW58MHx8fHx8"
        alt="Web Design"
      />
    </div>
  </div>
</motion.div>
    </div>
  );
};

export default Card;
