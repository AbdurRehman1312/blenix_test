import { BenefitsBlx } from "@/components/BenefitsBlx/BenefitsBlx"
import { LatestBuys } from "@/components/LatestBuys/LatestBuys"
import { NewCrypto } from "@/components/NewCrypto/NewCrypto"
import PreSaleHero from "@/components/PreSaleHero/PreSaleHero"

const Presale = () => {
    return (
        <main className=''>
            <PreSaleHero />
            <LatestBuys />
            <BenefitsBlx />
            <NewCrypto  />
        </main>
    )
}

export default Presale
