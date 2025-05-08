import React, { useEffect } from 'react';
import Layout from "../Layout/Curve";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from './Components/Footer/Footer';

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
      image: "https://images.unsplash.com/photo-1746591948888-7cc1e170c17b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
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
    {
      id: 3,
      title: "Arctic Studio",
      description: "A design studio specializing in minimalist branding and interactive storytelling.",
      image: "https://framerusercontent.com/images/iRAGmpLyn4DkP356rEfyWteiayg.jpg?scale-down-to=1024",
      liveSite: "ARCTIC.STUDIO",
      industry: "Creative Agency",
      published: "©2023",
      deliverables: ["WEB DESIGN", "ANIMATION", "BRAND STRATEGY"],
    },
    {
      id: 4,
      title: "EcoTrack",
      description: "EcoTrack helps companies monitor and reduce their carbon emissions in real time.",
      image: "https://framerusercontent.com/images/1V55Sz0qZ9tnhtSFoBNnD1xd4.png?scale-down-to=1024",
      liveSite: "ECOTRACK.IO",
      industry: "Sustainability",
      published: "©2025",
      deliverables: ["PRODUCT DESIGN", "DATA VISUALIZATION", "UX RESEARCH"],
    },
    {
      id: 5,
      title: "VibeSync",
      description: "Music-powered social platform that syncs real-time mood and playlists with friends.",
      image: "https://framerusercontent.com/images/1V55Sz0qZ9tnhtSFoBNnD1xd4.png?scale-down-to=1024",
      liveSite: "VIBESYNC.ME",
      industry: "Social / Music",
      published: "©2024",
      deliverables: ["UI DESIGN", "SOCIAL FEATURES", "RESPONSIVE DESIGN"],
    }
  ];

  return (
    <Layout>
      <div className="w-full px-4 space-y-20" data-scroll-container>
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-12 gap-6 min-h-[50vh] items-center"
          >
            {/* Image Section */}
            <div className="col-start-1 col-end-13 md:col-end-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Info Section */}
            <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13 flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-3xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mt-4">
                <div>
                  <p className="font-medium text-black">Live Site</p>
                  <p>{project.liveSite}</p>
                </div>
                <div>
                  <p className="font-medium text-black">Industry</p>
                  <p>{project.industry}</p>
                </div>
                <div>
                  <p className="font-medium text-black">Published</p>
                  <p>{project.published}</p>
                </div>
                <div>
                  <p className="font-medium text-black">Deliverables</p>
                  <p>{project.deliverables.join(", ")}</p>
                </div>
              </div>

              <button className="text-black font-medium underline mt-4">
                VIEW PROJECT
              </button>
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
