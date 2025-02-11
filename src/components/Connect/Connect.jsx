"use client"
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useIntersection } from 'react-use';
import { Button } from '../ui/button';

const Connect = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const validateEmail = (email) => {
        return email.trim() !== "" && email.includes("@");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitted) return;
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        const formData = new FormData();
        formData.append('Email', email);

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzoFWZNOgrajJGFCSZi-8Alc05v1VnWayefEX1KQ5lZ83awwV7ztTNvobkjI0e-WLRPrg/exec", {
                method: "POST",
                mode: 'no-cors',
                body: formData
            });
            toast.success('Submitted Successfully');
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error:', error);
            toast.success('Submission Failed');
        }
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <section className='w-[95%] lg:w-[80%] mx-auto relative py-10'>
                <div className="flex flex-col items-center gap-y-10">
                    <h3 className="text-gradient text-xl font-medium">Connect</h3>
                    <h1 className='text-white text-2xl lg:text-4xl font-medium text-center'>Stay Updated—Get Exclusive Blenix Updates</h1>
                    <p className="text-white/75 lg:text-lg text-center w-full lg:w-[70%]">Blenix ecosystem is expanding, and as we roll out new innovations, BLX holders and early supporters will get exclusive updates, priority access, and early participation opportunities.</p>
                    <p className="text-white font-medium lg:text-lg text-center w-full lg:w-[70%]">Sign up for our mailing list to stay ahead of the latest developments, launches, and rewards!</p>
                    <form onSubmit={onSubmit} className='flex items-center w-full md:w-[80%] lg:w-[50%] mx-auto md:flex-row flex-col gap-2'>
                        <input type="email" name="email" id="" placeholder='Enter your email' className=' h-10 w-full lg:w-[70%] pl-3 pr-10 rounded-[10px]' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitted} />
                        <button className="flex bg-custom-orange items-center gap-x-3 justify-center text-white h-10 w-[80%] lg:w-[40%] rounded-[10px]" disabled={isSubmitted}>
                            <span>{isSubmitted ? "Subscribed" : "Subscribe Now"}</span>
                        </button>
                    </form>
                    <p className="text-white font-medium lg:text-lg text-center w-full lg:w-[70%]">Join our official Telegram group now!</p>
                    <button className="flex bg-custom-orange items-center gap-x-3 justify-center text-white h-10 w-[80%] md:w-[25%] lg:w-[15%] rounded-[10px]">
                        <span>Join telegram</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Connect
