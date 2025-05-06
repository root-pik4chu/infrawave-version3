import React ,{useEffect} from 'react';
import Layout from "../Layout/Curve"
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Waves from '..//ExperimentData/Waves';

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

<>
<div className="w-full h-screen px-4 bg-zinc-900 py-16  flex items-center justify-center">

</div>
<div className="w-full h-screen bg-red-400"><div className="w-full h-[15vw] relative bg-pink-400">

</div></div>
</>


    </Layout>
    </>
    
  );
};

export default Contact; 