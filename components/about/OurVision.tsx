'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

const OurVision = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#our-vision-section',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }});
        let split = SplitText.create(".our-vision-headline", { type: "words" });
        tl.from(split.words, {
          duration: 0.5, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
      tl.from('.our-vision-text', {
          duration: 1, 
          y: 20,
          opacity: 0, 
        });
        const tl2 = gsap.timeline({scrollTrigger:{
            trigger: '#our-vision-images-section',
            start: 'top center',
            toggleActions: 'play pause resume reverse'
        }});
        tl2.from('#our-vision-image-1', {
            duration: 1.5, 
            y: '-100%',
            opacity: 0, 
          });
        tl2.from('#our-vision-image-2', {
            duration: 1.5, 
            y: '100%',
            opacity: 0, 
          }, '<');
        tl2.from('#our-vision-image-3', {
            duration: 1.5, 
            y: '-100%',
            opacity: 0, 
          }, '<');
        tl2.from('#our-vision-image-4', {
            duration: 1.5, 
            y: '100%',
            opacity: 0, 
          }, '<');
        tl2.from('#our-vision-image-5', {
            duration: 1.5, 
            y: '-100%',
            opacity: 0, 
          }, '<');
        tl2.from('#our-vision-image-6', {
            duration: 1.5, 
            y: '100%',
            opacity: 0, 
          }, '<');
      }, [])
  return (
    <section id='our-vision-section' className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <div className="w-full flex flex-col lg:flex-row items-start lg:justify-between gap-10 lg:gap-0">
          <div className="w-full lg:w-[50%]">
              <h3 className='our-vision-headline text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Our Mission</h3>
              <p className='our-vision-text mt-6 lg:mt-10 font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>To design and deliver high-performance, intelligent agricultural solutions that increase productivity, conserve resources, and ensure sustainable food production for future generations.</p>
          </div>
          <div className="w-full lg:w-[50%]">
                <h3 className='our-vision-headline text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Our Vision</h3>
              <p className='our-vision-text mt-6 lg:mt-10 font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>A world where technology and agriculture work in harmony — feeding more people, using fewer resources, with zero compromise on quality or sustainability.</p>
          </div>
        </div>
        <div id="our-vision-images-section" className="w-full flex items-start gap-3 h-[211px] mt-20 overflow-hidden">
            <div id="our-vision-image-1" className="flex-1 h-full">
                <img data-lag="0.2"  src="/images/our-vision-6.png" alt="Farm images" className="size-full object-center object-cover" />
            </div>
            <div id="our-vision-image-2" className="flex-1 h-full">
                <img data-lag="0.2"  src="/images/our-vision-2.png" alt="Farm images" className="size-full object-center object-cover" />
            </div>
            <div id="our-vision-image-3" className="flex-1 h-full">
                <img data-lag="0.2"  src="/images/our-vision-3.png" alt="Farm images" className="size-full object-center object-cover" />
            </div>
            <div id="our-vision-image-4" className="flex-1 h-full">
                <img data-lag="0.2"  src="/images/our-vision-4.png" alt="Farm images" className="size-full object-center object-cover" />
            </div>
            <div id="our-vision-image-5" className="flex-1 h-full">
                <img data-lag="0.2"  src="/images/our-vision-5.png" alt="Farm images" className="size-full object-center object-cover" />
            </div>
            <div id="our-vision-image-6" className="flex-1 h-full">
                <img data-lag="0.2"  src="/images/our-vision-1.png" alt="Farm images" className="size-full object-center object-cover" />
            </div>
        </div>
    </section>
  )
}

export default OurVision