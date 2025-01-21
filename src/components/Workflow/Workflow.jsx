"use client"
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use';

const Workflow = () => {
    const textSectionRef = useRef(null);
    const textIntersection = useIntersection(textSectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });
    useEffect(() => {
        const animateText = (elements, shouldFadeIn) => {
            gsap.to(elements, {
                duration: 0.3,
                opacity: shouldFadeIn ? 1 : 0,
                y: shouldFadeIn ? '0%' : '100%',
                ease: "power3.out",
                stagger: 0.2
            });
        };

        if (textIntersection && textIntersection.intersectionRatio >= 0.5) {
            animateText(textSectionRef.current.children, true);
        } else {
            animateText(textSectionRef.current.children, false);
        }
    }, [textIntersection]);
    return (
        <section className='w-[95%] lg:w-[50%] mx-auto relative py-20'>
            <div className="bg-custom-orange h-[100px] w-[100px] lg:h-[420px] lg:w-[420px] z-[-1] filter_blur2 rounded-full absolute left-[37%] top-[50%]" />
            <div className="flex flex-col items-center gap-y-10">
                <h3 className="text-gradient text-xl font-medium">Developers</h3>
                <h1 className='text-white text-2xl lg:text-4xl font-medium text-center'>Build Without Barriers</h1>
                <p className="text-white/75 lg:text-lg text-center">Blenix makes development easy with EVM compatibility and Solidity smart contract support. From seamless integration with tools like Metamask to powerful APIs for custom solutions, Blenix is built to power your next innovation.</p>
                <div className="flex items-center flex-wrap gap-5 justify-center" ref={textSectionRef}>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/binance.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/solana.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/blueicon.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work4.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work5.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work6.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work7.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work8.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work9.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work10.png" alt="1" width={50} height={50} />
                    </div>
                    <div className="lg:w-[13vw] xl:w-[7vw] w-[100px] h-[100px] lg:p-0 p-6 lg:h-[15vh] bg_glass2 rounded-[35px] flex items-center justify-center">
                        <Image src="/images/work11.png" alt="1" width={50} height={50} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workflow
