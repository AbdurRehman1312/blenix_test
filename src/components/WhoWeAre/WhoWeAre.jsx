"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useIntersection } from 'react-use'

const WhoWeAre = () => {
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
        <section className="w-[95%] lg:w-[80%] mx-auto relative pb-10">
            <div className="bg-custom-orange h-[100px] w-[100px] lg:h-[100px] lg:w-[900px] z-[-1] filter_blur2 rounded-full absolute left-[15%] top-[70%]" />
            <div className='flex justify-between md:flex-row flex-col-reverse gap-y-4 items-center mt-10'>
                <div className="w-full md:w-[50%] flex justify-center lg:justify-start">
                    <Image src="/images/about1.png" alt="community" width={450} height={450} className='blx_shadow animate-pulse' />
                </div>
                <div className="w-full md:w-[50%] space-y-8 overflow-x-hidden" ref={sectionRef}>
                    <h3 className="text-gradient lg:text-lg font-medium">Who We Are</h3>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium'>Innovation Meets Purpose</h1>
                    <p className="text-white/75 lg:text-lg font-light"><span className="text-white font-medium">Blenix Chain</span> isn’t just another blockchain— it’s an innovation born from deep expertise. Engineered by industry leaders in advanced technology, it is designed for efficiency, scalability, and real-world usability, providing a robust foundation for the next generation of decentralized applications, digital finance, and beyond. <br /> <br />Pioneered by <span className="text-white font-medium">Blenix Chain Technology Inc</span> a legally registered company in <span className="text-white font-medium">Canada</span>, we are committed to exploring and developing new frontiers in software, digital infrastructure, and emerging technologies. Our focus extends beyond traditional computing, integrating AI, blockchain, and smart connectivity to create solutions that drive progress.</p>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
