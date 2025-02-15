"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import { useIntersection } from "react-use";
export const BenefitsBlx = () => {
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
    });

    useEffect(() => {
        const textElements = Array.from(sectionRef.current.children);

        const fadeIn = () => {
            gsap.to(textElements, {
                duration: 1.4,
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "power4.out",
                stagger: {
                    amount: 0.3,
                },
            });
        };

        const fadeOut = () => {
            gsap.to(textElements, {
                duration: 1.4,
                opacity: 0,
                y: "100%",
                scale: 0.1,
                ease: "power4.out",
                stagger: {
                    amount: 0.3,
                },
            });
        };

        if (intersection && intersection.intersectionRatio >= 0.4) {
            fadeIn();
        } else {
            fadeOut();
        }
    }, [intersection]);
    return (
        <>
            <section className='w-[95%] lg:w-[85%] relative mx-auto my-16'>
                <div className="bg-custom-orange h-[100px] w-[100px] lg:h-[120px] lg:w-[220px] z-[-1] filter_blur2 rounded-full absolute left-[40%] bottom-[90%]" />
                <h1 className='text-white text-2xl lg:text-4xl text-center font-medium my-5'>Benefits of owning $BLX</h1>
                <div className="mt-10 lg:mt-20 relative">

                    <div className="flex items-stretch flex-wrap justify-between gap-y-10  overflow-hidden mx-auto" ref={sectionRef}>
                        <div className="w-full bg_glass lg:w-[50%] xl:w-[55%] min-h-[30vh]  rounded-[40px] p-7 lg:p-10  overflow-hidden">
                            <div className="space-y-7">
                                <div className="w-[55px] h-[55px] rounded-full p-1 flex justify-center items-center bg_gradient10 orange_shadow hover:animate-pulse">
                                    <div className="w-[45px] h-[45px] bg-[#252526] rounded-full p-2 flex shrink-0 justify-center items-center">
                                        <Image src="/icons/evolution.png" alt="1" width={30} height={30} />
                                    </div>
                                </div>
                                <h1 className="text-white text-lg md:text-2xl lg:text-2xl font-medium">BLX token owners can submit proposals for platform updates, ensuring their voice shapes the ecosystem's evolution.</h1>
                                <a className="text-white/80 w-full flex items-center justify-end font-light text-base md:text-xl" href="">
                                    Read More
                                    <div className="w-[32px] h-[32px]  md:w-[40px] md:h-[40px] rounded-full p-2 flex shrink-0 justify-center items-center">
                                        <Image src="/icons/arrow.png" alt="1" width={30} height={30} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-[48%] xl:w-[42%] min-h-[30vh] bg_glass rounded-[40px] pt-7 pl-7 lg:pt-10 lg:pl-10  relative overflow-hidden space-y-5">

                            <div className='flex flex-col justify-between h-[85%]'>
                                <div className="w-[55px] h-[55px] rounded-full p-1 flex justify-center items-center orange_shadow  bg_gradient10 hover:animate-pulse">
                                    <div className="w-[46px] h-[47px] bg-[#252526] rounded-full p-2 flex shrink-0 justify-center items-center">
                                        <Image src="/icons/fast.png" alt="1" width={30} height={30} />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-white text-3xl lg:text-6xl font-medium">55%</h1>
                                    <p className="text-white/70 w-full text-nowrap">
                                        Faster Blockcain
                                    </p>
                                </div>
                            </div>

                            <div className=" w-[40%] md:w-[22%] lg:w-auto rounded-full absolute bottom-0 right-[20] md:right-[20] lg:right-[10] shrink-0 ">
                                <Image src="/images/blxcut.png" alt="1" width={250} height={250} className='blx_shadow3' />
                            </div>
                        </div>
                        <div className="w-full lg:w-[50%] xl:w-[55%] min-h-[30vh] bg_glass rounded-[40px] p-7 lg:p-10 relative overflow-hidden ">
                            <div className='flex gap-9'>
                                <div className="w-[55px] h-[55px] rounded-full p-1 flex justify-center items-center orange_shadow  bg_gradient10 hover:animate-pulse">
                                    <div className="w-[46px] h-[47px] bg-[#252526] rounded-full p-2 flex shrink-0 justify-center items-center">
                                        <Image src="/icons/reward1.png" alt="1" width={30} height={30} />
                                    </div>
                                </div>
                                <div className="w-[55px] h-[55px] rounded-full p-1 flex justify-center items-center orange_shadow  bg_gradient10 hover:animate-pulse">
                                    <div className="w-[46px] h-[47px] bg-[#252526] rounded-full p-2 flex shrink-0 justify-center items-center">
                                        <Image src="/icons/reward2.png" alt="1" width={30} height={30} />
                                    </div>
                                </div>
                                <div className="w-[55px] h-[55px] rounded-full p-1 flex justify-center items-center orange_shadow  bg_gradient10 hover:animate-pulse">
                                    <div className="w-[46px] h-[47px] bg-[#252526] rounded-full p-2 flex shrink-0 justify-center items-center">
                                        <Image src="/icons/reward3.png" alt="1" width={30} height={30} />
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-1 mt-5 lg:mt-12'>
                                <h1 className="text-white text-lg md:text-2xl lg:text-2xl font-medium">Exclusive Rewards</h1>
                                <p className="text-white/70 w-full text-base lg:text-2xl">
                                    Earn staking and liquidity rewards by participating in the Blenix ecosystem . Maximize your returns while securing the network.
                                </p>
                            </div>

                        </div>
                        <div className="w-full lg:w-[48%] xl:w-[42%] min-h-[30vh] bg_glass rounded-[40px] pt-7 lg:pt-10 px-7 lg:px-10  relative overflow-hidden md:flex-row flex-col">

                            <div className="flex flex-col justify-between h-full relative z-10">
                                <h1 className="text-white text-base md:text-xl lg:text-2xl font-medium">
                                    BLX token owners can submit proposals for platform updates, ensuring their voice shapes the ecosystem's evolution.
                                </h1>
                                <div className='flex items-end justify-between w-full'>
                                    <div className=" w-[40%] md:w-[25%] lg:w-[45%] xl:w-[38%]  shrink-0 z-0">
                                        <Image src="/images/shieldcut.png" alt="1" width={202} height={245} className='blx_shadow3' />
                                    </div>
                                    <a className="text-white/80 flex items-center font-light text-base md:text-xl pb-7 lg:pb-10" href="">
                                        Read More
                                        <div className="w-[32px] h-[32px]  md:w-[40px] md:h-[40px] rounded-full p-2 flex shrink-0 justify-center items-center">
                                            <Image src="/icons/arrow.png" alt="1" width={30} height={30} />
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
