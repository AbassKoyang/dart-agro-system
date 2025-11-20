import React from 'react'
import ArrowRightTopLink from '../ArrowRightTopLink'
import Link from 'next/link'

const Quote = () => {
  return (
    <section className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-medium-green flex flex-col items-center justify-center relative'>
        <div className="flex flex-col items-center justify-center z-20">
            <h3 className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-center font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[700px]'>Let’s Build the Future of Farming Together.</h3>
            <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-center max-w-full lg:max-w-[550px] mt-5'>Whether you’re a farmer, distributor, or partner — we’re here to help you achieve more with technology that works smarter and lasts longer.</p>
            <Link href='' className="flex items-center gap-2.5 py-3 px-4 rounded-[40px] text-[14px] lg:text-[20px] bg-black text-white border border-primary-black mt-3 lg:mt-5 font-dm-mono font-normal hover:bg-transparent hover:text-primary-black transition-colors duration-300 ease-in-out w-fit">
                <span>Request a Quote</span>
                <ArrowRightTopLink linkStyle='size-[25px] lg:size-[33px] bg-white' svgStyle='size-[20px] lg:size-[25px]' circleFill='white' pathFill='black' />
            </Link>
        </div>
        <img src="/images/quoute-left.png" alt="" aria-hidden className='absolute top-[50%] right-0 translate-y-[-50%] h-full z-10 hidden lg:block' />
        <img src="/images/quoute-right.png" alt="" aria-hidden className='absolute top-[50%] left-0 translate-y-[-50%] h-full z-10 hidden lg:block' />
    </section>
  )
}

export default Quote