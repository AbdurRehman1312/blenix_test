"use client"
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
const MineralBacked = () => {
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
            <section className='w-[95%] lg:w-[80%] mx-auto mt-20 bg_glass rounded-[40px] px-5 py-10 lg:p-10 flex justify-between items-center md:flex-row flex-col gap-y-10 min-h-[40vh] md:max-h-[50vh] relative' id="waitlist">
                <div className="w-full md:w-[45%] space-y-5">
                    <h1 className="text-white text-2xl lg:text-4xl font-bold">Ready to Power Change with the BLX Ecosystem?</h1>
                    <h1 className="text-white lg:text-lg">Secure your place in the future of blockchain. Invest in BLX today and turn innovation into opportunity.</h1>
                    <form onSubmit={onSubmit} className='my-5'>
                        <input type="email" name="email" id="" placeholder='Enter your email' className='py-2 w-full lg:w-[70%] pl-3 pr-10 rounded-[10px]' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitted} />
                        <Button variant="secondary" className="flex items-center gap-x-3 md:w-auto w-full mt-5" disabled={isSubmitted}>
                            <span>{isSubmitted ? "Reserved" : "Reserve Your BLX Now"}</span>
                            <ChevronRight className='text-custom-orange' />
                        </Button>
                    </form>
                </div>
                <div className="w-full md:w-[45%] flex justify-center">
                    <Image src="/images/blx2.png" alt="BLX" width={250} height={250} className='blx_shadow2 md:absolute md:bottom-2 bounce-animation md:scale-110 md:pb-10' />
                </div>
            </section>
        </>
    )
}

export default MineralBacked
