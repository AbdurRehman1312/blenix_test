import React from 'react'
import { Button } from '../ui/button'

const EcosystemHero = () => {
    return (
        <section className='flex justify-center mt-24 lg:mt-32 text-center flex-col items-center gap-y-6 min-h-[70vh] py-6 w-[95%] lg:w-[55%] mx-auto'>
            <h1 className="text-4xl lg:text-5xl font-medium text-gradient">Empowering a Digital Future with Blenix Ecosystem</h1>
            <p className="text-white font-semibold text-lg">A connected, scalable, and feature-rich ecosystem designed to power the next era of digital innovation.</p>
            <Button variant="outline" className="w-[80%] lg:w-[30%] bg_gradient4">
                Explore Blenex Chain Today
            </Button>
        </section>
    )
}

export default EcosystemHero
