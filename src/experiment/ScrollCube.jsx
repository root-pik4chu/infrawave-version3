'use client';
import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import { useScroll, useSpring, animated } from '@react-spring/three';

// Main component to be used in your Next.js application
const ScrollCube = () => {
  // Track scroll position
  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={scrollRef} 
      className="h-screen w-full"
      style={{ position: 'relative' }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          pointerEvents: 'none',
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedCube scrollY={scrollY} />
      </Canvas>
      
      {/* Spacer div to enable scrolling */}
      <div style={{ height: '500vh' }} />
    </div>
  );
};

// The animated 3D cube component
const AnimatedCube = ({ scrollY }) => {
  const cubeRef = useRef();
  const { viewport } = useThree();
  
  // The texts to display on each face
  const faceTexts = [
    "Web Development",
    "UI/UX Design",
    "SEO Services",
    "Content Creation",
    "Mobile Apps",
    "Consulting"
  ];

  // Animation stages based on scroll percentage
  const getScrollProgress = () => {
    // Total scroll height is 500vh
    const maxScroll = window.innerHeight * 5;
    return Math.min(1, scrollY / maxScroll);
  };

  useFrame(() => {
    if (!cubeRef.current) return;
    
    const progress = getScrollProgress();
    
    // Entry animation (from top to center)
    let yPosition = 0;
    if (progress < 0.1) {
      // Map 0-0.1 to outside screen to center
      yPosition = viewport.height * (1 - progress * 10);
    }
    
    cubeRef.current.position.y = yPosition;
    
    // Rotation animations for each face
    if (progress >= 0.1) {
      // Each face gets ~15% of the scroll (after the initial 10%)
      const rotationProgress = Math.min(1, (progress - 0.1) / 0.9);
      
      // Complete 4 rotations (showing all 6 faces) over the course of the scroll
      cubeRef.current.rotation.x = Math.PI * rotationProgress * 2;
      cubeRef.current.rotation.y = Math.PI * rotationProgress * 2;
    }
    
    // Fade out at the end
    if (progress > 0.9) {
      const fadeOutProgress = (progress - 0.9) * 10;
      cubeRef.current.scale.set(
        1 - fadeOutProgress * 0.5,
        1 - fadeOutProgress * 0.5,
        1 - fadeOutProgress * 0.5
      );
    } else {
      cubeRef.current.scale.set(1, 1, 1);
    }
  });

  return (
    <group ref={cubeRef}>
      <Box args={[2, 2, 2]} castShadow>
        <meshStandardMaterial attach="material-0" color="#4285F4" transparent opacity={0.8} />
        <meshStandardMaterial attach="material-1" color="#DB4437" transparent opacity={0.8} />
        <meshStandardMaterial attach="material-2" color="#F4B400" transparent opacity={0.8} />
        <meshStandardMaterial attach="material-3" color="#0F9D58" transparent opacity={0.8} />
        <meshStandardMaterial attach="material-4" color="#9C27B0" transparent opacity={0.8} />
        <meshStandardMaterial attach="material-5" color="#3F51B5" transparent opacity={0.8} />
        
        {/* Render text on each face */}
        <Text
          position={[0, 0, 1.01]}
          rotation={[0, 0, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {faceTexts[0]}
        </Text>
        
        <Text
          position={[0, 0, -1.01]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {faceTexts[1]}
        </Text>
        
        <Text
          position={[0, 1.01, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {faceTexts[2]}
        </Text>
        
        <Text
          position={[0, -1.01, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {faceTexts[3]}
        </Text>
        
        <Text
          position={[1.01, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {faceTexts[4]}
        </Text>
        
        <Text
          position={[-1.01, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {faceTexts[5]}
        </Text>
      </Box>
    </group>
  );
};

export default ScrollCube;