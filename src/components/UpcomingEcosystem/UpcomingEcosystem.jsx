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
            <section className='w-[95%] lg:w-[80%] mx-auto relative pb-10'>
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
                            <CarouselPrevious className=" bg-[#FE5900]" />
                            <CarouselNext className="ml-3 bg-[#FE5900]" />
                        </div>
                    </div>
                    <div className='bg-[#555453] py-7 px-5 rounded-[40px] mt-4'>
                        <CarouselContent className=" ">
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 ">
                                    <div className=''>
                                        <div className="w-full  border-b-2  py-8 px-5 flex flex-col gap-y-3 items-center">
                                            <div className="w-[120px] h-[120px]">
                                                <Image src="/images/chain.png" alt="Blenix Chain" width={120} height={120} />
                                            </div>
                                            <h1 className="text-white text-2xl ">Blenix Chain</h1>
                                            <div className='flex flex-col items-center gap-2 mt-5'>
                                                <div className='bg-[#FE5900] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">Scalable Blockchain</h1>
                                                </div>
                                                <div className='bg-[#282627] px-2 py-1 rounded-3xl'>
                                                    <h1 className="text-white text-xs">Decentralized Network</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[40px] h-[40px] mt-5">
                                            <Image src="/icons/globe.png" alt="chain" width={40} height={40} />
                                        </div>
                                    </div>

                                </div>

                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 ">
                                    <div>
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
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 ">
                                    <div>
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
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 ">
                                    <div>
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
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 ">
                                    <div className=''>
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

                                </div>
                           
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <div className="p-1 pl-2 ">
                                    <div>
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
                                </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 ">
                                    <div>
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
                                </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 pl-2 ">
                                    <div>
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
                                </div>
                                </CarouselItem>
                        </CarouselContent>
                    </div>


                </Carousel>

            </section>
        </>
    )
}
