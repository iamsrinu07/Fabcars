import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    MapPin,
    Bell,
    CreditCard,
    Smartphone,
    Shield,
    ArrowRight,
    Download
} from "lucide-react";
import Image from "next/image";

const AppPromotion = () => {
    const features = [
        { icon: <Smartphone className="h-5 w-5" />, title: "Manage Bookings" },
        { icon: <MapPin className="h-5 w-5" />, title: "Real-time Tracking" },
        { icon: <CreditCard className="h-5 w-5" />, title: "Secure Payment" },
        { icon: <Bell className="h-5 w-5" />, title: "Instant Notifications" },
        { icon: <Shield className="h-5 w-5" />, title: "Safe & Reliable" },
    ];

    return (
        <section className="bg-[#081017] px-4 md:px-0 py-12">
            <div className="container">
                <div className="rounded-lg bg-[#20313F] p-3 flex flex-wrap   flex-col md:flex-row w-full md:mt-40">
                    <div className="md:w-1/2 p-6 text-white">
                        <h2 className="text-xl  md:text-4xl font-bold mb-4">Luxury Chauffeurs, On Demand — Anytime, Anywhere</h2>
                        <p className=" mb-4">Book, manage and track your chauffeur with ease using the RolDrive mobile app. Stay in control of your journeys
                            with instant notifications, live updates and 24/7 availability.</p>
                        <ul className="flex flex-wrap gap-4">
                            <li className="md:w-1/2 flex items-center gap-3"> <span className="bg-[#FDC65C] w-3 h-3 rounded-full"></span> Manage bookings on the go</li>
                            <li className="md:w-1/2 flex items-center gap-3"> <span className="bg-[#FDC65C] w-3 h-3 rounded-full"></span>
                                Live chauffeur and flight tracking
                            </li>
                            <li className="md:w-1/2 flex items-center gap-3"> <span className="bg-[#FDC65C] w-3 h-3 rounded-full"></span>
                                Secure in-app payments
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-=4">

                            <Image src="/images/playstore.png" alt="App Store Badges" width={136} height={40} className="mt-6 w-34 cursor-pointer" />
                            <Image src="/images/appstore.png" alt="App Store Badges" width={136} height={40} className="mt-6 w-34 cursor-pointer" />
                        </div>

                    </div>
                    <div className="md:w-1/2" >
                        <div className="relative flex justify-baseline items-center">

                            <span className="relative text-[#FDC65C] whitespace-nowrap mt-12 z-0 ">
                                Download Now
                                <Image src="/images/shap2.png" alt="App Mockup" width={200} height={200} className="absolute -z-2 -right-10 -mt-35" />
                            </span>

                            <div className="absolute bg-gradient-to-t from-[#20313F]  to-[#081017]/0 bottom-0 left-0 w-full h-full z-1 md:-mb-5"></div>
                            <Image src="/images/iPhone.png" alt="App Mockup" width={500} height={600} className="md:-mt-30 z-0 " />
                            <Image src="/images/shap1.png" alt="App Mockup" width={200} height={200} className="md:-mb-12" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppPromotion;