import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
export const UpcomingEcosystem = () => {
    return (
        <>
            <section className='w-[95%] lg:w-[85%] mx-auto relative pb-10'>
                <div className="bg-custom-orange h-[100px] w-[100px] lg:h-[220px] lg:w-[320px] z-[-1] filter_blur2 rounded-full absolute left-[37%] top-[50%]" />
                <div className="flex flex-col items-center gap-y-10">
                    <h3 className="text-gradient text-xl font-medium">Upcoming Ecosystem</h3>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium text-center'>Building the Foundation for Seamless Integration</h1>
                    <p className="text-white/75 lg:text-lg text-center w-full lg:w-[70%]">Blenix is developing a robust and interconnected ecosystem, creating a complete suite of platforms and tools that will redefine efficiency, security, and accessibility in the digital world.</p>
                </div>

                <Carousel className="w-full mt-5 md:mt-10">
                    <div className="flex justify-between items-center">
                        <h1 className='text-white text-2xl lg:text-4xl font-medium text-center'>Ecosystem</h1>
                        <div>
                            <CarouselPrevious className=" bg-custom-orange" style={"text-white"} />
                            <CarouselNext className="ml-3 bg-custom-orange" style={"text-white"} />
                        </div>
                    </div>
                    <div className='bg-[#555453] py-7 px-5 rounded-[40px] mt-4'>
                        <CarouselContent className=" ">
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 group relative">
                                    {/* Default card */}
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full border-b-2 py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px]">
                                                <Image src="/images/chain.png" alt="Blenix Chain" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl">Blenix Chain</h1>
                                            <div className="flex flex-col items-center gap-2 mt-5">
                                                <div className="bg-[#FE5900] px-2 py-1 rounded-3xl">
                                                    <h1 className="text-white text-xs">Scalable Blockchain</h1>
                                                </div>
                                                <div className="bg-[#282627] px-2 py-1 rounded-3xl">
                                                    <h1 className="text-white text-xs">Decentralized Network</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>

                                    {/* Hover card */}
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">Blenix Chain</h1>
                                        <p className="text-white md:text-sm">
                                            A high-performance, scalable blockchain that is built to support whole Blenix Services. As the foundation of the entire Blenix ecosystem, this main network delivers the stability and speed businesses need to thrive in a connected, digital world.
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 group relative">
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px] ">
                                                <Image src="/images/blenixwallet.png" alt="Blenix Wallet" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl ">Blenix Wallet</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">SecureWallet</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">DigitalAssets</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">Blenix Wallet</h1>
                                        <p className="text-white md:text-sm">
                                        A secure, user-friendly digital wallet designed to simplify the storage and management of BLX Tokens and other assets across the Blenix ecosystem. Built for both convenience and peace of mind, it ensures users have full control over their holdings—anytime, anywhere
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 group relative">
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px] flex justify-center items-center">
                                                <Image src="/images/nftmarket.png" alt="NFT Marketplace" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl ">NFT Marketplace</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">NFT</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">Marketplace</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">NFT <br /> Marketplace</h1>
                                        <p className="text-white md:text-sm">
                                        A decentralized marketplace that brings creators, collectors, and businesses together. Designed for seamless NFT minting, buying, selling, and auctions, it empowers users to unlock new digital value.
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 group relative">
                                    <div  className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px]">
                                                <Image src="/images/blenixwallet.png" alt="Blenix Wallet" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl ">Blenix Swap</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">SecureWallet</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">DigitalAssets</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">Blenix Swap <br />(DEX)</h1>
                                        <p className="text-white md:text-sm">
                                        A fully decentralized swap platform designed for seamless token exchanges—fast, flexible, and business-ready. Built on the proven Uniswap V2 framework, it powers a dynamic trading experience without middlemen.
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 group relative">
                                    <div  className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px] flex justify-center items-center">
                                                <Image src="/images/crosschain.png" alt="cross Chain" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl ">Blenix Bridge</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">SecureWallet</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">DigitalAssets</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">Blenix Bridge</h1>
                                        <p className="text-white md:text-sm">
                                        A powerful cross-chain bridge that enables seamless asset transfers across different blockchain networks. By enhancing interoperability and liquidity, it ensures users can move their assets freely and maximize their opportunities in a connected blockchain ecosystem.
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>

                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2  group relative">
                                    <div  className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px] flex justify-center items-center">
                                                <Image src="/images/farming.png" alt="farming" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl ">Staking Platform</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">SecureWallet</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">DigitalAssets</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">Staking <br />Platform</h1>
                                        <p className="text-white md:text-sm">
                                        A dynamic staking and liquidity platform that features configurable lock-in periods and reward structures. Users can stake tokens to earn rewards or provide liquidity to unlock additional incentives, driving engagement and growth within Blenix network.
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 group relative">
                                    <div  className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px] ">
                                                <Image src="/images/launchpad.png" alt="launchpad" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl ">Launchpad</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">SecureWallet</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">DigitalAssets</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">Launchpad</h1>
                                        <p className="text-white md:text-sm">
                                        A launchpad platform designed to fuel the growth of new blockchain projects. It enables seamless token fundraising with tiered participation to ensure fair access for users. Built with transparency in mind, it offers real-time sale monitoring and secure fund lock options to build trust and drive long-term success.
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 group relative">
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px]">
                                                <Image src="/images/exchange.png" alt="exchange" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl text-center text-nowrap">Centralized Exchange</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">SecureWallet</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">DigitalAssets</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[#252527] flex flex-col  justify-center gap-6 py-7 px-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h1 className="text-white text-3xl">Centralized <br /> Exchange</h1>
                                        <p className="text-white md:text-sm">
                                        A fully licensed & regulated centralized exchange, ensuring secure, compliant, and efficient trading for users. Designed to meet global regulatory standards, it offers a seamless platform for buying, selling, and managing . The exchange bridges traditional finance and centralzied innovation within Blenix ecosystem.
                                        </p>
                                        <a href="" className="text-white font-medium md:text-sm">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>


                        </CarouselContent>
                    </div>


                </Carousel>

            </section>
        </>
    )
}
