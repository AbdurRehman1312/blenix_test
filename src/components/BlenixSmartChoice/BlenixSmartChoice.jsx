"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useIntersection } from 'react-use'
import { Slider } from '../ui/slider'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'

const BlenixSmartChoice = () => {
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold value as needed
    });

    useEffect(() => {
        const textElements = Array.from(sectionRef.current.children);

        const fadeIn = () => {
            gsap.to(textElements, {
                duration: 1.4,
                opacity: 1,
                scale: 1,
                x: 0,
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
                x: "-100%",
                scale: 0.1,
                ease: "power4.out",
                stagger: {
                    amount: 0.3,
                },
            });
        };

        if (intersection && intersection.intersectionRatio >= 0.5) {
            fadeIn();
        } else {
            fadeOut();
        }
    }, [intersection]);
    return (
        <section className='w-[95%] lg:w-[80%] mx-auto my-20'>
            <div className="flex items-start justify-between lg:flex-row flex-col gap-y-7">
                <div className="lg:w-[50%] w-full" ref={sectionRef}>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium lg:w-[80%] w-full'>Why Blenix is the Smart Choice Today</h1>
                    <h5 className="lg:text-xl text-white my-5">See How Your Investment Can Grow</h5>
                    <p className="text-white/70 font-extralight">
                        With Blenix, you’re not just buying tokens—you’re becoming part of a transformative ecosystem. Use our interactive calculator to see how your investment can grow alongside the platform’s expansion.
                    </p>

                    <div className="space-y-8 mt-10">
                        <div>
                            <h3 className="text-white text-lg">Amount Invested</h3>
                            <span className="text-white/60 text-sm">0.36$</span>
                            <Slider className="my-2" defaultValue={[25]} max={100} step={1} />
                            <div className="flex justify-between items-center">
                                <span className="text-white/60 text-sm">100$</span>
                                <span className="text-white/60 text-sm">100,000$</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white text-lg">Expected BLX Price</h3>
                            <span className="text-white/60 text-sm">0.36$</span>
                            <Slider className="my-2" defaultValue={[25]} max={100} step={1} />
                            <div className="flex justify-between items-center">
                                <span className="text-white/60 text-sm">100$</span>
                                <span className="text-white/60 text-sm">100,000$</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white text-lg">Calculation Time</h3>
                            <span className="text-white/60 text-sm">Q2 2025</span>
                            <Slider className="my-2" defaultValue={[25]} max={100} step={1} />
                            <div className="flex justify-between items-center">
                                <span className="text-white/60 text-sm">100$</span>
                                <span className="text-white/60 text-sm">100,000$</span>
                            </div>
                        </div>
                        <Button variant="destructive" className="flex items-center gap-x-3 md:w-auto w-full">
                            <span>Claim Your Spot</span>
                            <ChevronRight className='text-custom-orange' />
                        </Button>
                    </div>
                </div>
                <div className="lg:w-[30%] w-full overflow-hidden">
                    <div className="flex justify-center">
                        <Image src="/images/blxsmart.png" className='animate-rotate' alt="phone" width={300} height={300} />
                    </div>
                    <div className="flex flex-col gap-y-4 mt-5">
                        <div className="p-5 min-h-[23vh] lg:min-h-[18vh] flex items-center gap-x-4 bg-dark-gray rounded-[20px]">
                            <div className="bg-white rounded-full p-2 h-[40px] w-[40px] shrink-0">
                                <Image src="/icons/dollar.png" alt="coin" width={40} height={40} />
                            </div>
                            <div className="">
                                <h1 className="text-lg text-white">
                                    Amount Invested
                                </h1>
                                <p className="text-white/70 font-extralight text-sm">                                Easily adjust your investment amount and instantly see how many BLX tokens you’ll receive.</p>
                            </div>
                        </div>
                        <div className="p-5 min-h-[23vh] lg:min-h-[18vh] flex items-center gap-x-4 bg-dark-gray rounded-[20px]">
                            <div className="bg-white rounded-full p-3 h-[40px] w-[40px] shrink-0">
                                <Image src="/icons/signal.png" alt="coin" width={35} height={35} />
                            </div>
                            <div className="">
                                <h1 className="text-lg text-white">
                                    Expected BLX Price
                                </h1>
                                <p className="text-white/70 font-extralight text-sm">                                Projected token value based on platform adoption and market growth.</p>
                            </div>
                        </div>
                        <div className="p-5 min-h-[23vh] lg:min-h-[18vh] flex items-center gap-x-4 bg-dark-gray rounded-[20px]">
                            <div className="bg-white rounded-full p-2 h-[40px] w-[40px] shrink-0">
                                <Image src="/icons/dollar.png" alt="coin" width={40} height={40} />
                            </div>
                            <div className="">
                                <h1 className="text-lg text-white">
                                    Ethereum Price Integration:
                                </h1>
                                <p className="text-white/70 font-extralight text-sm">                                Align your forecasts with current Ethereum trends for accurate projections.</p>
                            </div>
                        </div>
                        <div className="p-5 min-h-[23vh] lg:min-h-[18vh] flex items-center gap-x-4 bg-dark-gray rounded-[20px]">
                            <div className="bg-white rounded-full p-3 h-[40px] w-[40px] shrink-0">
                                <Image src="/icons/signal.png" alt="coin" width={35} height={35} />
                            </div>
                            <div className="">
                                <h1 className="text-lg text-white">
                                    Calculation Time:
                                </h1>
                                <p className="text-white/70 font-extralight text-sm">                                Customize your timeline and see how your returns evolve with the market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlenixSmartChoice
