"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import gsap from "gsap";
import Image from 'next/image';
const Hero = ({ currentPage }) => {
    const sectionRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const textElements = Array.from(sectionRef.current.children);

        const fadeIn = () => {
            gsap.fromTo(textElements, {
                opacity: 0,
                y: -20,
            }, {
                duration: 4,
                opacity: 1,
                y: 0,
                ease: "power4.out",
                stagger: 0.1,
            });
        };

        if (!loaded) {
            fadeIn();
            setLoaded(true);
        }
    }, [currentPage]);
    const handleScroll = () => {
        const waitlistSection = document.getElementById("waitlist");
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="relative min-h-[80vh] mt-24 lg:mt-28 px-3 lg:px-0 flex md:flex-row flex-col-reverse gap-y-6 md:items-center md:justify-between overflow-hidden">
                <div className="bg-custom-orange lg:block hidden h-[70px] z-[-1] filter_blur rounded-[10px] w-[35%] absolute right-[-12%]" />
                <div className="bg-custom-orange md:hidden h-[70px] z-[-1] filter_blur rounded-[10px] w-[35%] absolute top-40 right-[-12%]" />
                <div className="w-full md:w-[60%] flex flex-col gap-y-6 lg:pl-28 xl:pl-40 md:pt-0 pt-[236px]" ref={sectionRef}>
                    <h1 className="text-4xl lg:text-5xl font-medium text-gradient">Unleash the Power of Blockchain for a Sustainable Future</h1>
                    <p className="text-white/75 font-semibold text-lg">Blenix blends cutting-edge blockchain technology with sustainability-driven solutions—because meaningful change demands strong foundation.</p>
                    <p className="text-white text-xl font-semibold">Own the future - Join our presale waitlist today!</p>
                    <Button variant="outline" onClick={handleScroll} className="w-[50%] lg:w-[30%] bg_gradient4">
                        Get Started
                    </Button>
                </div>
                <div className="w-full md:w-[40%] z-[10] flex justify-end">
                    <Image src="/images/herocircle.png" alt="Hero" width={255} height={255} className=' animate-rotate md:hidden absolute bottom-4 right-[-28%] top-0' />
                    <Image src="/images/herocircle.png" alt="Hero" width={500} height={500} className=' animate-rotate hidden md:block md:absolute md:bottom-4 md:right-[-28%] lg:bottom-4 xl:bottom-8 lg:right-[-18%] xl:right-[-12%]' />
                </div>
            </section>
        </>
    )
}

export default Hero;
