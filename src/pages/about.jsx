"use client"
import React, { useEffect } from 'react';
import Layout from "../Layout/Curve";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import SplitWrapper from "../a_SpliTextAnimationCodgrid/splitWrapper";

const About = () => {
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
    }, 5000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <Layout>
      <div data-scroll-container>
        <div className="w-full h-[5vw] bg-zinc-50">
          <SplitWrapper>
            <h4 className="h-[30vh] bg-red-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla corrupti eum consequuntur culpa! Dolor doloribus ipsam a, consequatur recusandae earum aliquam. Maxime error omnis eum exercitationem provident repellat, neque aut nemo quas fuga tempore modi quaerat similique porro qui blanditiis temporibus nostrum unde quos dolorem? Asperiores et delectus accusamus.
              {/* Rest of your long text here */}
            </h4>
          </SplitWrapper>
        </div>
        
        <div className="w-full h-screen bg-red-900">
          <h2>hii</h2>
        </div>
        
        <div className="w-full h-screen bg-red-900">
          <h2>hii</h2>
          <SplitWrapper>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla corrupti eum consequuntur culpa! Dolor doloribus ipsam a, consequatur recusandae earum aliquam. Maxime error omnis eum exercitationem provident repellat, neque aut nemo quas fuga tempore modi quaerat similique porro qui blanditiis temporibus nostrum unde quos dolorem? Asperiores et delectus accusamus.
            </h4>
          </SplitWrapper>
          <SplitWrapper>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla corrupti eum consequuntur culpa! Dolor doloribus ipsam a, consequatur recusandae earum aliquam. Maxime error omnis eum exercitationem provident repellat, neque aut nemo quas fuga tempore modi quaerat similique porro qui blanditiis temporibus nostrum unde quos dolorem? Asperiores et delectus accusamus.
            </h4>
          </SplitWrapper>
          <SplitWrapper>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nulla corrupti eum consequuntur culpa! Dolor doloribus ipsam a, consequatur recusandae earum aliquam. Maxime error omnis eum exercitationem provident repellat, neque aut nemo quas fuga tempore modi quaerat similique porro qui blanditiis temporibus nostrum unde quos dolorem? Asperiores et delectus accusamus.
            </h4>
          </SplitWrapper>
        </div>
      </div>
    </Layout>
  );
};

export default About;