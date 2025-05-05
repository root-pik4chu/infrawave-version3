import React,{useEffect} from 'react';
import Layout from "../Layout/Curve"

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const About = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <>
    
    <Layout >
      <div className="w-full h-[5vw] bg-red-950"></div>
<div className="w-full h-screen bg-red-900"><h2>hii</h2>
<AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus assumenda illo sint impedit, veniam aliquid animi. Dolores cum enim iste! Animi, officia facilis! Blanditiis non quam ex dignissimos rerum!" />



</div>
<div className="w-full h-screen bg-red-900"><h2>hii</h2></div>
<div className="w-full h-screen bg-red-900"><h2>hii</h2></div>

    </Layout>
    </>
   
  );
};

export default About; 