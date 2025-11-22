'use client';
import ArrowRightTopLink from '../ArrowRightTopLink'
import Link from 'next/link'
import Label from '../Label'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText);

const WhoWeAre = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#who-we-are-section',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }});
        let split = SplitText.create("#who-we-are-headline", { type: "words" });
        tl.from(split.words, {
          duration: 0.5, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
        tl.from('#who-we-are-cta', {
          duration: 0.5, 
          y: 20,
          opacity: 0, 
        });
      tl.from('#who-we-are-text', {
          duration: 0.5, 
          y: 20,
          opacity: 0, 
        },);
      }, [])

  return (
    <section id='who-we-are-section' className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0'>
        <div className="w-full lg:w-[50%]">
            <Label text='Who We Are'/>
            <h3 id='who-we-are-headline' className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Built for Farmers. Driven by Innovation.</h3>
            <Link id='who-we-are-cta' href='' className="flex items-center gap-2.5 py-3 px-4 rounded-[40px] text-[14px] lg:text-[20px] text-primary-black border border-primary-black mt-8 lg:mt-18 font-dm-mono font-normal hover:bg-primary-green hover:text-primary-black hover:border-primary-green transition-colors duration-300 ease-in-out w-fit">
                <span>Learn About Our Story</span>
                <ArrowRightTopLink linkStyle='size-[25px] lg:size-[33px]' svgStyle='size-[20px] lg:size-[25px]' circleFill='#121212' pathFill='white' />
            </Link>
        </div>
        <div className="w-full lg:w-[50%] flex items-center justify-center">
            <p id='who-we-are-text' className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>At DartAgro Systems, we combine decades of engineering expertise with next-generation technology to create machinery that transforms how the world farms. From autonomous tractors to AI-powered irrigation and smart harvesters, we design tools that work harder, think smarter, and last longer</p>
        </div>
    </section>
  )
}

export default WhoWeAre