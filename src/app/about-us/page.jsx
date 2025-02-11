import AboutUsHero from '@/components/AboutUsHero/AboutUsHero'
import { AdvanceTech } from '@/components/AdvanceTech/AdvanceTech'
import { CoreValues } from '@/components/CoreValues/CoreValues'
import MissionAndVision from '@/components/MissionAndVision/MissionAndVision'
import WhoWeAre from '@/components/WhoWeAre/WhoWeAre'
import React from 'react'

const AboutUs = () => {
    return (
        <main>
            <AboutUsHero />
            <WhoWeAre />
            <MissionAndVision />
            <AdvanceTech />
            <CoreValues />
        </main>
    )
}

export default AboutUs
