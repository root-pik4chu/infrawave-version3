import React, { useEffect } from 'react';
import Layout from "../Layout/Curve";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from './Components/Footer/Footer';
import { motion } from 'framer-motion';

const Portfolio = () => {
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

  const projects = [
    {
      id: 1,
      title: "GAM",
      description: "GAM is a consortium of physicians creating novel metrics of healthcare quality.",
      image: "https://images.unsplash.com/photo-1746591948888-7cc1e170c17b?w=500&auto=format&fit=crop&q=60",
      liveSite: "GAMEASURES.COM",
      industry: "Healthcare",
      published: "©2024",
      deliverables: ["WEB DESIGN", "BRAND IDENTITY", "PRODUCT DESIGN", "BRAND STRATEGY"],
    },
    {
      id: 2,
      title: "NOVA Finance",
      description: "NOVA offers a new standard in personal finance management with real-time analytics.",
      image: "https://framerusercontent.com/images/Isxn4pK721ZR49FRlP7VbzfN6Oc.jpg?scale-down-to=1024",
      liveSite: "NOVAFINANCE.APP",
      industry: "Fintech",
      published: "©2024",
      deliverables: ["UI/UX DESIGN", "MOBILE DESIGN", "DASHBOARD SYSTEM"],
    },
    // Add more projects...
  ];

  return (
    <Layout>
      <div className="h-[30vh] w-full flex items-end justify-between bg-[#FF4E27] p-[1vw]">
        <h1>projects</h1>
        <div className="flex gap-[1vw]">
        {
          ["webDevelopment","AiMl","BlockChain","uiux"].map((item , index)=>{
            return(
  
              <motion.button className="px-[1vw] py-[.3vw] bg-black text-white text-[0.9vw] rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                      <motion.div
                      
                      className="flex items-center flex-col w-full h-full relative overflow-hidden top-[-100%]">{item}<span className='inline-block absolute top-[50%]'>{item}</span></motion.div>
                    </motion.button>
            )
          })
        }
                  
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-[10vh] p-[1vw]">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="outer w-full h-auto lg:h-[60vh] flex flex-col lg:flex-row items-center justify-center relative gap-6">
            <div className="imageWrapper w-full lg:w-1/2 h-[40vh] lg:h-full object-cover">
              <div className="img w-full h-full overflow-hidden rounded-xl">
                <img
                  data-scroll
                  data-scroll-speed="-.1"
                  className="object-cover w-full h-full scale-125"
                  src="https://framerusercontent.com/images/Isxn4pK721ZR49FRlP7VbzfN6Oc.jpg?scale-down-to=2048"
                  alt=""
                />
              </div>
            </div>

            <div className="info w-full lg:w-1/2 h-full px-[1vw]">
              <div className="first w-full h-full flex flex-col justify-between">
                <div className="headingAndNumber w-full h-[20%]">
                  <div className="flex items-center justify-between">
                    <h2>root</h2>
                    <p>{"[" + (index + 1).toString().padStart(2, '0') + "]"}</p>
                  </div>
                </div>

                <div className="threeDivision w-full h-auto lg:h-[20%] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="one w-full lg:w-[33.3%] uppercase flex justify-between flex-col">
                    <div>
                      <p>Live site</p>
                      <h4>Infrawavesolution.com</h4>
                    </div>
                    <div>
                      <h4>view project</h4>
                    </div>
                  </div>

                  <div className="two w-full lg:w-[20.3%] uppercase flex justify-between flex-col">
                    <div>
                      <p>Industry</p>
                      <h4>Healthcare</h4>
                    </div>
                    <div>
                      <p>Published</p>
                      <h4>©2024</h4>
                    </div>
                  </div>

                  <div className="three w-full lg:w-[33.3%] uppercase flex justify-between flex-col items-start lg:items-end">
                    <div>
                      <p>Deliverables</p>
                      <h4>WEB DESIGN</h4>
                      <h4>WEB DESIGN</h4>
                      <h4>WEB DESIGN</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[20vh]"></div>
      <Footer />
    </Layout>
  );
};

export default Portfolio;
