import React from 'react'
import Image from 'next/image'
export const CoreValues = () => {
    return (
        <>
            <section className="w-[95%] lg:w-[70%] mx-auto  py-10">
                <h3 className="text-gradient text-center lg:text-lg font-medium">Core</h3>
                <h1 className='text-white text-2xl lg:text-4xl text-center font-medium my-5'>Core Values That Drive Us</h1>

                <div className='flex items-center lg:items-start justify-center flex-col lg:flex-row gap-6 lg:gap-2 xl:gap-5 mt-10'>
                    <div className='flex flex-col items-center gap-8'>
                    <div className='bg-[#FF752A] w-[95px] h-[90px]  rounded-[20px] relative flex justify-center items-center '>
                        <div className="bg-custom-orange h-[80px] w-[25px] z-[-1] filter_blur3 rounded-full absolute top-[50%]" />
                        <Image src="/icons/bulb.png" alt="1" width={40} height={40} />
                    </div>

                    <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-white text-xl font-medium text-center'>Innovation & Research</h1>
                    <p className='text-white/70 text-sm text-center xl:text-base font-light '>Continuously exploring and pushing the boundaries of emerging technologies to drive meaningful advancements</p>
                    </div>
                    </div>
                   
                    <div className="container_dot hidden lg:flex lg:justify-center lg:items-center">
                        <div className="dot hidden lg:flex"></div>
                        <div className="line hidden lg:flex"></div>
                        <div className="dot hidden lg:flex"></div>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                    <div className='bg-[#FF752A] w-[95px] h-[90px]  rounded-[20px] relative flex justify-center items-center '>
                        <div className="bg-custom-orange h-[80px] w-[25px] z-[-1] filter_blur3 rounded-full absolute top-[50%]" />
                        <Image src="/icons/protect.png" alt="1" width={40} height={40} />
                    </div>

                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white text-xl font-medium text-center'>Security & Trust</h1>
                        <p className='text-white/70 text-sm text-center xl:text-base font-light '>Prioritizing encryption, compliance, and data protection to ensure secure and reliable digital interactions.</p>
                    </div>
                    </div>
                    <div className="container_dot hidden lg:flex lg:justify-center lg:items-center">
                        <div className="dot hidden lg:flex"></div>
                        <div className="line hidden lg:flex"></div>
                        <div className="dot hidden lg:flex"></div>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                    <div className='bg-[#FF752A] w-[95px] h-[90px]  rounded-[20px] relative flex justify-center items-center '>
                        <div className="bg-custom-orange h-[80px] w-[25px] z-[-1] filter_blur3 rounded-full absolute top-[50%]" />
                        <Image src="/icons/protect.png" alt="1" width={40} height={40} />
                    </div>

                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white text-xl font-medium text-center'>Interconnectivity & Integration</h1>
                        <p className='text-white/70 text-sm text-center xl:text-base font-light '>Building AI-driven, decentralized, and cloud-based platforms that seamlessly connect digital ecosystems.</p>
                    </div>
                    </div>
                    <div className="container_dot hidden lg:flex lg:justify-center lg:items-center">
                        <div className="dot hidden lg:flex"></div>
                        <div className="line hidden lg:flex"></div>
                        <div className="dot hidden lg:flex"></div>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                    <div className='bg-[#FF752A] w-[95px] h-[90px]  rounded-[20px] relative flex justify-center items-center '>
                        <div className="bg-custom-orange h-[80px] w-[25px] z-[-1] filter_blur3 rounded-full absolute top-[50%]" />
                        <Image src="/icons/progress.png" alt="1" width={40} height={40} />
                    </div>

                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-white text-xl font-medium text-center'>Commitment to Progress</h1>
                        <p className='text-white/70 text-sm text-center xl:text-base font-light '>Driving digital transformation with a focus on efficiency, intelligence, and long-term technological evolution</p>
                    </div>
                    </div>
                </div>

                <div>

                </div>


            </section>
        </>
    )
}
