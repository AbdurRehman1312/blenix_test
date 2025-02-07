"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Progress } from "../ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';

const PreSaleHero = ({ currentPage }) => {
    const sectionRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])


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
                <Image src="/images/blx.png" alt="community" width={350} height={350} className='blx_shadow animate-pulse mt-10' />
            </div>
            <div className="flex flex-col w-full md:w-[60%] xl:w-[55%] items-start bg-[#33373a] rounded-[40px] p-7">
                <h1 className='text-white text-2xl lg:text-4xl text-center font-medium my-5'>Buy <span className='text-gradient3 '>$BLX</span> Token</h1>
                <div className='flex justify-center w-[100%] mt-3 mb-1'>
                    <p className='text-white/45 text-sm md:text-md '>1 $BLX</p>
                </div>
                <div className='w-[100%] flex items-center'>
                    <div className='w-[42%] pb-[3px] bg_gradient5 rounded-r-lg' />
                    <h1 className='w-[18%] text-white text-lg  pb-[3px] lg:text-2xl text-center  '>$ 0.05</h1>
                    <div className='w-[42%] pb-[3px] bg_gradient6 rounded-l-lg' />
                </div>

                <div className='flex justify-between w-[100%] md:px-1 mt-7 mb-2'>
                    <p className='text-white text-sm md:text-md '>7.75M tokens sold</p>
                    <p className='text-white/45 text-sm md:text-md '>12.75M tokens remaining</p>
                </div>
                <Progress value={progress} />
                <div className='w-[100%] pb-[2.2px] bg_gradient8 mt-10 ' />

                <h1 className="text-xl mt-4 text-white ">You Deposit</h1>

                <Tabs defaultValue="usdt" className="">
                    <TabsList>
                        <TabsTrigger value="usdt"><Image src="/images/usdt.png" alt="community" width={24} height={24} className='me-1' /> ETH</TabsTrigger>
                        <TabsTrigger value="usdc"><Image src="/images/usdc.png" alt="community" width={25} height={25} className='me-1' /> USDC</TabsTrigger>
                        <TabsTrigger value="usdct"><Image src="/images/usdct.png" alt="community" width={23} height={23} className='me-1' /> USDCT</TabsTrigger>
                        <TabsTrigger value="btc" className="me-0"><Image src="/images/btc.png" alt="community" width={26} height={26} className='me-1' /> BTC</TabsTrigger>
                    </TabsList>
                    <TabsContent value="usdt">
                        <div className="flex items-center justify-between w-full   p-2 rounded-lg border border-[#595959] mt-7">
                        <div className='flex items-center'>
                        <Image src="/images/usdt.png" alt="community" width={25} height={25} className='me-1' />
                            <input
                                type="text"
                                placeholder="0.00"
                                // value={amount}
                                // onChange={(e) => setAmount(e.target.value)}
                                className=" w-[50%] bg-transparent text-white text-lg px-2 outline-none"
                            />
                        </div>
                        
                            <button className="bg-[#595959] w-[50%] md:w-[30%] xl:w-[25%] text-[#858688] px-5 py-1 rounded-lg text-sm md:text-md cursor-not-allowed">
                                Max Amount
                            </button>
                        </div>
                    </TabsContent>
                    <TabsContent value="usdc">
                    <div className="flex items-center justify-between w-full   p-2 rounded-lg border border-[#595959] mt-7">
                        <div className='flex items-center'>
                        <Image src="/images/usdc.png" alt="community" width={25} height={25} className='me-1' />
                            <input
                                type="text"
                                placeholder="0.00"
                                // value={amount}
                                // onChange={(e) => setAmount(e.target.value)}
                                className=" w-[50%] bg-transparent text-white text-lg px-2 outline-none"
                            />
                        </div>
                        
                            <button className="bg-[#595959] w-[50%] md:w-[30%] xl:w-[25%] text-[#858688] px-5 py-1 rounded-lg text-sm md:text-md cursor-not-allowed">
                                Max Amount
                            </button>
                        </div>
                    </TabsContent>
                    <TabsContent value="usdct">
                    <div className="flex items-center justify-between w-full   p-2 rounded-lg border border-[#595959] mt-7">
                        <div className='flex items-center'>
                        <Image src="/images/usdct.png" alt="community" width={25} height={25} className='me-1' />
                            <input
                                type="text"
                                placeholder="0.00"
                                // value={amount}
                                // onChange={(e) => setAmount(e.target.value)}
                                className=" w-[50%] bg-transparent text-white text-lg px-2 outline-none"
                            />
                        </div>
                        
                            <button className="bg-[#595959] w-[50%] md:w-[30%] xl:w-[25%] text-[#858688] px-5 py-1 rounded-lg text-sm md:text-md cursor-not-allowed">
                                Max Amount
                            </button>
                        </div>
                    </TabsContent>
                    <TabsContent value="btc">
                    <div className="flex items-center justify-between w-full   p-2 rounded-lg border border-[#595959] mt-7">
                        <div className='flex items-center'>
                        <Image src="/images/btc.png" alt="community" width={25} height={25} className='me-1' />
                            <input
                                type="text"
                                placeholder="0.00"
                                // value={amount}
                                // onChange={(e) => setAmount(e.target.value)}
                                className=" w-[50%] bg-transparent text-white text-lg px-2 outline-none"
                            />
                        </div>
                        
                            <button className="bg-[#595959] w-[50%] md:w-[30%] xl:w-[25%] text-[#858688] px-5 py-1 rounded-lg text-sm md:text-md cursor-not-allowed">
                                Max Amount
                            </button>
                        </div>
                    </TabsContent>
                </Tabs>

                <div className='flex justify-center w-[100%] mt-5 mb-1'>
                    <p className='text-white/45 text-sm md:text-md '>You will receive</p>
                </div>
                <div className='w-[100%] flex items-center'>
                    <div className='w-[42%] pb-[3px] bg_gradient5 rounded-r-lg' />
                    <h1 className='w-[18%] text-white text-lg  pb-[3px] lg:text-2xl text-center  '>0 $BLX</h1>
                    <div className='w-[42%] pb-[3px] bg_gradient6 rounded-l-lg' />
                </div>

                <div className='w-full mt-7 flex  justify-between'>
                    <Button variant="outline" className="w-[48%] bg_gradient9 rounded-2xl py-8 md:text-lg  ">
                    Connect Wallet
                            </Button>
                            <button className=" border border-[#FD5A01] text-[#FD5A01]  w-[48%] rounded-2xl md:text-lg">
                                Max Amount
                            </button>
                </div>
                <div className='flex justify-center flex-col items-center w-[100%] mt-5 mb-1'>
                    <p className='text-white text-sm md:text-md '>Don't have a wallet? <Link href="https://www.worldlibertyfinancial.com/intl/web3-wallets" target='_blank' className='text-[#FD5A01]'>Learn more</Link></p>
                    <p className='text-white text-sm md:text-md text-center mt-2'>Please carefully review the <Link href="https://www.worldlibertyfinancial.com/intl/token-sale-terms-and-conditions" target='_blank'>Token Sale Terms & Conditions</Link>, <Link href="https://static.worldlibertyfinancial.com/docs/intl/gold-paper.pdf" target='_blank'> Gold Paper</Link>, <Link href="https://www.worldlibertyfinancial.com/intl/risk-disclosures">Risk Disclosures</Link> and other disclosures on this site, before accepting the Terms and purchasing $BLX tokens and beginning to participate in governance*.</p>
                </div>

            </div>
        </section>
    )
}

export default PreSaleHero
