"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SplitTextAnimationWrapper({
  children,
  animateOnScroll = true,
  delay = 0.1,
}) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitTextRef = useRef([]);
  const lines = useRef([]);

  useEffect(
    () => {
      if (!containerRef.current) return;
      splitTextRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }
      // !-----------------------------
      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        splitTextRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const TextIndent = computedStyle.textIndent;

        if (TextIndent && TextIndent !== "0px") {
          if (split.lines.length > 0) {
            split.lines[0].style.paddingLeft = TextIndent;
          }
          element.style.textIndent = "0";
        }
        lines.current.push(...split.lines);
      });
      gsap.set(lines.current, { y: "100%" });

      const animationProp = {
        y: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.1,
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProp,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
            // markers:true,
          },
        });
      } else {
        gsap.to(lines.current, {
          ...animationProp,
          delay: delay,
        });
      }

      return () => {
        splitTextRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  if(React.Children.count(children)===1){
  return React.cloneElement(children, { ref: containerRef, });

  }
  return (
   <div className="" ref={containerRef} data-copy-wrapper>
      {children}
   </div>
  )
}
