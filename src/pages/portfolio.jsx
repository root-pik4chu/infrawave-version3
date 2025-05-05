import React,{useEffect} from 'react';
import Layout from "../Layout/Curve"
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
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
      title: 'Project 1',
      description: 'A beautiful website design',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Project 2',
      description: 'Mobile app development',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Project 3',
      description: 'E-commerce platform',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
   <>
   
   <Layout >

   <div className="w-full h-screen bg-pink-400 p-8">
      <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="w-full h-screen bg-red-300">hii</div>
      
</Layout>
   </>
   
  );
};

export default Portfolio; 