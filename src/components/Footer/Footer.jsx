"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isBlxTokenRoute = pathname === "/blx-token";
    return (
        <footer className="text-white py-10 lg:w-[80%] w-[95%] mx-auto mt-14">
            <div className="flex flex-col md:flex-row justify-between items-start gap-y-10 lg:gap-0">
                {/* Logo and Description */}
                <div className="flex flex-col items-start space-y-3">
                    <div className="flex items-center gap-3">
                        <Image src="/images/logo2.png" alt="Blenix Logo" width={70} height={70} />
                        <h1 className="text-2xl font-bold">Blenix</h1>
                    </div>
                    <p className="text-sm text-gray-400 w-[70%] md:w-[60%]">
                        Empowering visionaries to build sustainable solutions that matter
                    </p>
                </div>

                {/* Links Sections */}
                <div className="flex justify-between gap-10 lg:gap-x-10 text-sm">
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

                    {/* Testnet */}
                    {/* <div>
                        <h3 className="font-semibold text-lg mb-3">Testnet</h3>
                        <ul className="space-y-2 text-white/70 mt-5">
                            <li>
                                <a href="/bridge" className="hover:text-gray-300">Bridge</a>
                            </li>
                            <li>
                                <a href="/faucet" className="hover:text-gray-300">Faucet</a>
                            </li>
                            <li>
                                <a href="/explorer" className="hover:text-gray-300">Explorer</a>
                            </li>
                            <li>
                                <a href="/wufuswap" className="hover:text-gray-300">Wufuswap</a>
                            </li>
                        </ul>
                    </div> */}

                    {/* Community */}
                    {/* <div>
                        <h3 className="font-semibold text-lg mb-3">Community</h3>
                        <ul className="space-y-2 text-white/70 mt-5">
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
                            </li>
                            <li>
                                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Discord</a>
                            </li>
                            <li>
                                <a href="https://zealy.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Zealy</a>
                            </li>
                            <li>
                                <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Medium</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
