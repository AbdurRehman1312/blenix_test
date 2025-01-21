"use client"
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs({ style }) {
    const [openItem, setOpenItem] = useState(null);
    const handleToggleItem = (value) => {
        setOpenItem(openItem === value ? null : value);
    };
    return (
        <div className={`lg:w-[80%] w-[95%] mx-auto my-10 py-5 lg:py-10`}>
            <h2 className="text-gradient font-semibold text-center lg:text-lg">Frequently Asked Questions</h2>
            <h1 className='text-2xl lg:text-4xl text-center text-white font-bold my-6'>
                Everything You Need to Know About Blenix
            </h1>
            <h3 className="lg:text-lg text-white/70 text-center">General Blockchain Questions</h3>
            <Accordion
                type="single"
                collapsible
                className="w-full text-white p-6 flex flex-col gap-6"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger isOpen={openItem === 'item-1'} onClick={() => handleToggleItem('item-1')}>
                        What is blockchain, and how does it work?
                    </AccordionTrigger>
                    <AccordionContent>
                        Blockchain is a decentralized digital ledger that records transactions across many computers, ensuring transparency and security.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger isOpen={openItem === 'item-2'} onClick={() => handleToggleItem('item-2')}>
                        What makes blockchain secure?
                    </AccordionTrigger>
                    <AccordionContent>
                        It’s powered by cryptography and consensus mechanisms, meaning no single entity can alter the records.
                    </AccordionContent>
                </AccordionItem>
                {/* <AccordionItem value="item-3">
                    <AccordionTrigger isOpen={openItem === 'item-3'} onClick={() => handleToggleItem('item-3')}>
                        How is blockchain different from traditional databases?
                    </AccordionTrigger>
                    <AccordionContent>
                        Unlike traditional databases, blockchain is decentralized, transparent, and
                        tamper-proof.
                    </AccordionContent>
                </AccordionItem> */}
                <AccordionItem value="item-4">
                    <AccordionTrigger isOpen={openItem === 'item-4'} onClick={() => handleToggleItem('item-4')}>
                        Is Blenix environmentally friendly?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes! Blenix is built to support digital solutions that prioritize environmental responsibility, empowering progress with transparency and accountability.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger isOpen={openItem === 'item-5'} onClick={() => handleToggleItem('item-5')}>
                        How can I buy BLX tokens?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can join our presale waitlist or participate during our initial coin offering (ICO).
                    </AccordionContent>
                </AccordionItem>
                {/* <AccordionItem value="item-6">
                    <AccordionTrigger isOpen={openItem === 'item-6'} onClick={() => handleToggleItem('item-6')}>
                        Is Blenix environmentally friendly?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes! Blenix prioritizes ethical gold sourcing and aligns with modern sustainability goals.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger isOpen={openItem === 'item-7'} onClick={() => handleToggleItem('item-7')}>
                        What can I do with BLX tokens?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can trade them, stake them, use them for payments, or even participate in
                        governance decisions for the Blenix ecosystem.
                    </AccordionContent>
                </AccordionItem> */}
            </Accordion>
        </div>
    );
}