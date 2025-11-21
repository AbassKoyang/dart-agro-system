'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const Footer = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#quote-section',
                start: 'top 25%',
                toggleActions: 'play pause resume reverse'
        }})
          tl.from('#footer-text', {
            duration: 1.3, 
            y: 200,
            opacity: 0, 
          });
          tl.from('#footer-logo', {
            duration: 1.3, 
            y: 200,
            opacity: 0, 
          }, '<');
         
      }, [])

  return (
    <footer className='w-full pt-24 bg-white'>
        <div className="w-full pt-8 pb-20 bg-primary-black flex flex-col lg:flex-row items-center justify-center gap-[100px] px-4 lg:px-[20px]">
            <form onSubmit={(e) => {e.preventDefault(); alert("Email submitted successfully! ✅")}} className='px-6 py-10 bg-[#1B1B1B] w-full lg:w-fit'>
                <input required type="email" placeholder='Enter email' className="w-full lg:w-[480px] h-[70px] rounded-[45px] bg-[#E5E5E5] px-6 text-[24px] text-primary-black/70 outline-0 border-0 stroke-0" />
                <button type='submit' className='w-full lg:w-[480px] h-[64px] rounded-[45px] bg-primary-green text-[24px] text-primary-black flex items-center justify-center mt-4'>Submit</button>
            </form>
            <div className="w-full lg:w-fit flex flex-wrap items-start gap-10 justify-center">
                <div className="">
                    <h6 className="font-dm-mono font-bold text-white text-[24px] mb-5">Company</h6>
                    <div className=" flex flex-col gap-2">
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Products</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Technology</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">News</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Careers</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Contacts</Link>
                    </div>
                </div>
                <div className="">
                    <h6 className="font-dm-mono font-bold text-white text-[24px] mb-5">Socials</h6>
                    <div className=" flex flex-col gap-2">
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">LinkedIn</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Instagram</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Twitter/X</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Reddit</Link>
                        <Link href='#' className="font-dm-mono font-normal text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-[20px]">Discord</Link>
                    </div>
                </div>
                <div className="">
                    <h6 className="font-dm-mono font-bold text-white text-[24px] mb-5">Address</h6>
                    <p className="font-dm-mono font-normal text-white/80 text-[20px] max-w-[250px]">1425 Greenfield Industrial Drive, Springfield, Illinois 62704, United States</p>
                    <p className="font-dm-mono font-normal text-white/80 text-[20px] max-w-[200px] mt-3">+1 (217) 555-0148</p>
                </div>
            </div>
        </div>
        <div id="quote-section"  className="px-4 lg:px-[20px] bg-primary-green w-full h-[70px] lg:h-[137px] flex items-center justify-center gap-5 lg:justify-between overflow-hidden">
            <svg id="footer-logo" className="size-[55px] lg:size-[150px] translate-y-[35px] lg:translate-y-[45%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z" stroke="black" stroke-width="2"/>
                <path d="M18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12Z" stroke="black" stroke-width="2"/>
                <path d="M13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12Z" stroke="black" stroke-width="2"/>
            </svg>
            <h1 id="footer-text" className="text-2xl lg:text-[140px] text-black font-dm-mono font-medium lg:leading-[70px] translate-y-[32px] lg:translate-y-[87%]">DartAgro System</h1>
        </div>
    </footer>
  )
}

export default Footer