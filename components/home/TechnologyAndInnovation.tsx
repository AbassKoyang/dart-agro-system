import Link from "next/link"
import ArrowRightTopLink from "../ArrowRightTopLink"
import Label from "../Label"

const TechnologyAndInnovation = () => {
  return (
    <section className='w-full py-14 lg:py-20 px-4 lg:px-[20px] bg-medium-green flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0'>
        <div className="w-full lg:w-[50%]">
            <Label text='Technology & Innovation'/>
            <h3 className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-[650px]'>Smart Technology Meets Solid Engineering.</h3>
            <div className="mt-10 lg:mt-[370px] w-full h-fit lg:w-[312px] lg:h-[298px]">
                <img src="/images/tractor-and-harvesters-square.png" alt="Tractor image" className="w-full object-contain object-center" />
            </div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-start">
           <div className="w-full flex justify-end">
            <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>We’re redefining agriculture through technology — integrating IoT connectivity, automation, and AI-driven analytics into every machine. Our systems collect real-time field data, analyze performance, and help farmers make informed decisions that increase output while conserving resources.</p>
           </div>
           <div className="mt-24 lg:mt-48">
            <div className="w-full pb-4 lg:pb-6 border-b border-[#9A9A9A]">
                <h5 className="text-primary-black text-2xl lg:text-5xl text-left font-medium font-dm-mono">Autonomous Operations</h5>
                <p className="font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left">Self-driving tractors for 24/7 precision.</p>
            </div>
            <div className="w-full pb-4 lg:pb-6 border-b border-[#9A9A9A] mt-10 lg:mt-14">
                <h5 className="text-primary-black text-2xl lg:text-5xl text-left font-medium font-dm-mono">IoT Integration</h5>
                <p className="font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left">Monitor and control equipment remotely.</p>
            </div>
            <div className="w-full pb-4 lg:pb-6 border-b border-[#9A9A9A] mt-10 lg:mt-14">
                <h5 className="text-primary-black text-2xl lg:text-5xl text-left font-medium font-dm-mono">AI Analytics</h5>
                <p className="font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left">Predictive insights for better yield and resource use.</p>
            </div>
            <div className="w-full pb-4 lg:pb-6 border-b border-[#9A9A9A] mt-10 lg:mt-14">
                <h5 className="text-primary-black text-2xl lg:text-5xl text-left font-medium font-dm-mono">Green Engineering</h5>
                <p className="font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left">Lower emissions, higher efficiency.</p>
            </div>
           </div>
        </div>
    </section>
  )
}

export default TechnologyAndInnovation