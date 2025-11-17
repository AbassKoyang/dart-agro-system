'use client';
import { useEffect, useRef } from "react"
import gsap from "gsap";
const Overlay = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const logoOverlayRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<any>(null);
    const blocksRef = useRef<HTMLDivElement[]>(null);

    useEffect(() => {

        const createBlocks = () => {
            if(!overlayRef.current) return;
            overlayRef.current.innerHTML = '';
            blocksRef.current = [];

            for (let i = 0; i < 20; i++) {
                const block = document.createElement('div');
                block.className = 'block';
                overlayRef.current.appendChild(block);
                blocksRef.current.push(block);
            }
        };
        createBlocks();
        gsap.set(blocksRef.current, {scaleX: 0, transformOrigin: 'left'});
        if(logoRef.current){
            const path = logoRef.current.querySelector('path');
            if (path) {
                const length = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length
                })
            }
        }
    coverPage()
    }, []);

    const coverPage = ()=> {
        const tl = gsap.timeline()
        tl.to(blocksRef.current, {
            scaleX: 1,
            duration: 0.7,
            stagger: 0.02,
            ease: 'power2.out',
            transformOrigin: 'left',
            delay: 2
        })
        tl.to('#welcome', {
            backgroundColor: '#222'
        }, '<0.5')
        .to(logoOverlayRef.current, {
            opacity: 1,
            duration: 0.25,
            ease: 'power2.out',
        });
        tl.to('#welcome', {
            display: 'none'
        })
        tl.to(blocksRef.current, {opacity: 0, transformOrigin: 'right'}, '-=0.1');
        if(logoRef.current){
            tl.set(logoRef.current.querySelector('path'), {
                strokeDashoffset: logoRef.current.querySelector('path')?.getTotalLength(),
                fill: 'transparent'
            });

            tl.to(logoRef.current.querySelector('path'), {
                strokeDashoffset: 0,
                duration: 2,
                ease: 'power2.inOut'
            })
        }
        tl.to(blocksRef.current, {opacity: 1, 
            duration: 0.25,
            ease: 'power2.out',
        });
    tl.to(logoOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.out',
    })
    tl.set(blocksRef.current, {transformOrigin: 'right'});
    tl.to(blocksRef.current, {
        scaleX: 0,
        duration: 0.7,
        stagger: 0.02,
        ease: 'power2.out',
        transformOrigin: 'right',
    })
    }

    
  return (
    <>
    <div ref={overlayRef} className="transition-overlay"></div>
    <div ref={logoOverlayRef} className="logo-overlay">
        <div className="logo-container">
            <svg ref={logoRef} width="100" height="100" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11C21 16.523 16.523 21 11 21C5.477 21 1 16.523 1 11C1 5.477 5.477 1 11 1C16.523 1 21 5.477 21 11Z" stroke="white" strokeWidth="2"/>
            <path d="M17 11C17 12.5913 16.3679 14.1174 15.2426 15.2426C14.1174 16.3679 12.5913 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11C5 9.4087 5.63214 7.88258 6.75736 6.75736C7.88258 5.63214 9.4087 5 11 5C12.5913 5 14.1174 5.63214 15.2426 6.75736C16.3679 7.88258 17 9.4087 17 11Z" stroke="white" strokeWidth="2"/>
            <path d="M12 11C12 11.2652 11.8946 11.5196 11.7071 11.7071C11.5196 11.8946 11.2652 12 11 12C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10C11.2652 10 11.5196 10.1054 11.7071 10.2929C11.8946 10.4804 12 10.7348 12 11Z" stroke="white" strokeWidth="2"/>
            </svg>
        </div>
    </div>
    </>
  )
}

export default Overlay