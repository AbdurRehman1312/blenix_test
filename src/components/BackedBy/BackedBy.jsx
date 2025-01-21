"use client"
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use';
import CommunityDriven from '../CommunityDriven/CommunityDriven';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

const BackedBy = () => {
    const textSectionRef = useRef(null);
    const textIntersection = useIntersection(textSectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });
    useEffect(() => {
        const animateText = (elements, shouldFadeIn) => {
            gsap.to(elements, {
                duration: 0.3,
                opacity: shouldFadeIn ? 1 : 0,
                y: shouldFadeIn ? '0%' : '100%',
                ease: "power3.out",
                stagger: 0.2
            });
        };

        if (textIntersection && textIntersection.intersectionRatio >= 0.5) {
            animateText(textSectionRef.current.children, true);
        } else {
            animateText(textSectionRef.current.children, false);
        }
    }, [textIntersection]);
    return (
        <section className='w-[95%] lg:w-[80%] mx-auto relative py-20'>
            <div className="bg-custom-orange h-[100px] w-[100px] lg:h-[280px] lg:w-[280px] z-[-1] filter_blur2 rounded-full absolute left-[37%] top-[50%]" />
            <div className="flex flex-col items-center gap-y-6 w-full lg:w-[60%] mx-auto">
                <h3 className="text-gradient text-xl font-medium">Seamless Operations</h3>
                <h1 className='text-white text-2xl lg:text-4xl font-medium text-center'>Backed by Transparency, Built for Growth</h1>
                <p className="text-white/75 lg:text-lg text-center">Early access to BLX is your chance to invest in a token that powers accountability and innovation in our blockchain space. Stability and trust are woven into the Blenix ecosystem, offering long-term value in a dynamic market.  <br /> <br />
                    Don’t just buy a token—own a piece of a platform built to drive innovation.</p>
            </div>
            <div className="flex justify-between md:flex-row flex-col items-stretch gap-3 mt-14 overflow-y-hidden" ref={textSectionRef}>
                <div className="w-full lg:w-[32%] bg-dark-gray/70 rounded-[20px] p-5">
                    <div className="flex flex-col">
                        <div className="w-[50px] h-[50px] rounded-full p-1 flex justify-center items-center border border-[#575453] hover:animate-pulse">
                            <div className="w-[40px] h-[40px] bg-[#575453] rounded-full p-2 flex shrink-0 justify-center items-center">
                                <Image src="/icons/tangible.png" alt="1" width={30} height={30} />
                            </div>
                        </div>
                        <h3 className="lg:text-2xl text-lg text-white font-semibold my-2">Tangible Value</h3>
                        <p className="text-white/70 m-0 text-sm font-light">Each token represents a stake in a transparent and impactful ecosystem—built on trust, not speculation.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[32%] bg-dark-gray/70 rounded-[20px] p-5">
                    <div className="flex flex-col">
                        <div className="w-[50px] h-[50px] rounded-full p-1 flex justify-center items-center border border-[#575453] hover:animate-pulse">
                            <div className="w-[40px] h-[40px] bg-[#575453] rounded-full p-2 flex shrink-0 justify-center items-center">
                                <Image src="/icons/backing.png" alt="1" width={30} height={30} />
                            </div>
                        </div>
                        <h3 className="lg:text-2xl text-lg text-white font-semibold my-2">Transparent Backing</h3>
                        <p className="text-white/70 m-0 text-sm font-light">Fully verifiable processes ensure every action is grounded in accountability and reliability.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[32%] bg-dark-gray/70 rounded-[20px] p-5">
                    <div className="flex flex-col">
                        <div className="w-[50px] h-[50px] rounded-full p-1 flex justify-center items-center border border-[#575453] hover:animate-pulse">
                            <div className="w-[40px] h-[40px] bg-[#575453] rounded-full p-2 flex shrink-0 justify-center items-center">
                                <Image src="/icons/impact.png" alt="1" width={30} height={30} />
                            </div>
                        </div>
                        <h3 className="lg:text-2xl text-lg text-white font-semibold my-2">Sustainable Impact</h3>
                        <p className="text-white/70 m-0 text-sm font-light">Partnerships and innovations align with responsible practices, creating solutions that drive meaningful change.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-8">
                <Button variant="destructive" className="flex items-center gap-x-3 md:w-auto w-full">
                    <span>Reserve Your Spot Today</span>
                    <ChevronRight className='text-custom-orange' />
                </Button>
            </div>
            <CommunityDriven />
        </section>
    )
}

export default BackedBy
