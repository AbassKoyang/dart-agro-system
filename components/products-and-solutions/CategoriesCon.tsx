import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import ArrowRightTopLink from "../ArrowRightTopLink";
gsap.registerPlugin(SplitText, ScrollTrigger);

const CategoriesCon = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
            trigger: '#categories-con',
            start: 'top center',
            toggleActions: 'play pause resume reverse'
    }});
        tl.from('#category-text', {
            y: 30,
            autoAlpha: 0,
            duration: 0.4
        })
        tl.from('.category-image', {
            y: 50,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.2
        })
        tl.from('.product-quote-cta', {
            duration: 0.5, 
            y: 20,
            opacity: 0, 
          }, '<');
      }, [])

  return (
    <div id="categories-con" className="mt-6">
        <p id="category-text" className='font-dm-mono text-sm text-black font-normal'>Heavy-duty, high-performance equipment for efficient planting and harvesting.</p>
        <div id='' className="min-w-full mt-6 overflow-x-hidden">
            <div className="w-full overflow-x-auto scrollbar-hide carousel-container">
                <div className="w-fit flex gap-6">
                <div  className="category-image min-w-[85%] lg:min-w-[413px] h-[380px] group overflow-hidden">
                    <img src="/images/product-4.png" alt="Tractor images" className='size-full object-center object-cover group-hover:scale-120 transition-transform duration-500 ease-in-out' />
                </div>
                <div  className="category-image min-w-[85%] lg:min-w-[413px] h-[380px] group overflow-hidden">
                    <img src="/images/product-3.png" alt="Tractor images" className='size-full object-center object-cover group-hover:scale-120 transition-transform duration-500 ease-in-out' />
                </div>
                <div  className="category-image min-w-[85%] lg:min-w-[413px] h-[380px] group overflow-hidden">
                    <img src="/images/product-2.png" alt="Tractor images" className='size-full object-center object-cover group-hover:scale-120 transition-transform duration-500 ease-in-out' />
                </div>
                <div  className="category-image min-w-[85%] lg:min-w-[413px] h-[380px] group overflow-hidden">
                    <img src="/images/product-1.png" alt="Tractor images" className='size-full object-center object-cover group-hover:scale-120 transition-transform duration-500 ease-in-out' />
                </div>
                <div  className="category-image min-w-[85%] lg:min-w-[413px] h-[380px] group overflow-hidden">
                    <img src="/images/product-4.png" alt="Tractor images" className='size-full object-center object-cover group-hover:scale-120 transition-transform duration-500 ease-in-out' />
                </div>
                </div>
            </div>
        </div>
        <Link href='#' className="product-quote-cta flex items-center gap-2.5 py-2.5 px-4 rounded-[40px] text-[14px] lg:text-[20px] bg-black text-white border border-primary-black mt-4 lg:mt-8 font-dm-mono font-normal hover:bg-transparent hover:text-primary-black transition-colors duration-300 ease-in-out w-fit">
                <span>Request a Quote</span>
                <ArrowRightTopLink linkStyle='size-[25px] lg:size-[33px] bg-white' svgStyle='size-[20px] lg:size-[25px]' circleFill='white' pathFill='black' />
        </Link>
    </div>
  )
}

export default CategoriesCon