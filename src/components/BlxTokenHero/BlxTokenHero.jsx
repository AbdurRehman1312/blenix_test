"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const BlxTokenHero = ({ currentPage }) => {
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
        <section className='flex justify-between md:flex-row flex-col items-center gap-y-6 min-h-[60vh] py-6 w-[95%] lg:w-[80%] mx-auto'>
            <div className="flex flex-col w-full md:w-[50%]" ref={sectionRef}>
                <h1 className="text-2xl lg:text-4xl text-white font-medium">Your Gateway to Empowering the Future</h1>
                <p className="text-white/75 md:text-lg my-5">Secure your stake in BLX, the utility token driving innovation, transparency, and accountability. Invest in Blenix today and join a movement built on progress and meaningful impact.</p>
                <div className="flex items-center gap-5 md:flex-row flex-col">
                    <Button variant="destructive" className="flex items-center gap-x-3 lg:w-full xl:w-[40%] w-full" onClick={handleScroll}>
                        <span>Claim Your Spot in the Presale</span>
                        <ChevronRight className='text-custom-orange' />
                    </Button>
                    <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" download="Whitepaper.pdf" className='lg:w-full xl:w-[40%] w-full'>
                        <Button variant="secondary" className="flex items-center gap-x-3 w-full">
                            <span>Learn More About BLX</span>
                            <ChevronRight className='text-custom-orange' />
                        </Button>
                    </a>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-[40%] items-end">
                <Image src="/images/blxhero.gif" unoptimized alt="BLX Token" width={500} height={500} />
            </div>
        </section>
    )
}

export default BlxTokenHero
