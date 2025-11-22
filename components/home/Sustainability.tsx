'use client';
import Label from '../Label'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText);

const Sustainability = () => {
    useGSAP(() => {
        const tl = gsap.timeline({scrollTrigger:{
                trigger: '#sustainability-section',
                start: 'top center',
                toggleActions: 'play pause resume reverse'
        }})
        let split = SplitText.create("#sustainability-headline", { type: "words" });
        tl.from(split.words, {
          duration: 0.5, 
          y: 100,
          autoAlpha: 0, 
          stagger: 0.1
        });
        tl.from('#sustainability-text', {
            duration: 0.5, 
            y: 20,
            opacity: 0, 
          });
          const tl2 = gsap.timeline({scrollTrigger: {
            trigger: '#sustainability-section-list',
            start: 'top center',
            toggleActions: 'play pause resume reverse'
          }})
          tl2.from('.sustainability-list-item', {
            duration: 1, 
            y: 30,
            opacity: 0, 
            stagger: 0.3
          });
      }, [])

  return (
    <section id='sustainability-section' className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-white'>
        <Label text='Sustainability Commitment'/>
       <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 mt-6">
            <div className="w-full lg:w-[50%]">
                <h3 id='sustainability-headline' className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[585px]'>Powering a Greener Future for Global Agriculture.</h3>
            </div>
            <div className="w-full lg:w-[50%] flex items-center justify-end">
                <p id='sustainability-text' className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>Sustainability is at the heart of everything we build. 
                Our R&D teams are constantly innovating to minimize fuel use, reduce emissions, and design eco-efficient machinery. Because the future of farming must be as sustainable as it is productive.</p>
            </div>
       </div>
       <div id='sustainability-section-list' className="mt-18 w-full flex flex-col gap-12 lg:flex-row lg:gap-6">
        <div className="sustainability-list-item w-full lg:flex-1 flex flex-col justify-between border-1 border-[#EDEDED] rounded-[6px] overflow-hidden">
            <div className="w-full p-6">
                <div className="flex w-full gap-5 items-center lg:items-start">
                    <div className="size-[50px] bg-primary-green rounded-full flex items-center justify-center">
                        <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.93273 7.34785C8.88535 5.88443 11.6179 5.23589 14.268 5.7838C16.0068 6.14441 18.0279 6.8908 19.6311 8.56807C21.258 10.2691 22.3007 12.7668 22.3622 16.3227C22.4154 19.3641 20.9771 22.6404 19.0468 24.8935C18.074 26.0299 16.9041 26.9943 15.6224 27.5212C14.3127 28.0622 12.8339 28.1628 11.439 27.4402C10.1908 26.7944 9.36897 25.953 8.96502 24.9047C8.57645 23.8997 8.65333 22.9032 8.77633 22.1204L8.83224 21.7976L8.99018 21.0009C9.06007 20.6514 9.11458 20.3593 9.14253 20.0895C9.19844 19.5542 9.13135 19.2747 9.00276 19.0748C8.69247 18.594 8.29831 18.306 7.71685 17.9286L6.9495 17.4325L6.5777 17.1781C5.69714 16.5477 4.76345 15.6504 4.37768 14.0486C3.69978 11.2461 4.95075 8.83503 6.93273 7.34785ZM13.7019 8.52194C11.822 8.13338 9.90989 8.61 8.6086 9.58422C7.33947 10.5361 6.72866 11.8779 7.09486 13.393C7.26818 14.1101 7.63578 14.507 8.26756 14.9487L8.65333 15.2045L9.31166 15.6238C9.98536 16.0669 10.7793 16.6721 11.3523 17.561C11.9743 18.5255 12.0093 19.5486 11.9226 20.3789C11.8937 20.6483 11.8536 20.9164 11.8024 21.1826L11.5816 22.3007L11.5382 22.5551C11.439 23.1869 11.4544 23.5894 11.5718 23.8983C11.6738 24.1611 11.9254 24.5441 12.7235 24.9578C13.2323 25.2206 13.8277 25.2388 14.5545 24.9382C15.3093 24.6266 16.1396 23.9906 16.9237 23.0765C18.5073 21.2273 19.6073 18.5926 19.5668 16.3716C19.5151 13.3609 18.6527 11.59 17.61 10.4997C16.5463 9.38574 15.136 8.81826 13.7019 8.52194ZM2.79545 2.09659C3.53686 2.09659 4.24789 2.39111 4.77214 2.91536C5.29639 3.43961 5.59091 4.15064 5.59091 4.89205C5.59091 5.63345 5.29639 6.34448 4.77214 6.86873C4.24789 7.39298 3.53686 7.6875 2.79545 7.6875C2.05405 7.6875 1.34302 7.39298 0.81877 6.86873C0.29452 6.34448 0 5.63345 0 4.89205C0 4.15064 0.29452 3.43961 0.81877 2.91536C1.34302 2.39111 2.05405 2.09659 2.79545 2.09659ZM21.6648 3.49432C22.0355 3.49432 22.391 3.64158 22.6531 3.9037C22.9152 4.16583 23.0625 4.52135 23.0625 4.89205C23.0625 5.26275 22.9152 5.61826 22.6531 5.88039C22.391 6.14251 22.0355 6.28977 21.6648 6.28977C21.2941 6.28977 20.9386 6.14251 20.6764 5.88039C20.4143 5.61826 20.267 5.26275 20.267 4.89205C20.267 4.52135 20.4143 4.16583 20.6764 3.9037C20.9386 3.64158 21.2941 3.49432 21.6648 3.49432ZM9.08523 0C9.36056 -4.10271e-09 9.63319 0.0542301 9.88756 0.159594C10.1419 0.264957 10.3731 0.419391 10.5677 0.614077C10.7624 0.808764 10.9169 1.03989 11.0222 1.29426C11.1276 1.54863 11.1818 1.82126 11.1818 2.09659C11.1818 2.37192 11.1276 2.64455 11.0222 2.89892C10.9169 3.15329 10.7624 3.38442 10.5677 3.5791C10.3731 3.77379 10.1419 3.92822 9.88756 4.03359C9.63319 4.13895 9.36056 4.19318 9.08523 4.19318C8.52918 4.19318 7.9959 3.97229 7.60271 3.5791C7.20953 3.18592 6.98864 2.65264 6.98864 2.09659C6.98864 1.54054 7.20953 1.00726 7.60271 0.614077C7.9959 0.22089 8.52918 8.2858e-09 9.08523 0ZM16.0739 0C16.3492 -4.10271e-09 16.6218 0.0542301 16.8762 0.159594C17.1306 0.264957 17.3617 0.419391 17.5564 0.614077C17.7511 0.808764 17.9055 1.03989 18.0109 1.29426C18.1162 1.54863 18.1705 1.82126 18.1705 2.09659C18.1705 2.37192 18.1162 2.64455 18.0109 2.89892C17.9055 3.15329 17.7511 3.38442 17.5564 3.5791C17.3617 3.77379 17.1306 3.92822 16.8762 4.03359C16.6218 4.13895 16.3492 4.19318 16.0739 4.19318C15.5178 4.19318 14.9845 3.97229 14.5913 3.5791C14.1982 3.18592 13.9773 2.65264 13.9773 2.09659C13.9773 1.54054 14.1982 1.00726 14.5913 0.614077C14.9845 0.22089 15.5178 8.2858e-09 16.0739 0Z" fill="black"/>
                        </svg>
                    </div>
                    <h6 className='text-primary-black text-xl lg:text-3xl text-left font-medium font-dm-mono w-fit max-w-[70%]'>Reduced Carbon Footprint</h6>
                </div>
                <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full mt-6'>Our machines are engineered for efficiency — from advanced hybrid engines to precision farming systems that cut fuel waste. Every design decision aims to lower emissions, minimize resource use, and help farmers achieve more with less impact on the planet.</p>
            </div>
            <div className="w-full h-[300px] mt-5 flex items-end overflow-hidden">
                <img src="/images/sustainability-1.png" alt="Tractor image" className="w-full object-center" />
            </div>
        </div>
        <div className="sustainability-list-item w-full lg:flex-1 flex flex-col justify-between border-1 border-[#EDEDED] rounded-[6px] overflow-hidden">
            <div className="w-full p-6">
                <div className="flex w-full gap-5 items-center lg:items-start">
                    <div className="size-[50px] bg-primary-green rounded-full flex items-center justify-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_58_220)">
                        <path d="M11.6631 16.309L11.4539 21.4429L11.426 21.7498L5.56658 21.3453C5.23176 21.3174 4.92019 21.1709 4.63187 20.9058C4.34355 20.6407 4.12499 20.3362 3.97618 19.992C3.87387 19.7409 3.80644 19.4851 3.77389 19.2247C3.74134 18.9643 3.75994 18.662 3.82969 18.3179C3.89945 17.9738 3.95525 17.718 3.9971 17.5506C4.03896 17.3832 4.13894 17.0856 4.29705 16.6578C4.45516 16.2299 4.54351 15.9835 4.56212 15.9184C5.28756 16.03 7.65456 16.1602 11.6631 16.309ZM6.26412 8.13377L8.77529 13.4212L6.7245 12.1377C6.13857 12.8073 5.62006 13.4793 5.16898 14.1536C4.7179 14.8279 4.38075 15.4092 4.15754 15.8974C3.93433 16.3857 3.75064 16.8252 3.60648 17.2158C3.46232 17.6064 3.37629 17.8994 3.34839 18.0947L3.29258 18.3877L0.641915 13.4072C0.483805 13.1654 0.4001 12.905 0.390799 12.626C0.381499 12.3469 0.409401 12.1284 0.474505 11.9703L0.586112 11.7192C0.911633 11.1332 1.44177 10.259 2.17651 9.09639L0.223389 7.89661L6.26412 8.13377ZM23.4377 15.3464L20.8149 20.3548C20.7033 20.6245 20.5336 20.8407 20.3057 21.0035C20.0778 21.1662 19.8755 21.2616 19.6988 21.2895L19.4477 21.3453C18.7874 21.4104 17.769 21.4662 16.3925 21.5127L16.5041 23.8006L13.2954 18.6806L16.239 13.6304L16.3367 16.0439C17.9178 16.1927 19.2338 16.216 20.2848 16.1137C21.3357 16.0114 22.1263 15.8579 22.6564 15.6533L23.4377 15.3464ZM12.4862 2.45576C12.0491 3.0417 10.8168 5.06458 8.78924 8.5244L4.3668 5.91558L4.10174 5.74817L7.24069 0.781653C7.4267 0.493335 7.70572 0.284071 8.07774 0.153863C8.44976 0.0236545 8.82179 -0.0228485 9.19381 0.0143539C9.41703 0.0329551 9.64257 0.0887587 9.87043 0.181765C10.0983 0.274771 10.2936 0.372427 10.4564 0.474733C10.6191 0.57704 10.8121 0.7305 11.0353 0.935113C11.2585 1.13973 11.426 1.30016 11.5376 1.41642C11.6492 1.53268 11.8166 1.71636 12.0398 1.96748C12.263 2.2186 12.4118 2.38136 12.4862 2.45576ZM21.6241 6.73868L24.5816 11.8029C24.7491 12.147 24.8072 12.5004 24.756 12.8631C24.7049 13.2259 24.577 13.57 24.3724 13.8955C24.2515 14.0815 24.098 14.2536 23.912 14.4117C23.726 14.5698 23.5493 14.7 23.3819 14.8023C23.2145 14.9046 22.9889 15.0069 22.7053 15.1092C22.4216 15.2115 22.203 15.2859 22.0496 15.3324C21.8961 15.3789 21.6566 15.444 21.3311 15.5277C21.0056 15.6115 20.7917 15.6673 20.6893 15.6952C20.3731 15.0255 19.1408 12.998 16.9924 9.61257L21.359 6.89214L21.6241 6.73868ZM19.6291 3.58578L21.6101 2.42786L18.5409 7.63154L12.6955 7.35252L14.8021 6.15275C14.4859 5.32499 14.1371 4.55304 13.7558 3.8369C13.3744 3.12075 13.0233 2.54644 12.7025 2.11396C12.3816 1.68149 12.0816 1.30946 11.8026 0.997892C11.5236 0.686322 11.305 0.470083 11.1469 0.349175L10.9098 0.167814L16.5599 0.181765C16.8482 0.153863 17.1179 0.202691 17.369 0.328249C17.6202 0.453807 17.8015 0.586341 17.9131 0.725849L18.0666 0.935113C18.4293 1.50245 18.9501 2.38601 19.6291 3.58578Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_58_220">
                        <rect width="25" height="24.1071" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    </div>
                    <h6 className='text-primary-black text-xl lg:text-3xl text-left font-medium font-dm-mono w-fit max-w-[70%]'>Recyclable Materials</h6>
                </div>
                <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full mt-6'>We prioritize circular design by using recyclable metals, composites, and eco-friendly components across our equipment line. This ensures durability during use and responsible recovery at the end of each machine’s lifecycle.</p>
            </div>
            <div className="w-full h-[300px] mt-5">
                <img src="/images/sustainability-2.png" alt="Tractor image" className="w-full h-full object-cover object-center" />
            </div>
        </div>
        <div className="sustainability-list-item w-full lg:flex-1 flex flex-col justify-between border-1 border-[#EDEDED] rounded-[6px] overflow-hidden">
            <div className="w-full p-6">
                <div className="flex w-full gap-5 items-center lg:items-start">
                    <div className="size-[50px] bg-primary-green rounded-full flex items-center justify-center">
                    <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.09167 28.3414V26.9247C6.09167 26.1692 6.375 25.5374 6.94167 25.0292C7.50833 24.5211 8.16944 24.2085 8.925 24.0914V13.9622C8.40556 13.7733 7.95128 13.5018 7.56217 13.1477C7.17306 12.7935 6.84817 12.3803 6.5875 11.9081L3.89583 12.6164C3.04583 12.8053 2.23692 12.7345 1.46908 12.4039C0.70125 12.0733 0.211556 11.5067 0 10.7039L6.1625 9.14557C6.35139 8.17752 6.8 7.37474 7.50833 6.73724C8.21667 6.09974 9.06667 5.74557 10.0583 5.67474L10.9083 2.48724C11.1444 1.66085 11.5992 1.00588 12.2726 0.522322C12.946 0.038766 13.6954 -0.109039 14.5208 0.078905L12.75 6.45391C13.3403 6.83168 13.795 7.32752 14.1143 7.94141C14.4335 8.55529 14.5926 9.21641 14.5917 9.92474C14.5917 10.2317 14.5563 10.533 14.4854 10.8286C14.4146 11.1242 14.3319 11.4132 14.2375 11.6956L16.15 13.6789C16.7403 14.2928 17.0888 15.0129 17.1955 15.8393C17.3022 16.6657 17.0718 17.3622 16.5042 17.9289L12.2542 13.6789C12.1833 13.7497 12.1068 13.8031 12.0247 13.839C11.9425 13.8749 11.8537 13.916 11.7583 13.9622V24.0914C12.5139 24.2095 13.175 24.5225 13.7417 25.0307C14.3083 25.5388 14.5917 26.1701 14.5917 26.9247V28.3414H6.09167ZM10.3417 12.0497C10.9319 12.0497 11.4339 11.8434 11.8476 11.4307C12.2612 11.0179 12.4676 10.516 12.4667 9.92474C12.4657 9.33352 12.2594 8.83202 11.8476 8.42024C11.4358 8.00846 10.9338 7.80163 10.3417 7.79974C9.7495 7.79785 9.248 8.00468 8.83717 8.42024C8.42633 8.83579 8.2195 9.33729 8.21667 9.92474C8.21383 10.5122 8.42067 11.0142 8.83717 11.4307C9.25367 11.8472 9.75517 12.0535 10.3417 12.0497Z" fill="black"/>
                    </svg>

                    </div>
                    <h6 className='text-primary-black text-xl lg:text-3xl text-left font-medium font-dm-mono w-fit max-w-[70%]'>Renewable Energy Usage</h6>
                </div>
                <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full mt-6'>Our facilities and manufacturing lines integrate renewable energy sources like solar and wind power. We’re steadily reducing our dependence on fossil fuels while moving toward a fully sustainable production ecosystem.</p>
            </div>
            <div className="w-full h-[300px] mt-5">
                <img src="/images/sustainability-3.png" alt="Tractor image" className="w-full h-full object-cover object-center" />
            </div>
        </div>

       </div>
    </section>
  )
}

export default Sustainability