'use client';

import ArrowRightTopLink from "../ArrowRightTopLink";

const Form = () => {
  return (
    <section id='the-team-section-about' className='w-full py-14 lg:py-20 px-4 bg-white lg:px-[100px] flex flex-col-reverse lg:flex-row items-start justify-center'>
        <div className="w-full lg:w-[50%] mt-10 lg:mt-0">
            <form onSubmit={(e) => {e.preventDefault(); alert("Email submitted successfully! ✅")}} className="w-full">
            <input required type="text" placeholder='Full name' className="w-full lg:w-[480px] h-[70px] rounded-[6px] bg-[#F1F1F1] px-6 text-sm lg:text-[24px] text-primary-black/70 outline-0 border-1 border-[#CDCDCD] stroke-0 mb-3" />
            <input required type="text" placeholder='Organization name' className="w-full lg:w-[480px] h-[70px] rounded-[6px] bg-[#F1F1F1] px-6 text-sm lg:text-[24px] text-primary-black/70 outline-0 border-1 border-[#CDCDCD] stroke-0 mb-3" />
            <input required type="email" placeholder='Email address' className="w-full lg:w-[480px] h-[70px] rounded-[6px] bg-[#F1F1F1] px-6 text-sm lg:text-[24px] text-primary-black/70 outline-0 border-1 border-[#CDCDCD] stroke-0 mb-3" />
            <select required className="w-full lg:w-[480px] h-[70px] rounded-[6px] bg-[#F1F1F1] px-6 text-sm lg:text-[24px] text-primary-black/70 outline-0 border-1 border-[#CDCDCD] stroke-0 mb-3">
            <option value="">Select Product</option>
            <option value="">Tractors & Harvesters</option>
            <option value="">Tractors & Harvesters</option>
            <option value="">Smart Irrigation Systems</option>
            <option value="">Drones & Sensor Technology</option>
            <option value="">Implements & Attachments</option>
            </select>
            <select required className="w-full lg:w-[480px] h-[70px] rounded-[6px] bg-[#F1F1F1] px-6 text-sm lg:text-[24px] text-primary-black/70 outline-0 border-1 border-[#CDCDCD] stroke-0 mb-3">
            <option value="">Quantity</option>
            {Array.from({length: 50}).map((_,i) => (
             <option key={i} value="">{i}</option>
            ))}
            </select>
            <button type='submit' className='w-full lg:w-[480px] h-[64px] rounded-[45px] bg-primary-green text-sm lg:text-[24px] text-primary-black flex items-center justify-center gap-2 mt-2 font-medium cursor-pointer'>
                <span>Submit</span>
                <ArrowRightTopLink linkStyle='size-[25px] lg:size-[25px] bg-black' svgStyle='size-[20px] lg:size-[20px]' circleFill='black' pathFill='white' />
            </button>
            </form>
        </div>
        <div className="w-full lg:w-[50%] h-[482px] relative bg-amber-300">
            <img src="/images/tractor-and-harvesters-full.png" alt="Tractor image" className="absolute top-0 left-0 size-full object-center object-cover z-10" />
            <div className="w-full h-full bg-primary-green/80 flex items-center justify-center z-20 absolute top-0 left-0"></div>
            <div className="w-full h-full flex items-center justify-center z-30 absolute top-0 left-0">
             <div className="flex flex-col items-center justify-center max-w-[300px] lg:max-w-[450px]">
                <h3 className="text-3xl lg:text-5xl font-dm-mono font-medium">Headquarters</h3>
                <h6 className="font-dm-mono font-normal text-black text-xl lg:text-2xl text-center mt-6 mb-3">DartAgro System, Inc.</h6>
                <p className="font-dm-mono font-normal text-black text-[20px] text-center">1425 Greenfield Industrial Drive, Springfield, Illinois 62704, United States</p>
                <p className="font-dm-mono font-normal text-black text-[20px] mt-3 text-center">+1 (217) 555-0148</p>
                <p className="font-dm-mono font-normal text-black text-[20px] mt-3 text-center">info@dartagrosystem.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Form