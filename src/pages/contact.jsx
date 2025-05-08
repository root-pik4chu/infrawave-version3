import React ,{useEffect} from 'react';
import Layout from "../Layout/Curve"
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';



const Contact = () => {
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
    
    <Layout>


    

    </Layout>
    </>
    
  );
};

export default Contact; 