'use client';
import React from 'react';
import Link from 'next/link';
import ScrollingText from './ScrollingText';

export default function AboutSection() {
  return (
    <div className="w-full h-[150vh] relative">
      <div className="px-[1vw]">
        <h1>not enough? you can dig deeper</h1>
        <h2 className="underline w-full text-end">
          <Link href="/portfolio">see more work</Link>
        </h2>
      </div>

      <div className="w-full h-[28vh] relative overflow-hidden flex items-end ">
        <ScrollingText />
      </div>

      <h1>root pikachu</h1>
      <h1>root pikachu</h1>
    </div>
  );
}
