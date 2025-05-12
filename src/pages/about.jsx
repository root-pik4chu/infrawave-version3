"use client"
import React, { useEffect , useRef } from 'react';
import Layout from "../Layout/Curve";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import SplitWrapper from "../a_SpliTextAnimationCodgrid/splitWrapper";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {projects} from "../data/data"
const About = () => {
  const container = useRef(null);

  useEffect(() => {



    // Move the locomotive scroll initialization to after component mount
    const initScroll = () => {
      const scrollContainer = document.querySelector('[data-scroll-container]');
      if (scrollContainer) {
        const scroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
          lerp: 0.1,
        });
        
        return () => {
          scroll.destroy();
        };
      }
    };
    
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      initScroll();
    }, 500);
    
    return () => {
      clearTimeout(timer);
    };




  }, []);

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"container",
        start:"5% top",
        end: "+=300%",
        markers:true,
        pin:true,
        scrub:true,
      }
    })
  },[])



  return (
    <Layout>
      <div data-scroll-container>
        <div className="w-full h-[50vh] bg-zinc-950"></div>
        <div ref={container} className="w-full h-[300vh] bg-pink-800">
            <div className="flex flex-col gap-[1vw]">
          {
                projects.map(()=>{
              return (
                <div className="w-full h-[40vh] bg-pink-500 "></div>
              )
            })
          }
            </div>
            
        <div className="w-full h-[50vh] bg-zinc-950"></div>
          
        </div>
      </div>
    </Layout>
  );
};

export default About;