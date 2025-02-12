import Connect from "@/components/Connect/Connect"
import EcosystemHero from "@/components/EcosystemHero/EcosystemHero"
import Exclusivity from "@/components/Exclusivity/Exclusivity"
import { UpcomingEcosystem } from "@/components/UpcomingEcosystem/UpcomingEcosystem"

const Ecosystem = () => {
    return (
        <main className=''>
            <EcosystemHero />
            <UpcomingEcosystem />
            <Exclusivity />
            <Connect />
        </main>
    )
}

export default Ecosystem
