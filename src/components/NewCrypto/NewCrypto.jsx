import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
export const NewCrypto = () => {
    return (
        <section className='w-[95%] lg:w-[80%] mx-auto mt-20 bg_gradient11 rounded-[40px] px-5 py-10 lg:px-10 lg:py-24 flex justify-between items-center md:flex-row flex-col gap-y-10  relative'>
            <div className="w-full md:w-[45%] flex justify-center">
                <Image src="/images/blx3.png" alt="BLX" width={370} height={370} className='blx_shadow2 md:absolute md:top-[10px] lg:top-[80px] xl:top-[60px] bounce-animation md:scale-110 md:pb-10' />
            </div>
            <div className="w-full md:w-[45%] space-y-5">
                <span className="text-white lg:text-lg" >New</span>
                <h1 className="text-white text-2xl lg:text-4xl font-bold">Are you new to crypto?</h1>
                <h1 className="text-white lg:text-lg">Find out more about how to start your journey in crypto, install a wallet and buy tokens, study our lightpaper to be aware of all the important details.</h1>
                <div className='flex items-center gap-x-3'>
                <Button variant="destructive" className="flex items-center gap-x-3 md:w-auto w-full " >
                    <span>How to buy</span>
                    <ChevronRight className='text-black' />
                </Button>

                <Button variant="outline" className="flex items-center gap-x-3 md:w-auto w-full " >
                    <span>Web3 wallet</span>
                    <ChevronRight className='text-white' />
                </Button>
                </div>
                
            </div>

        </section>
    )
}
