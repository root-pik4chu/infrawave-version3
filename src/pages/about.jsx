import React from 'react';
import Layout from "../Layout/Curve"
const About = () => {
  return (
    <>
    
    <Layout backgroundColor={"#BCF366"}>

    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-4">
          Welcome to our website! We are a team of passionate individuals dedicated to creating amazing digital experiences.
        </p>
        <p className="text-lg mb-4">
          Our mission is to help businesses and individuals achieve their goals through innovative solutions and creative thinking.
        </p>
        <p className="text-lg">
          With years of experience in the industry, we bring expertise and dedication to every project we undertake.
        </p>
      </div>
    </div>

    </Layout>
    </>
   
  );
};

export default About; 