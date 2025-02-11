import React from 'react'
import Image from 'next/image'
export const AdvanceTech = () => {
    return (
        <>
            <section className="w-[95%] lg:w-[80%] mx-auto relative py-10">
                <h3 className="text-gradient text-center lg:text-lg font-medium">Our Expertise</h3>
                <h1 className='text-white text-2xl lg:text-4xl text-center font-medium my-5'>Advancing Technology Across Multiple Domains</h1>

                <div className="flex items-stretch flex-wrap justify-between gap-y-10  overflow-hidden mx-auto mt-10 md:mt-20"  >
                    <div className="w-full bg-[#454546] lg:w-[63%] xl:w-[60%] min-h-[45vh]  rounded-[40px] py-7 lg:py-10 flex justify-center items-center relative flex-col  overflow-hidden">
                        <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-center text-gradient">Artificial Intelligence & <br /> Machine Learning</h1>
                        <p className="text-white/70 text-center text-sm md:text-base w-[50%] md:w-[55%] lg:w-[65%] xl:w-[60%] mt-2">Advancing intelligent automation, data analytics, and predictive modeling</p>

                        <div className=" w-[18vh] md:w-auto lg:w-[23vh] xl:w-auto absolute bottom-0 right-0 shrink-0 z-0">
                            <Image src="/images/robot.png" alt="1" width={200} height={200} />
                        </div>

                    </div>
                    <div className="w-full lg:w-[35%] xl:w-[38%] min-h-[45vh]  rounded-[40px] flex justify-center items-center bg-[#FE5900] overflow-hidden ">

                        <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-center text-white">Blockchain & <br />Decentralized Solutions</h1>
                    </div>
                    <div className="w-full lg:w-[63%] xl:w-[60%] ">
                        <div className="flex items-start flex-wrap justify-between gap-y-10  overflow-hidden mx-auto">
                            <div className='w-full lg:w-[55%] xl:w-[50%] flex flex-col gap-y-10 lg:gap-y-5'>
                                <div className=" min-h-[40vh]  rounded-[40px] flex justify-center items-center bg-[#FE5900] overflow-hidden ">
                                    <div className='flex justify-center items-center bg-[#252526] min-h-[32vh] px-2 w-[82%] rounded-[40px] '>
                                        <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium  text-white">Internet of <br />Things (IoT) </h1>
                                    </div>

                                </div>
                                <div className='flex justify-center items-center min-h-[25vh] rounded-[40px] gap-2 bg-[#454546] overflow-hidden '>
                                    <h1 className="text-xl lg:text-2xl xl:text-3xl   text-white/70">Custom Software <br /> Development</h1>
                                </div>
                            </div>
                            <div className='w-full lg:w-[43%] xl:w-[47%] flex flex-col gap-y-10 lg:gap-y-5'>
                                <div className=" min-h-[32vh]  rounded-[40px] flex justify-center items-center gap-2 bg-[#454546] overflow-hidden ">
                                    <div className="">
                                        <Image src="/icons/codebox.png" alt="1" width={52} height={52} />
                                    </div>
                                    <h1 className="text-xl lg:text-2xl xl:text-3xl   text-white/70">Web & App <br /> Development</h1>
                                </div>
                                <div className='flex flex-col justify-center items-start min-h-[33vh] rounded-[40px] gap-2 bg-[#454546] overflow-hidden px-8'>
                                    <h1 className="text-xl xl:text-2xl font-medium  text-white/70">Cybersecurity <br />& Encryption</h1>
                                    <p className='text-white/70 lg:w-[95%] xl:w-[90%] text-sm xl:text-base'>Implementing advanced security frameworks to protect data, applications, and transactions.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="w-full lg:w-[35%] xl:w-[38%] min-h-[45vh] bg_glass rounded-[40px] py-7 lg:py-10 relative overflow-hidden md:flex-row flex-col">

                        <div className="flex flex-col  items-center justify-center xl:h-[30%] relative ">
                            <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-center text-gradient">Cloud Computing & Big Data</h1>
                            <p className="text-white/70 text-center w-[80%] mt-2">Enabling scalable cloud environments and data-driven insights for digital transformation.</p>
                        </div>
                        <div className=" w-[55%] md:w-[35%] lg:w-[95%] xl:w-full absolute bottom-0 left-[25%] md:left-[34%] lg:left-0 shrink-0 z-0">
                            <Image src="/images/cloud.png" alt="1" width={600} height={600} />
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
