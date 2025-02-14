"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isBlxTokenRoute = pathname === "/blx-token";
    return (
        <footer className="text-white pt-10 pb-3 lg:w-[80%] w-[95%] mx-auto mt-14 px-2 lg:px-0">
            <div className="flex flex-col md:flex-row justify-between items-start gap-y-10 lg:gap-0">
                {/* Logo and Description */}
                <div className="flex flex-col items-center lg:items-start space-y-3">
                    <div className="flex items-center gap-3">
                        <Image src="/images/logo2.png" alt="Blenix Logo" width={70} height={70} />
                        <h1 className="text-2xl font-bold">Blenix</h1>
                    </div>
                    <p className="text-sm lg:text-start text-center text-gray-400 w-[70%] md:w-[60%]">
                        Empowering visionaries to build sustainable solutions that matter
                    </p>
                </div>

                {/* Links Sections */}
                <div className="flex justify-between gap-10 lg:gap-x-20 text-sm w-full md:w-auto">
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-white/70 mt-5">
                            <li>
                                <Link href="/" className="hover:text-gray-300">Home</Link>
                            </li>
                            <li>
                                <Link href="/blx-token" className="hover:text-gray-300">BLX Token</Link>
                            </li>
                            <li>
                                <Link href={isBlxTokenRoute ? "/" : "#waitlist"} className="hover:text-gray-300">Join Waitlist</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Follow Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                        <div className="flex items-center gap-x-4">
                            <a href="http://www.x.com/blxchain" target='_blank'>
                                <Image src="/icons/x.png" alt="twitter" width={20} height={20} className='mt-3 opacity-70' />
                            </a>
                            <a href="https://t.me/blenixchain" target='_blank'>
                                <Image src="/icons/tele.png" alt="twitter" width={20} height={20} className='mt-3 opacity-70' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm text-center text-gray-400 mt-6 pt-4 border-t border-gray-700">
                Copyright &copy; 2025 Blenix Chain Technology INC. | All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
