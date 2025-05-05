"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function useLocoScroll(start = true) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("[data-scroll-container]");

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
    });

    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });
    resizeObserver.observe(scrollEl);

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, [start]);
}
