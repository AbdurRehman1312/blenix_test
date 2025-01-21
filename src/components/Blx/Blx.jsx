"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const Blx = () => {
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
                x: "100%",
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
        <section className='w-[95%] lg:w-[80%] mx-auto my-10 bg_glass rounded-[40px] px-5 py-10 lg:p-10 flex justify-between items-center md:flex-row flex-col-reverse gap-y-10 overflow-hidden'>
            <div className="w-full md:w-[45%]">
                <Image src="/images/blx.png" alt="BLX" width={400} height={400} className='blx_shadow' style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }} ref={imageRef} />
            </div>
            <div className="w-full md:w-[45%] space-y-5" ref={sectionRef}>
                <h1 className="text-white text-2xl lg:text-4xl font-bold">Purposeful Tech, Smarter Blockchain</h1>
                <h1 className="text-white text-lg font-bold">Real Impact, Real Innovation</h1>
                <p className="mt-5 text-white lg:text-lg">Blenix isn’t just another blockchain—it’s a platform built for progress and meaningful impact. At the heart of this ecosystem lies <span className="font-extrabold">BLX Token</span>, the utility token that powers every interaction and ensures a seamless experience across the network.</p>
                <ul className='list-disc text-white/90 ml-5'>
                    <li>
                        <span className="font-extrabold">BLX Token:</span> Your gateway to the Blenix ecosystem, BLX is used for network fees, participation in governance, and engaging with the platform’s innovative solutions.
                    </li>
                    <li>
                        <span className="font-extrabold">Advanced Tokenization:</span> Enable impactful initiatives with transparency and accountability, all supported by BLX.
                    </li>
                    <li>
                        <span className="font-extrabold">Proven Security:</span> BLX ensures trust in every transaction, creating a reliable and accessible environment for all participants.
                    </li>
                    <li>
                        <span className="font-extrabold">Sustainability at Scale:</span> BLX supports solutions designed to align with today’s values, fostering responsible growth and progress.
                    </li>
                </ul>
                <div className="">
                    <Link href='/blx-token' className=''>
                        <Button variant="destructive" className="flex items-center gap-x-3">
                            <span>Explore BLX Token</span>
                            <ChevronRight className='text-black' />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Blx
