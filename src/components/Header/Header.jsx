"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";

const NavLink = ({ href, children, onClick, disabled }) => {
    return (
        <span
            onClick={disabled ? undefined : onClick}
            className={`text-white hover:text-custom-gold ${disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer"}`}
        >
            {disabled ? children : <Link href={href}>{children}</Link>}
        </span>
    );
};

const Logo = ({ src, width, height, alt, onClick }) => (
    <Link href='/' onClick={onClick}>
        <Image src={src} alt={alt} width={width} height={height} />
    </Link>
);

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const scrollToTop = () => window.scrollTo({ top: 0 });

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "BLX Token", href: "/blx-token", disabled: false },
        { name: "Join Waitlist", href: "#waitlist" },
    ].map(({ name, href, disabled, onClick }) => (
        <NavLink href={href} key={name} disabled={disabled} onClick={() => { setToggle(false); if (onClick) onClick(); }}>
            {name}
        </NavLink>
    ));

    return (
        <>
            <header className="hidden z-[10] relative lg:flex justify-between items-center py-3 w-full lg:w-[80%] mx-auto px-3 lg:px-0">
                <div className="flex items-center gap-x-8">
                    <Logo src="/images/logo.png" alt="Logo" width={100} height={100} />
                </div>
                <div className="lg:flex items-center gap-x-12 hidden">
                    {/* <div className="bg-custom-orange h-[70px] z-[-1] filter_blur rounded-[10px] w-[80%] absolute inset-x-[10%]" /> */}
                    {navLinks}
                </div>
                <Button variant="default">Whitepaper</Button>
            </header>

            <header className="flex w-[95%] mx-auto py-4 relative items-center justify-between lg:hidden">
                {/* <div className="bg-custom-orange h-[70px] z-[-1] filter_blur rounded-[10px] w-[80%] absolute inset-x-[10%]" /> */}
                <Logo src="/images/logo.png" alt="logo" width={70} height={70} onClick={scrollToTop} />
                <button className='flex-1 flex justify-end' onClick={() => setToggle(true)}>
                    <Image src="/icons/menu.png" alt="Menu Icon" width={30} height={30} />
                </button>
            </header>

            {toggle && (
                <div className='fixed sidebar lg:hidden top-0 z-50 left-0 w-[80%] h-full bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-dark-gray h-screen w-full px-5 py-5'>
                        <div className="flex justify-between my-6">
                            <Logo src="/images/logo.png" alt="logo" width={70} height={70} />
                            <button onClick={() => setToggle(false)}>
                                <Image src="/icons/close.png" alt="Close Icon" width={30} height={30} />
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-y-4 mt-10">
                            {navLinks}
                        </div>
                        <div className="flex justify-center mt-7">
                            <Button variant="default">Whitepaper</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
