import Image from 'next/image'
import React from 'react'

const TrustedBy = () => {
    return (
        <section className='my-10 w-[80%] mx-auto'>
            <h1 className="text-white text- text-center text-xl">Trusted By</h1>
            <div className="my-10 flex justify-between items-center flex-wrap gap-4">
                <Image src="/images/epi.png" alt="1" width={100} height={100} />
                <Image src="/images/cabify.png" alt="1" width={100} height={100} />
                <Image src="/images/thirty.png" alt="1" width={100} height={100} />
                <Image src="/images/octopus.png" alt="1" width={100} height={100} />
                <Image src="/images/dog.png" alt="1" width={100} height={100} />
                <Image src="/images/epi.png" alt="1" width={100} height={100} />
                <Image src="/images/cabify.png" alt="1" width={100} height={100} />
                <Image src="/images/thirty.png" alt="1" width={100} height={100} />
                <Image src="/images/octopus.png" alt="1" width={100} height={100} />
                <Image src="/images/dog.png" className='lg:block hidden' alt="1" width={100} height={100} />
            </div>
            <div className="my-2 border border-dark-gray lg:w-[20%] mx-auto" />
        </section>
    )
}

export default TrustedBy
