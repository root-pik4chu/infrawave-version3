'use client'  
import { useTransform, useScroll, motion } from 'framer-motion'; 
import Image from 'next/image';    

const Card = ({ color, i, targetScale, progress, range }) => {      
  // Calculate staggered position based on index   
  const staggerOffset = i * 150; // Reduced offset for better stacking
   
  // Create scale transform based on scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-[300px] flex items-center justify-end sticky top-[10vh] px-[1vw]" style={{color:"#fff"}}>              
      <motion.div                   
        className="flex flex-col relative h-[500px] w-[100%] rounded-2xl origin-top  px-[1vw]"
        style={{
          backgroundColor: color,
          translateY: staggerOffset, // Use translateY directly in style
          // scale: scale,
          zIndex: 100 - i, // Higher cards appear on top
        }}
      >       
      <h2 className='w-full '>web design and development</h2>
      

      </motion.div>          
    </div>
  ); 
}    

export default Card;