"use client";
import React from "react";
import Link from "next/link";
import ScrollingText from "./ScrollingText";
import CountUp from "../count/CountUp";

export default function AboutSection() {
  return (
    <div className="w-full h-[80vh] relative bg-zinc-50">
      <div className="w-full h-[90%] ">
        <div className="w-full h-full">
          <h1 className="px-[1vw]">About us</h1>
          <div className="w-full h-screen flex justify-end pt-[5vw]">
          <div className="flex items-center justify-center gap-[5vw] w-[70%] h-[40%] ">
            {[1, 2, 3].map(() => {
              return (
                <div className="flex items-start justify-between flex-col gap-[2vw]">
                  <h2>project delivered</h2>
                  <h1>
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </h1>
                  <p>creative work that drives real results</p>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[28vh] relative overflow-hidden flex items-end ">
        
      </div>
    </div>
  );
}
