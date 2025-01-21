"use client"
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
const MineralBacked = () => {
    return (
        <>
            <section className='w-[95%] lg:w-[80%] mx-auto mt-20 bg_glass rounded-[40px] px-5 py-10 lg:p-10 flex justify-between items-center md:flex-row flex-col gap-y-10 min-h-[40vh] md:max-h-[50vh] relative'>
                <div className="w-full md:w-[45%] space-y-5">
                    <h1 className="text-white text-2xl lg:text-4xl font-bold">Ready to Power Change with the BLX Ecosystem?</h1>
                    <h1 className="text-white lg:text-lg">Secure your place in the future of blockchain. Invest in BLX today and turn innovation into opportunity.</h1>
                    <Button variant="destructive" className="flex items-center gap-x-3 md:w-auto w-full">
                        <span>Reserve Your BLX Now</span>
                        <ChevronRight className='text-black' />
                    </Button>
                </div>
                <div className="w-full md:w-[45%] flex justify-center">
                    <Image src="/images/blx2.png" alt="BLX" width={250} height={250} className='blx_shadow2 md:absolute md:bottom-2 bounce-animation md:scale-110 md:pb-10' />
                </div>
            </section>
        </>
    )
}

export default MineralBacked
