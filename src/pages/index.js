import { AnimatePresence } from "framer-motion";
import Preloader from "../pages/Components/Preloader";
import { useEffect, useState } from "react";
import HomePage from "../pages/Components/landing/HomePage";
import AboutSection from "./Components/landing/AboutSection";
import FiveProjectSlider from "./Components/landing/FiveProjectSlider";
import Navbar from "../NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Container from "../pages/Components/landing/ServiceSection/Container";
import Lenis from "@studio-freight/lenis";
import WhyUsPage from "./Components/landing/WhyUsPage";
import FlipCardsGrid from "./Components/landing/FAQ/FlipCardsGrid";
import ScrollingText from "./Components/landing/ScrollingText";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
  
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        lerp: 0.08, // easing (0.1 is slow & smooth, 1 is instant)
      });
  
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smooth: true,
  //     direction: "vertical",
  //     gestureDirection: "vertical",
  //     smoothTouch: false,
  //   });

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };
  //   setTimeout(() => {
  //           setIsLoading(false);
  //           document.body.style.cursor = 'default';
  //           window.scrollTo(0, 0);
  //         }, 2000);
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  
  const blurLayers = [
    { blur: 0.5, mask: "linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 25%, rgba(0,0,0,0) 37.5%)" },
    { blur: 0.5625, mask: "linear-gradient(rgba(0,0,0,0) 12.5%, rgb(0,0,0) 25%, rgb(0,0,0) 37.5%, rgba(0,0,0,0) 50%)" },
    { blur: 1.125, mask: "linear-gradient(rgba(0,0,0,0) 25%, rgb(0,0,0) 37.5%, rgb(0,0,0) 50%, rgba(0,0,0,0) 62.5%)" },
    { blur: 2.25, mask: "linear-gradient(rgba(0,0,0,0) 37.5%, rgb(0,0,0) 50%, rgb(0,0,0) 62.5%, rgba(0,0,0,0) 75%)" },
    { blur: 4.5, mask: "linear-gradient(rgba(0,0,0,0) 50%, rgb(0,0,0) 62.5%, rgb(0,0,0) 75%, rgba(0,0,0,0) 87.5%)" },
    { blur: 9, mask: "linear-gradient(rgba(0,0,0,0) 62.5%, rgb(0,0,0) 75%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)" },
    { blur: 18, mask: "linear-gradient(rgba(0,0,0,0) 75%, rgb(0,0,0) 87.5%, rgb(0,0,0) 100%)" },
    { blur: 36, mask: "linear-gradient(rgba(0,0,0,0) 87.5%, rgb(0,0,0) 100%)" },
  ];
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
   
    {/* <FloatingParticles /> */}
      </AnimatePresence>
     <HomePage />
   
        <ScrollingText />
     <Container />
     <div className="w-full h-[12vh] flex items-end px-[1vw]  "> <h1>projects</h1></div>

     <FiveProjectSlider />
    <AboutSection />
     <WhyUsPage />
     <FlipCardsGrid />
     {/* <div className="w-full h-screen bg-zinc-50"></div> */}
    <Footer />

     <div style={{
      position: "fixed",
      width: "100%",
      height: "10vw",
      borderRadius: "12px",
      bottom:0,
      zIndex:9999999
    }}>
      {blurLayers.map((layer, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: index + 1,
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: layer.mask,
            WebkitMaskImage: layer.mask,
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
    
   
    </>
  );
}