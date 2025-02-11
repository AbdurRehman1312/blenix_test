"use client"
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use';

const Exclusivity = () => {
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
        <section className='w-[95%] lg:w-[80%] mx-auto relative pb-10'>
            <div className="flex flex-col items-center gap-y-10">
                <h3 className="text-gradient text-xl font-medium">Exclusivity</h3>
                <h1 className='text-white text-2xl lg:text-4xl font-medium text-center'>Be the First to Experience the Ecosystem</h1>
                <p className="text-white/75 lg:text-lg text-center w-full lg:w-[70%]">BLX Token isn’t just a utility token—it’s your key to priority access within the Blenix ecosystem. As we roll out new platforms and features, BLX holders will be among the first to explore, test, and benefit from the expanding ecosystem.</p>
            </div>
            <div className="flex items-stretch justify-between md:flex-row flex-wrap gap-5 mt-8" ref={sectionRef}>
                <div className="bg-dark-gray rounded-[20px] py-8 pr-6 w-full md:w-[48%] xl:w-[49%]">
                    <Image src="/images/exclu1.png" alt="1" width={150} height={150} />
                    <h3 className="lg:text-2xl pl-5 text-lg text-white my-2">Priority Entry to New Platforms</h3>
                    <p className="text-white pl-5 font-light">Gain early access to Blenix Chain, Blenix Wallet, NFT Marketplace, and more before public release.</p>
                </div>
                <div className="bg-dark-gray rounded-[20px] py-8 pr-6 w-full md:w-[48%] xl:w-[49%]">
                    <Image src="/images/exclu2.png" alt="1" width={250} height={250} />
                    <h3 className="lg:text-2xl pl-5 text-lg text-white my-2">Exclusive Presale & Beta Testing Opportunities</h3>
                    <p className="text-white pl-5 font-light">Participate in closed beta launches, providing feedback that shapes the ecosystem.</p>
                </div>
                <div className="bg-dark-gray rounded-[20px] py-8 pr-6 w-full md:w-[48%] xl:w-[49%]">
                    <Image src="/images/exclu3.png" alt="1" width={150} height={150} />
                    <h3 className="lg:text-2xl pl-5 text-lg text-white my-2">Enhanced Staking & Farming Rewards</h3>
                    <p className="text-white pl-5 font-light">Early adopters can maximize their rewards through premium staking and liquidity incentives.</p>
                </div>
                <div className="bg-dark-gray rounded-[20px] py-8 pr-6 w-full md:w-[48%] xl:w-[49%]">
                    <Image src="/images/exclu4.png" alt="1" width={150} height={150} />
                    <h3 className="lg:text-2xl pl-5 text-lg text-white my-2">VIP Access to Launchpad & Listings</h3>
                    <p className="text-white pl-5 font-light">Get preferred allocation for token launches and exclusive trading opportunities.</p>
                </div>
            </div>
        </section>
    )
}

export default Exclusivity
