'use client';
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/hooks/useStore";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


const Nav = () => {
    const headerRef = useRef<HTMLElement>(null);
    const isOpen = useStore((state) => state.isOpen)
    const setIsOpen = useStore((state) => state.setIsOpen)
    const [isScrolling, setIsScrolling] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0)


    const router = useTransitionRouter();
    const pathname = usePathname();

    const slideInOut = () => {
        document.documentElement.animate([
            {
                opacity: 1,
                transform: "translateY(0)"
            },
            {
                opacity: 0.2,
                transform: 'translateY(-55%)'
            }
    ], {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: "::view-transition-old(root)"
    })

    document.documentElement.animate([
        {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%"
        },
        {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%"
        }
], {
    duration: 1500,
    easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
    fill: 'forwards',
    pseudoElement: "::view-transition-new(root)"
})}

useGSAP(() => {
    if (isOpen) {
        const tl = gsap.timeline();
        tl.to('#nav-links-con', {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.in',
          });
        tl.from('.nav-link', {
            y: 50,
            x: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.inOut',
        });
    }
  }, { scope: headerRef, dependencies: [isOpen] });
  

const handleMenuClick = () => {
    if (isOpen) {
        const tl = gsap.timeline()
      tl.to('.nav-link', {
        y: 100,
        x: 150,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
      tl.to('#nav-links-con', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => setIsOpen(false)
      });
    } else {
      setIsOpen(true);
    }
  };


  useEffect(() => {
    const checkIsScrolling = () => {
        const currentY = window.scrollY;
        if(currentY > lastScrollY && currentY > 50){
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
        setLastScrollY(currentY);
        console.log(currentY,lastScrollY, isScrolling)
    };
    window.addEventListener("scroll", checkIsScrolling);
    return () => window.removeEventListener("scroll", checkIsScrolling);
  }, [lastScrollY]);


  return (
    <header ref={headerRef} className={`${isScrolling ? "-translate-y-[100px]" : "translate-y-0" } w-full fixed top-0 left-0 z-[1000] duration-300 ease-in-out transition-all`}>
        <div className="w-full fixed top-0 left-0 flex items-center justify-between z-30 py-6 px-5 bg-white/30 backdrop-blur-md">
        <Link className="flex gap-2 items-center" href={'/'}>   
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z" stroke="white" stroke-width="2"/>
            <path d="M18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12Z" stroke="white" stroke-width="2"/>
            <path d="M13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12Z" stroke="white" stroke-width="2"/>
            </svg>
            <h6 className="text-[16px] font-dm-mono text-white font-normal">DartAgro System</h6>
        </Link>

        <button onClick={handleMenuClick} className="flex justify-center gap-1 flex-col cursor-pointer">
            <div className={`${isOpen ? '-rotate-45' : 'rotate-0'} w-[20px] h-[2px] rounded-lg bg-white transition-all duration-300 ease-in-out`}></div>
            <div className={`${isOpen ? 'rotate-45' : 'rotate-0'} w-[20px] h-[2px] rounded-lg bg-white transition-all duration-300 ease-in-out`}></div>
            <div className={`${isOpen ? 'opacity-0' : 'opacity-100'} w-[20px] h-[2px] rounded-lg bg-white transition-all duration-300 ease-in-out`}></div>
        </button>
        </div>
       
       {isOpen && (
         <nav id="nav-links-con" className="opacity-0 w-full h-dvh fixed top-0 left-0 z-20 flex flex-col justify-center gap-5 items-end bg-white/30 backdrop-blur-md p-15">
         <Link
         onClick={(e) => {
            e.preventDefault();

            if(isOpen) setIsOpen(false);
            if (pathname === '/') return;
            router.push("/", {
                onTransitionReady: slideInOut,
            })
        }} 
          href='' className={`nav-link opacity-100 text-5xl lg:text-[80px] text-right font-medium ${pathname === '/' ? 'text-primary-green' : 'text-white'} hover:text-primary-green transition-colors duration-300 ease-in-out font-dm-mono lg:leading-[70px]`}>Home</Link>
         <Link
         onClick={(e) => {
            e.preventDefault();

            if(isOpen) setIsOpen(false);
            if (pathname === '/products') return;
            router.push("/products", {
                onTransitionReady: slideInOut,
            })
        }} 
          href='' className={`nav-link opacity-100 text-5xl lg:text-[80px] text-right font-medium ${pathname === '/products' ? 'text-primary-green' : 'text-white'} hover:text-primary-green transition-colors duration-300 ease-in-out font-dm-mono lg:leading-[70px]`}>Products & Solutions</Link>
         <Link
         onClick={(e) => {
            e.preventDefault();

            if(isOpen) setIsOpen(false);
            if (pathname === '/about') return;
            router.push("/about", {
                onTransitionReady: slideInOut,
            })
        }} 
          href='' className={`nav-link opacity-100 text-5xl lg:text-[80px] text-right font-medium ${pathname === '/about' ? 'text-primary-green' : 'text-white'} hover:text-primary-green transition-colors duration-300 ease-in-out font-dm-mono lg:leading-[70px]`}>About Us</Link>
         <Link
         onClick={(e) => {
            e.preventDefault();

            if(isOpen) setIsOpen(false);
            if (pathname === '/contact') return;
            router.push("/contact", {
                onTransitionReady: slideInOut,
            })
        }} 
         href='' className={`nav-link opacity-100 text-5xl lg:text-[80px] text-right font-medium ${pathname === '/contact' ? 'text-primary-green' : 'text-white'} hover:text-primary-green transition-colors duration-300 ease-in-out font-dm-mono lg:leading-[70px]`}>Contact Us</Link>
         </nav>
       )}


        {/* <div className="">
            <div className="">
                <a onClick={(e) => {
                    e.preventDefault();
                    if (pathname === '/') return;
                    router.push("/", {
                        onTransitionReady: slideInOut,
                    })
                }} className="uppercase text-blue-500 text-xs font-semibold p-1" href="/">Index</a>
            </div>
        </div>
        <div className="flex gap-3">
            <div className="">
                <a onClick={(e) => {
                    e.preventDefault();
                    if (pathname === '/page-2') return;
                    router.push("/page-2", {
                        onTransitionReady: slideInOut,
                    })
                }} className="uppercase text-blue-500 text-xs font-semibold p-1" href="/page-2">Page 2</a>
            </div>
            <div className="">
                <a onClick={(e) => {
                    e.preventDefault();
                    if (pathname === '/page-3') return;
                    router.push("/page-3", {
                        onTransitionReady: slideInOut,
                    })
                }} className="uppercase text-blue-500 text-xs font-semibold p-1" href="/page-3">Page 3</a>
            </div>
        </div> */}
    </header>
  )
}

export default Nav