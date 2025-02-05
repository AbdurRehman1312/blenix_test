"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useIntersection } from 'react-use'

const BlockchainRevolution = () => {
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
        <section className="w-[95%] lg:w-[80%] mx-auto relative py-20">
            <h3 className="text-gradient text-center lg:text-lg font-medium">The Blockchain Revolution, Redefined</h3>
            <div className='flex justify-between md:flex-row flex-col gap-y-4 items-center mt-10'>
                <div className="w-full md:w-[50%] space-y-8 overflow-x-hidden" ref={sectionRef}>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium'>Secure, Scalable, and Built for Sustainable Future</h1>
                    <p className="text-white/75 lg:text-lg font-light">At Blenix, we’re not here to follow the trends—we’re here to set a new standard. By seamlessly combining innovation and accountability, Blenix delivers a platform designed for impact and progress. <br /> <br />With a focus on transparency and trust, Blenix empowers creators and businesses to build meaningful solutions that matter. Whether it’s seamless interactions, reduced costs, or contributing to something greater, Blenix is your partner in shaping the future. <br /> <br /> It’s not just blockchain—it’s blockchain with purpose.</p>
                </div>
                <div className="w-full md:w-[50%] flex justify-center lg:justify-end">
                    <Image src="/images/coinbronze.png" alt="community" width={450} height={450} className='blx_shadow animate-pulse' />
                </div>
            </div>
        </section>
    )
}

export default BlockchainRevolution
