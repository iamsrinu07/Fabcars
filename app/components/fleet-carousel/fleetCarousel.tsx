"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Wifi,
    MapPin,
    Droplet,
    Baby,
    Users,
    Briefcase,
} from "lucide-react";

const fleetData = [
    {
        name: "Mercedes E-Class",
        desc: "The smart executive choice for everyday business travel and airport transfers.",
        image: "/images/car-pic.png",
        features: [
            { icon: Wifi, text: "Wifi Available" },
            { icon: MapPin, text: "GPS Tracking" },
            { icon: Droplet, text: "Water Available" },
            { icon: Baby, text: "Child seat Available" },
            { icon: Users, text: "Max 3" },
            { icon: Briefcase, text: "Max 2" },
        ],
        prices: [
            { label: "Heathrow to Central London", price: "£149.40" },
            { label: "4 hours hire", price: "£255.40" },
            { label: "Round trip", price: "£220.00" },
        ],
    },
    {
        name: "Mercedes S Class",
        desc: "The benchmark for first-class executive travel, offering exceptional comfort and prestige.",
        image: "/images/car-pic.png",
        features: [
            { icon: Wifi, text: "Wifi Available" },
            { icon: MapPin, text: "GPS Tracking" },
            { icon: Droplet, text: "Water Available" },
            { icon: Baby, text: "Child seat Available" },
            { icon: Users, text: "Max 3" },
            { icon: Briefcase, text: "Max 2" },
        ],
        prices: [
            { label: "Heathrow to Central London", price: "£149.40" },
            { label: "4 hours hire", price: "£255.40" },
            { label: "Round trip", price: "£220.00" },
        ],
    },
    {
        name: "Mercedes V Class",
        desc: "Spacious executive travel for families, groups and VIP movements in total comfort.",
        image: "/images/car-pic.png",
        features: [
            { icon: Wifi, text: "Wifi Available" },
            { icon: MapPin, text: "GPS Tracking" },
            { icon: Droplet, text: "Water Available" },
            { icon: Baby, text: "Child seat Available" },
            { icon: Users, text: "Max 3" },
            { icon: Briefcase, text: "Max 2" },
        ],
        prices: [
            { label: "Heathrow to Central London", price: "£149.40" },
            { label: "4 hours hire", price: "£255.40" },
            { label: "Round trip", price: "£220.00" },
        ],
    },
    {
        name: "Mercedes V Class",
        desc: "Spacious executive travel for families, groups and VIP movements in total comfort.",
        image: "/images/car-pic.png",
        features: [
            { icon: Wifi, text: "Wifi Available" },
            { icon: MapPin, text: "GPS Tracking" },
            { icon: Droplet, text: "Water Available" },
            { icon: Baby, text: "Child seat Available" },
            { icon: Users, text: "Max 3" },
            { icon: Briefcase, text: "Max 2" },
        ],
        prices: [
            { label: "Heathrow to Central London", price: "£149.40" },
            { label: "4 hours hire", price: "£255.40" },
            { label: "Round trip", price: "£220.00" },
        ],
    },
];

export default function FleetCarousel() {
    return (
        <section className="py-12 bg-gradient-to-b from-[#081017] via-[#20313F] to-[#081017] text-white">
            <div className="container">

                <div className="text-center mb-10">

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-[#FDC65C]">Our Luxury</span> Chauffeur Driven Fleet
                    </h2>
                    <p className="text-lg text-white max-w-4xl mx-auto">
                        Choose from our selection of premium chauffeur-driven vehicles, ideal for airport transfers, corporate travel, and VIP movements across London.
                    </p>
                </div>

                <Carousel className="mx-auto">
                    <CarouselContent>
                        {fleetData.map((car, index) => (
                            <CarouselItem key={index} className="md:basis-1/3">
                                <Card className="bg-[#0e1b28] border-none text-white shadow-lg overflow-hidden p-0 rounded-md ">
                                    <CardContent className="p-0 flex flex-col h-full">
                                        <h3 className="text-xl font-semibold text-center mb-2 p-2">
                                            {car.name}
                                        </h3>
                                        <p className="text-sm text-gray-300 text-center mb-4  px-2">{car.desc}</p>

                                        <div className="flex justify-center  px-2">
                                            <Image
                                                src={car.image}
                                                alt={car.name}
                                                width={300}
                                                height={300}
                                                className="object-cover w-full h-auto"
                                            />
                                        </div>

                                        <div className="flex justify-between flex-wrap gap-4 mt-3 md:-mt-3 text-sm text-gray-300  px-2">
                                            {car.features.map((f, i) => (
                                                <div key={i} className="flex flex-col items-center w-1/4 md:w-[50px]">
                                                    <span className="p-3 bg-[#20313F]/95 rounded-sm mb-2"><f.icon size={16} className="text-[#FDC65C]" /></span>

                                                    <span className="text-[10px] text-center">{f.text}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 px-2  border-b border-t border-gray-700 py-2 text-sm">
                                            {car.prices.map((p, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex justify-between py-2 text-gray-200 ${i !== car.prices.length - 1 ? "border-b border-gray-700" : ""
                                                        }`}
                                                >
                                                    <span>{p.label}</span>
                                                    <span className="text-[#FDC65C]">{p.price}</span>
                                                </div>
                                            ))}

                                        </div>
                                        <p className="text-[11px] text-right text-gray-400 mt-1 px-2">
                                            Prices Subject to VAT
                                        </p>
                                        <div className="w-full p-2">

                                            <Button
                                                className="mt-4 bg-[#FDC65C] text-white rounded-sm cursor-pointer p-4 font-medium hover:bg-[#FDC65C]/90 min-w-40"
                                            >
                                                Book Now
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute hidden md:block top-1/2 left-0 md:-left-3 cursor-pointer -translate-y-1/2 z-10 bg-white/20 hover:bg-yellow-600 p-2 rounded-full border-0 curcer-pointer" />
                    <CarouselNext className="absolute  hidden md:block top-1/2 cursor-pointer right-0 md:-right-3 -translate-y-1/2 z-10 bg-white/20 hover:bg-yellow-600 p-2 rounded-full border-0 curcer-pointer" />
                </Carousel>

                <div className="text-center mt-10">
                    <Button variant="outline" className="border-[#FF5302] text-white bg-transparent cursor-pointer min-w-40 p-4 hover:bg--[#FF5302]/90 hover:text-white">
                        View all vehicles
                    </Button>
                </div>
            </div>
        </section>
    );
}
