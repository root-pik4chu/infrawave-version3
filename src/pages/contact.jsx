import React ,{useEffect} from 'react';
import Layout from "../Layout/Curve"
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ParallaxImage from '../parallaxImage/ParallaxImage';
import dynamic from "next/dynamic";
import Footer from './Components/Footer/Footer';


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
  // const ParallaxImage = dynamic(() => import("../parallaxImage/ParallaxImage"), {
  //   ssr: false,
  //   loading: () => <div className="h-[300px] bg-gray-900 animate-pulse" />,
  // });
  return (
    <>
    
    <Layout>

    <div className="bg-[#FF4C1B] h-screen px-6 py-12 flex items-center">
      <div className="  w-full grid grid-cols-12 gap-y-8 gap-x-6">
        {/* Heading */}
        <h1 className="col-start-1 col-end-13 text-7xl md:text-8xl font-bold text-black">
          Get in touch
        </h1>

        {/* Name input */}
        <div className="col-start-1 col-end-13 md:col-end-7">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-black text-black placeholder-black text-xl focus:outline-none py-2"
          />
        </div>

        {/* Email input */}
        <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border-b border-black text-black placeholder-black text-xl focus:outline-none py-2"
          />
        </div>

        {/* Message input */}
        <div className="col-start-1 col-end-13">
          <textarea
            placeholder="How can we help?"
            rows={4}
            className="w-full bg-transparent border-b border-black text-black placeholder-black text-xl focus:outline-none py-2"
          />
        </div>

        {/* Submit button */}
        <div className="col-start-1 col-end-13">
          <button className="w-full bg-white text-black text-xl font-medium py-4">
            Get in touch
          </button>
        </div>
      </div>
    </div>
      <Footer />
    

    </Layout>
    </>
    
  );
};

export default Contact; 