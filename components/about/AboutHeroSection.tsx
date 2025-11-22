'use client';
import Welcome from "@/components/Welcome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
gsap.registerPlugin(SplitText);

export default function AboutHeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline();
    let split = SplitText.create(".about-hero-headline", { type: "words" });
    tl.from(split.words, {
      duration: 1, 
      y: 100,
      autoAlpha: 0, 
      stagger: 0.05
    });
    tl.from('.about-hero-cta', {
      duration: 1, 
      y: 20,
      opacity: 0, 
    });
  tl.from('.about-hero-text', {
      duration: 1, 
      y: 20,
      opacity: 0, 
    }, '<');
  })

  return (
    <section id="hero-section" className="relative w-full h-dvh flex items-end opacity-100 px-4">
      <img data-lag="0.2"  src='/images/about-hero-farm-img.png' alt="Tractor" className="w-full h-full absolute top-0 left-0 z-10 object-center object-cover"  />
      <div className="w-full z-20 mb-10 flex flex-col items-start lg:flex-row lg:items-end lg:justify-between">
        <div className="">
          <h1 className="about-hero-headline text-white text-5xl lg:text-[80px] text-left font-medium font-dm-mono lg:leading-[90px] will-change-transform lg:max-w-[950px]">Driven by Innovation. Grounded in Agriculture.</h1>
          <p className="about-hero-text text-[14px] lg:text-[18px] text-white font-normal font-dm-mono max-w-[900px] mt-5 opacity-100">At DartAgro System, we merge engineering excellence with agricultural expertise to power a smarter, more sustainable future for global farming.</p>
        </div>
        <div className="flex items-start about-hero-cta translate-y-0 opacity-100 mt-5 lg:mt-0">
          <Link href={''} className="size-[30px] lg:size-[45px] bg-[#121212] flex items-center justify-center rounded-full">
          <svg className="size-[25px] lg:size-[50px]" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 50C11.1765 50 0 38.8235 0 25C0 11.1765 11.1765 0 25 0C38.8235 0 50 11.1765 50 25C50 38.8235 38.8235 50 25 50ZM25 2.94118C12.7941 2.94118 2.94118 12.7941 2.94118 25C2.94118 37.2059 12.7941 47.0588 25 47.0588C37.2059 47.0588 47.0588 37.2059 47.0588 25C47.0588 12.7941 37.2059 2.94118 25 2.94118Z" fill="#121212"/>
          <circle cx="25.0003" cy="24.6648" r="22.6846" fill="#121212"/>
          <path d="M14.0999 16.3957L34.2732 16.3958L34.2732 36.5691L31.3616 36.5691L31.3616 19.3074L14.0999 19.3074L14.0999 16.3957Z" fill="white"/>
          <path d="M33.8574 18.8906L16.1798 36.5682L14.1 34.4885L31.7777 16.8108L33.8574 18.8906Z" fill="white"/>
          </svg>
          </Link>
          <Link href={''} className="bg-primary-green text-primary-black font-normal font-dm-mono px-6 py-2 lg:px-8 lg:py-3 rounded-4xl text-[16px] lg:text-[24px]">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
