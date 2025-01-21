"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { useIntersection } from "react-use";
const WhyBlenix = () => {
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
        <section className='w-[95%] lg:w-[85%] mx-auto my-10'>
            <h3 className="text-gradient text-center lg:text-lg font-medium">Introduction</h3>
            <h1 className='text-white text-2xl lg:text-4xl text-center font-medium my-5'>Why Choose Blenix?</h1>
            <h5 className="lg:text-xl text-white text-center">Because technology should work for a better world</h5>
            <div className="my-10 relative">
                <Image src="/images/cube.png" alt="1" width={400} height={400} className='absolute animate-rotate top-[-20%] right-0 hidden lg:block z-[-10]' />
                <Image src="/images/cube.png" alt="1" width={400} height={400} className='absolute animate-rotate bottom-[-20%] left-0 hidden lg:block z-[-10]' />
                <div className="flex items-stretch flex-wrap justify-between gap-y-10 w-[95%] lg:w-[90%] overflow-hidden mx-auto" ref={sectionRef} >
                    <div className="w-full lg:w-[60%] min-h-[30vh] bg_glass rounded-[40px] p-7 lg:p-10 relative overflow-hidden">
                        <Image src="/images/globe.png" alt="1" width={300} height={300} className='absolute top-0 right-0 z-[-10]' />
                        <div className="space-y-7">
                            <h1 className="text-white text-lg lg:text-2xl font-semibold">Eco-Conscious Scalability</h1>
                            <p className="text-white/70 w-full md:w-[70%] lg:w-[50%]">
                                Built to support digital solutions that prioritize environmental responsibility, Blenix is designed to empower real change.
                            </p>
                            {/* <div className="flex flex-wrap gap-2">
                                <div className=" w-full md:w-[25%] lg:w-[30%] xl:w-[19%] bg-light-gray p-2 rounded-[10px] text-center">
                                    <span className="text-white text-nowrap text-sm">People-Powered</span>
                                </div>
                                <div className=" w-full md:w-[25%] lg:w-[30%] xl:w-[19%] bg-light-gray p-2 rounded-[10px] text-center">
                                    <span className="text-white text-nowrap text-sm">Synergy-Driven</span>
                                </div>
                                <div className=" w-full md:w-[25%] lg:w-[30%] xl:w-[19%] bg-light-gray p-2 rounded-[10px] text-center">
                                    <span className="text-white text-nowrap text-sm">Collective Success</span>
                                </div>
                                <div className=" w-full md:w-[25%] lg:w-[30%] xl:w-[19%] bg-light-gray p-2 rounded-[10px] text-center">
                                    <span className="text-white text-nowrap text-sm">Empowered</span>
                                </div>
                                <div className=" w-full md:w-[25%] lg:w-[30%] xl:w-[19%] bg-light-gray p-2 rounded-[10px] text-center">
                                    <span className="text-white text-nowrap text-sm">Collaborative</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-[37%] min-h-[30vh] bg_glass rounded-[40px] p-7 lg:p-10 relative overflow-hidden space-y-5">
                        <div className="h-[70px] w-[70px] bg-custom-orange orange_shadow rounded-[20px] relative flex items-center justify-center p-1">
                            <Image src="/icons/shield.png" alt="1" width={45} height={45} />
                        </div>
                        <h1 className="text-white text-lg lg:text-2xl font-semibold">Work Smarter, Not Harder</h1>
                        <p className="text-white/70 w-full">
                            Streamline everything. Blenix’s smart contracts automate the boring stuff, reduce errors, and save you time. Less hassle, more results.
                        </p>
                    </div>
                    <div className="w-full lg:w-[37%] min-h-[30vh] bg_glass rounded-[40px] p-7 lg:p-10 relative overflow-hidden space-y-5">
                        <div className="h-[70px] w-[70px] bg-custom-orange orange_shadow rounded-[25px] relative flex items-center justify-center p-1">
                            <Image src="/icons/transaction.png" alt="1" width={35} height={35} />
                        </div>
                        <h1 className="text-white text-lg lg:text-2xl font-semibold">Your Privacy Is Non-Negotiable</h1>
                        <p className="text-white/70 w-full">
                            Your data isn’t a commodity. Blenix prioritizes your privacy with robust encryption and secure protocols, ensuring your information stays protected and off the radar.
                        </p>
                    </div>
                    <div className="w-full lg:w-[60%] min-h-[30vh] bg_glass rounded-[40px] p-7 lg:p-10 flex items-center justify-between gap-3 md:flex-row flex-col">
                        <div className="space-y-7 w-full lg:w-[50%]">
                            <h1 className="text-white text-lg lg:text-2xl font-semibold">Decentralized, Just the Way It Should Be</h1>
                            <p className="text-white/70">
                                Trade directly, skip the middlemen, and dodge the fees. It’s secure, transparent, and always under your control—because that’s how blockchain should work.
                            </p>
                        </div>
                        <div className="w-full lg:w-[50%] relative">
                            <Image src="/images/graphic.png" alt="1" width={700} height={700} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyBlenix
