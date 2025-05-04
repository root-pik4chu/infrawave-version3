'use client'
import { projects } from '../../../data/data';
import Card from './Card';
import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';

export default function Container() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main className="relative w-full">
      
      {/* Desktop Layout */}
      <div className="hidden md:block md:h-[270vh]">
        <div ref={container}>
          {projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.01);
            const rangeStart = i * 0.1;
            return (
              <Card
                key={`p_desktop_${i}`}
                {...project}
                i={i}
                targetScale={targetScale}
                progress={scrollYProgress}
                range={[rangeStart, Math.min(rangeStart + 0.5, 1)]}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-8 md:px-4 px-2  h-[300vh]">
          {projects.map((project, i) => (
            <Card
              key={`p_mobile_${i}`}
              {...project}
              i={i}
              targetScale={1} // no scale logic on mobile
              progress={{}}    // or pass `null` if Card handles that gracefully
              range={[0, 1]}   // default range
            />
          ))}
        </div>
      </div>

    </main>
  );
}
