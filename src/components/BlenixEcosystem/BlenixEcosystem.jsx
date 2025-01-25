"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const BlenixEcosystem = () => {
    const sections = [
        {
            title: "BLENIX CHAIN",
            imgSrc: "/images/blenixchain.png",
            description: `A secure, scalable blockchain that is built to support whole Blenix Services.
                          As the foundation of the entire Blenix ecosystem, this main network delivers
                          the stability and speed businesses need to thrive in a connected, digital world.`
        },
        {
            title: "BLENIX WALLET",
            imgSrc: "/images/blenixwallet.png",
            description: `A secure, user-friendly digital wallet designed to simplify the storage and
                          management of BLX Tokens and other assets across the Blenix ecosystem.
                          Built for both convenience and peace of mind, it ensures users have full
                          control over their holdings—anytime, anywhere.`
        },
        {
            title: "NFT MARKETPLACE",
            imgSrc: "/images/nftmarketplace.png",
            description: `A decentralized marketplace that brings creators, collectors, and
                          businesses together. Designed for seamless NFT minting, buying, selling,
                          and auctions, it empowers users to unlock new digital value.`,
            wideImage: true
        },
        {
            title: "DECENTRALIZED EXCHANGE (DEX)",
            imgSrc: "/images/dex.png",
            description: `A fully decentralized swap platform designed for seamless token
                          exchanges—fast, flexible, and business-ready. Built on the proven
                          Uniswap V2 framework, it powers a dynamic trading experience without
                          middlemen.`
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % sections.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const cutOffPoint = Math.round((activeIndex / (sections.length - 1)) * 100);

    return (
        <section className='w-[95%] lg:w-[85%] mx-auto my-20'>
            <div className="flex items-start md:flex-row flex-col gap-y-10 justify-between">
                <div className="w-full md:w-[40%]">
                    <h1 className="text-white text-2xl lg:text-4xl font-bold">
                        Blenix Ecosystem
                        Where Blockchain
                        Meets
                        Real-World Mining
                    </h1>
                    <div className="rounded-xl min-h-[25vh] max-w-[2px] relative mt-5 md:block hidden" style={{
                        background: `linear-gradient(to bottom, rgba(254, 89, 0,0.4) 0%, rgba(254, 89, 0, 0.4) ${cutOffPoint}%, rgba(44, 44, 44, 0.4) ${cutOffPoint}%, rgba(44, 44, 44, 0.4) 40%)`
                    }}>
                        {sections.map((section, index) => (
                            <div
                                className={`w-[13px] h-[13px] rounded-full absolute bg-${index <= activeIndex ? 'custom-orange orange_shadow2' : 'dark-gray'}`}
                                style={{ top: `${27 * index}%`, insetInline: "-270%", cursor: 'pointer' }}
                                onClick={() => setActiveIndex(index)}
                                key={index}
                            ></div>
                        ))}
                    </div>
                    <div className="rounded-xl w-full min-h-[2px] relative mt-10 md:hidden block" style={{
                        background: `linear-gradient(to right, rgba(254, 89, 0,0.4) 0%, rgba(254, 89, 0, 0.4) ${cutOffPoint}%, rgba(44, 44, 44, 0.4) ${cutOffPoint}%, rgba(44, 44, 44, 0.4) 40%)`
                    }}>
                        {sections.map((section, index) => (
                            <div
                                className={`bg-${index <= activeIndex ? 'custom-orange orange_shadow2' : 'dark-gray'} w-[13px] h-[13px] rounded-full absolute`}
                                style={{ left: `${30 * index}%`, insetBlock: "-250%", cursor: 'pointer' }}
                                onClick={() => setActiveIndex(index)}
                                key={index}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-[55%]">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`w-full rounded-[40px] p-5 bg_glass transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={section.imgSrc}
                                    alt={section.title}
                                    width={`${section.wideImage ? 500 : 350}`}
                                    height={`${section.wideImage ? 500 : 350}`}
                                    className={`${section.wideImage ? 'w-[90%]' : ''} orange_shadow2 mt-5`}
                                />
                            </div>
                            <h5 className="lg:text-xl text-white my-2">{section.title}</h5>
                            <p className="text-white font-light">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlenixEcosystem
