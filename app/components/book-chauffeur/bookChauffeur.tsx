
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, MapPin, Plus, ArrowRight, Equal, CirclePlus, Route } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faCalendar, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export default function BookChauffeur() {
    const [activeTab, setActiveTab] = useState<"transfer" | "hourly">("transfer");

    return (
        <section className="relative w-full  flex items-center bg-[#081017]/30 py-18">
            {/* Background image */}
            <Image
                src="/images/re-bg.png"
                alt="Luxury Chauffeur"
                fill
                priority
                className="object-cover -z-10"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#081017]/60 -z-10" />

            {/* Content */}
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between text-white gap-10">
                {/* Left text section */}
                <div className="w-full max-w-[650px] p-4 space-y-5 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="text-[#FDC65C]">Book Your London </span>
                        Chauffeur Today
                    </h1>
                    <p className="text-gray-200 text-base">
                        From Heathrow transfers to corporate roadshows, secure your chauffeur with RolDrive. Availability is limited during peak seasons — book now.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <div className="flex items-center space-x-2">
                            <Image src="/images/call.png" alt="Phone" width={24} height={24} />
                            <span>+44 204 592 0966</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src="/images/email.png" alt="Phone" width={24} height={24} />

                            <span>booking@roldrive.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-white/20 p-3 rounded-full">
                                <Image src="/images/whatsapp-2.png" alt="Phone" width={24} height={24} />
                            </span>
                        </div>
                    </div>
                    <div className="w-full border-t-2 border-dashed border-gray-700 pt-6">
                        <p className="text-[#FDC65C] italic">Trusted by Leading Companies</p>
                        <div className="flex flex-wrap  justify-center lg:justify-start lg:flex-nowrap gap-4 ">
                            <Image
                                src="/images/goldman-sachs-1.png"
                                alt="Company Logos"
                                width={73}
                                height={61}
                                className="mx-auto lg:mx-0 mt-4 w-16"
                            />
                            <Image
                                src="/images/goldman-sachs-2.png"
                                alt="Company Logos"
                                width={73}
                                height={61}

                                className="mx-auto lg:mx-0 mt-4 w-16"
                            />
                            <Image
                                src="/images/goldman-sachs-3.png"
                                alt="Company Logos"
                                width={73}
                                height={61}
                                className="mx-auto lg:mx-0 mt-4 w-16"
                            />
                            <Image
                                src="/images/goldman-sachs-4.png"
                                alt="Company Logos"
                                width={73}
                                height={61}
                                className="mx-auto lg:mx-0 mt-4 w-16"
                            />
                            <Image
                                src="/images/goldman-sachs-5.png"
                                alt="Company Logos"
                                width={73}
                                height={61}
                                className="mx-auto lg:mx-0 mt-4 w-16"
                            />
                            <Image
                                src="/images/goldman-sachs-6.png"
                                alt="Company Logos"
                                width={73}
                                height={61}
                                className="mx-auto lg:mx-0 mt-4 w-16"
                            />
                            <Image
                                src="/images/goldman-sachs-7.png"
                                alt="Company Logos"
                                width={73}
                                height={61}
                                className="mx-auto lg:mx-0 mt-4 w-16"
                            />
                        </div>
                    </div>


                </div>

                {/* Right booking card */}
                <Card className="bg-black/5 backdrop-blur-lg border border-white/10 text-white w-full shadow-amber-50/25 shadow-lg max-w-md ">
                    <CardContent className="px-6 space-y-5">
                        {/* Tabs */}
                        <div className="flex items-center rounded-md overflow-hidden gap-3">
                            <Button
                                variant={activeTab === "transfer" ? "default" : "ghost"}
                                className={`flex-1 border border-[#828282] rounded-full p-6 ${activeTab === "transfer"
                                    ? "bg-[#223544] text-white border-white"
                                    : "bg-[#223544]/10 text-[#828282] border-[#828282]"
                                    }`}
                                onClick={() => setActiveTab("transfer")}
                            >
                                <FontAwesomeIcon icon={faRoute} className=" right-3 w-4 h-4" />  Transfer
                            </Button>
                            <Button
                                variant={activeTab === "hourly" ? "default" : "ghost"}
                                className={`flex-1 border  rounded-full p-6 ${activeTab === "hourly"
                                    ? "bg-[#223544] text-white border-white"
                                    : "bg-[#223544]/10 text-[#828282] border-[#828282]"
                                    }`}
                                onClick={() => setActiveTab("hourly")}
                            >
                                <Clock className=" right-3 w-4 h-4" /> Hourly
                            </Button>
                        </div>

                        {/* Inputs */}
                        <div className="">
                            <div>
                                Pick Up
                            </div>
                            <div className="relative mb-3">
                                <Input
                                    placeholder="Enter pick up location"
                                    className="bg-[#223544] py-6 px-10  border-none text-white placeholder-gray-400"
                                />
                                <FontAwesomeIcon icon={faLocationDot} className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                                <Equal className="absolute right-3 top-4 w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                                Drop Off
                            </div>
                            <div className="relative mb-3">
                                <Input
                                    placeholder="Enter drop off location"
                                    className="bg-[#223544] py-6 px-10  border-none text-white placeholder-gray-400"
                                />
                                <FontAwesomeIcon icon={faLocationDot} className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                                <Equal className="absolute right-3 top-4 w-4 h-4 text-gray-400" />
                                <span
                                    className="flex gap-1 items-center text-yellow-400 hover:bg-transparent hover:text-yellow-500 text-sm py-2"
                                >
                                    <CirclePlus className="w-4 h-4 mr-1" />  Add Stop
                                </span>
                            </div>



                            <div className="flex gap-2 mb-3">
                                <div className="relative flex-1">
                                    <Input
                                        placeholder="Pick up date"
                                        className="bg-[#223544] py-6 px-10  border-none text-white placeholder-gray-400"
                                    />
                                    <FontAwesomeIcon icon={faCalendar} className="absolute left-3 top-4 w-4 h-4 text-gray-400" />

                                </div>
                                <div className="relative flex-1 mb-3">
                                    <Input
                                        placeholder="Pick up time"
                                        className="bg-[#223544] py-6 px-10  border-none text-white placeholder-gray-400"
                                    />
                                    <FontAwesomeIcon icon={faClock} className="absolute left-3 top-4 w-4 h-4 text-gray-400" />

                                </div>

                            </div>
                            <div className="border-t border-[#B2B2B2] mb-3"></div>

                            <span
                                className="flex gap-1 items-center text-yellow-400 hover:bg-transparent hover:text-yellow-500 text-sm py-2"
                            >
                                <CirclePlus className="w-4 h-4 mr-1" /> Add Return Journey
                            </span>


                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-3 flex-wrap">
                            <Button className="flex-1 p-6 bg-orange-600 hover:bg-orange-700 text-white">
                                Calculate Price
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1 p-6 border-white text-white bg-transparent hover:text-white hover:bg-[#605f5f]"
                            >
                                <Image
                                    src="/images/whatsapp.png"
                                    alt="WhatsApp"
                                    width={48}
                                    height={48}
                                    className="mr-2 w-6 h-6"
                                />
                                Chat on WhatsApp
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
