"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import sections from './data';

const BlenixEcosystem = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % sections.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const cutOffPoint = Math.round((activeIndex / (sections.length - 1)) * 100);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: -20 }, // initial state for the image
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.in' }
        );

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, x: -20 }, // initial state for the heading
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.in' } // Added delay to stagger animation
        );

        gsap.fromTo(
            paragraphRef.current,
            { opacity: 0, x: -20 }, // initial state for the paragraph
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.in' } // Added delay to stagger animation
        );
    }, [activeIndex]);
    return (
        <section className='w-[95%] lg:w-[85%] mx-auto my-10 md:my-16'>
            <div className="flex items-start md:flex-row flex-col gap-y-10 justify-between">
                <div className="w-full md:w-[40%]">
                    <h1 className="text-white text-2xl lg:text-4xl font-bold">
                        Blenix Ecosystem
                        Where Blockchain
                        Meets
                        Real-World Mining
                    </h1>
                    {/* <div className="rounded-xl min-h-[45vh] max-w-[2px] relative mt-5 md:block hidden" style={{
                        background: `linear-gradient(to bottom, rgba(254, 89, 0,0.4) 0%, rgba(254, 89, 0, 0.4) ${cutOffPoint}%, rgba(69, 69, 70, 1) ${cutOffPoint}%, rgba(69, 69, 70, 1) 40%)`
                    }}>
                        {sections.map((section, index) => (
                            <div
                                className={`w-[13px] h-[13px] rounded-full absolute bg-${index <= activeIndex ? 'custom-orange orange_shadow2' : 'dark-gray'}`}
                                style={{ top: `${12.5 * index}%`, insetInline: "-270%", cursor: 'pointer' }}
                                onClick={() => setActiveIndex(index)}
                                key={index}
                            ></div>
                        ))}
                    </div> */}
                    <div className="rounded-xl w-full min-h-[3px] relative mt-10" style={{
                        background: `linear-gradient(to right, rgba(254, 89, 0,0.4) 0%, rgba(254, 89, 0, 0.4) ${cutOffPoint}%, rgba(44, 44, 44, 0.4) ${cutOffPoint}%, rgba(44, 44, 44, 0.4) 40%)`
                    }}>
                        {sections.map((section, index) => (
                            <div
                                className={`bg-${index <= activeIndex ? 'custom-orange orange_shadow2' : 'dark-gray'} w-[13px] h-[13px] rounded-full absolute`}
                                style={{ left: `${12.5 * index}%`, insetBlock: "-170%", cursor: 'pointer' }}
                                onClick={() => setActiveIndex(index)}
                                key={index}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-[55%] ">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`w-full rounded-[40px] p-5 bg_glass overflow-hidden min-h-[90vh] lg:min-h-[80vh] xl:min-h-[65vh] flex flex-col justify-evenly ${activeIndex === index ? 'block ' : 'hidden'}`}
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={section.imgSrc}
                                    alt={section.title}
                                    width={`${section.wideImage ? 500 : 270}`}
                                    height={`${section.wideImage ? 500 : 270}`}
                                    className={`${section.wideImage ? 'w-[90%]' : ''} orange_shadow2 mt-5`}
                                    ref={activeIndex === index ? sectionRef : null}
                                />
                            </div>
                            <div className="">
                                <h5 className="lg:text-xl text-white my-2" ref={activeIndex === index ? titleRef : null}>{section.title}</h5>
                                <p className="text-white font-light" ref={activeIndex === index ? paragraphRef : null}>
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlenixEcosystem
