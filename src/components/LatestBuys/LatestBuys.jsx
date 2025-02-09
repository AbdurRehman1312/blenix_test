import React from 'react';

const transactions = Array(8).fill({
    age: "in 1 minute",
    txHash: "0x74967a1813934f9Ede17A829C34715Ee508123",
    holder: "0x9462a1813934f9Ede17A829C34715Ee588888888",
    amount: "13,559.45$BLX",
});

export const LatestBuys = () => {

    const truncateAddress = (address) => {
        return `${address.slice(0, 7)} ... ${address.slice(-5)}`;
    };
    return (
        <section className='w-[95%] lg:w-[85%] mx-auto my-10'>
            <h1 className='text-white text-2xl lg:text-4xl text-center font-medium my-5'>Latest $BLX Buys</h1>
            <div className='border border-[#595959] rounded-[20px] overflow-x-auto p-4 mt-6 md:mt-12 no_scrollbar'>
                <table className="w-full border-separate border-spacing-y-4">
                    <thead>
                        <tr className="text-white/50 text-sm md:text-lg text-left">
                            <th className="px-4 ">AGE</th>
                            <th className="px-4">TX HASH</th>
                            <th className="px-4">HOLDER</th>
                            <th className="px-4">$BLX AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody className='bg-primary'>
                        {transactions.map((tx, index) => (
                            <tr
                                key={index}
                                className="text-white text-left bg-[#595959] rounded-lg  text-sm lg:text-lg overflow-hidden"
                            >
                                <td className="px-4 py-3 rounded-l-2xl">{tx.age}</td>
                                <td className="px-4 py-3">{truncateAddress(tx.txHash)}</td>
                                <td className="px-4 py-3 font-medium truncate max-w-xs">{tx.holder}</td>
                                <td className="px-4 py-3 font-medium rounded-r-2xl">{tx.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
