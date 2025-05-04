import { AnimatePresence } from "framer-motion";
import Preloader from "../pages/Components/Preloader";
import { useEffect, useState } from "react";
import HomePage from "../pages/Components/landing/HomePage";
import AboutSection from "./Components/landing/AboutSection";
import FiveProjectSlider from "./Components/landing/FiveProjectSlider";
import Navbar from "../NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Container from "./Components/ServiceSection/Container";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {

      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
   

      </AnimatePresence>
    
     <HomePage />
     <div className="w-full h-[23vh] bg-zinc-50 px-[1vw]"><h1>services</h1></div>

     <Container />
     <div className="w-full h-[60vh] md:h-[20vh] flex items-end px-[1vw]  "> <h1>projects</h1></div>

     <FiveProjectSlider />
     {/* <div className="w-full h-screen bg-zinc-50"></div> */}
    <Footer />
    
   
    </>
  );
}