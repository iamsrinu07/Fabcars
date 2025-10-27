"use client";

import { ArrowUp, Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#081016] text-gray-300 pt-12 pb-4 px-6 lg:px-20 relative">
            <div className="container">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 ">
                    {/* Logo & Contact */}
                    <div className="lg:col-span-3">
                        <Link href="/" className="inline-block mb-4">
                            <Image src="/images/logo.png" alt="RolDrive" width={150} height={40} />
                        </Link>
                        <p className="text-sm mb-4 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <p className="text-sm mb-1">+44 (0) 207 112 8101</p>
                        <p className="text-sm mb-4">booking@roldrive.com</p>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                            <Link href="#" aria-label="Facebook" className="hover:text-white">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" aria-label="X" className="hover:text-white">
                                <X size={18} />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="hover:text-white">
                                <Instagram size={18} />
                            </Link>
                            {/* <Link href="#" aria-label="Pinterest" className="hover:text-white">
                            <Pinterest size={18} />
                        </Link> */}
                            <Link href="#" aria-label="LinkedIn" className="hover:text-white">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Fleet */}
                    <div className="lg:col-span-2 ">
                        <h4 className="font-semibold mb-4">Fleet</h4>
                        <ul className="space-y-2 text-sm">
                            {["Business", "First", "Luxury", "Electric", "SUV", "MVP", "Sprinter"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            {["Airport Transfers", "Road Shows", "Intercity Transfers", "Event Transfers", "All Services"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Cities */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-4">Top Cities</h4>
                        <ul className="space-y-2 text-sm">
                            {["London", "Paris", "New York", "Dubai", "Tokyo"].map((city) => (
                                <li key={city}>
                                    <Link href="#" className="hover:text-white transition">
                                        {city}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQ */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-4">FAQ</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white font-medium">Blogs</Link></li>
                            <li><Link href="#" className="hover:text-white font-medium">Career</Link></li>
                            <li><Link href="#" className="hover:text-white font-medium">About Us</Link></li>
                            <li>
                                <Link href="#" className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
                                    Become A Supplier
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center py-4  text-sm space-y-4 md:space-y-0 border-b border-gray-700 ">
                    <div className="flex space-x-4 text-gray-400">
                        <Link href="#" className="hover:text-white">Privacy policy</Link>
                        <Link href="#" className="hover:text-white">GDPR policy</Link>
                        <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                    </div>


                </div>
                {/* Bottom Section */}
                <div className="relative flex flex-col md:flex-row justify-between items-center py-4 text-sm space-y-4 md:space-y-0">


                    <p className="text-gray-400 text-center md:text-right">
                        Copyright ©2024 - RolDrive. All Rights Reserved.
                    </p>
                    {/* Scroll to top button */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="absolute bottom-3 right-0 p-3 bg-white/80 rounded-full hover:bg-white/60 transition cursor-pointer"
                        aria-label="Back to top"
                    >
                        <span className="bg-gray-500 rounded-full p-5 border-2 border-gray-400 block">
                            <ArrowUp size={20} className="text-white" />
                        </span>

                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
