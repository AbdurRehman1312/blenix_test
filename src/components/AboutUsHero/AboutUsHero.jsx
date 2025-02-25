import React from 'react'
import { Button } from '../ui/button'

const AboutUsHero = () => {
    return (
        <section className='flex justify-center mt-24 lg:mt-32 text-center flex-col items-center gap-y-6 min-h-[70vh] py-6 w-[95%] lg:w-[55%] mx-auto'>
            <h1 className="text-4xl lg:text-5xl font-medium text-gradient">Built on Vision, Engineered for the Future</h1>
            <p className="text-white font-semibold text-lg">Blenix Chain is a result of cutting-edge research and real-world expertise, built by a team dedicated to driving the future of advanced technology.</p>
            <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" download="Whitepaper.pdf" className='w-[80%] lg:w-[40%] xl:w-[30%] '>
                <Button variant="outline" className="w-full bg_gradient4">
                    Explore Blenix Chain Today
                </Button>
            </a>
        </section>
    )
}

export default AboutUsHero
