"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#081016]/95 text-white w-full sticky top-0 z-50 shadow-md">
            <div className="container max-w-[1314px] mx-auto flex items-center justify-between gap-12 px-4 py-3 md:py-4">
                {/* Logo */}{/* left Side */}
                <Link href="/" className="flex items-center space-x-1">
                    <Image
                        src="/images/logo.png"
                        alt="Roldrive Logo"
                        width={155}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </Link>


                <nav className="hidden md:flex flex-1 space-x-6 text-sm font-medium">
                    <Link href="#" className="hover:text-gray-300">Services</Link>
                    <Link href="#" className="hover:text-gray-300">Fleet</Link>
                    <Link href="#" className="hover:text-gray-300">Business Solutions</Link>
                    <Link href="#" className="hover:text-gray-300">Cities</Link>
                    <Link href="#" className="hover:text-gray-300">Airport Transfers</Link>
                </nav>
                {/* left Side end */}
                {/* Right Side */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Contact Us */}
                    <Link href="#" className="flex items-center space-x-1 hover:text-green-400">
                        <Image src="/images/whatsapp.png" alt="WhatsApp" width={48} height={48} className="w-5 h-5" />
                        <span>Contact Us</span>
                    </Link>

                    {/* Language Dropdown */}
                    <div className="relative group ">
                        <button
                            type="button"
                            className="flex items-center border border-[#CED5E5] px-4 py-2 rounded-md"
                        >
                            Eng <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        <div className="absolute hidden group-hover:block bg-white text-gray-700 rounded-md shadow-md mt-0 overflow-hidden right-0">
                            <button className="block w-full px-4 py-2 hover:bg-gray-100 text-left cursor-pointer">English</button>
                            <button className="block w-full px-4 py-2 hover:bg-gray-100 text-left cursor-pointer">French</button>
                        </div>
                    </div>

                    {/* Sign In */}
                    <Link
                        href="/signin"
                        className="bg-white text-[#2B3A42] px-4 py-2 rounded-md font-medium hover:bg-gray-100"
                    >
                        Sign In
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden bg-[#2B3A42]/50  border-t border-gray-700">
                    <nav className="flex flex-col p-4 space-y-3 text-sm font-medium">
                        <Link href="#" className="hover:text-gray-300">Services</Link>
                        <Link href="#" className="hover:text-gray-300">Fleet</Link>
                        <Link href="#" className="hover:text-gray-300">Business Solutions</Link>
                        <Link href="#" className="hover:text-gray-300">Cities</Link>
                        <Link href="#" className="hover:text-gray-300">Airport Transfers</Link>
                        <Link href="#" className="flex items-center space-x-1 hover:text-green-400">
                            <Image src="/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
                            <span>Contact Us</span>
                        </Link>
                        <Link
                            href="/signin"
                            className="bg-white text-[#2B3A42] px-3 py-2 rounded-md text-center"
                        >
                            Sign In
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
