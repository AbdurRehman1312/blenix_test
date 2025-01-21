import BackedBy from '@/components/BackedBy/BackedBy'
import BlenixSmartChoice from '@/components/BlenixSmartChoice/BlenixSmartChoice'
import BlxTokenHero from '@/components/BlxTokenHero/BlxTokenHero'
import Ico from '@/components/Ico/Ico'
import IntroBLX from '@/components/IntroBLX/IntroBLX'
import JoinWaitList from '@/components/JoinWaitList/JoinWaitList'
import MineralBacked from '@/components/MineralBacked/MineralBacked'
import RoadMap from '@/components/RoadMap/RoadMap'
import Workflow from '@/components/Workflow/Workflow'
import React from 'react'

const BLXToken = () => {
    return (
        <main className=''>
            <BlxTokenHero />
            <Ico />
            <BlenixSmartChoice />
            <IntroBLX />
            <RoadMap />
            <BackedBy />
            <MineralBacked />
            {/* <Workflow /> */}
            {/* <div className="mt-10">
                <JoinWaitList />
            </div> */}
        </main>
    )
}

export default BLXToken
