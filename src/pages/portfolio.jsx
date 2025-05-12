import React, { useEffect } from 'react';
import Layout from "../Layout/Curve";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from './Components/Footer/Footer';
import { motion } from 'framer-motion';
import HoverButton from './Components/ButtonStagger/HoverText';


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
  
              <HoverButton text={item} />
            )
          })
        }
                  
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-[10vh] p-[1vw]">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="outer w-full h-auto lg:h-[60vh] flex flex-col lg:flex-row items-center justify-between relative gap-6 ">
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
                
                <div className="w-full h-[80%]  flex flex-col items-end justify-end">
                <div className="threeDivision w-full h-[35%] grid grid-cols-3 grid-rows-6 gap-4 ">
  {/* Column 1 */}
  <div className="col-span-1 row-span-2 uppercase flex flex-col justify-between">
    <div>
      <p>Live site</p>
      <h4>Infrawavesolution.com</h4>
    </div>
    <div>
      <h4>view project</h4>
    </div>
  </div>

  {/* Column 2 */}
  <div className="col-span-1 row-span-2 uppercase flex flex-col justify-between">
    <div>
      <p>Industry</p>
      <h4>Healthcare</h4>
    </div>
    <div>
      <p>Published</p>
      <h4>©2024</h4>
    </div>
  </div>

  {/* Column 3 */}
  <div className="col-span-1 row-span-6 uppercase flex flex-col justify-start items-start lg:items-end">
    <p>tech stack</p>
    <h4>WEB DESIGN</h4>
    <h4>WEB DESIGN</h4>
    <h4>WEB DESIGN</h4>
    <h4>WEB DESIGN</h4>
    <h4>WEB DESIGN</h4>
  </div>
</div>
<div className="text-justify">
  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore illum fugiat aut maxime, eaque blanditiis voluptatum consequuntur, magni, reprehenderit sed perferendis sit cumque esse corporis aliquid. Tenetur, fuga quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore illum fugiat aut</h4>
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
