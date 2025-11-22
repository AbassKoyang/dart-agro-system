'use client';
import Link from "next/link"
import ArrowRightTopLink from "../ArrowRightTopLink"
import Label from "../Label"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import CategoriesCon from "./CategoriesCon";
gsap.registerPlugin(SplitText, ScrollTrigger);

const ProductsAndCategories = () => {
    const [category, setCategory] = useState<'tractors-and-harvesters' | 'smart-irrigation-systems' | 'drones-and-sensor-technology' | 'implements-and-attachments'>('tractors-and-harvesters');

    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#products-and-categories-section',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }})
        let split = SplitText.create("#products-and-categories-headline", { type: "words" });
        tl.from(split.words, {
          duration: 0.5, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
        tl.from('#categories-section', {
          duration: 1, 
          y: 50,
          opacity: 0, 
        });
      }, [])

  return (
    <section id="products-and-categories-section" className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <div className="w-full">
            <Label text='Technology & Innovation'/>
            <h3 id="products-and-categories-headline" className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-full'>Product Categories</h3>
        </div>
        <div id="categories-section" className="w-full bg-medium-green mt-10 lg:mt-14 py-6 px-4">
            <div id='' className="min-w-full">
                <div className="w-full overflow-x-auto flex items-start gap-10 carousel-container scrollbar-hide">
                     <button onClick={() => setCategory('tractors-and-harvesters')} className={`${category === 'tractors-and-harvesters' ? 'text-black border-black' : 'text-[#00000099] border-transparent'} text-lg lg:text-3xl font-dm-mono font-semibold min-w-fit border-b transition-all duration-300 ease-in-out tracking-tighter hover:border-black hover:text-black cursor-pointer`}>Tractors & Harvesters</button>
                    <button onClick={() => setCategory('smart-irrigation-systems')} className={`${category === 'smart-irrigation-systems' ? 'text-black border-black' : 'text-[#00000099] border-transparent'} text-lg lg:text-3xl font-dm-mono font-semibold min-w-fit border-b transition-all duration-300 ease-in-out tracking-tighter hover:border-black hover:text-black cursor-pointer`}>Smart Irrigation Systems</button>
                    <button onClick={() => setCategory('drones-and-sensor-technology')} className={`${category === 'drones-and-sensor-technology' ? 'text-black border-black' : 'text-[#00000099] border-transparent'} text-lg lg:text-3xl font-dm-mono font-semibold min-w-fit border-b transition-all duration-300 ease-in-out tracking-tighter hover:border-black hover:text-black cursor-pointer`}>Drones & Sensor Technology</button>
                    <button onClick={() => setCategory('implements-and-attachments')} className={`${category === 'implements-and-attachments' ? 'text-black border-black' : 'text-[#00000099] border-transparent'} text-lg lg:text-3xl font-dm-mono font-semibold min-w-fit border-b transition-all duration-300 ease-in-out tracking-tighter hover:border-black hover:text-black cursor-pointer`}>Implements & Attachments</button>
                </div>
            </div>
            <div className="w-full">
                {category === 'tractors-and-harvesters' && (
                    <CategoriesCon />
                )}
                {category === 'smart-irrigation-systems' && (
                    <CategoriesCon />
                )}
                {category === 'drones-and-sensor-technology' && (
                    <CategoriesCon />
                )}
                {category === 'implements-and-attachments' && (
                    <CategoriesCon />
                )}
            </div>
        </div>
    </section>
  )
}

export default ProductsAndCategories