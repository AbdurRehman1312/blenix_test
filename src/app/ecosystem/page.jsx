import Connect from "@/components/Connect/Connect"
import EcosystemHero from "@/components/EcosystemHero/EcosystemHero"
import Exclusivity from "@/components/Exclusivity/Exclusivity"
import { FutureEcosystem } from "@/components/FutureEcosystem/FutureEcosystem"
import { UpcomingEcosystem } from "@/components/UpcomingEcosystem/UpcomingEcosystem"

const Ecosystem = () => {
    return (
        <main className=''>
            <EcosystemHero />
            <UpcomingEcosystem />
            <FutureEcosystem />
            <Exclusivity />
            <Connect />
        </main>
    )
}

export default Ecosystem
