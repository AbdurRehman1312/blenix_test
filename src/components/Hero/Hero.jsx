"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import gsap from "gsap";
import Image from 'next/image';
const Hero = ({ currentPage }) => {
    // const sectionRef = useRef(null);
    // const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     const textElements = Array.from(sectionRef.current.children);

    //     const fadeIn = () => {
    //         gsap.fromTo(textElements, {
    //             opacity: 0,
    //             y: -20,
    //         }, {
    //             duration: 4,
    //             opacity: 1,
    //             y: 0,
    //             ease: "power4.out",
    //             stagger: 0.1,
    //         });
    //     };

    //     if (!loaded) {
    //         fadeIn();
    //         setLoaded(true);
    //     }
    // }, [currentPage]);
    const handleScroll = () => {
        const waitlistSection = document.getElementById("waitlist");
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="relative lg:min-h-[80vh] px-3 lg:px-0 flex md:flex-row flex-col gap-y-6 md:items-center md:justify-between overflow-hidden">
                <div className="bg-custom-orange lg:block hidden h-[70px] z-[-1] filter_blur rounded-[10px] w-[35%] absolute right-[-12%]" />
                <div className="w-full md:w-[50%] space-y-6 lg:pl-28 xl:pl-40">
                    <h1 className="text-2xl lg:text-4xl font-medium text-gradient">Unleash the Power of Blockchain for a Sustainable Future</h1>
                    <p className="text-white/75 font-semibold md:text-lg">Blenix blends cutting-edge blockchain technology with sustainability-driven solutions—because meaningful change demands strong foundation.</p>
                    <p className="text-white text-lg lg:text-xl font-semibold">Own the future - Join our presale waitlist today!</p>
                    <Button variant="outline" onClick={handleScroll} className="xl:w-[30%]">
                        Get Started
                    </Button>
                </div>
                <div className="w-full md:w-[50%] z-[20] flex justify-end">
                    <Image src="/images/herocircle.png" alt="Hero" width={500} height={500} className=' animate-rotate lg:absolute lg:bottom-4 xl:bottom-8 lg:right-[-18%] xl:right-[-12%]' />
                </div>
            </section>
        </>
    )
}

export default Hero;
