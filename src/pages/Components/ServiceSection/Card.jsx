'use client'  
import { useTransform, useScroll, motion } from 'framer-motion'; 
import Image from 'next/image';    

const Card = ({ color, i, targetScale, progress, range }) => {      
  // Calculate staggered position based on index   
  const staggerOffset = i * 90; // Reduced offset for better stacking
   
  // Create scale transform based on scroll progress
  // const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="md:h-[17.5vw] h-[47vh]  flex items-center justify-end  sticky top-[0vh] md:px-[1vw]" style={{color:"#fff"}}>              
      <motion.div                   
        className="flex flex-col relative md:h-[450px] h-[550px] w-[100%] rounded-xl origin-top  md:px-[1vw]"
        style={{
          backgroundColor: color,
          translateY: staggerOffset, // Use translateY directly in style
          // scale: scale,
          zIndex: 100 - i, // Higher cards appear on top
        }}
      >       
      <div className="relative flex md:flex-row flex-col justify-between  w-full h-full md:p-[1vw] p-[5vw]">
        
      <h2 className='md:w-[33%] '>web design and development</h2>
      <p className='md:w-[33%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum ad soluta blanditiis nihil fuga optio tempora dolor eligendi ratione! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum ad soluta blanditiis nihil fuga optio tempora dolor eligendi ratione!</p>
      <div className="md:w-[20%] h-full bg-red-500"></div>

        </div>      

      </motion.div>          
    </div>
  ); 
}    

export default Card;