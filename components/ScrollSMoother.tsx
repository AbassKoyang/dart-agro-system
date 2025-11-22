"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollSmoother}  from 'gsap/all';
gsap.registerPlugin(ScrollSmoother);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapper = useRef(null);
  const content = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1,
        smoothTouch: 0.2,
        effects: true
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapper} id="smooth-wrapper">
      <div ref={content} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
