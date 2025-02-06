"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const PreSaleHero = ({ currentPage }) => {
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
        <section className='flex justify-between mt-24 lg:mt-44 md:flex-row flex-col items-stretch gap-y-6 min-h-[60vh] py-6 w-[95%] lg:w-[80%] mx-auto'>
            <div className="flex flex-col items-center w-full md:w-[40%]" ref={sectionRef}>
                <h1 className="text-2xl lg:text-4xl text-white font-medium">Shape the Future of Finance, Be DeFiant</h1>
                <p className="text-white/75 md:text-lg my-5">Blinex empowers your investments with blockchain-backed, real-world assets.</p>
                <Image src="/images/blx.png" alt="community" width={350} height={350} className='blx_shadow animate-pulse' />
            </div>
            <div className="flex flex-col w-full md:w-[55%] items-end bg-[#33373a] rounded-[40px] p-10">
            </div>
        </section>
    )
}

export default PreSaleHero
