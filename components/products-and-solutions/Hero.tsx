'use client';
import Welcome from "@/components/Welcome";
import { useStore } from "@/hooks/useStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import ArrowRightTopLink from "../ArrowRightTopLink";
gsap.registerPlugin(SplitText);

export default function ProductsHeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline();
    let split = SplitText.create(".products-hero-headline", { type: "words" });
    tl.from(split.words, {
      duration: 1, 
      y: 100,
      autoAlpha: 0, 
      stagger: 0.05
    });
    tl.from('.products-hero-cta', {
      duration: 1, 
      y: 20,
      opacity: 0, 
    });
  tl.from('.products-hero-text', {
      duration: 1, 
      y: 20,
      opacity: 0, 
    }, '<');
  })

  return (
    <section id="products-hero-section" className="relative w-full h-dvh flex items-end opacity-100 px-4 lg:px-[20px]">
      <img src='/images/products-hero.png' alt="Tractor" className="w-full h-full absolute top-0 left-0 z-10 object-center object-cover"  />
      <div className="w-full z-20 mb-10 flex flex-col items-start lg:flex-row lg:items-end lg:justify-between">
        <div className="">
          <h1 className="products-hero-headline text-white text-5xl lg:text-[80px] text-left font-medium font-dm-mono lg:leading-[90px] will-change-transform lg:max-w-[950px]">Precision machinery for the future of farming.</h1>
          <p className="products-hero-text text-[14px] lg:text-[18px] text-white font-normal font-dm-mono max-w-[900px] mt-5 opacity-100">DartAgro System designs and manufactures advanced agricultural machines and intelligent systems built for performance, precision, and sustainability. Explore our full range of solutions engineered for every kind of farm and every scale of operation.</p>
        </div>
        <div className="flex items-start products-hero-cta translate-y-0 opacity-100 mt-5 lg:mt-0">
          <ArrowRightTopLink linkStyle="size-[30px] lg:size-[45px]" svgStyle="size-[25px] lg:size-[50px]" circleFill="#121212" pathFill="white" />
          <Link href={''} className="bg-primary-green text-primary-black font-normal font-dm-mono px-6 py-2 lg:px-8 lg:py-3 rounded-4xl text-[16px] lg:text-[24px]">Get Quote</Link>
        </div>
      </div>
    </section>
  );
}
