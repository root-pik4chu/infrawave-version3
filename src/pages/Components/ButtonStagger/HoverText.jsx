'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HoverButton({ text = "root" }) {
  const hoverRef = useRef(null);
  const upperTextRef = useRef(null);
  const lowerTextRef = useRef(null);

  useEffect(() => {
    const hoverEl = hoverRef.current;
    const upperText = upperTextRef.current;
    const lowerText = lowerTextRef.current;

    const handleEnter = () => {
      gsap.set(upperText, { y: '0%' });
      gsap.set(lowerText, { y: '100%' });

      gsap.timeline()
        .to(upperText, { y: '-100%', duration: 0.5, ease: 'power2.out' })
        .to(lowerText, { y: '0%', duration: 0.5, ease: 'power2.out' }, '<');
    };

    const handleLeave = () => {
      gsap.set(upperText, { y: '0%' });
      gsap.set(lowerText, { y: '100%' });
    };

    hoverEl.addEventListener('mouseenter', handleEnter);
    hoverEl.addEventListener('mouseleave', handleLeave);

    return () => {
      hoverEl.removeEventListener('mouseenter', handleEnter);
      hoverEl.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <button ref={hoverRef} className="relative text-white bg-black text-4xl border font-bold overflow-hidden  border-none cursor-pointer w-[10vw]  h-[2vw] rounded">
      <span ref={upperTextRef} className="block absolute left-0 top-0 w-full translate-y-0 p-[0.5vw]"><h4>{text}</h4></span>
      <span ref={lowerTextRef} className="block absolute left-0 top-0 w-full translate-y-full p-[0.5vw]"><h4>{text}</h4></span>
 
      <style jsx>{`
        button {
          // font-family: Arial, sans-serif;
          // background-color: transparent;
        }
      `}</style>
    </button>
  );
}
