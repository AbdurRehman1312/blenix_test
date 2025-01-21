"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useIntersection } from 'react-use'

const CommunityDriven = () => {
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
        <div className='flex justify-between md:flex-row flex-col gap-y-4 items-center mt-10'>
            <div className="w-full md:w-[50%] space-y-8 overflow-x-hidden" ref={sectionRef}>
                <h1 className='text-white text-2xl lg:text-4xl font-medium'>A Community-Driven <br /> Ecosystem</h1>
                <p className="text-white/75 lg:text-lg font-light">Blenix is more than a blockchain—it’s a dynamic community where investors, developers, and enthusiasts come together to shape the future. With a vision to power thousands of decentralized applications, educate through upcoming Blenix Academy, and empower BLX holders with governance rights, we’re building an ecosystem designed for collaboration and meaningful impact.</p>
            </div>
            <div className="w-full md:w-[50%] flex justify-center lg:justify-end">
                <Image src="/images/driven.png" alt="community" width={400} height={400} className='blx_shadow animate-pulse' />
            </div>
        </div>
    )
}

export default CommunityDriven
