import React from 'react'
import Image from 'next/image'
export const FutureEcosystem = () => {
    return (
        <>
            <section className='w-[95%] lg:w-[80%] mx-auto mt-10 pb-10'>
                <div className="flex flex-col items-center gap-y-10">
                    <h3 className="text-gradient text-xl font-medium">Future Ecosystem</h3>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium text-center'>Expanding the Boundaries of Innovation</h1>
                    <p className="text-white/75 lg:text-lg text-center w-full lg:w-[70%]">Blenix is not just building for today—it’s pioneering the future with next-generation solutions that will drive mass adoption, financial innovation, and Web3 expansion.</p>
                </div>
                <div className="flex justify-between lg:justify-start xl:justify-between items-stretch mt-12 lg:gap-x-3 xl:gap-x-1 gap-y-5 flex-wrap w-full">
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/graph.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Derivatives Trading</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Leverage</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Derivatives Trading</h1>
                            <p className="text-white md:text-sm">
                                Derivatives Trading – Unlock advanced financial instruments to enhance investment opportunities.
                            </p>

                        </div>

                    </div>

                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full h-full bg-[#1D1D1D] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/network.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">DePIN Network</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Onchain</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">DePIN Network</h1>
                            <p className="text-white md:text-sm">
                            Decentralized physical infrastructure for efficient, trustless, and scalable
                            operations
                            </p>

                        </div>

                    </div>
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-3 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/ball.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Real-World Assets</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Tokenized</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Real-World Assets</h1>
                            <p className="text-white md:text-sm">
                            Bringing tangible assets on-chain through tokenization, enhancing liquidity and accessibility.
                            </p>

                        </div>

                    </div>
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/flash.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Flash Loans</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Instant Liquidity</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Flash Loans</h1>
                            <p className="text-white md:text-sm">
                            Instant, uncollateralized loans for sophisticated DeFi strategies and automated trading.
                            </p>

                        </div>

                    </div>

                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-3 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/crypto.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Crypto Marketplace</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Trade Onchain</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Crypto Marketplace</h1>
                            <p className="text-white md:text-sm">
                            A decentralized hub for buying, selling, and trading digital and real-world assets.
                            </p>

                        </div>

                    </div>
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-2 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/game.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Gaming & Metaverse</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Play2Earn</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Gaming & Metaverse</h1>
                            <p className="text-white md:text-sm">
                            Integrating blockchain into gaming, virtual economies, and immersive digital experiences.
                            </p>

                        </div>

                    </div>
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/dev.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Infrastructure Dev</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Build To Scale</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Infrastructure Dev</h1>
                            <p className="text-white md:text-sm">
                            Strengthening blockchain frameworks for global adoption and scalability.
                            </p>

                        </div>

                    </div>
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/web3.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Web3 Expansion</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">NextGen Web</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Web3 Expansion</h1>
                            <p className="text-white md:text-sm">
                            Driving the next evolution of the internet by building decentralized applications and services.
                            </p>

                        </div>

                    </div>
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/staking.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Liquid Staking</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Stake & Earn</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Liquid Staking</h1>
                            <p className="text-white md:text-sm">
                            Allowing users to stake assets while maintaining liquidity for further investments.
                            </p>

                        </div>

                    </div>
                    <div className='w-full md:w-[48%] lg:w-[23%] xl:w-[19%] group relative'>

                        <div className="w-full  h-full bg-[#1D1D1D] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3 items-center group-hover:opacity-0 transition-opacity duration-300">
                            <div className="w-[55px] h-[55px] rounded-full p-2 flex justify-center items-center border border-[#676767]  hover:animate-pulse">
                                <div className="w-[46px] h-[47px] bg-[#3a3a3a] rounded-full p-2 flex shrink-0 justify-center items-center">
                                    <Image src="/icons/payment.png" alt="code" width={50} height={50} />
                                </div>
                            </div>
                            <h1 className="text-white text-2xl text-center font-medium">Payments</h1>
                            <div className="bg-[#FF7B34] px-2 py-1 rounded-3xl">
                                <h1 className="text-white text-xs">Pay with Crypto</h1>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[#FE5900] rounded-[20px] py-8 px-5 flex flex-col justify-center gap-y-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-white text-2xl">Payments</h1>
                            <p className="text-white md:text-sm">
                            Seamless, secure crypto-based payment solutions for global transactions.
                            </p>

                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}
