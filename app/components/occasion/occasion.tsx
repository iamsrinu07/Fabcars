
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"


export default function OccasionSection() {

    return (
        <section className="relative w-full  flex items-center bg-gradient-to-t from-[#081017] via-[#20313F] to-[#081017] py-18">


            {/* Content */}
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 justify-between text-white gap-10">
                {/* Left text section */}
                <div className="max-w-[550px] space-y-5 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="text-[#FDC65C]">Chauffeur</span>  Driven Cars for Any Occasion
                    </h2>
                    <p className="text-gray-200 text-base">
                        Whether it’s an event, corporate travel or a personalised journey, we provide tailored chauffeur solutions across London. Share your requirements and we’ll respond within minutes — our average reply time is under 3 minutes — with detailed pricing and a call or email back to finalise your arrangements.
                    </p>
                    <p className="text-gray-200 font-bold text-base">
                        Seamless, reliable and discreet — every journey handled with exceptional care.

                    </p>

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
                        <div className="flex items-center mt-4 flex-wrap gap-4">
                            <div className="flex gap-4">

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 rounded-2xl accent-[#FDC65C]"
                                    />
                                    <span>Call me</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 rounded-2xl accent-[#FDC65C]"
                                    />
                                    <span>Email me</span>
                                </div>
                            </div>

                            <div className="ml-10 flex-1  flex  gap-2 items-center w-full">
                                <span className="border-b  border-[#414141] w-full">

                                </span>
                                <span className="whitespace-nowrap text-[#4C4C4C]">
                                    Reply within 3minutes
                                </span>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Right booking card */}
                <Card className="bg-[#223544]/20 rounded-2xl border-0 text-white w-full max-w-[642px] ">
                    <CardContent className="px-6 space-y-5">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-center">
                            Have a  <span className="text-[#FDC65C]">Special</span>  Requirement?
                        </h2>
                        <p className="text-gray-200 text-center mvb-3">
                            Every journey is unique. Whether it's a corporate roadshow, VIP event, or private sightseeing, we create a tailored chauffeur package for you.
                        </p>

                        {/* Inputs */}
                        <div className="mb-4">
                            <div className="mb-1  text-xs">
                                Name
                            </div>
                            <div className="relative">
                                <Input
                                    placeholder="Enter your name"
                                    className="bg-[#223544] py-6 px-6  border-none text-white placeholder-gray-400"
                                />

                            </div>


                        </div>
                        <div className="mb-4">
                            <div className="mb-1  text-xs">
                                Email
                            </div>
                            <div className="relative">
                                <Input
                                    placeholder="Enter your email"
                                    className="bg-[#223544] py-6 px-6  border-none text-white placeholder-gray-400"
                                />

                            </div>


                        </div>
                        <div className="mb-4">
                            <div className="mb-1  text-xs">
                                Phone Number
                            </div>
                            <div className="relative">
                                <Input
                                    placeholder="Enter your phone number"
                                    className="bg-[#223544] py-6 px-6  border-none text-white placeholder-gray-400"
                                />

                            </div>


                        </div>
                        <div className="flex items-center mt-4 flex-wrap gap-4">
                            <div className="flex gap-4 ">

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 rounded-2xl accent-[#FDC65C]"
                                    />
                                    <span>Call me</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 rounded-2xl accent-[#FDC65C]"
                                    />
                                    <span>Email me</span>
                                </div>
                            </div>

                            <div className="ml-10 flex-1  flex  gap-2 items-center w-full">
                                <span className="border-b  border-[#414141] w-full">

                                </span>
                                <span className="whitespace-nowrap text-[#4C4C4C]">
                                    Reply within 3 minutes
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="mb-1  text-xs">
                                Provide your Brief Requirement
                            </div>
                            <div className="relative">
                                <Textarea rows={5}
                                    placeholder="Enter your name"
                                    className="bg-[#223544] py-6 px-10  border-none text-white placeholder-gray-400"
                                />

                            </div>


                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <Button className="flex-1 p-6 bg-orange-600 hover:bg-orange-700 text-white">
                                Submit Requirements
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
