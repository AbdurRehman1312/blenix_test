"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'

const IntroBLX = () => {
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
                y: "-100%",
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

    const imageRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                } else {
                    entry.target.style.opacity = 0;
                }
            });
        }, options);

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);
    return (
        <section className='w-[95%] lg:w-[80%] mx-auto my-20'>
            <div className="flex items-start justify-between lg:flex-row flex-col-reverse gap-7 ">
                <div className="lg:w-[50%] w-full">
                    <div className="relative flex justify-center lg:block" style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }} ref={imageRef}>
                        <Image src="/images/bitcoinshield.png" alt="phone" width={250} height={250} className='blx_shadow ' />
                        <div className="bg-custom-orange animate-pulse h-[100px] w-[250px] z-[-1] filter_blur absolute left-[5%] top-[50%]" />
                        <div className="bg_gradient2 rounded-full w-[130px] h-[130px] bounce-animation absolute inset-x-[15%] lg:inset-x-[2%] bottom-[2%] z-[-10]" />
                    </div>
                    <div className="relative mt-10">
                        <div className="flex items-center gap-x-3">
                            <div className="p-1 rounded-full bg-custom-orange"></div>
                            <h1 className="text-lg lg:text-xl text-white">
                                Our Mission
                            </h1>
                        </div>
                        <p className="text-white/70 font-light mt-5">
                            With BLX, your involvement is anchored in transparency and driven by a platform built for accountability and world impact.</p>
                    </div>
                </div>
                <div className="lg:w-[50%] w-full flex flex-col items-end overflow-y-hidden" ref={sectionRef}>
                    <div className="">
                        <h1 className='text-white text-2xl lg:text-4xl font-medium lg:w-[80%] w-full'>Introducing BLX: Driving Innovation with Trust</h1>
                        <div className="flex items-center gap-x-3 mt-10">
                            <div className="p-1 rounded-full bg-custom-orange"></div>
                            <h1 className="text-lg lg:text-xl text-white">
                                Who We Are
                            </h1>
                        </div>
                        <p className="text-white/70 font-light mt-5">
                            BLX isn’t just a utility token—it’s the foundation of a blockchain ecosystem built for transparency, scalability, and accountability. With 2 billion maximum supply, 5% are open for presale, offering a unique opportunity to be part of a platform focused on purpose-driven solutions.</p>
                        <div className="flex items-center gap-x-3 mt-10">
                            <div className="p-1 rounded-full bg-custom-orange"></div>
                            <h1 className="text-lg lg:text-xl text-white">
                                What Makes BLX Different?
                            </h1>
                        </div>
                        <p className="text-white/70 font-light mt-5">
                            <span className="font-extrabold">Wealth That Works -</span> Lower system fees and a foundation of transparency and accountability drive the value of BLX. With BLX, you’re not just participating—you’re becoming part of a platform built to empower positive changes. <br /> <br />
                            <span className="font-extrabold">True Riches -</span> Our ecosystem attracts a community of investors committed to growing the BLX value. Backed by strategic planning and sustainable expansion, BLX is your ticket to financial growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroBLX
