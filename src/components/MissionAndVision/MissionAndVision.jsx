"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useIntersection } from 'react-use'

const MissionAndVision = () => {
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
        <section className="w-[95%] lg:w-[70%] mx-auto relative py-10">
            <div className="bg-custom-orange h-[100px] w-[100px] lg:h-[60px] lg:w-[900px] z-[-1] filter_blur2 rounded-full absolute left-[15%] top-[50%]" />
            <div className='flex justify-between md:flex-row flex-col gap-y-4 items-center mt-10'>
                <div className="w-full md:w-[50%] space-y-8 overflow-x-hidden" ref={sectionRef}>
                    <h3 className="text-gradient lg:text-lg font-medium">Our Mission</h3>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium'>Expanding the Boundaries of Technology</h1>
                    <p className="text-white/75 lg:text-lg font-light">Our mission is to develop intelligent, scalable, and secure technology solutions that enable a more connected and efficient digital world. By integrating AI, IoT, blockchain, and cloud computing, we contribute to the evolution of next-generation computing, automation, and secure digital systems.</p>
                </div>
                <div className="w-full md:w-[50%] flex justify-center lg:justify-end">
                    <Image src="/images/blxmission.png" alt="community" width={300} height={300} className='blx_shadow animate-pulse' />
                </div>
            </div>
            <div className='flex justify-between md:flex-row flex-col-reverse gap-y-4 items-center mt-10'>
                <div className="w-full md:w-[50%] flex justify-center lg:justify-start">
                    <Image src="/images/blxvision.png" alt="community" width={300} height={300} className='blx_shadow animate-pulse' />
                </div>
                <div className="w-full md:w-[50%] space-y-8 overflow-x-hidden" ref={sectionRef}>
                    <h3 className="text-gradient lg:text-lg font-medium">Our Vision</h3>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium'>A Future Powered by Innovation</h1>
                    <p className="text-white/75 lg:text-lg font-light">We envision a world where advanced technologies seamlessly integrate into digital ecosystems. From AI-powered automation to decentralized infrastructure, our goal is to develop groundbreaking solutions that redefine the way people interact with technology</p>
                </div>
            </div>
        </section>
    )
}

export default MissionAndVision
