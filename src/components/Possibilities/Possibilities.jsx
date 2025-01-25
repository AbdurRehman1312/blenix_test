"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useIntersection } from 'react-use'
import { Button } from '../ui/button'
import { ChevronLast, ChevronRight } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Possibilities = () => {
    const handleScroll = () => {
        const waitlistSection = document.getElementById("waitlist");
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [usersCount, setUsersCount] = useState(0);
    const [companiesCount, setCompaniesCount] = useState(0);

    useEffect(() => {
        const usersTarget = 65; // 65M
        const companiesTarget = 25; // 25%
        const duration = 2000; // Animation duration in ms
        const stepTime = 10; // Update interval

        const incrementUsers = usersTarget / (duration / stepTime);
        const incrementCompanies = companiesTarget / (duration / stepTime);

        const usersInterval = setInterval(() => {
            setUsersCount((prev) => {
                if (prev + incrementUsers >= usersTarget) {
                    clearInterval(usersInterval);
                    return usersTarget;
                }
                return prev + incrementUsers;
            });
        }, stepTime);

        const companiesInterval = setInterval(() => {
            setCompaniesCount((prev) => {
                if (prev + incrementCompanies >= companiesTarget) {
                    clearInterval(companiesInterval);
                    return companiesTarget;
                }
                return prev + incrementCompanies;
            });
        }, stepTime);

        return () => {
            clearInterval(usersInterval);
            clearInterval(companiesInterval);
        };
    }, []);
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
    return (
        <>
            <section className='my-20 lg:pt-32 w-[90%] lg:w-[85%] mx-auto'>
                <h3 className="text-gradient font-medium">Possibilities</h3>
                <div className="flex lg:flex-row flex-col justify-between items-start mt-5 gap-y-10">
                    <div className="w-full md:w-[40%]">
                        <h1 className="text-white text-xl lg:text-4xl font-bold">How Can Blenix Supercharge Your Vision?</h1>
                        <p className="mt-5 text-white/70 lg:text-xl">Empower innovation with a blockchain built for impact.</p>
                    </div>
                    <div className="w-full lg:w-[55%] flex flex-wrap gap-10 justify-between text-start">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><h1 className="text-white/70 text-lg lg:text-2xl font-semibold underline">Smart Contracts</h1></TooltipTrigger>
                                <TooltipContent className="max-w-sm text-center">
                                    <p>Automate complex workflows to save time, resources, and storage by leveraging secure and decentralized systems.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <h1 className="text-white/70 text-lg lg:text-2xl font-semibold underline">Environmental Tokenization</h1>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-sm text-center">
                                    <p>Digitize sustainability efforts backed by real-time Proof of Reserve.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <h1 className="text-white/70 text-lg lg:text-2xl font-semibold underline">Decentralized Governance</h1>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-sm text-center">
                                    <p>Enable transparent, tamper-proof voting systems for organizations while securely storing records on a decentralized network for auditability and trust.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <h1 className="text-white/70 text-lg lg:text-2xl font-semibold underline">Frictionless Payments</h1>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-sm text-center">
                                    <p>Process secure, instant transactions that reduce costs and complexity.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </section>
            <section className="bg_gradient relative overflow-hidden flex justify-center items-center md:flex-row flex-col-reverse gap-y-10 py-28">
                <div className="bg_gradient2 rounded-full w-[130px] h-[130px] absolute right-[-20%] lg:right-[-4%] inset-y-[20%]" />
                <div className="w-[95%] lg:w-[40%] relative flex justify-center md:justify-start">
                    <Image src="/images/bitcoinshield.png" alt="1" width={350} height={350} className='z-10 blx_shadow' />
                    <div className="bg_gradient2 rounded-full w-[130px] h-[130px] absolute inset-x-[4%] bottom-[4%] bounce-animation" />
                </div>
                <div className="w-[95%] lg:w-[40%] relative" ref={sectionRef}>
                    <div className="space-y-10">
                        <h1 className="text-white text-2xl lg:text-4xl font-bold">
                            Blockchain Built on Trust, Powered by Sustainability
                        </h1>
                        <p className="text-white font-light">
                            Innovators and businesses around the world are turning to Blenix to drive progress and create solutions that matter. By combining transparency, scalability, and accountability, Blenix empowers users to eliminate inefficiencies, streamline processes, and build impactful applications that contribute to a better future.
                            <br />
                            <br />
                            Because a tamper-proof, scalable blockchain isn’t just the future—it’s the foundation for it.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="space-y-2 text-center">
                                <h1 className="text-gradient2 text-3xl lg:text-5xl font-bold text-center">
                                    {usersCount.toFixed()}M+
                                </h1>
                                <p className="text-white">Blockchain Users Globally</p>
                            </div>
                            <div className="space-y-2 text-center">
                                <h1 className="text-gradient2 text-3xl lg:text-5xl font-bold text-center">
                                    {Math.round(companiesCount)}%
                                </h1>
                                <p className="text-white">Companies Already Using Blockchain Tech</p>
                            </div>
                        </div>
                        <Button variant="destructive" onClick={handleScroll} className="flex items-center gap-x-3">
                            <span>Join the revolution</span>
                            <ChevronRight className='text-black' />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Possibilities
