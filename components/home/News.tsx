import React from 'react'
import Label from '../Label'
import BlogPreview from './BlogPreview'

const News = () => {
  return (
    <section className='w-full py-14 lg:py-20 pb-28 lg:pb-40 px-4 lg:px-[20px] bg-white'>
        <Label text='News & Insights'/>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 mt-6">
            <div className="w-full lg:w-[50%]">
                <h3 className='text-primary-black text-[40px] leading-[45px] lg:text-[70px] text-left font-medium font-dm-mono lg:leading-[80px] will-change-transform lg:max-w-full'>The Future of Farming, Engineered Today.</h3>
            </div>
            <div className="w-full lg:w-[50%] flex items-center justify-end">
                <p className='font-dm-mono font-normal text-[16px] lg:text-[20px] text-primary-black/70 text-left max-w-full lg:max-w-[550px]'>Explore our latest innovations, industry insights, and global projects driving the next era of agricultural transformation.</p>
            </div>
        </div>
        <div className="w-full flex flex-col gap-10 mt-20">
            <BlogPreview imageUrl='/images/blog-1.png' text='The next generation of precision farming featuring AI navigation, real-time soil analytics, and zero-emission hybrid power. Built to work smarter, longer, and cleaner.' title='Introducing the AgriMach A9 Autonomous Tractor' date='Sat Oct 25' />
            <BlogPreview imageUrl='/images/blog-2.png' text='DartAgro’s intelligent irrigation system helps farmers save water and increase yield using data-driven precision and adaptive moisture control.' title='Smart Irrigation Pilot Cuts Water Use by 37%' date='Sat Oct 25' />
            <BlogPreview imageUrl='/images/blog-3.png' text='Together with international experts, we’re advancing automation, sustainability, and the digital transformation of global agriculture.' title='DartAgro Partners with Global AgTech Forum 2025' date='Sat Oct 25' />
            <BlogPreview imageUrl='/images/blog-4.png' text='Our newest production facility runs entirely on renewable energy — setting a new benchmark for sustainable manufacturing in the agri-tech industry.' title='DartAgro Opens Carbon-Neutral Factory in Europe' date='Sat Oct 25' />
            <BlogPreview imageUrl='/images/blog-5.png' text='With AgriMach’s A9 fleet and smart monitoring, GreenField Farms transformed productivity while cutting operational costs and emissions.' title='Nebraska GreenField Farms Boost Output by 28%' date='Sat Oct 25' />
        </div>
    </section>
  )
}

export default News